// GitHub Pages has no server-side routing. Without a file for each route, a
// direct visit to /projects/something gets 404.html with a 404 status, which
// search engines and link previews treat as a missing page. So after the build
// we write dist/<route>/index.html for every route, each with its own title,
// description and Open Graph tags, and React Router takes over from there.
// 404.html is kept as the fallback for URLs that really don't exist.
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { projects } from '../src/data/projects.js';

const SITE = 'https://www.om-patel.com';
const DEFAULT_TITLE = 'Om Patel · Software Developer';

// Keep in sync with the routes in src/App.jsx. Titles match what the pages set
// at runtime with useTitle, so nothing changes once the app loads.
const pages = [
  {
    path: '/',
    title: DEFAULT_TITLE,
    description:
      'Om Patel, Computer Science student at Dalhousie University. Projects, experience and contact.',
  },
  {
    path: '/projects',
    title: 'Projects · Om Patel',
    description: "Everything I've built: school work, side projects and team builds.",
  },
  ...projects.map((p) => ({
    path: `/projects/${p.slug}`,
    title: `${p.title} · Om Patel`,
    description: p.summary,
    image: p.image,
    type: 'article',
  })),
];

const escape = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const absolute = (url) => (/^https?:\/\//.test(url) ? url : SITE + url);

// Replace the tag matched by `pattern`, or add it at the end of <head>.
function setTag(html, pattern, tag) {
  // Function replacements so a "$" in a summary isn't read as a pattern.
  return pattern.test(html)
    ? html.replace(pattern, () => tag)
    : html.replace('</head>', () => `  ${tag}\n  </head>`);
}

const meta = (attr, key, value) => [
  new RegExp(`<meta ${attr}="${key}"[^>]*>`),
  `<meta ${attr}="${key}" content="${escape(value)}" />`,
];

function render(template, page) {
  // Pages redirects /projects/x to /projects/x/, so that's the canonical form.
  const url = SITE + (page.path === '/' ? '/' : `${page.path}/`);
  const tags = [
    [/<title>[^<]*<\/title>/, `<title>${escape(page.title)}</title>`],
    meta('name', 'description', page.description),
    [/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${escape(url)}" />`],
    meta('property', 'og:title', page.title),
    meta('property', 'og:description', page.description),
    meta('property', 'og:url', url),
    meta('property', 'og:type', page.type ?? 'website'),
    meta('name', 'twitter:card', page.image ? 'summary_large_image' : 'summary'),
  ];
  if (page.image) tags.push(meta('property', 'og:image', absolute(page.image)));

  return tags.reduce((html, [pattern, tag]) => setTag(html, pattern, tag), template);
}

const template = readFileSync('dist/index.html', 'utf8');
copyFileSync('dist/index.html', 'dist/404.html');

for (const page of pages) {
  const dir = `dist${page.path}`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir.replace(/\/$/, '')}/index.html`, render(template, page));
  console.log(`wrote ${dir.replace(/\/$/, '')}/index.html`);
}
