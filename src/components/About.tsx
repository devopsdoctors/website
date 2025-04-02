import React from 'react';
import { Shield, Users, Rocket, Globe, Code, Server, GitBranch, Zap } from 'lucide-react';

export function About() {
  const services = [
    {
      icon: Server,
      title: 'Infrastructure Design & Implementation',
      description: 'We design and build scalable, reliable infrastructure solutions tailored to your specific needs. From cloud migration to container orchestration, we handle it all.'
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Our team develops high-quality, maintainable software using modern practices and technologies. We focus on clean code, testing, and continuous integration.'
    },
    {
      icon: GitBranch,
      title: 'DevOps & Automation',
      description: 'We implement comprehensive DevOps practices, including CI/CD pipelines, infrastructure as code, and automated testing to streamline your development process.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'We ensure your systems are secure and compliant with industry standards. From security audits to implementing best practices, we protect your infrastructure.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'We optimize your systems for maximum performance and efficiency. Our team identifies bottlenecks and implements solutions to improve your infrastructure.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'We work closely with your team, providing training and support to ensure smooth integration and knowledge transfer.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Your DevOps Partner</h2>
          <p className="text-lg text-gray-600">
            DevOps Doctors is your dedicated team of experts who handle everything you need in the DevOps space. 
            We focus on building scalable, reliable infrastructure and developing high-quality software using 
            modern practices. Whether you need infrastructure solutions, software development, or expert consulting, 
            we're here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}