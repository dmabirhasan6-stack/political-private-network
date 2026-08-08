import React, { useEffect, useState } from 'react';
import { Shield, Users, Lock, Bot, Video, Newspaper, ArrowRight, CheckCircle2, LayoutDashboard, MessageSquare, Phone, FolderLock, Home, ChevronRight, Bell, CalendarDays, Search, Settings, LogOut, UserRound, BarChart3, Megaphone, FileText, Menu, X } from 'lucide-react';

type IconType = React.ElementType;

const modules = [
  { title: 'Member Directory & Org Tree', desc: 'Explore the organizational hierarchy from Division to Ward.', href: '#/directory', icon: Users },
  { title: 'Enterprise Messenger & Chat', desc: 'Private chats, groups, notices and voice messages.', href: '#/chat', icon: MessageSquare },
  { title: 'Voice & Video Calling', desc: 'Secure meetings, video calls and conference rooms.', href: '#/calls', icon: Video },
  { title: 'Interactive AI Assistant', desc: 'Draft notices, speeches and get organizational assistance.', href: '#/ai', icon: Bot },
  { title: 'Document Vault & Library', desc: 'Circulars, policies, constitution and important files.', href: '#/documents', icon: Lock },
  { title: 'News Feed & Social Network', desc: 'Announcements, reactions, polls and organizational stories.', href: '#/feed', icon: Newspaper },
];

const routeInfo: Record<string, { title: string; desc: string; icon: IconType }> = {
  registration: { title: '7-Step Registration', desc: 'Secure member onboarding and verification workflow.', icon: CheckCircle2 },
  directory: { title: 'Member Directory & Org Tree', desc: 'Browse divisions, districts, upazilas, unions and wards.', icon: Users },
  chat: { title: 'Enterprise Messenger & Chat', desc: 'Private messaging, groups, broadcast notices and voice notes.', icon: MessageSquare },
  calls: { title: 'Voice & Video Calling Suite', desc: 'Secure meetings, conference rooms and video communication.', icon: Phone },
  ai: { title: 'Interactive AI Assistant', desc: 'AI-assisted drafting, Q&A and organizational knowledge tools.', icon: Bot },
  documents: { title: 'Document Vault & Library', desc: 'Central repository for circulars, policies and documents.', icon: FolderLock },
  feed: { title: 'News Feed & Social Network', desc: 'Official updates, reactions, polls and stories.', icon: Newspaper },
};

function HomePage() {
  return <div className="space-y-12 py-4">
    <section className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-950 p-8 sm:p-12 text-white overflow-hidden border border-sky-500/30 shadow-2xl">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="max-w-3xl relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider"><Shield className="w-3.5 h-3.5" /> Next-Gen Enterprise Security</div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">Political Private Network <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">Platform</span></h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">Secure organizational infrastructure for communication, member management, meetings, documents and AI-assisted administration.</p>
        <div className="flex flex-wrap gap-4"><a href="#/registration" className="px-6 py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 font-bold text-xs shadow-xl transition flex items-center gap-2">Start 7-Step Registration <ArrowRight className="w-4 h-4" /></a><a href="#/dashboard" className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 font-bold text-xs transition">Access Member Dashboard</a></div>
      </div>
    </section>
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4">{[
      ['Active Members','125,840+',Users],['Divisions Covered','8 Divisions',Shield],['Secure Meetings','18,400+',Video],['AI Directives','95,000+',Bot]
    ].map(([label,val,Icon],i)=>{const I=Icon as IconType; return <div key={i} className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg text-center"><I className="w-6 h-6 mx-auto text-sky-500 mb-2"/><p className="text-2xl font-black text-slate-900 dark:text-white">{val as string}</p><p className="text-xs text-slate-500 dark:text-slate-400">{label as string}</p></div>})}</section>
    <section className="space-y-6"><h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center">Enterprise Core Modules</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6">{modules.map(m=>{const I=m.icon;return <a key={m.href} href={m.href} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-sky-500/50 hover:shadow-2xl transition group space-y-3"><div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center group-hover:scale-110 transition"><I className="w-5 h-5"/></div><h3 className="font-bold text-slate-900 dark:text-white group-hover:text-sky-500">{m.title}</h3><p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{m.desc}</p></a>})}</div></section>
  </div>;
}

function Dashboard() {
  const [mobile, setMobile] = useState(false);
  const nav = [
    ['Dashboard','dashboard',LayoutDashboard],['Member Directory','directory',Users],['Messages & Chat','chat',MessageSquare],['Calls & Meetings','calls',Video],['AI Assistant','ai',Bot],['Documents','documents',FolderLock],['News Feed','feed',Newspaper]
  ] as [string,string,IconType][];
  return <div className="min-h-[70vh] rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 overflow-hidden shadow-xl">
    <div className="flex min-h-[70vh]">
      {mobile && <div className="fixed inset-0 bg-black/50 z-30" onClick={()=>setMobile(false)}/>} 
      <aside className={`${mobile?'translate-x-0':'-translate-x-full'} md:translate-x-0 fixed md:relative z-40 md:z-auto w-72 md:w-64 h-full min-h-[70vh] bg-slate-950 text-white p-5 transition-transform`}>
        <div className="flex items-center justify-between mb-8"><div className="flex items-center gap-2 font-black"><Shield className="text-sky-400"/> Private Network</div><button className="md:hidden" onClick={()=>setMobile(false)}><X/></button></div>
        <nav className="space-y-1">{nav.map(([label,route,I])=><a key={route} href={`#/dashboard${route==='dashboard'?'':`/${route}`}`} onClick={()=>setMobile(false)} className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-slate-300 hover:bg-sky-500/15 hover:text-white"><I className="w-4 h-4"/>{label}</a>)}</nav>
        <div className="mt-8 pt-5 border-t border-white/10 space-y-1"><a href="#/registration" className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-slate-300 hover:bg-white/10"><UserRound className="w-4 h-4"/>Registration</a><a href="#" className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-slate-300 hover:bg-white/10"><Settings className="w-4 h-4"/>Settings</a><a href="#" className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-slate-300 hover:bg-white/10"><LogOut className="w-4 h-4"/>Sign Out</a></div>
      </aside>
      <main className="flex-1 min-w-0 p-5 sm:p-8">
        <div className="flex items-center justify-between gap-4 mb-8"><div className="flex items-center gap-3"><button className="md:hidden p-2 rounded-lg bg-white dark:bg-slate-900 border" onClick={()=>setMobile(true)}><Menu className="w-5 h-5"/></button><div><p className="text-xs text-slate-500">Secure Workspace</p><h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Member Dashboard</h1></div></div><div className="flex gap-2"><button className="p-2 rounded-xl bg-white dark:bg-slate-900 border"><Search className="w-4 h-4"/></button><button className="p-2 rounded-xl bg-white dark:bg-slate-900 border"><Bell className="w-4 h-4"/></button></div></div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">{[['Members','125,840+',Users],['Meetings','18,400+',Video],['Documents','4,280',FileText],['Announcements','1,245',Megaphone]].map(([l,v,I],i)=>{const C=I as IconType;return <div key={i} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"><C className="w-5 h-5 text-sky-500 mb-3"/><p className="text-xl font-black text-slate-900 dark:text-white">{v as string}</p><p className="text-xs text-slate-500">{l as string}</p></div>})}</div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6"><div className="xl:col-span-2 space-y-6"><div className="flex items-center justify-between"><h2 className="font-bold text-lg text-slate-900 dark:text-white">Quick Access</h2><a href="#" className="text-xs text-sky-500">View all</a></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{modules.map(m=>{const I=m.icon;return <a key={m.href} href={m.href} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 transition"><div className="flex items-start gap-4"><div className="p-3 rounded-xl bg-sky-500/10 text-sky-500"><I className="w-5 h-5"/></div><div><h3 className="font-bold text-sm text-slate-900 dark:text-white">{m.title}</h3><p className="text-xs text-slate-500 mt-1">{m.desc}</p></div></div></a>})}</div></div><div className="space-y-6"><div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"><div className="flex items-center gap-2 mb-5"><CalendarDays className="w-5 h-5 text-sky-500"/><h2 className="font-bold">Upcoming Meetings</h2></div>{['Central Committee Briefing','District Coordination Meeting','Digital Security Training'].map((x,i)=><div key={x} className="py-3 border-b last:border-0 text-sm"><p className="font-semibold">{x}</p><p className="text-xs text-slate-500 mt-1">{i+1} upcoming session • Secure room</p></div>)}</div><div className="p-6 rounded-2xl bg-gradient-to-br from-sky-600 to-indigo-700 text-white"><BarChart3 className="w-6 h-6 mb-3"/><h2 className="font-bold">Network Overview</h2><p className="text-xs text-sky-100 mt-2">Monitor organizational activity, communications and secure resources from one workspace.</p></div></div></div>
      </main>
    </div>
  </div>;
}

function ModulePage({ route }: { route: string }) {
  const info = routeInfo[route]; const I=info.icon;
  return <div className="space-y-6 py-4"><div className="flex items-center gap-2 text-sm text-slate-500"><a href="#">Home</a><ChevronRight className="w-4 h-4"/><span>{info.title}</span></div><section className="rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-950 p-8 sm:p-12 text-white border border-sky-500/30 shadow-2xl"><div className="w-14 h-14 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-5"><I className="w-7 h-7"/></div><h1 className="text-3xl sm:text-4xl font-black">{info.title}</h1><p className="mt-3 text-slate-300 max-w-2xl">{info.desc}</p></section><div className="p-6 rounded-2xl border bg-white dark:bg-slate-900"><h2 className="font-bold">Workspace</h2><p className="text-sm text-slate-500 mt-2">This module is connected to the private network interface. Feature-level implementation can be added here without changing the deployment system.</p></div><a href="#/dashboard" className="inline-flex px-5 py-3 rounded-xl bg-sky-600 text-white font-bold text-sm items-center gap-2"><LayoutDashboard className="w-4 h-4"/> Back to Dashboard</a></div>;
}

export default function HomePageRouter() {
  const [route,setRoute]=useState(window.location.hash.replace(/^#\/?/,'')||'home');
  useEffect(()=>{const f=()=>setRoute(window.location.hash.replace(/^#\/?/,'')||'home');window.addEventListener('hashchange',f);return()=>window.removeEventListener('hashchange',f)},[]);
  if(route==='home') return <HomePage/>;
  if(route==='dashboard') return <Dashboard/>;
  if(route.startsWith('dashboard/')) { const sub=route.split('/')[1]; return routeInfo[sub]?<ModulePage route={sub}/>:<Dashboard/>; }
  return routeInfo[route]?<ModulePage route={route}/>:<Dashboard/>;
}
