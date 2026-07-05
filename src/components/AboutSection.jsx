import React from 'react';

export default function AboutSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* CARD 1: LA TUA FILOSOFIA & ESPERIENZA */}
      <div className="p-8 bg-black border border-neutral-900 md:col-span-2 flex flex-col justify-between">
        <div>
          <span className="text-xs font-mono text-emerald-400 bg-neutral-950 px-3 py-1 border border-neutral-900 uppercase tracking-wider block w-fit mb-6">
            // PROFILE_LOG
          </span>
          <h3 className="text-2xl font-mono font-bold text-white mb-4">Full-Stack Dev dal 2022</h3>
          <p className="text-neutral-400 text-sm leading-relaxed space-y-4 font-sans">
            Scrivo codice con un approccio pragmatico orientato alla risoluzione di problemi reali. 
            Dal 2022 mi occupo di sviluppo software a 360°, traducendo logiche di business complesse in architetture backend pulite e interfacce utente fluide. 
            <br /><br />
            Attualmente impegnato nello sviluppo e nell'ottimizzazione di applicativi interni aziendali presso <strong>Technoparts S.r.l.</strong>, mi piace sporcarmi le mani sia con la gestione di database relazionali complessi sia con le sfide tecniche del mobile, delle integrazioni API e dei flussi dati in tempo reale.
          </p>
        </div>
        <div className="text-xs font-mono text-neutral-600 mt-6">
          STATUS: PRODUCTION_ACTIVE // INFRASTRUCTURE_MANAGEMENT
        </div>
      </div>

      {/* CARD 2: TIMELINE (EPICODE & MILESTONES) */}
      <div className="p-8 bg-black border border-neutral-900 md:col-span-1 flex flex-col justify-between">
        <div>
          <span className="text-xs font-mono text-emerald-400 bg-neutral-950 px-3 py-1 border border-neutral-900 uppercase tracking-wider block w-fit mb-6">
            // TIMELINE
          </span>
          
          <div className="relative border-l border-neutral-900 pl-4 space-y-6 text-xs font-mono">
            {/* Technoparts */}
            <div className="relative">
              <span className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-white block font-bold">NOV 2023 - PRESENTE</span>
              <span className="text-neutral-300">Technoparts S.r.l.</span>
              <span className="text-neutral-500 block text-[11px]">Full-Stack Developer (Internal Apps)</span>
            </div>

            {/* Sviluppatore Libero / Primi passi */}
            <div className="relative">
              <span className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-neutral-800"></span>
              <span className="text-neutral-400 block font-bold">2022 - 2023</span>
              <span className="text-neutral-400">Independent Dev & Production</span>
              <span className="text-neutral-500 block text-[11px]">Sviluppo Web, E-Commerce & Web Apps</span>
            </div>
            
            {/* Epicode */}
            <div className="relative">
              <span className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-neutral-900"></span>
              <span className="text-neutral-500 block font-bold">FORMAZIONE CORE</span>
              <span className="text-neutral-500">Epicode Bootcamp</span>
              <span className="text-neutral-600 block text-[11px]">Specializzazione Full-Stack</span>
            </div>
          </div>
        </div>

        {/* INTERESSI COLLATERALI */}
        <div className="border-t border-neutral-900 pt-4 mt-6">
          <span className="text-[10px] font-mono text-neutral-500 block uppercase tracking-widest mb-2">Side Interests</span>
          <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
            <span className="px-2 py-0.5 bg-neutral-950 border border-neutral-900 text-neutral-400">Hardware Tinkering</span>
            <span className="px-2 py-0.5 bg-neutral-950 border border-neutral-900 text-neutral-400">Computer Vision</span>
            <span className="px-2 py-0.5 bg-neutral-950 border border-neutral-900 text-neutral-400">UI/UX Design</span>
          </div>
        </div>
      </div>

    </div>
  );
}