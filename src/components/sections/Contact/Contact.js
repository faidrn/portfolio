import React from "react";
import { FiMail, FiCode } from 'react-icons/fi'; // React Icons
import { ContactForm } from '../../ui/ContactForm/ContactForm';
import './Contact.css';


function Contact(){
    return (
        <section className="contact-section">
            {/* <div className="contact-image">
                <FiCode size={120} className="code-icon" /> 
                <FiMail size={80} className="mail-icon" />
            </div> */}
            <div className="about-container">
                <h2 className="contact-title">Get in touch!</h2>
                
                <div className="about-grid">
                    {/* Columna izquierda - Foto */}
                    <div className="image-container">
                        <img className="contact-image" src="/assets\images\contact-img.png" alt="Contact" />
                    </div>

                    {/* Columna derecha - Información */}
                    <div className="contact-content">
                        <p className="contact-info">Always available for freelancing if the right project
                            comes along, Feel free to contact me.</p>
                        
                        <div className="contact-form">
                            <ContactForm /> {/* Componente reutilizable */}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export { Contact };