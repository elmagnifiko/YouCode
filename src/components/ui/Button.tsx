// src/components/ui/Button.tsx
import React from 'react';

type ButtonProps = {
  variant?: 'default' | 'ghost' | 'primary';
  size?: 'small' | 'medium' | 'large' | 'icon';
  onClick?: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant = 'default', size = 'medium', onClick, children }) => {
  const className = `btn ${variant} ${size}`;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
