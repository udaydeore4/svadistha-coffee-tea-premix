import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`glass-card p-12 rounded-3xl border border-white/10 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
