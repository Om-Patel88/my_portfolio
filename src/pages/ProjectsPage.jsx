import { useSearchParams } from 'react-router-dom';
import ProjectList from '../components/ProjectList.jsx';
import { AREAS, projects } from '../data/projects.js';

export default function ProjectsPage() {
  // Keep the filter in the URL so a filtered list can be linked to directly.
  const [params, setParams] = useSearchParams();
  const area = params.get('area') ?? 'all';

  const areasInUse = Object.keys(AREAS).filter((key) =>
    projects.some((p) => p.area === key),
  );
  const visible = area === 'all' ? projects : projects.filter((p) => p.area === area);

  function pick(key) {
    setParams(key === 'all' ? {} : { area: key }, { replace: true });
  }

  return (
    <section className="wrap section section--first">
      <p className="eyebrow">Projects</p>
      <h1 className="page-title">Everything I've built</h1>
      <p className="page-intro">
        School work, side projects and team builds. Each one has its own page
        with how it works, and a link to the code where it's public.
      </p>

      <div className="filters" role="group" aria-label="Filter by area">
        {['all', ...areasInUse].map((key) => (
          <button
            key={key}
            type="button"
            className="chip"
            aria-pressed={area === key}
            onClick={() => pick(key)}
          >
            {key === 'all' ? 'All' : AREAS[key]}
            <span className="chip__count">
              {key === 'all' ? projects.length : projects.filter((p) => p.area === key).length}
            </span>
          </button>
        ))}
      </div>

      <ProjectList items={visible} showStack />
    </section>
  );
}
