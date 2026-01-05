import React from "react";
import profilePic from "../assets/IMG_8956-Enhanced-NR.jpg";
import { motion } from "framer-motion";
import PhotoCard from './PhotoCard';

const MarqueeGroup = () => {
  const marqueeTextClass = "text-[8vw] max:text-[12rem] min:text-[4rem] font-bold text-zinc-800/50 tracking-tighter";
  return (
    <div className="flex shrink-0 items-center gap-10 px-5">
      {[...Array(4)].map((_, i) => (
        <h1 key={i} className={marqueeTextClass}>
          Yug Patel
        </h1>
      ))}
    </div>
  );
};

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
      <div className="relative z-10">
        <PhotoCard className="w-[25vw] h-[35vw] max-w-[30rem] max-h-[38rem] min-w-[20rem] min-h-[28rem] rounded-3xl flex items-center justify-center"> 
           {/* 
             TO CHANGE BLUE BACKGROUND SIZE:
             - Blue background scales with viewport (25vw × 35vw)
             - Has min/max sizes for responsiveness
             - Image container below is slightly smaller (23vw × 33vw)
           */}
           <div className="w-[23vw] h-[33vw] max-w-[28rem] max-h-[36rem] min-w-[18rem] min-h-[26rem] rounded-2xl overflow-hidden border-4 border-blue-500/10 bg-zinc-900 flex items-center justify-center">
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
