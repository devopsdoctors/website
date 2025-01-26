import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Process } from './components/Process';
import { Team } from './components/Team';
import { Clients } from './components/Clients';
import { Contact } from './components/Contact';
import { TeamModalProvider } from './context/TeamModalContext';
import { TeamMemberModal } from './components/TeamMemberModal';

function App() {
  return (
    <TeamModalProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Process />
          <TechStack />
          <Team />
          <Contact />
        </main>
        <TeamMemberModal />
      </div>
    </TeamModalProvider>
  );
}

export default App;