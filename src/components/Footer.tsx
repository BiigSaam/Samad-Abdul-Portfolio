import styles from './Footer.module.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Navigation */}
        <div>
          <h4 className={styles.sectionTitle}>Navigation</h4>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#about" className={styles.navLink}>À propos</a>
            </li>
            <li className={styles.navItem}>
              <a href="#projects" className={styles.navLink}>Projets</a>
            </li>
            <li className={styles.navItem}>
              <a href="#experience" className={styles.navLink}>Expériences</a>
            </li>
            <li className={styles.navItem}>
              <a href="#skills" className={styles.navLink}>Compétences</a>
            </li>
            <li className={styles.navItem}>
              <a href="#contact" className={styles.navLink}>Contact</a>
            </li>
          </ul>
        </div>

        {/* Réseaux */}
        <div>
          <h4 className={styles.sectionTitle}>Réseaux</h4>
          <div className={styles.socialRow}>
            <a
              href="https://github.com/tonprofil"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/tonprofil"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:samad.abdul.contact@gmail.com"
              className={styles.socialLink}
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className={styles.sectionTitle}>Contact</h4>
          <p className={styles.infoText}>
            Ouvert aux opportunités en développement full stack et projets freelance
          </p>
          <p className={styles.infoText}>
            Écrivez-moi à&nbsp;
            <a
              href="mailto:samad.abdul.contact@gmail.com"
              className={styles.navLink}
            >
              samad.abdul.contact@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.line}>
          <span className={styles.made}>
            Made with <span className={styles.heart}>♥</span> by Samad A.
          </span>
          <span className={styles.separator}></span>
          <a href="#top" className={styles.backToTop}>
            Retour en haut
          </a>
        </div>
        <div className={styles.line}>
          © {currentYear} Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}

export default Footer
