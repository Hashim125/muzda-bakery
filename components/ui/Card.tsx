'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const CardComponent = hover ? motion.div : 'div';

  const hoverProps = hover
    ? {
        whileHover: { y: -8, transition: { duration: 0.3 } },
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
      }
    : {};

  return (
    <CardComponent
      className={`bg-white rounded-card shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden ${className}`}
      {...hoverProps}
    >
      {children}
    </CardComponent>
  );
}
