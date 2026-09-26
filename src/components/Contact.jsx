import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const revealRef1 = useReveal();
  const revealRef2 = useReveal();

  return (
    <section id="contact" className="section contact-section">
      <div className="container text-center">
        <h2 className="section-title reveal" ref={revealRef1}>
          Get In <span>Touch</span>
        </h2>
        
        <div className="reveal" ref={revealRef2}>
          <p className="contact-desc">
            My inbox is always open. Whether you have a question, a job opportunity, or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <a href="mailto:Ompatel882004@gmail.com" className="btn btn-primary contact-btn">
            Say Hello
          </a>
          
          <div className="social-links">
            <a href="mailto:Ompatel882004@gmail.com" className="social-link" title="Email">
              <Mail size={24} />
              <span>Email</span>
            </a>
            <a href="https://www.linkedin.com/in/om-patel-33511b241/" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Om-Patel88" target="_blank" rel="noreferrer" className="social-link" title="GitHub">
              <FaGithub size={24} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
