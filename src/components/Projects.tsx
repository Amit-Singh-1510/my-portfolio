"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Monitor, Server, Database } from "lucide-react";

const projects = [
  {
    title: "Transport Management Website",
    desc: "A comprehensive solution for booking, dashboard management, and live GPS tracking for logistics.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Amit-Singh-1510/frontend.git",
    live: "https://frontend-lovat-phi-46.vercel.app/",
    category: "Full Stack",
  },
  {
    title: "Job Consultancy Platform",
    desc: "Platform connecting job seekers with recruiters, featuring dashboard management and resume uploads.",
    tech: ["React", "Tailwind", "Firebase", "Context API"],
    github: "https://github.com/Amit-Singh-1510/job-consult-website.git",
    live: "https://job-consult-website.vercel.app/",
    category: "Web App",
  },
  {
  title: "Fitness Tracker",
  desc: "A personal fitness tracking web app that helps users monitor workouts, track daily activities, visualize progress with charts, and maintain healthy habits.",
  tech: ["React", "Tailwind CSS", "Recharts", "Local Storage"],
  github: "https://github.com/Amit-Singh-1510/Fitness-Tracker.git", 
  live: "https://fitness-tracker-gilt-nine.vercel.app/", 
  category: "Frontend"
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectProps {
  title: string;
  desc: string;
  tech: string[];
  github: string;
  live: string;
  delay: number;
}

const ProjectCard = ({ title, desc, tech, github, live, delay }: ProjectProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -10 }}
    className="glass-card group flex flex-col h-full overflow-hidden"
  >
    <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
      <Monitor className="text-white/20 w-16 h-16 group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute top-4 right-4 flex gap-2">
        <a href={github} className="p-2 bg-black/50 rounded-full hover:bg-primary transition-colors">
          <Github size={18} />
        </a>
        <a href={live} className="p-2 bg-black/50 rounded-full hover:bg-accent transition-colors">
          <ExternalLink size={18} />
        </a>
      </div>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 flex-grow">{desc}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((t: string) => (
          <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-accent">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={live}
          className="flex-1 py-2 bg-primary/10 border border-primary/30 text-center rounded-lg text-sm font-bold hover:bg-primary hover:text-white transition-all"
        >
          Live Demo
        </a>
        <a
          href={github}
          className="flex-1 py-2 bg-white/5 border border-white/10 text-center rounded-lg text-sm font-bold hover:bg-white/10 transition-all"
        >
          GitHub
        </a>
      </div>
    </div>
  </motion.div>
);
