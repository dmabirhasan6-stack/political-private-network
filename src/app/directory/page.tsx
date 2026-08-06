'use client';

import React, { useState } from 'react';
import { DUMMY_MEMBERS, Member } from '@/data/membersData';
import { OrgTreeExplorer } from '@/components/directory/OrgTreeExplorer';
import { MemberCard } from '@/components/directory/MemberCard';
import { MemberProfileModal } from '@/components/directory/MemberProfileModal';
import { ContextMenu } from '@/components/directory/ContextMenu';
import { Search, Filter, Users, Shield } from 'lucide-react';

export default function DirectoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; member: Member } | null>(null);

  const filteredMembers = DUMMY_MEMBERS.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.mobile.includes(searchQuery) ||
      m.district.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDivision = !selectedDivision || m.division === selectedDivision;
    const matchesPosition = !selectedPosition || m.partyPosition === selectedPosition;

    return matchesSearch && matchesDivision && matchesPosition;
  });

  const handleSelectNode = (level: string, name: string) => {
    if (level === 'Division') setSelectedDivision(name);
    else setSearchQuery(name);
  };

  return (
    <div className="space-y-6" onClick={() => setContextMenu(null)}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Users className="w-6 h-6 text-sky-500" /> Organization Member Directory
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Hierarchical Grassroots Explorer covering 8 Divisions, 64 Districts, and Ward Members.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
          <Shield className="w-4 h-4 text-emerald-500" /> Total Verified Database: 125,840+
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by Name, ID, Mobile, District..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white outline-none focus:border-sky-500"
          />
        </div>

        <div>
          <select
            value={selectedDivision}
            onChange={(e) => setSelectedDivision(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white outline-none focus:border-sky-500"
          >
            <option value="">All Divisions (8)</option>
            <option value="Dhaka Division">Dhaka Division</option>
            <option value="Chattogram Division">Chattogram Division</option>
            <option value="Rajshahi Division">Rajshahi Division</option>
            <option value="Khulna Division">Khulna Division</option>
            <option value="Barishal Division">Barishal Division</option>
            <option value="Sylhet Division">Sylhet Division</option>
            <option value="Rangpur Division">Rangpur Division</option>
            <option value="Mymensingh Division">Mymensingh Division</option>
          </select>
        </div>

        <div>
          <select
            value={selectedPosition}
            onChange={(e) => setSelectedPosition(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white outline-none focus:border-sky-500"
          >
            <option value="">All Positions</option>
            <option value="Central President">Central President</option>
            <option value="Division Organizer">Division Organizer</option>
            <option value="District President">District President</option>
            <option value="Ward Secretary">Ward Secretary</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Org Explorer */}
        <div className="lg:col-span-1">
          <OrgTreeExplorer onSelectNode={handleSelectNode} />
        </div>

        {/* Right Members Grid */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Showing {filteredMembers.length} verified member profiles</span>
            <span>Right-click any card for context actions</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredMembers.slice(0, 24).map((member) => (
              <MemberCard
                key={member.id}
                member={member}
                onViewProfile={(m) => setSelectedMember(m)}
                onContextMenu={(e, m) => {
                  e.preventDefault();
                  setContextMenu({ x: e.clientX, y: e.clientY, member: m });
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <MemberProfileModal
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
        member={selectedMember}
      />

      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          member={contextMenu.member}
          onClose={() => setContextMenu(null)}
          onViewProfile={(m) => setSelectedMember(m)}
        />
      )}
    </div>
  );
}
