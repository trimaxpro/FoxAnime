const fs = require('node:fs');
const path = require('node:path');
const { DatabaseSync } = require('node:sqlite');

const sitesData = [
  {
    name: "Anime Streaming Apps",
    url: "https://fmhy.net/video/#anime-streaming-apps",
    desc1: "Curated community index of top open-source anime streaming clients and applications.",
    desc2: "Provides verified direct links, setup guides, and safety ratings for all platforms.",
    category: "index",
    tags: ["Index", "Apps", "Open Source"]
  },
  {
    name: "Wotaku",
    url: "https://wotaku.wiki/websites",
    desc1: "Comprehensive otaku directory listing reliable anime, manga, and light novel resources.",
    desc2: "Features active domain monitoring, privacy tips, and community-vetted mirrors.",
    category: "index",
    tags: ["Index", "Wiki", "Directory"]
  },
  {
    name: "The Index",
    url: "https://theindex.moe/library/anime",
    desc1: "Well-structured open-source database organizing anime streaming portals and trackers.",
    desc2: "Constantly audited for uptime, ad intrusion levels, and video playback quality.",
    category: "index",
    tags: ["Index", "Library", "Open Source"]
  },
  {
    name: "The Wiki",
    url: "https://thewiki.moe/",
    desc1: "Extensive knowledge base documenting media servers, streaming portals, and scraper tools.",
    desc2: "Includes optimization tips, subtitle guides, and alternative streaming endpoints.",
    category: "index",
    tags: ["Wiki", "Guides", "Tools"]
  },
  {
    name: "EverythingMoe",
    url: "https://everythingmoe.com/",
    desc1: "The gold-standard community index comparing dozens of anime streaming services.",
    desc2: "Ranks sites by ad density, video resolution, dub availability, and server speed.",
    category: "index",
    tags: ["Index", "Rankings", "Reviews"]
  },
  {
    name: "EverythingMoe (mirror)",
    url: "https://everythingmoe.org/",
    desc1: "High-speed official backup mirror for the EverythingMoe community directory.",
    desc2: "Provides uninterrupted access when the primary domain encounters DNS blocks.",
    category: "mirrors",
    tags: ["Mirror", "Backup", "Index"]
  },
  {
    name: "Miruro",
    url: "https://www.miruro.com/",
    desc1: "Ultra-fast modern anime player supporting soft & hard subtitles with English dubs.",
    desc2: "Includes automated next episode playback, custom themes, and progress sync.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "1080p"]
  },
  {
    name: "Miruro (mirror - tv)",
    url: "https://miruro.tv/",
    desc1: "Official television-optimized mirror delivering seamless Miruro streaming playback.",
    desc2: "Fast CDN failover ensuring low latency streaming during high traffic hours.",
    category: "mirrors",
    tags: ["Mirror", "TV Optimized", "Auto-Next"]
  },
  {
    name: "Miruro (mirror - bz)",
    url: "https://miruro.bz/",
    desc1: "Alternate European proxy mirror for continuous Miruro anime streaming access.",
    desc2: "Maintains full playlist sync, watchlist bookmarks, and subtitle options.",
    category: "mirrors",
    tags: ["Mirror", "EU Proxy", "Fast CDN"]
  },
  {
    name: "Miruro (mirror - ru)",
    url: "https://miruro.ru/",
    desc1: "Regional mirror providing high-bitrate video streams for Miruro users worldwide.",
    desc2: "Full support for 1080p resolution, keyboard shortcuts, and episode autoplay.",
    category: "mirrors",
    tags: ["Mirror", "1080p", "High Speed"]
  },
  {
    name: "Miruro (mirror - to)",
    url: "https://miruro.to/",
    desc1: "Global top-level domain mirror for Miruro featuring identical real-time libraries.",
    desc2: "Offers dual audio options with instant search auto-completion.",
    category: "mirrors",
    tags: ["Mirror", "Sub / Dub", "Auto-Next"]
  },
  {
    name: "Miruro Status",
    url: "https://status.miruro.com/",
    desc1: "Live network telemetry and uptime dashboard for all official Miruro domains.",
    desc2: "Check real-time server health, latency, maintenance alerts, and domain changes.",
    category: "tools",
    tags: ["Status", "Monitoring", "Uptime"]
  },
  {
    name: "animepahe",
    url: "https://animepahe.pw/",
    desc1: "Legendary anime streaming platform known for lightweight, low-data 1080p encodes.",
    desc2: "Rapid simulcast uploads with dual-audio support and clean, minimalistic design.",
    category: "streaming",
    tags: ["Sub / Dub", "Low Data", "1080p"]
  },
  {
    name: "animepahe Enhancements",
    url: "https://update.greasyfork.org/scripts/520048/AnimePahe%20Improvements.user.js",
    desc1: "Community userscript that elevates the AnimePahe playback experience.",
    desc2: "Adds auto-fullscreen, theater mode, keyboard scrubbing, and auto-next features.",
    category: "tools",
    tags: ["Userscript", "Add-on", "Player Tools"]
  },
  {
    name: "animepahe-dl",
    url: "https://github.com/KevCui/animepahe-dl",
    desc1: "Fast automated command-line downloader for fetching episodes from AnimePahe.",
    desc2: "Supports batch downloads, custom resolution filters, and resume capability.",
    category: "tools",
    tags: ["Downloader", "CLI", "Batch Tools"]
  },
  {
    name: "KickAssAnime",
    url: "https://kaa.lt/",
    desc1: "Popular full-featured streaming hub with multi-server 1080p streams.",
    desc2: "Equipped with automatic next episode transitions and comprehensive schedule calendar.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "Multi-Server"]
  },
  {
    name: "MKissa",
    url: "https://mkissa.to/",
    desc1: "Clean streaming portal offering an extensive catalog of subbed and dubbed anime.",
    desc2: "Fast video player with minimal buffering and intuitive episode navigation.",
    category: "streaming",
    tags: ["Sub / Dub", "Clean UI", "Simulcast"]
  },
  {
    name: "All Manga",
    url: "https://allmanga.to/",
    desc1: "Multi-media streaming and reading portal covering both anime series and manga.",
    desc2: "Offers high quality sub and dub streams alongside synchronized chapter releases.",
    category: "streaming",
    tags: ["Sub / Dub", "Manga Reader", "Multi-Media"]
  },
  {
    name: "AnimeX",
    url: "https://animex.one/",
    desc1: "Modern anime platform with automatic episode progression and responsive controls.",
    desc2: "Browse seasonal anime, trending picks, and classic retro series in full HD.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "Full HD"]
  },
  {
    name: "Anikoto",
    url: "https://anikototv.to/",
    desc1: "Fast-loading streaming site featuring high bitrate video feeds and minimal ads.",
    desc2: "Supports auto-skip intro, multiple backup players, and synchronized subtitles.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "Auto-Skip"]
  },
  {
    name: "Anisuge",
    url: "https://animesuge.cz/",
    desc1: "Sleek streaming destination with instant episode autoplay and clean dark aesthetics.",
    desc2: "Features broad sub and dub catalogs with real-time release schedules.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "Dark UI"]
  },
  {
    name: "Anikoto Backup",
    url: "https://anikoto.site/",
    desc1: "Official backup destination for Anikoto to ensure round-the-clock streaming uptime.",
    desc2: "Preserves your browsing session with mirror links and identical video sources.",
    category: "mirrors",
    tags: ["Backup", "Mirror", "Sub / Dub"]
  },
  {
    name: "Anisuge Backup",
    url: "https://animesuge.bid/",
    desc1: "Dedicated secondary proxy server providing uninterrupted Anisuge video feeds.",
    desc2: "High-speed caching layer optimized for smooth mobile and desktop playback.",
    category: "mirrors",
    tags: ["Backup", "Mirror", "Proxy"]
  },
  {
    name: "Anidap",
    url: "https://anidap.lol/",
    desc1: "Lightweight anime streaming website focusing on simplicity and quick playback.",
    desc2: "Dual-audio sub and dub libraries with responsive controls and auto-next.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "Fast Load"]
  },
  {
    name: "Re:ANIME",
    url: "https://reanime.to/",
    desc1: "Polished streaming portal featuring seamless auto-next episode transitions.",
    desc2: "Comprehensive collection of seasonal releases with customizable video player.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "Custom Player"]
  },
  {
    name: "Re:ANIME mirror (cz)",
    url: "https://reanime.cz/",
    desc1: "Central European mirror for Re:ANIME with low-latency CDN streaming servers.",
    desc2: "Full access to subbed and dubbed catalogs with identical streaming quality.",
    category: "mirrors",
    tags: ["Mirror", "EU Server", "Sub / Dub"]
  },
  {
    name: "Re:ANIME mirror (wtf)",
    url: "https://reanime.wtf/",
    desc1: "Global alternate proxy endpoint providing resilient access to Re:ANIME content.",
    desc2: "Offers high-definition video playback with multi-server failover options.",
    category: "mirrors",
    tags: ["Mirror", "Failover", "Full HD"]
  },
  {
    name: "Reindex",
    url: "https://reindex.to/",
    desc1: "Specialized directory indexing reliable anime streaming mirrors and domain changes.",
    desc2: "Keeps track of active backup addresses and provides one-click gateway links.",
    category: "index",
    tags: ["Index", "Domain Tracker", "Directory"]
  },
  {
    name: "Restatus",
    url: "https://restatus.me/",
    desc1: "Real-time monitoring hub checking online status across popular anime websites.",
    desc2: "Provides instant ping benchmarks and service availability reports.",
    category: "tools",
    tags: ["Status", "Latency Checker", "Uptime"]
  },
  {
    name: "Anistream",
    url: "https://anistream.one/",
    desc1: "Streamlined video portal delivering 1080p anime episodes with zero clutter.",
    desc2: "Features auto-next countdowns, dub selections, and fast search filtering.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "1080p"]
  },
  {
    name: "Kazora",
    url: "https://kazora.cc/",
    desc1: "Contemporary anime streaming interface with smooth navigation and crisp audio.",
    desc2: "Includes seasonal broadcast timelines and automated next episode loading.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "Crisp Audio"]
  },
  {
    name: "Lunar",
    url: "https://lunarx.to/",
    desc1: "Quiet, minimal streaming website focused on pure playback performance.",
    desc2: "Extensive sub and dub anime catalog organized by genre and seasonal release.",
    category: "streaming",
    tags: ["Sub / Dub", "Minimalist", "Fast Stream"]
  },
  {
    name: "KuroAnime",
    url: "https://kuroanime.lol/",
    desc1: "Feature-packed streaming platform with high quality video and episode auto-next.",
    desc2: "Quick search with instant results and flexible subtitle synchronization.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "Fast Search"]
  },
  {
    name: "NekoWatch",
    url: "https://nekowatch.xyz/",
    desc1: "Clean anime portal offering dual audio tracks and customizable player skins.",
    desc2: "Seamless auto-advance to next episode with minimal interruption.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "Custom Themes"]
  },
  {
    name: "JustAnime",
    url: "https://justanime.to/",
    desc1: "Fast-loading streaming site featuring multiple video hosting mirrors.",
    desc2: "Browse thousands of anime titles with auto-next and seasonal schedule guides.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "Multiple Hosts"]
  },
  {
    name: "JustAnime Mirrors",
    url: "https://projectjust.xyz/",
    desc1: "Official repository of backup mirrors and proxy URLs for the JustAnime network.",
    desc2: "Bookmark this portal to bypass regional ISP blocks and domain suspensions.",
    category: "mirrors",
    tags: ["Mirrors", "Proxy Gateway", "Bypass"]
  },
  {
    name: "AniLight",
    url: "https://anilight.live/",
    desc1: "Speed-optimized streaming engine designed for low-bandwidth environments.",
    desc2: "Supports continuous autoplay, multiple subtitle languages, and dub options.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "Low Bandwidth"]
  },
  {
    name: "AniKuro",
    url: "https://anikuro.to/",
    desc1: "Community streaming hub with dedicated sub and dub video servers.",
    desc2: "Features clean episode listings, genre tags, and responsive playback.",
    category: "streaming",
    tags: ["Sub / Dub", "Community", "Genre Tags"]
  },
  {
    name: "AniKuro mirror",
    url: "https://anikuro.ru/",
    desc1: "High-capacity mirror domain for the AniKuro anime streaming catalog.",
    desc2: "Guarantees reliable streaming during peak seasonal anime release hours.",
    category: "mirrors",
    tags: ["Mirror", "High Capacity", "Sub / Dub"]
  },
  {
    name: "AniKuro Status",
    url: "https://anikuro.site/",
    desc1: "Official health monitoring page displaying live server performance for AniKuro.",
    desc2: "Tracks player uptime, database sync status, and latest domain updates.",
    category: "tools",
    tags: ["Status", "Monitoring", "Health"]
  },
  {
    name: "MeguAnimes",
    url: "https://meguanime.com/",
    desc1: "Playful, responsive streaming site featuring HD anime streams with auto-next.",
    desc2: "Offers dual-audio options, bookmarks, and fast episode navigation.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "Bookmarks"]
  },
  {
    name: "Aniwave",
    url: "https://aniwaves.ru/",
    desc1: "High-definition streaming platform with advanced player controls and watch history.",
    desc2: "Extensive library of subbed and dubbed anime with automated episode progression.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "Watch History"]
  },
  {
    name: "HiAnime mirror",
    url: "https://hianimes.ru/",
    desc1: "Official secondary mirror for HiAnime providing identical 1080p anime catalog.",
    desc2: "Features multi-language audio, auto-skip intro/outro, and synchronized subs.",
    category: "mirrors",
    tags: ["Mirror", "Auto-Skip", "Multi-Language"]
  },
  {
    name: "123anime",
    url: "https://123animehub.cc/",
    desc1: "Reliable classic streaming directory delivering fast episodes with minimal buffering.",
    desc2: "Features auto-next playback, English dubs, and complete movie archives.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "Movie Archives"]
  },
  {
    name: "Senshi",
    url: "https://senshi.to/",
    desc1: "Fast-paced streaming interface designed for binge-watching seasonal anime.",
    desc2: "Includes continuous episode autoplay and multiple streaming server choices.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "Binge Player"]
  },
  {
    name: "AniZone",
    url: "https://anizone.to/",
    desc1: "Focused subtitle-first streaming platform offering crisp Japanese audio tracks.",
    desc2: "Neat categorical index covering action, shonen, romance, and fantasy series.",
    category: "streaming",
    tags: ["Subbed", "Japanese Audio", "Categorized"]
  },
  {
    name: "AniDoor",
    url: "https://anidoor.me/",
    desc1: "Modern doorway to thousands of subbed and dubbed anime titles in full HD.",
    desc2: "Equipped with auto-next episode triggers and responsive video playback.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "Full HD"]
  },
  {
    name: "AniSnatch",
    url: "https://anisnatch.top/",
    desc1: "Lightweight video player delivering fast episode streams across all devices.",
    desc2: "Features clear sub and dub categorization and quick episode jump controls.",
    category: "streaming",
    tags: ["Sub / Dub", "Mobile Ready", "Quick Jump"]
  },
  {
    name: "AniSnatch mirror",
    url: "https://anisnatch.site/",
    desc1: "Official secondary server for AniSnatch to ensure continuous video availability.",
    desc2: "Maintains full access to anime series archives with low latency speeds.",
    category: "mirrors",
    tags: ["Mirror", "Low Latency", "Sub / Dub"]
  },
  {
    name: "AnimeStream",
    url: "https://anime.uniquestream.net/",
    desc1: "Optimized 720p/1080p streaming platform prioritizing rapid load times.",
    desc2: "Clean subtitle formatting and well-maintained catalog of ongoing seasonals.",
    category: "streaming",
    tags: ["Subbed", "720p/1080p", "Fast Load"]
  },
  {
    name: "KoToTV",
    url: "https://kototv.to/",
    desc1: "Versatile streaming portal offering high-definition sub and dub video streams.",
    desc2: "Features automated episode progression and detailed episode synopsis.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "Synopsis"]
  },
  {
    name: "Anime Nexus",
    url: "https://anime.nexus/",
    desc1: "Community hub connecting anime fans with verified HD streaming links.",
    desc2: "Organized sub and dub collections with intuitive search and genre filters.",
    category: "streaming",
    tags: ["Sub / Dub", "Community Hub", "Genre Filter"]
  },
  {
    name: "LuffyTV",
    url: "https://luffytv.live/",
    desc1: "Ad-light streaming portal dedicated to long-running shonen and seasonal anime.",
    desc2: "Smooth video player with multiple server fallbacks and dub support.",
    category: "streaming",
    tags: ["Sub / Dub", "Shonen Archive", "Low Ads"]
  },
  {
    name: "LuffyTV mirror",
    url: "https://luffytv.online/",
    desc1: "High-speed backup mirror for LuffyTV providing reliable uninterrupted streams.",
    desc2: "Bypasses network congestion with dedicated video CDN delivery.",
    category: "mirrors",
    tags: ["Mirror", "CDN Route", "Sub / Dub"]
  },
  {
    name: "AniChan",
    url: "https://anichan.to/",
    desc1: "Comfortable anime viewer offering crisp Japanese audio with English subtitles.",
    desc2: "Browse seasonal anime releases with clean episode lists and descriptions.",
    category: "streaming",
    tags: ["Sub / Dub", "Simulcast", "Episode Guide"]
  },
  {
    name: "AnimeParadise",
    url: "https://www.animeparadise.moe/",
    desc1: "Expansive library of popular anime series, OVA specials, and theatrical movies.",
    desc2: "Supports dual-audio sub and dub streams with responsive controls.",
    category: "streaming",
    tags: ["Sub / Dub", "Movie Archive", "OVA Specials"]
  },
  {
    name: "AnimeDex",
    url: "https://animedex.fun/",
    desc1: "Open-source, lightning-fast anime streaming web app with clean modern UI.",
    desc2: "Pulls video streams from multiple providers with zero intrusive ads.",
    category: "streaming",
    tags: ["Sub / Dub", "Ad-Free", "Open Source"]
  },
  {
    name: "Anify",
    url: "https://anify.to/",
    desc1: "Decentralized anime discovery and streaming portal built with modern web tech.",
    desc2: "Aggregates high-bitrate video feeds, accurate metadata, and subtitle sync.",
    category: "streaming",
    tags: ["Sub / Dub", "Modern Web", "Accurate Meta"]
  },
  {
    name: "AniDB (.app)",
    url: "https://anidb.app/",
    desc1: "Fast streaming client and database frontend for exploring vast anime archives.",
    desc2: "Features detailed character bios, episode guides, and multi-server links.",
    category: "streaming",
    tags: ["Sub / Dub", "Database", "Character Bios"]
  },
  {
    name: "Enma",
    url: "https://www.enma.lol/",
    desc1: "Sleek dark-themed streaming website with auto-next and custom video player.",
    desc2: "Comprehensive collection of seasonal anime, movies, and completed series.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "Dark UI"]
  },
  {
    name: "Anikura",
    url: "https://anikura.club/",
    desc1: "Smooth streaming hub with easy navigation between subbed and dubbed episodes.",
    desc2: "Fast video buffering with clear quality selectors up to full 1080p.",
    category: "streaming",
    tags: ["Sub / Dub", "1080p", "Fast Buffer"]
  },
  {
    name: "1Anime",
    url: "https://1ani.me/",
    desc1: "Modern video player delivering high-definition anime with automated next episode.",
    desc2: "Features clean search filters, dub toggles, and bookmark watchlist.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "Watchlist"]
  },
  {
    name: "Kyren",
    url: "https://kyren.moe/",
    desc1: "Aesthetic streaming portal offering high-definition video playback.",
    desc2: "Curated anime collections with synchronized subtitles and responsive layout.",
    category: "streaming",
    tags: ["Sub / Dub", "Aesthetic UI", "HD Streams"]
  },
  {
    name: "Yenime",
    url: "https://yenime.net/",
    desc1: "Fresh anime streaming site with fast CDN nodes and minimal buffering.",
    desc2: "Includes both English subbed and dubbed options across top series.",
    category: "streaming",
    tags: ["Sub / Dub", "Fast CDN", "No Lag"]
  },
  {
    name: "AnimeNoSub",
    url: "https://animenosub.to/",
    desc1: "Dedicated repository of raw Japanese anime broadcasts without hard subtitles.",
    desc2: "Ideal for Japanese language learners, video editors, and AMV creators.",
    category: "streaming",
    tags: ["RAW", "Japanese Audio", "AMV Creators"]
  },
  {
    name: "AnimeOnsen",
    url: "https://animeonsen.xyz/",
    desc1: "Ad-free community anime platform built with smooth native video controls.",
    desc2: "Optimized for fast streaming with clean subtitles and open-source backend.",
    category: "streaming",
    tags: ["Subbed", "Ad-Free", "Open Source"]
  },
  {
    name: "Yomi",
    url: "https://yomi.to/",
    desc1: "Polished anime streaming destination featuring seamless auto-next autoplay.",
    desc2: "Discover top-rated anime series with high-quality English subs and dubs.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "Top Rated"]
  },
  {
    name: "Babyanime",
    url: "https://babyanime.top/",
    desc1: "Compact, quick-loading streaming portal with straightforward episode listings.",
    desc2: "Offers multi-server video links with sub and dub audio support.",
    category: "streaming",
    tags: ["Sub / Dub", "Compact UI", "Multi-Server"]
  },
  {
    name: "AniClipse",
    url: "https://aniclipse.com/",
    desc1: "Vibrant anime streaming site featuring trending seasonal titles and classics.",
    desc2: "High-definition video playback with easy episode navigation controls.",
    category: "streaming",
    tags: ["Sub / Dub", "Seasonal Trending", "HD Playback"]
  },
  {
    name: "AniHQ",
    url: "https://anihq.cc/",
    desc1: "High-definition video portal focusing on top-tier video and audio quality.",
    desc2: "Comprehensive sub and dub library updated daily with new simulcasts.",
    category: "streaming",
    tags: ["Sub / Dub", "High Quality", "Daily Updates"]
  },
  {
    name: "Luna",
    url: "https://luna-stream.me/",
    desc1: "Elegant streaming client with clean typography and distraction-free playback.",
    desc2: "Browse seasonal anime and classic archives in crisp 1080p resolution.",
    category: "streaming",
    tags: ["Sub / Dub", "Distraction-Free", "1080p"]
  },
  {
    name: "AniNami",
    url: "https://aninami.site/",
    desc1: "Smooth streaming portal offering quick access to latest anime broadcasts.",
    desc2: "Equipped with dual audio selections and multiple server redundancy.",
    category: "streaming",
    tags: ["Sub / Dub", "Broadcasts", "Server Redundancy"]
  },
  {
    name: "Rive Anime",
    url: "https://www.rivestream.app/",
    desc1: "Modern progressive web app interface with auto-next and custom controls.",
    desc2: "Streams high quality anime with subtitle personalization options.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "PWA"]
  },
  {
    name: "Rive Anime mirror",
    url: "https://rivestream.ru/",
    desc1: "Official secondary mirror for Rive Anime ensuring 24/7 global availability.",
    desc2: "Maintains full playlist sync and low-latency streaming CDN routes.",
    category: "mirrors",
    tags: ["Mirror", "24/7 Uptime", "Global CDN"]
  },
  {
    name: "Rive Anime Status",
    url: "https://rentry.co/rivestream",
    desc1: "Official network status and maintenance notice board for Rive Anime services.",
    desc2: "Stay informed on domain migrations, server patches, and feature updates.",
    category: "tools",
    tags: ["Status", "Maintenance", "Notices"]
  },
  {
    name: "Kawaii Anime",
    url: "https://kawaiianime.cc/",
    desc1: "Charming streaming site offering thousands of anime series in HD quality.",
    desc2: "Features dual audio sub/dub switches and fast auto-next transitions.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "HD Quality"]
  },
  {
    name: "FireAnime",
    url: "https://fireani.me/",
    desc1: "High-speed streaming portal built for seamless TV and desktop anime viewing.",
    desc2: "Delivers crisp subtitles, fast buffer times, and organized genre filters.",
    category: "streaming",
    tags: ["Subbed", "TV Friendly", "Genre Filters"]
  },
  {
    name: "9anime",
    url: "https://9animstv.to/",
    desc1: "One of the most famous anime streaming platforms with massive title archives.",
    desc2: "Features multiple audio tracks, auto-skip intro/outro, and 1080p playback.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Skip", "Massive Catalog"]
  },
  {
    name: "bAnime",
    url: "https://banime.dedyn.io/",
    desc1: "Minimalist ad-free anime player delivering pure video streaming enjoyment.",
    desc2: "Features sub and dub options with automated next-episode progression.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "Ad-Free"]
  },
  {
    name: "PirateXplay",
    url: "https://piratexplay.cc/home",
    desc1: "Dedicated streaming portal with clean video playback and rapid load times.",
    desc2: "Browse ongoing seasonal broadcasts with high-definition subtitles.",
    category: "streaming",
    tags: ["Subbed", "Fast Playback", "Broadcasts"]
  },
  {
    name: "PirateXplay mirror",
    url: "https://piratexplay.com/",
    desc1: "Official backup server providing uninterrupted access to PirateXplay.",
    desc2: "Fast mirror servers ensuring low latency and reliable playback.",
    category: "mirrors",
    tags: ["Mirror", "Backup", "Low Latency"]
  },
  {
    name: "Kuroiru",
    url: "https://kuroiru.co/",
    desc1: "Multi-site unified anime search engine scanning multiple streaming platforms.",
    desc2: "Find where any anime episode is currently streaming with one single query.",
    category: "tools",
    tags: ["Search Engine", "Aggregator", "Multi-Site"]
  },
  {
    name: "Anime Streaming CSE",
    url: "https://cse.google.com/cse?cx=006516753008110874046%3Avzcl7wcfhei",
    desc1: "Google Custom Search Engine tailored specifically for anime streaming sites.",
    desc2: "Instantly locates rare episodes, OVA specials, and mirrors across the web.",
    category: "tools",
    tags: ["Search Engine", "Custom Search", "Rare Episodes"]
  },
  {
    name: "AnimeXin",
    url: "https://animexin.dev/",
    desc1: "Premier portal for Chinese animation (Donghua) with quality English subtitles.",
    desc2: "Daily uploads of 3D cultivation, action, and fantasy Donghua series.",
    category: "donghua",
    tags: ["Donghua", "Subbed", "3D Animation"]
  },
  {
    name: "Lucifer Donghua",
    url: "https://luciferdonghua.in/",
    desc1: "Dedicated streaming platform focusing on high-definition Donghua releases.",
    desc2: "Comprehensive archives of ongoing cultivation and martial arts series.",
    category: "donghua",
    tags: ["Donghua", "Cultivation", "Martial Arts"]
  },
  {
    name: "LMANIME",
    url: "https://lmanime.com/",
    desc1: "Specialized Donghua streaming website featuring crisp English subtitles.",
    desc2: "Fast video players with multi-server options and complete season packs.",
    category: "donghua",
    tags: ["Donghua", "Multi-Server", "Season Packs"]
  },
  {
    name: "CKSub",
    url: "https://donghua4k.net/",
    desc1: "Ultra HD 4K and 1080p Donghua streaming hub with professional fansubs.",
    desc2: "Features top-tier Chinese 3D anime series with high-bitrate video feeds.",
    category: "donghua",
    tags: ["Donghua", "4K Ultra HD", "Fansubs"]
  },
  {
    name: "MyAnime",
    url: "https://myanime.live/",
    desc1: "Rich streaming catalog featuring both Japanese anime and Chinese Donghua.",
    desc2: "Clean subtitle synchronization with multiple high-speed server choices.",
    category: "donghua",
    tags: ["Donghua", "Anime", "Dual Catalog"]
  },
  {
    name: "AnimeKhor",
    url: "https://animekhor.org/",
    desc1: "Leading Donghua and anime translation portal with high-speed video players.",
    desc2: "Extensive collections of ongoing fantasy Donghua with clear English subs.",
    category: "donghua",
    tags: ["Donghua", "Fast Player", "Fantasy"]
  },
  {
    name: "Crimson Subs",
    url: "https://crimsonfansubs.com/",
    desc1: "Dedicated fansub group and streaming site for premium Donghua series.",
    desc2: "High-bitrate encodes with accurate translations and timely weekly releases.",
    category: "donghua",
    tags: ["Donghua", "Fansubs", "High Bitrate"]
  },

  // ===== NEW POPULAR THIRD PARTY WEBSITES =====
  {
    name: "HiAnime",
    url: "https://hianime.to",
    desc1: "Top-tier anime streaming giant featuring multi-server 1080p video feeds.",
    desc2: "Includes auto-skip intro/outro, synchronized subs, dubs, and live comments.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Skip", "1080p"]
  },
  {
    name: "Aniwatch",
    url: "https://aniwatchtv.to",
    desc1: "Leading streaming hub with watch2gether rooms and zero forced redirects.",
    desc2: "Offers high-bitrate sub and dub streams with customizable subtitle styling.",
    category: "streaming",
    tags: ["Sub / Dub", "Watch2Gether", "1080p"]
  },
  {
    name: "GogoAnime",
    url: "https://gogoanime3.co",
    desc1: "The classic anime streaming powerhouse with the largest historical episode archive.",
    desc2: "Fastest simulcast uploads with multiple video host mirrors and mobile support.",
    category: "streaming",
    tags: ["Sub / Dub", "Classic", "Simulcast"]
  },
  {
    name: "Zoro.to",
    url: "https://zoro.sx",
    desc1: "Massively popular streaming interface designed for fast, seamless binge watching.",
    desc2: "Features multi-language audio, episode schedules, and zero-buffering playback.",
    category: "streaming",
    tags: ["Sub / Dub", "Fast CDN", "Auto-Next"]
  },
  {
    name: "Kaido",
    url: "https://kaido.to",
    desc1: "Sleek, modern anime web client with responsive dark UI and quick navigation.",
    desc2: "Equipped with automatic next episode, intro skip, and dual-audio toggles.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Next", "Auto-Skip"]
  },
  {
    name: "YugenAnime",
    url: "https://yugenanime.tv",
    desc1: "Minimalist, ad-light streaming destination with tracking and custom watchlists.",
    desc2: "Features clean 1080p video player with smooth keyboard scrubbing controls.",
    category: "streaming",
    tags: ["Sub / Dub", "Ad-Light", "Watchlist"]
  },
  {
    name: "Marin",
    url: "https://marin.moe",
    desc1: "State-of-the-art anime web portal built with infinite scroll and modern aesthetics.",
    desc2: "Delivers high-bitrate video playback with zero visual clutter or popups.",
    category: "streaming",
    tags: ["Subbed", "Modern Web", "High Bitrate"]
  },
  {
    name: "AnimeKai",
    url: "https://animekai.to",
    desc1: "Community-driven streaming directory featuring 1080p episodes and seasonal charts.",
    desc2: "Fast multi-server failover with synchronized subtitles and English dubbing.",
    category: "streaming",
    tags: ["Sub / Dub", "1080p", "Seasonal Charts"]
  },
  {
    name: "AnimeHeaven",
    url: "https://animeheaven.me",
    desc1: "Lightweight and mobile-friendly anime streaming site with quick episode search.",
    desc2: "Includes complete seasonal series, movies, and OVAs with download options.",
    category: "streaming",
    tags: ["Sub / Dub", "Mobile Ready", "Downloads"]
  },
  {
    name: "AnimeDao",
    url: "https://animedao.to",
    desc1: "Speedy streaming portal with simple layout and daily updated simulcast releases.",
    desc2: "Browse top-rated anime series with low-bandwidth video player options.",
    category: "streaming",
    tags: ["Sub / Dub", "Simulcast", "Fast Loading"]
  },
  {
    name: "Nyaa",
    url: "https://nyaa.si",
    desc1: "The world's largest open community torrent index for raw and subbed anime media.",
    desc2: "High-speed peer-to-peer distribution for 4K remuxes, BDMVs, and fansubs.",
    category: "tools",
    tags: ["Torrent Index", "4K Remux", "Fansubs"]
  },
  {
    name: "SubsPlease",
    url: "https://subsplease.org",
    desc1: "Premier release group providing direct high-definition anime episode downloads.",
    desc2: "Simulcast releases with multi-resolution 1080p, 720p, and 480p MKV files.",
    category: "tools",
    tags: ["Downloads", "Simulcast", "1080p MKV"]
  },
  {
    name: "AnimeFrenzy",
    url: "https://animefrenzy.org",
    desc1: "Dedicated anime streaming hub featuring comprehensive English dub collections.",
    desc2: "Updated continuously with ongoing seasonal broadcasts and community chat.",
    category: "streaming",
    tags: ["Dub Focus", "Subbed", "Simulcast"]
  },
  {
    name: "OtakuStream",
    url: "https://otakustream.info",
    desc1: "Social anime platform with active episode discussion threads and bookmarking.",
    desc2: "Offers smooth video playback with light/dark theme toggles and auto-next.",
    category: "streaming",
    tags: ["Sub / Dub", "Social Chat", "Auto-Next"]
  },
  {
    name: "AnimeFox",
    url: "https://animefox.tv",
    desc1: "Responsive streaming client with multiple source servers and subtitle choices.",
    desc2: "Clean user interface optimized for fast browsing on both desktop and mobile.",
    category: "streaming",
    tags: ["Sub / Dub", "Multiple Hosts", "Mobile UI"]
  },
  {
    name: "AniRave",
    url: "https://anirave.com",
    desc1: "Modern ad-free anime catalog with advanced player controls and watch history.",
    desc2: "High-definition streaming feeds with instant title lookup and seasonal lists.",
    category: "streaming",
    tags: ["Sub / Dub", "Ad-Free", "Watch History"]
  },
  {
    name: "AnimeFlv",
    url: "https://animeflv.net",
    desc1: "The undisputed giant of Spanish-subbed anime streaming with massive archives.",
    desc2: "Lightning-fast video servers with active community comments and mobile app.",
    category: "streaming",
    tags: ["Spanish Sub", "Massive Library", "Fast CDN"]
  },
  {
    name: "JKanime",
    url: "https://jkanime.net",
    desc1: "Popular Latin American anime streaming community with immediate simulcasts.",
    desc2: "Multiple video player mirrors with high-speed Latin Spanish subtitle tracks.",
    category: "streaming",
    tags: ["Spanish Sub", "Simulcast", "Multi-Host"]
  },
  {
    name: "AnimeUnity",
    url: "https://animeunity.to",
    desc1: "Premier Italian-subbed anime portal offering pristine 1080p video encodes.",
    desc2: "Features clean catalog navigation, seasonal rankings, and fast load times.",
    category: "streaming",
    tags: ["Italian Sub", "1080p", "Rankings"]
  },
  {
    name: "VOSTFREE",
    url: "https://vostfree.ws",
    desc1: "Leading French anime platform offering subbed (VOSTFR) and dubbed (VF) series.",
    desc2: "Multi-host video player with comprehensive archives of ongoing seasonals.",
    category: "streaming",
    tags: ["French VOSTFR", "VF Dub", "Multi-Host"]
  },
  {
    name: "Bilibili Global",
    url: "https://www.bilibili.tv",
    desc1: "Official licensed streaming destination for top-tier anime and Chinese Donghua.",
    desc2: "Features multi-language official subtitles, bullet comments, and 1080p/4K.",
    category: "donghua",
    tags: ["Official", "Donghua", "1080p/4K"]
  },
  {
    name: "Kuramanime",
    url: "https://kuramanime.run",
    desc1: "Popular Indonesian anime streaming portal with batch episode downloads.",
    desc2: "Clean user dashboard with Discord integration and fast video mirrors.",
    category: "streaming",
    tags: ["Indonesian Sub", "Batch DL", "Discord Sync"]
  },
  {
    name: "AnimeBee",
    url: "https://animebee.to",
    desc1: "High-speed streaming site featuring multi-server failover and subtitle sync.",
    desc2: "Browse popular ongoing seasonals and completed classics in full HD.",
    category: "streaming",
    tags: ["Sub / Dub", "Failover", "Full HD"]
  },
  {
    name: "MyAnimeList",
    url: "https://myanimelist.net",
    desc1: "The definitive global anime database, seasonal charts, and user score reviews.",
    desc2: "Track your personal watchlists, read reviews, and explore seasonal countdowns.",
    category: "index",
    tags: ["Database", "Reviews", "Seasonal Charts"]
  },
  {
    name: "AniList",
    url: "https://anilist.co",
    desc1: "Modern social anime tracking platform with sleek custom lists and stats.",
    desc2: "Discover trending seasonal anime, scoring breakdowns, and community feeds.",
    category: "index",
    tags: ["Database", "Modern UI", "Community"]
  },
  {
    name: "Kitsu",
    url: "https://kitsu.app",
    desc1: "Contemporary anime discovery engine with personalized recommendation feeds.",
    desc2: "Track your episode progress across devices with smooth mobile apps.",
    category: "index",
    tags: ["Discovery", "Recommendations", "Mobile App"]
  },
  {
    name: "LiveChart.me",
    url: "https://www.livechart.me",
    desc1: "Real-time seasonal anime countdown charts and official legal stream links.",
    desc2: "Features weekly broadcast schedules, studio details, and PV trailers.",
    category: "index",
    tags: ["Countdown", "Schedules", "Legal Links"]
  },
  {
    name: "AnimePlanet",
    url: "https://www.anime-planet.com",
    desc1: "Veteran anime recommendation database with legal video stream partnerships.",
    desc2: "Create custom lists, track episodes, and discover personalized watch suggestions.",
    category: "index",
    tags: ["Database", "Recommendations", "Watchlists"]
  },
  {
    name: "AnimeUltima",
    url: "https://animeultima.to",
    desc1: "Community streaming portal with active episode discussions and discord sync.",
    desc2: "Features subbed and dubbed anime episodes with auto-skip and auto-next.",
    category: "streaming",
    tags: ["Sub / Dub", "Auto-Skip", "Auto-Next"]
  },
  {
    name: "4Anime",
    url: "https://4anime.gg",
    desc1: "Clean anime streaming site built for high-bitrate video and fast search.",
    desc2: "Offers dual-audio sub and dub libraries with responsive controls.",
    category: "streaming",
    tags: ["Sub / Dub", "High Bitrate", "Clean UI"]
  },
  {
    name: "Hanime",
    url: "https://hanime.tv",
    desc1: "Leading high-definition adult animation (18+) streaming portal with fast CDN.",
    desc2: "Features 1080p video player, playlist management, and comprehensive tags.",
    category: "streaming",
    tags: ["18+ Adult", "1080p HD", "Fast CDN"]
  },
  {
    name: "Sankaku Complex",
    url: "https://sankakucomplex.com",
    desc1: "Pop-culture news, anime media hub, and visual art archive for fans.",
    desc2: "Covers anime industry news, gaming releases, and Japanese subculture.",
    category: "index",
    tags: ["News", "Media Hub", "Art Archive"]
  }
];

// Format description as 2 clean lines
const formattedSites = sitesData.map((s, index) => {
  const description = `${s.desc1}\n${s.desc2}`;
  return {
    id: index + 1,
    name: s.name,
    url: s.url,
    description: description,
    category: s.category,
    tags: s.tags
  };
});

console.log(`Total sites prepared: ${formattedSites.length}`);

// 1. Write public/data/sites.json
fs.mkdirSync('public/data', { recursive: true });
fs.writeFileSync('public/data/sites.json', JSON.stringify(formattedSites, null, 2));
console.log('Updated public/data/sites.json');

// 2. Write public/api/sites and public/api/sites.json
fs.mkdirSync('public/api', { recursive: true });
fs.writeFileSync('public/api/sites', JSON.stringify(formattedSites, null, 2));
fs.writeFileSync('public/api/sites.json', JSON.stringify(formattedSites, null, 2));
console.log('Updated public/api/sites and public/api/sites.json');

// 3. Write src/data/fallbackSites.ts
fs.mkdirSync('src/data', { recursive: true });
const tsCode = `export interface AnimeSite {
  id: number;
  name: string;
  url: string;
  description: string;
  category?: string;
  tags?: string[];
}

export const FALLBACK_SITES: AnimeSite[] = ${JSON.stringify(formattedSites, null, 2)};
`;
fs.writeFileSync('src/data/fallbackSites.ts', tsCode);
console.log('Updated src/data/fallbackSites.ts');

// 4. Write sql/02-seed.sql
fs.mkdirSync('sql', { recursive: true });
const esc = (v) => String(v).replace(/'/g, "''");
const sqlRows = formattedSites
  .map((s) => `('${esc(s.name)}', '${esc(s.url)}', '${esc(s.description)}')`)
  .join(',\n  ');
const seedSql = `drop table if exists anime_sites;

create table anime_sites (
  id integer primary key autoincrement,
  name text not null,
  url text not null unique,
  description text not null
);

create index idx_anime_sites_name on anime_sites(name);

insert into anime_sites (name, url, description) values
  ${sqlRows};
`;
fs.writeFileSync('sql/02-seed.sql', seedSql);
console.log('Updated sql/02-seed.sql');

// 5. Update local SQLite databases
try {
  const dbDir = path.resolve('.wrangler/state/v3/d1/miniflare-D1DatabaseObject');
  if (fs.existsSync(dbDir)) {
    const sqliteFiles = fs.readdirSync(dbDir).filter((f) => f.endsWith('.sqlite'));
    for (const f of sqliteFiles) {
      try {
        const dbPath = path.join(dbDir, f);
        const db = new DatabaseSync(dbPath);
        db.exec(`
          DROP TABLE IF EXISTS anime_sites;
          CREATE TABLE anime_sites (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            url TEXT NOT NULL UNIQUE,
            description TEXT NOT NULL
          );
          CREATE INDEX IF NOT EXISTS idx_anime_sites_name ON anime_sites(name);
        `);
        const stmt = db.prepare('INSERT INTO anime_sites (name, url, description) VALUES (?, ?, ?)');
        for (const s of formattedSites) {
          stmt.run(s.name, s.url, s.description);
        }
        console.log(`Successfully populated SQLite database ${f} with ${formattedSites.length} sites!`);
      } catch (e) {
        console.error(`Error writing to ${f}:`, e.message);
      }
    }
  }
} catch (e) {
  console.error('Error with sqlite update:', e.message);
}
