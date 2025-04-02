import React from 'react';
import { TechCategory } from './TechCategory';
import { 
  containerization, 
  infrastructure, 
  cicd, 
  monitoring, 
  databases, 
  clouds, 
  privateCloud,
  messageBrokers,
  foundations 
} from '../data/technologies';

export function TechStack() {
  return (
    <section id="technologies" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Technology Stack</h2>
          <p className="text-lg text-gray-600">
            We leverage cutting-edge technologies to build robust, scalable, and secure infrastructure solutions. 
            Our expertise spans across various domains of modern DevOps practices.
          </p>
        </div>
        
        <div className="relative">
          {/* Surrounding Categories */}
          <div className="grid grid-cols-3 gap-12 relative">
            {/* Top Row */}
            <div className="col-span-3 flex justify-center space-x-12">
              <div className="w-72">
                <TechCategory title="Containerization" technologies={containerization.slice(0, 3)} />
              </div>
              <div className="w-72">
                <TechCategory title="Infrastructure" technologies={infrastructure.slice(0, 3)} />
              </div>
              <div className="w-72">
                <TechCategory title="CI/CD" technologies={cicd.slice(0, 3)} />
              </div>
            </div>

            {/* Middle Row */}
            <div className="col-span-3 flex justify-center space-x-12 mt-12">
              <div className="w-72">
                <TechCategory title="Monitoring" technologies={monitoring.slice(0, 3)} />
              </div>
              {/* Central Cloud Platform */}
              <div className="w-72">
                <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-500 
                  hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-bold text-blue-600 mb-6">Cloud Platforms</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {clouds.slice(0, 4).map((cloud) => (
                      <div key={cloud.name} className="flex items-center space-x-2 p-2 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
                        <img src={cloud.logo} alt={cloud.name} className="w-8 h-8 object-contain" />
                        <span className="text-sm font-medium text-gray-700 truncate">{cloud.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-72">
                <TechCategory title="Message Brokers" technologies={messageBrokers.slice(0, 3)} />
              </div>
            </div>

            {/* Bottom Row */}
            <div className="col-span-3 flex justify-center space-x-12 mt-12">
              <div className="w-72">
                <TechCategory title="Private Cloud" technologies={privateCloud.slice(0, 3)} />
              </div>
              <div className="w-72">
                <TechCategory title="Databases" technologies={databases.slice(0, 3)} />
              </div>
              <div className="w-72">
                <TechCategory title="Industry Standards" technologies={foundations.slice(0, 3)} />
              </div>
            </div>
          </div>

          {/* Connecting Lines */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                  refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6"/>
                </marker>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2"/>
                  <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2"/>
                </linearGradient>
              </defs>
              
              {/* Cloud Platform Connections */}
              <g className="cloud-connections">
                {/* Containerization to Cloud */}
                <path
                  d="M 50% 50% L 25% 25%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                {/* Infrastructure to Cloud */}
                <path
                  d="M 50% 50% L 50% 25%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                {/* CI/CD to Cloud */}
                <path
                  d="M 50% 50% L 75% 25%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                {/* Monitoring to Cloud */}
                <path
                  d="M 50% 50% L 25% 50%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                {/* Message Brokers to Cloud */}
                <path
                  d="M 50% 50% L 75% 50%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                {/* Private Cloud to Cloud */}
                <path
                  d="M 50% 50% L 25% 75%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                {/* Databases to Cloud */}
                <path
                  d="M 50% 50% L 50% 75%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                {/* Standards to Cloud */}
                <path
                  d="M 50% 50% L 75% 75%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
              </g>

              {/* Inter-category Connections */}
              <g className="category-connections">
                {/* Containerization to Infrastructure */}
                <path
                  d="M 25% 25% L 50% 25%"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  fill="none"
                />
                {/* Infrastructure to CI/CD */}
                <path
                  d="M 50% 25% L 75% 25%"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  fill="none"
                />
                {/* Monitoring to Cloud */}
                <path
                  d="M 25% 50% L 50% 50%"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  fill="none"
                />
                {/* Cloud to Message Brokers */}
                <path
                  d="M 50% 50% L 75% 50%"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  fill="none"
                />
                {/* Private Cloud to Databases */}
                <path
                  d="M 25% 75% L 50% 75%"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  fill="none"
                />
                {/* Databases to Standards */}
                <path
                  d="M 50% 75% L 75% 75%"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  fill="none"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}