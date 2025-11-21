import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, TrendingUp, ShieldCheck, Users, Zap } from "lucide-react";

const points = [
  {
    icon: <TrendingUp className="w-8 h-8 mb-4 text-blue-600" />,
    title: "Result Driven",
    description: "We don't take you on if we can't provide a roadmap to success. Measurable metrics or nothing."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 mb-4 text-green-600" />,
    title: "Money Back Guarantee",
    description: "If we don't hit our metrics, you don't pay. We stand by our work 100%."
  },
  {
    icon: <Users className="w-8 h-8 mb-4 text-purple-600" />,
    title: "Partner Referral",
    description: "Generous percentage kickbacks to referrers. We succeed when you do."
  },
  {
    icon: <Zap className="w-8 h-8 mb-4 text-yellow-500" />,
    title: "Monthly Club",
    description: "Flat fee. Us as your employee. No invoicing for nickel and dime. No clock watching."
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
            We reject the <br/>
            <span className="text-gray-400 italic">corporate drift.</span>
          </h2>
          <p className="text-xl md:text-3xl font-medium max-w-4xl leading-relaxed">
            Dobeu is your technology partner. We operate with the agility of a startup and the precision of an enterprise. 
            No bloat, just impact.
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
              className="p-8 bg-gray-50 rounded-3xl hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200"
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
