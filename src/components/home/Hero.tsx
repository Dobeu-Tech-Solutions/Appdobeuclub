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
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black text-white flex flex-col items-center justify-center">
      {/* Background Stars/Noise */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

      {/* The "Sun" / Backlight */}
      <motion.div 
        style={{ opacity: sunOpacity }}
        className="absolute bottom-[-20%] left-1/2 transform -translate-x-1/2 w-[120vw] h-[60vh] bg-blue-900/30 rounded-[100%] blur-[100px] z-0 pointer-events-none mix-blend-screen"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        style={{ opacity: sunOpacity }}
        className="absolute bottom-[-10%] left-1/2 transform -translate-x-1/2 w-[80vw] h-[40vh] bg-purple-600/20 rounded-[100%] blur-[80px] z-0 pointer-events-none mix-blend-screen"
      />

      {/* The Abstract Sphere (Earth-like but abstract) */}
      <motion.div
        style={{ y: sphereY, scale: sphereScale }}
        className="absolute bottom-[-65vh] md:bottom-[-75vh] left-1/2 transform -translate-x-1/2 w-[150vh] h-[150vh] rounded-full z-10"
      >
        {/* Sphere Body */}
        <div className="w-full h-full rounded-full bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden shadow-2xl">
            {/* Rim Light */}
            <div className="absolute top-0 left-0 right-0 h-[20%] bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl" />
            
            {/* Surface Texture (Abstract) */}
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_50%)]" />
            
            {/* Rotating/Moving "Atmosphere" */}
            <motion.div 
              className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"
              animate={{ rotate: 360 }}
              transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
            />
        </div>
        
        {/* Outer Glow / Halo */}
        <div className="absolute -inset-4 bg-gradient-to-t from-transparent via-blue-500/10 to-blue-400/30 rounded-full blur-2xl -z-10" />
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
          Tech is your <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 animate-gradient-x">best friend.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 font-light"
        >
          Empowering small to medium businesses with premium tech solutions. 
          No hourly billing. No corporate nonsense.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
           <button className="bg-white text-black hover:bg-gray-200 transition-colors px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 group">
              Start your journey
              <ArrowDown className="group-hover:translate-y-1 transition-transform" size={20} />
           </button>
        </motion.div>
      </motion.div>
    </div>
  );
};
