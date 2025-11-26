import styles from './About.module.css';

const skills = [
  "React", "Node.js", "TypeScript", "Symfony", "UI Design",
  "Rigueur", "Collaboration", "Créativité"
];

const hobbies = [
  "Musculation", "Volleyball", "Jeux vidéo", "Voyage", "Cinéma"
];

const About = () => (
  <section className={styles.about} id="about">
    <div className={styles.wrapper}>
      <img
        src="/images/Samad_Abdul.png"
        alt="Photo de Samad Abdul"
        className={styles.avatar}
      />
      <div className={styles.container}>
        <h2 className={styles.title}>À propos de moi</h2>
        <p className={styles.text}>
          Je m'appelle <strong>Samad Abdul</strong>, développeur web full stack passionné par la création de solutions numériques utiles, performantes et bien conçues. Grâce à mes expériences en entreprise et en formation, j’ai pu développer mes compétences sur des technologies comme React, Node.js, TypeScript, Symfony et bien d’autres, au sein de projets concrets et orientés produit.
        </p>
        <p className={styles.text}>
          Actuellement en Mastère Lead Développeur Full Stack à l’IIM Digital School, j’adopte une approche centrée sur la résolution de problèmes, la rigueur dans le code, la collaboration en équipe et l’apprentissage continu. J'accorde une importance particulière à la qualité du produit fini et à l'impact qu'il peut avoir pour ses utilisateurs.
        </p>
        <div className={styles.tags}>
          {skills.map(skill => (
            <span key={skill} className={styles.tag}>{skill}</span>
          ))}
        </div>
        <div className={styles.cvLink}>
          <a href="/CV-Samad_ABDUL-Alternance_Developpeur_full_stack.pdf" target="_blank" rel="noopener noreferrer">
            Télécharger mon CV
          </a>
        </div>
        <p className={styles.text} style={{marginTop: '1.4rem'}}>
          <strong>Loisirs :</strong> {hobbies.join(" · ")}
        </p>
      </div>
    </div>
  </section>
);

export default About;
