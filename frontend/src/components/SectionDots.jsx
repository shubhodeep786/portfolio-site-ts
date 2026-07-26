import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { SECTIONS } from '@/constants/sections';
import { useActiveSection } from '@/hooks/useActiveSection';
import { scrollToSection } from '@/lib/lenis';

const SectionDots = () => {
  const ids = useMemo(() => SECTIONS.map((s) => s.id), []);
  const activeId = useActiveSection(ids);

  return (
    <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-4">
      {SECTIONS.map((section) => {
        const isActive = activeId === section.id;
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollToSection(section.id)}
            aria-label={`Scroll to ${section.label}`}
            aria-current={isActive}
            className="cursor-hover group flex items-center gap-3"
          >
            <span
              className={`pointer-events-none whitespace-nowrap font-mono text-xs uppercase tracking-widest transition-all duration-300 ${
                isActive
                  ? 'opacity-100 text-cyan-400 translate-x-0'
                  : 'opacity-0 text-slate-400 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
              }`}
            >
              {section.label}
            </span>
            <span className="relative flex items-center justify-center w-3 h-3">
              {isActive && (
                <motion.span
                  layoutId="section-dot-ring"
                  className="absolute inset-[-4px] rounded-full border border-cyan-400/60"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isActive ? 'bg-cyan-400 scale-125 shadow-glow' : 'bg-slate-600 group-hover:bg-slate-400'
                }`}
              />
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default SectionDots;
