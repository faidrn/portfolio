// src/components/sections/About/About.jsx
import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Efecto para detectar cambios en el tamaño de la pantalla
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      // Verificar al montar el componente
      handleResize();
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
  // Datos del perfil
  const profile = {
    specialization: "Frontend Developer", 
    technology: "React.js", 
    description: "Systems Engineer expert in web development, with skills to design, implement and maintain applications and websites, focused on user experience, security, performance and scalability, as well as project management.",
    skills: [
      "React.js", "JavaScript (ES6+)", "HTML5/CSS3", 
      "TypeScript", "Python",  
      "Git", "Responsive Design"
    ],
    language: [
      "Spanish - Native speaker",
      "English - B2",
      "Slovak - A2",
    ]
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">Fredy Izquierdo</h2>
        
        <div className="about-grid">
          {/* Columna izquierda - Foto - Para desktop (siempre visible en pantallas grandes) */}
          {!isMobile && (
            <div className="about-photo">
              <div class="easter-egg">npm install superhero</div>
              <div className="photo-placeholder"></div>
            </div>
          )}

          {/* Columna derecha - Información */}
          <div className="about-content">
            <h3 className="about-name">{profile.specialization}</h3>
            <p className="about-title">{profile.technology}</p>
            
            {/* Foto solo móvil */}
            {isMobile && (
              <div className="about-photo">
                <div class="easter-egg">npm install superhero</div>
                <div className="photo-placeholder"></div>
              </div>
            )}

            <div className="about-description">
              <p>
                {profile.description}
              </p>
              <p></p>
            </div>

            {/* Habilidades técnicas */}
            <div className="skills-section">
              <h4>Technical Skills:</h4>
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
              <h4>Laguage Skills:</h4>
              <ul className="passions-list">
                {profile.language.map((passion, index) => (
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