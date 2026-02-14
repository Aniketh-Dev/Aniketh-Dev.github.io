import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Github, ArrowUpRight } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageFallback: string;
  link: string;
  github?: string;
};

const resolveImageUrl = (path: string) => {
  const normalized = path.replace(/^\/+/, '');
  return `${import.meta.env.BASE_URL}${normalized}`;
};

const projects: Project[] = [
  {
    title: 'WikiEduSelf',
    description:
      'Built an AI-powered auto-learning module generator that converts Wikipedia content into structured interactive lessons using React, Node.js, and Transformers.js.',
    tags: ['React', 'Node.js', 'Transformers.js'],
    image: 'projects/wikieduself.png',
    imageFallback: 'linear-gradient(135deg, hsl(260, 35%, 14%) 0%, hsl(270, 45%, 18%) 50%, hsl(235, 40%, 16%) 100%)',
    link: 'https://huggingface.co/spaces/anikethp/Wiki_EduSelf',
  },
  {
    title: 'Online Auction System',
    description:
      'Developed a dynamic and secure web-based auction system with real-time bidding, user authentication, item listings with image uploads, profile management, and admin oversight. Built using PHP, MySQL, HTML, CSS, and JavaScript with responsive design and secure session handling.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    image: 'projects/online-auction-system.png',
    imageFallback: 'linear-gradient(135deg, hsl(210 60% 35%) 0%, hsl(180 60% 28%) 100%)',
    link: 'https://github.com/AnikethPeddi/dBMS-PROJ',
    github: 'https://github.com/AnikethPeddi/dBMS-PROJ',
  },
  {
    title: 'NutriChef',
    description:
      'Developed the frontend for an AI-powered nutrition and recipe assistant with Streamlit, including responsive UI, animations, personalized meal recommendations, calorie analysis, and nutrition breakdown.',
    tags: ['Streamlit', 'Python', 'AI'],
    image: 'projects/nutrichef.png',
    imageFallback: 'linear-gradient(135deg, hsl(120 40% 30%) 0%, hsl(160 50% 30%) 100%)',
    link: 'https://huggingface.co/spaces/anikethp/NutriChef',
  },
];

const ProjectCard: React.FC<{
  project: Project;
  index: number;
}> = ({ project, index }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40, rotateX: -6 }}
      animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
    >
      <motion.div
        className="aspect-[16/10] w-full"
        style={{ background: project.imageFallback }}
        animate={{ scale: isHovered ? 1.03 : 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      />

      {!imageError && (
        <img
          src={resolveImageUrl(project.image)}
          alt={project.title}
          onError={() => setImageError(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"
        animate={{ opacity: isHovered ? 0.95 : 0.86 }}
        transition={{ duration: 0.2 }}
      />

      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <motion.div
          animate={{ y: isHovered ? -6 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 rounded-md text-xs font-medium bg-primary/20 text-primary">
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-display font-bold mb-2">{project.title}</h3>

          <motion.p
            className="text-muted-foreground text-sm leading-relaxed max-w-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
            transition={{ duration: 0.25 }}
          >
            {project.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="flex gap-3 mt-4"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 14 }}
          transition={{ duration: 0.2 }}
        >
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground
                       text-sm font-medium"
          >
            View Details
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>

          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="p-2 rounded-lg bg-muted/80 text-foreground"
              aria-label="Project repository"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.article>
  );
};

export const Projects: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase">Projects</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">Featured Work</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Selected projects covering full-stack web development and AI application building.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};