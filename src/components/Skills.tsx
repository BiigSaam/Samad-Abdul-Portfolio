import styles from './Skills.module.css'

type SkillCategory = {
  title: string;
  items: string[];
}

const hardSkills: SkillCategory[] = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "ReactJS", "NextJS", "Bootstrap", "Nunjucks", "Saas", "Twig"],
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
    items: ["Agile", "SCRUM", "TDD", "Cypress"],
  },
  {
    title: "Autres",
    items: ["Kotlin", "React Native", "C/C++", "WordPress", "SEO", "UX Design", "Performance Web"],
  }
]

const softSkills = [
  "Résolution de problèmes", "Veille technologique", "Esprit d’équipe",
  "Polyvalence", "Autonomie", "Assiduité", "Communication"
]

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Compétences</h2>

        <div className={styles.section}>
          <h3 className={styles.subtitle}>Hard Skills</h3>
          <div className={styles.grid}>
            {hardSkills.map((cat, index) => (
              <div key={index} className={styles.card}>
                <h4 className={styles.cardTitle}>{cat.title}</h4>
                <ul className={styles.hardList}>
                  {cat.items.map((skill, i) => (
                    <li key={i} className={styles.hardTag}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.softSkillsSection}>
            <h3 className={styles.subtitle}>Soft Skills</h3>
            <div className={styles.softGrid}>
                {softSkills.map((skill, i) => (
                <span key={i} className={`${styles.softTag}`}>{skill}</span>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;