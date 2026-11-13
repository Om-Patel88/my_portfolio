import { Link } from 'react-router-dom';
import { AREAS } from '../data/projects.js';

// Numbered index of projects. Each row links to the project's own page.
export default function ProjectList({ items, showStack = false }) {
  if (items.length === 0) {
    return <p className="muted">Nothing here yet.</p>;
  }

  return (
    <ol className="project-list">
      {items.map((project, i) => (
        <li key={project.slug}>
          <Link to={`/projects/${project.slug}`} className="project-row">
            <span className="project-row__num">{String(i + 1).padStart(2, '0')}</span>
            <span className="project-row__main">
              <span className="project-row__title">{project.title}</span>
              <span className="project-row__summary">{project.summary}</span>
              {showStack && project.stack && (
                <span className="project-row__stack">{project.stack.join(' · ')}</span>
              )}
            </span>
            <span className="project-row__area">{AREAS[project.area] ?? project.area}</span>
            <span className={`status status--${project.status.replace(' ', '-')}`}>
              {project.status}
            </span>
            <span className="project-row__arrow" aria-hidden="true">→</span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
