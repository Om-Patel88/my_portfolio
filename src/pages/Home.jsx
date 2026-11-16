import { Link } from 'react-router-dom';
import ProjectList from '../components/ProjectList.jsx';
import { projects } from '../data/projects.js';
import { education, experience, skills } from '../data/profile.js';
import useTitle, { DEFAULT_TITLE } from '../hooks/useTitle.js';

export default function Home() {
  useTitle(DEFAULT_TITLE);
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <section className="wrap hero">
        <div className="hero__text">
          <p className="eyebrow">Software developer · Halifax, NS</p>
          <h1 className="hero__title">
            I'm Om. I build full-stack web apps, and I like{' '}
            <em>pulling systems apart</em> to see how they work.
          </h1>
          <p className="hero__lede">
            Fourth-year Computer Science student at Dalhousie. I've done two
            internships building full-stack software, and I lead the software
            side of our Aero Design team. This site is where I keep the things
            I've built.
          </p>
          <div className="hero__actions">
            <Link to="/projects" className="button">See all projects</Link>
            <a href="#contact" className="button button--quiet">Get in touch</a>
          </div>
        </div>
        <img className="hero__photo" src="/my_photo.png" alt="Portrait of Om Patel" />
      </section>

      <section className="wrap section">
        <div className="section__head">
          <h2>Selected work</h2>
          <Link to="/projects" className="section__more">
            All {projects.length} projects →
          </Link>
        </div>
        <ProjectList items={featured} />
      </section>

      <section className="wrap section" id="experience">
        <div className="section__head">
          <h2>Experience</h2>
        </div>
        <ul className="timeline">
          {experience.map((job) => (
            <li key={job.company} className="timeline__item">
              <p className="timeline__period">{job.period}</p>
              <div>
                <h3>{job.role}</h3>
                <p className="timeline__company">{job.company}</p>
                <ul className="bullets">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap section split">
        <div>
          <div className="section__head">
            <h2>Education</h2>
          </div>
          <ul className="plain-list">
            {education.map((item) => (
              <li key={item.school}>
                <h3>{item.school}</h3>
                <p className="muted">
                  {item.degree} · {item.period}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="section__head">
            <h2>Tools I use</h2>
          </div>
          <dl className="skills">
            {Object.entries(skills).map(([group, list]) => (
              <div key={group} className="skills__row">
                <dt>{group}</dt>
                <dd>{list.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
