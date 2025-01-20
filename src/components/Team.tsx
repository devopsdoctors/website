import React from 'react';
import { Linkedin } from 'lucide-react';
import { teamMembers } from '../data/team';
import { useTeamModal } from '../context/TeamModalContext';

export function Team() {
  const { setSelectedMember } = useTeamModal();

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div 
              key={member.name} 
              className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer transform hover:scale-105 transition-transform"
              onClick={() => setSelectedMember(member)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-[#099FC] text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-xs mb-3 line-clamp-2">{member.bio}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(member.linkedin, '_blank');
                  }}
                  className="inline-flex items-center text-[#099FC] hover:text-[#041821] transition-colors text-sm"
                >
                  <Linkedin className="h-4 w-4 mr-1" />
                  LinkedIn
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}