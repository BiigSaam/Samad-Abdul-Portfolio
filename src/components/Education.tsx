import styles from './Education.module.css'

const Education = () => {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <h2 className={styles.title}>Formations</h2>
        <div className={styles.timeline}>

          <div className={styles.entry}>
            <span className={styles.dot}></span>
            <div className={styles.content}>
              <h3 className={styles.degree}>Mastère Lead Développeur Full Stack</h3>
              <p className={styles.school}>IIM Digital School – Pôle Léonard de Vinci</p>
              <p className={styles.details}>2024 – 2026 | Nanterre, France</p>
            </div>
          </div>

          <div className={styles.entry}>
            <span className={styles.dot}></span>
            <div className={styles.content}>
              <h3 className={styles.degree}>BUT MMI - Développement Web et Dispositifs Interactifs</h3>
              <p className={styles.school}>IUT de Sarcelles – CY Cergy Paris Université</p>
              <p className={styles.details}>2021 – 2024 | Sarcelles, France</p>
            </div>
          </div>

          <div className={styles.entry}>
            <span className={styles.dot}></span>
            <div className={styles.content}>
              <h3 className={styles.degree}>Baccalauréat Scientifique - Option Sciences de l'Ingénieur</h3>
              <p className={styles.school}>Lycée Jacques Feyder</p>
              <p className={styles.details}>2017 – 2020 | Épinay-sur-Seine, France</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Education
