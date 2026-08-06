'use client';

import React from 'react';
import { Cpu, HardDrive, Database, Server, ShieldCheck, Activity, RefreshCw } from 'lucide-react';
import { useToast } from '@/context/ToastContext';

export default function SuperAdminPage() {
  const { addToast } = useToast();

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white border border-sky-500/30 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black flex items-center gap-2">
            <Server className="w-6 h-6 text-amber-400" /> Enterprise Super Admin Control Center
          </h1>
          <p className="text-xs text-slate-300 mt-1">
            AWS / Azure / M365 inspired global platform infrastructure, server health & license management.
          </p>
        </div>

        <button
          onClick={() => addToast({ type: 'success', title: 'System Diagnostics', message: 'All 100+ air-gapped demo services operating normally.' })}
          className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-lg transition flex items-center gap-2"
        >
          <RefreshCw className="w-4 h-4" /> Run Global Health Scan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl space-y-2">
          <Cpu className="w-6 h-6 text-sky-500" />
          <p className="text-xs text-slate-400">CPU Usage</p>
          <p className="text-2xl font-black text-slate-900 dark:text-white">18.4%</p>
        </div>
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl space-y-2">
          <HardDrive className="w-6 h-6 text-emerald-500" />
          <p className="text-xs text-slate-400">RAM Allocation</p>
          <p className="text-2xl font-black text-slate-900 dark:text-white">32.1 GB / 128 GB</p>
        </div>
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl space-y-2">
          <Database className="w-6 h-6 text-indigo-500" />
          <p className="text-xs text-slate-400">Local JSON Storage</p>
          <p className="text-2xl font-black text-slate-900 dark:text-white">5,000,000+ Records</p>
        </div>
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl space-y-2">
          <Activity className="w-6 h-6 text-amber-500" />
          <p className="text-xs text-slate-400">Air-Gapped Uptime</p>
          <p className="text-2xl font-black text-slate-900 dark:text-white">99.999%</p>
        </div>
      </div>
    </div>
  );
}
