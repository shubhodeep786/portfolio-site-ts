import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { useMagnetic } from '@/hooks/useMagnetic';

const MagneticLink = ({ as: Component = motion.a, className, children, ...props }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref, style, handlers } = useMagnetic({ strength: 0.3, disabled: prefersReducedMotion });

  return (
    <Component
      ref={ref}
      style={style}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`cursor-hover ${className}`}
      {...handlers}
      {...props}
    >
      {children}
    </Component>
  );
};

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', prefersReducedMotion ? '0%' : '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const blobY1 = useTransform(scrollYProgress, [0, 1], ['0%', prefersReducedMotion ? '0%' : '30%']);
  const blobY2 = useTransform(scrollYProgress, [0, 1], ['0%', prefersReducedMotion ? '0%' : '20%']);
  const blobY3 = useTransform(scrollYProgress, [0, 1], ['0%', prefersReducedMotion ? '0%' : '40%']);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const nameText = 'TANYA SINGH';
  const typingDelay = 0.15;
  const nameDuration = nameText.length * 0.04;

  const textLines = [
    { text: 'Full Stack Developer', delay: typingDelay + nameDuration + 0.2 },
    { text: 'MERN Stack Specialist', delay: typingDelay + nameDuration + 0.4 }
  ];

  const handleDownloadResume = () => {
    // Create a text file with resume content
    const resumeContent = `TANYA SINGH
Full Stack Developer | MERN Stack (React.js & Node.js) | TypeScript

Contact:
Email: tanyasingh1227@gmail.com
Phone: +91 9131414080
Location: Indore, India
LinkedIn: linkedin.com/in/tanya-singh9b5492225
GitHub: github.com/Tanya1227

PROFESSIONAL SUMMARY
Full Stack Software Engineer at 47Billion Information Technologies with production experience building responsive, component-driven web applications using React.js, TypeScript, and JavaScript (ES6+), integrated with REST APIs in production.

[Full resume content would be here]`;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Tanya_Singh_Resume.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />
      {/* Cursor-reactive grid brighten (fine pointers only, hidden via CSS on touch/reduced-motion) */}
      <div className="grid-spotlight" aria-hidden="true" />

      {/* Aurora blobs with parallax + ambient drift */}
      <motion.div
        style={{ y: blobY1 }}
        className={`absolute top-10 left-0 w-[28rem] h-[28rem] bg-cyan-500/10 rounded-full blur-3xl ${
          prefersReducedMotion ? '' : 'animate-blob-drift-1'
        }`}
      />
      <motion.div
        style={{ y: blobY2 }}
        className={`absolute bottom-10 right-0 w-[32rem] h-[32rem] bg-blue-500/10 rounded-full blur-3xl ${
          prefersReducedMotion ? '' : 'animate-blob-drift-2'
        }`}
      />
      <motion.div
        style={{ y: blobY3 }}
        className={`absolute top-1/3 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl ${
          prefersReducedMotion ? '' : 'animate-blob-drift-3'
        }`}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-8">
          {/* Terminal-style intro + name */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.3 }}
              className="font-mono text-sm md:text-base text-cyan-400/80 flex items-center gap-2"
            >
              <span>&gt; whoami</span>
              <span className="inline-block w-2 h-4 bg-cyan-400 animate-blink" />
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white"
                style={{ textShadow: '0 0 80px rgba(6, 182, 212, 0.3)' }}
              >
                {nameText.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.03, delay: typingDelay + i * 0.04 }}
                  >
                    {char === ' ' ? ' ' : char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            {textLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: line.delay, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p
                  className={
                    index === 0
                      ? 'text-2xl md:text-4xl font-light text-cyan-400'
                      : 'text-xl md:text-2xl font-light text-slate-400'
                  }
                >
                  {line.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact info with stagger animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-6 text-slate-400 text-sm"
          >
            {[
              { icon: MapPin, text: 'Indore, India' },
              { icon: Mail, text: 'tanyasingh1227@gmail.com' },
              { icon: Phone, text: '+91 9131414080' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="flex items-center gap-2 group"
              >
                <item.icon className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                <span className="group-hover:text-white transition-colors">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-wrap gap-4 pt-8"
          >
            <MagneticLink
              href="https://github.com/Tanya1227"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 backdrop-blur-md border border-cyan-500/30 text-cyan-400 rounded-lg font-medium flex items-center gap-2 transition-colors hover:border-cyan-500/60 hover:bg-cyan-500/10 hover:shadow-glow"
            >
              <Github className="w-5 h-5" />
              GitHub
            </MagneticLink>
            <MagneticLink
              href="https://linkedin.com/in/tanya-singh9b5492225"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 backdrop-blur-md border border-cyan-500/30 text-cyan-400 rounded-lg font-medium flex items-center gap-2 transition-colors hover:border-cyan-500/60 hover:bg-cyan-500/10 hover:shadow-glow"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </MagneticLink>
            <MagneticLink
              as={motion.button}
              onClick={handleDownloadResume}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium flex items-center gap-2 hover:shadow-glow-lg transition-shadow"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </MagneticLink>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-cyan-500 rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
