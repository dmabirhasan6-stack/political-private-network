import React, { useEffect, useState } from 'react';
import {
  Shield, Users, Lock, Bot, Video, Newspaper, ArrowRight, CheckCircle2,
  LayoutDashboard, MessageSquare, Phone, FolderLock, Home, ChevronRight,
  Bell, CalendarDays, Search, Settings, LogOut, UserRound, BarChart3,
  Megaphone, FileText, Menu, X, ClipboardList, GraduationCap, Vote,
  PieChart, UserCheck, IdCard, Headphones, Database, Globe2, ShieldCheck,
  BookOpen, Clock3, Smartphone, Droplets, CheckCircle, BriefcaseBusiness
} from 'lucide-react';

type IconType = React.ElementType;

const modules = [
  ['Member Directory & Org Tree','Explore the organizational hierarchy from Division to Ward.','directory',Users],
  ['Enterprise Messenger & Chat','Private chats, groups, notices and voice messages.','chat',MessageSquare],
  ['Voice & Video Calling','Secure meetings, video calls and conference rooms.','calls',Video],
  ['Interactive AI Assistant','Draft notices, speeches and get organizational assistance.','ai',Bot],
  ['Document Vault & Library','Circulars, policies, constitution and important files.','documents',Lock],
  ['News Feed & Social Network','Announcements, reactions, polls and organizational stories.','feed',Newspaper],
  ['Profile','Member profile, contact and organizational identity.','profile',UserRound],
  ['Tasks & Workflows','Assignments, approvals and workflow tracking.','tasks',ClipboardList],
  ['Events Calendar','Meetings, events and organizational calendar.','events',CalendarDays],
  ['E-Learning & Training','Training courses, learning resources and progress.','learning',GraduationCap],
  ['Polls & Surveys','Internal polls, surveys and voting.','polls',Vote],
  ['Reports & Analytics','Organizational reports, metrics and analytics.','reports',PieChart],
  ['Member Verification','Secure member verification and approval.','verification',UserCheck],
  ['Digital Member ID','Digital identity card and member credentials.','member-id',IdCard],
  ['Notifications Center','Alerts, notices and important updates.','notifications',Bell],
  ['Help Desk','Support requests and service assistance.','help',Headphones],
  ['Media Asset Center','Organizational media and approved assets.','media',Database],
  ['Security SOC','Security monitoring and access overview.','security',ShieldCheck],
  ['Organization System','Organization structure and administration.','organization',Globe2],
  ['Audit Timeline','Activity and administrative audit history.','audit',Clock3],
  ['Document Library','Centralized reference and policy library.','library',BookOpen],
  ['Launch & Presentation','Presentation and launch workspace.','launch',BriefcaseBusiness],
  ['Global Search','Search members, documents, notices and modules.','search',Search],
  ['Settings','Account and platform settings.','settings',Settings],
  ['Mobile Access','Mobile-ready access and communication.','mobile',Smartphone],
  ['Member Care','Member information and support workspace.','care',Users],
  ['Blood Group Directory','Verified member blood-group information.','blood',Droplets],
  ['Admin Console','Administrative controls and management.','admin',Shield],
  ['API & Developer Hub','Developer and integration workspace.','developer',Database],
  ['Registration Wizard','Secure 7-step member onboarding.','registration',CheckCircle2],
] as [string,string,string,IconType][];

const routeInfo: Record<string,{title:string;desc:string;icon:IconType}> = Object.fromEntries(
  modules.map(([title,desc,route,icon])=>[route,{title,desc,icon}])
);

function HomePage(){
  return <div className="space-y-12 py-4">
    <section className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-950 p-8 sm:p-12 text-white overflow-hidden border border-sky-500/30 shadow-2xl">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"/>
      <div className="max-w-3xl relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider"><Shield className="w-3.5 h-3.5"/> Next-Gen Enterprise Security</div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">Political Private Network <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">Platform</span></h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">Secure organizational infrastructure for communication, member management, meetings, documents and AI-assisted administration.</p>
        <div className="flex flex-wrap gap-4"><a href="#/registration" className="px-6 py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 font-bold text-xs shadow-xl flex items-center gap-2">Start 7-Step Registration <ArrowRight className="w-4 h-4"/></a><a href="#/dashboard" className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 font-bold text-xs">Access Member Dashboard</a></div>
      </div>
    </section>
  </div>;
}

function Dashboard(){
  const [mobile,setMobile]=useState(false);
  const [search,setSearch]=useState('');
  const filtered=modules.filter(([title,desc])=>(title+' '+desc).toLowerCase().includes(search.toLowerCase()));
  return <div className="min-h-[70vh] rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 overflow-hidden shadow-xl">
    <div className="flex min-h-[70vh]">
      {mobile&&<div className="fixed inset-0 bg-black/50 z-30" onClick={()=>setMobile(false)}/>} 
      <aside className={`${mobile?'translate-x-0':'-translate-x-full'} md:translate-x-0 fixed md:relative z-40 w-72 md:w-72 min-h-screen md:min-h-[70vh] bg-slate-950 text-white p-4 transition-transform overflow-y-auto`}>
        <div className="flex items-center justify-between mb-5"><div className="flex items-center gap-2 font-black"><Shield className="text-sky-400"/> Private Network</div><button className="md:hidden" onClick={()=>setMobile(false)}><X/></button></div>
        <div className="mb-5 p-4 rounded-2xl bg-white/5 border border-white/10"><div className="flex items-center gap-3"><div className="w-11 h-11 rounded-full bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center font-black">MD</div><div><p className="font-bold text-sm">Md Hasan M...</p><p className="text-[11px] text-slate-400">Thana President</p></div></div></div>
        <nav className="space-y-1">{modules.map(([label,,route,I])=><a key={route} href={`#/dashboard/${route}`} onClick={()=>setMobile(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs text-slate-300 hover:bg-sky-500/15 hover:text-white"><I className="w-4 h-4 shrink-0"/>{label}</a>)}</nav>
        <div className="mt-5 pt-4 border-t border-white/10"><a href="#/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs text-slate-300 hover:bg-white/10"><Settings className="w-4 h-4"/>Settings</a><a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs text-slate-300 hover:bg-white/10"><LogOut className="w-4 h-4"/>Sign Out</a></div>
      </aside>
      <main className="flex-1 min-w-0 p-4 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6"><div className="flex items-center gap-3"><button className="md:hidden p-2 rounded-lg bg-white dark:bg-slate-900 border" onClick={()=>setMobile(true)}><Menu className="w-5 h-5"/></button><div><p className="text-xs text-slate-500">Secure Workspace</p><h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Member Dashboard</h1></div></div><div className="flex items-center gap-2"><div className="relative"><Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400"/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Type here to search" className="pl-9 pr-3 py-2 rounded-xl border bg-white dark:bg-slate-900 text-xs w-48 sm:w-64 outline-none"/></div><button className="p-2 rounded-xl bg-white dark:bg-slate-900 border"><Bell className="w-4 h-4"/></button></div></div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">{[['Members','125,840+',Users],['Meetings','18,400+',Video],['Documents','4,280',FileText],['Announcements','1,245',Megaphone]].map(([l,v,I],i)=>{const C=I as IconType;return <div key={i} className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"><C className="w-5 h-5 text-sky-500 mb-2"/><p className="text-xl font-black text-slate-900 dark:text-white">{v as string}</p><p className="text-xs text-slate-500">{l as string}</p></div>})}</div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 space-y-5"><div className="flex items-center justify-between"><h2 className="font-bold text-lg text-slate-900 dark:text-white">Platform Modules</h2><span className="text-xs text-sky-500 font-bold">30/30 Modules Integrated</span></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{filtered.map(([title,desc,route,I])=><a key={route} href={`#/dashboard/${route}`} className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 transition"><div className="flex items-start gap-3"><div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-500"><I className="w-5 h-5"/></div><div><h3 className="font-bold text-sm text-slate-900 dark:text-white">{title}</h3><p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{desc}</p></div></div></a>)}</div></div>
          <div className="space-y-5">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"><div className="flex items-center gap-3 mb-4"><div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center text-white font-black text-lg">MD</div><div><h2 className="font-black">Md Hasan M...</h2><p className="text-xs text-slate-500">Thana President</p></div></div><div className="space-y-2 text-xs"><p><b>Mobile:</b> 01795210250</p><p><b>Blood Group:</b> A+</p><p><b>Division:</b> Dhaka</p><p><b>Status:</b> <span className="text-emerald-600 font-bold">Verified</span></p></div><a href="#/dashboard/profile" className="mt-4 block text-center px-4 py-2 rounded-xl bg-sky-600 text-white text-xs font-bold">View Profile</a></div>
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"><div className="flex items-center gap-2 mb-4"><CalendarDays className="w-5 h-5 text-sky-500"/><h2 className="font-bold">Events Calendar</h2></div>{['Central Committee Briefing','District Coordination Meeting','Digital Security Training'].map((x,i)=><div key={x} className="py-2.5 border-b last:border-0 text-xs"><p className="font-semibold">{x}</p><p className="text-slate-500 mt-1">{i+1} upcoming session • Secure room</p></div>)}</div>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-sky-600 to-indigo-700 text-white"><div className="flex items-center gap-2"><CheckCircle className="w-5 h-5"/><b>Demo Suite Ready</b></div><p className="text-xs text-sky-100 mt-2">30/30 Modules Integrated</p></div>
          </div>
        </div>
        <div className="mt-6 pt-5 border-t text-center text-[11px] text-slate-500">Political Private Network © 2026. All Rights Reserved.</div>
      </main>
    </div>
  </div>;
}

function ModulePage({route}:{route:string}){const info=routeInfo[route]||{title:'Workspace',desc:'Private network workspace.',icon:Home};const I=info.icon;return <div className="space-y-5 py-4"><div className="flex items-center gap-2 text-sm text-slate-500"><a href="#/dashboard">Dashboard</a><ChevronRight className="w-4 h-4"/><span>{info.title}</span></div><section className="rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-950 p-8 text-white border border-sky-500/30"><div className="w-14 h-14 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-5"><I className="w-7 h-7"/></div><h1 className="text-3xl font-black">{info.title}</h1><p className="mt-3 text-slate-300">{info.desc}</p></section><div className="grid md:grid-cols-3 gap-4"><div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border"><h3 className="font-bold">Profile</h3><p className="text-xs text-slate-500 mt-2">Md Hasan M... • Thana President</p></div><div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border"><h3 className="font-bold">Mobile</h3><p className="text-xs text-slate-500 mt-2">01795210250</p></div><div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border"><h3 className="font-bold">Blood Group</h3><p className="text-xs text-slate-500 mt-2">A+</p></div></div><a href="#/dashboard" className="inline-flex px-5 py-3 rounded-xl bg-sky-600 text-white font-bold text-sm">Back to Dashboard</a></div>}

export default function HomePageRouter(){const [route,setRoute]=useState(window.location.hash.replace(/^#\/?/,'')||'home');useEffect(()=>{const f=()=>setRoute(window.location.hash.replace(/^#\/?/,'')||'home');window.addEventListener('hashchange',f);return()=>window.removeEventListener('hashchange',f)},[]);if(route==='home')return <HomePage/>;if(route==='dashboard')return <Dashboard/>;if(route.startsWith('dashboard/'))return <ModulePage route={route.split('/')[1]}/>;return routeInfo[route]?<ModulePage route={route}/>:<Dashboard/>}
