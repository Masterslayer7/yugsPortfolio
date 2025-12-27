import React from 'react';
import { Moon } from 'lucide-react';
import { NAV_LINKS } from '../constants/navLinks';

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
        {NAV_LINKS.map((link) => (
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
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded-full transition-colors"
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;