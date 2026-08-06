'use client';

import React, { useState, useEffect } from 'react';
import { Smartphone, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/context/ToastContext';

export function Step5OtpVerification({ formData, onNext, onPrev }: any) {
  const [timer, setTimer] = useState(60);
  const [otp, setOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const { addToast } = useToast();

  useEffect(() => {
    if (timer > 0 && !isVerified) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer, isVerified]);

  const handleVerifyOtp = () => {
    if (otp === '123456' || otp.length === 6) {
      setIsVerified(true);
      addToast({ type: 'success', title: 'Mobile Verified', message: '✔ Mobile Number Verified Successfully!' });
    } else {
      addToast({ type: 'error', title: 'Invalid OTP', message: 'Use dummy OTP 123456 to verify.' });
    }
  };

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
        Step 5: Mobile OTP Verification
      </h2>

      <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
        <Smartphone className="w-6 h-6 text-sky-500" />
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400">SMS Verification sent to:</p>
          <p className="text-sm font-bold text-slate-900 dark:text-white">{formData.mobile || '+880 1700-000000'}</p>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Enter 6-Digit OTP (Dummy OTP: 123456)</label>
        <div className="flex gap-2">
          <input
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="123456"
            className="flex-1 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-center tracking-widest text-base font-bold text-slate-900 dark:text-white outline-none focus:border-sky-500"
          />
          <button
            onClick={handleVerifyOtp}
            disabled={isVerified}
            className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:bg-emerald-600 text-white font-bold text-xs transition"
          >
            {isVerified ? '✔ Verified' : 'Verify OTP'}
          </button>
        </div>
        <p className="text-[11px] text-slate-400 mt-2 flex justify-between">
          <span>Resend OTP in: <strong className="text-sky-500">{timer}s</strong></span>
          <button onClick={() => setTimer(60)} className="text-sky-500 hover:underline">Resend Now</button>
        </p>
      </div>

      {isVerified && (
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" /> Mobile OTP Verified Successfully!
        </div>
      )}

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
          disabled={!isVerified}
          className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white font-bold text-xs shadow-lg transition"
        >
          Continue to Step 6 →
        </button>
      </div>
    </div>
  );
}
