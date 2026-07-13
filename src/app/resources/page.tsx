'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bookmark, 
  BookOpen, 
  Terminal, 
  Copy, 
  Check, 
  CheckSquare, 
  Compass, 
  Star,
  Settings,
  StarOff
} from 'lucide-react';
import { booksData, resourceCheatSheets } from '@/data/db';

export default function Resources() {
  const [activeSheetTab, setActiveSheetTab] = useState<'Git' | 'Linux' | 'React'>('Git');
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);
  
  // Interactive checklist states
  const [checkedTools, setCheckedTools] = useState<Record<string, boolean>>({
    't-vscode': true,
    't-docker': true,
    't-copilot': true,
    't-postman': false,
    't-insomnia': false,
  });

  const handleCopyCmd = (cmdText: string) => {
    navigator.clipboard.writeText(cmdText);
    setCopiedCmd(cmdText);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const toggleTool = (id: string) => {
    setCheckedTools(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const developerToolsList = [
    { id: 't-vscode', category: 'IDE', name: 'VS Code (Extensions: Prettier, ESLint, GitLens)', desc: 'Primary code writing workspace environment.' },
    { id: 't-git', category: 'Version Control', name: 'Git & GitHub Desktop', desc: 'Managing commits and repositories.' },
    { id: 't-docker', category: 'Containerization', name: 'Docker Desktop', desc: 'Deploying isolated environment microservices.' },
    { id: 't-postman', category: 'API Utilities', name: 'Postman / Insomnia API client', desc: 'Testing network endpoints and payloads.' },
    { id: 't-warp', category: 'Terminal', name: 'Warp / Hyper terminal shell', desc: 'GPU-accelerated terminal for fast command line work.' }
  ];

  const aiToolsList = [
    { id: 't-copilot', category: 'Code Writing', name: 'GitHub Copilot / Cursor IDE', desc: 'AI autocompletion and contextual code writing.' },
    { id: 't-chat', category: 'Debugging', name: 'ChatGPT Plus (GPT-4o) / Claude Pro', desc: 'Logic mapping, security decodes, complex reasoning.' },
    { id: 't-gemini', category: 'Data Workers', name: 'Google AI Studio (Gemini 1.5 Flash)', desc: 'Testing API endpoints and scraping structures.' }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 space-y-16 py-6">
      
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight flex items-center">
          Resource Library
        </h1>
        <p className="text-sm text-zinc-400 font-sans max-w-xl">
          Curated cheat sheets, developer checklists, AI assistants, and progress logs of books I read.
        </p>
      </div>

      {/* Part 1: Interactive Books library */}
      <div className="space-y-6">
        <div className="border-b border-white/5 pb-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans flex items-center">
            <BookOpen className="w-5 h-5 text-indigo-400 mr-2" />
            Reading Progress Tracker
          </h2>
          <p className="text-xs text-zinc-400 font-sans mt-1">
            Logging books covering software architecture, developer operations, and product scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {booksData.map((book) => (
            <div 
              key={book.id}
              className="p-5 rounded-xl border border-white/10 glass-panel flex flex-col justify-between space-y-4 shadow-xl"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold text-white font-sans">{book.title}</h3>
                    <span className="text-[10px] text-zinc-500 font-mono">By {book.author}</span>
                  </div>
                  
                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded border ${
                    book.status === 'Completed'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      : book.status === 'Reading'
                      ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20 animate-pulse'
                      : 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20'
                  }`}>
                    {book.status}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] text-zinc-400">
                    <span>Reading Completion:</span>
                    <span>{book.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        book.status === 'Completed' 
                          ? 'bg-emerald-400' 
                          : 'bg-indigo-400'
                      }`} 
                      style={{ width: `${book.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center text-[10px] border-t border-white/5 pt-3">
                <span className="font-mono text-zinc-500 uppercase">{book.category}</span>
                {book.rating && (
                  <div className="flex items-center text-amber-400">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star 
                        key={idx} 
                        className={`w-3 h-3 ${idx < book.rating! ? 'fill-current' : 'opacity-20'}`} 
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Part 2: Developer & AI Tools checklist */}
      <div className="space-y-6">
        <div className="border-b border-white/5 pb-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans flex items-center">
            <CheckSquare className="w-5 h-5 text-emerald-400 mr-2" />
            Developer Tools Configuration Checklist
          </h2>
          <p className="text-xs text-zinc-400 font-sans mt-1">
            Interactive checklists covering core IDE environments, developer extensions, and artificial intelligence helpers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Col 1: Dev Tools */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono border-b border-white/5 pb-2">
              IDE & Local Server Utils
            </h3>
            
            <div className="space-y-3">
              {developerToolsList.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => toggleTool(tool.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start space-x-3 cursor-pointer ${
                    checkedTools[tool.id]
                      ? 'bg-emerald-500/5 border-emerald-500/20 text-zinc-300'
                      : 'bg-zinc-950/40 border-white/5 hover:border-white/10 text-zinc-400'
                  }`}
                >
                  <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${
                    checkedTools[tool.id] 
                      ? 'bg-emerald-500 border-emerald-400 text-zinc-950' 
                      : 'border-white/10 bg-transparent'
                  }`}>
                    {checkedTools[tool.id] && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-white leading-none">{tool.name}</span>
                      <span className="text-[8px] font-mono uppercase text-zinc-500 tracking-wide">
                        {tool.category}
                      </span>
                    </div>
                    <p className="text-[10px] text-zinc-500 font-sans mt-1 leading-normal">
                      {tool.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Col 2: AI Helpers */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono border-b border-white/5 pb-2">
              AI Assistants & Prompting Environments
            </h3>

            <div className="space-y-3">
              {aiToolsList.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => toggleTool(tool.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start space-x-3 cursor-pointer ${
                    checkedTools[tool.id]
                      ? 'bg-emerald-500/5 border-emerald-500/20 text-zinc-300'
                      : 'bg-zinc-950/40 border-white/5 hover:border-white/10 text-zinc-400'
                  }`}
                >
                  <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${
                    checkedTools[tool.id] 
                      ? 'bg-emerald-500 border-emerald-400 text-zinc-950' 
                      : 'border-white/10 bg-transparent'
                  }`}>
                    {checkedTools[tool.id] && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-white leading-none">{tool.name}</span>
                      <span className="text-[8px] font-mono uppercase text-zinc-500 tracking-wide">
                        {tool.category}
                      </span>
                    </div>
                    <p className="text-[10px] text-zinc-500 font-sans mt-1 leading-normal">
                      {tool.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Part 3: CLI Command sheets */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/5 pb-4">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans flex items-center">
              <Terminal className="w-5 h-5 text-amber-400 mr-2" />
              CLI Command & Syntax Reference
            </h2>
            <p className="text-xs text-zinc-400 font-sans">
              Frequently utilized system configurations and commands for Git revision and Linux shells.
            </p>
          </div>

          {/* Sheet tabs */}
          <div className="flex bg-white/5 p-1 rounded-lg border border-white/5">
            {(['Git', 'Linux'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSheetTab(tab)}
                className={`px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold rounded-md transition-all cursor-pointer ${
                  activeSheetTab === tab 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {tab} CLI
              </button>
            ))}
          </div>
        </div>

        {/* Tab content panel */}
        <div className="space-y-4">
          {resourceCheatSheets
            .filter(sheet => sheet.category === activeSheetTab)
            .map((sheet) => (
              <div key={sheet.id} className="space-y-3">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  {sheet.title}
                </h3>
                
                <div className="grid grid-cols-1 gap-4">
                  {sheet.commands.map((cmdItem, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-xl border border-white/10 bg-zinc-950/80 flex items-center justify-between gap-4"
                    >
                      <div className="space-y-1.5 overflow-hidden">
                        <code className="text-xs font-mono text-amber-400 whitespace-pre-wrap leading-tight block">
                          {cmdItem.cmd}
                        </code>
                        <span className="text-[10px] font-sans text-zinc-500 leading-normal block">
                          {cmdItem.desc}
                        </span>
                      </div>
                      
                      <button
                        onClick={() => handleCopyCmd(cmdItem.cmd)}
                        className="p-2 rounded bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/5 transition-all cursor-pointer flex-shrink-0"
                        title="Copy command"
                      >
                        {copiedCmd === cmdItem.cmd ? (
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

    </div>
  );
}
