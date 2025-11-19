type NavLinkProps = {
  href: string;
  label: string;
};

const NavLink = ({ href, label }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="text-slate-600 hover:text-primaire-fonce transition-colors"
    >
      {label}
    </a>
  );
};

const Header = () => {
  return (
    <header className="sticky top-4 z-30 px-4">
      <div className="max-w-4xl mx-auto h-16 flex items-center justify-between rounded-full border border-slate-200 bg-white/80 backdrop-blur px-6 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-primaire-fonce to-primaire-clair flex items-center justify-center text-white font-bold">
            FP
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">
              Formation Prévention Santé
            </p>
            <p className="text-xs text-slate-500">
              Pour les entreprises d&apos;aide à la personne
            </p>
          </div>
        </div>

        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <NavLink href="#formation" label="La formation" />
          <NavLink href="#materiel" label="Matériels" />
          {/* <NavLink href="#formateurs" label="Organisateurs" /> */}
          {/* <NavLink href="#contact" label="Contact" /> */}
        </nav>

        {/* <a
          href="#contact"
          className="ml-4 inline-flex items-center rounded-full bg-primaire text-white text-sm font-medium px-4 py-2 shadow-sm hover:bg-primaire-fonce transition-colors"
        >
          Demander un devis
        </a> */}
      </div>
    </header>
  );
};

export default Header;
