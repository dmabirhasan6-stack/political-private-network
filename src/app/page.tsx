import React from 'react';
import FixedDashboard from './fixed-dashboard';
import { WorkspaceRouter } from './workspace-modules';

const WORKSPACE_ROUTES = new Set(['chat','calls','ai','documents','feed','tasks','events','learning','polls','reports','verification']);

export default function HomePage(){
  const hash = typeof window !== 'undefined' ? window.location.hash : '';
  const match = hash.match(/^#\/dashboard\/([^/?#]+)/);
  const route = match?.[1] || '';
  if (WORKSPACE_ROUTES.has(route)) return <WorkspaceRouter route={route} />;
  return <FixedDashboard />;
}
