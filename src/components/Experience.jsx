import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Experience.css';

const experiences = [
  {
    role: "Junior Software Developer (Co-op)",
    company: "Mobia Innovations",
    date: "May 2026 - Aug 2026",
    details: [
      "Architected and deployed enterprise-grade full-stack web applications for a tier-1 aerospace client, systematically eliminating critical vulnerabilities across commercial and military aviation platforms.",
      "Engineered highly scalable backend and frontend solutions leveraging Node.js, Angular, and React, drastically enhancing application stability and user retention.",
      "Pioneered robust containerization strategies using Docker, streamlining CI/CD pipelines and deployment workflows.",
      "Designed and implemented sophisticated, isolated local API environments, optimizing the developer experience and ensuring rapid, reliable testing."
    ]
  },
  {
    role: "Software Developer Intern",
    company: "MountTech Solution Private Limited",
    date: "May 2025 - April 2026",
    details: [
      "Spearheaded the technical translation of complex client requirements into comprehensive software architectures, directly accelerating project delivery timelines.",
      "Engineered and maintained robust software solutions, proactively resolving critical bugs and optimizing system performance.",
      "Consulted closely with key stakeholders and enterprise clients to define ideal project scopes and drive product vision.",
      "Operated within a fast-paced Agile environment, utilizing advanced DBMS techniques to ensure seamless data integrity and access."
    ]
  },
  {
    role: "Customer Service Manager",
    company: "Walmart Canada",
    date: "April 2023 - Present",
    details: [
      "Directed operations and performance management for a cross-functional team of 75+ associates, optimizing daily workflows and operational efficiency.",
      "Served as a strategic bridge between executive management and frontline staff, ensuring seamless execution of corporate directives.",
      "Resolved complex customer escalations through analytical problem-solving, maintaining exceptionally high satisfaction and retention rates.",
      "Cultivated a high-performance team culture through decisive leadership, proactive communication, and continuous mentorship."
    ]
  }
];

const Experience = () => {
  const revealRef1 = useReveal();

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title reveal" ref={revealRef1}>
          Professional <span>Experience</span>
        </h2>

        <div className="timeline">
          {experiences.map((exp, index) => {
            const ref = useReveal();
            return (
              <div key={index} className="timeline-item reveal" ref={ref}>
                <div className="timeline-dot"></div>
                <div className="timeline-date">{exp.date}</div>
                <div className="timeline-content card">
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <ul>
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
