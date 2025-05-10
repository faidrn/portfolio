import React from "react";
import { FiMail, FiCode } from 'react-icons/fi'; // React Icons
import { ContactForm } from '../../ui/ContactForm/ContactForm';
import './Contact.css';


function Contact(){
    return (
        <section className="contact-container">
            <div className="contact-image">
                <FiCode size={120} className="code-icon" /> 
                <FiMail size={80} className="mail-icon" />
            </div>
            <h2 className="contact-title">Get in touch!</h2>
            <p>Always available for freelancing if the right project
            comes along, Feel free to contact me.</p>
            <ContactForm /> {/* Tu componente reutilizable */}
        </section>
    );
}

export { Contact };