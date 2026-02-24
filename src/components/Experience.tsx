"use client";

import { motion } from "framer-motion";
import { Briefcase, Milestone, Trophy } from "lucide-react";

const milestones = [
  {
    year: "2025",
    title: "Web Development",
    company: " XPERTSTIM IT SERVICES PVT. LTD.",
    desc: "Developed a responsive Job Consultancy Website connecting job seekers with recruiters. Implemented user-friendly interfaces and dynamic features using HTML, CSS, JavaScript, PHP, and MySQL, demonstrating strong problem-solving skills and attention to detail.",
  },
  {
    year: "2024",
    title: "Web Development",
    company: "Eshuzo Global Technologies PVT. LTD.",
    desc: "Designed and developed a digital Library Management System enabling efficient book cataloging, member management, and issue/return tracking. Built an intuitive interface with search functionality, due date alerts, and data management features to enhance library operations.",
  },  
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience & <span className="gradient-text">Journey</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative border-l-2 border-white/10 pl-8 ml-4">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mb-12 relative"
            >
              <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-black" />
              <div className="glass-card p-6 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all">
                <span className="text-primary font-bold text-sm mb-2 block">{milestone.year}</span>
                <h3 className="text-xl font-bold mb-1">{milestone.title}</h3>
                <h4 className="text-accent text-sm mb-4 font-medium">{milestone.company}</h4>
                <p className="text-gray-400 leading-relaxed">{milestone.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
