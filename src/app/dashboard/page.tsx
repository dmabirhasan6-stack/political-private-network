'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { StatModal } from '@/components/dashboard/StatModal';
import { NoticeModal } from '@/components/dashboard/NoticeModal';
import {
  Users, Activity, UserPlus, Video, CheckSquare, Calendar,
  MessageSquare, PhoneCall, Bot, FileText, BarChart3, AlertTriangle, ArrowUpRight
} from 'lucide-react';

export default function DashboardPage() {
  const { user } = useAuth();
  const [selectedStat, setSelectedStat] = useState<string | null>(null);
  const [selectedNotice, setSelectedNotice] = useState<any>(null);

  const stats = [
    { key: 'members', label: 'Total Members', val: '125,840', color: 'from-sky-600 to-sky-700', icon: Users },
    { key: 'online', label: 'Online Members', val: '5,684', color: 'from-emerald-600 to-emerald-700', icon: Activity },
    { key: 'registrations', label: 'New Today', val: '52', color: 'from-indigo-600 to-indigo-700', icon: UserPlus },
    { key: 'meetings', label: 'Active Meetings', val: '18', color: 'from-amber-600 to-amber-700', icon: Video },
    { key: 'tasks', label: 'Pending Tasks', val: '12', color: 'from-rose-600 to-rose-700', icon: CheckSquare },
    { key: 'events', label: 'Upcoming Events', val: '8', color: 'from-purple-600 to-purple-700', icon: Calendar },
  ];

  const quickActions = [
    { title: 'Chat Messenger', href: '/chat', icon: MessageSquare },
    { title: 'Voice & Video Calls', href: '/calls', icon: PhoneCall },
    { title: 'Live Meetings', href: '/meetings', icon: Video },
    { title: 'Member Directory', href: '/directory', icon: Users },
    { title: 'AI Assistant', href: '/ai', icon: Bot },
    { title: 'Tasks & Projects', href: '/tasks', icon: CheckSquare },
    { title: 'Events Calendar', href: '/events', icon: Calendar },
    { title: 'Document Vault', href: '/documents', icon: FileText },
    { title: 'Analytics Reports', href: '/reports', icon: BarChart3 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white border border-sky-500/30 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs text-sky-400 font-bold uppercase tracking-wider">Good Morning, Welcome Back</span>
          <h1 className="text-2xl font-black mt-0.5">{user?.name || 'Abdur Rahman'}</h1>
          <p className="text-xs text-slate-300 mt-1">{user?.partyPosition} • {user?.division}</p>
        </div>
        <div className="text-right text-xs text-slate-400 font-mono">
          <p>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}</p>
          <p className="text-sky-400 font-bold mt-0.5">Air-Gapped Node #DH-884</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.key}
              onClick={() => setSelectedStat(s.key)}
              className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-sky-500/50 hover:shadow-xl transition cursor-pointer group space-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase text-slate-400">{s.label}</span>
                <Icon className="w-4 h-4 text-sky-500 group-hover:scale-110 transition" />
              </div>
              <p className="text-xl font-black text-slate-900 dark:text-white">{s.val}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Quick Navigation</h3>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
          {quickActions.map((qa, idx) => {
            const Icon = qa.icon;
            return (
              <Link
                key={idx}
                href={qa.href}
                className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-sky-500/50 hover:shadow-lg transition text-center space-y-1.5 group"
              >
                <div className="w-8 h-8 mx-auto rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center group-hover:scale-110 transition">
                  <Icon className="w-4 h-4" />
                </div>
                <p className="text-[10px] font-bold text-slate-800 dark:text-slate-200 truncate">{qa.title}</p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Notice Board & Weather */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" /> Official Notice Board
            </h3>
            <span className="text-[10px] text-sky-500 font-bold cursor-pointer">View All Notices</span>
          </div>

          <div
            onClick={() => setSelectedNotice({
              title: 'EMERGENCY: Digital Membership Verification Deadline Extended',
              issuer: 'Central Steering Secretariat',
              date: 'August 06, 2026',
              category: 'Urgent Circular'
            })}
            className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 hover:border-amber-500/40 transition cursor-pointer space-y-1"
          >
            <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase">PINNED ANNOUNCEMENT</span>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">EMERGENCY: Digital Membership Verification Deadline Extended</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-400">All division heads are requested to complete NID & Face verification before August 15, 2026.</p>
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg space-y-4">
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Regional Weather & Status</h3>
          <div className="p-4 rounded-xl bg-gradient-to-br from-sky-900 to-slate-900 text-white space-y-2 text-center">
            <p className="text-xs font-bold text-sky-300">Dhaka, Bangladesh</p>
            <p className="text-3xl font-black">28°C</p>
            <p className="text-xs text-slate-300">Partly Cloudy • Humidity 74%</p>
          </div>
        </div>
      </div>

      <StatModal isOpen={!!selectedStat} onClose={() => setSelectedStat(null)} statType={selectedStat} />
      <NoticeModal isOpen={!!selectedNotice} onClose={() => setSelectedNotice(null)} notice={selectedNotice} />
    </div>
  );
}
