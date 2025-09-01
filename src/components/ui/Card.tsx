import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  hover = false,
  glass = false 
}) => {
  const baseClasses = 'rounded-xl p-6 transition-all duration-300';
  
  const styleClasses = glass 
    ? 'bg-white/10 backdrop-blur-sm border border-white/20' 
    : 'bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700';
    
  const hoverClasses = hover 
    ? 'hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1' 
    : '';

  const cardClasses = twMerge(
    clsx(
      baseClasses,
      styleClasses,
      hoverClasses,
      className
    )
  );

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default Card;