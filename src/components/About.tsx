"use client";

import { motion } from "framer-motion";
import { User, Code, Server, Globe } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <User className="text-primary" /> Professional Summary
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I am a passionate Full Stack Developer with a strong foundation in building modern, scalable, and user-centric web applications. With expertise in both frontend and backend technologies, I bridge the gap between complex business logic and intuitive user interfaces.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              I specialize in the MERN stack (MongoDB, Express, React, Node.js) and Next.js, leveraging these tools to create high-performance solutions that drive business growth. Currently focused on building robust architectures and exploring emerging web technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Code className="text-accent" />}
              title="Frontend"
              desc="React, Next.js, Tailwind CSS, Framer Motion"
              delay={0.1}
            />
            <FeatureCard
              icon={<Server className="text-primary" />}
              title="Backend"
              desc="Node.js, Express, MongoDB, REST APIs"
              delay={0.2}
            />
            <FeatureCard
              icon={<Globe className="text-accent" />}
              title="Performance"
              desc="Optimized loading, SEO, Accessibility"
              delay={0.3}
            />
            <FeatureCard
              icon={<User className="text-primary" />}
              title="UX/UI"
              desc="Recruiter-friendly, Minimalist, Responsive"
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, desc, delay }: { icon: React.ReactNode; title: string; desc: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="glass-card p-6 hover:border-primary/50 transition-colors"
  >
    <div className="mb-4">{icon}</div>
    <h4 className="text-lg font-bold mb-2">{title}</h4>
    <p className="text-sm text-gray-400">{desc}</p>
  </motion.div>
);
