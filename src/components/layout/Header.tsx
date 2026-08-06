'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { ThemeSwitcher } from '../ui/ThemeSwitcher';
import { Bell, Search, User, Shield, Menu, LogOut, UserPlus, Sparkles, PhoneCall } from 'lucide-react';
import { NotificationDrawer } from './NotificationDrawer';

export function Header({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  const { user, isAuthenticated, logout } = useAuth();
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <Link href="/dashboard" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white font-black text-base shadow-lg shadow-sky-500/20 group-hover:scale-105 transition">
              P
            </div>
            <div className="hidden sm:block">
              <span className="text-base font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                PPN PLATFORM <Shield className="w-3.5 h-3.5 text-sky-500 inline" />
              </span>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium -mt-0.5">Political Private Network</p>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center max-w-md w-full mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search members, notices, documents, meetings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-transparent focus:border-sky-500 text-xs text-slate-900 dark:text-white placeholder-slate-400 outline-none transition"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeSwitcher />

          <button
            onClick={() => setIsNotifOpen(true)}
            className="relative p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-sky-500 transition"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-sky-500 animate-ping" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-sky-500" />
          </button>

          <Link
            href="/registration"
            className="hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition"
          >
            <UserPlus className="w-3.5 h-3.5" /> Registration Wizard
          </Link>

          {isAuthenticated && user ? (
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-800">
              <img
                src={user.photo}
                alt={user.name}
                className="w-8 h-8 rounded-xl object-cover border border-sky-500/50"
              />
              <div className="hidden lg:block text-left">
                <p className="text-xs font-bold text-slate-900 dark:text-white truncate max-w-[120px]">{user.name}</p>
                <p className="text-[10px] text-sky-500 font-semibold truncate max-w-[120px]">{user.partyPosition}</p>
              </div>
              <button
                onClick={logout}
                title="Logout"
                className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-500/10 transition"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-md transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      <NotificationDrawer isOpen={isNotifOpen} onClose={() => setIsNotifOpen(false)} />
    </header>
  );
}
