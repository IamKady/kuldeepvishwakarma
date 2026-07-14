'use client';

import React from 'react';
import { Shield, BookOpen, Calendar, Tag, CornerDownLeft } from 'lucide-react';
import { researchNotes } from '@/data/db';

export default function ResearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 space-y-12 py-6">
      
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight flex items-center gap-2">
          <Shield className="w-8 h-8 text-indigo-400" /> Research
        </h1>
        <p className="text-sm text-zinc-400 font-sans max-w-xl">
          MSc Computer Science research papers, security analysis protocols, and AI curation summaries.
        </p>
      </div>

      {/* Research notes list */}
      <div className="space-y-8">
        {researchNotes.map((note) => (
          <div key={note.id} className="p-6 rounded-2xl border border-white/10 glass-panel space-y-4 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
              <div>
                <h2 className="text-base font-bold text-white font-sans">{note.title}</h2>
                <div className="flex items-center space-x-3 text-[10px] font-mono text-zinc-500 mt-1">
                  <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> {note.date}</span>
                  <span>•</span>
                  <span className="uppercase tracking-wider text-indigo-400">{note.category}</span>
                </div>
              </div>
            </div>

            {/* Abstract */}
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">Paper Abstract</span>
              <p className="text-xs text-zinc-400 leading-relaxed italic">
                {note.abstract}
              </p>
            </div>

            {/* Detailed Content */}
            <div className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed space-y-4 pt-2">
              {note.content.split('\n\n').map((paragraph, pIdx) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={pIdx} className="text-xs font-bold text-white font-mono uppercase tracking-wider text-indigo-400 flex items-center gap-1 mt-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('```')) {
                  const lines = paragraph.split('\n');
                  const codeLines = lines.slice(1, lines.length - 1).join('\n');
                  return (
                    <pre key={pIdx} className="p-3.5 rounded-lg bg-black border border-white/5 font-mono text-[10px] text-zinc-300 overflow-x-auto whitespace-pre">
                      {codeLines}
                    </pre>
                  );
                }
                return (
                  <p key={pIdx} className="text-zinc-400">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
