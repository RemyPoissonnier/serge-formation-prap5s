import { Text } from "./components/ui/Text"; // Assurez-vous que le chemin est correct
import { Card } from "./components/ui/Card"; // Assurez-vous que le chemin est correct
import ContextPage from "./components/ContextPage";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 space-y-16">
      {/* SECTION 1 : INTRODUCTION & DÉFINITION */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <Text variant="label">Qu’est-ce-que cela veut dire ? </Text>

        <Text variant="h1" className="text-emerald-700">
          Le PRAP 2S c’est quoi ?
        </Text>

        <Text variant="h2">
          Prévention des Risques liés à l’activité physique
        </Text>

        <Text variant="body" className="text-xl font-medium">
          Gestes et postures et principes d’économies d’éfforts.
        </Text>
      </section>

      <ContextPage />

      {/* SECTION 2 : CADRE LÉGAL (ED7200) */}
      <section className="max-w-4xl mx-auto">
        <Card className="bg-white border-l-4 border-l-emerald-500">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <Text variant="h3">ED7200 </Text>
            </div>

            <Text variant="body">Comme le stipule l’ED7200</Text>

            <Text variant="h2" className="text-lg md:text-xl">
              L’Obligation des cadres et salariés de participer à la prévention
              des risques de l’Etablissement
            </Text>
          </div>
        </Card>
      </section>

      {/* SECTION 3 : LES 3 COMPÉTENCES */}
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <Text variant="h2">
            Ces 3 compétences nous allons les développer ensemble
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Compétence 1 */}
          <Card
            title="1- connaître les risques de votre métier :"
            className="h-full"
          >
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li className="text-slate-600">
                Repérer les situations susceptibles de nuire à votre santé
              </li>
              <li className="text-slate-600">
                Avoir conscience des enjeux pour l’entreprise
              </li>
            </ul>
          </Card>

          {/* Compétence 2 */}
          <Card
            title="2- Observer et analyser votre situation de travail :"
            className="h-full"
          >
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li className="text-slate-600">
                Identifier les différentes atteintes à la santé
              </li>
            </ul>
          </Card>

          {/* Compétence 3 */}
          <Card
            title="3- participer à la maîtrise du risque :"
            className="h-full"
          >
            
            {/*  */}
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li className="text-slate-600">
                Apporter des idées d’amélioration
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* SECTION 4 : CONTEXTE ET COÛTS */}
      <section className="max-w-5xl mx-auto bg-emerald-50 rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Text variant="h2" className="text-emerald-800">
              C’est vous salariés qui êtes le mieux placés pour parler de votre
              travail,des disfonctionnements et des améliorations possibles
            </Text>
            <Text variant="body" className="font-bold">
              80 % des maladies professionnelles sont liées à des activités
              physiques au travail
            </Text>
            <div className="space-y-2">
              <Text variant="caption">
                Accident survenu à cause du travail
              </Text>
              <Text variant="caption">
                Maladie reconnue si elle apparait sur le tableau des risques
              </Text>
            </div>
          </div>

          <div className="grid gap-4">
            <Card>
              <Text variant="label" className="mb-2">
                Coût Direct
              </Text>
              <Text variant="h3" className="mb-2">
                Un coût direct « important »pour l’employeur
              </Text>
              <Text variant="body">Salaires et frais médicaux </Text>
              <div className="mt-4 p-4 bg-slate-100 rounded-xl text-center">
                <Text variant="caption">
                  Le coût moyen brut pour une entreprise d’un arrêt de travail
                  est de
                </Text>
                <Text variant="h1" className="text-emerald-600 mt-1">
                  2 931 euros
                </Text>
              </div>
            </Card>

            <Card>
              <Text variant="label" className="mb-2">
                Coût Indirect
              </Text>
              <Text variant="h3">
                Un coût indirect « conséquent »Lié aux remplacements,
              </Text>
              <ul className="list-disc pl-5 mt-2 text-slate-600">
                <li>Lié à la perte de productivité, </li>
                <li>Lié aux cotisations </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 5 : LES ENJEUX */}
      <section className="max-w-6xl mx-auto">
        <Text variant="h2" className="text-center mb-10">
          Les Enjeux
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Enjeux Humains */}
          <Card title="Humains" icon={<span>👤</span>}>
            
            <ul className="space-y-3 mt-2">
              <li className="text-slate-600">
                • Amélioration de la qualité de vie au travail
              </li>
              <li className="text-slate-600">
                • Amélioration de la prise en charge des bénéficiaires avec un
                impact sur la qualité des soins
              </li>
              <li className="text-slate-600">
                • La valorisation des compétences des professionnels grâce à la
                certification
              </li>
            </ul>
          </Card>

          {/* Enjeux Financiers */}
          <Card title="Financiers" icon={<span>💰</span>}>
            
            <ul className="space-y-3 mt-2">
              <li className="text-slate-600">
                • Diminution des Accidents de travail et des maladies
                professionnelles
              </li>
              <li className="text-slate-600">• Un AT est payé sur 3 ans </li>
            </ul>
          </Card>

          {/* Enjeux Sociétaux */}
          <Card title="Sociétaux" icon={<span>🌍</span>}>
            
            <ul className="space-y-3 mt-2">
              <li className="text-slate-600">
                • Qualité des services de l’entreprise
              </li>
              <li className="text-slate-600">• Bien être du salarié </li>
              <li className="text-slate-600">• L’image de l’entreprise </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* SECTION 6 : BONNES PRATIQUES */}
      <section className="max-w-3xl mx-auto pb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <Text variant="h2" className="mb-6 text-center">
            Echauffement articulaire et musculaire
          </Text>

          <div className="space-y-4">
            {[
              "1. Evaluer la charge", //
              "2. Avoir le dos droit", //
              "3. Fusionner les centres de gravité (CG)", //
              "4. Plier les jambes", //
              "5. Regarder l’endroit où l’on va mettre la charge", //
            ].map((step, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <span className="text-emerald-600 font-bold text-xl">✓</span>
                <Text variant="body" className="font-semibold text-slate-700">
                  {step}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
