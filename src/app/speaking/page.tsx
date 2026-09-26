'use client';

import React from 'react';
import { Radio, ExternalLink, Calendar, Users } from 'lucide-react';

export default function SpeakingPage() {
  const talks = [
    {
      title: 'Building Autonomous Curation Engines with Gemini 1.5 Flash',
      event: 'Developer Meetup & Technical Presentation',
      date: 'June 2026',
      audience: 'Engineers & Founders',
      desc: 'Shared practical lessons from deploying Google Gemini in production: enforcing deterministic JSON schemas, vector deduplication with pgvector, and sub-50ms edge caching in Next.js 16.',
      slidesUrl: 'https://github.com/IamKady'
    },
    {
      title: 'Transitioning from Civil Engineering to Systems Coding',
      event: 'University Tech Talk',
      date: 'April 2025',
      audience: 'CS Undergraduates',
      desc: 'Explored how the physical mechanics of load distribution, structural drafting, and material tension directly map to resilient database design, distributed caching, and microservices.',
      slidesUrl: 'https://github.com/IamKady'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-12 py-6">
      
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          <Radio className="w-8 h-8 text-indigo-600 dark:text-indigo-400" /> Speaking &amp; Talks
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 font-sans max-w-xl leading-relaxed">
          Presentations, developer meetups, and technical talks on distributed architectures, AI agent pipelines, and engineering transitions.
        </p>
      </div>

      {/* Talks list */}
      <div className="grid grid-cols-1 gap-6">
        {talks.map((talk, idx) => (
          <div key={idx} className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 glass-panel space-y-4 shadow-sm bg-white/80 dark:bg-black/40">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-white/5 pb-3">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-sans">{talk.title}</h2>
                <span className="text-xs text-indigo-600 dark:text-indigo-400 font-mono block mt-0.5">{talk.event}</span>
              </div>

              <div className="flex items-center space-x-3 text-[11px] font-mono text-slate-500 dark:text-zinc-500">
                <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> {talk.date}</span>
                <span>•</span>
                <span className="flex items-center"><Users className="w-3.5 h-3.5 mr-1" /> {talk.audience}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-sans">
              {talk.desc}
            </p>

            <div className="pt-2 flex justify-between items-center text-xs text-slate-500 dark:text-zinc-500 font-mono">
              <a 
                href={talk.slidesUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center font-semibold"
              >
                View session repository &amp; notes <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
