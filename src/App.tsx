import { useState } from 'react'
import './App.css'
import React from 'react';
import { Moon } from 'lucide-react';

// Define the interface for navigation links
interface NavLink {
  label: string;
  href: string;
}

// Define the links for the navigation bar
const navLinks: NavLink[] = [
  { label: 'SERVICES', href: '#' },
  { label: 'WORK', href: '#' },
  { label: 'PRICING', href: '#' },
  { label: 'FAQ', href: '#' },
];

// Navbar Component
const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 px-4 py-2 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-800">
      {/* Profile Image */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500/50">
        <img
          src="https://cdn.midjourney.com/546986c1-7e84-4c88-806c-77656867251c/0/0.png"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center gap-6 text-sm font-medium text-zinc-400">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Dark Mode Toggle & Contact Button */}
      <div className="flex items-center gap-4">
        <button className="text-zinc-400 hover:text-white transition-colors" aria-label="Toggle Dark Mode">
          <Moon size={18} />
        </button>
        <a
          href="#"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded-full transition-colors"
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection: React.FC = () => {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center select-none z-0 pointer-events-none">
        <h1 className="text-[12rem] font-bold text-zinc-800/50 tracking-tighter whitespace-nowrap">
          URO® ALURO® ALU
        </h1>
      </div>

      {/* Central Image */}
      <div className="relative z-10 p-1 rounded-3xl bg-gradient-to-b from-blue-500/20 to-transparent">
        <div className="rounded-2xl overflow-hidden border-4 border-blue-500/10">
          <img
            src="https://cdn.midjourney.com/546986c1-7e84-4c88-806c-77656867251c/0/0.png"
            alt="Man in blue suit"
            className="w-[28rem] h-[36rem] object-cover"
          />
        </div>
      </div>

      {/* Subtitle */}
      <p className="relative z-10 mt-12 text-center text-zinc-500 text-sm font-medium tracking-wide">
        DESIGNING QUIET, CONFIDENT
        <br />
        DIGITAL EXPERIENCES
      </p>
    </main>
  );
};

// Main Page Component
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default HomePage;