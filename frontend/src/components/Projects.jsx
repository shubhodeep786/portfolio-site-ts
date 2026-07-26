import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Code2 } from 'lucide-react';
import { useTilt } from '@/hooks/useTilt';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import SectionBackground from './SectionBackground';

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const ProjectCard = ({ project }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref, style, handlers } = useTilt({ max: 6, disabled: prefersReducedMotion });

  return (
    <motion.div variants={itemVariants} className="group relative">
      <motion.div
        ref={ref}
        style={style}
        {...handlers}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="glass-card p-8 overflow-hidden h-full transition-shadow"
      >
        {/* Preview strip — abstract "window" treatment revealed on hover */}
        <div className="relative -mx-8 -mt-8 mb-6 h-28 overflow-hidden bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-b border-white/5">
          <div className="absolute top-3 left-4 flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-600" />
            <span className="w-2 h-2 rounded-full bg-slate-600" />
            <span className="w-2 h-2 rounded-full bg-slate-600" />
          </div>
          <motion.div
            initial={{ opacity: 0.4 }}
            whileHover={{ opacity: 0.9 }}
            className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-violet-500/20"
          />
          <motion.div
            initial={{ x: '-120%' }}
            whileHover={prefersReducedMotion ? {} : { x: '120%' }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
          />
        </div>

        {/* Number */}
        <div className="gradient-number text-6xl md:text-7xl font-black mb-4 opacity-60 group-hover:opacity-100 transition-opacity" style={{ fontFamily: 'monospace' }}>
          {project.number}
        </div>

        {/* Content */}
        <div className="relative space-y-4">
          <div>
            <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              {project.name}
            </h3>
            <p className="text-cyan-400 text-sm mt-1">{project.subtitle}</p>
          </div>

          <p className="text-slate-300 leading-relaxed">{project.description}</p>

          {project.highlight && (
            <div className="bg-white/[0.03] border border-white/10 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Code2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-400 text-sm">{project.highlight}</p>
              </div>
            </div>
          )}

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-slate-800/60 text-slate-400 text-xs rounded-full border border-slate-700 group-hover:border-cyan-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);

  const projects = [
    {
      number: '01',
      name: 'Saheli',
      subtitle: 'Menstrual Healthcare Web Platform',
      description: 'Built a full-stack menstrual healthcare platform (MERN) with secure authentication and cycle-tracking data in MongoDB via a Node.js/Express API, and a responsive React.js/TypeScript frontend for logging and insights.',
      tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI API'],
      highlight: 'Integrated an AI health assistant using the OpenAI API to answer user questions about symptoms and cycle patterns in plain language, aimed at making sensitive health information easier and less intimidating to access'
    },
    {
      number: '02',
      name: 'EquipNet',
      subtitle: 'Medical Equipment Rental Platform',
      description: 'Built a full-stack medical-equipment rental marketplace (MERN) with Google Maps-based location search, a Node.js/Express API, and MongoDB-backed listings and bookings; shortlisted for Google Solution Challenge India Regional Bootcamp 2024.',
      tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Google Maps API', 'OpenAI API'],
      highlight: "Integrated an AI-powered recommendation feature using the OpenAI API to suggest suitable equipment and rental duration from a user's described medical need"
    },
    {
      number: '03',
      name: 'House Price Prediction',
      subtitle: 'ML Web Application',
      description: 'Built a full-stack property price estimator (MERN): a React.js/TypeScript form collects location, size, and amenities; a Node.js/Express API calls the OpenAI API for the prediction plus a natural-language explanation; MongoDB stores listings and prediction history.',
      tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI API']
    },
    {
      number: '04',
      name: 'QuizGenie',
      subtitle: 'AI-Powered Trivia Challenge',
      description: 'Built a full-stack MERN trivia game, with a Node.js/Express API and MongoDB storing questions, scores, and leaderboards behind a React.js/TypeScript frontend with a live timer and progressive prize logic.',
      tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI API'],
      highlight: 'Integrated the OpenAI API to dynamically generate new quiz questions and hints on demand, keeping gameplay fresh beyond a fixed question bank'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  return (
    <section id="projects" ref={ref} className="relative overflow-hidden py-32 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 px-6 scroll-mt-24">
      <SectionBackground variant="blue-violet" drift={3} />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent origin-left"
            />
            <p className="eyebrow">// 03 — Selected Work</p>
            <h2 className="text-5xl md:text-7xl font-black text-white">
              FEATURED
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                PROJECTS
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
