'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useScrollToSection } from '../../hooks/useScrollToSection';

interface AnimatedButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'magnetic' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: IconDefinition;
  scrollTo?: string;
  magnetic?: boolean;
  className?: string;
  onClick?: () => void;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  scrollTo,
  magnetic = false,
  className = '',
  onClick
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { scrollToSection } = useScrollToSection();

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-accent to-primary text-white hover:from-accent-light hover:to-primary-light',
    secondary: 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600',
    ghost: 'bg-transparent text-accent border border-accent hover:bg-accent hover:text-white',
    magnetic: 'bg-gradient-to-r from-accent to-primary text-white hover:from-accent-light hover:to-primary-light btn-magnetic',
    glow: 'bg-gradient-to-r from-accent to-primary text-white hover:from-accent-light hover:to-primary-light shadow-lg hover:shadow-accent/50'
  };

  useEffect(() => {
    if (!magnetic || !buttonRef.current) return;

    const button = buttonRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const moveX = x * 0.1;
      const moveY = y * 0.1;
      
      button.style.setProperty('--mouse-x', `${moveX}px`);
      button.style.setProperty('--mouse-y', `${moveY}px`);
    };

    const handleMouseLeave = () => {
      button.style.setProperty('--mouse-x', '0px');
      button.style.setProperty('--mouse-y', '0px');
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [magnetic]);

  const handleClick = () => {
    if (scrollTo) {
      scrollToSection(scrollTo);
    } else if (onClick) {
      onClick();
    }
  };

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    const existingRipple = button.querySelector('.ripple');
    if (existingRipple) {
      existingRipple.remove();
    }

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <motion.button
      ref={buttonRef}
      onClick={(e) => {
        createRipple(e);
        handleClick();
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative overflow-hidden rounded-lg font-medium transition-all duration-300
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      style={{
        transform: magnetic ? 'translate(var(--mouse-x, 0), var(--mouse-y, 0))' : undefined
      }}
    >
      <div className="relative z-10 flex items-center justify-center space-x-2 space-x-reverse">
        {icon && (
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <FontAwesomeIcon icon={icon} />
          </motion.div>
        )}
        <span>{children}</span>
      </div>
      
      {/* Glow effect */}
      {variant === 'glow' && (
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 hover:opacity-20 transition-opacity duration-300 blur-xl" />
      )}
    </motion.button>
  );
};

export default AnimatedButton;