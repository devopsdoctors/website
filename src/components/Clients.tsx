import React from 'react';

const clients = [
  {
    name: "Mazand Chand",
    logo: "https://mazanechand1.com/static/img/mazane-chand-logo.svg",
    url: "https://mazanechand1.com"
  },
  {
    name: "Reza Gold",
    logo: "https://raazgold.com/static/img/raaz-logo.png",
    url: "https://raazgold.com"
  },
  {
    name: "Fiza",
    logo: "https://fiza.store/wp-content/uploads/2024/09/logo.jpg-1.webp",
    url: "https://fiza.store"
  },
  {
    name: "ArvanCloud",
    logo: "https://www.arvancloud.ir/images/v6/svg/logo-header-desktop-v6.svg",
    url: "https://www.arvancloud.ir"
  }
];

export function Clients() {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Our Trusted Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full aspect-[3/2] transition-transform hover:scale-105"
            >
              <div className="w-full h-full flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="w-full h-full relative">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="absolute inset-0 w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all p-4"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}