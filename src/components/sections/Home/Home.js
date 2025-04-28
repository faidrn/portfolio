import React from "react";
import './Home.css';


function Home (){
    // Datos del perfil
  const profile = {
    name: "Fredy Izquierdo",
    title: "Systems Engineer",
    specialization: "Frontend Developer",
    focus: "Specialized in React.js",
    experience: "5+ years developing web applications",
    education: "Systems Engineering - Universidad Internacioal del Trópico Americano (Colombia)",
    skills: [
      "React.js", "JavaScript (ES6+)", "HTML5/CSS3", 
      "TypeScript", "Styled Components", 
      "Git", "Responsive Design"
    ],
    passions: [
      "Create intuitive and accessible interfaces",
      "Frontend performance optimization",
      "Reusable components",
      "UI/UX Design"
    ]
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">Hello, I'm</h2>
        
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
                {profile.focus} with {profile.experience}. Graduated in {profile.education}.
              </p>
              <p>
                Passionate about creating efficient, scalable web solutions with excellent user experience.
              </p>
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
              <h4>What I'm passionate about:</h4>
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
}

export { Home };