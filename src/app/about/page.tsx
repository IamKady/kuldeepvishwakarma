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
      title: 'My Journey: Physics Blueprint to Relational Schema',
      icon: <Compass className="w-5 h-5 text-indigo-400" />,
      content: "I started my formal technical studies in Civil Engineering, where I trained in structural calculations, building layouts, and spatial physics. While mapping physical load distributions, I realized a profound connection: the nodes, structural vectors, and coordinates in physical systems map directly to the databases, schemas, and relational workflows of digital software. Inspired by this symmetry, I self-taught software development during off-hours, transitioned into Computer Science, graduated B.Tech CSE with honors, and am now pursuing MSc Computer Science while building autonomous digital products like StartupWire.in."
    },
    {
      id: 'why-tech',
      title: 'Why I Choose Software Systems',
      icon: <Heart className="w-5 h-5 text-rose-400" />,
      content: "To me, software systems represent the ultimate leverage. With a keyboard, an API key, and an internet connection, you can build autonomous crawlers, deploy global edge-cached frontends, and serve thousands of concurrent readers. Software bridges systemic logical engineering with absolute user reach, turning ideas into active utilities."
    },
    {
      id: 'engineering-philosophy',
      title: 'Engineering Philosophy',
      icon: <Code className="w-5 h-5 text-emerald-400" />,
      content: "I believe in writing dry, structured code, validating all inputs at the boundary using strict schemas (e.g. Zod validators), and minimizing server latency through pre-rendered cache layers. A systems engineer must treat performance, accessibility, and clean type systems as non-negotiable features, not afterthoughts."
    },
    {
      id: 'learning-philosophy',
      title: 'Learning Philosophy',
      icon: <BookOpen className="w-5 h-5 text-amber-400" />,
      content: "Constant construction, transparent telemetry, and structured debugging. I document my mistakes publicly, review vulnerability checkers (CTF writeups), and learn technologies by building fully functioning products. My goal is to master AI agents integration and distributed infrastructure security."
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
      <div className="flex flex-col md:flex-row gap-8 items-start justify-between border-b border-white/5 pb-10">
        <div className="space-y-4 text-left max-w-2xl flex-grow">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 glass-panel bg-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[10px] font-mono text-zinc-300 tracking-wider">
              OPERATOR BIO // IDENT: KCV-77
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-none">
            Systems Developer Narrative
          </h1>
          <p className="text-sm text-zinc-400 font-sans leading-relaxed max-w-xl">
            Tracing my transition from physics drafting into distributed systems, coding philosophies, and academic benchmarks.
          </p>
        </div>

        {/* Operator Badge Photo Card */}
        <div className="w-full md:w-60 flex-shrink-0">
          <div className="relative p-2 rounded-2xl glass-panel border-white/10 shadow-xl group overflow-hidden bg-white/[0.01]">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/5 bg-black/40">
              <img 
                src="/kuldeep.jpg" 
                alt="Kuldeep Chandra Vishwakarma" 
                className="w-full h-full object-cover object-center scale-[1.02] transform hover:scale-[1.08] transition-transform duration-500"
                style={{ objectPosition: 'center 20%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-2 right-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[8px] font-mono uppercase tracking-widest px-2 py-0.5 rounded">
                Active
              </div>
            </div>
            <div className="pt-3 px-1 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-white block">Kuldeep Chandra V.</span>
                <span className="text-[9px] font-mono text-zinc-500 block">kcv-node-0</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse border border-emerald-500/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Narrative Story Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {storySections.map((sec, idx) => (
          <div 
            key={sec.id}
            className={`glass-panel p-6 rounded-2xl border-white/10 flex flex-col space-y-3.5 shadow-lg ${
              idx === 0 ? 'md:col-span-2' : ''
            }`}
          >
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                {sec.icon}
              </div>
              <h2 className="text-sm font-bold tracking-wider uppercase text-white font-sans">
                {sec.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              {sec.content}
            </p>
          </div>
        ))}
      </div>

      {/* Beautiful Animated Vertical Timeline */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/5 pb-4">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans flex items-center">
              <History className="w-5 h-5 text-indigo-400 mr-2" />
              Career timeline logs
            </h2>
            <p className="text-xs text-zinc-400 font-sans">
              Filter my chronological milestones from high school through engineering transition to software systems.
            </p>
          </div>

          {/* Timeline Filters */}
          <div className="flex flex-wrap gap-1 bg-white/5 p-1 rounded-lg border border-white/5">
            {(['all', 'work', 'education', 'transition'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold rounded-md transition-all cursor-pointer ${
                  activeFilter === filter 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Event list */}
        <div className="relative border-l border-white/10 pl-8 ml-4 space-y-10">
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
                <div className="absolute top-1.5 -left-[45px] w-8 h-8 rounded-full glass-panel border-white/10 flex items-center justify-center bg-zinc-950 shadow-md">
                  {getTimelineIcon(evt.category)}
                </div>

                <div className="space-y-3 p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/10 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider bg-white/5 px-2.5 py-0.8 rounded border border-white/5">
                      {evt.year}
                    </span>
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded border uppercase ${getCategoryBadgeColor(evt.category)}`}>
                      {evt.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white font-sans">{evt.title}</h3>
                    <span className="text-xs text-zinc-400 font-sans font-medium block mt-0.5">{evt.organization}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans max-w-3xl">
                    {evt.description}
                  </p>

                  {/* Bullet details */}
                  {evt.details && (
                    <ul className="list-disc pl-5 space-y-1.5 text-xs text-zinc-500 font-sans">
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
            <div className="text-center py-8 text-zinc-500 font-sans text-xs">
              No milestones found in this category.
            </div>
          )}
        </div>
      </div>

      {/* Capabilities Matrix Section */}
      <div className="space-y-6">
        <div className="border-b border-white/5 pb-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans flex items-center">
            <Code className="w-5 h-5 text-emerald-400 mr-2" />
            Capabilities & Credibility Map
          </h2>
          <p className="text-xs text-zinc-400 font-sans mt-1">
            Technology structures grouped by verified competence tiers (No fake percentages).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Core Stack */}
          <div className="glass-panel p-5 rounded-xl border-white/10 space-y-4">
            <div className="flex items-center space-x-2 text-indigo-400 font-semibold font-mono text-xs border-b border-white/5 pb-2">
              <Layers className="w-4 h-4" />
              <span>FRONTEND (PRODUCTION)</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Next.js App Router', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite compiler', 'Framer Motion animations'].map((tech) => (
                <span key={tech} className="text-[10px] font-mono px-2 py-1 rounded bg-indigo-500/5 text-indigo-300 border border-indigo-500/10 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Database / Backend */}
          <div className="glass-panel p-5 rounded-xl border-white/10 space-y-4">
            <div className="flex items-center space-x-2 text-emerald-400 font-semibold font-mono text-xs border-b border-white/5 pb-2">
              <TerminalIcon className="w-4 h-4" />
              <span>BACKEND (PRODUCTION)</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['PostgreSQL databases', 'Supabase APIs', 'Node.js crons', 'pgvector embeddings', 'API routing endpoints', 'Zod validation'].map((tech) => (
                <span key={tech} className="text-[10px] font-mono px-2 py-1 rounded bg-emerald-500/5 text-emerald-300 border border-emerald-500/10 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Infrastructure / Security */}
          <div className="glass-panel p-5 rounded-xl border-white/10 space-y-4">
            <div className="flex items-center space-x-2 text-amber-400 font-semibold font-mono text-xs border-b border-white/5 pb-2">
              <Shield className="w-4 h-4" />
              <span>SECURITY (WORKING KNOWLEDGE)</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Linux administration', 'Git flow models', 'JWT sessions', 'API rate-limiting', 'CTF vulnerability writeups', 'C++ algorithms'].map((tech) => (
                <span key={tech} className="text-[10px] font-mono px-2 py-1 rounded bg-amber-500/5 text-amber-300 border border-amber-500/10 transition-colors">
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
