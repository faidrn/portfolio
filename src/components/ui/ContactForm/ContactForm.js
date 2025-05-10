import React from "react";
import { useState } from "react";
import './ContactForm.css';


function ContactForm (){
    const [status, setStatus]  = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        
        const form = e.target;
        const formData = new FormData(form);
        
        try {
          const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          });
          
          if (response.ok) {
            setStatus('Thank you! I’ll respond shortly.');
            form.reset();
          } else {
            throw new Error('Submission failed');
          }
        } catch (error) {
          setStatus('Oops! Something went wrong. Please try again.');
        }
    };

    return (
        <form
            action={"https://formsubmit.co/fredy_izquierdo@hotmail.es"}
            method="POST"
            onSubmit={handleSubmit}
            className="contact-form"
        >
            <input type="hidden" name="_captcha" value={"false"} />
            <input type="hidden" name="_subject" value={"Nuevo mensaje desde mi portfolio web"} />

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
            </div>
            
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
            </div>
            
            <button type="submit">Send menssage</button>
            {status && <p className="form-status">{status}</p>}
        </form>
    );
}

export { ContactForm };