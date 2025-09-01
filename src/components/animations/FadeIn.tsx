import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className,
  threshold = 0.1,
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;