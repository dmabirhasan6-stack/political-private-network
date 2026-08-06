'use client';

import React, { useState } from 'react';
import { Shield, Users, CheckCircle2, AlertTriangle, FileText, Settings, UserPlus, Sliders } from 'lucide-react';
import { useToast } from '@/context/ToastContext';

export default function AdminPage() {
  const [role, setRole] = useState<string>('Central Admin');
  const { addToast } = useToast();

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white border border-sky-500/30 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black flex items-center gap-2">
            <Shield className="w-6 h-6 text-sky-400" /> Enterprise Admin Control Center
          </h1>
          <p className="text-xs text-slate-300 mt-1">
            M365 / Google Workspace inspired role-based administrative governance portal.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold bg-slate-800 p-1.5 rounded-xl border border-slate-700">
          <Sliders className="w-4 h-4 text-amber-400" />
          <select
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              addToast({ type: 'info', title: 'Role Switched', message: `Switched view to ${e.target.value}` });
            }}
            className="bg-transparent text-white outline-none font-bold"
          >
            <option value="Central Admin" className="bg-slate-900">Central Admin</option>
            <option value="Division Admin" className="bg-slate-900">Division Admin</option>
            <option value="District Admin" className="bg-slate-900">District Admin</option>
            <option value="Thana Admin" className="bg-slate-900">Thana Admin</option>
            <option value="Ward Admin" className="bg-slate-900">Ward Admin</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl space-y-1">
          <p className="text-xs text-slate-400">Pending Approvals</p>
          <p className="text-2xl font-black text-amber-500">12 Applications</p>
        </div>
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl space-y-1">
          <p className="text-xs text-slate-400">Active Committee Members</p>
          <p className="text-2xl font-black text-slate-900 dark:text-white">125,840</p>
        </div>
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl space-y-1">
          <p className="text-xs text-slate-400">Audit Status</p>
          <p className="text-2xl font-black text-emerald-500">✔ 100% Compliant</p>
        </div>
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl space-y-1">
          <p className="text-xs text-slate-400">Admin Role Scope</p>
          <p className="text-2xl font-black text-sky-400">{role}</p>
        </div>
      </div>
    </div>
  );
}
