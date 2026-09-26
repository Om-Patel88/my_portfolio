import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const revealRef1 = useReveal();
  const revealRef2 = useReveal();

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 ref={revealRef1} className="reveal">
            Hi, I'm <span>Om Patel</span>
          </h1>
          <h2 ref={revealRef2} className="reveal">
            Enthusiastic Software Developer
          </h2>
          <p className="hero-desc reveal" ref={useReveal()}>
            I am a Senior Computer Science student and Full-Stack Engineer with a proven track record of architecting scalable web applications and mission-critical aerospace software. I specialize in turning complex, high-stakes challenges into elegant, optimized solutions.
          </p>
          <div className="hero-actions reveal" ref={useReveal()}>
            <a href="#projects" className="btn btn-primary">
              View My Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="hero-image-wrapper reveal" ref={useReveal()}>
          <div className="hero-image-glow"></div>
          <img src="/my_photo.png" alt="Om Patel" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
