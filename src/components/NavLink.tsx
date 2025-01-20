import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-white hover:text-[#099FC] transition-colors font-medium"
    >
      {children}
    </a>
  );
}