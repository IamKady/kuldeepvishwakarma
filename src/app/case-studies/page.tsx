'use client';

import React, { useState } from 'react';
import { FileSearch, Github, ExternalLink, Cpu, Shield, TrendingUp, Lightbulb, AlertTriangle, Activity } from 'lucide-react';
import { projectsData } from '@/data/db';

export default function CaseStudiesPage() {
  const [activeStudyId, setActiveStudyId] = useState<string>('startupwire');
  const activeStudy = projectsData.find(p => p.id === activeStudyId) || projectsData[0];

  return (
    <div className="max-w-5xl mx-auto px-4 space-y-12 py-6">
      
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          <FileSearch className="w-8 h-8 text-indigo-600 dark:text-indigo-400" /> Case studies
        </h1>
        <p className="text-sm text-slate-600 dark:text-zinc-400 font-sans max-w-xl">
          Unified portal containing comprehensive engineering evaluations, architectural audits, impact metrics, and trade-offs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left selector */}
        <div className="lg:col-span-4 space-y-3">
          <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500 uppercase tracking-widest block font-bold">Select case study</span>
          {projectsData.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveStudyId(project.id)}
              className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                activeStudyId === project.id 
                  ? 'bg-indigo-600 border-indigo-500 text-white font-semibold shadow-md' 
                  : 'bg-white dark:bg-zinc-950/40 border-slate-200 dark:border-white/5 text-slate-700 dark:text-zinc-400 hover:border-slate-300 dark:hover:border-white/10'
              }`}
            >
              <div>
                <span className="text-xs font-bold block">{project.title}</span>
                <span className="text-[10px] text-slate-500 dark:text-zinc-500 mt-1 block font-mono">{project.caseStudy.timeline}</span>
              </div>
              <span className="text-lg">{project.logo}</span>
            </button>
          ))}
        </div>

        {/* Right content display */}
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 glass-panel space-y-8 bg-white/80 dark:bg-zinc-950/40 shadow-2xl">
          <div className="border-b border-slate-200 dark:border-white/5 pb-5 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <div className="flex items-center space-x-3">
                <span className="text-4xl">{activeStudy.logo}</span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-sans">{activeStudy.title}</h2>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono mt-0.5">{activeStudy.tagline}</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-2">
              {activeStudy.github && (
                <a 
                  href={activeStudy.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.8 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-xs text-slate-800 dark:text-white flex items-center gap-1.5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
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

          {/* Impact Telemetry Badges */}
          {activeStudy.impactMetrics && activeStudy.impactMetrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {activeStudy.impactMetrics.map((metric, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-indigo-500/20 bg-indigo-500/5 flex flex-col justify-between space-y-1">
                  <span className="text-[10px] font-mono uppercase text-indigo-600 dark:text-indigo-400 tracking-wider font-semibold">{metric.label}</span>
                  <span className="text-base font-bold text-slate-900 dark:text-white font-mono">{metric.value}</span>
                  <span className="text-[10px] text-slate-500 dark:text-zinc-400 leading-tight">{metric.detail}</span>
                </div>
              ))}
            </div>
          )}

          {/* Deep content breakdown */}
          <div className="space-y-6 font-sans text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
            <div className="space-y-1.5">
              <h3 className="text-xs font-mono font-bold uppercase text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5" /> 1. Overview</h3>
              <p className="leading-relaxed text-slate-700 dark:text-zinc-300">{activeStudy.caseStudy.overview}</p>
            </div>

            <div className="space-y-1.5 border-t border-slate-200 dark:border-white/5 pt-4">
              <h3 className="text-xs font-mono font-bold uppercase text-indigo-700 dark:text-indigo-400">2. Business Problem & Targets</h3>
              <p className="leading-relaxed text-slate-700 dark:text-zinc-300">{activeStudy.caseStudy.problem}</p>
            </div>

            <div className="space-y-1.5 border-t border-slate-200 dark:border-white/5 pt-4">
              <h3 className="text-xs font-mono font-bold uppercase text-indigo-700 dark:text-indigo-400">3. System Architecture & Relational Specs</h3>
              <p className="leading-relaxed text-slate-700 dark:text-zinc-300">{activeStudy.caseStudy.databaseSpecs}</p>
              <pre className="p-4 rounded-xl bg-slate-900 dark:bg-black border border-slate-800 dark:border-white/5 font-mono text-[10px] text-zinc-200 dark:text-zinc-300 overflow-x-auto select-none mt-2">
                {activeStudy.caseStudy.architectureDiagram}
              </pre>
            </div>

            {/* Post-Mortem Card */}
            {activeStudy.postMortem && (
              <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 space-y-2 font-mono text-xs">
                <div className="flex items-center text-rose-600 dark:text-rose-400 font-bold uppercase tracking-wider text-[10px]">
                  <AlertTriangle className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" /> Technical Post-Mortem & Architectural Patch
                </div>
                <div className="space-y-1 text-slate-700 dark:text-zinc-300 text-[11px]">
                  <p><span className="text-rose-500 font-bold">Failure Mode:</span> {activeStudy.postMortem.failureMode}</p>
                  <p><span className="text-amber-500 font-bold">Root Cause:</span> {activeStudy.postMortem.rootCause}</p>
                  <p><span className="text-emerald-500 font-bold">Resolution:</span> {activeStudy.postMortem.resolution}</p>
                </div>
              </div>
            )}

            <div className="space-y-1.5 border-t border-slate-200 dark:border-white/5 pt-4">
              <h3 className="text-xs font-mono font-bold uppercase text-rose-700 dark:text-rose-400 flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> 4. Security Protocols</h3>
              <p className="leading-relaxed text-slate-700 dark:text-zinc-300">{activeStudy.caseStudy.securityProtocols}</p>
            </div>

            <div className="space-y-1.5 border-t border-slate-200 dark:border-white/5 pt-4">
              <h3 className="text-xs font-mono font-bold uppercase text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5"><TrendingUp className="w-3.5 h-3.5" /> 5. SEO & Performance Tunings</h3>
              <p className="leading-relaxed text-slate-700 dark:text-zinc-300">{activeStudy.caseStudy.seoOptimization}</p>
            </div>

            <div className="space-y-1.5 border-t border-slate-200 dark:border-white/5 pt-4">
              <h3 className="text-xs font-mono font-bold uppercase text-amber-700 dark:text-amber-500 flex items-center gap-1.5"><Lightbulb className="w-3.5 h-3.5" /> 6. Challenges & Lessons</h3>
              <p className="leading-relaxed text-slate-700 dark:text-zinc-300">{activeStudy.caseStudy.challenges}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
