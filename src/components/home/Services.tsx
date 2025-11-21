import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "../ui/card";
import { Smartphone, Monitor, PenTool, Layers, Zap, Search } from "lucide-react";

const services = [
  { title: "Web Apps", icon: <Monitor className="w-6 h-6" /> },
  { title: "Mobile Apps", icon: <Smartphone className="w-6 h-6" /> },
  { title: "UI/UX Design", icon: <PenTool className="w-6 h-6" /> },
  { title: "Branding", icon: <Layers className="w-6 h-6" /> },
  { title: "Automation", icon: <Zap className="w-6 h-6" /> },
  { title: "SEO", icon: <Search className="w-6 h-6" /> },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-black text-white rounded-t-[3rem] -mt-10 relative z-40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            Unlimited requests. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              One flat fee.
            </span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your virtual design and dev team. Submit as many requests as you want. We knock them out one by one.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Subscribe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-yellow-400 to-orange-500 p-8 h-[500px] flex flex-col justify-between text-black"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20">
               <Zap size={120} />
            </div>
            <div className="relative z-10 mt-10">
                {/* Abstract card representation */}
                <div className="bg-black/90 text-white p-6 rounded-xl shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-500">
                    <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">Monthly Club</div>
                    <div className="text-4xl font-bold mb-4">$4,995<span className="text-lg font-normal text-gray-500">/mo</span></div>
                    <div className="space-y-2 text-sm text-gray-300">
                        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"/> One request at a time</div>
                        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"/> Avg. 48 hour delivery</div>
                        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"/> Pause or cancel anytime</div>
                    </div>
                    <button className="w-full mt-6 bg-orange-600 hover:bg-orange-500 text-white py-2 rounded-lg text-sm font-bold transition-colors">
                        Join today
                    </button>
                </div>
            </div>
            <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-2">Subscribe</h3>
                <p className="font-medium opacity-90">Subscribe to a plan & request as many designs as you'd like.</p>
            </div>
          </motion.div>

          {/* Card 2: Request */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-500 to-indigo-600 p-8 h-[500px] flex flex-col justify-between text-white"
          >
             <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="grid grid-cols-2 gap-4 transform -rotate-12 scale-110">
                    {services.map((s, i) => (
                        <div key={i} className="bg-white/20 backdrop-blur-md p-3 rounded-lg text-xs whitespace-nowrap">
                            {s.title}
                        </div>
                    ))}
                </div>
             </div>

            <div className="relative z-10 flex-1 flex items-center justify-center">
                 <div className="w-24 h-24 bg-black rounded-2xl shadow-2xl flex items-center justify-center">
                    <PenTool className="text-white w-10 h-10" />
                 </div>
            </div>

            <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-2">Request</h3>
                <p className="font-medium opacity-90">Request whatever you'd like, from mobile apps to logos.</p>
            </div>
          </motion.div>

          {/* Card 3: Receive */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-red-500 to-pink-600 p-8 h-[500px] flex flex-col justify-between text-white"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20">
               <Smartphone size={120} />
            </div>
            
            <div className="relative z-10 flex-1 flex items-center justify-center">
                <div className="relative">
                    <div className="absolute top-0 left-0 bg-white text-black p-4 rounded-xl shadow-xl transform -rotate-6 z-10 w-48">
                        <div className="h-2 w-20 bg-gray-200 rounded mb-2"/>
                        <div className="h-20 bg-gray-100 rounded mb-2"/>
                    </div>
                     <div className="absolute top-4 left-8 bg-black text-white p-4 rounded-xl shadow-xl transform rotate-6 z-20 w-48 border border-gray-800">
                        <div className="h-2 w-20 bg-gray-700 rounded mb-2"/>
                        <div className="h-20 bg-gray-900 rounded mb-2"/>
                    </div>
                </div>
            </div>

            <div className="relative z-10 mt-20">
                <h3 className="text-3xl font-bold mb-2">Receive</h3>
                <p className="font-medium opacity-90">Receive your design within two business days on average.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
