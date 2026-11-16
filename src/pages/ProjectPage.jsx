import { Link, useParams } from 'react-router-dom';
import { AREAS, findProject, projects } from '../data/projects.js';
import useTitle from '../hooks/useTitle.js';
import NotFound from './NotFound.jsx';

export default function ProjectPage() {
  const { slug } = useParams();
  const project = findProject(slug);

  useTitle(project && `${project.title} · Om Patel`);

  if (!project) return <NotFound />;

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="wrap section section--first project">
      <Link to="/projects" className="back-link">← All projects</Link>

      <header className="project__head">
        <p className="eyebrow">{AREAS[project.area] ?? project.area}</p>
        <h1 className="page-title">{project.title}</h1>
        <p className="page-intro">{project.summary}</p>

        {(project.repo || project.demo) && (
          <div className="hero__actions">
            {project.demo && (
              <a className="button" href={project.demo} target="_blank" rel="noreferrer">
                Live demo
              </a>
            )}
            {project.repo && (
              <a className="button button--quiet" href={project.repo} target="_blank" rel="noreferrer">
                Source on GitHub
              </a>
            )}
          </div>
        )}
      </header>

      <dl className="facts">
        <div>
          <dt>Status</dt>
          <dd>
            <span className={`status status--${project.status.replace(' ', '-')}`}>
              {project.status}
            </span>
          </dd>
        </div>
        {project.year && (
          <div>
            <dt>Year</dt>
            <dd>{project.year}</dd>
          </div>
        )}
        {project.stack && (
          <div>
            <dt>Built with</dt>
            <dd>{project.stack.join(', ')}</dd>
          </div>
        )}
        {!project.repo && (
          <div>
            <dt>Code</dt>
            <dd className="muted">Not public</dd>
          </div>
        )}
      </dl>

      {project.image && (
        <figure className="project__figure">
          <img src={project.image} alt={`Screenshot of ${project.title}`} />
        </figure>
      )}

      <div className="prose">
        {project.overview && (
          <>
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </>
        )}
        {project.highlights?.length > 0 && (
          <>
            <h2>What I worked on</h2>
            <ul className="bullets">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </>
        )}
        {project.learned && (
          <>
            <h2>What I learned</h2>
            <p>{project.learned}</p>
          </>
        )}
      </div>

      {next !== project && (
        <Link to={`/projects/${next.slug}`} className="next-project">
          <span className="eyebrow">Next project</span>
          <span className="next-project__title">{next.title} →</span>
        </Link>
      )}
    </article>
  );
}
