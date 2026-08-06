'use client';

import React, { useState } from 'react';
import { Monitor, ShieldCheck } from 'lucide-react';
import { useToast } from '@/context/ToastContext';

export function Step6TrustedDevice({ onNext, onPrev }: any) {
  const [isTrusted, setIsTrusted] = useState(false);
  const { addToast } = useToast();

  const handleTrust = () => {
    setIsTrusted(true);
    addToast({
      type: 'success',
      title: 'Device Registered',
      message: '✔ Desktop-PC (Windows 11 / Chrome) added as Trusted Security Device.'
    });
  };

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
        Step 6: Register Trusted Device
      </h2>

      <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 space-y-3">
        <div className="flex items-center gap-3">
          <Monitor className="w-8 h-8 text-sky-500" />
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Desktop-PC</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">Windows 11 • Chrome Browser</p>
          </div>
        </div>
        <div className="text-xs space-y-1 text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700 pt-2">
          <p><span className="text-slate-400">Current Location:</span> Dhaka, Bangladesh</p>
          <p><span className="text-slate-400">IP Address:</span> 103.145.22.84 (Air-Gapped Proxy)</p>
        </div>
      </div>

      <button
        onClick={handleTrust}
        disabled={isTrusted}
        className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:bg-emerald-600 text-white font-bold text-xs transition flex items-center justify-center gap-2"
      >
        <ShieldCheck className="w-4 h-4" />
        {isTrusted ? '✔ Device Trusted & Paired' : 'Trust This Device'}
      </button>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onPrev}
          className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!isTrusted}
          className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white font-bold text-xs shadow-lg transition"
        >
          Complete Registration →
        </button>
      </div>
    </div>
  );
}
