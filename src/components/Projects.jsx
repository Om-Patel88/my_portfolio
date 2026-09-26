import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { Plane, Satellite, Landmark } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    title: "Dalhousie Aero Space Design Team",
    icon: <Plane size={24} className="project-icon" />,
    description: "Executive member and Software Lead for an RC aircraft competing in the SAE International Aero Design competition.",
    details: "Designed systems for auto-payload stabilization, auto-drop using proximity sensors & GPS, and stabilization algorithms.",
    tags: ["Python", "C", "Embedded Systems", "GPS", "Leadership"]
  },
  {
    title: "AI Space Data Analysis",
    icon: <Satellite size={24} className="project-icon" />,
    description: "Solo project using NASA's Small Body Database (SBDB) to build and train machine learning models.",
    details: "Created a classification model to classify asteroids as 'Hazardous' or 'Not Hazardous', achieving an F-1 score of 0.91.",
    tags: ["Python", "Machine Learning", "Pandas", "Data Analysis"]
  },
  {
    title: "OOP Banking Model",
    icon: <Landmark size={24} className="project-icon" />,
    description: "A small-scale replica of banking software to handle customer transactions and information management.",
    details: "Features include depositing, withdrawing, and changing PIN, built using OOP principles and a DBMS.",
    tags: ["Java", "SQL", "OOP", "DBMS"]
  }
];

const Projects = () => {
  const revealRef1 = useReveal();

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title reveal" ref={revealRef1}>
          What I've <span>Built</span>
        </h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => {
            const ref = useReveal();
            return (
              <div key={index} className="card project-card reveal" ref={ref} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="project-header">
                  {project.icon}
                  <h3>{project.title}</h3>
                </div>
                <div className="project-body">
                  <p className="project-desc">{project.description}</p>
                  <p className="project-details">{project.details}</p>
                </div>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
