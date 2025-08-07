import styles from './Projects.module.css'

type Project = {
  name: string;
  image: string;
  link: string;
  description: string;
}

const projectList: Project[] = [
  {
    name: "Machine Learning MNIST",
    image: "/images/mnist.png",
    link: "https://mnist-web-three.vercel.app/",
     description: "Un modèle de reconnaissance de chiffres écrit à la main, intégré dans une app React avec un canvas interactif."
  },
  {
    name: "Laylow Green Pill",
    image: "/images/green_pill_laylow.png",
    link: "https://laylow-creative-album.netlify.app/",
    description: "Site créatif inspiré de l’univers de Laylow, combinant animations, son et UI immersive pour son prochain album."
  },
  {
    name: "Bienvenue Real Estate",
    image: "/images/bienvenue-realestate.png",
    link: "https://www.bienvenue-realestate.com/fr",
    description: "Site web  à titre informative pour une agence immobilière situé à Dubaï."
  },
  {
    name: "Anime Database",
    image: "/images/anime_database.png",
    link: "https://anime-database-application.netlify.app/",
    description: "Application de base de données d'animes, permettant de rechercher et de filtrer des animes par genre et popularité."
  },
  {
    name: "Pokedex from Pokemon",
    image: "/images/pokedex.png",
    link: "https://biigsaam.github.io/Pokedex-From-Pokemon/",
    description: "Pokedex interactif utilisant l'API de Pokémon pour afficher des informations sur les Pokémon."

  },
  {
    name: "Portfolio 2023",
    image: "/images/portfolio.png",
    link: "https://samad-abdul.infinityfreeapp.com/",
    description: "Mon portfolio fictif, présentant mes projets et compétences en développement web."
  }
]

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projets</h2>
        <div className={styles.grid}>
          {projectList.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
            <div key={index} className={styles.card}>
              <img src={project.image} alt={project.name} className={styles.image} />
              <div className={styles.content}>
                <h3 className={styles.name}>{project.name}</h3>
                <p className={styles.category}>Développement Web</p>
                <p className={styles.description}>{project.description}</p>
              </div>
            </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;