'use client';

import React, { useState } from 'react';
import { Camera, CheckCircle2, Scan } from 'lucide-react';
import { useToast } from '@/context/ToastContext';

export function Step4FaceVerification({ formData, setFormData, onNext, onPrev }: any) {
  const [isScanning, setIsScanning] = useState(false);
  const [isMatched, setIsMatched] = useState(formData.faceMatched || false);
  const { addToast } = useToast();

  const handleStartScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setIsMatched(true);
      setFormData({ ...formData, faceMatched: true });
      addToast({
        type: 'success',
        title: 'Biometric Face Match',
        message: '✔ Face Matched - 98% Match against NID Photograph'
      });
    }, 3000);
  };

  return (
    <div className="space-y-4 text-center">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 text-left">
        Step 4: Biometric Face Verification
      </h2>

      <div className="relative w-48 h-48 mx-auto my-6 rounded-full border-4 border-sky-500/50 flex items-center justify-center overflow-hidden bg-slate-950">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80"
          alt="Face Scan"
          className="w-full h-full object-cover opacity-80"
        />

        {isScanning && (
          <div className="absolute inset-0 bg-sky-500/20 backdrop-blur-xs flex flex-col items-center justify-center text-sky-400 animate-pulse">
            <Scan className="w-12 h-12 animate-spin mb-2" />
            <span className="text-xs font-bold">Scanning Face Biometrics...</span>
          </div>
        )}

        {isMatched && (
          <div className="absolute inset-0 bg-emerald-950/80 backdrop-blur-xs flex flex-col items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-12 h-12 mb-1" />
            <span className="text-xs font-bold">✔ Face Matched</span>
            <span className="text-[10px] text-emerald-300">98% Biometric Confidence</span>
          </div>
        )}
      </div>

      <div className="max-w-xs mx-auto">
        <button
          onClick={handleStartScan}
          disabled={isScanning || isMatched}
          className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:bg-emerald-600 text-white font-bold text-xs shadow-lg transition flex items-center justify-center gap-2"
        >
          <Camera className="w-4 h-4" />
          {isScanning ? 'Scanning...' : isMatched ? '✔ Face Verified (98% Match)' : 'Start Face Scanner'}
        </button>
      </div>

      <div className="flex justify-between pt-6">
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
          disabled={!isMatched}
          className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white font-bold text-xs shadow-lg transition"
        >
          Continue to Step 5 →
        </button>
      </div>
    </div>
  );
}
