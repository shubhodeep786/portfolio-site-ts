import { useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

export function useMagnetic({ strength = 0.35, disabled = false } = {}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  const handleMouseMove = (event) => {
    if (disabled || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    const relX = event.clientX - (bounds.left + bounds.width / 2);
    const relY = event.clientY - (bounds.top + bounds.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    ref,
    style: disabled ? {} : { x: springX, y: springY },
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
  };
}
