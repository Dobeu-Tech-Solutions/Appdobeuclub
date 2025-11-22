import React from "react";
import { motion } from "motion/react";

const techStack = [
  { name: "AWS", color: "from-orange-400 to-orange-600", icon: "☁️" },
  { name: "Docker", color: "from-blue-400 to-blue-600", icon: "🐳" },
  { name: "Kubernetes", color: "from-indigo-400 to-indigo-600", icon: "⎈" },
  { name: "React", color: "from-cyan-400 to-cyan-600", icon: "⚛️" },
  { name: "Node.js", color: "from-green-400 to-green-600", icon: "🟢" },
  { name: "PostgreSQL", color: "from-blue-500 to-blue-700", icon: "🐘" },
  { name: "MongoDB", color: "from-green-500 to-green-700", icon: "🍃" },
  { name: "TypeScript", color: "from-blue-400 to-blue-600", icon: "TS" },
  { name: "Python", color: "from-yellow-400 to-yellow-600", icon: "🐍" },
  { name: "GraphQL", color: "from-pink-400 to-pink-600", icon: "◈" },
  { name: "Redis", color: "from-red-400 to-red-600", icon: "⚡" },
  { name: "Terraform", color: "from-purple-400 to-purple-600", icon: "🏗️" },
];

export const TechStack = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]"
           style={{
             backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)',
             backgroundSize: '32px 32px'
           }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Our Tech Stack
            </span>
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We work with modern, battle-tested technologies to build scalable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                delay: index * 0.05,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ scale: 1.1, y: -8, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-br ${tech.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group`}
            >
              <div className="text-center">
                <div className="text-4xl mb-2 filter drop-shadow-md group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <div className="text-white font-bold text-sm drop-shadow-md">
                  {tech.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 right-40 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};
