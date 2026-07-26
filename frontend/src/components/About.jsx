import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from './AnimatedCounter';
import SectionBackground from './SectionBackground';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { number: '02+', label: 'Years Experience' },
    { number: '10+', label: 'Open Source PRs' },
    { number: '04+', label: 'Major Projects' }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.8 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" ref={ref} className="relative overflow-hidden py-32 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 px-6 scroll-mt-24">
      <SectionBackground variant="cyan" drift={1} />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent origin-left"
            />
            <p className="eyebrow">// 01 — Overview</p>
            <h2 className="text-5xl md:text-7xl font-black text-white">
              PROFESSIONAL
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                SUMMARY
              </span>
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl leading-relaxed text-slate-300 max-w-5xl font-light"
          >
            Full Stack Software Engineer at{' '}
            <span className="text-cyan-400 font-medium">47Billion Information Technologies</span>{' '}
            with production experience building responsive, component-driven web applications using{' '}
            <span className="text-cyan-400 font-medium">React.js, TypeScript, and JavaScript (ES6+)</span>,
            integrated with REST APIs in production. Hands-on backend development across independent{' '}
            <span className="text-cyan-400 font-medium">MERN-stack projects</span> including REST API design,
            authentication, and MongoDB schema design in Node.js/Express, alongside real-time features
            and AI-integrated flows.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -4 }}
                className="cursor-hover glass-card p-8 transition-shadow"
              >
                <div className="text-5xl font-black text-cyan-400 mb-2">
                  <AnimatedCounter value={stat.number} isInView={isInView} delay={0.9 + index * 0.1} />
                </div>
                <div className="text-slate-400 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
