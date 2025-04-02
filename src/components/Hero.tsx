import React from 'react';
import { Logo } from './Logo';

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-[#A9A9A9]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <Logo className="h-[512px] mb-8" />
          <h1 className="text-5xl font-bold text-[#099FC] mb-6">
            Your Complete DevOps Solution Partner
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl">
            We are your dedicated DevOps team, providing end-to-end infrastructure solutions, 
            high-quality software development, and expert consulting to build scalable, 
            reliable, and secure systems that drive your business forward.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Infrastructure Solutions</h3>
              <p className="text-white/90">
                Design and implement scalable, reliable infrastructure tailored to your needs
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Software Development</h3>
              <p className="text-white/90">
                Build high-quality, maintainable software with modern development practices
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">DevOps Consulting</h3>
              <p className="text-white/90">
                Expert guidance on DevOps practices, automation, and continuous improvement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}