'use client';

import React, { createContext, useContext, useState } from 'react';
import { Member, DUMMY_MEMBERS } from '@/data/membersData';

interface AuthContextType {
  user: Member | null;
  isAuthenticated: boolean;
  login: (memberId: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Member | null>(DUMMY_MEMBERS[0]);

  const login = (memberId: string) => {
    const found = DUMMY_MEMBERS.find(m => m.id.toLowerCase() === memberId.toLowerCase() || m.email.toLowerCase() === memberId.toLowerCase());
    if (found) {
      setUser(found);
      return true;
    }
    setUser(DUMMY_MEMBERS[0]);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
