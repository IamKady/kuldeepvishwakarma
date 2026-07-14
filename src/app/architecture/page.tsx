'use client';

import React from 'react';
import { Cpu, Terminal, Compass, Layers } from 'lucide-react';
import { systemArchitectures } from '@/data/db';

export default function ArchitecturePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 space-y-12 py-6">
      
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight flex items-center gap-2">
          <Cpu className="w-8 h-8 text-indigo-400" /> System architectures
        </h1>
        <p className="text-sm text-zinc-400 font-sans max-w-xl">
          Detailed schema specifications, database triggers, and workflow diagrams of automated platforms I have engineered.
        </p>
      </div>

      {/* Architectures list */}
      <div className="space-y-12">
        {systemArchitectures.map((arch) => (
          <div key={arch.id} className="space-y-6">
            <div className="border-b border-white/5 pb-4">
              <h2 className="text-xl font-bold text-white font-sans">{arch.title}</h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-sans mt-1 leading-relaxed">
                {arch.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* ASCII Diagram */}
              <div className="lg:col-span-7 p-5 rounded-2xl border border-white/10 bg-black font-mono text-[10px] text-zinc-300 shadow-xl overflow-x-auto select-none">
                <span className="text-zinc-500 font-bold uppercase tracking-widest text-[9px] block mb-3">// PIPELINE DATA-FLOW MAP</span>
                <pre className="leading-tight">{arch.diagram}</pre>
              </div>

              {/* Components list */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">Pipeline Nodes</span>
                <div className="space-y-3.5">
                  {arch.components.map((comp, cIdx) => (
                    <div key={cIdx} className="p-3.5 rounded-xl border border-white/5 bg-white/[0.01] space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-bold text-white">
                        <span>{comp.name}</span>
                        <span className="text-[9px] font-mono text-indigo-400 bg-indigo-500/5 px-2 py-0.5 border border-indigo-500/10 rounded">{comp.tech}</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-snug">{comp.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rationale */}
            <div className="p-5 rounded-xl border border-white/5 bg-zinc-950/40 space-y-2">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-bold">Engineering Rationale</span>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                {arch.rationale}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
