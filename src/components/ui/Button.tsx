import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  icon?: IconDefinition;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  disabled = false,
  onClick,
  type = 'button',
  className,
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    secondary: 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus:ring-primary',
    ghost: 'text-primary bg-transparent hover:bg-primary/10 focus:ring-primary',
    glow: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary animate-pulse-glow',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };
  
  const disabledClasses = 'opacity-50 cursor-not-allowed';
  
  const buttonClasses = twMerge(
    clsx(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      disabled && disabledClasses,
      className
    )
  );

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {icon && iconPosition === 'left' && (
        <FontAwesomeIcon icon={icon} className="w-4 h-4" />
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <FontAwesomeIcon icon={icon} className="w-4 h-4" />
      )}
    </motion.button>
  );
};

export default Button;