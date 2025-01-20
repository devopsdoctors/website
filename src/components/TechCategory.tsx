import React from 'react';
import { Technology } from '../types';

interface TechCategoryProps {
  title: string;
  technologies: Technology[];
}

export function TechCategory({ title, technologies }: TechCategoryProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-8">
      <h3 className="text-2xl font-semibold mb-6">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <img src={tech.logo} alt={tech.name} className="h-12 w-12 object-contain mb-3" />
            <span className="text-sm font-medium text-gray-700">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}