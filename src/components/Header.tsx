import React from 'react';
import { Menu } from 'lucide-react';
import { NavLink } from './NavLink';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="fixed w-full bg-[#A9A9A9]/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Logo className="h-20" />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#technologies">Technologies</NavLink>
            <NavLink href="#team">Team</NavLink>
            <NavLink href="#clients">Clients</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <button className="md:hidden">
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}