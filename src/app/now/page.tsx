'use client';

import React from 'react';
import { Clock, MapPin, Radio, Target, BookOpen } from 'lucide-react';

export default function NowPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 space-y-12 py-6">
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight flex items-center gap-2">
          <Clock className="w-8 h-8 text-indigo-400" /> Now
        </h1>
        <p className="text-sm text-zinc-400 font-sans">
          This is a snapshot of what I am focusing on right now. Inspired by Derek Sivers\' "now page" movement.
        </p>
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Location */}
          <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] space-y-3">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Coordinates</span>
            <h3 className="text-sm font-bold text-white">Uttar Pradesh, India</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Living and working in India (IST, GMT +5:30). Optimizing distributed content workers and completing MSc studies remotely.
            </p>
          </div>

          {/* Vibe */}
          <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] space-y-3">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block flex items-center gap-1.5"><Radio className="w-3.5 h-3.5" /> Current Vibe</span>
            <h3 className="text-sm font-bold text-white">Lo-Fi & Systems Coding</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Focusing on monospaced layouts, terminal utilities, and reading Martin Kleppmann\'s reviews of database indexes.
            </p>
          </div>
        </div>

        {/* Focus list */}
        <div className="p-6 rounded-2xl border border-white/10 glass-panel space-y-4">
          <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono border-b border-white/5 pb-2 flex items-center gap-2">
            <Target className="w-4 h-4 text-indigo-400" /> Active Commitments
          </h2>
          <ul className="space-y-4 text-xs sm:text-sm text-zinc-300 font-sans">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0" />
              <div>
                <span className="font-bold text-white">Scaling StartupWire.in</span>
                <p className="text-xs text-zinc-400 mt-0.5">Optimizing pgvector cosine distance deduplication algorithms in Supabase and designing automated newsletter digest triggers.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0" />
              <div>
                <span className="font-bold text-white">MSc Computer Science coursework</span>
                <p className="text-xs text-zinc-400 mt-0.5">Researching networking logs, distributed hashing systems, and software engineering workflows.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0" />
              <div>
                <span className="font-bold text-white">Ethical Hacking writeups</span>
                <p className="text-xs text-zinc-400 mt-0.5">Logging CTF challenge reviews covering SQL inject pathways and JWT session bypasses inside private folders.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Reading progress */}
        <div className="p-6 rounded-2xl border border-white/10 glass-panel space-y-4">
          <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono border-b border-white/5 pb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-500" /> Active Reads
          </h2>
          <div className="space-y-3.5">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-zinc-200">Designing Data-Intensive Applications</span>
              <span className="font-mono text-zinc-400 text-[10px]">48% Complete</span>
            </div>
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500" style={{ width: '48%' }} />
            </div>
            <p className="text-[10px] text-zinc-500 font-mono">By Martin Kleppmann • Current chapter: Partitioning and Relational Replications</p>
          </div>
        </div>
      </div>

    </div>
  );
}
