'use client';

import React from 'react';
import { Code, GitPullRequest, ExternalLink, Activity } from 'lucide-react';
import { openSourceContributions } from '@/data/db';

export default function OpenSourcePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 space-y-12 py-6">
      
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          <Code className="w-8 h-8 text-indigo-600 dark:text-indigo-400" /> Open source
        </h1>
        <p className="text-sm text-slate-600 dark:text-zinc-400 font-sans max-w-xl">
          Code submissions, public repositories, and optimization pull requests merged into major developer ecosystems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: PR Submissions */}
        <div className="space-y-6">
          <h2 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono border-b border-slate-200 dark:border-white/5 pb-2 flex items-center gap-2">
            <GitPullRequest className="w-4.5 h-4.5 text-indigo-600 dark:text-indigo-400" /> Merge contributions logs
          </h2>
          
          <div className="space-y-4">
            {openSourceContributions.map((pr) => (
              <div key={pr.id} className="p-5 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.01] hover:bg-slate-50 dark:hover:bg-white/[0.02] hover:border-slate-300 dark:hover:border-white/10 transition-all space-y-3 shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500 uppercase tracking-wider block">Repository Target</span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white font-mono mt-0.5 block">{pr.repoName}</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.8 border border-emerald-500/20 rounded-full">
                    {pr.status}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-800 dark:text-zinc-300 leading-snug font-sans">{pr.prTitle}</p>
                <p className="text-xs text-slate-600 dark:text-zinc-500 font-sans">{pr.description}</p>
                
                <div className="pt-2 border-t border-slate-200 dark:border-white/5 flex justify-between items-center text-[10px] text-slate-500 dark:text-zinc-500 font-mono">
                  <span>{pr.impact}</span>
                  <a 
                    href={pr.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center"
                  >
                    View PR <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Public Repositories checklist */}
        <div className="space-y-6">
          <h2 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono border-b border-slate-200 dark:border-white/5 pb-2 flex items-center gap-2">
            <Activity className="w-4.5 h-4.5 text-emerald-600 dark:text-emerald-400" /> Public utilities
          </h2>

          <div className="space-y-4">
            {[
              { name: 'startupwire-scraper', desc: 'Node.js crons that scrapes verified tech news RSS nodes, runs parsing logic and sanitizes payloads.', url: 'https://github.com/IamKady' },
              { name: 'pgvector-dedupe-triggers', desc: 'Supabase SQL scripts and triggers to calculate cosine distance threshold embeddings inside relational databases.', url: 'https://github.com/IamKady' },
              { name: 'developer-portfolio-os', desc: 'This portfolio template, containing terminal dashboards, command palettes, and dark CSS guidelines.', url: 'https://github.com/IamKady' }
            ].map((repo, idx) => (
              <div key={idx} className="p-5 rounded-2xl border border-slate-200 dark:border-white/5 bg-white/80 dark:bg-zinc-950/40 shadow-xs dark:shadow-none space-y-2 flex flex-col justify-between h-40">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-900 dark:text-white font-mono">{repo.name}</span>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-sans">{repo.desc}</p>
                </div>
                <a 
                  href={repo.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-mono flex items-center self-start"
                >
                  Inspect code repository <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
