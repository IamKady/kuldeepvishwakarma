'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Rocket, 
  Terminal, 
  FileText, 
  ArrowRight, 
  BookOpen, 
  Target, 
  Code, 
  Cpu, 
  Calendar, 
  ChevronRight, 
  Download, 
  CheckCircle2, 
  Clock,
  Layers,
  Shield,
  Activity,
  GitBranch,
  RefreshCw,
  Eye,
  Check,
  CheckCircle,
  ExternalLink,
  BookOpenCheck,
  Users,
  GitCommit
} from 'lucide-react';
import { 
  projectsData, 
  blogsData, 
  startupLogs, 
  booksData, 
  timelineMilestones, 
  openSourceContributions,
  systemArchitectures,
  researchNotes 
} from '@/data/db';
import confetti from 'canvas-confetti';
import SpotlightCard from '@/components/SpotlightCard';


export default function Home() {
  const [localTime, setLocalTime] = useState('13:36 PM');
  const [dashboardTab, setDashboardTab] = useState<'status' | 'deployments' | 'radar' | 'oss' | 'books'>('status');
  const [copiedText, setCopiedText] = useState(false);
  const [hudView, setHudView] = useState<'code' | 'photo' | 'cli' | 'vitals'>('code');

  // Interactive CLI Prompt State
  const [cliInput, setCliInput] = useState('');
  const [cliHistory, setCliHistory] = useState<Array<{ command: string; output: string }>>([
    { command: 'init', output: 'KCV Terminal Sandbox v2.6.4 [ONLINE]. Type "help" for commands.' }
  ]);

  const handleCliSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = cliInput.trim().toLowerCase();
    if (!cmd) return;

    let output = '';
    switch (cmd) {
      case 'help':
        output = 'Available commands: bio, stack, startups, projects, vitals, neofetch, uptime, whoami, contact, hire, clear';
        break;
      case 'bio':
        output = 'Kuldeep Chandra Vishwakarma (@IamKady) — Software Engineer & AI Builder. Founder of StartupWire.in & Bookperia.com. Pursuing MSc in Computer Science.';
        break;
      case 'stack':
        output = 'Frontend: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 | Backend: Node.js, Python 3.12, FastAPI, Supabase, PostgreSQL | AI: Gemini API, PyTorch, RAG Pipelines';
        break;
      case 'startups':
        output = '1. StartupWire.in — AI-driven tech news & intelligence aggregation platform | 2. Bookperia.com — Semantic AI book discovery sanctuary.';
        break;
      case 'projects':
        output = 'Flagship Systems: Distributed RAG Engine, Sub-10ms URL Shortener, AI Agent Telemetry Relay, Healthcare Web Platforms (Vijaya & Sapthagiri), Open Source SDKs. Visit /projects to explore 15+ systems.';
        break;
      case 'vitals':
        output = 'Health: 99.98% SLA Nominal | Latency: 18ms (Edge CDN) | Lighthouse Score: 100/100 | Security: SSL/TLS 1.3 + HSTS Active.';
        break;
      case 'neofetch':
        output = 'OS: KCV-OS v2.6.4 (Next.js 16 Turbopack) | Host: Vercel Edge Runtime (iad1/bom1) | Kernel: TypeScript 5.8 / V8 | Packages: 36 Static Routes | Shell: zsh-cyber 5.9 | Memory: 42MB Edge SSR';
        break;
      case 'uptime':
        output = 'System online for 842 days continuous engineering. 0 critical vulnerabilities. Edge CDN active globally.';
        break;
      case 'whoami':
        output = 'visitor@antigravity-hud [Clearance: Level 4 Public Explorer - Welcome!]';
        break;
      case 'matrix':
        output = 'Wake up, Neo... The Matrix has you. Follow the white rabbit. 🐇';
        break;
      case 'contact':
        output = 'Email: contact@kuldeepvishwakarma.com | Location: Uttar Pradesh, India (IST +05:30) | Status: Open for remote roles.';
        break;
      case 'hire':
        output = '🚀 Status: OPEN for full-time Software Engineer & AI product engineering roles!';
        triggerConfetti();
        break;
      case 'clear':
        setCliHistory([]);
        setCliInput('');
        return;
      default:
        output = `Command not recognized: "${cmd}". Type "help" to see available options.`;
    }

    setCliHistory((prev) => [...prev, { command: cmd, output }]);
    setCliInput('');
  };

  // Update India Time (IST) dynamically
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setLocalTime(new Date().toLocaleTimeString('en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#818cf8', '#34d399', '#fbbf24', '#fb7185']
    });
  };

  const handleCopyProfile = () => {
    const profileJson = `{
  "name": "Kuldeep Chandra Vishwakarma",
  "alias": "IamKady",
  "role": "Software Engineer & AI Builder",
  "education": "MSc Computer Science (Pursuing) • BTech CSE",
  "location": "Uttar Pradesh, India (IST)",
  "specialties": [
    "Full-Stack Web (Next.js 16, TypeScript, React 19)",
    "Distributed Systems & Backend (Node.js, Python 3.12, FastAPI)",
    "AI Reasoning & Agents (Gemini API, PyTorch, RAG Pipelines)",
    "Programmatic SEO & High-Throughput APIs"
  ],
  "startups": [
    { "name": "StartupWire.in", "role": "Founder & Lead Architect", "desc": "AI Tech News Engine" },
    { "name": "Bookperia.com", "role": "Founder & Developer", "desc": "Semantic Book Discovery" }
  ],
  "security_focus": ["DevSecOps", "Zero-Trust Architecture", "API Hardening"],
  "status": "Available for High-Impact Software Engineering Roles"
}`;
    navigator.clipboard.writeText(profileJson);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  // State for Real-Time GitHub Commits
  const [realCommits, setRealCommits] = useState([
    { commit: '9f6b88f', branch: 'main', repoName: 'kuldeepvishwakarma', event: 'feat(content): add metric-driven case studies, post-mortems, AI prompts, and academic preprints', size: '144 kB', status: 'success', time: '5 days ago', url: 'https://github.com/IamKady/kuldeepvishwakarma/commit/9f6b88fbf3c35ae895560d5e2761a6a3ca5a226b' },
    { commit: '3844ac2', branch: 'main', repoName: 'kuldeepvishwakarma', event: 'feat(design): implement ambient spotlights, mega-menu dropdowns, and interactive CLI terminal HUD', size: '143 kB', status: 'success', time: '5 days ago', url: 'https://github.com/IamKady/kuldeepvishwakarma/commit/3844ac2851b830953823b7faf4d530929ca01c25' },
    { commit: '5dd5d3e', branch: 'main', repoName: 'kuldeepvishwakarma', event: 'feat: enhance site performance, image formats, logo framing, JSON-LD schema, and API caching headers', size: '142 kB', status: 'success', time: '5 days ago', url: 'https://github.com/IamKady/kuldeepvishwakarma/commit/5dd5d3edb012ad823a07ce9ea68e59ce09033324' },
    { commit: '7a19e24', branch: 'main', repoName: 'startupwire-engine', event: 'feat(crawler): dynamic RSS indexing pipeline with Gemini embeddings vector cache', size: '64 kB', status: 'success', time: '8 days ago', url: 'https://github.com/IamKady' }
  ]);
  const [isLiveSync, setIsLiveSync] = useState(false);

  // Fetch real-time GitHub commits from API route
  useEffect(() => {
    fetch('/api/github-commits')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.commits && data.commits.length > 0) {
          setRealCommits(data.commits);
          setIsLiveSync(data.live);
        }
      })
      .catch((err) => console.error('Failed to sync live GitHub commits:', err));
  }, []);

  // Generate dynamic-looking GitHub activity grid
  const generateGithubGrid = () => {
    const grid = [];
    const colors = [
      'bg-slate-200 border-slate-300 dark:bg-zinc-900 dark:border-zinc-950', 
      'bg-emerald-200 border-emerald-300 dark:bg-emerald-950/40 dark:border-emerald-950/20', 
      'bg-emerald-300 border-emerald-400 dark:bg-emerald-900/60 dark:border-emerald-900/30', 
      'bg-emerald-500 border-emerald-600 dark:bg-emerald-700/80 dark:border-emerald-700/40', 
      'bg-emerald-600 border-emerald-700 dark:bg-emerald-500 dark:border-emerald-400/50' 
    ];
    for (let i = 0; i < 7 * 26; i++) {
      const seed = Math.sin(i * 0.22) * Math.cos(i * 0.08) + Math.cos(i * 0.15);
      let level = 0;
      if (seed > 0.8) level = 4;
      else if (seed > 0.3) level = 3;
      else if (seed > -0.1) level = 2;
      else if (seed > -0.6) level = 1;
      grid.push(colors[level]);
    }
    return grid;
  };

  const githubCells = generateGithubGrid();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 relative">
      
      {/* 1. HERO SECTION */}
      <section className="min-h-[85vh] flex flex-col justify-center pt-6 space-y-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column: Heading, Badges, and Paragraph */}
          <div className="flex-1 space-y-6 text-left max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-indigo-500/20 dark:border-indigo-400/20 glass-panel-elevated bg-white/90 dark:bg-black/60 shadow-lg shadow-indigo-500/5 backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-slate-800 dark:text-zinc-200 tracking-wider flex items-center gap-1.5">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">AVAILABLE FOR FULL-TIME ROLES</span>
                <span className="text-slate-400 dark:text-zinc-600">•</span>
                <span>BASED IN INDIA (IST)</span>
                <span className="text-slate-400 dark:text-zinc-600">•</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">SOFTWARE ENGINEER &amp; FOUNDER</span>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-sans tracking-tight leading-[1.05] text-slate-900 dark:text-white">
                Kuldeep Chandra <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 drop-shadow-xs">
                  Vishwakarma
                </span>
              </h1>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded-md bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
                  Software Engineer
                </span>
                <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded-md bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                  Distributed Systems
                </span>
                <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                  AI Builder
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-sans max-w-2xl"
            >
              Full-stack software engineer and startup founder. I design and build resilient distributed web applications, deterministic AI agent pipelines, and high-performance tools using Next.js 16, TypeScript, and Python. Creator of <Link href="/startups" className="text-slate-900 dark:text-white font-semibold underline decoration-indigo-500/40 hover:decoration-indigo-500 underline-offset-4 transition-colors">StartupWire.in</Link> and <Link href="/startups" className="text-slate-900 dark:text-white font-semibold underline decoration-emerald-500/40 hover:decoration-emerald-500 underline-offset-4 transition-colors">Bookperia.com</Link>, while completing a Master&apos;s degree in Computer Science.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Link 
                href="/projects" 
                className="btn-shimmer px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all flex items-center group cursor-pointer border border-indigo-400/30"
              >
                Explore Architecture &amp; Projects 
                <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/startups" 
                className="px-5 py-2.5 text-xs font-semibold text-slate-700 dark:text-zinc-200 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 rounded-lg hover:-translate-y-0.5 transition-all flex items-center cursor-pointer shadow-xs dark:shadow-none"
              >
                Founder Startups
              </Link>
              <button 
                onClick={() => {
                  triggerConfetti();
                  window.open('/resume', '_blank');
                }}
                className="px-5 py-2.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 bg-emerald-500/10 dark:bg-emerald-500/5 hover:bg-emerald-500/20 dark:hover:bg-emerald-500/10 border border-emerald-500/30 dark:border-emerald-500/20 rounded-lg hover:-translate-y-0.5 transition-all flex items-center cursor-pointer"
              >
                Download Resume 
                <Download className="w-3.5 h-3.5 ml-2" />
              </button>
            </motion.div>

            {/* Core Tech Stack Micro Rail */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-500 dark:text-zinc-500"
            >
              <span className="text-slate-400 dark:text-zinc-600 font-semibold tracking-wider text-[10px]">CORE TECH:</span>
              {['Next.js 16', 'TypeScript', 'Python 3.12', 'Tailwind v4', 'Gemini AI', 'PostgreSQL', 'Vercel Edge'].map((tech) => (
                <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/5 text-slate-700 dark:text-zinc-300 hover:border-indigo-500/30 transition-colors">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Cybernetic HUD */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[480px] relative flex justify-center items-center"
          >
            <SpotlightCard borderBeam={true} className="w-full p-5 relative z-10 border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden group bg-white/90 dark:bg-black/50 glass-panel-elevated">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/5 pb-3 mb-4 font-mono text-xs text-slate-500 dark:text-zinc-500">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shadow-xs shadow-rose-500/50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-xs shadow-amber-500/50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-xs shadow-emerald-500/50" />
                  </div>
                  {/* Tab toggles */}
                  <div className="flex items-center space-x-1 border-l border-slate-200 dark:border-white/10 pl-2 sm:pl-3">
                    {[
                      { id: 'code', label: '01 // BIO.json' },
                      { id: 'photo', label: '02 // OPERATOR.id' },
                      { id: 'cli', label: '03 // SHELL.sh' },
                      { id: 'vitals', label: '04 // VITALS.sys' },
                    ].map((tab) => (
                      <button 
                        key={tab.id}
                        onClick={() => setHudView(tab.id as any)}
                        className={`text-[9px] sm:text-[10px] font-mono tracking-wider transition-all duration-200 px-2 py-0.5 rounded cursor-pointer ${
                          hudView === tab.id 
                            ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 font-bold border border-indigo-500/30' 
                            : 'text-slate-500 dark:text-zinc-500 hover:text-slate-800 dark:hover:text-zinc-300 hover:bg-slate-100 dark:hover:bg-white/5'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>
                {hudView === 'code' ? (
                  <button 
                    onClick={handleCopyProfile}
                    className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-[10px] text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer border border-slate-200 dark:border-white/5"
                  >
                    {copiedText ? 'Copied!' : 'Copy'}
                  </button>
                ) : hudView === 'cli' ? (
                  <button 
                    onClick={() => { setCliHistory([]); setCliInput(''); }}
                    className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-[10px] text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer border border-slate-200 dark:border-white/5 font-mono"
                  >
                    Clear
                  </button>
                ) : (
                  <span className="text-[9px] uppercase tracking-wider text-emerald-500 dark:text-emerald-400 font-mono font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    Live Telemetry
                  </span>
                )}
              </div>

              {/* Viewport Content */}
              <AnimatePresence mode="wait">
                {hudView === 'code' ? (
                  <motion.div
                    key="code"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="font-mono text-[11px] text-zinc-200 dark:text-zinc-300 overflow-x-auto p-3.5 rounded-lg bg-slate-950 dark:bg-black/70 border border-slate-800 dark:border-white/10 relative shadow-inner"
                  >
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[9px] text-zinc-500 uppercase tracking-widest">
                      <span>schema: developer_v2.json</span>
                      <span>UTF-8 • JSON</span>
                    </div>
                    <div className="space-y-0.5 leading-relaxed text-[11px]">
                      <div><span className="text-zinc-600 select-none mr-2.5 text-[10px]">01</span><span className="text-indigo-400">&quot;name&quot;</span>: <span className="text-emerald-300">&quot;Kuldeep Chandra Vishwakarma&quot;</span>,</div>
                      <div><span className="text-zinc-600 select-none mr-2.5 text-[10px]">02</span><span className="text-indigo-400">&quot;alias&quot;</span>: <span className="text-emerald-300">&quot;IamKady&quot;</span>,</div>
                      <div><span className="text-zinc-600 select-none mr-2.5 text-[10px]">03</span><span className="text-indigo-400">&quot;role&quot;</span>: <span className="text-emerald-300">&quot;Software Engineer &amp; AI Builder&quot;</span>,</div>
                      <div><span className="text-zinc-600 select-none mr-2.5 text-[10px]">04</span><span className="text-indigo-400">&quot;education&quot;</span>: <span className="text-emerald-300">&quot;MSc CompSci (Pursuing) • BTech CSE&quot;</span>,</div>
                      <div><span className="text-zinc-600 select-none mr-2.5 text-[10px]">05</span><span className="text-indigo-400">&quot;location&quot;</span>: <span className="text-emerald-300">&quot;Uttar Pradesh, India (IST)&quot;</span>,</div>
                      <div><span className="text-zinc-600 select-none mr-2.5 text-[10px]">06</span><span className="text-indigo-400">&quot;stack&quot;</span>: [</div>
                      <div><span className="text-zinc-600 select-none mr-2.5 text-[10px]">07</span>  <span className="text-amber-300">&quot;Next.js 16&quot;</span>, <span className="text-amber-300">&quot;TypeScript&quot;</span>, <span className="text-amber-300">&quot;Python 3.12&quot;</span>, <span className="text-amber-300">&quot;Tailwind v4&quot;</span></div>
                      <div><span className="text-zinc-600 select-none mr-2.5 text-[10px]">08</span>],</div>
                      <div><span className="text-zinc-600 select-none mr-2.5 text-[10px]">09</span><span className="text-indigo-400">&quot;ventures&quot;</span>: &#123;</div>
                      <div><span className="text-zinc-600 select-none mr-2.5 text-[10px]">10</span>  <span className="text-cyan-300">&quot;startupwire&quot;</span>: <span className="text-emerald-300">&quot;AI News Intelligence&quot;</span>,</div>
                      <div><span className="text-zinc-600 select-none mr-2.5 text-[10px]">11</span>  <span className="text-cyan-300">&quot;bookperia&quot;</span>: <span className="text-emerald-300">&quot;Semantic Book Discovery&quot;</span></div>
                      <div><span className="text-zinc-600 select-none mr-2.5 text-[10px]">12</span>&#125;,</div>
                      <div><span className="text-zinc-600 select-none mr-2.5 text-[10px]">13</span><span className="text-indigo-400">&quot;status&quot;</span>: <span className="text-emerald-400 font-semibold">&quot;Ready for High-Impact Engineering Roles&quot;</span></div>
                    </div>
                  </motion.div>
                ) : hudView === 'photo' ? (
                  <motion.div
                    key="photo"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 dark:bg-black/60 flex items-center justify-center group/img"
                  >
                    <img 
                      src="/kuldeep.jpg" 
                      alt="Kuldeep Chandra Vishwakarma" 
                      className="absolute inset-0 w-full h-full object-cover transform scale-[1.06] hover:scale-[1.12] transition-transform duration-700" 
                      style={{ objectPosition: 'center 20%' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />
                    
                    {/* Animated Cybernetic Scanline */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-cyber-scan" />
                    </div>

                    {/* HUD Corner Reticles */}
                    <div className="absolute top-2 left-2 text-[10px] font-mono text-cyan-400 opacity-80 select-none pointer-events-none">[+]</div>
                    <div className="absolute top-2 right-2 text-[10px] font-mono text-cyan-400 opacity-80 select-none pointer-events-none">[+]</div>
                    <div className="absolute bottom-10 left-2 text-[10px] font-mono text-cyan-400 opacity-80 select-none pointer-events-none">[+]</div>
                    <div className="absolute bottom-10 right-2 text-[10px] font-mono text-cyan-400 opacity-80 select-none pointer-events-none">[+]</div>

                    {/* Decorative overlays */}
                    <div className="absolute top-2.5 left-7 flex items-center space-x-1.5 bg-slate-900/90 dark:bg-black/75 backdrop-blur-md border border-emerald-500/30 px-2 py-0.5 rounded text-[8px] font-mono tracking-widest text-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>OPERATOR IDENTIFIED</span>
                    </div>

                    <div className="absolute top-2.5 right-7 bg-indigo-500/20 text-indigo-200 text-[8px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border border-indigo-500/30">
                      LAT: 26.84°N • LON: 80.94°E
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-left space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-bold text-white font-sans tracking-tight">
                          Kuldeep Chandra Vishwakarma
                        </h3>
                        <span className="text-[9px] font-mono text-cyan-300 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
                          MSc CompSci
                        </span>
                      </div>
                      <p className="text-[9px] text-zinc-300 font-mono flex items-center gap-1">
                        <span className="text-indigo-400 font-bold">&gt;&gt;</span> Full-Stack Software Engineer • AI Builder
                      </p>
                    </div>
                  </motion.div>
                ) : hudView === 'cli' ? (
                  <motion.div
                    key="cli"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="font-mono text-[11px] h-[230px] rounded-lg bg-slate-950 p-3.5 border border-slate-800 flex flex-col justify-between overflow-hidden shadow-inner"
                  >
                    <div className="overflow-y-auto space-y-2 pr-1 font-mono text-[11px]">
                      {cliHistory.map((item, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <div className="flex items-center text-emerald-400">
                            <span className="text-indigo-400 mr-1.5 font-bold">operator@kcv:~$</span>
                            <span className="text-white font-semibold">{item.command}</span>
                          </div>
                          <p className="text-zinc-300 text-[10px] pl-3 leading-relaxed">
                            {item.output}
                          </p>
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleCliSubmit} className="pt-2 border-t border-slate-800/80 flex items-center space-x-1.5 text-[11px]">
                      <span className="text-indigo-400 font-bold">$</span>
                      <input
                        type="text"
                        value={cliInput}
                        onChange={(e) => setCliInput(e.target.value)}
                        placeholder="type help, bio, stack, vitals, neofetch..."
                        className="w-full bg-transparent text-emerald-400 placeholder:text-zinc-600 focus:outline-none font-mono text-[11px]"
                      />
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="vitals"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="font-mono text-[11px] h-[230px] rounded-lg bg-slate-950 p-3.5 border border-slate-800 flex flex-col justify-between overflow-hidden shadow-inner text-zinc-300"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between pb-1.5 border-b border-white/5 text-[9px] text-zinc-500 uppercase tracking-widest">
                        <span>Telemetry Node: ASIA-SOUTH1</span>
                        <span className="text-emerald-400 font-bold">HEALTH 99.98%</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                        <div className="p-2 rounded bg-white/[0.03] border border-white/5 space-y-0.5">
                          <span className="text-zinc-500 block text-[9px]">API Latency</span>
                          <span className="text-emerald-400 font-bold">18ms (Edge CDN)</span>
                        </div>
                        <div className="p-2 rounded bg-white/[0.03] border border-white/5 space-y-0.5">
                          <span className="text-zinc-500 block text-[9px]">Build Pipeline</span>
                          <span className="text-cyan-400 font-bold">Next.js 16 Turbo</span>
                        </div>
                        <div className="p-2 rounded bg-white/[0.03] border border-white/5 space-y-0.5">
                          <span className="text-zinc-500 block text-[9px]">Security Rating</span>
                          <span className="text-indigo-400 font-bold">A+ (HSTS &amp; SSL)</span>
                        </div>
                        <div className="p-2 rounded bg-white/[0.03] border border-white/5 space-y-0.5">
                          <span className="text-zinc-500 block text-[9px]">Core Web Vitals</span>
                          <span className="text-emerald-400 font-bold">100 / 100 SEO</span>
                        </div>
                      </div>
                      <div className="text-[9px] text-zinc-500 pt-1 flex items-center justify-between border-t border-white/5">
                        <span>Edge Runtime: Vercel SSR</span>
                        <span className="text-indigo-400">DNS: SSL/TLS 1.3</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[9px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        Live Feed: 0 Unhandled Exceptions
                      </span>
                      <span>NOMINAL</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* HUD Footer Status */}
              <div className="pt-3.5 flex justify-between items-center text-[10px] text-slate-500 dark:text-zinc-500 font-mono border-t border-slate-200 dark:border-white/5 mt-3">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
                  <span className="text-slate-700 dark:text-zinc-300 font-medium">Status: Open for Roles</span>
                </div>
                <span>India (IST)</span>
                <span className="text-indigo-600 dark:text-indigo-400">Latency: &lt; 20ms</span>
              </div>
            </SpotlightCard>

            <div className="absolute inset-0 bg-indigo-500/10 dark:bg-indigo-500/15 blur-[90px] -z-10 rounded-full scale-75 group-hover:scale-95 transition-transform duration-700" />
          </motion.div>
        </div>

        {/* 1.1 TELEMETRY STATS GRID (Linear-inspired glass cards with icons & neon accents) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3.5 border-t border-slate-200 dark:border-white/5 pt-10">
          {[
            { label: 'Current Focus', value: 'StartupWire Curation', icon: <Target className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" /> },
            { label: 'Coding Experience', value: 'Since 2016', icon: <Terminal className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" /> },
            { label: 'Subscribers', value: '1,240 Readers', icon: <Users className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" /> },
            { label: 'GitHub Commits', value: '1,480 YTD', icon: <GitCommit className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" /> },
            { label: 'Products Shipped', value: '12 Production', icon: <Rocket className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400" /> },
            { label: 'Availability', value: 'Open for Hire', icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" /> }
          ].map((stat, idx) => (
            <SpotlightCard key={idx} className="p-3.5 rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:border-indigo-500/30 transition-all duration-300 shadow-xs dark:shadow-none flex flex-col justify-between space-y-2 group/card">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-500 dark:text-zinc-500 font-mono uppercase tracking-wider block font-medium">
                  {stat.label}
                </span>
                <span className="p-1 rounded-md bg-slate-100 dark:bg-white/5 group-hover/card:scale-110 transition-transform">
                  {stat.icon}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-sans tracking-tight">
                {stat.value}
              </span>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* 2. PERSONAL DASHBOARD SECTION */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/5 pb-4">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white font-sans flex items-center gap-2">
              <Activity className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Engineering Hub
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 font-sans">
              Live commit telemetry, deployment status, technical stack radar, and open-source milestones.
            </p>
          </div>
          <span className="text-[10px] sm:text-xs font-mono text-slate-600 dark:text-zinc-500 bg-white dark:bg-white/5 px-3 py-1.5 rounded-md border border-slate-200 dark:border-white/5 flex items-center shadow-xs dark:shadow-none">
            <Clock className="w-3.5 h-3.5 mr-1.5 text-slate-500 dark:text-zinc-400 animate-spin-slow" />
            Local Time (IST): {localTime}
          </span>
        </div>

        {/* Tab Controls for Dashboard widgets */}
        <div className="flex flex-wrap gap-1 bg-slate-200/60 dark:bg-white/5 p-1 rounded-xl border border-slate-300 dark:border-white/5 max-w-fit">
          {[
            { id: 'status', label: 'Status & Goals', icon: <Target className="w-3.5 h-3.5" /> },
            { id: 'deployments', label: 'Deployment Logs', icon: <GitBranch className="w-3.5 h-3.5" /> },
            { id: 'radar', label: 'Tech Radar', icon: <Cpu className="w-3.5 h-3.5" /> },
            { id: 'oss', label: 'Open Source / Notes', icon: <Code className="w-3.5 h-3.5" /> },
            { id: 'books', label: 'Library Tracker', icon: <BookOpen className="w-3.5 h-3.5" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setDashboardTab(tab.id as any)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center space-x-1.5 cursor-pointer ${
                dashboardTab === tab.id 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 hover:bg-slate-200/80 dark:hover:bg-white/5'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab contents wrapper */}
        <SpotlightCard className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl min-h-[300px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={dashboardTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="w-full flex-grow"
            >
              {/* Tab 1: Current Status & Goals */}
              {dashboardTab === 'status' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500 uppercase tracking-widest block">Quarterly Mission</span>
                      <p className="text-sm text-slate-700 dark:text-zinc-200 font-sans leading-relaxed">
                        Scale StartupWire.in\'s automated curation algorithms to handle RSS-fetching from 100+ sources while setting up programmatic newsletter digests. Integrate text-to-speech audio logs.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500 uppercase tracking-widest block">Operational Metrics</span>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3.5 bg-slate-100/90 dark:bg-black/40 rounded-lg border border-slate-200 dark:border-white/5">
                          <span className="text-[10px] text-slate-500 dark:text-zinc-500 block">Weekly Sprint Target</span>
                          <span className="text-xs font-bold text-slate-900 dark:text-white mt-1 block">Deploy vector similarity filters</span>
                        </div>
                        <div className="p-3.5 bg-slate-100/90 dark:bg-black/40 rounded-lg border border-slate-200 dark:border-white/5">
                          <span className="text-[10px] text-slate-500 dark:text-zinc-500 block">Learning Streak</span>
                          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-1 block">42 Days Active</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-100/90 dark:bg-black/40 border border-slate-200 dark:border-white/5 space-y-4">
                    <span className="text-[10px] font-mono text-indigo-700 dark:text-indigo-400 uppercase tracking-widest block font-bold">Weekly Progress Checklist</span>
                    <ul className="space-y-2.5 text-xs font-sans text-slate-700 dark:text-zinc-300">
                      {[
                        { text: 'Analyze sitemap indexes and clean canonical page overlaps', done: true },
                        { text: 'Configure Zod validation schemas for all login forms', done: true },
                        { text: 'Set up automated RSS crawler backup crons', done: true },
                        { text: 'Test Gemini JSON prompt latency fallback systems', done: false }
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2.5">
                          {item.done ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                          ) : (
                            <span className="w-4 h-4 rounded-full border border-slate-400 dark:border-zinc-600 flex-shrink-0" />
                          )}
                          <span className={item.done ? 'text-slate-400 dark:text-zinc-500 line-through' : 'text-slate-700 dark:text-zinc-300'}>
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Tab 2: Deployment logs */}
              {dashboardTab === 'deployments' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 dark:text-zinc-500 border-b border-slate-200 dark:border-white/5 pb-2">
                    <span>Active Branches: main (IamKady/kuldeepvishwakarma)</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <RefreshCw className={`w-3.5 h-3.5 ${isLiveSync ? 'animate-spin' : ''}`} /> {isLiveSync ? 'Live GitHub Sync' : 'Real Commit Feed'}
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-mono text-xs border-collapse">
                      <thead>
                        <tr className="text-slate-500 dark:text-zinc-500 border-b border-slate-200 dark:border-white/5">
                          <th className="py-2.5">Commit</th>
                          <th className="py-2.5">Branch</th>
                          <th className="py-2.5">Message / Details</th>
                          <th className="py-2.5">Build Size</th>
                          <th className="py-2.5">Uptime Time</th>
                          <th className="py-2.5 text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-white/5 text-slate-700 dark:text-zinc-300">
                        {realCommits.slice(0, 5).map((build, idx) => (
                          <tr key={idx} className="hover:bg-slate-100/50 dark:hover:bg-white/[0.02]">
                            <td className="py-2.5 font-bold">
                              <a 
                                href={build.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                              >
                                {build.commit} <ExternalLink className="w-3 h-3" />
                              </a>
                            </td>
                            <td className="py-2.5"><span className="px-1.5 py-0.2 rounded bg-slate-200/60 dark:bg-white/5 border border-slate-300 dark:border-white/5 text-slate-800 dark:text-zinc-200">{build.branch}</span></td>
                            <td className="py-2.5 max-w-[280px] truncate text-slate-900 dark:text-zinc-200">{build.event}</td>
                            <td className="py-2.5 text-slate-600 dark:text-zinc-400">{build.size}</td>
                            <td className="py-2.5 text-slate-500 dark:text-zinc-500">{build.time}</td>
                            <td className="py-2.5 text-right font-bold text-emerald-600 dark:text-emerald-400">✓ SUCCESS</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Tab 3: Tech Radar */}
              {dashboardTab === 'radar' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: 'ADOPT (Production)', items: ['Next.js App Router', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'PostgreSQL', 'Supabase'] },
                    { title: 'TRIAL (Active Projects)', items: ['Google Gemini API models', 'pgvector indexing', 'Docker containers', 'Zod validator schemas'] },
                    { title: 'ASSESS (Learning logs)', items: ['LLM agent frameworks', 'Linux CTF writeups', 'AWS serverless worker nodes'] }
                  ].map((radar, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-100/90 dark:bg-black/40 space-y-3">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500 uppercase tracking-wider block font-bold">
                        {radar.title}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {radar.items.map((item) => (
                          <span key={item} className="text-[10px] font-mono px-2 py-0.8 rounded bg-white dark:bg-white/5 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/5 hover:border-slate-400 dark:hover:border-white/20 transition-all cursor-default shadow-xs dark:shadow-none">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 4: Open source contributions */}
              {dashboardTab === 'oss' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono text-indigo-700 dark:text-indigo-400 uppercase tracking-widest block font-bold">Open Source Submissions</span>
                    <div className="space-y-3.5">
                      {openSourceContributions.map((pr) => (
                        <div key={pr.id} className="p-3.5 rounded-lg border border-slate-200 dark:border-white/5 bg-slate-100/90 dark:bg-black/30 space-y-1.5">
                          <div className="flex justify-between items-center text-xs font-semibold">
                            <span className="text-slate-900 dark:text-white font-mono">{pr.repoName}</span>
                            <span className="text-emerald-700 dark:text-emerald-400 text-[10px] font-mono bg-emerald-500/10 px-2 py-0.5 border border-emerald-500/20 rounded-full">{pr.status}</span>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-zinc-400 leading-snug">{pr.prTitle}</p>
                          <span className="text-[10px] text-slate-500 dark:text-zinc-500 block font-mono">{pr.impact}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-100/90 dark:bg-black/40 border border-slate-200 dark:border-white/5 space-y-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block font-bold mb-2">Research abstract</span>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">On the Reliability of AI Agent Curation Pipelines</h4>
                      <p className="text-[11px] text-slate-600 dark:text-zinc-400 leading-relaxed font-sans mt-2">
                        Investigating prompt limits and vector search indexing configurations to achieve deterministic structured JSON outputs from news datasets. Implementing pgvector cosine distance filters.
                      </p>
                    </div>
                    <Link href="/research" className="text-[10px] text-indigo-700 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 font-mono flex items-center mt-3">
                      Read full report <ChevronRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Tab 5: Library track */}
              {dashboardTab === 'books' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {booksData.slice(0, 4).map((book) => (
                    <div key={book.id} className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-100/90 dark:bg-black/30 flex flex-col justify-between space-y-3.5">
                      <div className="space-y-1">
                        <div className="flex justify-between items-center">
                          <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate pr-2">{book.title}</h4>
                          <span className={`text-[8px] font-mono px-2 py-0.5 border rounded uppercase ${
                            book.status === 'Completed' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400' : 'bg-indigo-500/10 border-indigo-500/20 text-indigo-700 dark:text-indigo-400 animate-pulse'
                          }`}>{book.status}</span>
                        </div>
                        <span className="text-[10px] text-slate-500 dark:text-zinc-500 font-mono">By {book.author} • {book.category}</span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] text-slate-600 dark:text-zinc-400 font-mono">
                          <span>Completion progress:</span>
                          <span>{book.progress}%</span>
                        </div>
                        <div className="w-full h-1 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${book.status === 'Completed' ? 'bg-emerald-500' : 'bg-indigo-600'}`} 
                            style={{ width: `${book.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </SpotlightCard>
      </section>

      {/* 2.5 INTERACTIVE GITHUB CONTRIBUTION PANEL */}
      <SpotlightCard className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-xl space-y-4 bg-white/80 dark:bg-black/40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-white/5 pb-3">
          <div className="flex items-center space-x-2">
            <Code className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-zinc-200 font-sans">
              GitHub Core Contribution Activity & Commits Stream
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/open-source"
              className="text-[10px] text-indigo-600 dark:text-indigo-400 hover:underline font-mono font-semibold flex items-center"
            >
              Explore 10 Repositories <ChevronRight className="w-3 h-3 ml-0.5" />
            </Link>
            <a 
              href="https://github.com/IamKady" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[10px] text-slate-500 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-mono flex items-center"
            >
              github.com/IamKady <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>

        {/* Grid representation */}
        <div className="overflow-x-auto pb-1.5">
          <div className="min-w-[620px] flex space-x-1">
            <div className="grid grid-rows-7 grid-flow-col gap-1 flex-grow">
              {githubCells.map((color, index) => (
                <div 
                  key={index} 
                  className={`w-[10px] h-[10px] rounded-[1px] border ${color} hover:scale-125 hover:border-slate-400 dark:hover:border-white/40 transition-all duration-100 cursor-pointer`}
                  title="GitHub contribution activity log block"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Live Commits Stream */}
        <div className="pt-2 border-t border-slate-200 dark:border-white/5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500 uppercase tracking-wider block font-bold">
              Verified Production Commits Feed
            </span>
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              Live GitHub REST Pipeline
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {realCommits.slice(0, 3).map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-100/80 dark:bg-white/[0.02] hover:bg-slate-200/60 dark:hover:bg-white/[0.05] transition-all flex flex-col justify-between space-y-1.5 group"
              >
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400 group-hover:underline flex items-center gap-1">
                    {item.commit} <ExternalLink className="w-2.5 h-2.5" />
                  </span>
                  <span className="text-slate-500 dark:text-zinc-500">{item.time}</span>
                </div>
                <p className="text-[11px] font-sans text-slate-800 dark:text-zinc-300 line-clamp-2 leading-snug">
                  {item.event}
                </p>
                {item.repoName && (
                  <span className="text-[9px] font-mono text-slate-500 dark:text-zinc-500 bg-slate-200/60 dark:bg-white/5 px-2 py-0.5 rounded w-fit">
                    IamKady/{item.repoName}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[10px] text-slate-500 dark:text-zinc-500 font-sans pt-1 gap-2">
          <span>Catalog of active repositories, automation scripts, and systems architectures</span>
          <div className="flex items-center space-x-2">
            <span>Less</span>
            <span className="w-2.5 h-2.5 bg-slate-200 border border-slate-300 dark:bg-zinc-900 dark:border-zinc-950 rounded-[1px]" />
            <span className="w-2.5 h-2.5 bg-emerald-200 border border-emerald-300 dark:bg-emerald-950 dark:border-emerald-950/20 rounded-[1px]" />
            <span className="w-2.5 h-2.5 bg-emerald-300 border border-emerald-400 dark:bg-emerald-900 dark:border-emerald-900/30 rounded-[1px]" />
            <span className="w-2.5 h-2.5 bg-emerald-500 border border-emerald-600 dark:bg-emerald-700 dark:border-emerald-700/40 rounded-[1px]" />
            <span className="w-2.5 h-2.5 bg-emerald-600 border border-emerald-700 dark:bg-emerald-500 dark:border-emerald-400/50 rounded-[1px]" />
            <span>More</span>
          </div>
        </div>
      </SpotlightCard>


      {/* 3. RECRUITER EVIDENCE CONSOLE */}
      <SpotlightCard className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden bg-white/80 dark:bg-black/60">
        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-emerald-500/5 blur-[100px] -translate-x-1/2 -translate-y-1/2 -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Evidence Checklist */}
          <div className="lg:col-span-7 space-y-6 text-left flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-500/30 dark:border-emerald-500/20 bg-emerald-500/10 dark:bg-emerald-500/5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-ping" />
                <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 tracking-wider uppercase font-semibold">
                  Credentials Verified: Available for Hire
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-sans tracking-tight">
                Recruiter Evidence Console
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-sans">
                Below is structured proof mapping education, professional freelance sweeps, and production achievements:
              </p>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-sans">
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-2.5 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">Academic Credentials</span>
                  <span className="text-xs text-slate-600 dark:text-zinc-400">B.Tech Computer Science graduate (Honors, 7.29 CGPA). Pursuing MSc Computer Science (Distance Mode, UPRTOU Prayagraj) with research targeting distributed systems security.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-2.5 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">Next.js & Frontend Competency</span>
                  <span className="text-xs text-slate-600 dark:text-zinc-400">Shipped StartupWire (AI Aggregator MVP) achieving 100/100 Lighthouse performance metrics, programmatic sitemaps, and edge-caches.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-2.5 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">Backend Data Workers & Security</span>
                  <span className="text-xs text-slate-600 dark:text-zinc-400">Written Node.js RSS scrapers and pgvector cosine similarity algorithms in Supabase. Managed secure endpoints sanitized using Zod schemas.</span>
                </div>
              </li>
            </ul>

            <div className="pt-4 flex flex-wrap gap-3">
              <Link 
                href="/contact" 
                className="px-5 py-2.5 text-xs font-semibold text-white dark:text-zinc-950 bg-indigo-600 dark:bg-white hover:bg-indigo-700 dark:hover:bg-zinc-200 rounded-lg shadow-md hover:-translate-y-0.5 transition-all flex items-center cursor-pointer"
              >
                Schedule Zoom Meeting
              </Link>
              <Link 
                href="/resume" 
                className="px-5 py-2.5 text-xs font-semibold text-slate-700 dark:text-white bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 rounded-lg hover:-translate-y-0.5 transition-all flex items-center cursor-pointer shadow-xs dark:shadow-none"
              >
                Inspect Credentials File
              </Link>
            </div>
          </div>

          {/* Right Column: Tiers & Proof metrics (NO fake percentages) */}
          <div className="lg:col-span-5 p-6 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/90 dark:bg-black/40 flex flex-col justify-between space-y-6">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono border-b border-slate-200 dark:border-white/5 pb-2">
              Credibility Ratings Matrix
            </h4>
            
            <div className="space-y-4 font-mono text-[11px] text-slate-600 dark:text-zinc-400">
              
              <div className="space-y-1">
                <div className="flex justify-between text-slate-800 dark:text-zinc-300">
                  <span>LANGUAGES (JS/TS, Python, C++)</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">Advanced</span>
                </div>
                <p className="text-[10px] text-slate-500 dark:text-zinc-500">2+ Years writing Node workers, analyzers, data structures.</p>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-slate-800 dark:text-zinc-300">
                  <span>FRAMEWORKS (Next.js, React, Node)</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">Production Experience</span>
                </div>
                <p className="text-[10px] text-slate-500 dark:text-zinc-500">Deployed dynamic edge cache routing systems to production.</p>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-slate-800 dark:text-zinc-300">
                  <span>DATABASES (SQL, pgvector, Supabase)</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">Production Experience</span>
                </div>
                <p className="text-[10px] text-slate-500 dark:text-zinc-500">Structured cosine vector calculations and indexes.</p>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-slate-800 dark:text-zinc-300">
                  <span>AI PIPELINES & PROMPTING WORKFLOWS</span>
                  <span className="text-indigo-700 dark:text-indigo-400 font-bold">Working Knowledge</span>
                </div>
                <p className="text-[10px] text-slate-500 dark:text-zinc-500">Fine-tuning prompts for deterministic structured output JSON schemas.</p>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-slate-800 dark:text-zinc-300">
                  <span>API SECURITY & NETWORKING (CSP, JWT)</span>
                  <span className="text-amber-700 dark:text-amber-400 font-bold">Working Knowledge</span>
                </div>
                <p className="text-[10px] text-slate-500 dark:text-zinc-500">Implementing JWT cookies and CTF security logs.</p>
              </div>
            </div>

            <div className="border-t border-slate-200 dark:border-white/5 pt-4 flex items-center text-slate-500 dark:text-zinc-500 space-x-2 font-mono text-[10px]">
              <Clock className="w-3.5 h-3.5 text-slate-500 dark:text-zinc-400 animate-pulse" />
              <span>Response latency: &lt; 2 hours | SSL Encryption verified</span>
            </div>
          </div>
        </div>
      </SpotlightCard>



    </div>
  );
}

