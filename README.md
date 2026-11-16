# om-patel.com

My personal site. It lists my projects, my experience and how to reach me.

Built with React and Vite, routed with React Router, and deployed to GitHub
Pages by the workflow in `.github/workflows/deploy.yml` on every push to `main`.

## Running it locally

```bash
npm install
npm run dev       # dev server on http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the build
npm run lint
```

## Layout

```
src/
  data/projects.js   every project shown on the site
  data/profile.js    experience, education, skills, contact links
  pages/             home, project index, single project, 404
  components/        header, footer, project list, theme toggle
scripts/
  static-pages.js    writes an index.html per route after the build
```

Pages has no server-side routing, so a direct visit to `/projects/<slug>`
would normally 404. After the build, `static-pages.js` writes a copy of
`index.html` for every route (`/`, `/projects` and one per project in
`projects.js`), each with its own title, description and Open Graph tags, and
React Router takes over once the page loads. `404.html` is kept for URLs that
don't exist. New projects get their page automatically.

## Adding a project

Each project lives in its own repo (locally in a sibling folder next to this
one). Once it's ready to show:

1. Add an entry to `src/data/projects.js`. The comment at the top of the file
   lists the fields. `slug` becomes the URL and `featured: true` puts it on the
   home page.
2. Optionally drop a screenshot or GIF into `public/projects/` and set
   `image: '/projects/<file>'`.
3. Set `repo` and `demo` if they exist. The project page only shows the
   buttons that have a link.

Push to `main` and it's live a minute or two later.
