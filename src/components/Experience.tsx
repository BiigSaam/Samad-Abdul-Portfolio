import styles from './Experience.module.css'

type Experience = {
  role: string;
  company: string;
  date: string;
  location: string;
  description: string;
  stack: string;
}

const experiences: Experience[] = [
  {
    role: "Développeur Full Stack - Alternance",
    company: "Komdab",
    date: "Déc 2024 – Avr 2025",
    location: "Distanciel",
    description: "Automatisation de tâches avec création d’endpoints pour la plateforme Komdab, gestion des incidents SAV",
    stack: "Stack : JavaScript (ES6), Node.js",
  },
  {
    role: "Développeur Full Stack - Stage de fin d’études",
    company: "Novus Systems",
    date: "Mars 2024 – Août 2024",
    location: "Noisy-le-Grand",
    description: "Conception et développement from scratch d'un logiciel de gestion des activités des consultants (CRA)",
    stack: "Stack : HTML, CSS, JavaScript, PHP, MySQL",
  },
  {
    role: "Développeur Full Stack - Stage de fin d’année",
    company: "DigitAsso",
    date: "Avr 2023 – Juil 2023",
    location: "Chatou",
    description: "Refonte du module boutique pour les plateformes communautaires, création de nouvelles fonctionnalités pour la gestion des produits et des commandes",
    stack: "Stack : Vue.js, HTML, CSS, JavaScript, MongoDB, Git",
  }
]

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.title}>Expériences Professionnelles</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, idx) => (
            <div key={idx} className={styles.item}>
              <div className={styles.header}>
                <h3 className={styles.role}>{exp.role}</h3>
                <span className={styles.company}>{exp.company}</span>
              </div>
              <div className={styles.meta}>
                <span>{exp.date}</span> — <span>{exp.location}</span>
              </div>
              <p className={styles.desc}>{exp.description}</p>
              <p className={styles.stack}>{exp.stack}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience;