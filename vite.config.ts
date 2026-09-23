import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'node:fs';

function animeSitesApiPlugin(): Plugin {
  return {
    name: 'anime-sites-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';
        if (url === '/api/sites' || url === '/api/sites/') {
          try {
            // First attempt: direct query from local SQLite database in .wrangler
            const dbDir = path.resolve(__dirname, '.wrangler/state/v3/d1/miniflare-D1DatabaseObject');
            if (fs.existsSync(dbDir)) {
              const sqliteFiles = fs.readdirSync(dbDir).filter((f) => f.endsWith('.sqlite'));
              for (const file of sqliteFiles) {
                try {
                  const sqlitePkg = 'node:sqlite';
                  // @ts-ignore - dynamic runtime import in Node.js 22.5+
                  const sqliteModule: any = await import(/* @vite-ignore */ sqlitePkg);
                  if (sqliteModule?.DatabaseSync) {
                    const db = new sqliteModule.DatabaseSync(path.join(dbDir, file));
                    const rows = db.prepare('SELECT id, name, url, description, category FROM anime_sites ORDER BY id').all();
                    if (rows && rows.length > 0) {
                      res.statusCode = 200;
                      res.setHeader('Content-Type', 'application/json; charset=utf-8');
                      res.setHeader('Cache-Control', 'no-cache');
                      res.end(JSON.stringify(rows));
                      return;
                    }
                  }
                } catch {
                  // try next file
                }
              }
            }

            // Fallback: read from public/data/sites.json
            const jsonPath = path.resolve(__dirname, 'public/data/sites.json');
            if (fs.existsSync(jsonPath)) {
              const content = fs.readFileSync(jsonPath, 'utf-8');
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json; charset=utf-8');
              res.setHeader('Cache-Control', 'no-cache');
              res.end(content);
              return;
            }
          } catch (err) {
            console.error('[API /api/sites dev server] Error:', err);
          }
        }

        if (url === '/api/download' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              const parsed = JSON.parse(body || '{}');
              const email = parsed.email ? String(parsed.email).trim().toLowerCase() : '';
              if (!email || !email.includes('@') || email.length < 5) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'A valid email address is required.' }));
                return;
              }

              // Save to local miniflare SQLite database
              const dbDir = path.resolve(__dirname, '.wrangler/state/v3/d1/miniflare-D1DatabaseObject');
              if (fs.existsSync(dbDir)) {
                const sqliteFiles = fs.readdirSync(dbDir).filter((f) => f.endsWith('.sqlite'));
                for (const file of sqliteFiles) {
                  try {
                    const sqlitePkg = 'node:sqlite';
                    // @ts-ignore
                    const sqliteModule: any = await import(/* @vite-ignore */ sqlitePkg);
                    if (sqliteModule?.DatabaseSync) {
                      const db = new sqliteModule.DatabaseSync(path.join(dbDir, file));
                      db.prepare(`
                        CREATE TABLE IF NOT EXISTS download_subscribers (
                          id INTEGER PRIMARY KEY AUTOINCREMENT,
                          email TEXT NOT NULL,
                          source TEXT DEFAULT 'download_modal',
                          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                        )
                      `).run();
                      db.prepare('INSERT INTO download_subscribers (email, source) VALUES (?, ?)').run(email, 'download_modal');
                    }
                  } catch (e) {
                    console.error('[API /api/download dev server] DB insert error:', e);
                  }
                }
              }

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json; charset=utf-8');
              res.end(
                JSON.stringify({
                  success: true,
                  message: 'Email registered successfully.',
                  downloadUrl:
                    'https://github.com/trimaxpro/FoxAnime/releases/download/v1.1.0/Fox-Anime-v1.1.0-Windows.zip',
                })
              );
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Failed to process download.' }));
            }
          });
          return;
        }

        if (url === '/api/sakugabooru') {
          try {
            const reqUrl = new URL(req.url || '', 'http://localhost:5174');
            const limit = reqUrl.searchParams.get('limit') || '20';
            const page = reqUrl.searchParams.get('page') || '1';
            const sakugaUrl = `https://www.sakugabooru.com/post.json?limit=${limit}&page=${page}&tags=rating:s`;
            const upstream = await fetch(sakugaUrl, {
              headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
                'Accept': 'application/json',
              },
            });
            if (upstream.ok) {
              const data = await upstream.text();
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json; charset=utf-8');
              res.setHeader('Cache-Control', 'public, max-age=600');
              res.end(data);
              return;
            }
          } catch (err) {
            // Graceful fallback to static posts
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), animeSitesApiPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5174,
    open: false,
  },
});

