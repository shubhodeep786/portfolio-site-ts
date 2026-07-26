import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const HOVER_SELECTOR = 'a, button, [role="button"], input, textarea, select, .cursor-hover';

const CustomCursor = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 500, damping: 40 });
  const ringY = useSpring(dotY, { stiffness: 500, damping: 40 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    document.documentElement.classList.add('custom-cursor-active');

    const handleMouseMove = (event) => {
      dotX.set(event.clientX);
      dotY.set(event.clientY);
    };

    const handleMouseOver = (event) => {
      setIsHovering(Boolean(event.target.closest(HOVER_SELECTOR)));
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [prefersReducedMotion, dotX, dotY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-[100] mix-blend-difference"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-cyan-400/60 pointer-events-none z-[100] mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 56 : 32,
          height: isHovering ? 56 : 32,
          opacity: isHovering ? 1 : 0.6,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
    </>
  );
};

export default CustomCursor;
