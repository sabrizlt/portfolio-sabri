import React from "react";
import ScrollReveal from "./ScrollReveal";

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "WordPress",
  "WooCommerce",
  "PHP",
  "Java",
  "Spring Boot",
  "MySQL",
  "PostgreSQL",
  "SQL",
];

export default function Technologie() {
  return (
    <ScrollReveal direction="up">
      <div className="p-8 bg-black border border-neutral-900 hover:border-neutral-800 transition-colors duration-500 overflow-hidden">
        
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs font-mono text-emerald-400 bg-neutral-950 px-3 py-1 border border-neutral-900 uppercase tracking-wider">
            // TECHNOLOGIES
          </span>

          <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
            STACK // 2026
          </span>
        </div>

        {/* MARQUEE */}
        <div className="relative overflow-hidden">
          
          {/* SFUMATURA SINISTRA */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-black to-transparent" />

          {/* SFUMATURA DESTRA */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-black to-transparent" />

          <div className="flex w-max animate-marquee">
            
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech}-${index}`}
                className="flex items-center"
              >
                <span className="px-6 text-sm font-mono uppercase tracking-widest text-neutral-400 hover:text-emerald-400 transition-colors duration-300">
                  {tech}
                </span>

                <span className="text-emerald-500/40 text-xs">
                  //
                </span>
              </div>
            ))}

          </div>
        </div>

        {/* FOOTER */}
        <div className="border-t border-neutral-900 mt-8 pt-4">
          <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
            Always learning // Always building
          </span>
        </div>

      </div>
    </ScrollReveal>
  );
}