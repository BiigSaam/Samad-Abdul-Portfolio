import styles from './Projects.module.css'

type Project = {
  name: string;
  image: string;
  link: string;
  description: string;
  tags?: string[];
}

const projectList: Project[] = [
  {
    name: "Machine Learning MNIST",
    image: "/images/mnist.png",
    link: "https://mnist-web-three.vercel.app/",
    description: "Un modèle de reconnaissance de chiffres écrit à la main, intégré dans une app React avec un canvas interactif.",
    tags: ["React", "ML", "Canvas"]
  },
  {
    name: "Laylow Green Pill",
    image: "/images/green_pill_laylow.png",
    link: "https://laylow-creative-album.netlify.app/",
    description: "Site créatif inspiré de l’univers de Laylow, combinant animations, son et UI immersive pour son prochain album.",
    tags: ["Next.js", "IA Générative", "Animations"]
  },
  {
    name: "Bienvenue Real Estate",
    image: "/images/bienvenue-realestate.png",
    link: "https://www.bienvenue-realestate.com/fr",
    description: "Site web  à titre informative pour une agence immobilière situé à Dubaï.",
    tags: ["Odoo", "SEO", "Responsive Design"]
  },
  {
    name: "Anime Database",
    image: "/images/anime_database.png",
    link: "https://anime-database-application.netlify.app/",
    description: "Application de base de données d'animes, permettant de rechercher et de filtrer des animes par genre et popularité.",
    tags: ["React", "API Kitsu", "UI/UX"]
  },
  {
    name: "Pokedex from Pokemon",
    image: "/images/pokedex.png",
    link: "https://biigsaam.github.io/Pokedex-From-Pokemon/",
    description: "Pokedex interactif utilisant l'API de Pokémon pour afficher des informations sur les Pokémon.",
    tags: ["JavaScript", "API Pokémon", "CSS Animations"]
  },
  {
    name: "Portfolio 2023",
    image: "/images/portfolio.png",
    link: "https://samad-abdul.infinityfreeapp.com/",
    description: "Mon portfolio fictif, présentant mes projets et compétences en développement web.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
  }
]

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
    <div className={styles.container}>
      <h2 className={styles.title}>
        Projets
        <span className={styles.underline}></span>
      </h2>
      <div className={styles.grid}>
        {projectList.map((project) => (
          <a
            className={styles.card}
            href={project.link}
            target="_blank"
            rel="noopener"
            key={project.name}
          >
            <img src={project.image} alt={project.name} className={styles.image}/>
            <div className={styles.content}>
              <div className={styles.name}>{project.name}</div>
              <div className={styles.tags}>
                {project.tags && project.tags.map(tag =>
                  <span className={styles.tag} key={tag}>{tag}</span>
                )}
              </div>
              <div className={styles.description}>{project.description}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Projects;