type CardProps = {
  title: string;
  points: string[];
};

const Card = ({ title, points }: CardProps) => {
  return (
    <article className="h-full rounded-2xl bg-white border border-slate-100 p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
      <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
        {points.map((point) => (
          <li key={point}>• {point}</li>
        ))}
      </ul>
    </article>
  );
};

const SectionFormation = () => {
  return (
    <section id="formation" className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-800">
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

export default SectionFormation;
