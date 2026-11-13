// GitHub Pages has no server-side routing, so a direct visit to
// /projects/something would 404. Pages serves 404.html for unknown paths,
// so we make it a copy of index.html and let React Router take over.
import { copyFileSync } from 'node:fs';

copyFileSync('dist/index.html', 'dist/404.html');
console.log('copied dist/index.html -> dist/404.html');
