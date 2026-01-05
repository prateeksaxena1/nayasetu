import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered';
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hoverEffect = false,
}) => {
  const baseStyles = 'bg-white dark:bg-gray-800 rounded-lg overflow-hidden transition-colors duration-300';

  const variantStyles = {
    default: 'shadow',
    elevated: 'shadow-lg',
    bordered: 'border border-gray-200',
  };

  const hoverStyles = hoverEffect
    ? 'transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 will-change-transform'
    : '';

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;