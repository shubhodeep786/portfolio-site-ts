import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const PALETTES = {
  cyan: ['bg-cyan-500/15', 'bg-blue-500/10'],
  blue: ['bg-blue-500/15', 'bg-cyan-500/10'],
  'blue-violet': ['bg-blue-500/15', 'bg-violet-500/15'],
  violet: ['bg-violet-500/15', 'bg-blue-500/10'],
  'violet-warm': ['bg-violet-500/15', 'bg-fuchsia-500/10'],
};

const DRIFT_CLASSES = ['animate-blob-drift-1', 'animate-blob-drift-2', 'animate-blob-drift-3'];

const SectionBackground = ({ variant = 'cyan', drift = 1 }) => {
  const wrapperRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ['start end', 'end start'] });

  const blobY1 = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ['0%', '0%'] : ['-18%', '18%']);
  const blobY2 = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ['0%', '0%'] : ['12%', '-12%']);

  const [colorA, colorB] = PALETTES[variant] || PALETTES.cyan;
  const driftA = prefersReducedMotion ? '' : DRIFT_CLASSES[(drift - 1) % 3];
  const driftB = prefersReducedMotion ? '' : DRIFT_CLASSES[drift % 3];

  return (
    <div
      ref={wrapperRef}
      className="absolute inset-0 overflow-hidden pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,#000_12%,#000_88%,transparent)]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-[0.18]" />
      <motion.div
        style={{ y: blobY1 }}
        className={`absolute -top-24 -left-24 w-[30rem] h-[30rem] ${colorA} rounded-full blur-3xl ${driftA}`}
      />
      <motion.div
        style={{ y: blobY2 }}
        className={`absolute -bottom-24 -right-24 w-[26rem] h-[26rem] ${colorB} rounded-full blur-3xl ${driftB}`}
      />
    </div>
  );
};

export default SectionBackground;
