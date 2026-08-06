'use client';

import React from 'react';
import { CURRENT_DIGITAL_ID } from '@/data/identityData';
import { DigitalIDCard } from '@/components/ui/DigitalIDCard';
import { ShieldCheck, QrCode, CreditCard, Lock } from 'lucide-react';

export default function IdentityPage() {
  const memberObj = {
    id: CURRENT_DIGITAL_ID.memberId,
    name: CURRENT_DIGITAL_ID.fullName,
    fatherName: 'Late Md Karim Senior',
    motherName: 'Begum Fatema Sultana',
    dob: '1985-06-15',
    gender: 'Male' as const,
    bloodGroup: CURRENT_DIGITAL_ID.bloodGroup as any,
    mobile: '+880 1711-223344',
    email: 'abdur.rahman@ppn-platform.gov.bd',
    address: 'Keraniganj, Dhaka',
    nid: '19852694810284',
    nidVerified: true,
    faceMatched: true,
    partyPosition: CURRENT_DIGITAL_ID.position,
    partyLevel: 'Ward' as const,
    division: CURRENT_DIGITAL_ID.division,
    district: CURRENT_DIGITAL_ID.district,
    thana: CURRENT_DIGITAL_ID.thana,
    union: CURRENT_DIGITAL_ID.union,
    ward: CURRENT_DIGITAL_ID.ward,
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    qrCode: CURRENT_DIGITAL_ID.qrCodeUrl,
    isOnline: true,
    isVerified: true,
    joinedDate: '2026-08-01',
    emergencyContact: '+880 1800-000000',
    committee: 'Kolatia Ward Executive Steering Committee',
    bio: 'Verified Digital Identity Member.',
    recentActivities: []
  };

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white border border-sky-500/30 shadow-2xl">
        <h1 className="text-2xl font-black flex items-center gap-2">
          <CreditCard className="w-6 h-6 text-sky-400" /> Digital Member ID & Smart Identity Wallet
        </h1>
        <p className="text-xs text-slate-300 mt-1">
          Government-compliant digital credential, encrypted QR verification, and identity score.
        </p>
      </div>

      <div className="py-4">
        <DigitalIDCard member={memberObj} />
      </div>
    </div>
  );
}
