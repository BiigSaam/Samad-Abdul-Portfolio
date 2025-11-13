// components/Footer.tsx
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.column}>
          <h4>À propos</h4>
          <p>
            Développeur Full Stack qui conçoit et déploie des expériences web modernes, performantes et pensées pour durer.<br />
            J’accompagne entrepreneurs, startups et entreprises à transformer leurs idées en produits digitaux performants et prêts à scaler.
          </p>
        </div>

        <div className={styles.column}>
          <h4>Navigation</h4>
          <ul>
            <li><a href="#about">À propos</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Me suivre</h4>
          <ul>
            <li><a href="https://github.com/BiigSaam" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/samad-abdul-alternance-developpeur-web-full-stack/" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:samad.abdul.contact@gmail.com">samad.abdul.contact@gmail.com</a></li>
            <li><a href="tel:+33651988299">06 51 98 82 99</a></li>
            <li>Basé à Épinay-Sur-Seine,<br /> Île-de-France, France</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} Samad Abdul — Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer
