'use client';

import React, { useState } from 'react';
import { FileSearch, Github, ExternalLink, Cpu, Shield, TrendingUp, Lightbulb } from 'lucide-react';
import { projectsData } from '@/data/db';

export default function CaseStudiesPage() {
  const [activeStudyId, setActiveStudyId] = useState<string>('startupwire');
  const activeStudy = projectsData.find(p => p.id === activeStudyId) || projectsData[0];

  return (
    <div className="max-w-5xl mx-auto px-4 space-y-12 py-6">
      
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight flex items-center gap-2">
          <FileSearch className="w-8 h-8 text-indigo-400" /> Case studies
        </h1>
        <p className="text-sm text-zinc-400 font-sans max-w-xl">
          Unified portal containing comprehensive engineering evaluations, architectural audits, and trade-offs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left selector */}
        <div className="lg:col-span-4 space-y-3">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">Select case study</span>
          {projectsData.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveStudyId(project.id)}
              className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                activeStudyId === project.id 
                  ? 'bg-indigo-600 border-indigo-400 text-white font-semibold' 
                  : 'bg-zinc-950/40 border-white/5 text-zinc-400 hover:border-white/10'
              }`}
            >
              <div>
                <span className="text-xs font-bold block">{project.title}</span>
                <span className="text-[10px] text-zinc-500 mt-1 block font-mono">{project.caseStudy.timeline}</span>
              </div>
              <span className="text-lg">{project.logo}</span>
            </button>
          ))}
        </div>

        {/* Right content display */}
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl border border-white/10 glass-panel space-y-8 bg-zinc-950/40 shadow-2xl">
          <div className="border-b border-white/5 pb-5 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <div className="flex items-center space-x-3">
                <span className="text-4xl">{activeStudy.logo}</span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white font-sans">{activeStudy.title}</h2>
                  <p className="text-xs text-indigo-400 font-mono mt-0.5">{activeStudy.tagline}</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-2">
              {activeStudy.github && (
                <a 
                  href={activeStudy.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.8 bg-white/5 border border-white/10 rounded-lg text-xs text-white flex items-center gap-1.5 hover:bg-white/10 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" /> Repository
                </a>
              )}
              {activeStudy.live && (
                <a 
                  href={activeStudy.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.8 bg-indigo-600 text-xs text-white rounded-lg flex items-center gap-1.5 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/10"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Live
                </a>
              )}
            </div>
          </div>

          {/* Deep content breakdown */}
          <div className="space-y-6 font-sans text-xs sm:text-sm text-zinc-300">
            <div className="space-y-1.5">
              <h3 className="text-xs font-mono font-bold uppercase text-indigo-400 flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5" /> 1. Overview</h3>
              <p className="leading-relaxed text-zinc-300">{activeStudy.caseStudy.overview}</p>
            </div>

            <div className="space-y-1.5 border-t border-white/5 pt-4">
              <h3 className="text-xs font-mono font-bold uppercase text-indigo-400">2. Business Problem & Targets</h3>
              <p className="leading-relaxed text-zinc-300">{activeStudy.caseStudy.problem}</p>
            </div>

            <div className="space-y-1.5 border-t border-white/5 pt-4">
              <h3 className="text-xs font-mono font-bold uppercase text-indigo-400">3. System Architecture & Relational Specs</h3>
              <p className="leading-relaxed text-zinc-300">{activeStudy.caseStudy.databaseSpecs}</p>
              <pre className="p-4 rounded-xl bg-black border border-white/5 font-mono text-[10px] text-zinc-300 overflow-x-auto select-none mt-2">
                {activeStudy.caseStudy.architectureDiagram}
              </pre>
            </div>

            <div className="space-y-1.5 border-t border-white/5 pt-4">
              <h3 className="text-xs font-mono font-bold uppercase text-rose-400 flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> 4. Security Protocols</h3>
              <p className="leading-relaxed text-zinc-300">{activeStudy.caseStudy.securityProtocols}</p>
            </div>

            <div className="space-y-1.5 border-t border-white/5 pt-4">
              <h3 className="text-xs font-mono font-bold uppercase text-emerald-400 flex items-center gap-1.5"><TrendingUp className="w-3.5 h-3.5" /> 5. SEO & Performance Tunings</h3>
              <p className="leading-relaxed text-zinc-300">{activeStudy.caseStudy.seoOptimization}</p>
            </div>

            <div className="space-y-1.5 border-t border-white/5 pt-4">
              <h3 className="text-xs font-mono font-bold uppercase text-amber-500 flex items-center gap-1.5"><Lightbulb className="w-3.5 h-3.5" /> 6. Challenges & Lessons</h3>
              <p className="leading-relaxed text-zinc-300">{activeStudy.caseStudy.challenges}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
