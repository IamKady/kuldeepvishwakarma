'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Linkedin, Github, Twitter, Rss, ArrowRight, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  const socialLinks = [
    { name: 'Github', icon: <Github className="w-4 h-4" />, url: 'https://github.com/IamKady' },
    { name: 'LinkedIn', icon: <Linkedin className="w-4 h-4" />, url: 'https://www.linkedin.com/in/iamkady/' },
    { name: 'X / Twitter', icon: <Twitter className="w-4 h-4" />, url: 'https://x.com/Kuldeep81824338' },
    { name: 'Email', icon: <Mail className="w-4 h-4" />, url: 'mailto:kuldeepvishwakarma3803@gmail.com' },
  ];

  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-card-border bg-slate-100/80 dark:bg-black/40 backdrop-blur-md relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
              Kuldeep C. Vishwakarma
            </h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              Software Engineer, AI Builder, and Startup Founder. Building fast web applications, intelligent AI tools, and sharing lessons learned in public.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              {socialLinks.map((s) => (
                <a 
                  key={s.name} 
                  href={s.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10 transition-all shadow-xs dark:shadow-none"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
              <Link
                href="/rss.xml"
                className="p-2 rounded-md bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/5 transition-all shadow-xs dark:shadow-none"
                aria-label="RSS Feed"
              >
                <Rss className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="text-[10px] text-slate-500 dark:text-zinc-500 font-mono">
              <span>Status: </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Available for Hire (IST)</span>
            </div>
          </div>

          {/* Column 2: Navigation Links Grid */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
              Explore Pages
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              <Link href="/now" className="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">/now</Link>
              <Link href="/uses" className="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">/uses</Link>
              <Link href="/reading" className="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">/reading</Link>
              <Link href="/architecture" className="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">/architecture</Link>
              <Link href="/case-studies" className="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">/case-studies</Link>
              <Link href="/open-source" className="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">/open-source</Link>
              <Link href="/ai-experiments" className="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">/ai-experiments</Link>
              <Link href="/developer-notes" className="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">/developer-notes</Link>
              <Link href="/learning-journal" className="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">/learning-journal</Link>
              <Link href="/research" className="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">/research</Link>
              <Link href="/speaking" className="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">/speaking</Link>
              <Link href="/roadmap" className="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">/roadmap</Link>
            </div>
          </div>

          {/* Column 3: Newsletter System Updates */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
              Stay Connected
            </h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Subscribe to my newsletter where I share monthly reflections on web development, AI tools, and building digital products.
            </p>
            <form onSubmit={handleSubscribe} className="flex max-w-md">
              <input
                type="email"
                required
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white dark:bg-white/5 text-slate-900 dark:text-white border border-slate-300 dark:border-white/10 rounded-l-md outline-none focus:border-indigo-600 dark:focus:border-indigo-500 transition-colors font-mono placeholder:text-slate-400 dark:placeholder:text-zinc-500"
              />
              <button
                type="submit"
                className={`px-4 py-2 text-xs font-semibold rounded-r-md flex items-center transition-all cursor-pointer ${
                  subscribed 
                    ? 'bg-emerald-600 dark:bg-emerald-500 text-white' 
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 dark:hover:bg-indigo-500'
                }`}
              >
                {subscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </form>
          </div>

          {/* Column 4: OS Telemetry Console */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
              OS Telemetry Console
            </h3>
            <div className="p-3.5 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-black/50 font-mono text-[10px] space-y-1.5 text-slate-600 dark:text-zinc-400 shadow-sm dark:shadow-none">
              <div className="flex justify-between gap-2">
                <span className="flex-shrink-0">SYSTEM UPTIME:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium text-right">324d 18h 45m</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="flex-shrink-0">WORKSPACE:</span>
                <span className="text-indigo-600 dark:text-indigo-400 break-all text-right">c:\Kuldeepvishwakarma.com</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="flex-shrink-0">DAEMON PROCESS:</span>
                <span className="text-amber-600 dark:text-amber-400 break-all text-right">kcv-core-agentd.exe</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="flex-shrink-0">PORTFOLIO OS:</span>
                <span className="text-slate-900 dark:text-zinc-200 break-all text-right font-medium">v1.4.6 (Next.js Node)</span>
              </div>
              <div className="flex justify-between gap-2 border-t border-slate-200 dark:border-white/5 pt-1.5 mt-1 text-slate-500 dark:text-zinc-500">
                <span className="flex-shrink-0">CHANGELOG:</span>
                <span className="text-indigo-600 dark:text-indigo-400 break-all text-right">All 12 subpages active</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 dark:text-zinc-500">
          <p>© {new Date().getFullYear()} Kuldeep Chandra Vishwakarma. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0 font-mono text-[10px]">
            <Link href="/projects" className="hover:text-slate-800 dark:hover:text-zinc-300">/projects</Link>
            <Link href="/case-studies" className="hover:text-slate-800 dark:hover:text-zinc-300">/case-studies</Link>
            <Link href="/resume" className="hover:text-slate-800 dark:hover:text-zinc-300">/resume</Link>
            <Link href="/contact" className="hover:text-slate-800 dark:hover:text-zinc-300">/contact</Link>
            <a href="https://github.com/IamKady" target="_blank" rel="noopener noreferrer" className="hover:text-slate-800 dark:hover:text-zinc-300">github</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
