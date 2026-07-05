import React from 'react';

const stackCategories = [
  {
    title: "Core Backend & Logic",
    description: "Architetture stabili, pattern enterprise e logiche server-side per applicativi ad alto carico.",
    skills: [
      { name: "Java Spring Boot", type: "Enterprise" },
      { name: "PHP", type: "Server" },
      { name: "SQL", type: "Database" },
      { name: "REST JSON APIs", type: "Integration" }
    ]
  },
  {
    title: "Modern Frontend",
    description: "Sviluppo di interfacce web e mobile reattive, utility-first e con cura maniacale per la performance.",
    skills: [
      { name: "JavaScript (ES6+)", type: "Language" },
      { name: "Tailwind CSS", type: "Utility-First" },
      { name: "Bootstrap", type: "Framework" },
      { name: "HTML5 & CSS3", type: "Foundational" }
    ]
  },
  {
    title: "E-Commerce & Digital CMS",
    description: "Progettazione di piattaforme di vendita internazionali strutturate per flussi di cassa reali.",
    skills: [
      { name: "WooCommerce", type: "E-Commerce" },
      { name: "WordPress", type: "CMS Ecosystem" }
    ]
  },
  {
    title: "AI Ecosystems & Systems",
    description: "Integrazione di modelli intelligenti per automazione, parsing dati e padronanza dei sistemi internet.",
    skills: [
      { name: "AI Web Services", type: "Automation" },
      { name: "JSON Parsing", type: "Data Flows" }
    ]
  }
];

export default function TechStack() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* BLOCCO GRANDE: BACKEND */}
      <div className="p-8 bg-black border border-neutral-900 md:col-span-2 flex flex-col justify-between hover:border-neutral-800 transition-colors">
        <div>
          <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest block mb-4">// 01 . BACKEND & CORE</span>
          <h3 className="text-xl font-mono font-bold text-white mb-2">{stackCategories[0].title}</h3>
          <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-sans">{stackCategories[0].description}</p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {stackCategories[0].skills.map((skill) => (
            <span key={skill.name} className="px-3 py-1.5 bg-neutral-950 border border-neutral-900 font-mono text-xs text-neutral-200">
              {skill.name} <span className="text-emerald-500/60 text-[10px] ml-1">[{skill.type}]</span>
            </span>
          ))}
        </div>
      </div>

      {/* BLOCCO MEDIO: CMS & E-COMMERCE */}
      <div className="p-8 bg-black border border-neutral-900 md:col-span-1 flex flex-col justify-between hover:border-neutral-800 transition-colors">
        <div>
          <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest block mb-4">// 02 . PRODUCTION ECOSYSTEMS</span>
          <h3 className="text-xl font-mono font-bold text-white mb-2">{stackCategories[2].title}</h3>
          <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-sans">{stackCategories[2].description}</p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {stackCategories[2].skills.map((skill) => (
            <span key={skill.name} className="px-3 py-1.5 bg-neutral-950 border border-neutral-900 font-mono text-xs text-neutral-200 w-full flex justify-between">
              <span>{skill.name}</span>
              <span className="text-neutral-600 text-[10px]">{skill.type}</span>
            </span>
          ))}
        </div>
      </div>

      {/* BLOCCO MEDIO: FRONTEND */}
      <div className="p-8 bg-black border border-neutral-900 md:col-span-1 flex flex-col justify-between hover:border-neutral-800 transition-colors">
        <div>
          <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest block mb-4">// 03 . VISUAL ENGINE</span>
          <h3 className="text-xl font-mono font-bold text-white mb-2">{stackCategories[1].title}</h3>
          <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-sans">{stackCategories[1].description}</p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {stackCategories[1].skills.map((skill) => (
            <span key={skill.name} className="px-2.5 py-1 bg-neutral-950 border border-neutral-900 font-mono text-xs text-neutral-400">
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      {/* BLOCCO GRANDE: AI & SYSTEMS */}
      <div className="p-8 bg-black border border-neutral-900 md:col-span-2 flex flex-col justify-between hover:border-neutral-800 transition-colors">
        <div>
          <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest block mb-4">// 04 . INTELLIGENCE & DATA</span>
          <h3 className="text-xl font-mono font-bold text-white mb-2">{stackCategories[3].title}</h3>
          <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-sans">{stackCategories[3].description}</p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {stackCategories[3].skills.map((skill) => (
            <span key={skill.name} className="px-3 py-1.5 bg-neutral-950 border border-neutral-400/20 font-mono text-xs text-emerald-400">
              {skill.name} ✓
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}