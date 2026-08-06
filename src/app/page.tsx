'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Users, Lock, Bot, Video, Newspaper, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-12 py-4">
      {/* Hero */}
      <section className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-950 p-8 sm:p-12 text-white overflow-hidden border border-sky-500/30 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" /> Next-Gen Enterprise Security
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Political Private Network <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">Platform</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Encrypted governance infrastructure empowering grassroots democracy from Ward to Central Committees with AI-driven communication, biometrics, and secure conference suites.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/registration"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 font-bold text-xs shadow-xl shadow-sky-600/30 transition flex items-center gap-2"
            >
              Start 7-Step Registration <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/dashboard"
              className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 font-bold text-xs transition"
            >
              Access Member Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Active Members', val: '125,840+', icon: Users },
          { label: 'Divisions Covered', val: '8 Divisions', icon: Shield },
          { label: 'Encrypted Meetings', val: '18,400+', icon: Video },
          { label: 'AI Directives Prepared', val: '95,000+', icon: Bot },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg text-center space-y-1">
              <Icon className="w-6 h-6 mx-auto text-sky-500 mb-2" />
              <p className="text-2xl font-black text-slate-900 dark:text-white">{s.val}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{s.label}</p>
            </div>
          );
        })}
      </section>

      {/* Key Modules */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center">Enterprise Core Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Member Directory & Org Tree', desc: 'Windows/VS Code style hierarchy explorer from Bangladesh to Ward level.', href: '/directory', icon: Users },
            { title: 'Enterprise Messenger & Chat', desc: 'Encrypted 1-on-1, group chats, broadcast notices, and voice notes.', href: '/chat', icon: Newspaper },
            { title: 'Voice & Video Calling Suite', desc: 'Full HD encrypted video conference, mini draggable window, and screenshare.', href: '/calls', icon: Video },
            { title: 'Interactive AI Assistant', desc: 'Custom political AI for notice writing, constitution Q&A, and speech drafting.', href: '/ai', icon: Bot },
            { title: 'Document Vault & Library', desc: 'Central circulars, constitution documents, and department policies.', href: '/documents', icon: Lock },
            { title: 'News Feed & Social Network', desc: 'Official announcements, reaction emojis, poll voting, and stories.', href: '/feed', icon: Newspaper },
          ].map((m, idx) => {
            const Icon = m.icon;
            return (
              <Link
                key={idx}
                href={m.href}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-sky-500/50 hover:shadow-2xl transition group space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center group-hover:scale-110 transition">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition">{m.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{m.desc}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
