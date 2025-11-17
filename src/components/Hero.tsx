import React from "react";
import SocialLinks from "./SocialLinks";
import imageSerge from "../assets/SergeVieuxManger.png"

const Hero: React.FC = () => {
  return (
    <section
      id="presentation"
      className="bg-gradient-to-br from-primaryLight via-white to-white"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-center">
        <div className="flex-1 space-y-5">
          <span className="inline-flex items-center rounded-full border border-primary/10 bg-white px-3 py-1 text-xs font-medium text-primary shadow-sm">
            Aide-soignant à domicile · Secteur sanitaire & social
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-dark md:text-4xl">
            Accompagnement bienveillant à domicile, au rythme de chaque
            personne.
          </h1>
          <p className="max-w-xl text-sm md:text-base text-slate-600">
            Aide-soignant diplômé et expérimenté, je propose un accompagnement
            personnalisé pour les personnes en perte d’autonomie ou en situation
            de fragilité. Mon objectif : allier sécurité, confort et respect de
            la dignité au quotidien.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-primary/90"
            >
              Prendre contact
            </a>
            <a
              href="#competences"
              className="text-sm font-medium text-primary hover:underline"
            >
              Voir mes compétences
            </a>
          </div>

          <div className="pt-2">
            <SocialLinks />
          </div>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto max-w-sm">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-lg" >
            <img src={imageSerge} />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-4 py-3 shadow-md">
              <p className="text-xs font-semibold text-slate-900">
                Disponible sur rendez-vous
              </p>
              <p className="text-xs text-slate-500">
                Matin, après-midi et week-end selon besoins
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
