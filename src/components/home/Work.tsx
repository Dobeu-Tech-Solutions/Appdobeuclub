import React from "react";
import { motion } from "motion/react";

const works = [
  { color: "bg-yellow-400", name: "Fintech App" },
  { color: "bg-blue-500", name: "Health Dashboard" },
  { color: "bg-purple-500", name: "SaaS Platform" },
  { color: "bg-pink-500", name: "Social Network" },
  { color: "bg-green-400", name: "E-commerce" },
  { color: "bg-orange-500", name: "Booking System" },
];

const testimonials = [
  {
    text: "Dobeu completely transformed our MVP into a scalable product.",
    author: "Sarah Jenkins, CEO of TechFlow",
    bg: "bg-neutral-900"
  },
  {
    text: "The subscription model is a game changer. No more invoices!",
    author: "Mike Ross, Founder of Specter",
    bg: "bg-blue-900"
  },
  {
    text: "Insane quality. We replaced our entire design team with Dobeu.",
    author: "Jessica Lee, CTO of Bright",
    bg: "bg-purple-900"
  }
];

const Smiley = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={`w-12 h-12 ${className}`}>
    <rect width="40" height="40" rx="20" fill="currentColor" fillOpacity="0.2" />
    <path d="M12 16C12 16 13 18 14 18C15 18 16 16 16 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M24 16C24 16 25 18 26 18C27 18 28 16 28 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M14 26C14 26 18 30 20 30C22 30 26 26 26 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const Work = () => {
  return (
    <section id="work" className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">
          Recent work <span className="text-gray-600">&</span> <br/>
          happy partners.
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
                className={`flex-shrink-0 w-[300px] h-[200px] rounded-2xl ${work.color} flex items-center justify-center relative group overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                <Smiley className="text-black" />
                <div className="absolute bottom-4 left-4 text-black font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
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
                    className={`p-8 rounded-3xl ${t.bg} relative overflow-hidden`}
                >
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full bg-white/5 blur-2xl" />
                    <p className="text-xl font-medium leading-relaxed mb-8">"{t.text}"</p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-500 animate-pulse" />
                        <div className="text-sm text-gray-400">{t.author}</div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};
