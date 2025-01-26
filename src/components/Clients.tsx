import React from 'react';

export function Clients() {
  const clients = [
    {
      name: 'Mazan Echand',
      url: 'https://mazanechand1.com/',
      description: 'Leading provider of innovative solutions'
    },
    {
      name: 'Raaz Gold',
      url: 'https://raazgold.com/',
      description: 'Premium jewelry and precious metals'
    },
    {
      name: 'Fiza Store',
      url: 'https://fiza.store/',
      description: 'Modern e-commerce platform'
    },
    {
      name: 'ArvanCloud',
      url: 'https://www.arvancloud.com/',
      description: 'Cloud infrastructure and CDN services'
    }
  ];

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Our Trusted Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2 text-[#099FC] group-hover:text-[#041821] transition-colors">
                  {client.name}
                </h3>
                <p className="text-gray-600 text-sm">{client.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}