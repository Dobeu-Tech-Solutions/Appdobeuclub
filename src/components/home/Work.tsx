import React from "react";
import { motion } from "motion/react";

const works = [
  { color: "bg-blue-500", name: "AWS Cloud Migration", tech: "☁️" },
  { color: "bg-indigo-600", name: "Kubernetes Cluster", tech: "⚙️" },
  { color: "bg-purple-500", name: "CI/CD Pipeline", tech: "🚀" },
  { color: "bg-cyan-500", name: "API Gateway", tech: "🔌" },
  { color: "bg-green-500", name: "Database Optimization", tech: "💾" },
  { color: "bg-pink-500", name: "Security Audit", tech: "🔒" },
];

const testimonials = [
  {
    text: "Dobeu migrated our entire infrastructure to AWS with zero downtime. Impressive.",
    author: "Sarah Jenkins, CTO of DataFlow",
    bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
    textColor: "text-gray-900"
  },
  {
    text: "The DevOps automation saved us 40 hours a week. ROI in the first month!",
    author: "Mike Ross, Director of Engineering at Velocity",
    bg: "bg-gradient-to-br from-purple-50 to-pink-50",
    textColor: "text-gray-900"
  },
  {
    text: "Security audit caught vulnerabilities we didn't know existed. Worth every penny.",
    author: "Jessica Lee, CEO of SecureStack",
    bg: "bg-gradient-to-br from-cyan-50 to-blue-50",
    textColor: "text-gray-900"
  }
];

const TechIcon = ({ emoji, className }: { emoji: string; className?: string }) => (
  <div className={`text-6xl ${className}`}>
    {emoji}
  </div>
);

export const Work = () => {
  return (
    <section id="work" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">
          Recent projects <span className="text-blue-400">&</span> <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">client success stories.</span>
        </h2>
      </div>

      {/* Work Marquee */}
      <div className="relative w-full mb-24">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...works, ...works, ...works].map((work, i) => (
              <div
                key={i}
                className={`flex-shrink-0 w-[300px] h-[200px] rounded-2xl ${work.color} flex items-center justify-center relative group overflow-hidden shadow-lg hover:shadow-2xl transition-all`}
              >
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors" />
                <TechIcon emoji={work.tech} className="text-white filter drop-shadow-lg" />
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 drop-shadow-md">
                  {work.name}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className={`p-8 rounded-3xl ${t.bg} ${t.textColor} relative overflow-hidden border-2 border-blue-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                >
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full bg-blue-400/10 blur-2xl" />
                    <p className="text-xl font-medium leading-relaxed mb-8 relative z-10">"{t.text}"</p>
                    <div className="flex items-center gap-3 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400" />
                        <div className="text-sm text-gray-600 font-medium">{t.author}</div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};
