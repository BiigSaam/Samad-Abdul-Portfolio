import styles from './Experience.module.css'

const experiences = [
  {
    role: "Développeur Full Stack - Alternance",
    company: "Declaraid",
    date: "Sept 2025 – Aujourd’hui",
    location: "Paris, France",
    description:
      "Participation au développement du produit Declaraid, intégration avec APIs partenaires, maintenance sur les retours clients et contribution à l'amélioration continue du produit.",
    stack: ["JavaScript (ES6)", "Vue.js", "Node.js"],
  },
  {
    role: "Développeur Full Stack - Stage Alterné",
    company: "Komdab",
    date: "Déc 2024 – Mai 2025",
    location: "Paris, France",
    description:
      "Automatisation de tâches avec création d’endpoints pour la plateforme Komdab, gestion des incidents SAV.",
    stack: ["JavaScript (ES6)", "Node.js"],
  },
  {
    role: "Développeur Full Stack - Stage de fin d’études",
    company: "Novus Systems",
    date: "Mars 2024 – Août 2024",
    location: "Noisy-le-Grand, France",
    description:
      "Conception et développement d'un logiciel de gestion des activités des consultants (CRA).",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    role: "Développeur Full Stack - Stage de fin d’année",
    company: "DigitAsso",
    date: "Avr 2023 – Juil 2023",
    location: "Chatou, France",
    description:
      "Refonte du module boutique pour les plateformes communautaires, création de nouvelles fonctionnalités pour la gestion des produits et des commandes.",
    stack: ["Vue.js", "HTML", "CSS", "JavaScript", "MongoDB", "Git"],
  }
];

const Experience = () => (
  <section className={styles.experience} id="experience">
    <div className={styles.container}>
      <h2 className={styles.title}>Expériences professionnelles</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, idx) => (
          <div className={styles.item} key={idx}>
            <div className={styles.header}>
              <span className={styles.role}>
                {exp.role}
              </span>
              <span className={styles.company}>
                {exp.company}
              </span>
            </div>
            <div className={styles.meta}>
              {exp.date} — {exp.location}
            </div>
            <div className={styles.desc}>
              {exp.description}
            </div>
            <div className={styles.tags}>
              {exp.stack.map((tech) => (
                <span className={styles.tag} key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
