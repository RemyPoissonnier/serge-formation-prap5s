type FormateurCardProps = {
  name: string;
  role: string;
  description: string;
};

const FormateurCard = ({ name, role, description }: FormateurCardProps) => {
  return (
    <article className="rounded-2xl bg-white border border-slate-100 p-4 shadow-sm flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-primaire-clair flex items-center justify-center text-xs font-semibold text-primaire-fonce">
          {initiales(name)}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-800">{name}</h3>
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

const SectionFormateurs = () => {
  return (
    <section id="formateurs" className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-800">
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

export default SectionFormateurs;
