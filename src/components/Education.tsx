import styles from './Education.module.css';
import iimLogo from '../assets/logos/iim.png';
import cergyLogo from '../assets/logos/cergy.png';
import feyderLogo from '../assets/logos/feyder.png';

const formations = [
  {
    title: "Mastère Lead Développeur Full Stack",
    school: "IIM Digital School – Pôle Léonard de Vinci",
    logo: iimLogo,
    time: "2024 – 2026 | Nanterre, France",
  },
  {
    title: "BUT MMI - Développement Web et Dispositifs Interactifs",
    school: "IUT de Sarcelles – CY Cergy Paris Université",
    logo: cergyLogo,
    time: "2021 – 2024 | Sarcelles, France",
  },
  {
    title: "Baccalauréat Scientifique - Option Sciences de l'Ingénieur",
    school: "Lycée Jacques Feyder",
    logo: feyderLogo,
    time: "2017 – 2020 | Épinay-sur-Seine, France",
  }
];

const Education = () => (
  <section className={styles.education} id="education">
    <div className={styles.container}>
      <h2 className={styles.title}>Formations</h2>
      <div className={styles.timeline}>
        {formations.map((edu) => (
          <div key={edu.title} className={styles.entry}>
            <div className={styles.dot}>
              <img src={edu.logo} alt="Logo école" className={styles.logo} />
            </div>
            <div className={styles.content}>
              <div className={styles.degree}>{edu.title}</div>
              <div className={styles.school}>{edu.school}</div>
              <div className={styles.details}>{edu.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
