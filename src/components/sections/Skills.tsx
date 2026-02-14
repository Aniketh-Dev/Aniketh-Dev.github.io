import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const skills = [
  { name: 'Python', level: 88 },
  { name: 'Java', level: 82 },
  { name: 'MySQL', level: 80 },
  { name: 'JavaScript', level: 78 },
  { name: 'Data Structures', level: 76 },
  { name: 'C', level: 72 },
];

const technologies = [
  'C',
  'Java',
  'HTML',
  'CSS',
  'JavaScript',
  'Python',
  'MySQL',
  'Streamlit',
  'Ollama',
  'LLaMA',
  'Mistral',
  'Hugging Face',
  'Git',
  'GitHub',
  'Responsive Design',
  'Session Management',
];

const SkillBar: React.FC<{
  skill: typeof skills[0];
  index: number;
}> = ({ skill, index }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-sm">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: skill.level / 100 } : {}}
          transition={{
            duration: 0.7,
            delay: index * 0.06 + 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="skill-bar-fill"
        />
      </div>
    </motion.div>
  );
};

export const Skills: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: techRef, isVisible: techVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-32 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase">Skills</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">Technical Strengths</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          <motion.div
            ref={techRef}
            initial={{ opacity: 0, y: 30 }}
            animate={techVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-8"
          >
            <h3 className="text-lg font-semibold mb-6">Tools and Concepts</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={techVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.25,
                    delay: 0.2 + index * 0.02,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  whileHover={{ scale: 1.03, y: -1 }}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-muted/50
                             text-muted-foreground hover:bg-muted hover:text-foreground
                             transition-colors duration-200 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};