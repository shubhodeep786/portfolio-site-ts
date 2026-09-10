import { motion } from 'framer-motion';
import { Braces, FlaskConical, LayoutTemplate, ListChecks, Server, Sparkles, Terminal } from 'lucide-react';
import { useTilt } from '@/hooks/useTilt';
import { cn, slugify } from '@/lib/utils';

const EASE = [0.2, 0.8, 0.2, 1];

const CATEGORY_ICONS = {
  Languages: Braces,
  Frontend: LayoutTemplate,
  Backend: Server,
  Testing: FlaskConical,
  Tools: Terminal,
  Practices: ListChecks,
};

export function SkillChips({ category, items, wide = false, index = 0 }) {
  const { ref, style, handlers } = useTilt({ max: 8 });
  const Icon = CATEGORY_ICONS[category] || Sparkles;

  return (
    <motion.div
      ref={ref}
      {...handlers}
      style={{ ...style, transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: EASE, delay: index * 0.08 }}
      className={cn('surface-card rounded-card p-6 sm:p-7', wide && 'md:col-span-2 lg:col-span-1')}
    >
      <div className="icon-badge">
        <Icon className="h-5 w-5 text-ink-900" strokeWidth={1.75} aria-hidden="true" />
      </div>
      <h3 className="mt-4 font-display text-base font-semibold text-ink-900">{category}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item, i) => (
          <motion.span
            key={item}
            data-testid={`skill-chip-${slugify(item)}`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: EASE, delay: i * 0.05 }}
            whileHover={{ scale: 1.08, y: -3 }}
            className="glass-chip rounded-pill px-3 py-1.5 font-mono text-xs text-ink-700"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillChips;
