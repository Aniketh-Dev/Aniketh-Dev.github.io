import React from 'react';
import { motion } from 'framer-motion';
import { useSmoothMousePosition } from '@/hooks/useMousePosition';

export const MouseTrackingBackground: React.FC = () => {
  const { normalizedX, normalizedY } = useSmoothMousePosition(0.22);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: `
          radial-gradient(320px circle at ${50 + normalizedX * 15}% ${50 + normalizedY * 15}%, 
            hsl(var(--primary) / 0.06) 0%, 
            transparent 52%
          ),
          radial-gradient(220px circle at ${30 - normalizedX * 10}% ${70 - normalizedY * 10}%, 
            hsl(var(--accent) / 0.04) 0%, 
            transparent 52%
          )
        `,
      }}
    />
  );
};
