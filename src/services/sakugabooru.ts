export interface SakugabooruPost {
  id: number;
  tags: string;
  file_url: string;
  file_ext: string;
  preview_url: string;
  author: string;
  source: string;
  score: number;
  rating: string;
  width?: number;
  height?: number;
}

// Blocklist for specific posts/tags requested to be excluded
const BLOCKED_POST_IDS = new Set<number>([312049]);
const BLOCKED_TAGS = ['isekai_maou', 'isekai_maou_to_shoukan_shoujo_no_dorei_majutsu'];

// Fallback high quality Sakugabooru clips in case of network/CORS issues
export const FALLBACK_POSTS: SakugabooruPost[] = [
  {
    id: 312054,
    tags: "effects fighting fire lightning smears smoke",
    file_url: "https://www.sakugabooru.com/data/d0823a5fe9cea38dbe51b92b09753a9e.mp4",
    file_ext: "mp4",
    preview_url: "https://www.sakugabooru.com/data/preview/d0823a5fe9cea38dbe51b92b09753a9e.jpg",
    author: "geshalt",
    source: "Devil Summoner: Soul Hackers",
    score: 25,
    rating: "s"
  },
  {
    id: 312053,
    tags: "background_animation effects ice running",
    file_url: "https://www.sakugabooru.com/data/c93d37d8fd271542aeb1119be4e05038.mp4",
    file_ext: "mp4",
    preview_url: "https://www.sakugabooru.com/data/preview/c93d37d8fd271542aeb1119be4e05038.jpg",
    author: "jovzkie",
    source: "One Piece #1171",
    score: 17,
    rating: "s"
  },
  {
    id: 312052,
    tags: "character_acting hair smears",
    file_url: "https://www.sakugabooru.com/data/d408c61dac506d9a4918a71e01ea1fda.mp4",
    file_ext: "mp4",
    preview_url: "https://www.sakugabooru.com/data/preview/d408c61dac506d9a4918a71e01ea1fda.jpg",
    author: "silverview",
    source: "One Piece #1171",
    score: 10,
    rating: "s"
  },
  {
    id: 312051,
    tags: "character_acting fabric hair smears",
    file_url: "https://www.sakugabooru.com/data/58209b746e17f8fc3e4f2eb6f5055d23.mp4",
    file_ext: "mp4",
    preview_url: "https://www.sakugabooru.com/data/preview/58209b746e17f8fc3e4f2eb6f5055d23.jpg",
    author: "silverview",
    source: "One Piece #1168",
    score: 12,
    rating: "s"
  }
];

/**
 * Fetch random video posts from Sakugabooru API
 */
export async function fetchSakugabooruClips(limit: number = 20): Promise<SakugabooruPost[]> {
  const randomPage = Math.floor(Math.random() * 15) + 1;
  const targetUrl = `https://www.sakugabooru.com/post.json?limit=${limit}&page=${randomPage}&tags=rating:s`;

  try {
    // 1. Try Direct API Call first
    const res = await fetch(targetUrl, {
      headers: {
        'Accept': 'application/json'
      }
    });

    if (res.ok) {
      const data: SakugabooruPost[] = await res.json();
      const validClips = filterVideoPosts(data);
      if (validClips.length > 0) {
        return shuffleArray(validClips);
      }
    }
  } catch (err) {
    console.warn('Direct Sakugabooru API fetch failed or blocked by CORS. Attempting CORS proxy...', err);
  }

  try {
    // 2. Try CORS Proxy Fallback
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`;
    const proxyRes = await fetch(proxyUrl);
    if (proxyRes.ok) {
      const data: SakugabooruPost[] = await proxyRes.json();
      const validClips = filterVideoPosts(data);
      if (validClips.length > 0) {
        return shuffleArray(validClips);
      }
    }
  } catch (err) {
    console.warn('CORS proxy fetch failed. Using fallback curated clips.', err);
  }

  // 3. Fail-safe curated posts fallback
  return shuffleArray(FALLBACK_POSTS);
}

/**
 * Filter posts for MP4/WebM videos with safe rating and excluding blocked items
 */
function filterVideoPosts(posts: SakugabooruPost[]): SakugabooruPost[] {
  if (!Array.isArray(posts)) return [];
  return posts.filter(post => {
    if (!post || !post.file_url) return false;
    
    // Check if explicitly blocked by ID
    if (BLOCKED_POST_IDS.has(post.id)) return false;

    // Check if post contains blocked tags or source keywords
    const postTags = (post.tags || '').toLowerCase();
    const postSource = (post.source || '').toLowerCase();
    const hasBlockedTag = BLOCKED_TAGS.some(bt => postTags.includes(bt) || postSource.includes(bt));
    if (hasBlockedTag) return false;

    const isVideo = post.file_ext === 'mp4' || 
                    post.file_ext === 'webm' || 
                    post.file_url.endsWith('.mp4') || 
                    post.file_url.endsWith('.webm');
    const isSafe = post.rating === 's';

    return isVideo && isSafe;
  });
}

/**
 * Helper to shuffle clip queue
 */
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Clean up tag string for display
 */
function cleanTag(tag: string): string {
  return tag.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export function formatPostTags(tags: string, max: number = 3): string[] {
  if (!tags) return [];
  const rawList = tags.split(' ');
  const filtered = rawList.filter(t => 
    !['animated', 'effects', 'presumed', 'artist_unknown'].includes(t.toLowerCase())
  );
  const displayList = filtered.length > 0 ? filtered : rawList;
  return displayList.slice(0, max).map(cleanTag);
}
