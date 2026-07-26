"use client";

import { motion } from "framer-motion";
import { BookA, Brain, Target, Globe } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Flagship Showcase
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            A deep dive into my core project, demonstrating the intersection of engineering and educational theory.
          </p>
        </motion.div>

        {/* Featured Project: PolyReader */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Project Info */}
            <div className="p-8 md:p-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-6">
                <Globe className="w-4 h-4" />
                <span>Featured Project</span>
              </div>
              <h3 className="text-4xl font-bold text-white mb-4">PolyReader</h3>
              <p className="text-xl text-teal-400 font-medium mb-6">
                Contextual Language Reader
              </p>
              <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
                Based on Krashen&apos;s Comprehensible Input theory. PolyReader abandons traditional gamification in favor of immersive contextual reading, inline translations, and spaced repetition systems (SRS).
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">CEFR Matching</h4>
                    <p className="text-sm text-slate-400">Tailored difficulty (e.g., Spanish B2)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                    <Brain className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Cognitive Load</h4>
                    <p className="text-sm text-slate-400">Real-time ratio dashboard</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                    <BookA className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Inline Tooltips</h4>
                    <p className="text-sm text-slate-400">Contextual word translations</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "NLP"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Mockup */}
            <div className="p-8 lg:p-12 flex justify-center items-center bg-gradient-to-br from-slate-900 to-indigo-950/30 h-full min-h-[400px]">
               {/* Abstract representation of the UI since we don't have an actual screenshot */}
               <div className="w-full max-w-md bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-2xl relative">
                  <div className="h-8 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div className="h-6 w-32 bg-slate-800 rounded-md"></div>
                      <div className="flex gap-2 text-xs font-semibold">
                        <span className="text-teal-400 bg-teal-400/10 px-2 py-1 rounded">Spanish B2</span>
                        <span className="text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded">Load: 12%</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 w-full bg-slate-800/80 rounded"></div>
                      <div className="h-4 w-[90%] bg-slate-800/80 rounded relative">
                         {/* Fake Tooltip */}
                         <div className="absolute -top-10 left-1/4 bg-indigo-500 text-white text-xs px-2 py-1 rounded shadow-lg">
                           Contextual Meaning
                           <div className="absolute -bottom-1 left-4 w-2 h-2 bg-indigo-500 rotate-45"></div>
                         </div>
                         <div className="absolute top-0 left-1/4 w-16 h-full bg-indigo-500/20 border-b-2 border-indigo-500"></div>
                      </div>
                      <div className="h-4 w-[95%] bg-slate-800/80 rounded"></div>
                      <div className="h-4 w-[80%] bg-slate-800/80 rounded"></div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
