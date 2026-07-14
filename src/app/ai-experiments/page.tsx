'use client';

import React, { useState } from 'react';
import { Sparkles, Table, Workflow, Search, Copy, Check } from 'lucide-react';
import { aiPrompts, modelComparisons } from '@/data/db';

export default function AIExperimentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredPrompts = aiPrompts.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto px-4 space-y-16 py-6">
      
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-indigo-400" /> AI experiments
        </h1>
        <p className="text-sm text-zinc-400 font-sans max-w-xl">
          Sandbox listing LLM prompt structures, token efficiencies, model latencies, and crawler ingestion workers.
        </p>
      </div>

      {/* 1. Model comparison matrix */}
      <div className="space-y-4">
        <div className="border-b border-white/5 pb-2.5">
          <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
            <Table className="w-4.5 h-4.5 text-indigo-400" /> LLM benchmarks matrix
          </h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-white/10 shadow-xl bg-black/40">
          <table className="w-full text-left font-sans text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-white font-semibold font-mono text-[10px]">
                <th className="p-4 uppercase tracking-wider">Benchmark Feature</th>
                <th className="p-4 text-indigo-400">GPT-4o (OpenAI)</th>
                <th className="p-4 text-violet-400">Claude 3.5 Sonnet</th>
                <th className="p-4 text-emerald-400">Gemini 1.5 Flash</th>
                <th className="p-4 text-amber-400">Llama 3 (Meta)</th>
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

      {/* 2. Prompts list */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/5 pb-4">
          <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
            <Workflow className="w-4.5 h-4.5 text-emerald-400" /> Prompt library logs
          </h2>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-zinc-500" />
            <input
              type="text"
              placeholder="Search prompts..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-1.5 text-xs bg-white/5 border border-white/10 rounded-lg outline-none text-white focus:border-indigo-500 transition-colors w-44 sm:w-48 font-sans"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPrompts.map((p) => (
            <div key={p.id} className="p-5 rounded-2xl border border-white/10 glass-panel flex flex-col justify-between space-y-4 shadow-xl">
              <div className="space-y-3.5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold text-white font-sans">{p.title}</h3>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase">{p.category}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(p.prompt, p.id)}
                    className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/5 cursor-pointer transition-colors"
                  >
                    {copiedId === p.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed font-sans">{p.description}</p>

                {p.systemInstruction && (
                  <div className="p-3 rounded bg-zinc-950/60 border border-white/5 font-mono text-[10px] text-zinc-300">
                    <span className="text-[9px] text-indigo-400 font-bold block mb-1">SYSTEM INSTRUCTION:</span>
                    {p.systemInstruction}
                  </div>
                )}

                <div className="p-3 rounded bg-zinc-950 border border-white/5 font-mono text-[10px] text-zinc-300 overflow-x-auto">
                  <span className="text-[9px] text-emerald-400 font-bold block mb-1">USER PROMPT PAYLOAD:</span>
                  <pre className="whitespace-pre-wrap">{p.prompt}</pre>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 flex justify-between items-center text-[10px] text-zinc-500 font-mono">
                <span>Latency: {p.latencyMs}ms | Tokens: {p.tokensUsed}</span>
                {copiedId === p.id && <span className="text-emerald-400 font-bold">Copied!</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
