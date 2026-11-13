import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="wrap section section--first">
      <p className="eyebrow">404</p>
      <h1 className="page-title">That page doesn't exist.</h1>
      <p className="page-intro">
        It may have moved. Try the <Link to="/projects">project list</Link> or
        go back <Link to="/">home</Link>.
      </p>
    </section>
  );
}
