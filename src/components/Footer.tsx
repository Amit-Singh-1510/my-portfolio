"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="flex flex-col">
            <div className="text-4xl font-black text-primary mb-2 tracking-tighter">
              Amit Singh<span className="text-white">.</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Full Stack Developer crafting modern, high-performance web solutions from frontend to backend.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-6">
              <a href="https://github.com/Amit-Singh-1510" className="text-gray-400 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/amit-singh-8495a6314" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:amitsinghchouhan515@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <div className="text-gray-500 text-xs tracking-wide">
              &copy; {new Date().getFullYear()} Amit Singh | Built with React and Tailwind
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
