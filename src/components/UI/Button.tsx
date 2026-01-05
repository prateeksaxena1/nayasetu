import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = 'font-medium rounded transition-all duration-200 inline-flex items-center justify-center transform active:scale-95 hover:scale-[1.02]';

  const variantStyles = {
    primary: 'bg-nayaysetu hover:bg-nayaysetu/90 text-white shadow-sm',
    secondary: 'bg-nayaysetu-gold hover:bg-nayaysetu-gold/90 text-nayaysetu shadow-sm',
    outlined: 'bg-transparent border-2 border-nayaysetu text-nayaysetu hover:bg-nayaysetu/5',
    text: 'bg-transparent text-nayaysetu hover:bg-nayaysetu/5 shadow-none',
  };

  const sizeStyles = {
    small: 'text-sm py-1.5 px-3',
    medium: 'text-base py-2 px-4',
    large: 'text-lg py-2.5 px-6',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;