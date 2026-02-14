import React from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { FloatingCard } from '@/components/ui/FloatingCard';
import { ArrowDown, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium
                         bg-primary/10 text-primary border border-primary/20"
            >
              I build what I envision
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight"
          >
            <span className="block">Aniketh</span>
            <span className="block gradient-text">Peddi</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-lg leading-relaxed"
          >
            I build what I imagine. CSE undergraduate at IFHE, Hyderabad, building AI-powered and web systems using Python, Streamlit, JavaScript, and open-source LLMs.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <MagneticButton
              variant="primary"
              onClick={() => {
                window.location.href = 'mailto:iamanikethpeddi@gmail.com';
              }}
            >
              <Mail className="w-4 h-4" />
              Email Me
            </MagneticButton>
            <MagneticButton
              variant="secondary"
              onClick={() => {
                window.open('/Resume-Updated.pdf', '_blank', 'noopener,noreferrer');
              }}
            >
              View Resume
            </MagneticButton>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4 pt-4">
            {[
              { icon: Mail, href: 'mailto:iamanikethpeddi@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-muted/50 hover:bg-muted text-muted-foreground
                           hover:text-foreground transition-colors duration-200"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="hidden lg:block perspective-container">
          <FloatingCard className="max-w-md mx-auto" intensity={8}>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-primary-foreground">AP</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Aniketh Peddi</h3>
                  <p className="text-sm text-muted-foreground">CSE Undergraduate (2023-2027)</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-y border-border/50">
                {[
                  { value: 'IFHE', label: 'University' },
                  { value: '3', label: 'Key Projects' },
                  { value: 'AI-Driven', label: 'Software Developer' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-2xl font-display font-bold gradient-text">{value}</div>
                    <div className="text-xs text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {['Python', 'Streamlit', 'Ollama', 'LLaMA', 'Mistral', 'React'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-muted/50 text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FloatingCard>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};