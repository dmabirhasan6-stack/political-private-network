import { useEffect, useState } from 'react';

function currentPath() {
  const hash = window.location.hash.replace(/^#/, '') || '/';
  const clean = hash.split('?')[0] || '/';
  return clean === '/dashboard' ? '/dashboard' : clean.startsWith('/dashboard/') ? clean : clean;
}

export function usePathname() {
  const [path, setPath] = useState(currentPath);
  useEffect(() => {
    const update = () => setPath(currentPath());
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  return path;
}
