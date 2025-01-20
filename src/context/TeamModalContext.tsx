import React, { createContext, useContext, useState } from 'react';
import { TeamMember } from '../types';

interface TeamModalContextType {
  selectedMember: TeamMember | null;
  setSelectedMember: (member: TeamMember | null) => void;
}

const TeamModalContext = createContext<TeamModalContextType | undefined>(undefined);

export function TeamModalProvider({ children }: { children: React.ReactNode }) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <TeamModalContext.Provider value={{ selectedMember, setSelectedMember }}>
      {children}
    </TeamModalContext.Provider>
  );
}

export function useTeamModal() {
  const context = useContext(TeamModalContext);
  if (context === undefined) {
    throw new Error('useTeamModal must be used within a TeamModalProvider');
  }
  return context;
}