import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4">
      {/* Background Text - The "Parallax" Element */}
      <div className="absolute inset-0 flex items-center justify-center select-none z-0 pointer-events-none">
        <h1 className="text-[12rem] font-bold text-zinc-800/50 tracking-tighter whitespace-nowrap">
          URO® ALURO® ALU
        </h1>
      </div>

      {/* Central Image Card */}
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

export default HeroSection;