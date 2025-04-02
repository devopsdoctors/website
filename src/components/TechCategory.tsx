import React from 'react';
import { Technology } from '../types';

interface TechCategoryProps {
  title: string;
  technologies: Technology[];
}

export function TechCategory({ title, technologies }: TechCategoryProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 
      hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
      <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <div className="space-y-4">
        {technologies.map((tech) => (
          <div 
            key={tech.name} 
            className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors group/item"
          >
            <div className="relative">
              <img 
                src={tech.logo} 
                alt={tech.name} 
                className="w-8 h-8 object-contain filter grayscale group-hover/item:grayscale-0 transition-all" 
              />
              <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover/item:opacity-10 transition-opacity" />
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover/item:text-blue-600 transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}