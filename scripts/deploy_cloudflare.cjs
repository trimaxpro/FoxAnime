const { execSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

console.log('=== Step 1: Building project for production ===');
execSync('npm run build', { stdio: 'inherit' });

console.log('=== Step 2: Injecting ad scripts into dist/index.html (directly deployed, unexposed on Git) ===');
const distHtmlPath = path.resolve(__dirname, '../dist/index.html');
let html = fs.readFileSync(distHtmlPath, 'utf8');

const headAdScripts = `
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5711344674702800" crossorigin="anonymous"></script>
  <script defer data-cfasync="false" type="text/javascript" src="https://pl31463086.profitableratecpmnetwork.com/9a/81/c1/9a81c13ddc605a7f3595bd6581407010.js"></script>
</head>`;

const bodyAdScripts = `
  <div id="root"></div>
  <script src="/anti-adblock.js"></script>
  <script data-cfasync="false" type="text/javascript" src="https://pl31463087.profitableratecpmnetwork.com/58/b7/27/58b727313de205b83e69459b2e6fee91.js"></script>`;

html = html.replace('</head>', headAdScripts);
html = html.replace('<div id="root"></div>', bodyAdScripts);

fs.writeFileSync(distHtmlPath, html, 'utf8');
console.log('Injected ad scripts into dist/index.html');

// Ensure anti-adblock.js is in dist
const antiAdblockSrc = path.resolve(__dirname, '../public/anti-adblock.js');
const antiAdblockDest = path.resolve(__dirname, '../dist/anti-adblock.js');
if (fs.existsSync(antiAdblockSrc)) {
  fs.copyFileSync(antiAdblockSrc, antiAdblockDest);
  console.log('Copied anti-adblock.js to dist/');
}

console.log('=== Step 3: Deploying dist/ to Cloudflare Pages via Wrangler ===');
execSync('npx wrangler pages deploy dist --project-name foxanime --branch main', { stdio: 'inherit' });

console.log('=== Cloudflare deployment complete! ===');
