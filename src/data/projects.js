// Every project on the site comes from this list.
//
// To add one: copy an entry, give it a unique slug (it becomes the URL,
// /projects/<slug>), and fill in what you have. Optional fields can be left
// out and the page just skips them. Screenshots go in public/projects/.
//
//   area     one of the keys in AREAS below
//   status   'shipped' | 'in progress' | 'archived'
//   featured shows it on the home page
//   repo     GitHub URL
//   demo     live demo URL
//   image    path under public/, e.g. '/projects/whiteboard.png'

export const AREAS = {
  systems: 'Systems',
  web: 'Web',
  ml: 'Machine learning',
  embedded: 'Embedded',
  other: 'Other',
};

export const projects = [
  {
    slug: 'aero-design-team',
    title: 'Dalhousie Aero Design Team',
    summary:
      'Software lead for an RC aircraft built for the SAE Aero Design competition.',
    area: 'embedded',
    status: 'in progress',
    featured: true,
    stack: ['Python', 'C', 'GPS', 'Sensors'],
    overview:
      'I lead the software side of the team. The aircraft has to carry a payload and release it on target, so most of my work is the code that keeps the payload steady in flight and decides when to drop it.',
    highlights: [
      'Payload stabilization loop driven by onboard sensor readings.',
      'Automatic drop logic that combines GPS position with a proximity sensor.',
      'Coordinating the software work with the mechanical and electrical sub-teams.',
    ],
  },
  {
    slug: 'asteroid-hazard-classifier',
    title: 'Asteroid hazard classifier',
    summary:
      "Classifies asteroids as hazardous or not using NASA's Small-Body Database.",
    area: 'ml',
    status: 'shipped',
    featured: true,
    stack: ['Python', 'pandas', 'scikit-learn'],
    overview:
      "A solo project to get comfortable with a real, messy dataset. I pulled orbital data from NASA's Small-Body Database, cleaned it, and trained models to predict whether an object is flagged as potentially hazardous.",
    highlights: [
      'Cleaned and prepared the raw SBDB export for training.',
      'Trained and evaluated classification models on the orbital features.',
      'Best model reached an F1 score of 0.91 on held-out data.',
    ],
  },
  {
    slug: 'marketplace',
    title: 'Marketplace platform',
    summary:
      'Full-stack marketplace with role-based access, 2FA, rate limiting and audit logs.',
    area: 'web',
    status: 'shipped',
    featured: true,
    stack: ['React', 'Django REST', 'PostgreSQL'],
    overview:
      'A buy-and-sell marketplace where most of the effort went into the parts that usually get skipped: who is allowed to do what, how accounts are protected, and keeping a record of what happened.',
    highlights: [
      'Role-based access control, with separate permissions per role.',
      'TOTP two-factor authentication.',
      'IP-based rate limiting on sensitive endpoints.',
      'Append-only audit log and a moderation workflow for listings.',
    ],
  },
  {
    slug: 'banking-model',
    title: 'Banking model',
    summary:
      'A small banking system for accounts, deposits, withdrawals and PIN changes.',
    area: 'other',
    status: 'archived',
    stack: ['Java', 'SQL'],
    overview:
      'One of my first larger programs. It models customers and accounts with plain object-oriented Java and stores everything in a SQL database.',
    highlights: [
      'Deposits, withdrawals and PIN changes with input validation.',
      'Class design built around accounts, customers and transactions.',
    ],
  },
];

export function findProject(slug) {
  return projects.find((p) => p.slug === slug);
}
