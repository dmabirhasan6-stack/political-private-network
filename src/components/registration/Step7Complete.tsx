'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle, Shield, Download } from 'lucide-react';
import { DigitalIDCard } from '../ui/DigitalIDCard';

export function Step7Complete({ formData }: any) {
  const registeredMember = {
    id: 'PPN-2026-88492',
    name: formData.fullName || 'Abdur Rahman',
    fatherName: formData.fatherName || 'Late Md Karim Senior',
    motherName: formData.motherName || 'Begum Fatema Sultana',
    dob: formData.dob || '1985-06-15',
    gender: formData.gender || 'Male',
    bloodGroup: formData.bloodGroup || 'O+',
    mobile: formData.mobile || '+880 1700-000000',
    email: formData.email || 'member@ppn-platform.gov.bd',
    address: formData.address || 'Keraniganj, Dhaka',
    nid: formData.nid || '198500000000',
    nidVerified: true,
    faceMatched: true,
    partyPosition: formData.partyPosition || 'Ward Secretary',
    partyLevel: 'Ward' as const,
    division: formData.division || 'Dhaka Division',
    district: formData.district || 'Dhaka District',
    thana: formData.thana || 'Keraniganj',
    union: formData.union || 'Kolatia Union',
    ward: formData.ward || 'Ward 01',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PPN-2026-88492',
    isOnline: true,
    isVerified: true,
    joinedDate: '2026-08-06',
    emergencyContact: '+880 1800-000000',
    committee: 'Kolatia Ward Executive Steering Committee',
    bio: 'Newly registered verified political member.',
    recentActivities: []
  };

  return (
    <div className="space-y-6 text-center animate-fadeIn">
      <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
        <CheckCircle className="w-10 h-10 animate-pulse" />
      </div>

      <div>
        <h2 className="text-2xl font-black text-slate-900 dark:text-white">Registration Complete!</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Welcome to the Political Private Network Platform. Your membership profile is verified.
        </p>
      </div>

      <DigitalIDCard member={registeredMember} />

      <div className="flex gap-4 justify-center pt-2">
        <Link
          href="/login"
          className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-lg transition"
        >
          Go to Login Portal →
        </Link>
        <Link
          href="/dashboard"
          className="px-6 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold transition"
        >
          Enter Dashboard
        </Link>
      </div>
    </div>
  );
}
