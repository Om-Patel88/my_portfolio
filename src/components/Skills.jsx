import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { MonitorSmartphone, Server, TerminalSquare, BrainCircuit } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const revealRef1 = useReveal();
  
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <MonitorSmartphone size={32} className="skill-icon" />,
      skills: ['React', 'Angular', 'Next.js', 'TypeScript', 'HTML5/CSS3', 'TailwindCSS']
    },
    {
      title: 'Backend',
      icon: <Server size={32} className="skill-icon" />,
      skills: ['Python', 'Java', 'C/C++', 'Node.js', 'Django REST Framework', 'Express.js', 'SQL', 'MongoDB', 'PostgreSQL', 'RESTful APIs']
    },
    {
      title: 'Tools & Cloud',
      icon: <TerminalSquare size={32} className="skill-icon" />,
      skills: ['Docker', 'AWS', 'GitLab CI/CD', 'Linux/Unix', 'VS Code', 'IntelliJ IDEA', 'Jira']
    },
    {
      title: 'Concepts',
      icon: <BrainCircuit size={32} className="skill-icon" />,
      skills: ['Microservices Architecture', 'System Design', 'Agile Methodologies', 'Machine Learning', 'Embedded Systems', 'Test-Driven Development (TDD)']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title reveal" ref={revealRef1}>
          My <span>Toolkit</span>
        </h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const ref = useReveal();
            return (
              <div key={index} className="card skill-card reveal" ref={ref} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="skill-header">
                  {category.icon}
                  <h3>{category.title}</h3>
                </div>
                <div className="skill-tags">
                  {category.skills.map(skill => (
                    <span key={skill} className="skill-badge">{skill}</span>
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

export default Skills;
