import styles from './Skills.module.css'

const hardSkills = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "ReactJS", "NextJS", "Bootstrap", "Nunjucks", "Sass", "Twig"],
  },
  {
    title: "Backend",
    items: ["Node.JS", "PHP", "MySQL", "ExpressJS", "Symfony", "Prisma", "Supabase", "REST API"],
  },
  {
    title: "DevOps / Outils",
    items: ["Git", "Docker", "AWS", "GitHub", "API", "Vite", "Figma", "Visual Studio Code", "Canva"],
  },
  {
    title: "Méthodologies / Tests",
    items: ["Agile", "SCRUM", "TDD", "Cypress", "Jest", "Postman"],
  },
  {
    title: "Autres",
    items: ["Kotlin", "React Native", "C/C++", "WordPress", "SEO", "UX Design", "Performance Web"],
  }
];
const softSkills = [
  "Innovation", "Veille technologique", "Esprit d’équipe", "Feedback constructif", "Polyvalence", "Autonomie", "Assiduité", "Communication", "Créativité"
];

const Skills = () => (
  <section className={styles.skills} id="skills">
    <div className={styles.container}>
      <h2 className={styles.title}>Compétences</h2>
      <div className={styles.underline}></div>
      <div className={styles.section}>
        <h3 className={styles.subtitle}>Hard Skills</h3>
        <div className={styles.grid}>
          {hardSkills.map((cat, index) => (
            <div className={styles.card} key={cat.title + index}>
              <span className={styles.cardTitle}>{cat.title}</span>
              <ul className={styles.hardList}>
                {cat.items.map((skill, i) => (
                  <li className={styles.hardTag} key={skill + i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.subtitle}>Soft Skills</h3>
        <div className={styles.softGrid}>
          {softSkills.map((skill, i) => (
            <div className={styles.softTag} key={skill + i}>{skill}</div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
