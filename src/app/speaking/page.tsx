'use client';

import React from 'react';
import { Radio, ExternalLink, Calendar, Users } from 'lucide-react';

export default function SpeakingPage() {
  const talks = [
    {
      title: 'Building Autonomous Curation Engines with Gemini 1.5 Flash',
      event: 'Webinar & Technical Presentation',
      date: 'June 2026',
      audience: 'Developer Meetup',
      desc: 'Discussed strategies for prompt tuning, vector deduplication inside PostgreSQL, and caching edge configurations in Next.js.',
      slidesUrl: 'https://github.com/IamKady'
    },
    {
      title: 'Transitioning from Civil Engineering to Systems Coding',
      event: 'College Tech Talk',
      date: 'April 2025',
      audience: 'CS Undergraduates',
      desc: 'Shared structural physics perspectives mapping directly to database design schemas, routing tables, and server containers.',
      slidesUrl: 'https://github.com/IamKady'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-12 py-6">
      
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight flex items-center gap-2">
          <Radio className="w-8 h-8 text-indigo-400 animate-pulse" /> Speaking
        </h1>
        <p className="text-sm text-zinc-400 font-sans max-w-xl">
          College presentations, developers webinars, and tech talks sharing systems engineering learnings.
        </p>
      </div>

      {/* Talks list */}
      <div className="grid grid-cols-1 gap-6">
        {talks.map((talk, idx) => (
          <div key={idx} className="p-6 rounded-2xl border border-white/10 glass-panel space-y-4 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
              <div>
                <h2 className="text-base font-bold text-white font-sans">{talk.title}</h2>
                <span className="text-xs text-indigo-400 font-mono block mt-0.5">{talk.event}</span>
              </div>

              <div className="flex items-center space-x-3 text-[10px] font-mono text-zinc-500">
                <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> {talk.date}</span>
                <span className="flex items-center"><Users className="w-3.5 h-3.5 mr-1" /> {talk.audience}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              {talk.desc}
            </p>

            <div className="pt-2 flex justify-between items-center text-[10px] text-zinc-500 font-mono">
              <a 
                href={talk.slidesUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 flex items-center"
              >
                Inspect presentation details <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
