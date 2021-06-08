// Import modules
import { Fade } from 'react-reveal';

// Import utils
import projectList from './projectList';

// Import styles
import './Projects.css';
import ProjectCard from './ProjectCard';

const Projects = () => (
  <section className="projects-container" id="projects">
    <Fade right>
      <h2 className="projects-title">Projets</h2>
    </Fade>
    <Fade>
      <div className="projects-content">
        {projectList.map((project) => (
          <ProjectCard
            name={project.name}
            description={project.description}
            tools={project.tools}
            image={project.image}
            githubURL={project.githubURL}
            demoURL={project.demoURL}
          />
        ))}
      </div>
    </Fade>
  </section>
);

export default Projects;
