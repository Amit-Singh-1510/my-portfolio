"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Send } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const phrases = [
    "I build scalable and modern web applications.",
    "Full Stack Enthusiast.",
    "MERN Stack Specialist.",
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev: number) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev: number) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === phrases[index].length ? 2000 : 150, parseInt((Math.random() * 50).toString())));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse delay-700" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-medium tracking-widest uppercase mb-4">Hello, I'm</h2>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight">
            Amit <span className="gradient-text">Singh</span>
          </h1>
          <h3 className="text-2xl md:text-3xl text-gray-400 font-medium mb-8">
            Full Stack Developer
          </h3>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 h-8">
            {phrases[index].substring(0, subIndex)}
            <span className="animate-pulse">|</span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white rounded-full font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              View Projects <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download="Amit_Singh_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full font-bold flex items-center gap-2 transition-all"
            >
              Download Resume <Download size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent/10 border border-accent/30 text-accent rounded-full font-bold flex items-center gap-2 hover:bg-accent/20 transition-all"
            >
              Contact Me <Send size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView()}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full translate-y-0" />
        </div>
      </motion.div>
    </section>
  );
};
