import React from 'react';
import { ClipboardList, Map, Play, Headphones, GitBranch, Shield, Zap, Users } from 'lucide-react';

export function Process() {
  const phases = [
    {
      icon: ClipboardList,
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, assess current infrastructure, and create a comprehensive plan tailored to your needs.',
      steps: [
        'Requirements Analysis',
        'Infrastructure Assessment',
        'Technology Selection',
        'Implementation Strategy'
      ]
    },
    {
      icon: GitBranch,
      title: 'Development & Implementation',
      description: 'Our team develops and implements solutions using modern DevOps practices and cutting-edge technologies.',
      steps: [
        'Infrastructure Setup',
        'Software Development',
        'CI/CD Pipeline',
        'Security Implementation'
      ]
    },
    {
      icon: Shield,
      title: 'Quality & Security',
      description: 'We ensure your systems are secure, compliant, and meet the highest quality standards.',
      steps: [
        'Security Audits',
        'Performance Testing',
        'Compliance Checks',
        'Code Quality Review'
      ]
    },
    {
      icon: Zap,
      title: 'Optimization & Support',
      description: 'We continuously optimize your systems and provide ongoing support to ensure peak performance.',
      steps: [
        'Performance Optimization',
        '24/7 Monitoring',
        'Regular Updates',
        'Technical Support'
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Comprehensive Approach</h2>
          <p className="text-lg text-gray-600">
            We follow a systematic process to deliver exceptional DevOps solutions, 
            ensuring your infrastructure is scalable, secure, and efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {phases.map((phase, index) => (
            <div key={phase.title} className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <phase.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                    <p className="text-gray-600 mb-6">{phase.description}</p>
                    <ul className="space-y-3">
                      {phase.steps.map((step) => (
                        <li key={step} className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {index < phases.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-blue-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}