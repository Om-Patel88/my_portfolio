import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.jsx';
import { links } from '../data/profile.js';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Link to="/" className="wordmark">
          Om Patel
        </Link>
        <nav className="site-nav" aria-label="Main">
          <NavLink to="/projects">Projects</NavLink>
          <Link to="/#experience">Experience</Link>
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
