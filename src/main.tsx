import React, { Suspense, useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './app/globals.css';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import { CallProvider } from './context/CallContext';
import { ShellLayout } from './components/layout/ShellLayout';

// Let Vite discover only the page files that actually exist in the localhost project.
// This avoids hard-coded imports to old/removed routes that can break the production build.
const pageModules = import.meta.glob('./app/**/page.tsx');

function normalizeHash() {
  const raw = window.location.hash.replace(/^#/, '') || '/';
  const clean = raw.split('?')[0] || '/';
  if (clean === '/dashboard') return '/dashboard';
  if (clean.startsWith('/dashboard/')) return clean.slice('/dashboard'.length) || '/dashboard';
  return clean.endsWith('/') && clean !== '/' ? clean.slice(0, -1) : clean;
}

function pageKey(path: string) {
  return path === '/' ? './app/page.tsx' : `./app${path}/page.tsx`;
}

function HashRouterApp() {
  const [path, setPath] = useState(normalizeHash);

  useEffect(() => {
    const onHashChange = () => setPath(normalizeHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const Page = useMemo(() => {
    const key = pageKey(path);
    const loader = pageModules[key] as (() => Promise<{ default: React.ComponentType<any> }>) | undefined;
    return loader ? React.lazy(loader) : null;
  }, [path]);

  const publicRoute = ['/login', '/registration', '/about', '/features', '/contact', '/security'].includes(path);

  const content = Page ? (
    <Suspense fallback={<div className="min-h-[60vh]" />}><Page /></Suspense>
  ) : (
    <div className="p-8 text-sm text-slate-500">Page not found.</div>
  );

  return (
    <ThemeProvider>
      <AuthProvider>
        <ToastProvider>
          <CallProvider>
            {publicRoute ? content : <ShellLayout>{content}</ShellLayout>}
          </CallProvider>
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><HashRouterApp /></React.StrictMode>
);
