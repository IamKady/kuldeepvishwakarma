'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  History, 
  Heart, 
  Terminal as TerminalIcon, 
  BookOpen, 
  Eye, 
  Briefcase, 
  GraduationCap, 
  FolderGit2, 
  Trophy,
  Code,
  Shield,
  Layers,
  Compass,
  ArrowRight
} from 'lucide-react';
import { timelineMilestones, TimelineMilestone } from '@/data/db';

export default function About() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'work' | 'education' | 'projects' | 'transition'>('all');

  const storySections = [
    {
      id: 'transition-story',
      title: 'From Civil Blueprints to Distributed Software',
      icon: <Compass className="w-5 h-5 text-indigo-400" />,
      content: "Before writing Next.js route handlers or configuring vector search, I spent three years in Civil Engineering drafting physical blueprints and analyzing structural load distributions. When I realized that physical cantilevers and beams followed the exact same principles as database partitioning and distributed caching, something clicked. I taught myself programming late at night, transitioned into Computer Science, graduated with honors in B.Tech CSE, and am now pursuing my Master's in CS while building real products like StartupWire.in."
    },
    {
      id: 'why-tech',
      title: 'Why I Build Software',
      icon: <Heart className="w-5 h-5 text-rose-400" />,
      content: "Software is the only creative medium where a single builder with a laptop and curiosity can turn an abstract idea into an active utility used by thousands of people. Connecting logical systems thinking with real-world human impact is what gets me excited to sit down at the keyboard every single morning."
    },
    {
      id: 'engineering-philosophy',
      title: 'Engineering Values',
      icon: <Code className="w-5 h-5 text-emerald-400" />,
      content: "I value simplicity over cleverness. In production, the most resilient code is the code that is impossible to misunderstand, verified strictly at data boundaries with runtime schemas, and designed to fail gracefully. Great software should feel effortless to the user while remaining robust under heavy load."
    },
    {
      id: 'learning-philosophy',
      title: 'Learning in Public',
      icon: <BookOpen className="w-5 h-5 text-amber-400" />,
      content: "I learn best by shipping real systems, breaking things down, and documenting what actually happened—including the trade-offs and edge cases that broke at 2 AM. Sharing engineering post-mortems and open-source code openly keeps me accountable and constantly growing."
    },
    {
      id: 'beyond-code',
      title: 'Outside the Terminal',
      icon: <Heart className="w-5 h-5 text-purple-400" />,
      content: "When I step away from the monitor, I'm an avid reader who loves books on Stoic philosophy, classic literature, and systems thinking. I still pick up a pencil to sketch freehand blueprints and study nature. A calm, curious mind outside the terminal is the secret to sustained engineering craftsmanship."
    }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? timelineMilestones 
    : timelineMilestones.filter(e => e.category === activeFilter);

  const getTimelineIcon = (cat: TimelineMilestone['category']) => {
    switch (cat) {
      case 'work':
        return <Briefcase className="w-4 h-4 text-emerald-400" />;
      case 'education':
        return <GraduationCap className="w-4 h-4 text-indigo-400" />;
      case 'projects':
        return <FolderGit2 className="w-4 h-4 text-violet-400" />;
      case 'achievements':
        return <Trophy className="w-4 h-4 text-amber-400" />;
      default:
        return <Compass className="w-4 h-4 text-rose-400" />;
    }
  };

  const getCategoryBadgeColor = (cat: TimelineMilestone['category']) => {
    switch (cat) {
      case 'work':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'education':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
      case 'projects':
        return 'bg-violet-500/10 text-violet-400 border-violet-500/20';
      case 'achievements':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      default:
        return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 space-y-16 py-6">
      
      {/* Page Title & Profile Badge */}
      <div className="flex flex-col md:flex-row gap-8 items-start justify-between border-b border-slate-200 dark:border-white/5 pb-10">
        <div className="space-y-4 text-left max-w-2xl flex-grow">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 glass-panel bg-white/80 dark:bg-white/5 shadow-xs dark:shadow-none">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
            <span className="text-[10px] font-mono text-slate-700 dark:text-zinc-300 tracking-wider">
              ABOUT ME • SOFTWARE ENGINEER & AI BUILDER
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
            Hi, I&apos;m Kuldeep — Engineer &amp; Builder
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 font-sans leading-relaxed max-w-xl">
            A personal look at my journey from civil engineering blueprints to software architecture, core engineering values, and lessons along the way.
          </p>
        </div>

        {/* Operator Badge Photo Card */}
        <div className="w-full md:w-60 flex-shrink-0">
          <div className="relative p-2 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 shadow-xl group overflow-hidden bg-white/80 dark:bg-white/[0.01]">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-slate-200 dark:border-white/5 bg-slate-900 dark:bg-black/40">
              <img 
                src="/kuldeep.jpg" 
                alt="Kuldeep Chandra Vishwakarma" 
                className="w-full h-full object-cover object-center scale-[1.02] transform hover:scale-[1.08] transition-transform duration-500"
                style={{ objectPosition: 'center 20%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-2 right-2 bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 text-[8px] font-mono uppercase tracking-widest px-2 py-0.5 rounded">
                Active
              </div>
            </div>
            <div className="pt-3 px-1 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-slate-900 dark:text-white block">Kuldeep Chandra V.</span>
                <span className="text-[9px] font-mono text-slate-500 dark:text-zinc-500 block">Uttar Pradesh, India</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse border border-emerald-500/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Narrative Story Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {storySections.map((sec, idx) => (
          <div 
            key={sec.id}
            className={`glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 flex flex-col space-y-3.5 shadow-lg bg-white/80 dark:bg-black/40 ${
              idx === 0 ? 'md:col-span-2' : ''
            }`}
          >
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                {sec.icon}
              </div>
              <h2 className="text-sm font-bold tracking-wider uppercase text-slate-900 dark:text-white font-sans">
                {sec.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-sans">
              {sec.content}
            </p>
          </div>
        ))}
      </div>

      {/* Beautiful Animated Vertical Timeline */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/5 pb-4">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight font-sans flex items-center">
              <History className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
              Milestones & Career Journey
            </h2>
            <p className="text-xs text-slate-600 dark:text-zinc-400 font-sans">
              A chronological look at my journey from early studies through engineering transition to full-stack software development.
            </p>
          </div>

          {/* Timeline Filters */}
          <div className="flex flex-wrap gap-1 bg-slate-200/60 dark:bg-white/5 p-1 rounded-lg border border-slate-300 dark:border-white/5">
            {(['all', 'work', 'education', 'transition'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold rounded-md transition-all cursor-pointer ${
                  activeFilter === filter 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Event list */}
        <div className="relative border-l border-slate-300 dark:border-white/10 pl-8 ml-4 space-y-10">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((evt, idx) => (
              <motion.div
                key={evt.id}
                layout
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative"
              >
                {/* Timeline Marker Dot */}
                <div className="absolute top-1.5 -left-[45px] w-8 h-8 rounded-full glass-panel border border-slate-200 dark:border-white/10 flex items-center justify-center bg-white dark:bg-zinc-950 shadow-md">
                  {getTimelineIcon(evt.category)}
                </div>

                <div className="space-y-3 p-5 rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.01] hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-all shadow-xs dark:shadow-none">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-slate-600 dark:text-zinc-500 uppercase tracking-wider bg-slate-100 dark:bg-white/5 px-2.5 py-0.8 rounded border border-slate-200 dark:border-white/5">
                      {evt.year}
                    </span>
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded border uppercase ${getCategoryBadgeColor(evt.category)}`}>
                      {evt.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans">{evt.title}</h3>
                    <span className="text-xs text-slate-600 dark:text-zinc-400 font-sans font-medium block mt-0.5">{evt.organization}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-sans max-w-3xl">
                    {evt.description}
                  </p>

                  {/* Bullet details */}
                  {evt.details && (
                    <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-500 dark:text-zinc-500 font-sans">
                      {evt.details.map((detail, dIdx) => (
                        <li key={dIdx}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredEvents.length === 0 && (
            <div className="text-center py-8 text-slate-500 dark:text-zinc-500 font-sans text-xs">
              No milestones found in this category.
            </div>
          )}
        </div>
      </div>

      {/* Capabilities Matrix Section */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 dark:border-white/5 pb-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight font-sans flex items-center">
            <Code className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2" />
            Capabilities & Credibility Map
          </h2>
          <p className="text-xs text-slate-600 dark:text-zinc-400 font-sans mt-1">
            Technology structures grouped by verified competence tiers (No fake percentages).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Core Stack */}
          <div className="glass-panel p-5 rounded-xl border border-slate-200 dark:border-white/10 space-y-4 bg-white/80 dark:bg-black/40">
            <div className="flex items-center space-x-2 text-indigo-700 dark:text-indigo-400 font-semibold font-mono text-xs border-b border-slate-200 dark:border-white/5 pb-2">
              <Layers className="w-4 h-4" />
              <span>FRONTEND (PRODUCTION)</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Next.js App Router', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite compiler', 'Framer Motion animations'].map((tech) => (
                <span key={tech} className="text-[10px] font-mono px-2 py-1 rounded bg-indigo-50 dark:bg-indigo-500/5 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/10 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Database / Backend */}
          <div className="glass-panel p-5 rounded-xl border border-slate-200 dark:border-white/10 space-y-4 bg-white/80 dark:bg-black/40">
            <div className="flex items-center space-x-2 text-emerald-700 dark:text-emerald-400 font-semibold font-mono text-xs border-b border-slate-200 dark:border-white/5 pb-2">
              <TerminalIcon className="w-4 h-4" />
              <span>BACKEND (PRODUCTION)</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['PostgreSQL databases', 'Supabase APIs', 'Node.js crons', 'pgvector embeddings', 'API routing endpoints', 'Zod validation'].map((tech) => (
                <span key={tech} className="text-[10px] font-mono px-2 py-1 rounded bg-emerald-50 dark:bg-emerald-500/5 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/10 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Infrastructure / Security */}
          <div className="glass-panel p-5 rounded-xl border border-slate-200 dark:border-white/10 space-y-4 bg-white/80 dark:bg-black/40">
            <div className="flex items-center space-x-2 text-amber-700 dark:text-amber-400 font-semibold font-mono text-xs border-b border-slate-200 dark:border-white/5 pb-2">
              <Shield className="w-4 h-4" />
              <span>SECURITY (WORKING KNOWLEDGE)</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Linux administration', 'Git flow models', 'JWT sessions', 'API rate-limiting', 'CTF vulnerability writeups', 'C++ algorithms'].map((tech) => (
                <span key={tech} className="text-[10px] font-mono px-2 py-1 rounded bg-amber-50 dark:bg-amber-500/5 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-500/10 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
