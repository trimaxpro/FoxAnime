drop table if exists anime_sites;

create table anime_sites (
  id integer primary key autoincrement,
  name text not null,
  url text not null unique,
  description text not null
);

create index idx_anime_sites_name on anime_sites(name);

insert into anime_sites (name, url, description) values
  ('Anime Streaming Apps', 'https://fmhy.net/video/#anime-streaming-apps', 'Curated community index of top open-source anime streaming clients and applications.
Provides verified direct links, setup guides, and safety ratings for all platforms.'),
  ('Wotaku', 'https://wotaku.wiki/websites', 'Comprehensive otaku directory listing reliable anime, manga, and light novel resources.
Features active domain monitoring, privacy tips, and community-vetted mirrors.'),
  ('The Index', 'https://theindex.moe/library/anime', 'Well-structured open-source database organizing anime streaming portals and trackers.
Constantly audited for uptime, ad intrusion levels, and video playback quality.'),
  ('The Wiki', 'https://thewiki.moe/', 'Extensive knowledge base documenting media servers, streaming portals, and scraper tools.
Includes optimization tips, subtitle guides, and alternative streaming endpoints.'),
  ('EverythingMoe', 'https://everythingmoe.com/', 'The gold-standard community index comparing dozens of anime streaming services.
Ranks sites by ad density, video resolution, dub availability, and server speed.'),
  ('EverythingMoe (mirror)', 'https://everythingmoe.org/', 'High-speed official backup mirror for the EverythingMoe community directory.
Provides uninterrupted access when the primary domain encounters DNS blocks.'),
  ('Miruro', 'https://www.miruro.com/', 'Ultra-fast modern anime player supporting soft & hard subtitles with English dubs.
Includes automated next episode playback, custom themes, and progress sync.'),
  ('Miruro (mirror - tv)', 'https://miruro.tv/', 'Official television-optimized mirror delivering seamless Miruro streaming playback.
Fast CDN failover ensuring low latency streaming during high traffic hours.'),
  ('Miruro (mirror - bz)', 'https://miruro.bz/', 'Alternate European proxy mirror for continuous Miruro anime streaming access.
Maintains full playlist sync, watchlist bookmarks, and subtitle options.'),
  ('Miruro (mirror - ru)', 'https://miruro.ru/', 'Regional mirror providing high-bitrate video streams for Miruro users worldwide.
Full support for 1080p resolution, keyboard shortcuts, and episode autoplay.'),
  ('Miruro (mirror - to)', 'https://miruro.to/', 'Global top-level domain mirror for Miruro featuring identical real-time libraries.
Offers dual audio options with instant search auto-completion.'),
  ('Miruro Status', 'https://status.miruro.com/', 'Live network telemetry and uptime dashboard for all official Miruro domains.
Check real-time server health, latency, maintenance alerts, and domain changes.'),
  ('animepahe', 'https://animepahe.pw/', 'Legendary anime streaming platform known for lightweight, low-data 1080p encodes.
Rapid simulcast uploads with dual-audio support and clean, minimalistic design.'),
  ('animepahe Enhancements', 'https://update.greasyfork.org/scripts/520048/AnimePahe%20Improvements.user.js', 'Community userscript that elevates the AnimePahe playback experience.
Adds auto-fullscreen, theater mode, keyboard scrubbing, and auto-next features.'),
  ('animepahe-dl', 'https://github.com/KevCui/animepahe-dl', 'Fast automated command-line downloader for fetching episodes from AnimePahe.
Supports batch downloads, custom resolution filters, and resume capability.'),
  ('KickAssAnime', 'https://kaa.lt/', 'Popular full-featured streaming hub with multi-server 1080p streams.
Equipped with automatic next episode transitions and comprehensive schedule calendar.'),
  ('MKissa', 'https://mkissa.to/', 'Clean streaming portal offering an extensive catalog of subbed and dubbed anime.
Fast video player with minimal buffering and intuitive episode navigation.'),
  ('All Manga', 'https://allmanga.to/', 'Multi-media streaming and reading portal covering both anime series and manga.
Offers high quality sub and dub streams alongside synchronized chapter releases.'),
  ('AnimeX', 'https://animex.one/', 'Modern anime platform with automatic episode progression and responsive controls.
Browse seasonal anime, trending picks, and classic retro series in full HD.'),
  ('Anikoto', 'https://anikototv.to/', 'Fast-loading streaming site featuring high bitrate video feeds and minimal ads.
Supports auto-skip intro, multiple backup players, and synchronized subtitles.'),
  ('Anisuge', 'https://animesuge.cz/', 'Sleek streaming destination with instant episode autoplay and clean dark aesthetics.
Features broad sub and dub catalogs with real-time release schedules.'),
  ('Anikoto Backup', 'https://anikoto.site/', 'Official backup destination for Anikoto to ensure round-the-clock streaming uptime.
Preserves your browsing session with mirror links and identical video sources.'),
  ('Anisuge Backup', 'https://animesuge.bid/', 'Dedicated secondary proxy server providing uninterrupted Anisuge video feeds.
High-speed caching layer optimized for smooth mobile and desktop playback.'),
  ('Anidap', 'https://anidap.lol/', 'Lightweight anime streaming website focusing on simplicity and quick playback.
Dual-audio sub and dub libraries with responsive controls and auto-next.'),
  ('Re:ANIME', 'https://reanime.to/', 'Polished streaming portal featuring seamless auto-next episode transitions.
Comprehensive collection of seasonal releases with customizable video player.'),
  ('Re:ANIME mirror (cz)', 'https://reanime.cz/', 'Central European mirror for Re:ANIME with low-latency CDN streaming servers.
Full access to subbed and dubbed catalogs with identical streaming quality.'),
  ('Re:ANIME mirror (wtf)', 'https://reanime.wtf/', 'Global alternate proxy endpoint providing resilient access to Re:ANIME content.
Offers high-definition video playback with multi-server failover options.'),
  ('Reindex', 'https://reindex.to/', 'Specialized directory indexing reliable anime streaming mirrors and domain changes.
Keeps track of active backup addresses and provides one-click gateway links.'),
  ('Restatus', 'https://restatus.me/', 'Real-time monitoring hub checking online status across popular anime websites.
Provides instant ping benchmarks and service availability reports.'),
  ('Anistream', 'https://anistream.one/', 'Streamlined video portal delivering 1080p anime episodes with zero clutter.
Features auto-next countdowns, dub selections, and fast search filtering.'),
  ('Kazora', 'https://kazora.cc/', 'Contemporary anime streaming interface with smooth navigation and crisp audio.
Includes seasonal broadcast timelines and automated next episode loading.'),
  ('Lunar', 'https://lunarx.to/', 'Quiet, minimal streaming website focused on pure playback performance.
Extensive sub and dub anime catalog organized by genre and seasonal release.'),
  ('KuroAnime', 'https://kuroanime.lol/', 'Feature-packed streaming platform with high quality video and episode auto-next.
Quick search with instant results and flexible subtitle synchronization.'),
  ('NekoWatch', 'https://nekowatch.xyz/', 'Clean anime portal offering dual audio tracks and customizable player skins.
Seamless auto-advance to next episode with minimal interruption.'),
  ('JustAnime', 'https://justanime.to/', 'Fast-loading streaming site featuring multiple video hosting mirrors.
Browse thousands of anime titles with auto-next and seasonal schedule guides.'),
  ('JustAnime Mirrors', 'https://projectjust.xyz/', 'Official repository of backup mirrors and proxy URLs for the JustAnime network.
Bookmark this portal to bypass regional ISP blocks and domain suspensions.'),
  ('AniLight', 'https://anilight.live/', 'Speed-optimized streaming engine designed for low-bandwidth environments.
Supports continuous autoplay, multiple subtitle languages, and dub options.'),
  ('AniKuro', 'https://anikuro.to/', 'Community streaming hub with dedicated sub and dub video servers.
Features clean episode listings, genre tags, and responsive playback.'),
  ('AniKuro mirror', 'https://anikuro.ru/', 'High-capacity mirror domain for the AniKuro anime streaming catalog.
Guarantees reliable streaming during peak seasonal anime release hours.'),
  ('AniKuro Status', 'https://anikuro.site/', 'Official health monitoring page displaying live server performance for AniKuro.
Tracks player uptime, database sync status, and latest domain updates.'),
  ('MeguAnimes', 'https://meguanime.com/', 'Playful, responsive streaming site featuring HD anime streams with auto-next.
Offers dual-audio options, bookmarks, and fast episode navigation.'),
  ('Aniwave', 'https://aniwaves.ru/', 'High-definition streaming platform with advanced player controls and watch history.
Extensive library of subbed and dubbed anime with automated episode progression.'),
  ('HiAnime mirror', 'https://hianimes.ru/', 'Official secondary mirror for HiAnime providing identical 1080p anime catalog.
Features multi-language audio, auto-skip intro/outro, and synchronized subs.'),
  ('123anime', 'https://123animehub.cc/', 'Reliable classic streaming directory delivering fast episodes with minimal buffering.
Features auto-next playback, English dubs, and complete movie archives.'),
  ('Senshi', 'https://senshi.to/', 'Fast-paced streaming interface designed for binge-watching seasonal anime.
Includes continuous episode autoplay and multiple streaming server choices.'),
  ('AniZone', 'https://anizone.to/', 'Focused subtitle-first streaming platform offering crisp Japanese audio tracks.
Neat categorical index covering action, shonen, romance, and fantasy series.'),
  ('AniDoor', 'https://anidoor.me/', 'Modern doorway to thousands of subbed and dubbed anime titles in full HD.
Equipped with auto-next episode triggers and responsive video playback.'),
  ('AniSnatch', 'https://anisnatch.top/', 'Lightweight video player delivering fast episode streams across all devices.
Features clear sub and dub categorization and quick episode jump controls.'),
  ('AniSnatch mirror', 'https://anisnatch.site/', 'Official secondary server for AniSnatch to ensure continuous video availability.
Maintains full access to anime series archives with low latency speeds.'),
  ('AnimeStream', 'https://anime.uniquestream.net/', 'Optimized 720p/1080p streaming platform prioritizing rapid load times.
Clean subtitle formatting and well-maintained catalog of ongoing seasonals.'),
  ('KoToTV', 'https://kototv.to/', 'Versatile streaming portal offering high-definition sub and dub video streams.
Features automated episode progression and detailed episode synopsis.'),
  ('Anime Nexus', 'https://anime.nexus/', 'Community hub connecting anime fans with verified HD streaming links.
Organized sub and dub collections with intuitive search and genre filters.'),
  ('LuffyTV', 'https://luffytv.live/', 'Ad-light streaming portal dedicated to long-running shonen and seasonal anime.
Smooth video player with multiple server fallbacks and dub support.'),
  ('LuffyTV mirror', 'https://luffytv.online/', 'High-speed backup mirror for LuffyTV providing reliable uninterrupted streams.
Bypasses network congestion with dedicated video CDN delivery.'),
  ('AniChan', 'https://anichan.to/', 'Comfortable anime viewer offering crisp Japanese audio with English subtitles.
Browse seasonal anime releases with clean episode lists and descriptions.'),
  ('AnimeParadise', 'https://www.animeparadise.moe/', 'Expansive library of popular anime series, OVA specials, and theatrical movies.
Supports dual-audio sub and dub streams with responsive controls.'),
  ('AnimeDex', 'https://animedex.fun/', 'Open-source, lightning-fast anime streaming web app with clean modern UI.
Pulls video streams from multiple providers with zero intrusive ads.'),
  ('Anify', 'https://anify.to/', 'Decentralized anime discovery and streaming portal built with modern web tech.
Aggregates high-bitrate video feeds, accurate metadata, and subtitle sync.'),
  ('AniDB (.app)', 'https://anidb.app/', 'Fast streaming client and database frontend for exploring vast anime archives.
Features detailed character bios, episode guides, and multi-server links.'),
  ('Enma', 'https://www.enma.lol/', 'Sleek dark-themed streaming website with auto-next and custom video player.
Comprehensive collection of seasonal anime, movies, and completed series.'),
  ('Anikura', 'https://anikura.club/', 'Smooth streaming hub with easy navigation between subbed and dubbed episodes.
Fast video buffering with clear quality selectors up to full 1080p.'),
  ('1Anime', 'https://1ani.me/', 'Modern video player delivering high-definition anime with automated next episode.
Features clean search filters, dub toggles, and bookmark watchlist.'),
  ('Kyren', 'https://kyren.moe/', 'Aesthetic streaming portal offering high-definition video playback.
Curated anime collections with synchronized subtitles and responsive layout.'),
  ('Yenime', 'https://yenime.net/', 'Fresh anime streaming site with fast CDN nodes and minimal buffering.
Includes both English subbed and dubbed options across top series.'),
  ('AnimeNoSub', 'https://animenosub.to/', 'Dedicated repository of raw Japanese anime broadcasts without hard subtitles.
Ideal for Japanese language learners, video editors, and AMV creators.'),
  ('AnimeOnsen', 'https://animeonsen.xyz/', 'Ad-free community anime platform built with smooth native video controls.
Optimized for fast streaming with clean subtitles and open-source backend.'),
  ('Yomi', 'https://yomi.to/', 'Polished anime streaming destination featuring seamless auto-next autoplay.
Discover top-rated anime series with high-quality English subs and dubs.'),
  ('Babyanime', 'https://babyanime.top/', 'Compact, quick-loading streaming portal with straightforward episode listings.
Offers multi-server video links with sub and dub audio support.'),
  ('AniClipse', 'https://aniclipse.com/', 'Vibrant anime streaming site featuring trending seasonal titles and classics.
High-definition video playback with easy episode navigation controls.'),
  ('AniHQ', 'https://anihq.cc/', 'High-definition video portal focusing on top-tier video and audio quality.
Comprehensive sub and dub library updated daily with new simulcasts.'),
  ('Luna', 'https://luna-stream.me/', 'Elegant streaming client with clean typography and distraction-free playback.
Browse seasonal anime and classic archives in crisp 1080p resolution.'),
  ('AniNami', 'https://aninami.site/', 'Smooth streaming portal offering quick access to latest anime broadcasts.
Equipped with dual audio selections and multiple server redundancy.'),
  ('Rive Anime', 'https://www.rivestream.app/', 'Modern progressive web app interface with auto-next and custom controls.
Streams high quality anime with subtitle personalization options.'),
  ('Rive Anime mirror', 'https://rivestream.ru/', 'Official secondary mirror for Rive Anime ensuring 24/7 global availability.
Maintains full playlist sync and low-latency streaming CDN routes.'),
  ('Rive Anime Status', 'https://rentry.co/rivestream', 'Official network status and maintenance notice board for Rive Anime services.
Stay informed on domain migrations, server patches, and feature updates.'),
  ('Kawaii Anime', 'https://kawaiianime.cc/', 'Charming streaming site offering thousands of anime series in HD quality.
Features dual audio sub/dub switches and fast auto-next transitions.'),
  ('FireAnime', 'https://fireani.me/', 'High-speed streaming portal built for seamless TV and desktop anime viewing.
Delivers crisp subtitles, fast buffer times, and organized genre filters.'),
  ('9anime', 'https://9animstv.to/', 'One of the most famous anime streaming platforms with massive title archives.
Features multiple audio tracks, auto-skip intro/outro, and 1080p playback.'),
  ('bAnime', 'https://banime.dedyn.io/', 'Minimalist ad-free anime player delivering pure video streaming enjoyment.
Features sub and dub options with automated next-episode progression.'),
  ('PirateXplay', 'https://piratexplay.cc/home', 'Dedicated streaming portal with clean video playback and rapid load times.
Browse ongoing seasonal broadcasts with high-definition subtitles.'),
  ('PirateXplay mirror', 'https://piratexplay.com/', 'Official backup server providing uninterrupted access to PirateXplay.
Fast mirror servers ensuring low latency and reliable playback.'),
  ('Kuroiru', 'https://kuroiru.co/', 'Multi-site unified anime search engine scanning multiple streaming platforms.
Find where any anime episode is currently streaming with one single query.'),
  ('Anime Streaming CSE', 'https://cse.google.com/cse?cx=006516753008110874046%3Avzcl7wcfhei', 'Google Custom Search Engine tailored specifically for anime streaming sites.
Instantly locates rare episodes, OVA specials, and mirrors across the web.'),
  ('AnimeXin', 'https://animexin.dev/', 'Premier portal for Chinese animation (Donghua) with quality English subtitles.
Daily uploads of 3D cultivation, action, and fantasy Donghua series.'),
  ('Lucifer Donghua', 'https://luciferdonghua.in/', 'Dedicated streaming platform focusing on high-definition Donghua releases.
Comprehensive archives of ongoing cultivation and martial arts series.'),
  ('LMANIME', 'https://lmanime.com/', 'Specialized Donghua streaming website featuring crisp English subtitles.
Fast video players with multi-server options and complete season packs.'),
  ('CKSub', 'https://donghua4k.net/', 'Ultra HD 4K and 1080p Donghua streaming hub with professional fansubs.
Features top-tier Chinese 3D anime series with high-bitrate video feeds.'),
  ('MyAnime', 'https://myanime.live/', 'Rich streaming catalog featuring both Japanese anime and Chinese Donghua.
Clean subtitle synchronization with multiple high-speed server choices.'),
  ('AnimeKhor', 'https://animekhor.org/', 'Leading Donghua and anime translation portal with high-speed video players.
Extensive collections of ongoing fantasy Donghua with clear English subs.'),
  ('Crimson Subs', 'https://crimsonfansubs.com/', 'Dedicated fansub group and streaming site for premium Donghua series.
High-bitrate encodes with accurate translations and timely weekly releases.'),
  ('HiAnime', 'https://hianime.to', 'Top-tier anime streaming giant featuring multi-server 1080p video feeds.
Includes auto-skip intro/outro, synchronized subs, dubs, and live comments.'),
  ('Aniwatch', 'https://aniwatchtv.to', 'Leading streaming hub with watch2gether rooms and zero forced redirects.
Offers high-bitrate sub and dub streams with customizable subtitle styling.'),
  ('GogoAnime', 'https://gogoanime3.co', 'The classic anime streaming powerhouse with the largest historical episode archive.
Fastest simulcast uploads with multiple video host mirrors and mobile support.'),
  ('Zoro.to', 'https://zoro.sx', 'Massively popular streaming interface designed for fast, seamless binge watching.
Features multi-language audio, episode schedules, and zero-buffering playback.'),
  ('Kaido', 'https://kaido.to', 'Sleek, modern anime web client with responsive dark UI and quick navigation.
Equipped with automatic next episode, intro skip, and dual-audio toggles.'),
  ('YugenAnime', 'https://yugenanime.tv', 'Minimalist, ad-light streaming destination with tracking and custom watchlists.
Features clean 1080p video player with smooth keyboard scrubbing controls.'),
  ('Marin', 'https://marin.moe', 'State-of-the-art anime web portal built with infinite scroll and modern aesthetics.
Delivers high-bitrate video playback with zero visual clutter or popups.'),
  ('AnimeKai', 'https://animekai.to', 'Community-driven streaming directory featuring 1080p episodes and seasonal charts.
Fast multi-server failover with synchronized subtitles and English dubbing.'),
  ('AnimeHeaven', 'https://animeheaven.me', 'Lightweight and mobile-friendly anime streaming site with quick episode search.
Includes complete seasonal series, movies, and OVAs with download options.'),
  ('AnimeDao', 'https://animedao.to', 'Speedy streaming portal with simple layout and daily updated simulcast releases.
Browse top-rated anime series with low-bandwidth video player options.'),
  ('Nyaa', 'https://nyaa.si', 'The world''s largest open community torrent index for raw and subbed anime media.
High-speed peer-to-peer distribution for 4K remuxes, BDMVs, and fansubs.'),
  ('SubsPlease', 'https://subsplease.org', 'Premier release group providing direct high-definition anime episode downloads.
Simulcast releases with multi-resolution 1080p, 720p, and 480p MKV files.'),
  ('AnimeFrenzy', 'https://animefrenzy.org', 'Dedicated anime streaming hub featuring comprehensive English dub collections.
Updated continuously with ongoing seasonal broadcasts and community chat.'),
  ('OtakuStream', 'https://otakustream.info', 'Social anime platform with active episode discussion threads and bookmarking.
Offers smooth video playback with light/dark theme toggles and auto-next.'),
  ('AnimeFox', 'https://animefox.tv', 'Responsive streaming client with multiple source servers and subtitle choices.
Clean user interface optimized for fast browsing on both desktop and mobile.'),
  ('AniRave', 'https://anirave.com', 'Modern ad-free anime catalog with advanced player controls and watch history.
High-definition streaming feeds with instant title lookup and seasonal lists.'),
  ('AnimeFlv', 'https://animeflv.net', 'The undisputed giant of Spanish-subbed anime streaming with massive archives.
Lightning-fast video servers with active community comments and mobile app.'),
  ('JKanime', 'https://jkanime.net', 'Popular Latin American anime streaming community with immediate simulcasts.
Multiple video player mirrors with high-speed Latin Spanish subtitle tracks.'),
  ('AnimeUnity', 'https://animeunity.to', 'Premier Italian-subbed anime portal offering pristine 1080p video encodes.
Features clean catalog navigation, seasonal rankings, and fast load times.'),
  ('VOSTFREE', 'https://vostfree.ws', 'Leading French anime platform offering subbed (VOSTFR) and dubbed (VF) series.
Multi-host video player with comprehensive archives of ongoing seasonals.'),
  ('Bilibili Global', 'https://www.bilibili.tv', 'Official licensed streaming destination for top-tier anime and Chinese Donghua.
Features multi-language official subtitles, bullet comments, and 1080p/4K.'),
  ('Kuramanime', 'https://kuramanime.run', 'Popular Indonesian anime streaming portal with batch episode downloads.
Clean user dashboard with Discord integration and fast video mirrors.'),
  ('AnimeBee', 'https://animebee.to', 'High-speed streaming site featuring multi-server failover and subtitle sync.
Browse popular ongoing seasonals and completed classics in full HD.'),
  ('MyAnimeList', 'https://myanimelist.net', 'The definitive global anime database, seasonal charts, and user score reviews.
Track your personal watchlists, read reviews, and explore seasonal countdowns.'),
  ('AniList', 'https://anilist.co', 'Modern social anime tracking platform with sleek custom lists and stats.
Discover trending seasonal anime, scoring breakdowns, and community feeds.'),
  ('Kitsu', 'https://kitsu.app', 'Contemporary anime discovery engine with personalized recommendation feeds.
Track your episode progress across devices with smooth mobile apps.'),
  ('LiveChart.me', 'https://www.livechart.me', 'Real-time seasonal anime countdown charts and official legal stream links.
Features weekly broadcast schedules, studio details, and PV trailers.'),
  ('AnimePlanet', 'https://www.anime-planet.com', 'Veteran anime recommendation database with legal video stream partnerships.
Create custom lists, track episodes, and discover personalized watch suggestions.'),
  ('AnimeUltima', 'https://animeultima.to', 'Community streaming portal with active episode discussions and discord sync.
Features subbed and dubbed anime episodes with auto-skip and auto-next.'),
  ('4Anime', 'https://4anime.gg', 'Clean anime streaming site built for high-bitrate video and fast search.
Offers dual-audio sub and dub libraries with responsive controls.'),
  ('Hanime', 'https://hanime.tv', 'Leading high-definition adult animation (18+) streaming portal with fast CDN.
Features 1080p video player, playlist management, and comprehensive tags.'),
  ('Sankaku Complex', 'https://sankakucomplex.com', 'Pop-culture news, anime media hub, and visual art archive for fans.
Covers anime industry news, gaming releases, and Japanese subculture.');
