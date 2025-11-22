import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, TrendingUp, ShieldCheck, Users, Zap, Gauge, Lock, Rocket, Code } from "lucide-react";

const points = [
  {
    icon: <Gauge className="w-8 h-8 mb-4 text-blue-600" />,
    title: "Performance First",
    description: "We architect scalable solutions optimized for speed, reliability, and efficiency. Your infrastructure matters."
  },
  {
    icon: <Lock className="w-8 h-8 mb-4 text-green-600" />,
    title: "Security by Design",
    description: "Enterprise-grade security practices built in from day one. Compliance, encryption, and best practices as standard."
  },
  {
    icon: <Rocket className="w-8 h-8 mb-4 text-purple-600" />,
    title: "Rapid Deployment",
    description: "Modern DevOps practices mean faster iteration. From code to production in hours, not weeks."
  },
  {
    icon: <Code className="w-8 h-8 mb-4 text-cyan-500" />,
    title: "Tech Excellence",
    description: "Cutting-edge stack. Clean code. Modern architecture. We build technology that lasts and scales."
  },
];

export const Mission = () => {
  return (
    <section id="mission" className="py-24 px-6 md:px-12 bg-white text-black relative z-30 rounded-t-[3rem] -mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
            We engineer <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">technology that scales.</span>
          </h2>
          <p className="text-xl md:text-3xl font-medium max-w-4xl leading-relaxed text-gray-700">
            Dobeu is your IT consulting partner. We combine the agility of modern DevOps with enterprise-grade infrastructure.
            <span className="text-blue-600"> Cloud-native. Security-first. Built to last.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-gradient-to-br from-white to-blue-50 rounded-3xl hover:shadow-lg transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 hover:-translate-y-1"
            >
              {point.icon}
              <h3 className="text-2xl font-bold mb-3">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
