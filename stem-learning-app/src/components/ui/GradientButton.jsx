'use client';

import { motion } from 'framer-motion';

const GradientButton = ({ 
  children, 
  onClick = () => {}, 
  variant = 'primary', 
  size = 'md',
  className = '',
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'font-medium rounded-xl transition-all duration-300 transform';
  
  const variants = {
    primary: 'gradient-bg text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-gray-800 border-2 border-gray-200 hover:border-primary-indigo hover:text-primary-indigo',
    outline: 'border-2 border-primary-indigo text-primary-indigo hover:bg-primary-indigo hover:text-white'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95';
  
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default GradientButton;