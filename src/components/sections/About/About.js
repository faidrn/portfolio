// src/components/sections/About/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  // Datos del perfil
  const profile = {
    name: "Carlos Martínez",
    title: "Ingeniero de Sistemas",
    specialization: "Desarrollador Frontend",
    focus: "Especializado en React.js",
    experience: "5+ años desarrollando aplicaciones web",
    education: "Ingeniería de Sistemas - Universidad Nacional",
    skills: [
      "React.js", "JavaScript (ES6+)", "HTML5/CSS3", 
      "TypeScript", "Redux", "Styled Components", 
      "Git", "Responsive Design"
    ],
    passions: [
      "Crear interfaces intuitivas y accesibles",
      "Optimización de rendimiento frontend",
      "Componentes reutilizables",
      "UI/UX Design"
    ]
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">Sobre Mí</h2>
        
        <div className="about-grid">
          {/* Columna izquierda - Foto */}
          <div className="about-photo">
            <div className="photo-placeholder"></div>
          </div>

          {/* Columna derecha - Información */}
          <div className="about-content">
            <h3 className="about-name">{profile.name}</h3>
            <p className="about-title">{profile.title} | {profile.specialization}</p>
            
            <div className="about-description">
              <p>
                {profile.focus} con {profile.experience}. Graduado en {profile.education}.
              </p>
              <p>
                Apasionado por crear soluciones web eficientes, escalables y con 
                excelente experiencia de usuario.
              </p>
            </div>

            {/* Habilidades técnicas */}
            <div className="skills-section">
              <h4>Habilidades Técnicas:</h4>
              <ul className="skills-list">
                {profile.skills.map((skill, index) => (
                  <li key={index} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Intereses */}
            <div className="passions-section">
              <h4>Lo que me apasiona:</h4>
              <ul className="passions-list">
                {profile.passions.map((passion, index) => (
                  <li key={index} className="passion-item">
                    {passion}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;