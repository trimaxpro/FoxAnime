import React, { useEffect, useRef, useState, useCallback } from 'react';
import { fetchSakugabooruClips, SakugabooruPost, FALLBACK_POSTS } from '../services/sakugabooru';

interface SakugabooruBackgroundProps {
  children?: React.ReactNode;
  initialBlur?: 'sm' | 'md' | 'lg' | 'none';
  className?: string;
}

export const SakugabooruBackground: React.FC<SakugabooruBackgroundProps> = ({
  children,
  initialBlur = 'md',
  className = ''
}) => {
  // Initialize immediately with fallback clips for 0ms startup delay on fresh load/restart
  const [slot0Clip, setSlot0Clip] = useState<SakugabooruPost | null>(FALLBACK_POSTS[0] || null);
  const [slot1Clip, setSlot1Clip] = useState<SakugabooruPost | null>(FALLBACK_POSTS[1] || null);
  const [clipsQueue, setClipsQueue] = useState<SakugabooruPost[]>(FALLBACK_POSTS.slice(2));
  const [activeSlot, setActiveSlot] = useState<0 | 1>(0);
  
  const [isMuted] = useState<boolean>(true);
  const [blurLevel] = useState<'sm' | 'md' | 'lg' | 'none'>(initialBlur);
  const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false);

  const videoRef0 = useRef<HTMLVideoElement | null>(null);
  const videoRef1 = useRef<HTMLVideoElement | null>(null);
  const isTransitioningRef = useRef<boolean>(false);

  // Play active video immediately on mount or slot change
  useEffect(() => {
    const activeVideo = activeSlot === 0 ? videoRef0.current : videoRef1.current;
    if (activeVideo) {
      activeVideo.muted = true;
      activeVideo.play().catch(() => {});
    }
  }, [activeSlot]);

  // Fetch live API clips in background without delaying initial render
  useEffect(() => {
    const loadLiveClipsInBackground = async () => {
      try {
        const posts = await fetchSakugabooruClips(25);
        if (posts.length > 0) {
          setClipsQueue(prev => [...prev, ...posts]);
        }
      } catch (err) {
        console.warn('Background Sakugabooru prefetch failed:', err);
      }
    };
    loadLiveClipsInBackground();
  }, []);

  // Fetch more clips when queue runs low
  const fetchMoreIfNeeded = useCallback(async (currentQueue: SakugabooruPost[]) => {
    if (currentQueue.length < 4 && !isFetchingMore) {
      setIsFetchingMore(true);
      try {
        const newClips = await fetchSakugabooruClips(20);
        setClipsQueue(prev => [...prev, ...newClips]);
      } catch (err) {
        console.warn('Failed to pre-fetch more Sakugabooru clips', err);
      } finally {
        setIsFetchingMore(false);
      }
    }
  }, [isFetchingMore]);

  // Transition to next clip seamlessly (Auto-Next)
  const advanceToNextClip = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    setClipsQueue(prevQueue => {
      let queue = [...prevQueue];
      let nextClipToLoad: SakugabooruPost | null = null;

      if (queue.length > 0) {
        nextClipToLoad = queue.shift()!;
      } else {
        // Fallback if queue exhausted before pre-fetch finished
        nextClipToLoad = activeSlot === 0 ? slot0Clip : slot1Clip;
      }

      fetchMoreIfNeeded(queue);

      const nextSlot = activeSlot === 0 ? 1 : 0;
      const targetVideo = nextSlot === 0 ? videoRef0.current : videoRef1.current;

      if (nextSlot === 0) {
        setActiveSlot(0);
        setTimeout(() => {
          setSlot1Clip(nextClipToLoad);
          isTransitioningRef.current = false;
        }, 800);
      } else {
        setActiveSlot(1);
        setTimeout(() => {
          setSlot0Clip(nextClipToLoad);
          isTransitioningRef.current = false;
        }, 800);
      }

      if (targetVideo) {
        targetVideo.currentTime = 0;
        targetVideo.play().catch(e => console.warn('Autoplay prevented or interrupted', e));
      }

      return queue;
    });
  }, [activeSlot, slot0Clip, slot1Clip, fetchMoreIfNeeded]);

  // Sync mute state to video elements
  useEffect(() => {
    if (videoRef0.current) videoRef0.current.muted = isMuted;
    if (videoRef1.current) videoRef1.current.muted = isMuted;
  }, [isMuted]);

  // Handle video playback errors by auto-advancing to the next clip
  const handleVideoError = (slot: 0 | 1) => {
    console.warn(`Sakugabooru clip in slot ${slot} failed to load. Auto-advancing...`);
    advanceToNextClip();
  };

  // Map blur state to CSS Tailwind classes
  const blurClasses = {
    none: 'backdrop-blur-none bg-neutral-950/40',
    sm: 'backdrop-blur-sm bg-neutral-950/60',
    md: 'backdrop-blur-md bg-neutral-950/70',
    lg: 'backdrop-blur-xl bg-neutral-950/80',
  }[blurLevel];

  return (
    <div className={`relative w-full overflow-hidden bg-neutral-950 ${className}`}>
      
      {/* Background Dual-Video Player Layer (Confined to Container) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        
        {/* Video Slot 0 */}
        {slot0Clip && (
          <video
            ref={videoRef0}
            src={slot0Clip.file_url}
            autoPlay
            muted={isMuted}
            playsInline
            preload="auto"
            onCanPlay={(e) => e.currentTarget.play().catch(() => {})}
            onEnded={advanceToNextClip}
            onError={() => handleVideoError(0)}
            className={`absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-1000 ease-in-out ${
              activeSlot === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        )}

        {/* Video Slot 1 */}
        {slot1Clip && (
          <video
            ref={videoRef1}
            src={slot1Clip.file_url}
            autoPlay
            muted={isMuted}
            playsInline
            preload="auto"
            onCanPlay={(e) => e.currentTarget.play().catch(() => {})}
            onEnded={advanceToNextClip}
            onError={() => handleVideoError(1)}
            className={`absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-1000 ease-in-out ${
              activeSlot === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        )}

      </div>

      {/* Blur & Vignette Backdrop Overlay Layer */}
      <div className={`absolute inset-0 z-10 transition-all duration-500 ${blurClasses}`} />
      
      {/* Dynamic Red Glow & Inner Grid Mask Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 radial-mask pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/80 z-10 pointer-events-none" />

      {/* Main Hero Foreground Content */}
      <div className="relative z-20">
        {children}
      </div>

    </div>
  );
};
