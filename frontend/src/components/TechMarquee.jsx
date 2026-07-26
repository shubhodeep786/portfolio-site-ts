import { motion } from 'framer-motion';

const TechMarquee = () => {
  const technologies = [
    'JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Express.js',
    'MongoDB', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS',
    'Socket.io', 'REST API', 'JWT Auth', 'Git', 'Figma',
    'Vitest', 'Jest', 'HTML5', 'CSS3', 'Mongoose'
  ];

  return (
    <section className="py-20 bg-slate-950 border-y border-slate-800 overflow-hidden">
      <div className="relative">
        <div className="flex">
          <motion.div
            animate={{ x: ['-100%', '0%'] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="flex gap-8 pr-8 whitespace-nowrap"
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <span
                key={index}
                className="text-4xl md:text-6xl font-bold text-slate-800 hover:text-cyan-500 transition-colors cursor-default"
                style={{ fontFamily: 'monospace' }}
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;