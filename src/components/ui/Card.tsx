// src/components/Card.tsx
import React from 'react';

interface CardProps {
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card = ({ title, subtitle, icon, children, className = '', onClick }: CardProps) => {
  return (
    <div 
      onClick={onClick}
      className={`
        relative overflow-hidden bg-white rounded-2xl border border-slate-200 
        p-6 shadow-sm transition-all duration-300
        hover:shadow-lg hover:border-emerald-200 hover:-translate-y-1
        ${onClick ? 'cursor-pointer' : ''} 
        ${className}
      `}
    >
      {/* Barre décorative optionnelle en haut */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* En-tête de la carte si Icon ou Title sont fournis */}
      {(title || icon) && (
        <div className="flex items-start justify-between mb-4">
          <div>
            {title && <h3 className="text-lg font-bold text-slate-800">{title}</h3>}
            {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
          </div>
          {icon && (
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600">
              {icon}
            </div>
          )}
        </div>
      )}

      {/* Contenu libre */}
      <div className="text-slate-600">
        {children}
      </div>
    </div>
  );
};