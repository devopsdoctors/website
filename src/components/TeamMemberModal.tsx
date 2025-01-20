import React from 'react';
import { X, Linkedin } from 'lucide-react';
import { useTeamModal } from '../context/TeamModalContext';

export function TeamMemberModal() {
  const { selectedMember, setSelectedMember } = useTeamModal();

  if (!selectedMember) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setSelectedMember(null)}
      />
      <div className="relative bg-white rounded-xl shadow-xl max-w-2xl w-full mx-auto overflow-hidden z-10">
        <button
          onClick={() => setSelectedMember(null)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="flex flex-col md:flex-row">
          <img
            src={selectedMember.image}
            alt={selectedMember.name}
            className="w-full md:w-1/2 h-64 md:h-auto object-cover"
          />
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-2">{selectedMember.name}</h3>
            <p className="text-[#099FC] font-medium mb-4">{selectedMember.role}</p>
            <p className="text-gray-600 mb-6">{selectedMember.bio}</p>
            <a
              href={selectedMember.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#099FC] hover:text-[#041821] transition-colors"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              View LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}