// src/components/sections/About/About.jsx
import React from 'react';
import './About.css';

const About = () => {
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
          {/* Columna izquierda - Foto */}
          <div className="about-photo">
            <div className="photo-placeholder"></div>
          </div>

          {/* Columna derecha - Información */}
          <div className="about-content">
            <h3 className="about-name">{profile.specialization}</h3>
            <p className="about-title">{profile.technology}</p>
            
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