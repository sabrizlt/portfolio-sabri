import React, { useEffect } from "react";
import Navbar from "./components/Navbar"; // <-- Importiamo la nuova Navbar
import ProjectGrid from "./components/ProjectGrid";
import AboutSection from "./components/AboutSection";
import GeoCard from "./components/GeoCard";
import CustomCursor from "./components/CustomCursor";
import TechStack from "./components/TechStack";

export default function App() {
  useEffect(() => {
    console.clear();
    console.log(
      `%c 
       ____    _    ____  ____  ___     ____  _______     __
      / ___|  / \\  | __ )|  _ \\|_ _|   |  _ \\| ____\\ \\   / /
      \\___ \\ / _ \\ |  _ \\| |_) || |    | | | |  _|  \\ \\ / / 
       ___) / ___ \\| |_) |  _ < | |    | |_| | |___  \\ V /  
      |____/_/   \\_\\____/|_| \\_\\___|   |____/|_____|  \\_/   
                                                            
      `,
      "color: #10b981; font-weight: bold; font-family: monospace;",
    );
    // ... mantieni gli altri console.log che avevamo impostato ...
  }, []);

  return (
    <div className="min-h-screen bg-black text-neutral-100 font-sans antialiased selection:bg-emerald-500 selection:text-black">
      {/* CURSORE PERSONALIZZATO */}
      <CustomCursor />

      {/* NAVBAR COMPONENTE SEPARATO */}
      <Navbar />

      {/* CONTENITORE PRINCIPALE */}
      <main className="max-w-6xl mx-auto px-6 py-24 space-y-40">
        {/* HERO SECTION */}
        <section className="min-h-[50vh] flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-950 border border-neutral-900 w-fit">
            <span className="w-1.5 h-1.5 bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              System Ready // Available
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.1] font-mono text-white">
            Costruisco soluzioni <br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-400 to-neutral-600">
              web, mobile e IoT.
            </span>
          </h1>

          <p className="text-neutral-400 text-base md:text-lg max-w-2xl leading-relaxed font-sans">
            Full-Stack Developer orientato alla performance e al codice pulito.
            Sviluppo ecosistemi digitali integrando applicazioni mobile native,
            architetture backend stabili e interazioni hardware.
          </p>
        </section>

        {/* PROGETTI SECTION */}
        <section id="progetti" className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-900 pb-6">
            <div>
              <h2 className="text-2xl font-mono uppercase tracking-wider text-white">
                Progetti Selezionati
              </h2>
              <p className="text-neutral-500 text-sm mt-1">
                Soluzioni logiche ed esperimenti hardware-software.
              </p>
            </div>
          </div>

          <ProjectGrid />
        </section>

        
        

        {/* ABOUT & TIMELINE SECTION */}
        <section id="about" className="space-y-12">
          <div className="border-t border-neutral-900 pt-16">
            <h2 className="text-2xl font-mono uppercase tracking-wider text-white">
              Experience // Background
            </h2>
            <p className="text-neutral-500 text-sm mt-1">
              Il mio percorso nel mondo dello sviluppo e le mie aree di focus.
            </p>
          </div>

          <AboutSection />
        </section>

        {/* CONTATTI & GEOLOCALIZZAZIONE */}
        <section id="contatti" className="space-y-12">
          <div className="border-t border-neutral-900 pt-16">
            <h2 className="text-2xl font-mono uppercase tracking-wider text-white">
              Connessione // Info
            </h2>
            <p className="text-neutral-500 text-sm mt-1">
              Mettiti in contatto per collaborazioni o consulenze tecniche.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-black border border-neutral-900 md:col-span-2 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-emerald-400 bg-neutral-950 px-3 py-1 border border-neutral-900 uppercase tracking-wider block w-fit mb-6">
                  // CHANNELS
                </span>
                <h3 className="text-xl font-mono font-bold text-white mb-6">
                  Avvia una sessione di comunicazione
                </h3>

                <div className="space-y-4 font-mono text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-neutral-900 bg-neutral-950/30 hover:border-neutral-800 transition-colors">
                    <span className="text-neutral-500">EMAIL:</span>
                    <a
                      href="mailto:sabrizaltni@gmail.com"
                      className="text-emerald-400 hover:underline text-sm sm:text-base"
                    >
                      sabrizaltni@gmail.com
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-neutral-900 bg-neutral-950/30 hover:border-neutral-800 transition-colors">
                    <span className="text-neutral-500">PHONE:</span>
                    <a
                      href="tel:+3933485575390"
                      className="text-neutral-300 hover:text-emerald-400 transition-colors"
                    >
                      +39 334 855 75390
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-xs font-mono text-neutral-600 mt-8">
                P.S. Rispondo solitamente entro poche ore. Codice pulito
                garantito.
              </div>
            </div>

            <div className="md:col-span-1">
              <GeoCard />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-neutral-900 pt-16 pb-12 text-center">
          <p className="text-xs text-neutral-600 font-mono tracking-widest uppercase">
            &copy; 2026 SABRI.DEV // COMISO, IT.
          </p>
        </footer>
      </main>
    </div>
  );
}
