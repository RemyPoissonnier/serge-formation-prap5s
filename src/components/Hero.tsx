type StatProps = {
  label: string;
  value: string;
};

const Stat = ({ label, value }: StatProps) => {
  return (
    <div className="rounded-2xl bg-white border border-slate-100 px-4 py-3 shadow-sm">
      <dt className="text-[0.7rem] text-slate-500">{label}</dt>
      <dd className="text-sm font-semibold text-slate-800">{value}</dd>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      className="grid md:grid-cols-2 gap-10 items-center"
      aria-labelledby="hero-title"
    >
      <div>
        <h1
          id="hero-title"
          className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-800"
        >
          Formations santé au travail
          <span className="block text-primaire-fonce">
            pour les équipes d&apos;aide à la personne.
          </span>
        </h1>
        <p className="mt-4 text-sm md:text-base text-slate-600">
          Réduisez les risques liés à l&apos;activité physique, prévenez les
          troubles musculo-squelettiques (TMS) et améliorez la qualité de vie au
          travail de vos salariés grâce à une formation pratique et adaptée à
          vos réalités de terrain.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-primaire text-white text-sm font-medium px-5 py-2.5 shadow-md hover:bg-primaire-fonce transition-colors"
          >
            Planifier une session
          </a>
          <a
            href="#formation"
            className="inline-flex items-center justify-center rounded-full border border-primaire/40 text-primaire-fonce text-sm font-medium px-5 py-2.5 bg-white hover:bg-primaire-clair/20 transition-colors"
          >
            Découvrir le programme
          </a>
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-4 text-xs md:text-sm">
          <Stat label="Réduction des TMS" value="-30%" />
          <Stat label="Taux de satisfaction" value="98%" />
          <Stat label="Durée adaptable" value="1 à 3 jours" />
          <Stat label="Format" value="Inter / intra-entreprise" />
        </dl>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-tr from-primaire-clair/60 via-white to-sky-100/80 blur-2xl -z-10" />
        <div className="rounded-3xl bg-white border border-slate-100 shadow-xl p-6 space-y-4">
          <h2 className="text-sm font-semibold text-slate-800">
            Prévenir pour mieux accompagner
          </h2>
          <p className="text-xs text-slate-600">
            Exercices pratiques, mises en situation, analyse des postes et
            gestuelle de sécurité spécialement conçus pour les structures
            d&apos;aide à la personne (domicile, EHPAD, établissements de santé,
            handicap…).
          </p>
          <ul className="space-y-2 text-xs text-slate-700">
            <li>• Identification des situations à risques</li>
            <li>• Principes d&apos;économie d&apos;effort et de manutention</li>
            <li>• Respect du confort et de la dignité du bénéficiaire</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
