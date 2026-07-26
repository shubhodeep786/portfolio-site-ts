import { useEffect } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const BackgroundFX = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    let frame = null;
    const handleMouseMove = (event) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const root = document.documentElement.style;
        root.setProperty('--spotlight-x', `${event.clientX}px`);
        root.setProperty('--spotlight-y', `${event.clientY}px`);
        root.setProperty('--spotlight-page-x', `${event.pageX}px`);
        root.setProperty('--spotlight-page-y', `${event.pageY}px`);
        frame = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [prefersReducedMotion]);

  return (
    <>
      {!prefersReducedMotion && <div className="cursor-spotlight" aria-hidden="true" />}
      <div className="noise-overlay" aria-hidden="true" />
    </>
  );
};

export default BackgroundFX;
