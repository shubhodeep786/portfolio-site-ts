import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import SectionBackground from './SectionBackground';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tanyasingh1227@gmail.com',
      href: 'mailto:tanyasingh1227@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9131414080',
      href: 'tel:+919131414080'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Indore, India',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Tanya1227'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/tanya-singh9b5492225'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden py-32 bg-slate-950 px-6 scroll-mt-24">
      <SectionBackground variant="violet-warm" drift={2} />
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
            <p className="eyebrow">// 06 — Say Hello</p>
            <h2 className="text-5xl md:text-7xl font-black text-white">
              GET IN
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                TOUCH
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <p className="text-xl text-slate-300 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="space-y-6"
              >
                {contactInfo.map((info, index) => (
                  <motion.div key={index} variants={itemVariants} whileHover={{ x: 8 }} className="group">
                    {info.href ? (
                      <a
                        href={info.href}
                        className="cursor-hover flex items-center gap-4 glass-card p-6 transition-shadow"
                      >
                        <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                          <info.icon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-sm text-slate-400">{info.label}</div>
                          <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 glass-card p-6">
                        <div className="p-3 bg-cyan-500/10 rounded-lg">
                          <info.icon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-sm text-slate-400">{info.label}</div>
                          <div className="text-white font-medium">{info.value}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="flex gap-4 pt-6"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-hover flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-md border border-cyan-500/30 text-cyan-400 rounded-lg font-medium hover:border-cyan-500/60 hover:bg-cyan-500/10 hover:shadow-glow transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                    {social.label}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="glass-card p-8 transition-shadow">
                <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-cyan-400">B.Tech in Computer Science</h4>
                    <p className="text-slate-300 mt-2">Medicaps University, Indore, India</p>
                    <p className="text-slate-400 mt-1 font-mono text-sm">2021 – 2025</p>
                    <div className="mt-4 inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                      <span className="text-cyan-400 font-semibold">CGPA: 9.1 / 10</span>
                    </div>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <h4 className="text-xl font-semibold text-cyan-400">Senior Secondary (XII), CBSE</h4>
                    <p className="text-slate-300 mt-2">Advanced Academy, Indore, India</p>
                    <p className="text-slate-400 mt-1 font-mono text-sm">2021</p>
                    <div className="mt-4 inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                      <span className="text-cyan-400 font-semibold">CGPA: 9.42 / 10</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
