'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  PhoneCall,
  Video,
  Bot,
  Newspaper,
  FileText,
  CheckSquare,
  Calendar,
  BarChart3,
  UserPlus,
  ShieldAlert,
  Info,
  Phone,
  HelpCircle,
  Home,
  GraduationCap,
  Vote,
  Bell,
  CreditCard,
  Building2,
  ShieldCheck,
  Shield,
  Server,
  Folder,
  LifeBuoy,
  Search,
  Clock,
  Settings,
  Code,
  Rocket
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const mainNav = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Member Directory', href: '/directory', icon: Users },
    { name: 'Chat Messenger', href: '/chat', icon: MessageSquare },
    { name: 'Voice & Video Calls', href: '/calls', icon: PhoneCall },
    { name: 'Meeting Room', href: '/meetings', icon: Video },
    { name: 'Enterprise AI Assistant', href: '/ai', icon: Bot, highlight: true },
    { name: 'Tasks & Workflows', href: '/tasks', icon: CheckSquare },
    { name: 'Events Calendar', href: '/events', icon: Calendar },
    { name: 'E-Learning & Training', href: '/training', icon: GraduationCap },
    { name: 'Polls & Surveys', href: '/polls', icon: Vote },
    { name: 'Reports & Analytics', href: '/reports', icon: BarChart3 },
    { name: 'Notifications & Alerts', href: '/notifications', icon: Bell },
    { name: 'Digital Member ID', href: '/identity', icon: CreditCard },
    { name: 'Security SOC Center', href: '/security-soc', icon: ShieldAlert },
    { name: 'Organization System', href: '/organization', icon: Building2 },
    { name: 'Member Verification', href: '/verification', icon: ShieldCheck },
    { name: 'Admin Control Center', href: '/admin', icon: Shield },
    { name: 'Super Admin Center', href: '/super-admin', icon: Server },
    { name: 'Media Asset Center', href: '/media', icon: Folder },
    { name: 'Help Desk Support', href: '/support', icon: LifeBuoy },
    { name: 'Master Calendar', href: '/calendar', icon: Calendar },
    { name: 'Global Search', href: '/search', icon: Search },
    { name: 'Audit Timeline', href: '/audit', icon: Clock },
    { name: 'System Settings', href: '/settings', icon: Settings },
    { name: 'Developer & API Hub', href: '/developer', icon: Code },
    { name: 'Launch & Presentation', href: '/launch', icon: Rocket, highlight: true },
    { name: 'Document Vault', href: '/documents', icon: FileText },
    { name: 'News Feed & Social', href: '/feed', icon: Newspaper },
    { name: 'Registration Wizard', href: '/registration', icon: UserPlus },
  ];

  const publicNav = [
    { name: 'Home Landing', href: '/', icon: Home },
    { name: 'About PPN', href: '/about', icon: Info },
    { name: 'Platform Features', href: '/features', icon: HelpCircle },
    { name: 'Enterprise Security', href: '/security', icon: ShieldAlert },
    { name: 'Contact & Support', href: '/contact', icon: Phone },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-xs lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed lg:sticky top-16 z-40 h-[calc(100vh-4rem)] w-64 bg-white/90 dark:bg-slate-900/90 border-r border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-4 overflow-y-auto flex-1 space-y-6">
          <div>
            <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Enterprise Suite (30 Modules)
            </p>
            <nav className="space-y-1">
              {mainNav.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition ${
                      isActive
                        ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                        : item.highlight
                        ? 'text-amber-500 hover:bg-amber-500/10 font-bold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="truncate">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div>
            <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Public Information
            </p>
            <nav className="space-y-1">
              {publicNav.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition ${
                      isActive
                        ? 'bg-slate-200 dark:bg-slate-800 text-sky-600 dark:text-sky-400 font-bold'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="truncate">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        <div className="p-4 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/50">
          <div className="rounded-xl bg-gradient-to-br from-sky-900 to-indigo-950 p-3 text-white text-xs">
            <p className="font-bold flex items-center gap-1.5 text-amber-400">
              <Rocket className="w-3.5 h-3.5" /> Demo Suite Ready
            </p>
            <p className="text-[10px] text-slate-300 mt-1">30/30 Modules Integrated</p>
          </div>
        </div>
      </aside>
    </>
  );
}
