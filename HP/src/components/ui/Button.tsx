import React from 'react';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <button className={`px-6 py-2 rounded  ${className}`}>
      {children}
    </button>
  );
};