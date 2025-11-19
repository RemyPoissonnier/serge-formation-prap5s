import type { FormEvent } from "react";

const SectionContact = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Merci pour votre demande, nous vous recontacterons rapidement.");
  };

  return (
    <section id="contact" className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-800">
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
            <h3 className="text-sm font-semibold text-slate-800">
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

export default SectionContact;
