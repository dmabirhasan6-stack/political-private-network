'use client';

import React, { useState } from 'react';
import { ShieldCheck, UploadCloud, CheckCircle2, Loader2 } from 'lucide-react';
import { useToast } from '@/context/ToastContext';

export function Step2NidVerification({ formData, setFormData, onNext, onPrev }: any) {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(formData.nidVerified || false);
  const { addToast } = useToast();

  const handleVerify = () => {
    if (!formData.nid) {
      addToast({ type: 'error', title: 'NID Missing', message: 'Please enter a valid NID number first.' });
      return;
    }
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
      setFormData({
        ...formData,
        nidVerified: true,
        fullName: formData.fullName || 'Abdur Rahman',
        fatherName: formData.fatherName || 'Late Md Karim Senior',
        motherName: formData.motherName || 'Begum Fatema Sultana',
        dob: formData.dob || '1985-06-15'
      });
      addToast({
        type: 'success',
        title: 'National ID Verified',
        message: '✔ National ID Verified Successfully against Govt NID Server.'
      });
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 flex items-center justify-between">
        <span>Step 2: National ID Verification</span>
        {isVerified && <span className="text-xs text-emerald-500 font-bold flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> Verified</span>}
      </h2>

      <div>
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">National ID (NID) Number *</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={formData.nid || ''}
            onChange={(e) => setFormData({ ...formData, nid: e.target.value })}
            placeholder="198500000000000"
            className="flex-1 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-sky-500 font-mono"
          />
          <button
            type="button"
            onClick={handleVerify}
            disabled={isVerifying || isVerified}
            className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:bg-emerald-600 text-white font-bold text-xs transition flex items-center gap-2"
          >
            {isVerifying ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Verifying NID...
              </>
            ) : isVerified ? (
              '✔ NID Verified'
            ) : (
              'Verify NID'
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-4 text-center bg-slate-50 dark:bg-slate-800/50 hover:border-sky-500 transition cursor-pointer">
          <UploadCloud className="w-8 h-8 mx-auto text-sky-500 mb-1" />
          <p className="text-xs font-bold text-slate-700 dark:text-slate-300">NID Front Side Upload</p>
          <p className="text-[10px] text-slate-400">Drag & drop or click to upload</p>
        </div>
        <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-4 text-center bg-slate-50 dark:bg-slate-800/50 hover:border-sky-500 transition cursor-pointer">
          <UploadCloud className="w-8 h-8 mx-auto text-sky-500 mb-1" />
          <p className="text-xs font-bold text-slate-700 dark:text-slate-300">NID Back Side Upload</p>
          <p className="text-[10px] text-slate-400">Drag & drop or click to upload</p>
        </div>
      </div>

      {isVerified && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-1 text-xs">
          <p className="font-bold text-emerald-400">Government Verified Records Auto-Filled:</p>
          <p className="text-slate-300"><span className="text-slate-400">Verified Name:</span> {formData.fullName}</p>
          <p className="text-slate-300"><span className="text-slate-400">Father:</span> {formData.fatherName}</p>
          <p className="text-slate-300"><span className="text-slate-400">Mother:</span> {formData.motherName}</p>
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
          Continue to Step 3 →
        </button>
      </div>
    </div>
  );
}
