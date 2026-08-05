"use client";

import { motion } from "framer-motion";
import { 
  BookOpen, Brain, Target,
  Import, Sparkles, RefreshCw, GitBranch, Activity, MessageSquare, ArrowRight 
} from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Flagship Showcase
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            A deep dive into my core projects, demonstrating the intersection of engineering, design, and psychological insights.
          </p>
        </motion.div>

        <div className="space-y-24">
          {/* Project 1: PolyReader */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm"
          >
            <div className="p-8 md:p-12 lg:p-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Featured Project</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                PolyReader — AI-powered language reading companion
              </h3>
              <p className="text-xl text-teal-400 font-medium mb-6">
                A full-stack AI application that transforms authentic Swedish articles and PDFs into personalized learning sessions.
              </p>
              <p className="text-slate-400 text-base md:text-lg mb-12 leading-relaxed max-w-4xl">
                Users can import any article, switch between reading and learning modes, generate AI review cards, listen with synchronized TTS, and build long-term personalized memory that improves future explanations.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 border border-slate-700">
                    <Import className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h4 className="text-white text-lg font-semibold mb-2">1. Import Anything</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Convert any URL into a structured article, or upload PDFs for a clean, distraction-free reading experience.
                  </p>
                </div>

                <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 border border-slate-700">
                    <BookOpen className="w-6 h-6 text-teal-400" />
                  </div>
                  <h4 className="text-white text-lg font-semibold mb-2">2. Read & Learn Modes</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Two independent learning journeys over the same article, allowing users to focus on comprehension first, then dive into vocabulary and grammar.
                  </p>
                </div>

                <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 border border-slate-700">
                    <Activity className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h4 className="text-white text-lg font-semibold mb-2">3. Synchronized TTS & AI Review</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Vocabulary lookup & highlights paired with automatic review generation and a spaced repetition (SRS) dashboard.
                  </p>
                </div>

                <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 border border-slate-700">
                    <Brain className="w-6 h-6 text-teal-400" />
                  </div>
                  <h4 className="text-white text-lg font-semibold mb-2">4. Persistent AI Memory</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Cross-session personalization utilizing long-term memory to deliver adaptive explanations tailored to the user&apos;s evolving proficiency.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Web Speech API"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Project 2: InnerView */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm"
          >
            <div className="p-8 md:p-12 lg:p-16">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Personal Project</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                <span className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Product Strategy</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                <span className="text-slate-400 text-sm font-semibold uppercase tracking-wider">UX Design</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                <span className="text-slate-400 text-sm font-semibold uppercase tracking-wider">AI Prompt Design</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                InnerView — AI-Powered Longitudinal Reflection System
              </h3>
              
              <div className="p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 mb-10">
                <p className="text-lg md:text-xl text-indigo-300 font-medium italic relative z-10">
                  &quot;Can AI help people develop greater visibility into their own recurring cognitive-behavioural patterns across time?&quot;
                </p>
              </div>

              <div className="mb-12">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-teal-400" />
                  Why I built this
                </h4>
                <p className="text-slate-400 leading-relaxed mb-4 max-w-4xl">
                  Most AI reflection tools focus on a single moment in time. InnerView is designed to help users bridge single emotional responses to see recurring patterns across time, creating a continuum of self-awareness rather than isolated diary entries.
                </p>
              </div>

              {/* Visual Process Flow */}
              <div className="mb-12">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <GitBranch className="w-5 h-5 text-indigo-400" />
                  The Hypothesis Flow
                </h4>
                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm md:text-base font-medium">
                  <span className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">Single Event</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                  <span className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">Structured Reflection</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                  <span className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">Repeated Moments</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                  <span className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">Pattern Visibility</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                  <span className="px-4 py-2 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">Behaviour Awareness</span>
                </div>
                <div className="mt-6 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 flex flex-col md:flex-row items-center gap-4 text-slate-400 text-sm">
                  <span className="font-semibold text-slate-300">Reflection System:</span>
                  <span className="flex items-center gap-2"><MessageSquare className="w-4 h-4" /> Chat (Lightweight exploration)</span>
                  <RefreshCw className="w-4 h-4 hidden md:block text-slate-600" />
                  <span className="flex items-center gap-2"><Brain className="w-4 h-4" /> Reflect (Structured clarification)</span>
                </div>
              </div>

              {/* Longitudinal Memory Architecture */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-teal-400" />
                  Longitudinal Memory Architecture (UPC Model)
                </h4>
                <div className="grid lg:grid-cols-5 gap-6">
                  <div className="lg:col-span-2 p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900 border border-slate-700/50 flex flex-col justify-center">
                    <div className="flex flex-col gap-4 relative">
                       <div className="absolute left-6 top-8 bottom-8 w-px bg-slate-700"></div>
                       {['Conversation', 'UPC (User Psychological Context)', 'Pattern', 'Profile'].map((step, i) => (
                         <div key={step} className="flex items-center gap-4 relative z-10">
                           <div className="w-3 h-3 rounded-full bg-indigo-500 ml-4 ring-4 ring-slate-900"></div>
                           <span className={`font-medium ${i === 3 ? 'text-teal-400' : 'text-slate-300'}`}>{step}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                  <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: 'Context', desc: 'The situation and triggers' },
                      { title: 'Interpretation', desc: 'Cognitive framing' },
                      { title: 'Emotion', desc: 'Affective response' },
                      { title: 'Behaviour', desc: 'Resulting actions' }
                    ].map((dim) => (
                      <div key={dim.title} className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
                        <h5 className="text-white font-semibold mb-1">{dim.title}</h5>
                        <p className="text-sm text-slate-400">{dim.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
