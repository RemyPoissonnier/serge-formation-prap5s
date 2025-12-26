// src/components/Text.tsx
import React from 'react';

type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'label';

interface TextProps {
  variant?: TextVariant;
  children: React.ReactNode;
  className?: string;
  as?: any; // Pour forcer une balise HTML spécifique si besoin
}

export const Text = ({ variant = 'body', children, className = '', as }: TextProps) => {
  
  // Dictionnaire des styles par variante
  const styles = {
    h1: "text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight",
    h2: "text-2xl md:text-3xl font-bold text-slate-800 leading-snug",
    h3: "text-xl font-semibold text-emerald-700",
    body: "text-base text-slate-600 leading-relaxed",
    caption: "text-sm text-slate-500 font-medium",
    label: "text-xs font-bold uppercase tracking-wider text-emerald-600",
  };

  // Choix automatique de la balise HTML (h1, p, span...)
  const Component = as || (variant.startsWith('h') ? variant : 'p');

  return (
    <Component className={`${styles[variant]} ${className}`}>
      {children}
    </Component>
  );
};