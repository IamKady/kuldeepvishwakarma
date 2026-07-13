'use client';

import React, { useState } from 'react';
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
  Calendar 
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
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Startup Journal
        </h1>
        <p className="text-sm text-zinc-400 font-sans max-w-xl">
          Logging my thoughts, experiments, metrics, and failures building digital products like StartupWire.
        </p>
      </div>

      {/* Part 1: Interactive Roadmap Kanban */}
      <div className="space-y-6">
        <div className="border-b border-white/5 pb-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans flex items-center">
            <Map className="w-5 h-5 text-indigo-400 mr-2" />
            Startup Roadmap Board
          </h2>
          <p className="text-xs text-zinc-400 font-sans mt-1">
            Current stages, milestones, and development sprint statuses for StartupWire.
          </p>
        </div>

        {/* Kanban Board Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto pb-4">
          {stages.map((stage) => {
            const stageTasks = startupRoadmap.filter(item => item.stage === stage);
            return (
              <div 
                key={stage}
                className="p-4 rounded-xl glass-panel border-white/5 flex flex-col space-y-3 min-w-[200px]"
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                    {stage}
                  </span>
                  <span className="text-[10px] bg-white/5 text-zinc-400 px-2 py-0.2 border border-white/5 rounded-full font-mono font-bold">
                    {stageTasks.length}
                  </span>
                </div>

                <div className="space-y-2.5 flex-grow">
                  {stageTasks.map((task) => (
                    <div 
                      key={task.id}
                      onMouseEnter={() => setHoveredCard(task.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className="p-3 rounded-lg border bg-zinc-950/40 hover:bg-zinc-900/60 transition-all border-white/5 hover:border-white/10 space-y-2 relative"
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="text-[11px] font-semibold text-zinc-200 font-sans leading-tight">
                          {task.task}
                        </h4>
                      </div>
                      
                      <p className="text-[10px] text-zinc-500 font-sans leading-tight line-clamp-2">
                        {task.details}
                      </p>

                      <div className="flex items-center justify-between pt-1">
                        <span className={`text-[8px] font-mono px-1.5 py-0.2 rounded border uppercase ${
                          task.status === 'Completed'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            : task.status === 'In Progress'
                            ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20 animate-pulse'
                            : 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20'
                        }`}>
                          {task.status}
                        </span>
                        {task.status === 'Completed' && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/5 pb-4">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans flex items-center">
              <Rocket className="w-5 h-5 text-emerald-400 mr-2" />
              Founder Diary
            </h2>
            <p className="text-xs text-zinc-400 font-sans">
              Chronological log updates mapping challenges, lessons, and SEO wins.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-1 bg-white/5 p-1 rounded-lg border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold rounded-md transition-all cursor-pointer ${
                  activeCategory === cat 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-zinc-400 hover:text-zinc-200'
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
                className="glass-panel p-6 rounded-xl border-white/10 space-y-4 shadow-lg hover:border-white/20 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-1.5 rounded-md bg-white/5 border border-white/5">
                      {getCategoryIcon(log.category)}
                    </div>
                    <h3 className="text-sm font-bold text-white font-sans">
                      {log.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded border ${getCategoryBadgeColor(log.category)}`}>
                      {log.category}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {log.date}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                  {log.content}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredLogs.length === 0 && (
            <div className="text-center py-12 text-zinc-500 font-sans text-xs">
              No diary entries catalogued under this category tag.
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
