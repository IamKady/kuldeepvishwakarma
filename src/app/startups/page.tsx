'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  Map, 
  BookOpen, 
  AlertTriangle, 
  TrendingUp, 
  Coins, 
  Search, 
  PlusCircle, 
  CheckCircle2, 
  Calendar,
  ExternalLink,
  Github,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { startupLogs, startupRoadmap, StartupLog } from '@/data/db';

export default function Startups() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const categories = ['All', 'Update', 'Mistakes', 'Revenue', 'SEO', 'Failures', 'Growth'];

  const filteredLogs = activeCategory === 'All' 
    ? startupLogs 
    : startupLogs.filter(l => l.category === activeCategory);

  const getCategoryIcon = (cat: StartupLog['category']) => {
    switch (cat) {
      case 'Mistakes':
      case 'Failures':
        return <AlertTriangle className="w-4 h-4 text-rose-400" />;
      case 'Revenue':
        return <Coins className="w-4 h-4 text-emerald-400" />;
      case 'SEO':
      case 'Marketing':
      case 'Growth':
        return <TrendingUp className="w-4 h-4 text-indigo-400" />;
      default:
        return <BookOpen className="w-4 h-4 text-zinc-400" />;
    }
  };

  const getCategoryBadgeColor = (cat: StartupLog['category']) => {
    switch (cat) {
      case 'Mistakes':
      case 'Failures':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      case 'Revenue':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'SEO':
      case 'Marketing':
      case 'Growth':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
      default:
        return 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20';
    }
  };

  // Kanban Stage configuration
  const stages = ['Ideation', 'Planning', 'MVP', 'Growth', 'Monetization'];

  return (
    <div className="max-w-6xl mx-auto px-4 space-y-16 py-6">
      
      {/* Page Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Startup Journal & Ventures
        </h1>
        <p className="text-sm text-slate-600 dark:text-zinc-400 font-sans max-w-xl">
          Logging my thoughts, experiments, roadmap milestones, and metrics building my core startup products: StartupWire and Bookperia.
        </p>
      </div>

      {/* Primary Startup Ventures Showcase */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 dark:border-white/5 pb-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-xs text-indigo-700 dark:text-indigo-400 font-mono tracking-wider font-semibold uppercase mb-2">
            🚀 FOUNDER VENTURES
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight font-sans">
            Primary Startup Plans
          </h2>
          <p className="text-sm text-slate-600 dark:text-zinc-400 font-sans mt-1 max-w-2xl">
            My two core startup initiatives: an autonomous AI tech news platform and an AI-powered book discovery sanctuary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Venture 1: StartupWire.in */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-5 shadow-xl bg-white/80 dark:bg-black/40 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20">⚡</span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans flex items-center gap-2">
                      StartupWire.in
                    </h3>
                    <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 block font-semibold">
                      AI Tech News & Curation Engine
                    </span>
                  </div>
                </div>
                <span className="text-[9px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
                  Active Beta
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-sans">
                An autonomous news curation platform aggregating tech launches, VC investments, and AI breakthroughs. Uses Gemini 1.5 Flash for topic summaries and Supabase pgvector cosine distance queries to eliminate duplicate press releases.
              </p>

              <div className="flex flex-wrap gap-2 pt-1 font-mono text-[10px]">
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  👥 1,240+ Active Readers
                </span>
                <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                  📡 40+ Crawled RSS Feeds
                </span>
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  ⚡ 100/100 Lighthouse
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Next.js 16', 'Gemini AI', 'Supabase PostgreSQL', 'pgvector', 'Tailwind v4'].map(tech => (
                  <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
              <Link 
                href="/startups/startupwire" 
                className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
              >
                View Deep Dive <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <div className="flex items-center space-x-2">
                <a 
                  href="https://github.com/IamKady/startupwire" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/5 text-xs font-mono font-semibold flex items-center gap-1 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://startupwire.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1 shadow-md transition-colors"
                >
                  <span>startupwire.in</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Venture 2: Bookperia.com */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-5 shadow-xl bg-white/80 dark:bg-black/40 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20">📚</span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans flex items-center gap-2">
                      Bookperia.com
                    </h3>
                    <span className="text-[10px] font-mono text-rose-600 dark:text-rose-400 block font-semibold">
                      AI Book Discovery & Reading Sanctuary
                    </span>
                  </div>
                </div>
                <span className="text-[9px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 uppercase tracking-wider">
                  Active Development
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-sans">
                An AI-powered literary discovery platform featuring local-first shelf management, reading challenge trackers, instant chapter takeaway generators, and interactive AI librarian personas matching your reading vibes.
              </p>

              <div className="flex flex-wrap gap-2 pt-1 font-mono text-[10px]">
                <span className="px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                  📚 500+ Curated Volumes
                </span>
                <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                  🤖 AI Reading Companion
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  🔒 Local-First Shelves
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Next.js 16', 'React 19', 'Zustand', 'LocalStorage API', 'AI Personas', 'Tailwind v4'].map(tech => (
                  <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
              <Link 
                href="/projects#bookperia" 
                className="text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1"
              >
                View Case Study <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <div className="flex items-center space-x-2">
                <a 
                  href="https://github.com/IamKady/Bookperia.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/5 text-xs font-mono font-semibold flex items-center gap-1 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://bookperia.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold flex items-center gap-1 shadow-md transition-colors"
                >
                  <span>bookperia.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Part 1: Interactive Roadmap Kanban */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 dark:border-white/5 pb-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight font-sans flex items-center">
            <Map className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
            Startup Roadmap Board
          </h2>
          <p className="text-xs text-slate-600 dark:text-zinc-400 font-sans mt-1">
            Current stages, milestones, and development sprint statuses for StartupWire and Bookperia.
          </p>
        </div>

        {/* Kanban Board Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto pb-4">
          {stages.map((stage) => {
            const stageTasks = startupRoadmap.filter(item => item.stage === stage);
            return (
              <div 
                key={stage}
                className="p-4 rounded-xl glass-panel border border-slate-200 dark:border-white/5 flex flex-col space-y-3 min-w-[200px] bg-white/80 dark:bg-black/40"
              >
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/5 pb-2">
                  <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                    {stage}
                  </span>
                  <span className="text-[10px] bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400 px-2 py-0.2 border border-slate-200 dark:border-white/5 rounded-full font-mono font-bold">
                    {stageTasks.length}
                  </span>
                </div>

                <div className="space-y-2.5 flex-grow">
                  {stageTasks.map((task) => (
                    <div 
                      key={task.id}
                      onMouseEnter={() => setHoveredCard(task.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className="p-3 rounded-lg border bg-slate-50 dark:bg-zinc-950/40 hover:bg-slate-100 dark:hover:bg-zinc-900/60 transition-all border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 space-y-2 relative"
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="text-[11px] font-semibold text-slate-800 dark:text-zinc-200 font-sans leading-tight">
                          {task.task}
                        </h4>
                      </div>
                      
                      <p className="text-[10px] text-slate-500 dark:text-zinc-500 font-sans leading-tight line-clamp-2">
                        {task.details}
                      </p>

                      <div className="flex items-center justify-between pt-1">
                        <span className={`text-[8px] font-mono px-1.5 py-0.2 rounded border uppercase ${
                          task.status === 'Completed'
                            ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20'
                            : task.status === 'In Progress'
                            ? 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20 animate-pulse'
                            : 'bg-slate-200 dark:bg-zinc-500/10 text-slate-600 dark:text-zinc-400 border-slate-300 dark:border-zinc-500/20'
                        }`}>
                          {task.status}
                        </span>
                        {task.status === 'Completed' && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Part 2: Founder Diary log list */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/5 pb-4">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight font-sans flex items-center">
              <Rocket className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2" />
              Founder Diary
            </h2>
            <p className="text-xs text-slate-600 dark:text-zinc-400 font-sans">
              Chronological log updates mapping challenges, lessons, and SEO wins.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-1 bg-slate-200/60 dark:bg-white/5 p-1 rounded-lg border border-slate-300 dark:border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold rounded-md transition-all cursor-pointer ${
                  activeCategory === cat 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Logs */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredLogs.map((log) => (
              <motion.div
                key={log.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="glass-panel p-6 rounded-xl border border-slate-200 dark:border-white/10 space-y-4 shadow-lg hover:border-slate-300 dark:hover:border-white/20 transition-colors bg-white/80 dark:bg-black/40"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-white/5 pb-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-1.5 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                      {getCategoryIcon(log.category)}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white font-sans">
                      {log.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded border ${getCategoryBadgeColor(log.category)}`}>
                      {log.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500 flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {log.date}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-sans">
                  {log.content}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredLogs.length === 0 && (
            <div className="text-center py-12 text-slate-500 dark:text-zinc-500 font-sans text-xs">
              No diary entries catalogued under this category tag.
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
