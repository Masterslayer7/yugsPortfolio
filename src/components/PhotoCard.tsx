import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const TiltCard = ({ children, className }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  // 1. Track Mouse Position (0 = center, -0.5 = left/top, 0.5 = right/bottom)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 2. Smooth out the mouse movements (Spring Physics)
  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  // 3. Map mouse position to Rotation Degrees
  // Note: Moving mouse Y (up/down) rotates around the X axis
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate position relative to center (range: -0.5 to 0.5)
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    // Reset to center when mouse leaves
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d", // Crucial for 3D effect
      }}
      className={`relative transition-all duration-200 ease-out ${className}`}
    >
      {/* This is a "Gloss" effect (shiny reflection). 
        It moves opposite to the rotation to simulate light.
      */}
      <div
        style={{
          transform: "translateZ(50px)", // Float above the card
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
          {children}
      </div>
    </motion.div>
  );
};

export default TiltCard;