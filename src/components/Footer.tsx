import React from "react";
import SocialLinks from "./SocialLinks";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 space-y-4 md:flex md:items-center md:justify-between md:space-y-0">
        <div>
          <p className="text-sm font-semibold text-slate-800">
            Serge Dano – Aide-soignant indépendant
          </p>
          <p className="text-xs text-slate-500">
            Accompagnement à domicile des personnes en situation de fragilité.
          </p>
        </div>
        <div className="text-right">
          <SocialLinks />
          <p className="mt-2 text-[11px] text-slate-400">
            © {new Date().getFullYear()} – Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
