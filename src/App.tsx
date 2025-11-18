import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SectionFormation from "./components/SectionFormation";
import SectionMateriel from "./components/SectionMateriel";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-24">
        <Hero />
        <SectionFormation />
        <SectionMateriel />
      </main>
      <Footer />
    </div>
  );
};

export default App;
