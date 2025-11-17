import React from "react";

const posts = [
  {
    title: "Pourquoi l’accompagnement à domicile fait la différence",
    date: "10 novembre 2025",
    excerpt:
      "Rester chez soi tout en étant accompagné permet de conserver ses repères, son autonomie et sa dignité. Je vous explique comment un aide-soignant peut sécuriser le quotidien sans tout bouleverser.",
  },
  {
    title: "Prévenir les chutes à la maison : 5 réflexes simples",
    date: "2 novembre 2025",
    excerpt:
      "Tapis, éclairage, salle de bains… Quelques ajustements suffisent souvent à réduire considérablement le risque de chute. Voici les points que je vérifie systématiquement lors de mes interventions.",
  },
  {
    title: "Gestes et postures : se protéger pour mieux aider",
    date: "20 octobre 2025",
    excerpt:
      "Un bon accompagnement passe aussi par la santé du professionnel. Je partage ici des principes de base pour protéger le dos et les articulations lors des transferts et aides à la mobilité.",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-dark md:text-3xl">
            Blog & conseils
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600 max-w-xl mx-auto">
            Quelques articles pour mieux comprendre le rôle d’un aide-soignant à
            domicile et obtenir des conseils pratiques pour le quotidien.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <p className="text-xs text-slate-400">{post.date}</p>
              <h3 className="mt-2 text-sm font-semibold text-dark">
                {post.title}
              </h3>
              <p className="mt-2 text-xs md:text-sm text-slate-600 line-clamp-4">
                {post.excerpt}
              </p>
              <button className="mt-3 w-fit text-xs font-semibold text-primary hover:underline">
                Lire plus
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
