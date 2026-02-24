"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "HTML5 / CSS3", level: 95 },
  { name: "JavaScript (ES6+)", level: 90 },
  { name: "React / Next.js", level: 92 },
  { name: "Node.js / Express", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "Tailwind CSS", level: 95 },
  { name: "REST APIs & Auth", level: 88 },
  { name: "TypeScript", level: 82 },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Core <span className="gradient-text">Skills</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="w-full">
    <div className="flex justify-between mb-2">
      <span className="text-gray-300 font-medium">{name}</span>
      <span className="text-accent">{level}%</span>
    </div>
    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ delay, duration: 1, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
      />
    </div>
  </div>
);
