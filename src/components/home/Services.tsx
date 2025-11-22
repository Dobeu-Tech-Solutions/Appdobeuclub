import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "../ui/card";
import { Cloud, GitBranch, Code2, Database, Shield, Server, Boxes, Cpu } from "lucide-react";

const services = [
  { title: "Cloud Infrastructure", icon: <Cloud className="w-6 h-6" /> },
  { title: "DevOps & CI/CD", icon: <GitBranch className="w-6 h-6" /> },
  { title: "Full-Stack Development", icon: <Code2 className="w-6 h-6" /> },
  { title: "Database Solutions", icon: <Database className="w-6 h-6" /> },
  { title: "Security & Compliance", icon: <Shield className="w-6 h-6" /> },
  { title: "API Development", icon: <Server className="w-6 h-6" /> },
  { title: "Microservices", icon: <Boxes className="w-6 h-6" /> },
  { title: "System Architecture", icon: <Cpu className="w-6 h-6" /> },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-white text-gray-900 rounded-t-[3rem] -mt-10 relative z-40 border-t-4 border-blue-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            Unlimited tech support. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              One flat monthly fee.
            </span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your dedicated IT consulting team. Submit as many tech requests as you need. We deliver solutions efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Subscribe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-500 to-indigo-600 p-8 h-[500px] flex flex-col justify-between text-white shadow-xl shadow-blue-500/20"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <Cloud size={120} />
            </div>
            <div className="relative z-10 mt-10">
                {/* Abstract card representation */}
                <div className="bg-white text-gray-900 p-6 rounded-xl shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-500 border-2 border-blue-200">
                    <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">Tech Support Club</div>
                    <div className="text-4xl font-bold mb-4">$4,995<span className="text-lg font-normal text-gray-500">/mo</span></div>
                    <div className="space-y-2 text-sm text-gray-700">
                        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"/> Unlimited tech requests</div>
                        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"/> Avg. 48 hour turnaround</div>
                        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"/> Pause or cancel anytime</div>
                    </div>
                    <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2 rounded-lg text-sm font-bold transition-all shadow-md">
                        Join today
                    </button>
                </div>
            </div>
            <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-2">Subscribe</h3>
                <p className="font-medium opacity-90">Subscribe to a plan & submit unlimited technology requests.</p>
            </div>
          </motion.div>

          {/* Card 2: Request */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-purple-500 to-pink-600 p-8 h-[500px] flex flex-col justify-between text-white shadow-xl shadow-purple-500/20"
          >
             <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="grid grid-cols-2 gap-3 transform -rotate-12 scale-110">
                    {services.slice(0, 6).map((s, i) => (
                        <div key={i} className="bg-white/20 backdrop-blur-md p-2 rounded-lg text-xs whitespace-nowrap flex items-center gap-1">
                            {s.icon}
                            <span className="hidden md:inline">{s.title}</span>
                        </div>
                    ))}
                </div>
             </div>

            <div className="relative z-10 flex-1 flex items-center justify-center">
                 <div className="w-24 h-24 bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                    <Code2 className="text-purple-600 w-10 h-10" />
                 </div>
            </div>

            <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-2">Request</h3>
                <p className="font-medium opacity-90">Request cloud deployments, API builds, security audits, and more.</p>
            </div>
          </motion.div>

          {/* Card 3: Receive */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-500 to-blue-600 p-8 h-[500px] flex flex-col justify-between text-white shadow-xl shadow-cyan-500/20"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <Server size={120} />
            </div>

            <div className="relative z-10 flex-1 flex items-center justify-center">
                <div className="relative">
                    <div className="absolute top-0 left-0 bg-white text-gray-900 p-4 rounded-xl shadow-xl transform -rotate-6 z-10 w-48 border border-gray-200">
                        <div className="text-xs font-mono text-green-600 mb-2">✓ Build successful</div>
                        <div className="h-16 bg-gradient-to-br from-green-50 to-blue-50 rounded mb-2 flex items-center justify-center text-2xl">🚀</div>
                    </div>
                     <div className="absolute top-4 left-8 bg-gray-900 text-white p-4 rounded-xl shadow-xl transform rotate-6 z-20 w-48 border border-gray-700">
                        <div className="text-xs font-mono text-cyan-400 mb-2">$ deploy --prod</div>
                        <div className="h-16 bg-gray-800 rounded mb-2 font-mono text-xs text-green-400 flex items-center p-2">Deployed ✓</div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 mt-20">
                <h3 className="text-3xl font-bold mb-2">Deploy</h3>
                <p className="font-medium opacity-90">Receive your tech solution deployed and ready within 48 hours.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
