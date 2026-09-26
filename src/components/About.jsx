import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './About.css';

const About = () => {
  const revealRef1 = useReveal();
  const revealRef2 = useReveal();

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title reveal" ref={revealRef1}>
          About <span>Me</span>
        </h2>
        
        <div className="about-content reveal" ref={revealRef2}>
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I am a Senior (4th-year) Computer Science student at Dalhousie University, specializing in building high-performance, scalable software architectures. As the Software Lead and Executive Board Member of the SAE International Aerospace Design Team, I engineer mission-critical flight systems and autonomous payload algorithms. I thrive at the intersection of complex problem-solving and full-stack innovation, consistently delivering robust software solutions from concept to deployment.
            </p>
            
            <h3 className="education-title">Education</h3>
            <div className="education-list">
              <div className="education-item">
                <div className="education-dot"></div>
                <h4>Bachelor of Computer Science</h4>
                <p className="school">Dalhousie University, NS</p>
                <p className="date">Sept 2024 - Present</p>
              </div>
              <div className="education-item">
                <div className="education-dot"></div>
                <h4>Bachelor of Computer Science</h4>
                <p className="school">Acadia University, NS</p>
                <p className="date">Jan 2023 - April 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
