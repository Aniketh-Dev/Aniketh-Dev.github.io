import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const timeline = [
  {
    year: '2023 - 2027',
    title: 'B.Tech in Computer Science & Engineering',
    company: 'IFHE (ICFAI Foundation for Higher Education), Hyderabad',
    description: 'Pursuing Bachelor of Technology in CSE with focus on software engineering and AI systems.',
    icon: GraduationCap,
  },
  {
    year: 'Completed Internship',
    title: 'Former AI and Software Engineering Intern',
    company: 'Viswam.ai (Swecha + IIIT Hyderabad)',
    description:
      'Built AI apps with Python and Streamlit, worked with LLaMA and Mistral via Ollama for offline systems, and contributed multilingual data for Indian language model training.',
    icon: Briefcase,
  },
  {
    year: '2021 - 2023',
    title: 'Intermediate Education',
    company: 'Pragathi Junior College',
    description: 'Completed intermediate education before undergraduate studies in engineering.',
    icon: GraduationCap,
  },
  {
    year: '2021',
    title: 'Secondary School Certificate (SSC)',
    company: 'Nalgonda Public School',
    description: 'Completed SSC and built the foundation for technical studies.',
    icon: Award,
  },
];

const TimelineItem: React.FC<{
  item: typeof timeline[0];
  index: number;
}> = ({ item, index }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative pl-16"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : {}}
        transition={{
          duration: 0.35,
          delay: index * 0.08 + 0.15,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-card border border-border
                   flex items-center justify-center shadow-md"
      >
        <Icon className="w-5 h-5 text-primary" />
      </motion.div>

      <div className="glass-card p-6 space-y-2">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-primary/10 text-primary">
            {item.year}
          </span>
        </div>
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-sm text-muted-foreground">{item.company}</p>
        <p className="text-muted-foreground text-sm leading-relaxed pt-2">{item.description}</p>
      </div>
    </motion.div>
  );
};

export const About: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase">About</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">My Journey</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I am a technology enthusiast passionate about building modern AI and software systems,
            with completed internship, project, and open-source experience.
          </p>
        </motion.div>

        <div className="relative">
          <div className="timeline-line" />
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <TimelineItem key={`${item.title}-${index}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};