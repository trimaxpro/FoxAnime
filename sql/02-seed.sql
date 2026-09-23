drop table if exists anime_sites;

create table anime_sites (
  id integer primary key autoincrement,
  name text not null,
  url text not null unique,
  description text not null,
  category text default 'streaming'
);

create index idx_anime_sites_name on anime_sites(name);

insert into anime_sites (name, url, description, category) values
  ('Anime Streaming Apps', 'https://fmhy.net/video/#anime-streaming-apps', 'Curated community index of top open-source anime streaming clients and applications.
Provides verified direct links, setup guides, and safety ratings for all platforms.', 'index'),
  ('Wotaku', 'https://wotaku.wiki/websites', 'Comprehensive otaku directory listing reliable anime, manga, and light novel resources.
Features active domain monitoring, privacy tips, and community-vetted mirrors.', 'index'),
  ('The Index', 'https://theindex.moe/library/anime', 'Well-structured open-source database organizing anime streaming portals and trackers.
Constantly audited for uptime, ad intrusion levels, and video playback quality.', 'index'),
  ('The Wiki', 'https://thewiki.moe/', 'Extensive knowledge base documenting media servers, streaming portals, and scraper tools.
Includes optimization tips, subtitle guides, and alternative streaming endpoints.', 'index'),
  ('EverythingMoe', 'https://everythingmoe.com/', 'The gold-standard community index comparing dozens of anime streaming services.
Ranks sites by ad density, video resolution, dub availability, and server speed.', 'index'),
  ('EverythingMoe (mirror)', 'https://everythingmoe.org/', 'High-speed official backup mirror for the EverythingMoe community directory.
Provides uninterrupted access when the primary domain encounters DNS blocks.', 'mirrors'),
  ('Miruro', 'https://www.miruro.com/', 'Ultra-fast modern anime player supporting soft & hard subtitles with English dubs.
Includes automated next episode playback, custom themes, and progress sync.', 'streaming'),
  ('Miruro (mirror - tv)', 'https://miruro.tv/', 'Official television-optimized mirror delivering seamless Miruro streaming playback.
Fast CDN failover ensuring low latency streaming during high traffic hours.', 'mirrors'),
  ('Miruro (mirror - bz)', 'https://miruro.bz/', 'Alternate European proxy mirror for continuous Miruro anime streaming access.
Maintains full playlist sync, watchlist bookmarks, and subtitle options.', 'mirrors'),
  ('Miruro (mirror - ru)', 'https://miruro.ru/', 'Regional mirror providing high-bitrate video streams for Miruro users worldwide.
Full support for 1080p resolution, keyboard shortcuts, and episode autoplay.', 'mirrors'),
  ('Miruro (mirror - to)', 'https://miruro.to/', 'Global top-level domain mirror for Miruro featuring identical real-time libraries.
Offers dual audio options with instant search auto-completion.', 'mirrors'),
  ('Miruro Status', 'https://status.miruro.com/', 'Live network telemetry and uptime dashboard for all official Miruro domains.
Check real-time server health, latency, maintenance alerts, and domain changes.', 'tools'),
  ('animepahe', 'https://animepahe.pw/', 'Legendary anime streaming platform known for lightweight, low-data 1080p encodes.
Rapid simulcast uploads with dual-audio support and clean, minimalistic design.', 'streaming'),
  ('animepahe-dl', 'https://github.com/KevCui/animepahe-dl', 'Fast automated command-line downloader for fetching episodes from AnimePahe.
Supports batch downloads, custom resolution filters, and resume capability.', 'tools'),
  ('KickAssAnime', 'https://kaa.lt/', 'Popular full-featured streaming hub with multi-server 1080p streams.
Equipped with automatic next episode transitions and comprehensive schedule calendar.', 'streaming'),
  ('MKissa', 'https://mkissa.to/', 'Clean streaming portal offering an extensive catalog of subbed and dubbed anime.
Fast video player with minimal buffering and intuitive episode navigation.', 'streaming'),
  ('All Manga', 'https://allmanga.to/', 'Multi-media streaming and reading portal covering both anime series and manga.
Offers high quality sub and dub streams alongside synchronized chapter releases.', 'streaming'),
  ('AnimeX', 'https://animex.one/', 'Modern anime platform with automatic episode progression and responsive controls.
Browse seasonal anime, trending picks, and classic retro series in full HD.', 'streaming'),
  ('Anikoto', 'https://anikototv.to/', 'Fast-loading streaming site featuring high bitrate video feeds and minimal ads.
Supports auto-skip intro, multiple backup players, and synchronized subtitles.', 'streaming'),
  ('Anisuge', 'https://animesuge.cz/', 'Sleek streaming destination with instant episode autoplay and clean dark aesthetics.
Features broad sub and dub catalogs with real-time release schedules.', 'streaming'),
  ('Anikoto Backup', 'https://anikoto.site/', 'Official backup destination for Anikoto to ensure round-the-clock streaming uptime.
Preserves your browsing session with mirror links and identical video sources.', 'mirrors'),
  ('Anisuge Backup', 'https://animesuge.bid/', 'Dedicated secondary proxy server providing uninterrupted Anisuge video feeds.
High-speed caching layer optimized for smooth mobile and desktop playback.', 'mirrors'),
  ('Anidap', 'https://anidap.lol/', 'Lightweight anime streaming website focusing on simplicity and quick playback.
Dual-audio sub and dub libraries with responsive controls and auto-next.', 'streaming'),
  ('Re:ANIME', 'https://reanime.to/', 'Polished streaming portal featuring seamless auto-next episode transitions.
Comprehensive collection of seasonal releases with customizable video player.', 'streaming'),
  ('Re:ANIME mirror (cz)', 'https://reanime.cz/', 'Central European mirror for Re:ANIME with low-latency CDN streaming servers.
Full access to subbed and dubbed catalogs with identical streaming quality.', 'mirrors'),
  ('Re:ANIME mirror (wtf)', 'https://reanime.wtf/', 'Global alternate proxy endpoint providing resilient access to Re:ANIME content.
Offers high-definition video playback with multi-server failover options.', 'mirrors'),
  ('Reindex', 'https://reindex.to/', 'Specialized directory indexing reliable anime streaming mirrors and domain changes.
Keeps track of active backup addresses and provides one-click gateway links.', 'index'),
  ('Restatus', 'https://restatus.me/', 'Real-time monitoring hub checking online status across popular anime websites.
Provides instant ping benchmarks and service availability reports.', 'tools'),
  ('Anistream', 'https://anistream.one/', 'Streamlined video portal delivering 1080p anime episodes with zero clutter.
Features auto-next countdowns, dub selections, and fast search filtering.', 'streaming'),
  ('Kazora', 'https://kazora.cc/', 'Contemporary anime streaming interface with smooth navigation and crisp audio.
Includes seasonal broadcast timelines and automated next episode loading.', 'streaming'),
  ('Lunar', 'https://lunarx.to/', 'Quiet, minimal streaming website focused on pure playback performance.
Extensive sub and dub anime catalog organized by genre and seasonal release.', 'streaming'),
  ('KuroAnime', 'https://kuroanime.lol/', 'Feature-packed streaming platform with high quality video and episode auto-next.
Quick search with instant results and flexible subtitle synchronization.', 'streaming'),
  ('NekoWatch', 'https://nekowatch.xyz/', 'Clean anime portal offering dual audio tracks and customizable player skins.
Seamless auto-advance to next episode with minimal interruption.', 'streaming'),
  ('JustAnime', 'https://justanime.to/', 'Fast-loading streaming site featuring multiple video hosting mirrors.
Browse thousands of anime titles with auto-next and seasonal schedule guides.', 'streaming'),
  ('JustAnime Mirrors', 'https://projectjust.xyz/', 'Official repository of backup mirrors and proxy URLs for the JustAnime network.
Bookmark this portal to bypass regional ISP blocks and domain suspensions.', 'mirrors'),
  ('AniLight', 'https://anilight.live/', 'Speed-optimized streaming engine designed for low-bandwidth environments.
Supports continuous autoplay, multiple subtitle languages, and dub options.', 'streaming'),
  ('AniKuro', 'https://anikuro.to/', 'Community streaming hub with dedicated sub and dub video servers.
Features clean episode listings, genre tags, and responsive playback.', 'streaming'),
  ('AniKuro mirror', 'https://anikuro.ru/', 'High-capacity mirror domain for the AniKuro anime streaming catalog.
Guarantees reliable streaming during peak seasonal anime release hours.', 'mirrors'),
  ('AniKuro Status', 'https://anikuro.site/', 'Official health monitoring page displaying live server performance for AniKuro.
Tracks player uptime, database sync status, and latest domain updates.', 'tools'),
  ('MeguAnimes', 'https://meguanime.com/', 'Playful, responsive streaming site featuring HD anime streams with auto-next.
Offers dual-audio options, bookmarks, and fast episode navigation.', 'streaming'),
  ('HiAnime mirror', 'https://hianimes.ru/', 'Official secondary mirror for HiAnime providing identical 1080p anime catalog.
Features multi-language audio, auto-skip intro/outro, and synchronized subs.', 'mirrors'),
  ('123anime', 'https://123animehub.cc/', 'Reliable classic streaming directory delivering fast episodes with minimal buffering.
Features auto-next playback, English dubs, and complete movie archives.', 'streaming'),
  ('Senshi', 'https://senshi.to/', 'Fast-paced streaming interface designed for binge-watching seasonal anime.
Includes continuous episode autoplay and multiple streaming server choices.', 'streaming'),
  ('AniZone', 'https://anizone.to/', 'Focused subtitle-first streaming platform offering crisp Japanese audio tracks.
Neat categorical index covering action, shonen, romance, and fantasy series.', 'streaming'),
  ('AniDoor', 'https://anidoor.me/', 'Modern doorway to thousands of subbed and dubbed anime titles in full HD.
Equipped with auto-next episode triggers and responsive video playback.', 'streaming'),
  ('AniSnatch', 'https://anisnatch.top/', 'Lightweight video player delivering fast episode streams across all devices.
Features clear sub and dub categorization and quick episode jump controls.', 'streaming'),
  ('AniSnatch mirror', 'https://anisnatch.site/', 'Official secondary server for AniSnatch to ensure continuous video availability.
Maintains full access to anime series archives with low latency speeds.', 'mirrors'),
  ('AnimeStream', 'https://anime.uniquestream.net/', 'Optimized 720p/1080p streaming platform prioritizing rapid load times.
Clean subtitle formatting and well-maintained catalog of ongoing seasonals.', 'streaming'),
  ('KoToTV', 'https://kototv.to/', 'Versatile streaming portal offering high-definition sub and dub video streams.
Features automated episode progression and detailed episode synopsis.', 'streaming'),
  ('Anime Nexus', 'https://anime.nexus/', 'Community hub connecting anime fans with verified HD streaming links.
Organized sub and dub collections with intuitive search and genre filters.', 'streaming'),
  ('LuffyTV', 'https://luffytv.live/', 'Ad-light streaming portal dedicated to long-running shonen and seasonal anime.
Smooth video player with multiple server fallbacks and dub support.', 'streaming'),
  ('LuffyTV mirror', 'https://luffytv.online/', 'High-speed backup mirror for LuffyTV providing reliable uninterrupted streams.
Bypasses network congestion with dedicated video CDN delivery.', 'mirrors'),
  ('AniChan', 'https://anichan.to/', 'Comfortable anime viewer offering crisp Japanese audio with English subtitles.
Browse seasonal anime releases with clean episode lists and descriptions.', 'streaming'),
  ('AnimeParadise', 'https://www.animeparadise.moe/', 'Expansive library of popular anime series, OVA specials, and theatrical movies.
Supports dual-audio sub and dub streams with responsive controls.', 'streaming'),
  ('AnimeDex', 'https://animedex.fun/', 'Open-source, lightning-fast anime streaming web app with clean modern UI.
Pulls video streams from multiple providers with zero intrusive ads.', 'streaming'),
  ('Anify', 'https://anify.to/', 'Decentralized anime discovery and streaming portal built with modern web tech.
Aggregates high-bitrate video feeds, accurate metadata, and subtitle sync.', 'streaming'),
  ('AniDB (.app)', 'https://anidb.app/', 'Fast streaming client and database frontend for exploring vast anime archives.
Features detailed character bios, episode guides, and multi-server links.', 'streaming'),
  ('Enma', 'https://www.enma.lol/', 'Sleek dark-themed streaming website with auto-next and custom video player.
Comprehensive collection of seasonal anime, movies, and completed series.', 'streaming'),
  ('Anikura', 'https://anikura.club/', 'Smooth streaming hub with easy navigation between subbed and dubbed episodes.
Fast video buffering with clear quality selectors up to full 1080p.', 'streaming'),
  ('1Anime', 'https://1ani.me/', 'Modern video player delivering high-definition anime with automated next episode.
Features clean search filters, dub toggles, and bookmark watchlist.', 'streaming'),
  ('Kyren', 'https://kyren.moe/', 'Aesthetic streaming portal offering high-definition video playback.
Curated anime collections with synchronized subtitles and responsive layout.', 'streaming'),
  ('Yenime', 'https://yenime.net/', 'Fresh anime streaming site with fast CDN nodes and minimal buffering.
Includes both English subbed and dubbed options across top series.', 'streaming'),
  ('AnimeNoSub', 'https://animenosub.to/', 'Dedicated repository of raw Japanese anime broadcasts without hard subtitles.
Ideal for Japanese language learners, video editors, and AMV creators.', 'streaming'),
  ('AnimeOnsen', 'https://animeonsen.xyz/', 'Ad-free community anime platform built with smooth native video controls.
Optimized for fast streaming with clean subtitles and open-source backend.', 'streaming'),
  ('Yomi', 'https://yomi.to/', 'Polished anime streaming destination featuring seamless auto-next autoplay.
Discover top-rated anime series with high-quality English subs and dubs.', 'streaming'),
  ('Babyanime', 'https://babyanime.top/', 'Compact, quick-loading streaming portal with straightforward episode listings.
Offers multi-server video links with sub and dub audio support.', 'streaming'),
  ('AniClipse', 'https://aniclipse.com/', 'Vibrant anime streaming site featuring trending seasonal titles and classics.
High-definition video playback with easy episode navigation controls.', 'streaming'),
  ('AniHQ', 'https://anihq.cc/', 'High-definition video portal focusing on top-tier video and audio quality.
Comprehensive sub and dub library updated daily with new simulcasts.', 'streaming'),
  ('Luna', 'https://luna-stream.me/', 'Elegant streaming client with clean typography and distraction-free playback.
Browse seasonal anime and classic archives in crisp 1080p resolution.', 'streaming'),
  ('AniNami', 'https://aninami.site/', 'Smooth streaming portal offering quick access to latest anime broadcasts.
Equipped with dual audio selections and multiple server redundancy.', 'streaming'),
  ('Rive Anime', 'https://www.rivestream.app/', 'Modern progressive web app interface with auto-next and custom controls.
Streams high quality anime with subtitle personalization options.', 'streaming'),
  ('Rive Anime mirror', 'https://rivestream.ru/', 'Official secondary mirror for Rive Anime ensuring 24/7 global availability.
Maintains full playlist sync and low-latency streaming CDN routes.', 'mirrors'),
  ('Rive Anime Status', 'https://rentry.co/rivestream', 'Official network status and maintenance notice board for Rive Anime services.
Stay informed on domain migrations, server patches, and feature updates.', 'tools'),
  ('Kawaii Anime', 'https://kawaiianime.cc/', 'Charming streaming site offering thousands of anime series in HD quality.
Features dual audio sub/dub switches and fast auto-next transitions.', 'streaming'),
  ('FireAnime', 'https://fireani.me/', 'High-speed streaming portal built for seamless TV and desktop anime viewing.
Delivers crisp subtitles, fast buffer times, and organized genre filters.', 'streaming'),
  ('9anime', 'https://9animstv.to/', 'One of the most famous anime streaming platforms with massive title archives.
Features multiple audio tracks, auto-skip intro/outro, and 1080p playback.', 'streaming'),
  ('bAnime', 'https://banime.dedyn.io/', 'Minimalist ad-free anime player delivering pure video streaming enjoyment.
Features sub and dub options with automated next-episode progression.', 'streaming'),
  ('PirateXplay', 'https://piratexplay.cc/home', 'Dedicated streaming portal with clean video playback and rapid load times.
Browse ongoing seasonal broadcasts with high-definition subtitles.', 'streaming'),
  ('PirateXplay mirror', 'https://piratexplay.com/', 'Official backup server providing uninterrupted access to PirateXplay.
Fast mirror servers ensuring low latency and reliable playback.', 'mirrors'),
  ('Kuroiru', 'https://kuroiru.co/', 'Multi-site unified anime search engine scanning multiple streaming platforms.
Find where any anime episode is currently streaming with one single query.', 'tools'),
  ('AnimeXin', 'https://animexin.dev/', 'Premier portal for Chinese animation (Donghua) with quality English subtitles.
Daily uploads of 3D cultivation, action, and fantasy Donghua series.', 'donghua'),
  ('Lucifer Donghua', 'https://luciferdonghua.in/', 'Dedicated streaming platform focusing on high-definition Donghua releases.
Comprehensive archives of ongoing cultivation and martial arts series.', 'donghua'),
  ('LMANIME', 'https://lmanime.com/', 'Specialized Donghua streaming website featuring crisp English subtitles.
Fast video players with multi-server options and complete season packs.', 'donghua'),
  ('CKSub', 'https://donghua4k.net/', 'Ultra HD 4K and 1080p Donghua streaming hub with professional fansubs.
Features top-tier Chinese 3D anime series with high-bitrate video feeds.', 'donghua'),
  ('MyAnime', 'https://myanime.live/', 'Rich streaming catalog featuring both Japanese anime and Chinese Donghua.
Clean subtitle synchronization with multiple high-speed server choices.', 'donghua'),
  ('AnimeKhor', 'https://animekhor.org/', 'Leading Donghua and anime translation portal with high-speed video players.
Extensive collections of ongoing fantasy Donghua with clear English subs.', 'donghua'),
  ('Crimson Subs', 'https://crimsonfansubs.com/', 'Dedicated fansub group and streaming site for premium Donghua series.
High-bitrate encodes with accurate translations and timely weekly releases.', 'donghua'),
  ('HiAnime', 'https://hianimes.se/', 'Top-tier anime streaming giant featuring multi-server 1080p video feeds.
Includes auto-skip intro/outro, synchronized subs, dubs, and live comments.', 'streaming'),
  ('Aniwatch', 'https://aniwatch.co.at/', 'Leading streaming hub with watch2gether rooms and zero forced redirects.
Offers high-bitrate sub and dub streams with customizable subtitle styling.', 'streaming'),
  ('GogoAnime', 'https://gogoanime.or.at/', 'The classic anime streaming powerhouse with the largest historical episode archive.
Fastest simulcast uploads with multiple video host mirrors and mobile support.', 'streaming'),
  ('Zoro.to', 'https://zorotv.com.in/', 'Massively popular streaming interface designed for fast, seamless binge watching.
Features multi-language audio, episode schedules, and zero-buffering playback.', 'streaming'),
  ('YugenAnime', 'https://yugenanime.tv', 'Minimalist, ad-light streaming destination with tracking and custom watchlists.
Features clean 1080p video player with smooth keyboard scrubbing controls.', 'streaming'),
  ('AnimeKai', 'https://animekai.com.ro/', 'Community-driven streaming directory featuring 1080p episodes and seasonal charts.
Fast multi-server failover with synchronized subtitles and English dubbing.', 'streaming'),
  ('AnimeHeaven', 'https://animeheaven.me', 'Lightweight and mobile-friendly anime streaming site with quick episode search.
Includes complete seasonal series, movies, and OVAs with download options.', 'streaming'),
  ('AnimeDao', 'https://animedao.in/', 'Speedy streaming portal with simple layout and daily updated simulcast releases.
Browse top-rated anime series with low-bandwidth video player options.', 'streaming'),
  ('Nyaa', 'https://nyaa.si', 'The world''s largest open community torrent index for raw and subbed anime media.
High-speed peer-to-peer distribution for 4K remuxes, BDMVs, and fansubs.', 'torrent'),
  ('SubsPlease', 'https://subsplease.org', 'Premier release group providing direct high-definition anime episode downloads.
Simulcast releases with multi-resolution 1080p, 720p, and 480p MKV files.', 'tools'),
  ('AnimeFrenzy', 'https://animefrenzy.cc/watch/59970/1', 'Dedicated anime streaming hub featuring comprehensive English dub collections.
Updated continuously with ongoing seasonal broadcasts and community chat.', 'streaming'),
  ('AnimeFlv', 'https://animeflv.or.at/', 'The undisputed giant of Spanish-subbed anime streaming with massive archives.
Lightning-fast video servers with active community comments and mobile app.', 'streaming'),
  ('JKanime', 'https://jkanime.net', 'Popular Latin American anime streaming community with immediate simulcasts.
Multiple video player mirrors with high-speed Latin Spanish subtitle tracks.', 'streaming'),
  ('AnimeUnity', 'https://animeunity.site/', 'Premier Italian-subbed anime portal offering pristine 1080p video encodes.
Features clean catalog navigation, seasonal rankings, and fast load times.', 'streaming'),
  ('VOSTFREE', 'https://vostfree.ws', 'Leading French anime platform offering subbed (VOSTFR) and dubbed (VF) series.
Multi-host video player with comprehensive archives of ongoing seasonals.', 'streaming'),
  ('Bilibili Global', 'https://www.bilibili.tv', 'Official licensed streaming destination for top-tier anime and Chinese Donghua.
Features multi-language official subtitles, bullet comments, and 1080p/4K.', 'donghua'),
  ('Kuramanime', 'https://kuramanime.run', 'Popular Indonesian anime streaming portal with batch episode downloads.
Clean user dashboard with Discord integration and fast video mirrors.', 'streaming'),
  ('Kitsu', 'https://kitsu.app', 'Contemporary anime discovery engine with personalized recommendation feeds.
Track your episode progress across devices with smooth mobile apps.', 'index'),
  ('LiveChart.me', 'https://www.livechart.me', 'Real-time seasonal anime countdown charts and official legal stream links.
Features weekly broadcast schedules, studio details, and PV trailers.', 'index'),
  ('4Anime', 'https://4anime.com.ro/', 'Clean anime streaming site built for high-bitrate video and fast search.
Offers dual-audio sub and dub libraries with responsive controls.', 'streaming'),
  ('Hanime', 'https://hanime.tv', 'Leading high-definition adult animation (18+) streaming portal with fast CDN.
Features 1080p video player, playlist management, and comprehensive tags.', 'streaming'),
  ('Sankaku Complex', 'https://sankakucomplex.com', 'Pop-culture news, anime media hub, and visual art archive for fans.
Covers anime industry news, gaming releases, and Japanese subculture.', 'index');
