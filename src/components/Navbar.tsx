"use client";

import { motion } from "framer-motion";
import { Code, BookOpen, Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-slate-950/80 backdrop-blur-md border-b border-slate-800"
    >
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-teal-400 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/20">
          L
        </div>
        <span className="font-semibold text-lg tracking-tight text-slate-100 hidden sm:block">
          Lulin
        </span>
      </div>

      <nav className="flex items-center gap-6">
        <Link href="#about" className="text-sm font-medium text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-1.5">
          <BookOpen className="w-4 h-4" />
          <span className="hidden sm:inline">About</span>
        </Link>
        <Link href="#projects" className="text-sm font-medium text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-1.5">
          <Code className="w-4 h-4" />
          <span className="hidden sm:inline">Projects</span>
        </Link>
        <Link href="#contact" className="text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors flex items-center gap-1.5">
          <Mail className="w-4 h-4" />
          <span className="hidden sm:inline">Contact</span>
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-100 transition-colors">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
            <path d="M9 18c-4.51 2-5-2-7-2"/>
          </svg>
        </Link>
        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect width="4" height="12" x="2" y="9"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </Link>
      </div>
    </motion.header>
  );
}
