'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Copy, 
  Check, 
  Terminal as TerminalIcon, 
  Table, 
  Workflow, 
  Search,
  Cpu,
  Layers,
  ArrowRight
} from 'lucide-react';
import { aiPrompts, modelComparisons, AIPrompt } from '@/data/db';

export default function AiLab() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);

  const categories = ['All', 'Coding', 'SEO', 'Refactoring', 'Debugging'];

  const handleCopy = (promptText: string, id: string) => {
    navigator.clipboard.writeText(promptText);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2500);
  };

  const filteredPrompts = aiPrompts.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.prompt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 space-y-16 py-6">
      
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight flex items-center">
          AI Lab
        </h1>
        <p className="text-sm text-zinc-400 font-sans max-w-xl">
          Sandbox for prompt engineering libraries, model benchmarks, and active agent workflows.
        </p>
      </div>

      {/* 1. Model Comparison Grid */}
      <div className="space-y-6">
        <div className="border-b border-white/5 pb-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans flex items-center">
            <Table className="w-5 h-5 text-indigo-400 mr-2" />
            Model Comparison Matrix
          </h2>
          <p className="text-xs text-zinc-400 font-sans mt-1">
            Benchmarks of top LLMs for developer automation, code formatting, and speed-to-cost scales.
          </p>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto rounded-xl border border-white/10 shadow-xl bg-black/40">
          <table className="w-full text-left font-sans text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-white font-semibold">
                <th className="p-4 uppercase tracking-wider font-mono text-[10px]">Benchmark Feature</th>
                <th className="p-4 text-indigo-400 font-mono text-[10px]">GPT-4o (OpenAI)</th>
                <th className="p-4 text-violet-400 font-mono text-[10px]">Claude 3.5 Sonnet</th>
                <th className="p-4 text-emerald-400 font-mono text-[10px]">Gemini 1.5 Flash</th>
                <th className="p-4 text-amber-400 font-mono text-[10px]">Llama 3 (Meta)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-zinc-300">
              {modelComparisons.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-white font-mono">{row.feature}</td>
                  <td className="p-4">{row.gpt4o}</td>
                  <td className="p-4">{row.claudeSonnet}</td>
                  <td className="p-4">{row.geminiFlash}</td>
                  <td className="p-4">{row.llama}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Automated Workflows Details */}
      <div className="space-y-6">
        <div className="border-b border-white/5 pb-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans flex items-center">
            <Workflow className="w-5 h-5 text-emerald-400 mr-2" />
            AI Ingestion Pipelines
          </h2>
          <p className="text-xs text-zinc-400 font-sans mt-1">
            How autonomous agents extract, format, and publish news updates on StartupWire.in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl border border-white/10 glass-panel space-y-3">
            <span className="text-[10px] font-mono text-indigo-400 font-bold">STAGE 01</span>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Ingestion Worker</h3>
            <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
              Cron trigger initiates every 4 hours. Node scripts fetch RSS XML payloads from pre-audited tech sites and map schemas in memory.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-white/10 glass-panel space-y-3">
            <span className="text-[10px] font-mono text-emerald-400 font-bold">STAGE 02</span>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">LLM Validation</h3>
            <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
              Gemini 1.5 Flash cleans duplicate nodes via vector cosine comparisons. Feeds are summarized based on strict prompt constraints.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-white/10 glass-panel space-y-3">
            <span className="text-[10px] font-mono text-amber-400 font-bold">STAGE 03</span>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Database Commit</h3>
            <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
              Formats output as JSON Schema. Stores payload inside Supabase PostgreSQL, prompting automated sitemap regeneration.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Interactive Prompt Library */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/5 pb-4">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans flex items-center">
              <Sparkles className="w-5 h-5 text-amber-400 mr-2" />
              Prompt Engineering Library
            </h2>
            <p className="text-xs text-zinc-400 font-sans">
              Optimized prompts designed for development workflows, copywriting, and security decodes.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-zinc-500" />
              <input
                type="text"
                placeholder="Search prompt..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs bg-white/5 border border-white/10 rounded-lg outline-none text-white focus:border-indigo-500 transition-colors w-40 sm:w-48 font-sans"
              />
            </div>
            
            {/* Filter buttons */}
            <div className="flex bg-white/5 p-1 rounded-lg border border-white/5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-2 py-1 text-[9px] uppercase tracking-wider font-semibold rounded-md transition-all cursor-pointer ${
                    activeCategory === cat 
                      ? 'bg-indigo-600 text-white shadow-md' 
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Prompts list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPrompts.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-xl border border-white/10 glass-panel flex flex-col justify-between space-y-4 shadow-xl"
              >
                <div className="space-y-3.5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-bold text-white font-sans">{p.title}</h3>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase">{p.category}</span>
                    </div>
                    
                    <button
                      onClick={() => handleCopy(p.prompt, p.id)}
                      className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/5 transition-all cursor-pointer flex items-center"
                      title="Copy full prompt"
                    >
                      {copiedPromptId === p.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    {p.description}
                  </p>

                  {p.systemInstruction && (
                    <div className="p-3.5 rounded bg-zinc-950/60 border border-white/5 space-y-1.5">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-indigo-400 block font-bold">
                        SYSTEM INSTRUCTION:
                      </span>
                      <p className="text-[10px] font-mono text-zinc-300 leading-relaxed">
                        {p.systemInstruction}
                      </p>
                    </div>
                  )}

                  <div className="p-3.5 rounded bg-zinc-950/80 border border-white/5 space-y-1.5">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-emerald-400 block font-bold">
                      USER PROMPT PLAYLOAD:
                    </span>
                    <pre className="text-[10px] font-mono text-zinc-300 whitespace-pre-wrap leading-relaxed overflow-x-auto">
                      {p.prompt}
                    </pre>
                  </div>
                </div>

                <div className="pt-2 flex justify-between items-center text-[10px] text-zinc-500 font-mono">
                  <span>Contains variable bindings (e.g. &#123;&#123;var&#125;&#125;)</span>
                  {copiedPromptId === p.id && (
                    <span className="text-emerald-400 font-bold animate-pulse">Copied to Clipboard!</span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredPrompts.length === 0 && (
            <div className="md:col-span-2 text-center py-12 text-zinc-500 font-sans text-xs">
              No matching prompts found in this laboratory indexing.
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
