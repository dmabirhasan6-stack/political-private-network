'use client';

import React, { useState } from 'react';
import { DUMMY_APPLICATIONS, VerificationApplication } from '@/data/verificationData';
import { ShieldCheck, CheckCircle2, XCircle, Clock } from 'lucide-react';
import { useToast } from '@/context/ToastContext';

export default function VerificationPage() {
  const [apps, setApps] = useState<VerificationApplication[]>(DUMMY_APPLICATIONS);
  const { addToast } = useToast();

  const handleApprove = (id: string) => {
    setApps(prev => prev.map(a => a.id === id ? { ...a, status: 'Approved' } : a));
    addToast({ type: 'success', title: 'Application Approved', message: '✔ Member profile approved & Digital Member ID issued.' });
  };

  const handleReject = (id: string) => {
    setApps(prev => prev.map(a => a.id === id ? { ...a, status: 'Rejected' } : a));
    addToast({ type: 'error', title: 'Application Rejected', message: 'Application rejected with revision notice.' });
  };

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white border border-sky-500/30 shadow-2xl">
        <h1 className="text-2xl font-black flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-sky-400" /> Enterprise Member Verification & Approval Center
        </h1>
        <p className="text-xs text-slate-300 mt-1">
          7-Step Admin Review Queue, NID & Biometric face match validation, and Digital ID issuance.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xl divide-y divide-slate-100 dark:divide-slate-800">
        {apps.map((app) => (
          <div key={app.id} className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">{app.applicantName}</h3>
                <span className="font-mono text-[10px] text-sky-500 font-bold">{app.id}</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400">{app.appliedPosition} • {app.division} • {app.thana}</p>
              <p className="text-[10px] text-slate-400">NID: {app.nid} ({app.nidStatus}) • Face Match: <strong className="text-emerald-500">{app.faceMatchPercent}%</strong></p>
            </div>

            <div className="flex items-center gap-2">
              {app.status === 'Pending Review' ? (
                <>
                  <button
                    onClick={() => handleApprove(app.id)}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
                  >
                    Approve Member
                  </button>
                  <button
                    onClick={() => handleReject(app.id)}
                    className="px-4 py-2 rounded-xl border border-red-500/30 text-red-500 hover:bg-red-500/10 font-bold text-xs"
                  >
                    Reject
                  </button>
                </>
              ) : (
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  app.status === 'Approved' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'
                }`}>
                  {app.status}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
