import React from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/heroSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <HeroSection />
      
      {/* This is where we will eventually add:
        <ProjectsGrid />
        <AboutSection />
      */}
    </div>
  );
};

export default App;