import { links } from '../data/profile.js';

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="wrap site-footer__inner">
        <div>
          <p className="site-footer__lead">Want to talk about a role or a project?</p>
          <a className="site-footer__email" href={`mailto:${links.email}`}>
            {links.email}
          </a>
        </div>
        <ul className="site-footer__links">
          <li>
            <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          </li>
          <li>
            <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
          <li className="muted">Halifax, Nova Scotia</li>
        </ul>
      </div>
    </footer>
  );
}
