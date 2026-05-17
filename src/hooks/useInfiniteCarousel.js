import { useEffect, useRef, useCallback } from 'react';

/**
 * Auto-scrolling horizontal carousel with seamless loop.
 * Pauses while the user drags, scrolls, or hovers; resumes after release.
 */
export function useInfiniteCarousel(speed = 0.55) {
  const scrollerRef = useRef(null);
  const pausedRef = useRef(false);
  const interactingRef = useRef(false);
  const resumeTimerRef = useRef(null);

  const pause = useCallback(() => {
    interactingRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  }, []);

  const scheduleResume = useCallback((delay = 2000) => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      interactingRef.current = false;
    }, delay);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let rafId;

    const loop = () => {
      if (!pausedRef.current && !interactingRef.current) {
        el.scrollLeft += speed;
        const half = el.scrollWidth / 2;
        if (half > 0 && el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    const onPointerDown = () => pause();
    const onPointerUp = () => scheduleResume(1500);
    const onWheel = () => {
      pause();
      scheduleResume(2500);
    };
    const onScroll = () => {
      if (interactingRef.current) {
        const half = el.scrollWidth / 2;
        if (half > 0 && el.scrollLeft >= half) {
          el.scrollLeft -= half;
        } else if (el.scrollLeft <= 0) {
          /* allow natural scroll at start */
        }
      }
    };
    const onEnter = () => {
      pausedRef.current = true;
    };
    const onLeave = () => {
      pausedRef.current = false;
    };

    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointerup', onPointerUp);
    el.addEventListener('pointercancel', onPointerUp);
    el.addEventListener('wheel', onWheel, { passive: true });
    el.addEventListener('scroll', onScroll, { passive: true });
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('pointercancel', onPointerUp);
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('scroll', onScroll);
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [speed, pause, scheduleResume]);

  return { scrollerRef, pause, scheduleResume };
}
