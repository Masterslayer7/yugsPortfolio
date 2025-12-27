import React from "react";
import profilePic from "../assets/IMG_8956-Enhanced-NR.jpg";
import { motion } from "framer-motion";
import PhotoCard from './PhotoCard';

const MarqueeGroup = () => (
  <div className="flex shrink-0 items-center gap-20 px-10">
    <h1 className="text-[12rem] font-bold text-zinc-800/50 tracking-tighter">
      Yug Patel
    </h1>
    <h1 className="text-[12rem] font-bold text-zinc-800/50 tracking-tighter">
      Yug Patel
    </h1>
    <h1 className="text-[12rem] font-bold text-zinc-800/50 tracking-tighter">
      Yug Patel
    </h1>
    <h1 className="text-[12rem] font-bold text-zinc-800/50 tracking-tighter">
      Yug Patel
    </h1>
  </div>
);

const HeroSection: React.FC = () => {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4">
      
      {/* Background Text - The "Parallax" Element */}
      <div className="absolute inset-0 flex items-center select-none z-0 pointer-events-none">
        {/* The Moving "Conveyor Belt" */}
        <motion.div
          className="flex whitespace-nowrap"
          // 1. Define the animation loop
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity, // Loop forever
            ease: "linear", // Smooth, constant speed
            duration: 50, // Adjust speed: higher = slower
          }}
        >
          <MarqueeGroup />
          <MarqueeGroup />
        </motion.div>
      </div>

      {/* Central Image Card */}
      <div className="relative z-10 p-1 rounded-3xl bg-gradient-to-b from-blue-500/20 to-transparent">
        <PhotoCard className="w-[28rem] h-[36rem]"> 
           <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-blue-500/10 bg-zinc-900">
              <img
                src={profilePic}
                alt="Man in blue suit"
                className="w-full h-full object-cover"
              />
           </div>
        </PhotoCard>
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
