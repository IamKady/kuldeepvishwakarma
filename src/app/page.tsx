'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  Clock 
} from 'lucide-react';
import { projectsData, blogsData, startupLogs, booksData } from '@/data/db';
import confetti from 'canvas-confetti';

export default function Home() {
  const [localTime, setLocalTime] = useState('13:36 PM');

  // Update mock local time dynamically matching India's timezone (IST)
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

  // Generate GitHub contribution grid mock (53 columns x 7 rows)
  // Let's render a 24-week grid to keep it compact and gorgeous
  const generateGithubGrid = () => {
    const grid = [];
    const colors = [
      'bg-zinc-900 border-zinc-950', // 0 commits
      'bg-emerald-950/40 border-emerald-950/20', // 1-2 commits
      'bg-emerald-900/60 border-emerald-900/30', // 3-4 commits
      'bg-emerald-700/80 border-emerald-700/40', // 5-6 commits
      'bg-emerald-500 border-emerald-400/50' // 7+ commits
    ];
    
    // Seed commit pattern to look organic
    for (let i = 0; i < 7 * 26; i++) {
      const seed = Math.sin(i * 0.15) * Math.cos(i * 0.05);
      let level = 0;
      if (seed > 0.6) level = 4;
      else if (seed > 0.2) level = 3;
      else if (seed > -0.2) level = 2;
      else if (seed > -0.6) level = 1;
      
      grid.push(colors[level]);
    }
    return grid;
  };

  const githubCells = generateGithubGrid();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative">
      
      {/* 1. HERO SECTION */}
      <section className="min-h-[70vh] flex flex-col lg:flex-row items-center justify-between gap-12 pt-8">
        
        {/* Left Headline Column */}
        <div className="flex-1 space-y-6 text-left max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 glass-panel bg-white/5"
          >
            <span className="w-2 h-2 rounded-full bg-ai animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono text-zinc-300 tracking-wider">
              OPERATING SYSTEM RUNNING: PRODUCTION
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-6xl font-black font-sans tracking-tight leading-none text-white">
              Kuldeep Chandra <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai via-startup to-cyber">
                Vishwakarma
              </span>
            </h1>
            <p className="text-sm sm:text-lg font-semibold tracking-wide font-sans text-zinc-300 uppercase">
              Software Engineer • AI Builder • Startup Creator • Technology Writer
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
            className="flex flex-wrap items-center gap-3 pt-4"
          >
            <Link 
              href="/projects" 
              className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-0.5 transition-all flex items-center group cursor-pointer"
            >
              View Projects 
              <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/blog" 
              className="px-5 py-2.5 text-xs font-semibold text-zinc-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg hover:-translate-y-0.5 transition-all flex items-center cursor-pointer"
            >
              Read Blog
            </Link>
            <button 
              onClick={() => {
                triggerConfetti();
                // Simulated Resume Download link
                window.open('/resume', '_blank');
              }}
              className="px-5 py-2.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/20 rounded-lg hover:-translate-y-0.5 transition-all flex items-center cursor-pointer"
            >
              Download Resume 
              <Download className="w-3.5 h-3.5 ml-2" />
            </button>
          </motion.div>
        </div>

        {/* Right Graphical Hologram Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full max-w-md lg:max-w-none relative flex justify-center items-center"
        >
          {/* Visual Shell Panel */}
          <div className="w-full max-w-md p-6 rounded-xl glass-panel relative z-10 border-white/10 shadow-2xl overflow-hidden group">
            {/* Window header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4 font-mono text-xs text-zinc-500">
              <div className="flex space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
              </div>
              <span>kcv-profile-engine.sh</span>
            </div>

            {/* Content list */}
            <div className="space-y-4 font-mono text-xs">
              <div className="space-y-1">
                <span className="text-zinc-500">// Personal Identity Matrix</span>
                <p className="text-zinc-200">
                  <span className="text-indigo-400 font-bold">$</span> cat user.json
                </p>
                <div className="p-3 bg-black/40 rounded border border-white/5 text-zinc-300 space-y-1">
                  <p><span className="text-purple-400">"name"</span>: "Kuldeep C. Vishwakarma",</p>
                  <p><span className="text-purple-400">"focus"</span>: "Full-Stack Dev • AI Pipelines",</p>
                  <p><span className="text-purple-400">"cyber_status"</span>: "Exploration Log active",</p>
                  <p><span className="text-purple-400">"startups"</span>: ["StartupWire.in"],</p>
                  <p><span className="text-purple-400">"location"</span>: "Uttar Pradesh, India"</p>
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-zinc-500">// Running Agents</span>
                <div className="flex items-center justify-between text-zinc-300 bg-white/5 px-3 py-2 rounded border border-white/5">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>StartupWire Crawler</span>
                  </div>
                  <span className="text-emerald-400 font-semibold">[EXEC_SUCC]</span>
                </div>
                <div className="flex items-center justify-between text-zinc-300 bg-white/5 px-3 py-2 rounded border border-white/5">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                    <span>Gemini Post Summarizer</span>
                  </div>
                  <span className="text-indigo-400 font-semibold">[IDLE_WAIT]</span>
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center text-[10px] text-zinc-500">
                <span>CPU: 18.4%</span>
                <span>RAM: 4.8 / 16.0 GB</span>
                <span className="text-emerald-400 font-medium">SYS_ONLINE</span>
              </div>
            </div>
          </div>

          {/* Decorative glowing backdrops */}
          <div className="absolute inset-0 bg-indigo-500/5 blur-[50px] -z-10 rounded-full scale-75 group-hover:scale-90 transition-transform duration-700" />
        </motion.div>

      </section>

      {/* 2. PERSONAL DASHBOARD SECTION */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white font-sans">
              Personal Dashboard
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans">
              Live updates, learning meters, and execution statuses of current products.
            </p>
          </div>
          <span className="text-[10px] sm:text-xs font-mono text-zinc-500 bg-white/5 px-3 py-1.5 rounded-md border border-white/5 flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1.5 text-zinc-400 animate-spin-slow" />
            SYS TIME: {localTime}
          </span>
        </div>

        {/* Dashboard grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Current Learnings & Goals */}
          <div className="glass-panel p-5 rounded-xl border-white/10 flex flex-col space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 font-sans flex items-center">
                <Cpu className="w-4 h-4 mr-1.5" />
                Current Operations
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 glow-ai" />
            </div>
            
            <div className="space-y-3.5 flex-grow">
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-mono">Learning Vector:</span>
                <p className="text-xs text-zinc-300 font-medium font-sans mt-0.5">
                  LLM Agents Architecture, Next.js 16 (App Router updates), Cybersecurity CTF tools.
                </p>
              </div>

              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-mono">Quarterly Objective:</span>
                <p className="text-xs text-zinc-300 font-medium font-sans mt-0.5 flex items-start">
                  <Target className="w-3.5 h-3.5 text-rose-500 mr-1.5 flex-shrink-0 mt-0.5" />
                  Launch programmatic newsletter digests on StartupWire & reach 5k organic traffic.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Interactive Book Tracker */}
          <div className="glass-panel p-5 rounded-xl border-white/10 flex flex-col space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-sans flex items-center">
                <BookOpen className="w-4 h-4 mr-1.5" />
                Library Track
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 glow-cyber" />
            </div>

            <div className="space-y-4 flex-grow">
              {booksData.filter(b => b.status === 'Reading').map((book) => (
                <div key={book.id} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-zinc-200 truncate pr-2">{book.title}</span>
                    <span className="text-[10px] font-mono text-zinc-400 flex-shrink-0">{book.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" 
                      style={{ width: `${book.progress}%` }}
                    />
                  </div>
                  <span className="text-[9px] text-zinc-500 font-mono block">By {book.author} • {book.category}</span>
                </div>
              ))}
              
              <div className="border-t border-white/5 pt-3 flex justify-between items-center text-[10px] text-zinc-500">
                <span>Total Read: 2 books</span>
                <Link href="/resources" className="hover:text-amber-400 flex items-center">
                  Full list <ChevronRight className="w-3 h-3 ml-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Latest Startup / Case Study status */}
          <div className="glass-panel p-5 rounded-xl border-white/10 flex flex-col space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-sans flex items-center">
                <Rocket className="w-4 h-4 mr-1.5" />
                Active Incubations
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 glow-startup" />
            </div>

            <div className="space-y-3.5 flex-grow">
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-white font-sans flex items-center">
                    StartupWire.in
                  </span>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono border border-emerald-500/20">
                    Active MVP
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 font-sans mt-1.5 line-clamp-2">
                  AI programmatically reads RSS logs, curates technology startup articles with 100/100 SEO optimization.
                </p>
              </div>

              <div className="border-t border-white/5 pt-3.5 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[9px] text-zinc-500 block uppercase font-mono">Status:</span>
                  <span className="text-zinc-300 font-sans font-semibold">Scaling crawler algorithms</span>
                </div>
                <Link 
                  href="/projects" 
                  className="px-2.5 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all text-[10px]"
                >
                  View Case Study
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* GitHub Contributions Simulator */}
        <div className="glass-panel p-5 rounded-xl border-white/10 shadow-xl space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
            <div className="flex items-center space-x-2">
              <Code className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-200 font-sans">
                GitHub Core Commit Engine
              </span>
            </div>
            <a 
              href="https://github.com/kuldeepcv" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[10px] text-zinc-400 hover:text-emerald-400 transition-colors font-mono flex items-center"
            >
              github.com/kuldeepcv <ChevronRight className="w-3 h-3 ml-0.5" />
            </a>
          </div>

          {/* Grid Layout representing GitHub Contributions */}
          <div className="overflow-x-auto pb-1.5">
            <div className="min-w-[620px] flex space-x-1">
              <div className="grid grid-rows-7 grid-flow-col gap-1 flex-grow">
                {githubCells.map((color, index) => (
                  <div 
                    key={index} 
                    className={`w-[10px] h-[10px] rounded-[1px] border ${color} hover:scale-125 hover:border-white/40 transition-all duration-100 cursor-pointer`}
                    title="Commit activity record (simulated)"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-[10px] text-zinc-500 font-sans">
            <span>Learn more about how I build workflows programmatically</span>
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
        </div>

      </section>

      {/* 3. RECRUITER & AVAILABILITY CONSOLE */}
      <section className="glass-panel p-6 sm:p-8 rounded-xl border-white/10 shadow-2xl relative overflow-hidden bg-black/60">
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-emerald-500/5 blur-[100px] -translate-x-1/2 -translate-y-1/2 -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Text Summary */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[10px] font-mono text-emerald-400 tracking-wider uppercase font-semibold">
                Status: Available for hire
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight">
              Recruiter Quick-Access Console
            </h3>
            
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              Looking for a software engineer who doesn't just write scripts, but understands the architectural lifecycles, SEO requirements, and product-founder metrics of applications?
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 font-sans">
              <li className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2.5 flex-shrink-0" />
                <span>**Full-Stack Competency**: Proficient in React, Next.js, Node.js, and SQL/NoSQL databases.</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2.5 flex-shrink-0" />
                <span>**AI-First Developer**: Skilled in LLM integrations, prompt tuning, and structured worker workflows.</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2.5 flex-shrink-0" />
                <span>**Security & SEO Aware**: Builds safe endpoints (JWT/CSP config) and performs programmatic SEO audits.</span>
              </li>
            </ul>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link 
                href="/contact" 
                className="px-5 py-2.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg shadow-md hover:-translate-y-0.5 transition-all flex items-center cursor-pointer"
              >
                Book a Meeting
              </Link>
              <Link 
                href="/resume" 
                className="px-5 py-2.5 text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg hover:-translate-y-0.5 transition-all flex items-center cursor-pointer"
              >
                Explore Qualifications
              </Link>
            </div>
          </div>

          {/* Availability & Skills Panel */}
          <div className="lg:col-span-5 p-5 rounded-lg border border-white/10 bg-black/40 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono border-b border-white/5 pb-2">
              Capabilities Metrix
            </h4>
            
            <div className="space-y-3 font-mono text-[11px] text-zinc-400">
              
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>LANGUAGES (JS/TS, Python)</span>
                  <span className="text-white">92%</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-ai rounded-full" style={{ width: '92%' }} />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>FRONTEND FRAMEWORKS (Next.js, React)</span>
                  <span className="text-white">95%</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-startup rounded-full" style={{ width: '95%' }} />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>BACKEND & CLOUD (Node, SQL, Supabase)</span>
                  <span className="text-white">88%</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-cyber rounded-full" style={{ width: '88%' }} />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>AI ENGINEERING & WORKFLOWS</span>
                  <span className="text-white">85%</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>

              <div className="border-t border-white/5 pt-3.5 flex items-center text-zinc-500 space-x-2">
                <Clock className="w-3.5 h-3.5 text-zinc-400" />
                <span>Response latency: &lt; 2 hours</span>
              </div>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
