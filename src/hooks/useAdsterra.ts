import { useEffect, useRef } from 'react';

export type AtOptions = {
  key: string;
  format: string;
  height: number;
  width: number;
  params: Record<string, unknown>;
};

const COOLDOWN_MS = 1500;
const RENDER_WAIT_MS = 3500;
const MAX_TOTAL_ATTEMPTS = 15;
const MAX_CONSECUTIVE_FAILS = 6;

type StorageSnapshot = { local: string[]; session: string[]; cookies: string[] };

const collectKeys = (store: Storage | undefined): string[] => {
  if (!store) return [];
  const keys: string[] = [];
  try {
    for (let i = 0; i < store.length; i++) {
      const k = store.key(i);
      if (k !== null) keys.push(k);
    }
  } catch {
    /* storage unavailable */
  }
  return keys;
};

const captureSnapshot = (): StorageSnapshot => ({
  local: collectKeys(typeof window !== 'undefined' ? window.localStorage : undefined),
  session: collectKeys(typeof window !== 'undefined' ? window.sessionStorage : undefined),
  cookies: document.cookie
    .split(';')
    .map((c) => c.split('=')[0]?.trim())
    .filter(Boolean),
});

// Remove ONLY state that appeared after the snapshot (i.e. metadata written by
// this ad's own scripts during a failed attempt). Pre-existing keys — including
// the Social Bar's and Popunder's frequency caps — are left untouched.
const purgeNewKeys = (snapshot: StorageSnapshot) => {
  const removeNew = (store: Storage | undefined, known: string[]) => {
    if (!store) return;
    try {
      for (let i = store.length - 1; i >= 0; i--) {
        const k = store.key(i);
        if (k !== null && !known.includes(k)) store.removeItem(k);
      }
    } catch {
      /* storage unavailable */
    }
  };
  removeNew(window.localStorage, snapshot.local);
  removeNew(window.sessionStorage, snapshot.session);

  try {
    const kept = new Set(snapshot.cookies);
    document.cookie.split(';').forEach((cookie) => {
      const name = cookie.split('=')[0]?.trim();
      if (!name || kept.has(name) || name.startsWith('_cf')) return;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    });
  } catch {
    /* cookies unavailable */
  }
};

type HolderRef = { current: HTMLDivElement | null };

export const useAdsterra = (holderRef: HolderRef, atOptions: AtOptions) => {
  const lastInjectRef = useRef(0);
  const failsRef = useRef(0);
  const totalRef = useRef(0);
  const snapshotRef = useRef<StorageSnapshot>({ local: [], session: [], cookies: [] });

  useEffect(() => {
    const holder = holderRef.current;
    if (!holder) return;

    let disposed = false;
    let waitId = 0;
    let observer: MutationObserver | undefined;

    // Captured before any injection, after the Social Bar / Popunder scripts
    // (loaded earlier in index.html) have already written their throttle keys.
    snapshotRef.current = captureSnapshot();

    const hasAd = () => !!(holder && holder.querySelector('iframe'));

    const inject = () => {
      if (disposed || !holder || !holder.isConnected || hasAd()) return;

      window.clearTimeout(waitId);
      waitId = window.setTimeout(() => {
        if (!hasAd()) inject();
      }, RENDER_WAIT_MS);

      const now = Date.now();
      if (now - lastInjectRef.current < COOLDOWN_MS) return;
      if (totalRef.current >= MAX_TOTAL_ATTEMPTS) return;
      if (failsRef.current >= MAX_CONSECUTIVE_FAILS) return;
      lastInjectRef.current = now;
      totalRef.current += 1;
      failsRef.current += 1;

      purgeNewKeys(snapshotRef.current);
      holder.querySelectorAll('script').forEach((s) => s.remove());

      const conf = document.createElement('script');
      conf.type = 'text/javascript';
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)};`;

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.highrevenueformat.com/${atOptions.key}/invoke.js`;

      holder.appendChild(conf);
      holder.appendChild(script);
    };

    // re-inject immediately if the rendered ad node is removed later
    observer = new MutationObserver(() => {
      if (hasAd()) {
        failsRef.current = 0;
      } else {
        inject();
      }
    });
    observer.observe(holder, { childList: true });

    inject();

    return () => {
      disposed = true;
      window.clearTimeout(waitId);
      observer?.disconnect();
    };
  }, [holderRef, atOptions]);
};
