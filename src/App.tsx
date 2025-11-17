import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-24">
        <Hero />
        <SectionFormation />
        <SectionMateriel />
        <SectionFormateurs />
        <SectionContact />
      </main>
      <Footer />
    </div>
  );
};

/* ---------- HEADER ---------- */

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-primaire-fonce to-primaire-clair flex items-center justify-center text-white font-bold">
            FP
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">
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
          <NavLink href="#formateurs" label="Organisateurs" />
          <NavLink href="#contact" label="Contact" />
        </nav>

        <a
          href="#contact"
          className="ml-4 inline-flex items-center rounded-full bg-primaire text-white text-sm font-medium px-4 py-2 shadow-sm hover:bg-primaire-fonce transition-colors"
        >
          Nous contacter
        </a>
      </div>
    </header>
  );
};

type NavLinkProps = {
  href: string;
  label: string;
};

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <a
      href={href}
      className="text-slate-600 hover:text-primaire-fonce transition-colors"
    >
      {label}
    </a>
  );
};

/* ---------- HERO / ACCUEIL ---------- */

const Hero: React.FC = () => {
  return (
    <section
      className="grid md:grid-cols-2 gap-10 items-center"
      aria-labelledby="hero-title"
    >
      <div>
        <h1
          id="hero-title"
          className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900"
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
          <h2 className="text-sm font-semibold text-slate-900">
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

type StatProps = {
  label: string;
  value: string;
};

const Stat: React.FC<StatProps> = ({ label, value }) => {
  return (
    <div className="rounded-2xl bg-white border border-slate-100 px-4 py-3 shadow-sm">
      <dt className="text-[0.7rem] text-slate-500">{label}</dt>
      <dd className="text-sm font-semibold text-slate-900">{value}</dd>
    </div>
  );
};

/* ---------- SECTION FORMATION ---------- */

const SectionFormation: React.FC = () => {
  return (
    <section id="formation" className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          Une formation centrée sur la santé des professionnels
        </h2>
        <p className="text-sm text-slate-600 max-w-3xl">
          Destinée aux entreprises d&apos;aide à la personne, la formation
          aborde les risques liés à l&apos;activité physique, les gestes et
          postures adaptés, ainsi que la participation active des salariés à la
          prévention au sein de leur structure.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-4 text-sm">
        <Card
          title="Objectifs"
          points={[
            "Identifier les risques de votre métier et les situations à risques.",
            "Analyser les situations de travail pour préserver la santé.",
            "Proposer et mettre en œuvre des améliorations concrètes.",
          ]}
        />
        <Card
          title="Public concerné"
          points={[
            "Aides à domicile, soignants, auxiliaires de vie.",
            "Agents de service, encadrants d'équipes.",
            "Toute personne exposée à des manutentions de personnes ou de charges.",
          ]}
        />
        <Card
          title="Modalités"
          points={[
            "Alternance de théorie, d'échanges et de pratique.",
            "Études de cas issues de votre établissement.",
            "Attestation de formation délivrée en fin de session.",
          ]}
        />
      </div>
    </section>
  );
};

type CardProps = {
  title: string;
  points: string[];
};

const Card: React.FC<CardProps> = ({ title, points }) => {
  return (
    <article className="h-full rounded-2xl bg-white border border-slate-100 p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
        {points.map((point) => (
          <li key={point}>• {point}</li>
        ))}
      </ul>
    </article>
  );
};

/* ---------- SECTION MATERIEL ---------- */

const SectionMateriel: React.FC = () => {
  return (
    <section id="materiel" className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          Des matériels adaptés au terrain
        </h2>
        <p className="text-sm text-slate-600 max-w-3xl">
          La formation s&apos;appuie sur les matériels que vos équipes utilisent
          au quotidien pour garantir des gestes reproductibles en situation
          réelle.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-4 text-sm">
        <MaterielCard
          name="Aides techniques à la mobilisation"
          items={["Draps de glisse", "Disques de transfert", "Ceintures de marche"]}
        />
        <MaterielCard
          name="Aides à la manutention"
          items={["Lève-personnes", "Verticalisateurs", "Fauteuils roulants"]}
        />
        <MaterielCard
          name="Postes de travail"
          items={[
            "Lits médicalisés réglables",
            "Plans de travail modulables",
            "Organisation des espaces de rangement",
          ]}
        />
      </div>
    </section>
  );
};

type MaterielCardProps = {
  name: string;
  items: string[];
};

const MaterielCard: React.FC<MaterielCardProps> = ({ name, items }) => {
  return (
    <article className="rounded-2xl bg-white border border-slate-100 p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-900">{name}</h3>
      <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </article>
  );
};

/* ---------- SECTION FORMATEURS / ORGANISATEURS ---------- */

const SectionFormateurs: React.FC = () => {
  return (
    <section id="formateurs" className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          Des formateurs issus du terrain
        </h2>
        <p className="text-sm text-slate-600 max-w-3xl">
          Nos intervenants sont des professionnels expérimentés de la santé et
          de la prévention des risques, formés à l&apos;animation de groupes
          dans le secteur médico-social.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-4 text-sm">
        <FormateurCard
          name="Nom Prénom"
          role="Formateur prévention / ergonomie"
          description="Spécialisé dans les risques liés à l'activité physique en établissements de santé et à domicile."
        />
        <FormateurCard
          name="Nom Prénom"
          role="Infirmier·e / Référent·e TMS"
          description="Accompagne les équipes dans l'amélioration continue des pratiques de soins et de manutention."
        />
        <FormateurCard
          name="Nom Prénom"
          role="Responsable pédagogique"
          description="Construit des parcours sur mesure en fonction de la taille et des besoins de votre structure."
        />
      </div>
    </section>
  );
};

type FormateurCardProps = {
  name: string;
  role: string;
  description: string;
};

const FormateurCard: React.FC<FormateurCardProps> = ({
  name,
  role,
  description,
}) => {
  return (
    <article className="rounded-2xl bg-white border border-slate-100 p-4 shadow-sm flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-primaire-clair flex items-center justify-center text-xs font-semibold text-primaire-fonce">
          {initiales(name)}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">{name}</h3>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>
      <p className="text-xs text-slate-600">{description}</p>
    </article>
  );
};

const initiales = (nom: string): string =>
  nom
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

/* ---------- SECTION CONTACT ---------- */

const SectionContact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Merci pour votre demande, nous vous recontacterons rapidement.");
  };

  return (
    <section id="contact" className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          Prendre contact
        </h2>
        <p className="text-sm text-slate-600 max-w-3xl">
          Indiquez-nous les besoins de votre structure. Nous vous répondrons
          avec une proposition de programme et un devis personnalisé.
        </p>
      </header>

      <div className="grid md:grid-cols-[3fr,2fr] gap-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4 text-sm"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Nom de la structure
              </label>
              <input
                type="text"
                required
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primaire focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Secteur d&apos;activité
              </label>
              <input
                type="text"
                placeholder="EHPAD, SSIAD, aide à domicile…"
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primaire focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Nom / Prénom
              </label>
              <input
                type="text"
                required
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primaire focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Fonction
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primaire focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                required
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primaire focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Téléphone
              </label>
              <input
                type="tel"
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primaire focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700">
              Type de formation souhaitée
            </label>
            <select className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primaire focus:border-transparent">
              <option>Initiation à la prévention des risques</option>
              <option>Formation gestes et postures</option>
              <option>Formation manutention des personnes</option>
              <option>Programme sur mesure</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700">
              Message
            </label>
            <textarea
              rows={4}
              required
              placeholder="Précisez vos besoins, le nombre de salariés, vos contraintes de planning..."
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primaire focus:border-transparent"
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              required
              className="mt-1 h-4 w-4 rounded border-slate-300 text-primaire focus:ring-primaire"
            />
            <p className="text-xs text-slate-500">
              J&apos;accepte que mes données soient utilisées pour être
              recontacté·e dans le cadre de cette demande. Elles ne seront pas
              transmises à des tiers.
            </p>
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-primaire text-white text-sm font-medium px-6 py-2.5 shadow-md hover:bg-primaire-fonce transition-colors"
          >
            Envoyer ma demande
          </button>
        </form>

        <aside className="space-y-4 text-xs text-slate-600">
          <div className="rounded-2xl bg-primaire-clair/60 border border-primaire-clair p-4">
            <h3 className="text-sm font-semibold text-primaire-fonce">
              Un accompagnement sur mesure
            </h3>
            <p className="mt-2">
              Nous analysons vos contraintes (horaires, organisation, type de
              public accompagné) pour construire une formation réaliste et
              directement applicable.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-slate-100 p-4">
            <h3 className="text-sm font-semibold text-slate-900">
              Zones d&apos;intervention
            </h3>
            <p className="mt-2">
              Intervention possible dans vos locaux ou dans une salle de
              formation dédiée, selon la taille et la localisation de votre
              structure.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

/* ---------- FOOTER ---------- */

const Footer: React.FC = () => {
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

export default App;
