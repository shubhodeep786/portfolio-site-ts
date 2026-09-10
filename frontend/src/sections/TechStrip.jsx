import { motion } from 'framer-motion';
import { ALL_SKILLS } from '@/data/resume';
import { Marquee } from '@/components/Marquee';
import { useTilt } from '@/hooks/useTilt';
import { slugify } from '@/lib/utils';

function TechPill({ label }) {
  const { ref, style, handlers } = useTilt({ max: 12 });

  return (
    <motion.span
      ref={ref}
      {...handlers}
      style={{ ...style, transformStyle: 'preserve-3d' }}
      data-testid={`tech-pill-${slugify(label)}`}
      className="tech-pill rounded-pill mx-2 inline-flex items-center px-4 py-2 font-mono text-xs font-semibold text-ink-900"
    >
      {label}
    </motion.span>
  );
}

export function TechStrip() {
  const items = ALL_SKILLS;

  return (
    <section aria-label="Technology stack" className="relative py-10">
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
        <filter id="tech-glass-refraction">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="turb" />
          <feDisplacementMap in="SourceGraphic" in2="turb" scale="6" xChannelSelector="R" yChannelSelector="G" />
          <feSpecularLighting result="spec" in="turb" specularExponent="12" lightingColor="#ffffff" surfaceScale="2">
            <feDistantLight azimuth="135" elevation="60" />
          </feSpecularLighting>
          <feComposite in="spec" in2="SourceAlpha" operator="in" result="specClipped" />
          <feBlend mode="overlay" in="SourceGraphic" in2="specClipped" />
        </filter>
      </svg>

      <Marquee speed={34}>
        {items.map((item) => (
          <TechPill key={item} label={item} />
        ))}
      </Marquee>
    </section>
  );
}

export default TechStrip;
