'use client';

import React from 'react';

export function Step1BasicInfo({ formData, setFormData, onNext }: any) {
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
        Step 1: Basic Information
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Full Name *</label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName || ''}
            onChange={handleChange}
            placeholder="e.g. Abdur Rahman"
            className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-sky-500"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Father's Name *</label>
          <input
            type="text"
            name="fatherName"
            required
            value={formData.fatherName || ''}
            onChange={handleChange}
            placeholder="e.g. Late Md Karim"
            className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-sky-500"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Mother's Name *</label>
          <input
            type="text"
            name="motherName"
            required
            value={formData.motherName || ''}
            onChange={handleChange}
            placeholder="e.g. Begum Fatema"
            className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-sky-500"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Date of Birth *</label>
          <input
            type="date"
            name="dob"
            required
            value={formData.dob || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-sky-500"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Gender *</label>
          <select
            name="gender"
            value={formData.gender || 'Male'}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-sky-500"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Blood Group *</label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup || 'O+'}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-sky-500"
          >
            <option value="O+">O+</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="AB+">AB+</option>
            <option value="O-">O-</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Mobile Number *</label>
          <input
            type="tel"
            name="mobile"
            required
            value={formData.mobile || ''}
            onChange={handleChange}
            placeholder="+880 1700-000000"
            className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-sky-500"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email Address *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email || ''}
            onChange={handleChange}
            placeholder="member@ppn-platform.gov.bd"
            className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-sky-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Present Address *</label>
        <textarea
          name="address"
          required
          rows={2}
          value={formData.address || ''}
          onChange={handleChange}
          placeholder="House #, Road #, Area details"
          className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-sky-500"
        />
      </div>
      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-lg transition"
        >
          Continue to Step 2 →
        </button>
      </div>
    </form>
  );
}
