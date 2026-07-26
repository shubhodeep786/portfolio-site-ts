import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const AnimatedCounter = ({ value, isInView, duration = 1.5, delay = 0 }) => {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : '';

  const prefersReducedMotion = usePrefersReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    if (prefersReducedMotion) {
      count.set(target);
      return;
    }

    const controls = animate(count, target, { duration, delay, ease: 'easeOut' });
    return () => controls.stop();
  }, [isInView, target, duration, delay, prefersReducedMotion, count]);

  return (
    <span>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
