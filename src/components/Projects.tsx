import styles from './Projects.module.css'

type Project = {
  name: string;
  image: string;
  link: string;
}

const projectList: Project[] = [
  {
    name: "Laylow Green Pill",
    image: "/images/green_pill_laylow.png",
    link: "https://laylow-creative-album.netlify.app/"
  },
  {
    name: "Bienvenue Real Estate",
    image: "/images/bienvenue-realestate.png",
    link: "https://www.bienvenue-realestate.com/fr"
  },
  {
    name: "Anime Database",
    image: "/images/anime_database.png",
    link: "https://anime-database-application.netlify.app/"
  },
  {
    name: "Pokedex from Pokemon",
    image: "/images/pokedex.png",
    link: "https://biigsaam.github.io/Pokedex-From-Pokemon/"
  },
  {
    name: "Portfolio 2023",
    image: "/images/portfolio.png",
    link: "https://samad-abdul.infinityfreeapp.com/"
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