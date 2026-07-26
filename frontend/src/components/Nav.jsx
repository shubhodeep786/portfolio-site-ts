import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { SECTIONS } from '@/constants/sections';
import { useActiveSection } from '@/hooks/useActiveSection';
import { scrollToSection } from '@/lib/lenis';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ids = useMemo(() => SECTIONS.map((s) => s.id), []);
  const activeId = useActiveSection(ids);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  const handleClick = (id) => (event) => {
    event.preventDefault();
    setMenuOpen(false);
    scrollToSection(id);
  };

  const glassy = scrolled || menuOpen;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        glassy
          ? 'bg-slate-950/70 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={handleClick('hero')}
          className="cursor-hover font-mono text-sm tracking-widest text-white hover:text-cyan-400 transition-colors"
        >
          TS<span className="text-cyan-400">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={handleClick(section.id)}
                className={`cursor-hover relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeId === section.id ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                {activeId === section.id && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/30 rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{section.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="cursor-hover md:hidden p-2 -mr-2 text-slate-300 hover:text-cyan-400 transition-colors"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden overflow-hidden bg-slate-950/90 backdrop-blur-md border-b border-white/10"
          >
            <ul className="px-6 py-4 space-y-1">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={handleClick(section.id)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      activeId === section.id
                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Nav;
