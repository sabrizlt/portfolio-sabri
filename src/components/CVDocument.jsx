import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    color: "#171717",
    padding: 0,
    fontFamily: "Helvetica",
  },

  // =========================
  // HEADER
  // =========================

  header: {
    paddingTop: 42,
    paddingHorizontal: 42,
    paddingBottom: 28,
    borderBottom: "1.5px solid #171717",
  },

  name: {
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "#111111",
    marginBottom: 6,
  },

  role: {
    fontSize: 11,
    color: "#555555",
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },

  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
    gap: 14,
  },

  contact: {
    fontSize: 8.5,
    color: "#555555",
  },

  // =========================
  // MAIN CONTENT
  // =========================

  content: {
    flexDirection: "row",
    paddingHorizontal: 42,
    paddingTop: 28,
  },

  // =========================
  // SIDEBAR
  // =========================

  sidebar: {
    width: "28%",
    paddingRight: 22,
    borderRight: "1px solid #e5e5e5",
  },

  main: {
    width: "72%",
    paddingLeft: 26,
  },

  sidebarSection: {
    marginBottom: 26,
  },

  sidebarTitle: {
    fontSize: 8,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    color: "#777777",
    marginBottom: 10,
  },

  sidebarText: {
    fontSize: 8.5,
    color: "#444444",
    lineHeight: 1.6,
    marginBottom: 4,
  },

  skillGroup: {
    marginBottom: 12,
  },

  skillCategory: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#222222",
    marginBottom: 5,
  },

  skill: {
    fontSize: 8.5,
    color: "#555555",
    lineHeight: 1.5,
  },

  // =========================
  // SECTIONS
  // =========================

  section: {
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1.8,
    color: "#171717",
    marginBottom: 10,
    paddingBottom: 6,
    borderBottom: "1px solid #dddddd",
  },

  text: {
    fontSize: 9.5,
    lineHeight: 1.65,
    color: "#3f3f3f",
  },

  // =========================
  // EXPERIENCE
  // =========================

  experience: {
    marginBottom: 18,
  },

  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 4,
  },

  company: {
    fontSize: 10.5,
    fontWeight: "bold",
    color: "#171717",
  },

  date: {
    fontSize: 8,
    color: "#777777",
    letterSpacing: 0.5,
  },

  position: {
    fontSize: 8.5,
    color: "#666666",
    marginBottom: 7,
  },

  experienceText: {
    fontSize: 9,
    lineHeight: 1.6,
    color: "#444444",
  },

  // =========================
  // PROJECTS
  // =========================

  project: {
    marginBottom: 15,
  },

  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },

  projectTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#171717",
  },

  projectType: {
    fontSize: 7.5,
    color: "#888888",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  projectText: {
    fontSize: 8.8,
    lineHeight: 1.55,
    color: "#444444",
  },

  // =========================
  // EDUCATION
  // =========================

  educationTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#171717",
    marginBottom: 3,
  },

  educationText: {
    fontSize: 8.8,
    color: "#555555",
    lineHeight: 1.5,
  },

  // =========================
  // FOOTER
  // =========================

  footer: {
  marginTop: 20,
  marginHorizontal: 42,
  paddingTop: 8,
  paddingBottom: 20,
  borderTop: "1px solid #eeeeee",
  flexDirection: "row",
  justifyContent: "space-between",
},

  footerText: {
    fontSize: 7,
    color: "#999999",
    letterSpacing: 0.5,
  },
});

export default function CVDocument() {
  return (
    <Document
      title="CV - Sabri Zaltni"
      author="Sabri Zaltni"
      subject="Curriculum Vitae - Full-Stack Developer"
    >
      <Page size="A4" style={styles.page}>

        {/* =========================
            HEADER
        ========================= */}

        <View style={styles.header}>
          <Text style={styles.name}>
            Sabri Zaltni
          </Text>

          <Text style={styles.role}>
            Full-Stack Developer
          </Text>

          <View style={styles.contactRow}>
            <Text style={styles.contact}>
              sabrizaltni@gmail.com
            </Text>

            <Text style={styles.contact}>
              +39 334 855 75390
            </Text>

            <Text style={styles.contact}>
              Comiso, Sicilia, Italia
            </Text>

            <Link
              src="https://sabrizlt.github.io/portfolio-sabri/"
              style={styles.contact}
            >
              sabrizlt.github.io/portfolio-sabri
            </Link>
          </View>
        </View>


        {/* =========================
            CONTENT
        ========================= */}

        <View style={styles.content}>

          {/* =========================
              SIDEBAR
          ========================= */}

          <View style={styles.sidebar}>

            {/* PROFILO BREVE */}

            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarTitle}>
                Profilo
              </Text>

              <Text style={styles.sidebarText}>
                Full-Stack Developer appassionato di tecnologia e sviluppo
                digitale. Mi piace trasformare idee e necessità in soluzioni
                concrete, semplici e funzionali.
              </Text>
            </View>


            {/* COMPETENZE */}

            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarTitle}>
                Competenze
              </Text>

              <View style={styles.skillGroup}>
                <Text style={styles.skillCategory}>
                  Frontend
                </Text>

                <Text style={styles.skill}>
                  HTML{"\n"}
                  CSS{"\n"}
                  JavaScript{"\n"}
                  React
                </Text>
              </View>

              <View style={styles.skillGroup}>
                <Text style={styles.skillCategory}>
                  Backend
                </Text>

                <Text style={styles.skill}>
                  PHP{"\n"}
                  Java{"\n"}
                  Spring Boot{"\n"}
                  REST API
                </Text>
              </View>

              <View style={styles.skillGroup}>
                <Text style={styles.skillCategory}>
                  Database
                </Text>

                <Text style={styles.skill}>
                  SQL{"\n"}
                  MySQL{"\n"}
                  PostgreSQL{"\n"}
                  Database relazionali
                </Text>
              </View>

              <View style={styles.skillGroup}>
                <Text style={styles.skillCategory}>
                  CMS & E-Commerce
                </Text>

                <Text style={styles.skill}>
                  WordPress{"\n"}
                  WooCommerce
                </Text>
              </View>

              <View style={styles.skillGroup}>
                <Text style={styles.skillCategory}>
                  Tools
                </Text>

                <Text style={styles.skill}>
                  Git{"\n"}
                  GitHub{"\n"}
                  Excel
                </Text>
              </View>
            </View>


            {/* FORMAZIONE */}

            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarTitle}>
                Formazione
              </Text>

              <Text style={styles.educationTitle}>
                Epicode
              </Text>

              <Text style={styles.educationText}>
                Bootcamp Full-Stack Development{"\n"}
                2022 — 2023
              </Text>
            </View>


            {/* INTERESSI */}

            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarTitle}>
                Interessi
              </Text>

              <Text style={styles.sidebarText}>
                Tecnologia{"\n"}
                Sviluppo software{"\n"}
                Nuove idee{"\n"}
                Creatività
              </Text>
            </View>

          </View>


          {/* =========================
              MAIN
          ========================= */}

          <View style={styles.main}>

            {/* PROFILO */}

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>
                Profilo professionale
              </Text>

              <Text style={styles.text}>
                Mi occupo di sviluppo software e mi piace trasformare idee,
                necessità e problemi concreti in soluzioni semplici, funzionali
                e curate nei dettagli. Dal 2022 lavoro nel mondo dello sviluppo,
                esplorando diversi aspetti della tecnologia e costruendo
                esperienza attraverso progetti professionali e personali.
              </Text>

              <Text style={[styles.text, { marginTop: 7 }]}>
                Nel mio percorso ho lavorato con applicazioni web e mobile,
                sistemi backend, API e database relazionali. Mi interessa
                seguire il progetto nel suo insieme, dalla progettazione
                dell'interfaccia alla gestione della logica applicativa e dei
                dati.
              </Text>
            </View>


            {/* ESPERIENZA */}

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>
                Esperienza professionale
              </Text>

              {/* TECHNOPARTS */}

              <View style={styles.experience} wrap={false}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.company}>
                    Technoparts S.r.l.
                  </Text>

                  <Text style={styles.date}>
                    NOV 2023 — OGGI
                  </Text>
                </View>

                <Text style={styles.position}>
                  Full-Stack Developer · Applicativi interni aziendali
                </Text>

                <Text style={styles.experienceText}>
                  Sviluppo e manutenzione di applicativi interni utilizzati
                  per supportare e ottimizzare i processi aziendali. Mi occupo
                  dell'evoluzione e dell'aggiornamento del gestionale,
                  lavorando su funzionalità, flussi informativi e strumenti
                  dedicati alla gestione dei dati.
                </Text>

                <Text style={[styles.experienceText, { marginTop: 5 }]}>
                  Nel lavoro quotidiano mi confronto con database relazionali
                  e query SQL complesse, occupandomi dell'estrazione,
                  elaborazione e organizzazione di grandi quantità di dati.
                  Utilizzo inoltre Excel come strumento di supporto per
                  l'analisi e la gestione delle informazioni aziendali.
                </Text>

                <Text style={[styles.experienceText, { marginTop: 5 }]}>
                  Mi occupo anche dello sviluppo di interfacce web e servizi
                  backend, dell'integrazione tra applicazioni tramite API e
                  della gestione dei flussi dati tra i diversi sistemi
                  aziendali.
                </Text>
              </View>


              {/* PROGETTI PERSONALI */}

              <View style={styles.experience} wrap={false}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.company}>
                    Progetti personali
                  </Text>

                  <Text style={styles.date}>
                    2024 — OGGI
                  </Text>
                </View>

                <Text style={styles.position}>
                  Web Development · E-Commerce · Applicazioni
                </Text>

                <Text style={styles.experienceText}>
                  Sviluppo di progetti personali e soluzioni digitali,
                  sperimentando tecnologie diverse e seguendo direttamente
                  le varie fasi del progetto, dalla progettazione alla
                  realizzazione.
                </Text>
              </View>

            </View>


            {/* PROGETTI */}

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>
                Progetti selezionati
              </Text>


              <View style={styles.project} wrap={false}>
                <View style={styles.projectHeader}>
                  <Text style={styles.projectTitle}>
                    Scrocchia80.no
                  </Text>

                  <Text style={styles.projectType}>
                    E-Commerce
                  </Text>
                </View>

                <Text style={styles.projectText}>
                  Realizzazione di un e-commerce per un'attività in Norvegia
                  specializzata nella vendita di prodotti per la pizza.
                  Sviluppato con WordPress e WooCommerce, con gestione del
                  catalogo e del flusso di acquisto.
                </Text>
              </View>


              <View style={styles.project} wrap={false}>
                <View style={styles.projectHeader}>
                  <Text style={styles.projectTitle}>
                    Appointment-geb.com
                  </Text>

                  <Text style={styles.projectType}>
                    Web Application
                  </Text>
                </View>

                <Text style={styles.projectText}>
                  Sviluppo di una piattaforma per la gestione e prenotazione
                  di appuntamenti per barberie. L'applicazione permette di
                  gestire operatori, servizi, date e disponibilità attraverso
                  un sistema di prenotazione strutturato.
                </Text>
              </View>


              <View style={styles.project} wrap={false}>
                <View style={styles.projectHeader}>
                  <Text style={styles.projectTitle}>
                    Love-Quotes.com
                  </Text>

                  <Text style={styles.projectType}>
                    WordPress
                  </Text>
                </View>

                <Text style={styles.projectText}>
                  Sviluppo e personalizzazione di un sito WordPress dedicato
                  alla pubblicazione di contenuti editoriali e alla gestione
                  della presenza digitale di un creator con una community
                  social.
                </Text>
              </View>


              <View style={styles.project} wrap={false}>
                <View style={styles.projectHeader}>
                  <Text style={styles.projectTitle}>
                    Enterprise Internal Applications
                  </Text>

                  <Text style={styles.projectType}>
                    Internal Software
                  </Text>
                </View>

                <Text style={styles.projectText}>
                  Sviluppo e manutenzione di applicativi interni per supportare
                  i processi aziendali, con gestione dei dati, database
                  relazionali, query SQL, API e strumenti dedicati
                  all'organizzazione delle informazioni.
                </Text>
              </View>

            </View>

          </View>

        </View>


        {/* =========================
            FOOTER
        ========================= */}

<View style={styles.footer}>
          <Text style={styles.footerText}>
            SABRI ZALTNI · FULL-STACK DEVELOPER
          </Text>

          <Text
            style={styles.footerText}
            render={({ pageNumber, totalPages }) =>
              `PAGINA ${pageNumber} / ${totalPages}`
            }
          />
        </View>

      </Page>
    </Document>
  );
}