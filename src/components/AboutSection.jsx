import React from "react";
import ScrollReveal from "./ScrollReveal";

const timeline = [
  {
    dot: "bg-emerald-500",
    date: "NOV 2023 - OGGI",
    dateClass: "text-white",
    role: "Technoparts S.r.l.",
    roleClass: "text-neutral-300",
    detail: "Il mio percorso professionale nel mondo dello sviluppo",
  },
  {
    dot: "bg-neutral-800",
    date: "2024 - OGGI",
    dateClass: "text-neutral-400",
    role: "Progetti personali",
    roleClass: "text-neutral-400",
    detail: "Idee, esperimenti e progetti sviluppati nel tempo",
  },
  {
    dot: "bg-neutral-900",
    date: "2022 - 2023",
    dateClass: "text-neutral-500",
    role: "Epicode",
    roleClass: "text-neutral-500",
    detail: "L'inizio del mio percorso nello sviluppo software",
  },
];

export default function AboutSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* CARD 1: LA TUA FILOSOFIA & ESPERIENZA */}
      <ScrollReveal direction="left" className="md:col-span-2">
        <div className="p-8 bg-black border border-neutral-900 hover:border-neutral-800 transition-colors duration-500 flex flex-col justify-between h-full">
          <div>
            <span className="text-xs font-mono text-emerald-400 bg-neutral-950 px-3 py-1 border border-neutral-900 uppercase tracking-wider block w-fit mb-6">
              // PROFILE_LOG
            </span>
            <h3 className="text-2xl font-mono font-bold text-white mb-4">
              Full-Stack Dev dal 2022
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed space-y-4 font-sans">
              Mi occupo di sviluppo software e mi piace trasformare idee e
              necessità in soluzioni semplici, funzionali e curate nei dettagli.
              Dal 2022 lavoro nel mondo dello sviluppo, esplorando diversi
              aspetti della tecnologia e imparando ogni giorno qualcosa di
              nuovo.
              <br />
              <br />
              Attualmente lavoro presso <strong>Technoparts S.r.l.</strong>,
              dove mi occupo dello sviluppo e dell'ottimizzazione di applicativi
              interni aziendali. Nel mio percorso ho avuto modo di lavorare con
              applicazioni web e mobile, database, API e sistemi che richiedono
              una gestione attenta dei dati. Mi piace sperimentare, affrontare
              nuove sfide e trovare il modo migliore per trasformare un'idea in
              qualcosa di concreto.
            </p>
          </div>
          <div className="text-xs font-mono text-neutral-600 mt-6">
            STATUS: PRODUCTION_ACTIVE // ALWAYS_LEARNING
          </div>
        </div>
      </ScrollReveal>

      {/* CARD 2: TIMELINE (EPICODE & MILESTONES) */}
      <ScrollReveal direction="right" delay={120} className="md:col-span-1">
        <div className="p-8 bg-black border border-neutral-900 hover:border-neutral-800 transition-colors duration-500 flex flex-col justify-between h-full">
          <div>
            <span className="text-xs font-mono text-emerald-400 bg-neutral-950 px-3 py-1 border border-neutral-900 uppercase tracking-wider block w-fit mb-6">
              // TIMELINE
            </span>

            <div className="relative border-l border-neutral-900 pl-4 space-y-6 text-xs font-mono">
              {timeline.map((item, i) => (
                <ScrollReveal
                  key={item.date}
                  as="div"
                  delay={200 + i * 120}
                  direction="up"
                  className="relative"
                >
                  <span
                    className={`absolute -left-[21px] top-1 w-2 h-2 rounded-full ${item.dot}`}
                  ></span>
                  <span className={`block font-bold ${item.dateClass}`}>
                    {item.date}
                  </span>
                  <span className={item.roleClass}>{item.role}</span>
                  <span className="text-neutral-500 block text-[11px]">
                    {item.detail}
                  </span>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* INTERESSI COLLATERALI */}
          <div className="border-t border-neutral-900 pt-4 mt-6">
            <span className="text-[10px] font-mono text-neutral-500 block uppercase tracking-widest mb-2">
              Oltre il codice
            </span>

            <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
              <span className="px-2 py-0.5 bg-neutral-950 border border-neutral-900 text-neutral-400 hover:border-emerald-500/40 hover:text-emerald-400 transition-colors">
                Curiosità
              </span>

              <span className="px-2 py-0.5 bg-neutral-950 border border-neutral-900 text-neutral-400 hover:border-emerald-500/40 hover:text-emerald-400 transition-colors">
                Tecnologia
              </span>

              <span className="px-2 py-0.5 bg-neutral-950 border border-neutral-900 text-neutral-400 hover:border-emerald-500/40 hover:text-emerald-400 transition-colors">
                Creatività
              </span>

              <span className="px-2 py-0.5 bg-neutral-950 border border-neutral-900 text-neutral-400 hover:border-emerald-500/40 hover:text-emerald-400 transition-colors">
                Nuove idee
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
