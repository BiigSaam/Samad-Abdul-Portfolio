import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Samad Abdul — Développeur Full Stack
        <span className={styles.emoji} role="img" aria-label="salut">👋</span>
      </h1>
      <p className={styles.subtitle}>
        React – Node.js – TypeScript – UI moderne
      </p>
      <a href="#projects" className={styles.cta}>
        Voir mes projets
      </a>
    </section>
  );
};

export default Hero;
