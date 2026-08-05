"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-10 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>
                3+ Years Frontend Experience &bull; Master&apos;s Candidate in
                IT & Learning
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-[5rem] font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
            >
              Software Engineer <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
                &amp; EdTech Specialist
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed"
            >
              Bridging the gap between commercial frontend engineering (React,
              Next.js, TypeScript) and instructional design principles like
              cognitive load theory and active recall.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 group"
              >
                View Flagship Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors border border-slate-700 flex items-center justify-center"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-indigo-500/30 via-slate-800/50 to-teal-500/30 shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)] backdrop-blur-sm">
              <div className="absolute inset-0 bg-slate-950/50 rounded-2xl -z-10" />
              <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-slate-900 flex items-center justify-center">
                {/* Image component - falls back nicely if image is missing */}
                <Image
                  src="/hero.JPG"
                  alt="Lulin"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                {/* Fallback styling placeholder in case image fails or isn't there yet */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 -z-10 text-slate-500">
                  <span className="text-xs tracking-widest uppercase font-medium">
                    Portrait Placeholder
                  </span>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-500/20 blur-2xl rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-500/20 blur-2xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
