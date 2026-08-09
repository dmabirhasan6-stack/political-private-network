import React, { Suspense, useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './app/globals.css';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import { CallProvider } from './context/CallContext';
import { ShellLayout } from './components/layout/ShellLayout';

const routes: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  '/': React.lazy(() => import('./app/page')),
  '/dashboard': React.lazy(() => import('./app/dashboard/page')),
  '/directory': React.lazy(() => import('./app/directory/page')),
  '/chat': React.lazy(() => import('./app/chat/page')),
  '/calls': React.lazy(() => import('./app/calls/page')),
  '/meetings': React.lazy(() => import('./app/meetings/page')),
  '/ai': React.lazy(() => import('./app/ai/page')),
  '/tasks': React.lazy(() => import('./app/tasks/page')),
  '/events': React.lazy(() => import('./app/events/page')),
  '/training': React.lazy(() => import('./app/training/page')),
  '/polls': React.lazy(() => import('./app/polls/page')),
  '/reports': React.lazy(() => import('./app/reports/page')),
  '/verification': React.lazy(() => import('./app/verification/page')),
  '/identity': React.lazy(() => import('./app/identity/page')),
  '/notifications': React.lazy(() => import('./app/notifications/page')),
  '/support': React.lazy(() => import('./app/support/page')),
  '/media': React.lazy(() => import('./app/media/page')),
  '/security-soc': React.lazy(() => import('./app/security-soc/page')),
  '/organization': React.lazy(() => import('./app/organization/page')),
  '/audit': React.lazy(() => import('./app/audit/page')),
  '/documents': React.lazy(() => import('./app/documents/page')),
  '/launch': React.lazy(() => import('./app/launch/page')),
  '/search': React.lazy(() => import('./app/search/page')),
  '/settings': React.lazy(() => import('./app/settings/page')),
  '/admin': React.lazy(() => import('./app/admin/page')),
  '/developer': React.lazy(() => import('./app/developer/page')),
  '/registration': React.lazy(() => import('./app/registration/page')),
  '/super-admin': React.lazy(() => import('./app/super-admin/page')),
  '/calendar': React.lazy(() => import('./app/calendar/page')),
  '/security': React.lazy(() => import('./app/security/page')),
  '/about': React.lazy(() => import('./app/about/page')),
  '/features': React.lazy(() => import('./app/features/page')),
  '/contact': React.lazy(() => import('./app/contact/page')),
  '/login': React.lazy(() => import('./app/login/page')),
};

function normalizeHash() {
  const raw = window.location.hash.replace(/^#/, '') || '/';
  const clean = raw.split('?')[0] || '/';
  if (clean === '/dashboard') return '/dashboard';
  if (clean.startsWith('/dashboard/')) return clean.slice('/dashboard'.length) || '/dashboard';
  return clean.endsWith('/') && clean !== '/' ? clean.slice(0, -1) : clean;
}

function HashRouterApp() {
  const [path, setPath] = useState(normalizeHash);

  useEffect(() => {
    const onHashChange = () => setPath(normalizeHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const Page = useMemo(() => routes[path] || routes['/'], [path]);
  const publicRoute = ['/login', '/registration', '/about', '/features', '/contact', '/security'].includes(path);

  return (
    <ThemeProvider>
      <AuthProvider>
        <ToastProvider>
          <CallProvider>
            {publicRoute ? (
              <Suspense fallback={<div className="min-h-screen bg-slate-950" />}><Page /></Suspense>
            ) : (
              <ShellLayout>
                <Suspense fallback={<div className="min-h-[60vh]" />}><Page /></Suspense>
              </ShellLayout>
            )}
          </CallProvider>
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><HashRouterApp /></React.StrictMode>
);
