import React from 'react';
import { Shield, Users, Rocket, Globe } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We deliver robust and secure infrastructure solutions that you can depend on.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs and challenges.'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'We stay at the forefront of technology to provide cutting-edge solutions.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'We serve clients worldwide with scalable infrastructure solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">About DevOpsDoctors</h2>
          <p className="text-lg text-gray-600">
            We are a team of passionate infrastructure and cloud experts dedicated to helping businesses 
            build and maintain robust, scalable, and efficient IT systems. With years of experience in 
            enterprise solutions, we bring expertise and innovation to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="bg-gray-50 p-6 rounded-xl">
              <div className="bg-cyan-100 p-3 rounded-lg w-fit mb-4">
                <value.icon className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}