'use client';

import React from 'react';
import { BANGLADESH_HIERARCHY } from '@/data/membersData';

export function Step3PartyInfo({ formData, setFormData, onNext, onPrev }: any) {
  const divisions = Object.keys(BANGLADESH_HIERARCHY);
  const districts = formData.division ? Object.keys(BANGLADESH_HIERARCHY[formData.division] || {}) : [];
  const thanas = (formData.division && formData.district) ? Object.keys(BANGLADESH_HIERARCHY[formData.division]?.[formData.district] || {}) : [];
  const unions = (formData.division && formData.district && formData.thana) ? Object.keys(BANGLADESH_HIERARCHY[formData.division]?.[formData.district]?.[formData.thana] || {}) : [];
  const wards = (formData.division && formData.district && formData.thana && formData.union) ? BANGLADESH_HIERARCHY[formData.division]?.[formData.district]?.[formData.thana]?.[formData.union] || [] : [];

  const handleDivisionChange = (e: any) => {
    const val = e.target.value;
    setFormData({ ...formData, division: val, district: '', thana: '', union: '', ward: '' });
  };

  const handleDistrictChange = (e: any) => {
    const val = e.target.value;
    setFormData({ ...formData, district: val, thana: '', union: '', ward: '' });
  };

  const handleThanaChange = (e: any) => {
    const val = e.target.value;
    setFormData({ ...formData, thana: val, union: '', ward: '' });
  };

  const handleUnionChange = (e: any) => {
    const val = e.target.value;
    setFormData({ ...formData, union: val, ward: '' });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
        Step 3: Party Information & Hierarchy
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Division *</label>
          <select
            required
            value={formData.division || ''}
            onChange={handleDivisionChange}
            className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-sky-500"
          >
            <option value="">Select Division</option>
            {divisions.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">District *</label>
          <select
            required
            disabled={!formData.division}
            value={formData.district || ''}
            onChange={handleDistrictChange}
            className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-sky-500 disabled:opacity-50"
          >
            <option value="">Select District</option>
            {districts.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Thana *</label>
          <select
            required
            disabled={!formData.district}
            value={formData.thana || ''}
            onChange={handleThanaChange}
            className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-sky-500 disabled:opacity-50"
          >
            <option value="">Select Thana</option>
            {thanas.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Union *</label>
          <select
            required
            disabled={!formData.thana}
            value={formData.union || ''}
            onChange={handleUnionChange}
            className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-sky-500 disabled:opacity-50"
          >
            <option value="">Select Union</option>
            {unions.map((u) => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Ward *</label>
          <select
            required
            disabled={!formData.union}
            value={formData.ward || ''}
            onChange={(e) => setFormData({ ...formData, ward: e.target.value })}
            className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-sky-500 disabled:opacity-50"
          >
            <option value="">Select Ward</option>
            {wards.map((w) => (
              <option key={w} value={w}>{w}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Position / Designation *</label>
          <select
            required
            value={formData.partyPosition || 'Member'}
            onChange={(e) => setFormData({ ...formData, partyPosition: e.target.value })}
            className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-sky-500"
          >
            <option value="Member">General Member</option>
            <option value="Ward Secretary">Ward Secretary</option>
            <option value="Union President">Union President</option>
            <option value="District President">District President</option>
            <option value="Central Committee">Central Committee Executive</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onPrev}
          className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold"
        >
          ← Back
        </button>
        <button
          type="submit"
          className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-lg transition"
        >
          Continue to Step 4 →
        </button>
      </div>
    </form>
  );
}
