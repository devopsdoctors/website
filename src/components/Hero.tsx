import React from 'react';
import { Logo } from './Logo';

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-[#A9A9A9]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <Logo className="h-[512px] mb-8" />
          <h1 className="text-5xl font-bold text-[#099FC] mb-6">
            Enterprise Infrastructure & Cloud Solutions
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            We help organizations build, manage, and optimize their infrastructure with cutting-edge technologies and best practices.
          </p>
        </div>
      </div>
    </section>
  );
}