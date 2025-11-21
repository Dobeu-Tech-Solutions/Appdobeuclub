import React from "react";
import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6 md:px-12 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Join the club.
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Simple pricing. No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="max-w-lg mx-auto relative">
           {/* Glow Effect */}
           <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 blur-3xl opacity-20 transform scale-110" />
           
           <motion.div 
             whileHover={{ y: -5 }}
             className="relative bg-black text-white rounded-[2.5rem] p-10 shadow-2xl overflow-hidden border border-gray-800"
            >
                <div className="absolute top-0 right-0 p-4">
                    <div className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Standard Plan</h3>
                    <p className="text-gray-400">One request at a time. Pause or cancel anytime.</p>
                </div>

                <div className="flex items-baseline mb-8">
                    <span className="text-6xl font-bold">$4,995</span>
                    <span className="text-xl text-gray-500 ml-2">/mo</span>
                </div>

                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg h-14 rounded-xl mb-8">
                    Get started today
                </Button>

                <div className="space-y-4 text-gray-300">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                            <Check size={14} className="text-green-500" />
                        </div>
                        <span>One request at a time</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                            <Check size={14} className="text-green-500" />
                        </div>
                        <span>Average 48 hour delivery</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                            <Check size={14} className="text-green-500" />
                        </div>
                        <span>Unlimited users</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                            <Check size={14} className="text-green-500" />
                        </div>
                        <span>Unlimited stock photos</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                            <Check size={14} className="text-green-500" />
                        </div>
                        <span>Easy credit-card payments</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                            <Check size={14} className="text-green-500" />
                        </div>
                        <span>Pause or cancel anytime</span>
                    </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                    <a href="#" className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
                        Book a 15-min intro call <ArrowRight size={14} className="ml-1" />
                    </a>
                </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};
