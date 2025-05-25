import React from "react";
import { useState } from "react";
import './ContactForm.css';
import Button from '../Button/Button';


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
            setStatus("Thank you! I'll respond shortly.");
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

            <div className="form-group form-group--height">
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Name" 
                  className="source-code-pro-font source-code-pro-400 font-size-text width-20 texts" 
                />
            
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Email" 
                  className="source-code-pro-font source-code-pro-400 font-size-text width-20 texts"
                  required 
                />
            </div>

            <div className="form-group">
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="Subject" 
                  className="source-code-pro-font source-code-pro-400 font-size-text texts"
                  required 
                />
            </div>
            
            <div className="form-group">
                {/* <label htmlFor="message">Message</label> */}
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Type your message here" 
                  className="source-code-pro-font source-code-pro-400 font-size-text texts"
                  required
                >
                </textarea>
            </div>
            
            <div className="form-group-btn">
              <Button 
                  text="Send" 
                  className="resume cursor-pointer"
                  onClick={() => {
                    window.open('', '_blank', 'noopener, noreferrer')
                  }} 
                />
            </div>
            {status && <p className="form-status">{status}</p>}
        </form>
    );
}

export { ContactForm };