import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

const socialLinks = [
  { icon: Mail, href: 'mailto:iamanikethpeddi@gmail.com', label: 'Email' },
  { icon: MapPin, href: '#contact', label: 'Location' },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.a href="#" className="font-display font-bold text-xl" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <span className="gradient-text">AP</span>
            </motion.a>
            <p className="text-sm text-muted-foreground">Â© {currentYear} Aniketh Peddi â€¢ CSE Undergraduate</p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground
                           hover:bg-muted/50 transition-colors duration-200"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};