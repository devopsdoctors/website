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
    <section id="technologies" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Our Technology Stack</h2>
        <div className="space-y-16">
          <TechCategory title="Containerization" technologies={containerization} />
          <TechCategory title="Infrastructure Automation" technologies={infrastructure} />
          <TechCategory title="CI/CD Pipeline" technologies={cicd} />
          <TechCategory title="Monitoring & Logging" technologies={monitoring} />
          <TechCategory title="Databases" technologies={databases} />
          <TechCategory title="Cloud Providers" technologies={clouds} />
          <TechCategory title="Private Cloud Solutions" technologies={privateCloud} />
          <TechCategory title="Message Brokers" technologies={messageBrokers} />
          <TechCategory title="Foundations" technologies={foundations} />
        </div>
      </div>
    </section>
  );
}