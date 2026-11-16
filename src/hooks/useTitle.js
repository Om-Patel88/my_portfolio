import { useEffect } from 'react';

export const DEFAULT_TITLE = 'Om Patel · Software Developer';

// Sets the tab title while the page is mounted and puts the default back when
// it unmounts. The titles in scripts/static-pages.js should match these.
export default function useTitle(title) {
  useEffect(() => {
    if (title) document.title = title;
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title]);
}
