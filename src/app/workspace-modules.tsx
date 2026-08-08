import React from 'react';
import { MessageSquare, Video, Bot, Lock, Newspaper, ClipboardList, CalendarDays, GraduationCap, Vote, PieChart, UserCheck } from 'lucide-react';

const WORKSPACES = {
  chat: { title: 'Enterprise Messenger & Chat', Icon: MessageSquare },
  calls: { title: 'Voice & Video Calling', Icon: Video },
  ai: { title: 'Interactive AI Assistant', Icon: Bot },
  documents: { title: 'Document Vault & Library', Icon: Lock },
  feed: { title: 'News Feed & Social Network', Icon: Newspaper },
  tasks: { title: 'Tasks & Workflows', Icon: ClipboardList },
  events: { title: 'Events Calendar', Icon: CalendarDays },
  learning: { title: 'E-Learning & Training', Icon: GraduationCap },
  polls: { title: 'Polls & Surveys', Icon: Vote },
  reports: { title: 'Reports & Analytics', Icon: PieChart },
  verification: { title: 'Member Verification', Icon: UserCheck },
} as const;

type Route = keyof typeof WORKSPACES;

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>;
}

function WorkspacePage({ route }: { route: Route }) {
  const { title, Icon } = WORKSPACES[route];
  return <div className="space-y-5">
    <div className="flex items-start justify-between">
      <div>
        <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2"><a href="#/dashboard" className="hover:text-sky-600">Dashboard</a><span>›</span><span>{title}</span></div>
        <h2 className="text-2xl font-black text-slate-900">Member Dashboard</h2>
        <p className="text-[11px] text-slate-500 mt-1">Dashboard › {title}</p>
      </div>
      <a href="#/dashboard" className="px-4 py-2 rounded-xl border border-slate-200 text-[11px] font-bold text-slate-700 bg-white">Back</a>
    </div>
    <div className="grid lg:grid-cols-3 gap-5">
      <Card className="lg:col-span-2 p-5">
        <div className="flex items-center gap-3 mb-5"><div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center"><Icon className="w-5 h-5" /></div><div><h3 className="font-black text-sm text-slate-900">{title} Workspace</h3><p className="text-[10px] text-slate-500 mt-1">Connected to the verified private network.</p></div></div>
        <div className="grid sm:grid-cols-2 gap-4">
          {['Overview','Recent Activity','Quick Actions','Workspace'].map(x=><Card key={x} className="p-5 border-slate-200 shadow-none"><b className="text-xs text-slate-900">{x}</b><p className="text-[10px] text-slate-400 mt-2">Live workspace ready for authorized members.</p></Card>)}
        </div>
      </Card>
      <Card className="p-5 h-fit"><h3 className="font-black text-sm text-slate-900">Module Status</h3><div className="mt-2 inline-flex px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-bold">● ONLINE</div><p className="text-[10px] text-slate-500 mt-3">Access controlled for verified members.</p></Card>
    </div>
    <p className="text-center text-[9px] text-slate-400">Political Private Network © 2026. All Rights Reserved. • 30/30 Modules Integrated</p>
  </div>;
}

export function WorkspaceRouter({ route }: { route: string }) { if (!(route in WORKSPACES)) return null; return <WorkspacePage route={route as Route} />; }
export { WORKSPACES };
