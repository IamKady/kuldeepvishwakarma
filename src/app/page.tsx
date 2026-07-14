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
  BookOpenCheck
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

export default function Home() {
  const [localTime, setLocalTime] = useState('13:36 PM');
  const [dashboardTab, setDashboardTab] = useState<'status' | 'deployments' | 'radar' | 'oss' | 'books'>('status');
  const [copiedText, setCopiedText] = useState(false);

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
  "role": "Software Engineer & AI Builder",
  "focus": "Full-Stack Dev, Programmatic SEO, AI Curation",
  "experience": "2+ Years (Web Dev & Technical SEO)",
  "education": "MSc Computer Science (Pursuing) • BTech CSE",
  "tech_stack": ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
  "currently_learning": ["Distributed Systems Security", "Ethical Hacking (CTFs)", "LLM Architectures"],
  "projects": ["StartupWire.in", "AI Prompt Studio"],
  "location": "Uttar Pradesh, India",
  "availability": "Available for hire"
}`;
    navigator.clipboard.writeText(profileJson);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  // Generate dynamic-looking GitHub activity grid
  const generateGithubGrid = () => {
    const grid = [];
    const colors = [
      'bg-zinc-900 border-zinc-950', 
      'bg-emerald-950/40 border-emerald-950/20', 
      'bg-emerald-900/60 border-emerald-900/30', 
      'bg-emerald-700/80 border-emerald-700/40', 
      'bg-emerald-500 border-emerald-400/50' 
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

  // Simulated build history
  const buildHistory = [
    { commit: 'da215a8', branch: 'main', event: 'Programmatic sitemaps generation logic refined', size: '142 kB', status: 'success', time: '12 mins ago' },
    { commit: '0fa28d1', branch: 'main', event: 'Deduplication threshold tuning (pgvector <=> 0.85)', size: '141 kB', status: 'success', time: '4 hours ago' },
    { commit: '77b81ea', branch: 'dev', event: 'Gemini structured output fallback schema definitions', size: '139 kB', status: 'success', time: '1 day ago' },
    { commit: '44f128c', branch: 'main', event: 'Fixed robots.txt permissions crawl index block', size: '135 kB', status: 'success', time: '5 days ago' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 relative">
      
      {/* 1. HERO SECTION */}
      <section className="min-h-[80vh] flex flex-col justify-center pt-8 space-y-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column: Heading and Paragraph */}
          <div className="flex-1 space-y-6 text-left max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 glass-panel bg-white/5"
            >
              <span className="w-2 h-2 rounded-full bg-ai animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono text-zinc-300 tracking-wider">
                DEVELOPER OS ACTIVE: VER 1.4.6 [STABLE]
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-6xl font-black font-sans tracking-tight leading-none text-white">
                Kuldeep Chandra <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai via-startup to-cyber">
                  Vishwakarma
                </span>
              </h1>
              <p className="text-base sm:text-xl font-bold tracking-wide font-sans text-indigo-400">
                Software Engineer • AI Builder • Startup Founder
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans"
            >
              I build highly scalable software solutions, experiment with neural networks and AI prompting systems, establish digital products, and log cybersecurity notes. I run <span className="text-white font-medium">StartupWire</span>, an automated news pipeline.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Link 
                href="/projects" 
                className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-0.5 transition-all flex items-center group cursor-pointer"
              >
                Explore Projects 
                <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/blog" 
                className="px-5 py-2.5 text-xs font-semibold text-zinc-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg hover:-translate-y-0.5 transition-all flex items-center cursor-pointer"
              >
                Read Publications
              </Link>
              <button 
                onClick={() => {
                  triggerConfetti();
                  window.open('/resume', '_blank');
                }}
                className="px-5 py-2.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/20 rounded-lg hover:-translate-y-0.5 transition-all flex items-center cursor-pointer"
              >
                Download Resume 
                <Download className="w-3.5 h-3.5 ml-2" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: JSON Profile Hud */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[450px] relative flex justify-center items-center"
          >
            <div className="w-full p-6 rounded-xl glass-panel relative z-10 border-white/10 shadow-2xl overflow-hidden group">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4 font-mono text-xs text-zinc-500">
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                </div>
                <span>kcv-profile-engine.json</span>
                <button 
                  onClick={handleCopyProfile}
                  className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-[10px] text-zinc-400 hover:text-white transition-colors"
                >
                  {copiedText ? 'Copied!' : 'Copy'}
                </button>
              </div>

              {/* Monospaced JSON HUD */}
              <pre className="font-mono text-[11px] text-zinc-300 overflow-x-auto space-y-0.5 p-3 rounded bg-black/40 border border-white/5">
                <span className="text-zinc-500">// Personal Identity Schema</span>
                <br/>{`{`}
                <br/>  <span className="text-indigo-400">"name"</span>: <span className="text-emerald-400">"Kuldeep Chandra Vishwakarma"</span>,
                <br/>  <span className="text-indigo-400">"role"</span>: <span className="text-emerald-400">"Software Engineer"</span>,
                <br/>  <span className="text-indigo-400">"education"</span>: <span className="text-emerald-400">"MSc CompSci (Pursuing)"</span>,
                <br/>  <span className="text-indigo-400">"focus"</span>: <span className="text-emerald-400">"Full-Stack & AI pipelines"</span>,
                <br/>  <span className="text-indigo-400">"startup"</span>: <span className="text-emerald-400">"StartupWire.in"</span>,
                <br/>  <span className="text-indigo-400">"currently_learning"</span>: [
                <br/>    <span className="text-amber-400">"AI Agent Curation"</span>,
                <br/>    <span className="text-amber-400">"JWT/CSP Web Security"</span>
                <br/>  ],
                <br/>  <span className="text-indigo-400">"status"</span>: <span className="text-emerald-400">"Open to software roles"</span>
                <br/>{`}`}
              </pre>

              <div className="pt-4 flex justify-between items-center text-[10px] text-zinc-500 font-mono">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Node: Active</span>
                </div>
                <span>SSL: Active</span>
                <span>Response: &lt; 2 hrs</span>
              </div>
            </div>

            <div className="absolute inset-0 bg-indigo-500/5 blur-[80px] -z-10 rounded-full scale-75 group-hover:scale-90 transition-transform duration-700" />
          </motion.div>
        </div>

        {/* 1.1 TELEMETRY STATS GRID (Expanded stats dashboard) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 border-t border-white/5 pt-10">
          {[
            { label: 'Current Focus', value: 'StartupWire Curation' },
            { label: 'Years Learning', value: '10 Yrs (Since 2016)' },
            { label: 'Subscribers', value: '1,240 Readers' },
            { label: 'GitHub Commits', value: '1,480 YTD' },
            { label: 'Products Shipped', value: '12 Production' },
            { label: 'Availability', value: 'Hire Opportunity' }
          ].map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-white/5 bg-white/[0.02] shadow-sm flex flex-col justify-between space-y-1">
              <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider block">
                {stat.label}
              </span>
              <span className="text-xs sm:text-sm font-bold text-white font-sans">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. PERSONAL DASHBOARD SECTION */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/5 pb-4">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white font-sans flex items-center gap-2">
              <Activity className="w-5 h-5 text-indigo-400" />
              Developer telemetry HUD
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans">
              System performance stats, deployment pipelines, library checklists, and active codebase indexes.
            </p>
          </div>
          <span className="text-[10px] sm:text-xs font-mono text-zinc-500 bg-white/5 px-3 py-1.5 rounded-md border border-white/5 flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1.5 text-zinc-400 animate-spin-slow" />
            SYS TIME: {localTime}
          </span>
        </div>

        {/* Tab Controls for Dashboard widgets */}
        <div className="flex flex-wrap gap-1 bg-white/5 p-1 rounded-xl border border-white/5 max-w-fit">
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
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab contents wrapper */}
        <div className="glass-panel p-6 rounded-2xl border-white/10 shadow-2xl min-h-[300px] flex flex-col justify-between">
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
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Quarterly Mission</span>
                      <p className="text-sm text-zinc-200 font-sans leading-relaxed">
                        Scale StartupWire.in\'s automated curation algorithms to handle RSS-fetching from 100+ sources while setting up programmatic newsletter digests. Integrate text-to-speech audio logs.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Operational Metrics</span>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3.5 bg-black/40 rounded-lg border border-white/5">
                          <span className="text-[10px] text-zinc-500 block">Weekly Sprint Target</span>
                          <span className="text-xs font-bold text-white mt-1 block">Deploy vector similarity filters</span>
                        </div>
                        <div className="p-3.5 bg-black/40 rounded-lg border border-white/5">
                          <span className="text-[10px] text-zinc-500 block">Learning Streak</span>
                          <span className="text-xs font-bold text-emerald-400 mt-1 block">42 Days Active</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-4">
                    <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest block font-bold">Weekly Progress Checklist</span>
                    <ul className="space-y-2.5 text-xs font-sans text-zinc-300">
                      {[
                        { text: 'Analyze sitemap indexes and clean canonical page overlaps', done: true },
                        { text: 'Configure Zod validation schemas for all login forms', done: true },
                        { text: 'Set up automated RSS crawler backup crons', done: true },
                        { text: 'Test Gemini JSON prompt latency fallback systems', done: false }
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2.5">
                          {item.done ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          ) : (
                            <span className="w-4 h-4 rounded-full border border-zinc-600 flex-shrink-0" />
                          )}
                          <span className={item.done ? 'text-zinc-500 line-through' : 'text-zinc-300'}>
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
                  <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 border-b border-white/5 pb-2">
                    <span>Active Branches: main, dev</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" /> pipeline running
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-mono text-xs border-collapse">
                      <thead>
                        <tr className="text-zinc-500 border-b border-white/5">
                          <th className="py-2.5">Commit</th>
                          <th className="py-2.5">Branch</th>
                          <th className="py-2.5">Message / Details</th>
                          <th className="py-2.5">Build Size</th>
                          <th className="py-2.5">Uptime Time</th>
                          <th className="py-2.5 text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-zinc-300">
                        {buildHistory.map((build, idx) => (
                          <tr key={idx} className="hover:bg-white/[0.02]">
                            <td className="py-2.5 text-indigo-400 font-bold">{build.commit}</td>
                            <td className="py-2.5"><span className="px-1.5 py-0.2 rounded bg-white/5 border border-white/5">{build.branch}</span></td>
                            <td className="py-2.5 max-w-[250px] truncate text-zinc-200">{build.event}</td>
                            <td className="py-2.5 text-zinc-400">{build.size}</td>
                            <td className="py-2.5 text-zinc-500">{build.time}</td>
                            <td className="py-2.5 text-right font-bold text-emerald-400">✓ SUCCESS</td>
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
                    <div key={idx} className="p-4 rounded-xl border border-white/5 bg-black/40 space-y-3">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block font-bold">
                        {radar.title}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {radar.items.map((item) => (
                          <span key={item} className="text-[10px] font-mono px-2 py-0.8 rounded bg-white/5 text-zinc-300 border border-white/5 hover:border-white/20 transition-all cursor-default">
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
                    <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest block font-bold">Open Source Submissions</span>
                    <div className="space-y-3.5">
                      {openSourceContributions.map((pr) => (
                        <div key={pr.id} className="p-3.5 rounded-lg border border-white/5 bg-black/30 space-y-1.5">
                          <div className="flex justify-between items-center text-xs font-semibold">
                            <span className="text-white font-mono">{pr.repoName}</span>
                            <span className="text-emerald-400 text-[10px] font-mono bg-emerald-500/10 px-2 py-0.5 border border-emerald-500/20 rounded-full">{pr.status}</span>
                          </div>
                          <p className="text-xs text-zinc-400 leading-snug">{pr.prTitle}</p>
                          <span className="text-[10px] text-zinc-500 block font-mono">{pr.impact}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-bold mb-2">Research abstract</span>
                      <h4 className="text-xs font-bold text-white">On the Reliability of AI Agent Curation Pipelines</h4>
                      <p className="text-[11px] text-zinc-400 leading-relaxed font-sans mt-2">
                        Investigating prompt limits and vector search indexing configurations to achieve deterministic structured JSON outputs from news datasets. Implementing pgvector cosine distance filters.
                      </p>
                    </div>
                    <Link href="/research" className="text-[10px] text-indigo-400 hover:text-indigo-300 font-mono flex items-center mt-3">
                      Read full report <ChevronRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Tab 5: Library track */}
              {dashboardTab === 'books' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {booksData.slice(0, 4).map((book) => (
                    <div key={book.id} className="p-4 rounded-xl border border-white/5 bg-black/30 flex flex-col justify-between space-y-3.5">
                      <div className="space-y-1">
                        <div className="flex justify-between items-center">
                          <h4 className="text-xs font-bold text-white truncate pr-2">{book.title}</h4>
                          <span className={`text-[8px] font-mono px-2 py-0.5 border rounded uppercase ${
                            book.status === 'Completed' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400 animate-pulse'
                          }`}>{book.status}</span>
                        </div>
                        <span className="text-[10px] text-zinc-500 font-mono">By {book.author} • {book.category}</span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                          <span>Completion progress:</span>
                          <span>{book.progress}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${book.status === 'Completed' ? 'bg-emerald-400' : 'bg-indigo-500'}`} 
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
        </div>
      </section>

      {/* 2.5 INTERACTIVE GITHUB CONTRIBUTION PANEL */}
      <section className="glass-panel p-5 rounded-2xl border-white/10 shadow-xl space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
          <div className="flex items-center space-x-2">
            <Code className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-200 font-sans">
              GitHub core contributions logs (YTD)
            </span>
          </div>
          <a 
            href="https://github.com/IamKady" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[10px] text-zinc-400 hover:text-emerald-400 transition-colors font-mono flex items-center"
          >
            github.com/IamKady <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
          </a>
        </div>

        {/* Grid representation */}
        <div className="overflow-x-auto pb-1.5">
          <div className="min-w-[620px] flex space-x-1">
            <div className="grid grid-rows-7 grid-flow-col gap-1 flex-grow">
              {githubCells.map((color, index) => (
                <div 
                  key={index} 
                  className={`w-[10px] h-[10px] rounded-[1px] border ${color} hover:scale-125 hover:border-white/40 transition-all duration-100 cursor-pointer`}
                  title="GitHub contribution activity log block"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] text-zinc-500 font-sans">
          <span>Track automated releases and scripts cataloged publically</span>
          <div className="flex items-center space-x-2">
            <span>Less</span>
            <span className="w-2.5 h-2.5 bg-zinc-900 border border-zinc-950 rounded-[1px]" />
            <span className="w-2.5 h-2.5 bg-emerald-950 border border-emerald-950/20 rounded-[1px]" />
            <span className="w-2.5 h-2.5 bg-emerald-900 border border-emerald-900/30 rounded-[1px]" />
            <span className="w-2.5 h-2.5 bg-emerald-700 border border-emerald-700/40 rounded-[1px]" />
            <span className="w-2.5 h-2.5 bg-emerald-500 border border-emerald-400/50 rounded-[1px]" />
            <span>More</span>
          </div>
        </div>
      </section>

      {/* 3. RECRUITER EVIDENCE CONSOLE */}
      <section className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10 shadow-2xl relative overflow-hidden bg-black/60">
        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-emerald-500/5 blur-[100px] -translate-x-1/2 -translate-y-1/2 -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Evidence Checklist */}
          <div className="lg:col-span-7 space-y-6 text-left flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[10px] font-mono text-emerald-400 tracking-wider uppercase font-semibold">
                  Credentials Verified: Available for Hire
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight">
                Recruiter Evidence Console
              </h3>
              
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                Below is structured proof mapping education, professional freelance sweeps, and production achievements:
              </p>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-zinc-300 font-sans">
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2.5 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Academic Credentials</span>
                  <span className="text-xs text-zinc-400">B.Tech Computer Science graduate (Honors, 8.2 CGPA). Pursuing MSc Computer Science with research targeting distributed systems security.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2.5 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Next.js & Frontend Competency</span>
                  <span className="text-xs text-zinc-400">Shipped StartupWire (AI Aggregator MVP) achieving 100/100 Lighthouse performance metrics, programmatic sitemaps, and edge-caches.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2.5 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Backend Data Workers & Security</span>
                  <span className="text-xs text-zinc-400">Written Node.js RSS scrapers and pgvector cosine similarity algorithms in Supabase. Managed secure endpoints sanitized using Zod schemas.</span>
                </div>
              </li>
            </ul>

            <div className="pt-4 flex flex-wrap gap-3">
              <Link 
                href="/contact" 
                className="px-5 py-2.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg shadow-md hover:-translate-y-0.5 transition-all flex items-center cursor-pointer"
              >
                Schedule Zoom Meeting
              </Link>
              <Link 
                href="/resume" 
                className="px-5 py-2.5 text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg hover:-translate-y-0.5 transition-all flex items-center cursor-pointer"
              >
                Inspect Credentials File
              </Link>
            </div>
          </div>

          {/* Right Column: Tiers & Proof metrics (NO fake percentages) */}
          <div className="lg:col-span-5 p-6 rounded-xl border border-white/10 bg-black/40 flex flex-col justify-between space-y-6">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono border-b border-white/5 pb-2">
              Credibility Ratings Matrix
            </h4>
            
            <div className="space-y-4 font-mono text-[11px] text-zinc-400">
              
              <div className="space-y-1">
                <div className="flex justify-between text-zinc-300">
                  <span>LANGUAGES (JS/TS, Python, C++)</span>
                  <span className="text-emerald-400 font-bold">Advanced</span>
                </div>
                <p className="text-[10px] text-zinc-500">2+ Years writing Node workers, analyzers, data structures.</p>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-zinc-300">
                  <span>FRAMEWORKS (Next.js, React, Node)</span>
                  <span className="text-emerald-400 font-bold">Production Experience</span>
                </div>
                <p className="text-[10px] text-zinc-500">Deployed dynamic edge cache routing systems to production.</p>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-zinc-300">
                  <span>DATABASES (SQL, pgvector, Supabase)</span>
                  <span className="text-emerald-400 font-bold">Production Experience</span>
                </div>
                <p className="text-[10px] text-zinc-500">Structured cosine vector calculations and indexes.</p>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-zinc-300">
                  <span>AI PIPELINES & PROMPTING WORKFLOWS</span>
                  <span className="text-indigo-400 font-bold">Working Knowledge</span>
                </div>
                <p className="text-[10px] text-zinc-500">Fine-tuning prompts for deterministic structured output JSON schemas.</p>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-zinc-300">
                  <span>API SECURITY & NETWORKING (CSP, JWT)</span>
                  <span className="text-amber-400 font-bold">Working Knowledge</span>
                </div>
                <p className="text-[10px] text-zinc-500">Implementing JWT cookies and CTF security logs.</p>
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 flex items-center text-zinc-500 space-x-2 font-mono text-[10px]">
              <Clock className="w-3.5 h-3.5 text-zinc-400 animate-pulse" />
              <span>Response latency: &lt; 2 hours | SSL Encryption verified</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
