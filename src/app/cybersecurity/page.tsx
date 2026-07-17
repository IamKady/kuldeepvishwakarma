'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, ShieldAlert, Cpu, Lock, Calendar, BookOpen } from 'lucide-react';
import { cyberLogs, CyberLog } from '@/data/db';

interface TerminalLine {
  text: string;
  type: 'input' | 'output' | 'error' | 'success';
}

export default function Cybersecurity() {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<TerminalLine[]>([
    { text: 'Welcome to KCV Security Console [Version 1.0.4]', type: 'success' },
    { text: 'Type "help" to list available operational commands.', type: 'output' },
    { text: '', type: 'output' }
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll terminal to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  const focusTerminal = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...terminalHistory, { text: `guest@kcv-security-ops:~$ ${terminalInput}`, type: 'input' as const }];

    switch (cmd) {
      case 'help':
        newHistory.push(
          { text: 'Available commands:', type: 'success' },
          { text: '  about      - Profile identity pitch', type: 'output' },
          { text: '  skills     - Core programming languages & competencies', type: 'output' },
          { text: '  projects   - Show current active products', type: 'output' },
          { text: '  contact    - Retrieve contact credentials', type: 'output' },
          { text: '  uptime     - View current server status telemetry', type: 'output' },
          { text: '  clear      - Reset console screen logs', type: 'output' },
          { text: '  sudo       - Attempt root administration privilege access', type: 'output' }
        );
        break;
      case 'about':
        newHistory.push({
          text: 'Kuldeep Chandra Vishwakarma: Software Engineer • AI Builder • Startup Founder. I build secure full-stack applications (MERN, Next.js) and configure autonomous AI pipelines.',
          type: 'output'
        });
        break;
      case 'skills':
        newHistory.push({
          text: 'Languages: JavaScript, TypeScript, Python, C++, HTML, CSS. Frameworks: Next.js, React, Node.js, Express, Supabase, PostgreSQL. Utilities: Git, Linux, Docker, Zod validation, JWT.',
          type: 'output'
        });
        break;
      case 'projects':
        newHistory.push(
          { text: 'Active Products:', type: 'success' },
          { text: '  - StartupWire.in: AI-Powered Tech Startup news summaries with edge runtime indexing.', type: 'output' },
          { text: '  - AIToolsWebsite: Relational AI directory and side-by-side product comparisons ecosystem.', type: 'output' },
          { text: '  - Bookperia: AI-Powered Book sanctuary and marketplace ecosystem with companion personas.', type: 'output' }
        );
        break;
      case 'contact':
        newHistory.push({
          text: 'Email: kuldeepvishwakarma3803@gmail.com | Phone: +91 8303929309 | Github: github.com/IamKady | LinkedIn: linkedin.com/in/iamkady',
          type: 'output'
        });
        break;
      case 'uptime':
        newHistory.push({
          text: 'Console Uptime: 324 days, 18 hours, 45 minutes, 12 seconds. Node: v22.1.0. Location: India (IST).',
          type: 'success'
        });
        break;
      case 'sudo':
        newHistory.push({
          text: 'sudo: guest is not in the sudoers file. This incident has been logged and reported to Antigravity core engine daemon.',
          type: 'error'
        });
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      default:
        newHistory.push({
          text: `Command not found: "${cmd}". Type "help" for a list of valid commands.`,
          type: 'error'
        });
        break;
    }

    setTerminalHistory(newHistory);
    setTerminalInput('');
  };

  const getDifficultyColor = (diff: CyberLog['difficulty']) => {
    switch (diff) {
      case 'Easy': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'Medium': return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      default: return 'text-rose-400 bg-rose-500/10 border-rose-500/20';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-16 py-6">
      
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight flex items-center">
          Cybersecurity Log
        </h1>
        <p className="text-sm text-zinc-400 font-sans max-w-xl">
          CTF writeups, vulnerability mitigations, networking reviews, and a live terminal console.
        </p>
      </div>

      {/* Part 1: Interactive Terminal Console */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 border-b border-white/5 pb-2">
          <TerminalIcon className="w-5 h-5 text-amber-500" />
          <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono">
            Interactive Diagnostics Terminal
          </h2>
        </div>

        {/* Terminal Frame */}
        <div 
          onClick={focusTerminal}
          className="w-full h-80 rounded-xl bg-black border border-white/10 shadow-2xl overflow-hidden flex flex-col font-mono text-[11px] sm:text-xs cursor-text"
        >
          {/* Top Title Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900 border-b border-white/5 select-none">
            <div className="flex space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
            </div>
            <span className="text-zinc-500 font-medium">guest@kcv-security-ops:~</span>
            <Lock className="w-3.5 h-3.5 text-zinc-600" />
          </div>

          {/* Terminal Screen (Scrollable) */}
          <div className="flex-grow overflow-y-auto p-4 space-y-1.5 scrollbar-thin scrollbar-track-transparent">
            {terminalHistory.map((line, idx) => {
              let color = 'text-zinc-300';
              if (line.type === 'input') color = 'text-white font-semibold';
              else if (line.type === 'error') color = 'text-rose-400';
              else if (line.type === 'success') color = 'text-emerald-400';
              
              return (
                <div key={idx} className={`leading-relaxed whitespace-pre-wrap ${color}`}>
                  {line.text}
                </div>
              );
            })}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input Row */}
          <form onSubmit={handleCommand} className="flex items-center px-4 py-2 border-t border-white/5 bg-zinc-950">
            <span className="text-emerald-400 mr-2 font-bold">guest@kcv-security-ops:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={terminalInput}
              onChange={e => setTerminalInput(e.target.value)}
              className="flex-grow bg-transparent border-0 outline-none text-white font-mono placeholder-zinc-700"
              placeholder="type commands here..."
              autoFocus
            />
          </form>
        </div>
      </div>

      {/* Part 2: Security & Hacking writeups */}
      <div className="space-y-8">
        <div className="border-b border-white/5 pb-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans flex items-center">
            <ShieldAlert className="w-5 h-5 text-rose-400 mr-2" />
            Security & CTF Logs
          </h2>
          <p className="text-xs text-zinc-400 font-sans mt-1">
            Writeups on vulnerability exploitation, secure coding, and linux server logs.
          </p>
        </div>

        <div className="space-y-8">
          {cyberLogs.map((log) => (
            <div 
              key={log.id} 
              id={log.id}
              className="glass-panel p-6 rounded-xl border-white/10 space-y-4 shadow-lg"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white font-sans">
                    {log.title}
                  </h3>
                  <div className="flex items-center space-x-3 text-[10px] font-mono text-zinc-500">
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {log.date}
                    </span>
                    <span>•</span>
                    <span className="uppercase">{log.category}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded border uppercase ${getDifficultyColor(log.difficulty)}`}>
                    Diff: {log.difficulty}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-zinc-400 italic leading-relaxed font-sans">
                {log.summary}
              </p>

              {/* Markdown Content formatted (simulated parser output) */}
              <div className="p-4 rounded-lg bg-zinc-950 border border-white/5 font-mono text-xs text-zinc-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                {log.content}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
