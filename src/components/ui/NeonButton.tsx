import React from 'react';
import { motion } from 'framer-motion';
import { advancedVariants } from '../../lib/animations';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  glowing?: boolean;
  className?: string;
  disabled?: boolean;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  glowing = false,
  className = '',
  disabled = false
}) => {
  const baseClasses = "relative font-medium transition-all duration-300 rounded-lg border-2 overflow-hidden";
  
  const variantClasses = {
    primary: `bg-gradient-to-r from-gradient-start to-gradient-end text-text-primary border-gradient-accent
             hover:shadow-lg hover:shadow-gradient-accent/25`,
    secondary: `bg-card-background text-text-accent border-gradient-accent
               hover:bg-gradient-accent/10 hover:shadow-lg hover:shadow-gradient-accent/25`
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const glowClasses = glowing ? "animate-pulse-neon" : "";
  
  const disabledClasses = disabled 
    ? "opacity-50 cursor-not-allowed" 
    : "cursor-pointer";

  return (
    <motion.button
      onClick={disabled ? undefined : onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${glowClasses} ${disabledClasses} ${className}`}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      variants={advancedVariants.springIn}
      disabled={disabled}
    >
      {/* Background animation overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gradient-accent/20 to-gradient-end/20 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default NeonButton;