import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, BookOpen, Trophy, Code2, Layers, Brain, Database, Cpu, Terminal, Wrench } from 'lucide-react';
import { TECH_ICONS } from '@/lib/techIcons';
import SectionBackground from './SectionBackground';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3']
    },
    {
      icon: Award,
      title: 'Frontend',
      skills: [
        'React.js',
        'Redux',
        'Tailwind CSS',
        'Responsive Design',
        'API Integration',
        'Component-Driven Architecture'
      ]
    },
    {
      icon: Terminal,
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs']
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MongoDB']
    },
    {
      icon: Wrench,
      title: 'Developer Tools',
      skills: ['Git', 'GitHub', 'Postman', 'Figma', 'VS Code']
    },
    {
      icon: Brain,
      title: 'AI Engineering & Developer Productivity',
      skills: [
        'Claude Code',
        'Cursor',
        'Antigravity IDE',
        'OpenAI API',
        'Prompt Engineering',
        'AI-Assisted Development'
      ]
    },
    {
      icon: Layers,
      title: 'Core Concepts',
      wide: true,
      skills: [
        'State Management',
        'Component Architecture',
        'RESTful Architecture',
        'Responsive Design',
        'Cross-Browser Compatibility',
        'UI/UX Principles',
        'Agile/Scrum',
        'API-Driven Development'
      ]
    }
  ];

  const leadership = [
    {
      title: 'Google Developer Student Clubs Lead',
      org: 'Medi-Caps University',
      period: 'Jul 2023 – Jul 2024',
      description: 'Led a 15+ member cross-functional team, driving developer advocacy through Google Cloud & GenAI Study Jams and technical workshops.'
    },
    {
      title: 'Open-Source Contributor (Hacktoberfest)',
      org: 'GitHub',
      period: 'Oct 2023',
      description: 'Delivered 6 merged pull requests across 10+ open-source React.js repositories, contributing to community-driven UI improvements.'
    }
  ];

  const certifications = [
    'NPTEL "Programming in Java" (Elite/Silver)',
    'IBM "Tools for Data Science"',
    'Smart India Hackathon (SIH) 2023 Round 1 Qualifier'
  ];

  const skillContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  const skillCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const pillContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } }
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
  };

  const leadershipContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const leadershipItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="skills" ref={ref} className="relative overflow-hidden py-32 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 px-6 scroll-mt-24">
      <SectionBackground variant="violet" drift={1} />
      <div className="relative z-10 max-w-7xl mx-auto space-y-32">
        {/* Skills Section */}
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
            <p className="eyebrow">// 04 — Toolbox</p>
            <h2 className="text-5xl md:text-7xl font-black text-white">
              TECHNICAL
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                SKILLS
              </span>
            </h2>
          </div>

          <motion.div
            variants={skillContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={skillCardVariants}
                whileHover={{ scale: 1.02 }}
                className={`glass-card p-8 transition-shadow ${category.wide ? 'md:col-span-2' : ''}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                <motion.div
                  variants={pillContainerVariants}
                  className="flex flex-wrap gap-2"
                >
                  {category.skills.map((skill, i) => {
                    const Icon = TECH_ICONS[skill] || Code2;
                    return (
                      <motion.span
                        key={i}
                        variants={pillVariants}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="cursor-hover flex items-center gap-1.5 px-4 py-2 bg-white/[0.03] text-slate-300 text-sm rounded-lg border border-white/10 hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-glow transition-all"
                      >
                        <Icon className="w-3.5 h-3.5 shrink-0" />
                        {skill}
                      </motion.span>
                    );
                  })}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          id="leadership"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-20 scroll-mt-24"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent origin-left"
            />
            <p className="eyebrow">// 05 — Beyond Code</p>
            <h2 className="text-5xl md:text-7xl font-black text-white">
              LEADERSHIP
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                & ACHIEVEMENTS
              </span>
            </h2>
          </div>

          <motion.div
            variants={leadershipContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {leadership.map((role, index) => (
              <motion.div
                key={index}
                variants={leadershipItemVariants}
                whileHover={{ x: 10 }}
                className="glass-card p-8 transition-shadow"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{role.title}</h3>
                <div className="text-cyan-400 mb-4 font-mono text-sm">
                  {role.org} | {role.period}
                </div>
                <p className="text-slate-300 leading-relaxed">{role.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl font-bold text-white pt-8"
          >
            Certifications & Achievements
          </motion.h3>
          <motion.div
            variants={leadershipContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={leadershipItemVariants}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-3 glass-card p-6 transition-shadow"
              >
                <Trophy className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">{cert}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
