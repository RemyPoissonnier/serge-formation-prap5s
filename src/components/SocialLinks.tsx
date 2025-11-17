import React from "react";

const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
      <span className="font-medium text-slate-700">Retrouvez-moi sur :</span>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-slate-200 bg-white px-3 py-1 hover:border-primary hover:text-primary"
      >
        LinkedIn
      </a>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-slate-200 bg-white px-3 py-1 hover:border-primary hover:text-primary"
      >
        Facebook
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-slate-200 bg-white px-3 py-1 hover:border-primary hover:text-primary"
      >
        Instagram
      </a>
    </div>
  );
};

export default SocialLinks;
