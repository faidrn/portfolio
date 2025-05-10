import { projects } from '../../../data/projects';
import Button from '../../ui/Button/Button';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title-projects">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.join(' • ')}
            </div>
            <div className='buttons-container'>
                <Button 
                text="Repository" 
                className="resume"
                onClick={() => {
                  window.open(project.githubUrl, '_blank', 'noopener, noreferrer')
                }} 
              />
              {/* Oculto el componente Button cuando la variable demoUrl esta vacia */}
              {project.demoUrl && 
                <Button 
                  text="Ver Demo" 
                  className="resume"
                  onClick={() => {
                    window.open(project.demoUrl, '_blank', 'noopener, noreferrer')
                  }} 
                />
              }
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;