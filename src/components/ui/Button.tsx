import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'glass';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-6 py-2 rounded-full font-bold transition-all duration-500 hover:scale-105";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-xl shadow-primary/20",
    outline: "text-primary border-b-2 border-primary pb-1 rounded-none hover:text-primary-fixed-dim",
    glass: "glass-card text-on-surface border border-outline-variant/30 hover:bg-surface-variant transition-colors"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
