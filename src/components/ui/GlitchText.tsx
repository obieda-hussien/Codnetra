import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { advancedVariants } from '../../lib/animations';

interface GlitchTextProps {
  children: string;
  className?: string;
  triggerOnMount?: boolean;
  glitchDuration?: number;
}

const GlitchText: React.FC<GlitchTextProps> = ({
  children,
  className = '',
  triggerOnMount = true,
  glitchDuration = 2000
}) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [displayText, setDisplayText] = useState(children);

  const glitchChars = React.useMemo(() => ['!', '@', '#', '$', '%', '^', '&', '*', '?', '<', '>', '{', '}'], []);
  
  const triggerGlitch = React.useCallback(() => {
    setIsGlitching(true);
    
    // Create glitch effect by randomly replacing characters
    const glitchInterval = setInterval(() => {
      const glitchedText = children
        .split('')
        .map(char => {
          if (char === ' ') return ' ';
          return Math.random() > 0.7 
            ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
            : char;
        })
        .join('');
      
      setDisplayText(glitchedText);
    }, 50);

    // Stop glitch effect and restore original text
    setTimeout(() => {
      clearInterval(glitchInterval);
      setDisplayText(children);
      setIsGlitching(false);
    }, 300);
  }, [children, glitchChars]);

  useEffect(() => {
    if (triggerOnMount) {
      const timer = setTimeout(triggerGlitch, 500);
      return () => clearTimeout(timer);
    }
  }, [triggerOnMount, triggerGlitch]);

  useEffect(() => {
    if (glitchDuration > 0) {
      const interval = setInterval(triggerGlitch, glitchDuration);
      return () => clearInterval(interval);
    }
  }, [glitchDuration, triggerGlitch]);

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      variants={advancedVariants.glitch}
      animate={isGlitching ? "visible" : "hidden"}
      onHoverStart={triggerGlitch}
    >
      {/* Main text */}
      <span className="relative z-10 text-gradient-accent font-bold">
        {displayText}
      </span>
      
      {/* Glitch overlay effects */}
      <motion.span
        className="absolute top-0 left-0 text-gradient-start opacity-0"
        animate={isGlitching ? {
          opacity: [0, 0.7, 0],
          x: [-2, 2, -1],
          transition: { duration: 0.1, repeat: 3 }
        } : {}}
      >
        {displayText}
      </motion.span>
      
      <motion.span
        className="absolute top-0 left-0 text-gradient-end opacity-0"
        animate={isGlitching ? {
          opacity: [0, 0.5, 0],
          x: [1, -2, 1],
          transition: { duration: 0.1, repeat: 3, delay: 0.05 }
        } : {}}
      >
        {displayText}
      </motion.span>
    </motion.span>
  );
};

export default GlitchText;