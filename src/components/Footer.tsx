const Footer = () => {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Formation Prévention Santé.</p>
        <div className="flex gap-4">
          <a href="#formation" className="hover:text-primaire-fonce">
            Programme
          </a>
          <a href="#contact" className="hover:text-primaire-fonce">
            Contact
          </a>
          <span>Respect de la santé au travail</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
