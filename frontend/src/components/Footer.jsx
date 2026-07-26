import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black text-white mb-2">TANYA SINGH</h3>
            <p className="text-slate-400">Full Stack Developer</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <motion.a
              href="https://github.com/Tanya1227"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-hover p-3 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:shadow-glow transition-all"
            >
              <Github className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition-colors" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/tanya-singh9b5492225"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-hover p-3 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:shadow-glow transition-all"
            >
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition-colors" />
            </motion.a>
            <motion.a
              href="mailto:tanyasingh1227@gmail.com"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-hover p-3 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:shadow-glow transition-all"
            >
              <Mail className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition-colors" />
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-400 text-sm flex items-center gap-2"
          >
            <span>© {new Date().getFullYear()} Tanya Singh. Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;