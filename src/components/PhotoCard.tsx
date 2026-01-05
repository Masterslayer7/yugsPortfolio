import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const PhotoCard = ({ children, className }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  // 1. Motion Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 2. Spring Physics for background bubble (slower, more relaxed)
  const xSpring = useSpring(x, { stiffness: 200, damping: 25 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 25 });

  // 3. Spring Physics for inner image (faster, more responsive)
  const xImageSpring = useSpring(x, { stiffness: 400, damping: 35 });
  const yImageSpring = useSpring(y, { stiffness: 400, damping: 35 });

  // 4. Transform mouse position to Rotation for main container
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // 5. Transform mouse position to Translation for inner image
  const translateX = useTransform(xImageSpring, [-0.5, 0.5], ["-20px", "20px"]);
  const translateY = useTransform(yImageSpring, [-0.5, 0.5], ["-20px", "20px"]);

  // 6. Extra springs for background layers (staggered stiffness for "lag" effect)
  // Layer 1 (Closest to back)
  const xLayer1 = useSpring(x, { stiffness: 150, damping: 20 });
  const yLayer1 = useSpring(y, { stiffness: 150, damping: 20 });
  // Layer 2
  const xLayer2 = useSpring(x, { stiffness: 100, damping: 20 });
  const yLayer2 = useSpring(y, { stiffness: 100, damping: 20 });
  // Layer 3 (Furthest/Biggest)
  const xLayer3 = useSpring(x, { stiffness: 50, damping: 20 });
  const yLayer3 = useSpring(y, { stiffness: 50, damping: 20 });

  // Transforms for layers (move opposite to mouse slightly)
  const layer1X = useTransform(xLayer1, [-0.5, 0.5], ["15px", "-15px"]);
  const layer1Y = useTransform(yLayer1, [-0.5, 0.5], ["15px", "-15px"]);
  
  const layer2X = useTransform(xLayer2, [-0.5, 0.5], ["25px", "-25px"]);
  const layer2Y = useTransform(yLayer2, [-0.5, 0.5], ["25px", "-25px"]);

  const layer3X = useTransform(xLayer3, [-0.5, 0.5], ["35px", "-35px"]);
  const layer3Y = useTransform(yLayer3, [-0.5, 0.5], ["35px", "-35px"]);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      const xPct = e.clientX / window.innerWidth - 0.5;
      const yPct = e.clientY / window.innerHeight - 0.5;
      x.set(xPct);
      y.set(yPct);
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, [x, y]);

  // Entrance Animation Variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const layerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      onMouseEnter={() => {}} 
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative transition-all duration-200 ease-out ${className}`}
    >
      {/* Dynamic Background Layers with Glassmorphism & Noise */}
      
      {/* Biggest/Darkest (Furthest back) */}
      <motion.div 
        variants={layerVariants}
        style={{ x: layer3X, y: layer3Y, z: -30 }}
        className="absolute inset-0 -z-30 rounded-3xl bg-blue-900/40 backdrop-blur-sm border border-white/5 transform scale-110 shadow-2xl"
      >
        <div className="absolute inset-0 bg-noise opacity-20 rounded-3xl" />
      </motion.div>
      
      {/* Medium/Darker */}
      <motion.div 
        variants={layerVariants}
        style={{ x: layer2X, y: layer2Y, z: -20 }}
        className="absolute inset-0 -z-20 rounded-3xl bg-blue-700/40 backdrop-blur-md border border-white/10 transform scale-105 shadow-xl"
      >
        <div className="absolute inset-0 bg-noise opacity-20 rounded-3xl" />
      </motion.div>

       {/* Smallest/Lighter */}
      <motion.div 
        variants={layerVariants}
        style={{ x: layer1X, y: layer1Y, z: -10 }}
        className="absolute inset-0 -z-10 rounded-3xl bg-blue-500/30 backdrop-blur-md border border-white/20 shadow-lg"
      >
        <div className="absolute inset-0 bg-noise opacity-20 rounded-3xl" />
      </motion.div>




      {/* Inner image that moves independently */}
      <motion.div
        variants={layerVariants}
        style={{
          translateX,
          translateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full flex items-center justify-center relative z-10"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default PhotoCard;