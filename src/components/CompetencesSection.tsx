import React from "react";

const skills = [
  {
    title: "Soins d’hygiène et de confort",
    items: [
      "Aide à la toilette, à l’habillage et au déshabillage",
      "Prévention des escarres et surveillance de la peau",
      "Installation confortable au lit et au fauteuil",
    ],
  },
  {
    title: "Mobilité & sécurité",
    items: [
      "Aide aux déplacements et transferts (lit, fauteuil, WC)",
      "Utilisation sécurisée du matériel (lève-personne, verticalisateur…)",
      "Prévention des chutes et des risques à domicile",
    ],
  },
  {
    title: "Accompagnement global",
    items: [
      "Écoute, présence et soutien moral",
      "Aide aux repas et à l’hydratation",
      "Collaboration avec les familles et les professionnels de santé",
    ],
  },
];

const CompetencesSection: React.FC = () => {
  return (
    <section id="competences" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-dark md:text-3xl">
            Mes compétences au service de votre santé
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Formé à la prévention des risques liés à l’activité physique et aux
            gestes et postures, j’interviens dans le respect des bonnes
            pratiques de sécurité pour les bénéficiaires comme pour les
            professionnels.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((block) => (
            <div
              key={block.title}
              className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-dark mb-3">
                {block.title}
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-slate-600">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          id="contact"
          className="mt-10 rounded-2xl bg-primary text-white px-6 py-6 md:flex md:items-center md:justify-between"
        >
          <div>
            <h3 className="text-lg font-semibold">
              Vous cherchez un aide-soignant à domicile ?
            </h3>
            <p className="mt-1 text-sm text-primaryLight">
              Je me déplace à domicile pour des accompagnements réguliers ou
              ponctuels. N’hésitez pas à me contacter pour échanger sur votre
              situation.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm font-medium">Téléphone</p>
            <p className="text-sm">06 00 00 00 00</p>
            <p className="mt-2 text-sm font-medium">E-mail</p>
            <p className="text-sm break-all">contact@sergedano-sante.fr</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetencesSection;
