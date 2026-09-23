# 🦊 FoxAnime v1.1.0 - Windows Release

FoxAnime 1.1.0 is out. This one is mostly about playback, search, and keeping track of what you watch. Below is everything that changed since 1.0.0.

---

## Playback

- Played in 1080p over HLS. Buffering and connection errors now show a proper message with a retry button instead of a dead screen.
- Episodes can load from more than one server now. If one fails, the app falls back to the next.
- Intro and outro skipping are here. You can tap the skip button, or turn on auto-skip in Settings so it does it for you.
- Auto-next is available too — the next episode starts after a 5 second countdown. You can turn this off.
- Picture-in-Picture works. If you switch to another tab while something's playing, it keeps playing in a small floating window.
- Subtitles are supported (SRT files get converted to VTT automatically).

## Search

- Search results update as you type. No need to press enter, and results come in with a short delay so it doesn't hammer the server.
- Suggested terms show up as chips while you type.
- The search covers both the anime catalog and the hentai catalog.
- Browse still has the MAL-based popular lists, and they keep loading as you scroll.

## Library

- Watch history is saved automatically, including which episode you're on and how far into it you got.
- The History page groups entries by date, shows thumbnails, and lets you jump straight back into where you stopped. You can also delete individual entries.
- Bookmarks (watchlist) work on cards and on the detail page.

## Desktop / Native

- The app still bundles its own local backend. It starts on launch, checks its own health, and stops when you close the app.
- Cover image loading is cached locally now, so browsing is faster over time.
- Stream embeds behind Cloudflare challenges are handled automatically using Chrome-like impersonation. This was the biggest annoyance in 1.0.0.
- Clear-cache button in Settings wipes local data.
- The window is still frameless with a custom, draggable titlebar. Dark glassmorphism look, 60 fps.

## Settings

- Theme (dark/light), default quality (1080p), playback speed, auto-next, auto-skip intro/outro, auto-fullscreen, and an NSFW toggle.
- NSFW content is locked unless your Telegram account is a member of the official channel (`t.me/foxanimeapp`).

---

## Downloads

| Asset | Description | Size |
| :--- | :--- | :--- |
| `Fox-Anime-v1.1.0-Windows.zip` | Compressed Windows package | ~108.7 MB |
| `Fox Anime-Setup-1.1.0.exe` | Windows 10/11 64-bit installer | ~108.9 MB |
| `Fox-Anime-1.1.0-mac.dmg` | macOS (Intel + Apple Silicon) | — |
| `Fox-Anime-1.1.0.AppImage` | Linux (64-bit) | — |

### SHA256 Checksum
```text
2D225CA4638205DE5640BEE6B86494D855D0C1860B8300ACA3C6E731DC79E509  Fox-Anime-v1.1.0-Windows.zip
```

---

## System requirements

- Windows 10 / 11 (64-bit), macOS, or Linux
- 4 GB RAM minimum, 8 GB recommended
- A broadband connection for 1080p streams

---

## Legal

- Copyright (c) 2026 trimaxpro / FoxAnime. All rights reserved.
- FoxAnime is proprietary software. It does not host any video files itself; all content is linked from third-party providers.