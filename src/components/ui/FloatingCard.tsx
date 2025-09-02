import React from 'react';
import { motion } from 'framer-motion';
import { advancedVariants } from '../../lib/animations';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  floating?: boolean;
  glowing?: boolean;
}

const FloatingCard: React.FC<FloatingCardProps> = ({
  children,
  className = '',
  floating = true,
  glowing = false
}) => {
  const baseClasses = `
    bg-card-background 
    border border-card-border 
    rounded-lg 
    p-6 
    backdrop-blur-sm 
    transition-all 
    duration-300
  `;

  const glowClasses = glowing 
    ? "shadow-lg shadow-gradient-accent/20" 
    : "hover:shadow-lg hover:shadow-gradient-accent/10";

  const floatingAnimation = floating ? advancedVariants.float : {};

  return (
    <motion.div
      className={`${baseClasses} ${glowClasses} ${className}`}
      variants={advancedVariants.cardHover}
      whileHover="hover"
      initial="hidden"
      animate={floating ? "animate" : "visible"}
      {...(floating && { ...floatingAnimation })}
    >
      {/* Glowing border effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-gradient-accent/0 transition-all duration-300"
        whileHover={{ borderColor: 'rgba(0, 255, 136, 0.5)' }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default FloatingCard;