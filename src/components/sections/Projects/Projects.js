import { projects } from '../../../data/projects';
import Button from '../../ui/Button/Button';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.join(' • ')}
            </div>
            <Button 
              text="Ver Demo" 
              onClick={() => window.open(project.demoUrl, '_blank')} 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;