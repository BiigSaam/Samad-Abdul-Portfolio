import styles from './About.module.css'

const About = () => {
  return (
    <section id='about' className={styles.about}>
      <div className={styles.wrapper}>
        <img
          src="/images/Samad_Abdul.png"
          alt="Photo de Samad Abdul"
          className={styles.avatar}
        />
        <div className={styles.container}>
          <h2 className={styles.title}>À propos de moi</h2>
          <p className={styles.text}>
            Je m'appelle <strong>Samad Abdul</strong>, développeur web full stack en devenir, passionné par la création de solutions numériques utiles, performantes et bien conçues. Grâce à mes expériences en entreprise et en formation, j’ai pu développer mes compétences sur des technologies comme React, Node.js, TypeScript, Symfony et bien d’autres, en participant à des projets concrets et orientés produit.
          </p>
          <p className={styles.text}>
            Actuellement en Mastère Lead Développeur Full Stack à l’IIM Digital School, j’adopte une approche centrée sur la résolution de problèmes, la rigueur dans le code, la collaboration en équipe et l’apprentissage continu. J'accorde une importance particulière à la qualité du produit fini et à l'impact qu'il peut avoir pour ses utilisateurs.
          </p>
          <p className={styles.text}>
            En dehors du développement, je suis passionné de musculation, de volleyball, de jeux vidéo, de voyage et de cinéma. Ces activités me permettent d’équilibrer ma vie personnelle et professionnelle, en cultivant à la fois l’endurance, l’esprit d’équipe, la curiosité et la créativité.
          </p>
          <p className={styles.cvLink}>
            <a href="/CV-Samad_ABDUL-Alternance_Développeur_full_stack.pdf" target="_blank" rel="noopener noreferrer">
              📄 Télécharger mon CV
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
