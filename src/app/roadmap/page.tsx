'use client';

import React from 'react';
import { Target, CheckCircle2, Clock, Calendar } from 'lucide-react';

export default function RoadmapPage() {
  const milestones = [
    {
      year: 'Q3 2026',
      title: 'Programmatic Newsletter & Audio Digests',
      desc: 'Build background agents inside StartupWire to parse and generate email updates and text-to-speech audio podcasts.',
      status: 'In Progress'
    },
    {
      year: 'Q4 2026',
      title: 'Exposing News Curation API',
      desc: 'Create secure developer APIs for authenticated clients to pull aggregated startup and AI feeds, setting up billing systems.',
      status: 'Backlog'
    },
    {
      year: '2027',
      title: 'MSc Computer Science Graduation',
      desc: 'Graduate with advanced degrees, publishing research papers covering security of generative model APIs.',
      status: 'Backlog'
    },
    {
      year: '2028',
      title: 'Incubate Second SaaS Product',
      desc: 'Launch a developer security testing console leveraging automated CTF challenge environments and security telemetry.',
      status: 'Backlog'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-12 py-6">
      
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight flex items-center gap-2">
          <Target className="w-8 h-8 text-indigo-400" /> Roadmap
        </h1>
        <p className="text-sm text-zinc-400 font-sans max-w-xl">
          Multi-year engineering targets, startup growth milestones, and academic research schedules.
        </p>
      </div>

      {/* Visual Roadmap list */}
      <div className="relative border-l border-white/10 pl-8 ml-4 space-y-10">
        {milestones.map((item, idx) => (
          <div key={idx} className="relative">
            {/* Status dot */}
            <div className="absolute top-1.5 -left-[45px] w-8 h-8 rounded-full glass-panel border-white/10 flex items-center justify-center bg-zinc-950 shadow-md">
              {item.status === 'In Progress' ? (
                <Clock className="w-4 h-4 text-indigo-400 animate-pulse" />
              ) : (
                <Calendar className="w-4 h-4 text-zinc-500" />
              )}
            </div>

            <div className="p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:border-white/10 transition-all space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider bg-white/5 px-2.5 py-0.8 rounded border border-white/5">
                  {item.year}
                </span>
                <span className={`text-[9px] font-mono px-2 py-0.5 rounded border uppercase ${
                  item.status === 'In Progress'
                    ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                    : 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20'
                }`}>
                  {item.status}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white font-sans">{item.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans mt-1.5">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
