import React from 'react';
import { ClipboardList, Map, Play, Headphones } from 'lucide-react';

export function Process() {
  const steps = [
    { icon: ClipboardList, title: 'Plan', description: 'Analyze requirements and create detailed implementation plans' },
    { icon: Map, title: 'Create Roadmap', description: 'Design scalable architecture and technology stack' },
    { icon: Play, title: 'Execute', description: 'Implement solutions with best practices and industry standards' },
    { icon: Headphones, title: 'Support', description: '24/7 monitoring and maintenance of your infrastructure' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <step.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}