import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-primaryLight flex items-center justify-center">
            <span className="text-primary font-bold text-xl">S</span>
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-slate-900">Serge Dano</p>
            <p className="text-xs text-slate-500">Aide-soignant indépendant</p>
          </div>
        </div>

        <div className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          <a href="#presentation" className="hover:text-primary">
            Présentation
          </a>
          <a href="#competences" className="hover:text-primary">
            Compétences
          </a>
          <a href="#blog" className="hover:text-primary">
            Blog
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
