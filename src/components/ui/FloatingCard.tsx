import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { advancedVariants } from '../../lib/animations';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  floating?: boolean;
  glowing?: boolean;
  tiltEffect?: boolean;
  tiltMaxAngle?: number;
}

const FloatingCard: React.FC<FloatingCardProps> = ({
  children,
  className = '',
  floating = true,
  glowing = false,
  tiltEffect = true,
  tiltMaxAngle = 15,
}) => {
  const baseClasses = `
    bg-card-primary 
    border border-card-border 
    rounded-lg 
    p-6 
    backdrop-blur-sm 
    transition-all 
    duration-300
  `;

  const glowClasses = glowing 
    ? "shadow-lg shadow-primary-500/20" 
    : "hover:shadow-lg hover:shadow-primary-500/10";

  const cardContent = (
    <motion.div
      className={`${baseClasses} ${glowClasses} ${className} relative`}
      variants={advancedVariants.cardHover}
      whileHover="hover"
      initial="hidden"
      animate={floating ? "animate" : "visible"}
    >
      {/* Glowing border effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-primary-500/0 transition-all duration-300"
        whileHover={{ borderColor: 'rgba(37, 99, 235, 0.5)' }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );

  if (tiltEffect) {
    return (
      <Tilt
        tiltMaxAngleX={tiltMaxAngle}
        tiltMaxAngleY={tiltMaxAngle}
        perspective={1000}
        transitionSpeed={1000}
        scale={1.02}
        gyroscope={true}
        className="w-full h-full"
      >
        {cardContent}
      </Tilt>
    );
  }

  return cardContent;
};

export default FloatingCard;