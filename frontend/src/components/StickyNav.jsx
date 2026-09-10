import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Command, Github, Linkedin, Menu, X } from 'lucide-react';
import { SECTIONS } from '@/constants/sections';
import { RESUME } from '@/data/resume';
import { NAV } from '@/constants/testIds/home';
import { useActiveSection } from '@/hooks/useActiveSection';
import { scrollToSection } from '@/hooks/useLenis';
import { MagneticButton } from './MagneticButton';

const EASE = [0.2, 0.8, 0.2, 1];
const SECTION_IDS = SECTIONS.map((section) => section.id);

export function StickyNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  const handleNavClick = (id) => (event) => {
    event.preventDefault();
    scrollToSection(id);
    setMobileOpen(false);
  };

  const openCommandPalette = () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
  };

  return (
    <>
      <div className="sticky top-3 z-40 flex justify-center px-4 sm:top-4">
        <nav
          aria-label="Primary"
          className="glass-chip shadow-nav rounded-pill flex w-full max-w-5xl items-center gap-1 px-3 py-2"
        >
          <a
            href="#hero"
            onClick={handleNavClick('hero')}
            data-testid={NAV.brandMark}
            className="focus-neon rounded-pill px-3 py-1.5 font-mono text-sm font-semibold text-ink-900"
          >
            [{RESUME.profile.initials}]
          </a>

          <div className="mx-auto hidden items-center gap-1 xl:flex">
            {SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={handleNavClick(section.id)}
                data-testid={`nav-link-${section.id}`}
                className="focus-neon relative rounded-pill px-3 py-1.5 text-sm text-ink-700"
              >
                {activeId === section.id && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-pill bg-surface-100"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{section.label}</span>
              </a>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-1">
            <button
              type="button"
              onClick={openCommandPalette}
              data-testid={NAV.commandButton}
              aria-label="Open command palette"
              className="focus-neon hidden h-9 w-9 items-center justify-center rounded-pill text-ink-500 hover:text-ink-900 xl:inline-flex"
            >
              <Command className="h-4 w-4" aria-hidden="true" />
            </button>
            <a
              href={RESUME.profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="focus-neon hidden h-9 w-9 items-center justify-center rounded-pill text-ink-500 hover:text-ink-900 xl:inline-flex"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={RESUME.profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="focus-neon hidden h-9 w-9 items-center justify-center rounded-pill text-ink-500 hover:text-ink-900 xl:inline-flex"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
            <MagneticButton
              as="a"
              href="#contact"
              onClick={handleNavClick('contact')}
              data-testid={NAV.ctaButton}
              className="glass-button-dark cta-shimmer focus-neon hidden rounded-pill px-4 py-2 text-sm font-medium text-white xl:inline-flex"
            >
              Let&apos;s talk
            </MagneticButton>

            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              data-testid={NAV.menuToggle}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="focus-neon flex h-11 w-11 items-center justify-center rounded-pill text-ink-900 xl:hidden"
            >
              <motion.span
                key={mobileOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="flex"
              >
                {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
              </motion.span>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[35] xl:hidden"
            data-lenis-prevent
          >
            <button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 bg-ink-900/20"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="glass-modal rounded-card absolute left-4 right-4 top-20 grid grid-cols-1 gap-1 p-4 sm:grid-cols-2"
            >
              {SECTIONS.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={handleNavClick(section.id)}
                  className="focus-neon rounded-2xl px-4 py-3 text-base text-ink-900 hover:bg-surface-100"
                >
                  {section.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleNavClick('contact')}
                className="glass-button-dark rounded-2xl px-4 py-3 text-center text-base font-medium text-white sm:col-span-2"
              >
                Let&apos;s talk
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default StickyNav;
