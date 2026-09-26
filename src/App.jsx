import React from 'react';
import './App.css';
import { Briefcase, Code2, GraduationCap, FolderGit2, Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {
  const skills = ['React', 'Next.js', 'Angular', 'TypeScript', 'Node.js', 'Django REST', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'Microservices', 'System Design'];

  const experience = [
    {
      role: "Junior Software Developer (Co-op)",
      company: "Mobia Innovations",
      date: "May 2026 - Aug 2026",
      desc: "Architected and deployed enterprise-grade full-stack web applications for a tier-1 aerospace client. Engineered scalable backend and frontend solutions leveraging Node.js, Angular, and React, drastically enhancing application stability."
    },
    {
      role: "Software Developer Intern",
      company: "MountTech Solution Private Limited",
      date: "May 2025 - April 2026",
      desc: "Spearheaded the technical translation of complex client requirements into comprehensive software architectures. Proactively resolved critical bugs and optimized system performance in an Agile environment."
    },
    {
      role: "Customer Service Manager",
      company: "Walmart Canada",
      date: "April 2023 - Present",
      desc: "Directed operations and performance management for a cross-functional team of 75+ associates. Served as a strategic bridge between executive management and frontline staff."
    }
  ];

  return (
    <div className="bento-grid">
      {/* Profile Card (2x2) */}
      <div className="bento-item profile-card col-span-2 row-span-2">
        <img src="/my_photo.png" alt="Om Patel" className="profile-img" />
        <h1>Hi, I'm Om Patel</h1>
        <h2>Senior Full-Stack Engineer</h2>
        <p className="profile-desc">
          I am a 4th-year Computer Science student at Dalhousie University, specializing in building high-performance, scalable software architectures and mission-critical aerospace software. I turn complex, high-stakes challenges into elegant, optimized solutions.
        </p>
      </div>

      {/* Experience Card (2x2) */}
      <div className="bento-item experience-card col-span-2 row-span-2">
        <h3 className="card-title"><Briefcase size={24} className="card-icon"/> Experience</h3>
        <div className="exp-list">
          {experience.map((exp, i) => (
            <div key={i} className="exp-item">
              <div className="exp-date">{exp.date}</div>
              <div className="exp-title">{exp.role}</div>
              <div className="exp-company">{exp.company}</div>
              <p className="exp-desc">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Card (2x1) */}
      <div className="bento-item col-span-2">
        <h3 className="card-title"><Code2 size={24} className="card-icon"/> Technical Arsenal</h3>
        <div className="skills-container">
          {skills.map(skill => (
            <span key={skill} className="skill-badge">{skill}</span>
          ))}
        </div>
      </div>

      {/* Education Card (2x1) */}
      <div className="bento-item col-span-2">
        <h3 className="card-title"><GraduationCap size={24} className="card-icon"/> Education</h3>
        <div className="edu-item">
          <div className="edu-title">Bachelor of Computer Science</div>
          <div className="edu-school">Dalhousie University, NS</div>
          <div className="edu-date">Sept 2024 - Present</div>
        </div>
        <div className="edu-item">
          <div className="edu-title">Bachelor of Computer Science</div>
          <div className="edu-school">Acadia University, NS</div>
          <div className="edu-date">Jan 2023 - April 2024</div>
        </div>
      </div>

      {/* Project 1 (1x1) */}
      <div className="bento-item project-card">
        <div>
          <FolderGit2 size={32} className="project-icon" />
          <h3>Aero Space Design Team</h3>
          <p>Software Lead engineering mission-critical auto-payload stabilization and drop algorithms for an autonomous RC aircraft.</p>
        </div>
      </div>

      {/* Project 2 (1x1) */}
      <div className="bento-item project-card">
        <div>
          <FolderGit2 size={32} className="project-icon" />
          <h3>AI Space Data Analysis</h3>
          <p>Machine learning classification model built using NASA's Small Body Database, achieving a 0.91 F-1 score.</p>
        </div>
      </div>

      {/* Project 3 (1x1) */}
      <div className="bento-item project-card">
        <div>
          <FolderGit2 size={32} className="project-icon" />
          <h3>Enterprise Marketplace Platform</h3>
          <p>Full-stack e-commerce system with end-to-end API integration. Architected complex RBAC, TOTP 2FA, IP-based rate limiting, immutable audit logging, and secure moderation workflows.</p>
        </div>
      </div>

      {/* Contact / CTA (1x1) */}
      <div className="bento-item contact-card">
        <h3 className="card-title">Let's Connect</h3>
        <p>My inbox is always open for opportunities.</p>
        <div className="contact-links">
          <a href="mailto:Ompatel882004@gmail.com" title="Email"><Mail size={24} /></a>
          <a href="https://www.linkedin.com/in/om-patel-33511b241/" target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedin size={24} /></a>
          <a href="https://github.com/Om-Patel88" target="_blank" rel="noreferrer" title="GitHub"><FaGithub size={24} /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
