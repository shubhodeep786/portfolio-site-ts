import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import SectionBackground from './SectionBackground';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      number: '01',
      title: 'Associate Software Engineer',
      company: '47Billion Information Technologies Pvt. Ltd.',
      period: 'Jan 2025 – Present',
      points: [
        'Architected reusable, type-safe React.js/TypeScript component libraries, eliminating duplicate UI code across enterprise teams',
        'Engineered centralized REST API integration via reusable hooks, reducing integration time by 65% in production applications',
        'Accelerated design-to-development handoff by 60% using componentized architecture and AI-assisted workflows',
        'Collaborated in Agile ceremonies and sprint planning, improving estimation accuracy and delivery predictability'
      ]
    },
    {
      number: '02',
      title: 'Software Development Intern',
      company: '47Billion Information Technologies Pvt. Ltd.',
      period: 'Jun 2024 – Aug 2024',
      points: [
        'Engineered a backend search engine for a Housing Appraisal Platform, automating property data collection workflows',
        'Integrated REST APIs into the React.js frontend for end-to-end property search, collaborating in an Agile environment'
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="experience" ref={ref} className="relative overflow-hidden py-32 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 px-6 scroll-mt-24">
      <SectionBackground variant="blue" drift={2} />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-20"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent origin-left"
            />
            <p className="eyebrow">// 02 — Career</p>
            <h2 className="text-5xl md:text-7xl font-black text-white">
              WORK
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                EXPERIENCE
              </span>
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group glass-card p-8 md:p-10 transition-shadow"
              >
                <div className="flex gap-8">
                  {/* Number */}
                  <div
                    className="gradient-number text-6xl md:text-8xl font-black transition-opacity opacity-60 group-hover:opacity-100"
                    style={{ fontFamily: 'monospace' }}
                  >
                    {exp.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4 pt-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-cyan-400 mt-2">
                          <Briefcase className="w-5 h-5" />
                          <span className="text-lg">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 font-mono text-sm">
                        <Calendar className="w-5 h-5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 pl-6">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-slate-300 text-lg relative before:content-['▹'] before:absolute before:-left-6 before:text-cyan-400">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
