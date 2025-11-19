import { useMemo, useState } from "react";
import ceinture from "../assets/ceintureDeMarche.png"
import drapdegli from "../assets/drapDeGlisse.png"
import disquedetrans from "../assets/disqueDeTransfert.png"

type MaterielSlide = {
  name: string;
  description: string;
  image: string;
  items: string[];
};

const SectionMateriel = () => {
  const slides = useMemo<MaterielSlide[]>(
    () => [
      {
        name: "Aides techniques à la mobilisation",
        description:
          "Démonstrations pratiques pour sécuriser les transferts tout en respectant le confort du bénéficiaire.",
        items: ["Draps de glisse", "Disques de transfert", "Ceintures de marche"],
        image: drapdegli
      },
      {
        name: "Aides à la manutention",
        description:
          "Travail sur la posture et la répartition de l'effort pour limiter la fatigue des équipes.",
        items: ["Lève-personnes", "Verticalisateurs", "Fauteuils roulants"],
        image: ceinture
      },
      {
        name: "Postes de travail",
        description:
          "Organisation des espaces et réglages ergonomiques pour des gestes reproductibles au quotidien.",
        items: [
          "Lits médicalisés réglables",
          "Plans de travail modulables",
          "Espaces de rangement optimisés",
        ],
        image: disquedetrans      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = slides.length;

  const handlePrev = () =>
    setActiveIndex((index) => (index - 1 + totalSlides) % totalSlides);
  const handleNext = () =>
    setActiveIndex((index) => (index + 1) % totalSlides);

  return (
    <section id="materiel" className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-800">
          Des matériels adaptés au terrain
        </h2>
        <p className="text-sm text-slate-600 max-w-3xl">
          La formation s&apos;appuie sur les matériels que vos équipes utilisent
          au quotidien pour garantir des gestes reproductibles en situation
          réelle.
        </p>
      </header>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <article
              key={slide.name}
              className="w-full flex-shrink-0 rounded-3xl bg-white border border-slate-100 p-6 md:p-8 flex flex-col md:flex-row gap-6"
            >
              <div className="md:w-1/2 h-64 rounded-2xl overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:w-1/2 space-y-3 text-sm">
                <p className="text-xs uppercase tracking-wide text-primaire-fonce/70">
                  Matériel dédié
                </p>
                <h3 className="text-lg font-semibold text-slate-800">
                  {slide.name}
                </h3>
                <p className="text-slate-600">{slide.description}</p>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {slide.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-primaire">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 border border-slate-200 h-10 w-10 flex items-center justify-center shadow hover:bg-white transition"
          aria-label="Matériel précédent"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 border border-slate-200 h-10 w-10 flex items-center justify-center shadow hover:bg-white transition"
          aria-label="Matériel suivant"
        >
          ›
        </button>
      </div>

      <div className="flex justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all ${
              activeIndex === index
                ? "w-6 bg-primaire"
                : "w-2 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Aller au matériel ${slide.name}`}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionMateriel;
