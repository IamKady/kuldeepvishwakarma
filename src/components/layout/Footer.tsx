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
    <footer className="mt-auto border-t border-card-border bg-black/40 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Brand/Summary */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-sans">
              Kuldeep C. Vishwakarma
            </h3>
            <p className="text-xs text-zinc-400 font-sans max-w-sm leading-relaxed">
              Software Engineer, AI Builder, and Founder. Designing the future of startup journalism, ethical systems, and automation.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              {socialLinks.map((s) => (
                <a 
                  key={s.name} 
                  href={s.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-white/5 border border-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
              <Link
                href="/rss.xml"
                className="p-2 rounded-md bg-white/5 border border-white/5 text-zinc-400 hover:text-rose-400 hover:bg-rose-500/5 transition-all"
                aria-label="RSS Feed"
              >
                <Rss className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-sans">
              System Updates
            </h3>
            <p className="text-xs text-zinc-400 font-sans leading-relaxed">
              Subscribe to my newsletter. I write monthly on AI prompts, software development, and the founder journey of StartupWire.
            </p>
            <form onSubmit={handleSubscribe} className="flex max-w-md">
              <input
                type="email"
                required
                placeholder="system_admin@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white/5 text-white border border-white/10 rounded-l-md outline-none focus:border-ai transition-colors font-mono"
              />
              <button
                type="submit"
                className={`px-4 py-2 text-xs font-semibold rounded-r-md flex items-center transition-all cursor-pointer ${
                  subscribed 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-indigo-600 text-white hover:bg-indigo-500'
                }`}
              >
                {subscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </form>
          </div>

          {/* Professional OS Telemetry Dashboard */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-sans">
              OS Telemetry Console
            </h3>
            <div className="p-3.5 rounded-lg border border-white/10 bg-black/50 font-mono text-[10px] space-y-1.5 text-zinc-400">
              <div className="flex justify-between">
                <span>SYSTEM UPTIME:</span>
                <span className="text-emerald-400 font-medium">324d 18h 45m</span>
              </div>
              <div className="flex justify-between">
                <span>WORKSPACE:</span>
                <span className="text-indigo-400">c:\Kuldeepvishwakarma.com</span>
              </div>
              <div className="flex justify-between">
                <span>DAEMON PROCESS:</span>
                <span className="text-amber-400">kcv-core-agentd.exe</span>
              </div>
              <div className="flex justify-between">
                <span>SSL STATUS:</span>
                <span className="text-emerald-400">ACTIVE (VERIFIED)</span>
              </div>
              <div className="flex justify-between">
                <span>PORTFOLIO OS:</span>
                <span className="text-zinc-200">v1.2.6 (Next.js Node)</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 font-sans">
          <p>© {new Date().getFullYear()} Kuldeep Chandra Vishwakarma. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="/resume" className="hover:text-zinc-300">Resume</Link>
            <Link href="/projects" className="hover:text-zinc-300">Case Studies</Link>
            <Link href="/contact" className="hover:text-zinc-300">Schedule Meeting</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
