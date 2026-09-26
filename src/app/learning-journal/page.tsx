'use client';

import React, { useState } from 'react';
import { Calendar, Tag, AlertTriangle, Coins, TrendingUp, BookOpen } from 'lucide-react';
import { startupLogs, StartupLog } from '@/data/db';

export default function LearningJournalPage() {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  
  const tags = ['All', 'Update', 'Mistakes', 'Revenue', 'SEO', 'Failures', 'Growth'];

  const filteredLogs = selectedTag === 'All'
    ? startupLogs
    : startupLogs.filter(l => l.category === selectedTag);

  const getIcon = (cat: StartupLog['category']) => {
    switch (cat) {
      case 'Mistakes':
      case 'Failures':
        return <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400" />;
      case 'Revenue':
        return <Coins className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'SEO':
      case 'Growth':
        return <TrendingUp className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      default:
        return <BookOpen className="w-4 h-4 text-slate-500 dark:text-zinc-400" />;
    }
  };

  const getBadgeClass = (cat: StartupLog['category']) => {
    switch (cat) {
      case 'Mistakes':
      case 'Failures':
        return 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20';
      case 'Revenue':
        return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20';
      case 'SEO':
      case 'Growth':
        return 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20';
      default:
        return 'bg-slate-200 dark:bg-zinc-500/10 text-slate-700 dark:text-zinc-400 border-slate-300 dark:border-zinc-500/20';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-12 py-6">
      
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          <BookOpen className="w-8 h-8 text-indigo-600 dark:text-indigo-400" /> Learning journal
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 font-sans max-w-xl leading-relaxed">
          Raw notes, engineering trade-offs, and lessons learned while building products and exploring systems in public.
        </p>
      </div>

      {/* Tags row */}
      <div className="flex flex-wrap gap-1.5 bg-slate-200/60 dark:bg-white/5 p-1 rounded-xl border border-slate-300 dark:border-white/5 max-w-fit">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
              selectedTag === tag 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Journal entries */}
      <div className="space-y-6">
        {filteredLogs.map((log) => (
          <div 
            key={log.id}
            className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-4 shadow-lg hover:border-slate-300 dark:hover:border-white/20 transition-all bg-white/80 dark:bg-black/40"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-white/5 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="p-1.5 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                  {getIcon(log.category)}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white font-sans">
                  {log.title}
                </h3>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className={`text-[9px] font-mono px-2 py-0.5 rounded border ${getBadgeClass(log.category)}`}>
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
          </div>
        ))}

        {filteredLogs.length === 0 && (
          <div className="text-center py-12 text-slate-500 dark:text-zinc-500 font-sans text-xs">
            No journal entries cataloged under this tag.
          </div>
        )}
      </div>

    </div>
  );
}
