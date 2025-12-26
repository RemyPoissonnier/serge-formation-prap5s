import React from "react";
import { Text } from "./ui/Text";
import { Card } from "./ui/Card";

export default function ContextPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 space-y-20">
      {/* 1. SECTION INTRODUCTIVE (POUR LES ENTREPRISES) */}
      {/* Cette section sert de mise en contexte stratégique avant les détails techniques */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold tracking-wide uppercase mb-4">
          Pourquoi cette formation ?
        </div>
        <Text variant="h1" className="text-slate-900">
          Transformez la contrainte en{" "}
          <span className="text-emerald-600">Performance</span>
        </Text>
        <Text
          variant="body"
          className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto"
        >
          Les troubles musculo-squelettiques et les accidents liés à l'activité
          physique représentent le premier facteur d'absentéisme en entreprise.
          <br />
          <br />
          La formation{" "}
          <strong>
            PRAP (Prévention des Risques liés à l'Activité Physique)
          </strong>{" "}
          ne se contente pas d'enseigner des gestes : elle rend vos
          collaborateurs <strong>acteurs</strong> de leur propre sécurité. En
          leur apprenant à analyser leur environnement, vous réduisez
          durablement les coûts liés aux arrêts de travail tout en améliorant la
          qualité de vie au sein de vos équipes.
        </Text>
      </section>

      {/* 2. LE CONTENU DE L'IMAGE - DIVISÉ EN DEUX COLONNES */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* COLONNE GAUCHE : LE CONTEXTE ALARMANT (Source Image Gauche) */}
        <div className="space-y-8">
          <div className="border-l-4 border-red-500 pl-6">
            <Text variant="h2" className="text-red-700 mb-2">
              Un contexte alarmant !
            </Text>
            <Text variant="body" className="text-sm">
              Malgré les techniques permettant d'alléger les tâches, l'activité
              physique reste l'une des principales sources d'accidents du
              travail .
            </Text>
          </div>

          {/* Statistique Clé */}
          <Card className="bg-red-50 border-red-100">
            <Text variant="h1" className="text-red-600 text-4xl mb-2">
              240 947
            </Text>
            <Text variant="label" className="text-red-800">
              Accidents du travail (Année de réf. 2008)  
            </Text>
            <Text variant="caption" className="mt-2 block">
              Soit 34,2% de l'ensemble des accidents.Plus de 80% des maladies
              professionnelles sont liées à des activités physiques .
            </Text>
          </Card>

          {/* Coûts */}
          <div className="grid gap-4">
            <Card title="Un coût direct important">
              <Text variant="body" className="mb-2">
                Le coût moyen brut pour une entreprise d'un arrêt de travail de
                plus de 24h est de :
              </Text>
              <span className="text-3xl font-bold text-slate-800">
                2 931 €  
              </span>
              <Text variant="caption" className="mt-1 block">
                (Et jusqu'à 83 369 € pour une incapacité permanente)
              </Text>
            </Card>

            <Card title="Un coût indirect conséquent">
              <Text variant="body">
                Perturbations du fonctionnement, baisse du potentiel humain
                (absentéisme) et difficultés de remplacement .
              </Text>
            </Card>
          </div>

          {/* Citation Légale */}
          <div className="bg-slate-200 p-6 rounded-xl italic text-slate-700 text-sm border-l-4 border-slate-500">
            <strong>Code du travail - Art. L. 4121-1 :</strong>
            <br />
            "L'employeur prend les mesures nécessaires pour assurer la sécurité
            et protéger la santé physique et mentale des travailleurs." 
            
          </div>
        </div>

        {/* COLONNE DROITE : LA SOLUTION PRAP (Source Image Droite) */}
        <div className="space-y-8">
          <div className="border-l-4 border-emerald-500 pl-6">
            <Text variant="h2" className="text-emerald-700 mb-2">
              La formation-action Prap
            </Text>
            <Text variant="body" className="font-medium">
              Pour permettre au salarié de devenir acteur de la prévention de
              l'entreprise et par là même, d'être acteur de sa propre
              prévention .
            </Text>
          </div>

          <Text variant="label" className="mt-8 mb-4 block">
            Des objectifs ambitieux
          </Text>

          <div className="space-y-6">
            {/* Objectif 1 */}
            <Card className="border-emerald-200 hover:border-emerald-400">
              <div className="flex gap-4">
                <span className="text-4xl font-bold text-emerald-200">1</span>
                <div>
                  <Text variant="h3" className="text-emerald-700 mb-2">
                    Connaître les risques de son métier
                  </Text>
                  <Text variant="body" className="text-sm">
                    Afin de repérer les situations susceptibles de nuire à sa
                    santé et comprendre les enjeux pour l'entreprise (diminution
                    des AT/MP, performance) .
                  </Text>
                </div>
              </div>
            </Card>

            {/* Objectif 2 */}
            <Card className="border-emerald-200 hover:border-emerald-400">
              <div className="flex gap-4">
                <span className="text-4xl font-bold text-emerald-200">2</span>
                <div>
                  <Text variant="h3" className="text-emerald-700 mb-2">
                    Observer et analyser sa situation
                  </Text>
                  <Text variant="body" className="text-sm">
                    En s'appuyant sur la connaissance du corps humain pour
                    identifier les différentes atteintes à la santé
                    encourues .
                  </Text>
                </div>
              </div>
            </Card>

            {/* Objectif 3 */}
            <Card className="border-emerald-200 hover:border-emerald-400">
              <div className="flex gap-4">
                <span className="text-4xl font-bold text-emerald-200">3</span>
                <div>
                  <Text variant="h3" className="text-emerald-700 mb-2">
                    Participer à la maîtrise du risque
                  </Text>
                  <Text variant="body" className="text-sm">
                    En proposant des améliorations techniques ou
                    organisationnelles et en économisant les efforts par des
                    techniques gestuelles appropriées .
                  </Text>
                </div>
              </div>
            </Card>
          </div>

          {/* Note Gestes et Postures */}
          <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 mt-8">
            <Text variant="h3" className="text-emerald-800 text-sm mb-2">
              La formation gestes et postures : OUI ! Mais...
            </Text>
            <Text variant="body" className="text-sm">
              Elle est intégrée au dispositif Prap.Contrairement aux anciennes
              approches, le PRAP ne demande pas d'adapter l'homme au travail,
              mais vise à <strong>adapter le travail à l'homme</strong>
              .
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
