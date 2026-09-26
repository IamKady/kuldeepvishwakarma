'use client';

import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Radio, Target, BookOpen, Linkedin, ExternalLink, RefreshCw } from 'lucide-react';
import { LinkedInPostItem } from '@/app/api/linkedin-activity/route';

export default function NowPage() {
  const [linkedinPosts, setLinkedinPosts] = useState<LinkedInPostItem[]>([]);
  const [isLiveConnected, setIsLiveConnected] = useState(false);

  useEffect(() => {
    fetch('/api/linkedin-activity')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.posts) {
          setLinkedinPosts(data.posts);
          setIsLiveConnected(data.liveConnected);
        }
      })
      .catch((err) => console.error('Failed to load LinkedIn posts:', err));
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 space-y-12 py-6">
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          <Clock className="w-8 h-8 text-indigo-600 dark:text-indigo-400" /> Now
        </h1>
        <p className="text-sm text-slate-600 dark:text-zinc-400 font-sans">
          This is a snapshot of what I am focusing on right now. Inspired by Derek Sivers' "now page" movement.
        </p>
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Location */}
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.01] shadow-xs dark:shadow-none space-y-3">
            <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500 uppercase tracking-wider block flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Location</span>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Uttar Pradesh, India</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Based in India (IST, UTC +5:30). Building software products full-time and completing my Master&apos;s degree in Computer Science.
            </p>
          </div>

          {/* Current Focus */}
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.01] shadow-xs dark:shadow-none space-y-3">
            <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500 uppercase tracking-wider block flex items-center gap-1.5"><Radio className="w-3.5 h-3.5" /> Daily Focus</span>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Deep Work &amp; Systems Engineering</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Focusing on clean TypeScript architecture, AI agent pipelines, and reading Martin Kleppmann&apos;s Designing Data-Intensive Applications.
            </p>
          </div>
        </div>

        {/* Real-Time LinkedIn Work Activity Feed */}
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 glass-panel space-y-4 bg-white/80 dark:bg-black/40">
          <div className="flex justify-between items-center border-b border-slate-200 dark:border-white/5 pb-3">
            <h2 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-sky-600 dark:text-sky-400" /> LinkedIn & Running Work Stream
            </h2>
            <a
              href="https://www.linkedin.com/in/iamkady/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-sky-600 dark:text-sky-400 hover:underline font-mono flex items-center gap-1"
            >
              linkedin.com/in/iamkady <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="space-y-3">
            {linkedinPosts.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-100/90 dark:bg-black/30 hover:bg-slate-200/50 dark:hover:bg-white/[0.03] transition-all block space-y-2 group"
              >
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 dark:text-zinc-500">
                  <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
                    {post.category} Update
                  </span>
                  <span>{post.relativeTime}</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-zinc-300 font-sans leading-relaxed">
                  {post.text}
                </p>
                <div className="text-[10px] font-mono text-sky-600 dark:text-sky-400 flex items-center gap-1 pt-1 group-hover:underline">
                  View post on LinkedIn <ExternalLink className="w-2.5 h-2.5" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Focus list */}
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 glass-panel space-y-4 bg-white/80 dark:bg-black/40">
          <h2 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono border-b border-slate-200 dark:border-white/5 pb-2 flex items-center gap-2">
            <Target className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> Active Commitments
          </h2>
          <ul className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-sans">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-500 mt-2 mr-3 flex-shrink-0" />
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Scaling StartupWire.in</span>
                <p className="text-xs text-slate-600 dark:text-zinc-400 mt-0.5">Refining semantic deduplication with pgvector in Supabase and setting up automated weekly digest newsletters for readers.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-500 mt-2 mr-3 flex-shrink-0" />
              <div>
                <span className="font-bold text-slate-900 dark:text-white">MSc in Computer Science</span>
                <p className="text-xs text-slate-600 dark:text-zinc-400 mt-0.5">Deepening research into distributed systems, consensus protocols, and advanced database indexing.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-500 mt-2 mr-3 flex-shrink-0" />
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Security Research &amp; CTF Writeups</span>
                <p className="text-xs text-slate-600 dark:text-zinc-400 mt-0.5">Practicing defensive web security, auditing API authentication boundaries, and documenting vulnerability writeups.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Reading progress */}
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 glass-panel space-y-4 bg-white/80 dark:bg-black/40">
          <h2 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono border-b border-slate-200 dark:border-white/5 pb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-500" /> Active Reads
          </h2>
          <div className="space-y-3.5">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-800 dark:text-zinc-200">Designing Data-Intensive Applications</span>
              <span className="font-mono text-slate-600 dark:text-zinc-400 text-[10px]">48% Complete</span>
            </div>
            <div className="w-full h-1 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-600 dark:bg-indigo-500" style={{ width: '48%' }} />
            </div>
            <p className="text-[10px] text-slate-500 dark:text-zinc-500 font-mono">By Martin Kleppmann • Current chapter: Partitioning and Relational Replications</p>
          </div>
        </div>
      </div>

    </div>
  );
}
