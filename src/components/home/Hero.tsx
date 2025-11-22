import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const sphereY = useTransform(scrollY, [0, 500], [0, -100]);
  const sphereScale = useTransform(scrollY, [0, 500], [1, 1.2]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const sunOpacity = useTransform(scrollY, [0, 300], [0.5, 1]);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50 text-gray-900 flex flex-col items-center justify-center">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{
             backgroundImage: 'linear-gradient(to right, rgb(59, 130, 246) 1px, transparent 1px), linear-gradient(to bottom, rgb(59, 130, 246) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}
      />

      {/* Floating Tech Orbs */}
      <motion.div
        style={{ opacity: sunOpacity }}
        className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-blue-400/20 rounded-full blur-[80px] z-0 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        style={{ opacity: sunOpacity }}
        className="absolute bottom-[20%] left-[15%] w-[250px] h-[250px] bg-purple-400/15 rounded-full blur-[60px] z-0 pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -25, 0],
          y: [0, 15, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Tech Circuit/Node Visualization */}
      <motion.div
        style={{ y: sphereY, scale: sphereScale }}
        className="absolute bottom-[-65vh] md:bottom-[-75vh] left-1/2 transform -translate-x-1/2 w-[150vh] h-[150vh] rounded-full z-10"
      >
        {/* Central Tech Hub */}
        <div className="w-full h-full rounded-full bg-gradient-to-b from-blue-100 via-white to-purple-100 relative overflow-hidden shadow-2xl border-4 border-blue-200/30">
            {/* Tech Glow */}
            <div className="absolute top-0 left-0 right-0 h-[20%] bg-gradient-to-b from-blue-400/30 to-transparent blur-3xl" />

            {/* Hexagonal Tech Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.3),transparent_50%)]" />

            {/* Rotating Data Streams */}
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)'
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
            />
        </div>

        {/* Outer Tech Glow */}
        <div className="absolute -inset-4 bg-gradient-to-t from-transparent via-blue-400/20 to-purple-400/30 rounded-full blur-3xl -z-10" />
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        style={{ y, opacity: textOpacity }}
        className="relative z-20 text-center max-w-4xl px-6 flex flex-col items-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight"
        >
          Technology <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x">engineered for growth.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-10 font-light"
        >
          Your IT consulting partner for cloud infrastructure, DevOps, and modern application development.
          <span className="font-medium text-blue-600"> No hourly billing. No corporate nonsense.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
           <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 group shadow-lg shadow-blue-500/30">
              Start your journey
              <ArrowDown className="group-hover:translate-y-1 transition-transform" size={20} />
           </button>
        </motion.div>
      </motion.div>
    </div>
  );
};
