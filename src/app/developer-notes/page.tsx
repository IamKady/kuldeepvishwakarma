'use client';

import React, { useState } from 'react';
import { Terminal, Copy, Check, Hash } from 'lucide-react';
import { resourceCheatSheets } from '@/data/db';

export default function DeveloperNotesPage() {
  const [activeTab, setActiveTab] = useState<'Git' | 'Linux'>('Git');
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const handleCopy = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-12 py-6">
      
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight flex items-center gap-2">
          <Terminal className="w-8 h-8 text-indigo-400" /> Developer notes
        </h1>
        <p className="text-sm text-zinc-400 font-sans max-w-xl">
          Quick commands, setup routines, shell parameters, and syntax cheat sheets compiled during daily engineering workflows.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex bg-white/5 p-1 rounded-xl border border-white/5 max-w-fit">
        {(['Git', 'Linux'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === tab 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {tab} CLI Cheat Sheet
          </button>
        ))}
      </div>

      {/* Commands List */}
      <div className="space-y-6">
        {resourceCheatSheets
          .filter(sheet => sheet.category === activeTab)
          .map((sheet) => (
            <div key={sheet.id} className="space-y-4">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-1.5">
                <Hash className="w-4 h-4 text-indigo-400" /> {sheet.title}
              </h2>
              
              <div className="grid grid-cols-1 gap-4">
                {sheet.commands.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl border border-white/10 bg-zinc-950/80 flex items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5 overflow-hidden">
                      <code className="text-xs font-mono text-amber-400 whitespace-pre-wrap leading-tight block">
                        {item.cmd}
                      </code>
                      <span className="text-[10px] font-sans text-zinc-500 block leading-normal">
                        {item.desc}
                      </span>
                    </div>
                    
                    <button
                      onClick={() => handleCopy(item.cmd)}
                      className="p-2 rounded bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/5 cursor-pointer transition-colors"
                    >
                      {copiedCmd === item.cmd ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

    </div>
  );
}
