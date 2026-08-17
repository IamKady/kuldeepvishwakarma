'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  GitPullRequest, 
  ExternalLink, 
  Github, 
  Star, 
  GitFork, 
  Search, 
  Copy, 
  Check, 
  Terminal, 
  Sparkles, 
  Layers, 
  Cpu, 
  BookOpen, 
  Globe,
  Radio
} from 'lucide-react';
import { openSourceContributions } from '@/data/db';
import { GitHubRepoItem, fallbackRepositories } from '@/app/api/github-repos/route';

export default function OpenSourcePage() {
  const [repos, setRepos] = useState<GitHubRepoItem[]>(fallbackRepositories);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');
  const [isLiveSync, setIsLiveSync] = useState(false);
  const [copiedCloneUrl, setCopiedCloneUrl] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch('/api/github-repos');
        if (res.ok) {
          const data = await res.json();
          if (data.repos && Array.isArray(data.repos) && data.repos.length > 0) {
            setRepos(data.repos);
            setIsLiveSync(data.live);
          }
        }
      } catch (err) {
        console.error('Failed to load GitHub repositories:', err);
      }
    }
    fetchRepos();
  }, []);

  const handleCopyClone = (cloneUrl: string) => {
    navigator.clipboard.writeText(`git clone ${cloneUrl}`);
    setCopiedCloneUrl(cloneUrl);
    setTimeout(() => setCopiedCloneUrl(null), 2000);
  };

  // Compute unique languages from repositories
  const languages = ['All', ...Array.from(new Set(repos.map(r => r.language).filter(Boolean))) as string[]];

  const filteredRepos = repos.filter(repo => {
    const matchesSearch = 
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      repo.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesLanguage = selectedLanguage === 'All' || repo.language === selectedLanguage;

    return matchesSearch && matchesLanguage;
  });

  const getLanguageColor = (lang: string | null) => {
    switch (lang) {
      case 'TypeScript':
        return 'bg-blue-500 text-blue-400';
      case 'Python':
        return 'bg-emerald-500 text-emerald-400';
      case 'C++':
        return 'bg-rose-500 text-rose-400';
      case 'HTML':
        return 'bg-amber-500 text-amber-400';
      case 'CSS':
        return 'bg-indigo-500 text-indigo-400';
      case 'Git':
        return 'bg-orange-500 text-orange-400';
      default:
        return 'bg-slate-500 text-zinc-400';
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 space-y-12 py-6">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20 font-bold flex items-center gap-1.5">
                <Github className="w-3 h-3" />
                GitHub Ecosystem Hub
              </span>
              {isLiveSync && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-mono font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Live REST Sync
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-3 mt-2">
              <Code className="w-8 h-8 text-indigo-600 dark:text-indigo-400" /> Open Source & GitHub
            </h1>
            <p className="text-sm text-slate-600 dark:text-zinc-400 font-sans max-w-2xl mt-1">
              Public code repositories, system architectures, AI agent utilities, and ecosystem contribution pull requests authored by <strong className="text-slate-900 dark:text-white">Kuldeep Chandra Vishwakarma (@IamKady)</strong>.
            </p>
          </div>

          <a 
            href="https://github.com/IamKady" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/20 text-white font-mono text-xs font-semibold flex items-center space-x-2 transition-all w-fit shadow-md self-start"
          >
            <Github className="w-4 h-4" />
            <span>github.com/IamKady</span>
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </div>
      </div>

      {/* Profile Overview Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-zinc-950/40 shadow-xs space-y-1">
          <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500 uppercase tracking-wider block">Public Repositories</span>
          <span className="text-2xl font-black text-slate-900 dark:text-white font-mono">{repos.length}</span>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono block">100% Open Access</span>
        </div>

        <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-zinc-950/40 shadow-xs space-y-1">
          <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500 uppercase tracking-wider block">Primary Languages</span>
          <span className="text-2xl font-black text-slate-900 dark:text-white font-mono">5+</span>
          <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-mono block">TS, Python, C++, HTML/CSS</span>
        </div>

        <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-zinc-950/40 shadow-xs space-y-1">
          <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500 uppercase tracking-wider block">Collaboration Status</span>
          <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">Active</span>
          <span className="text-[10px] text-slate-500 dark:text-zinc-400 font-mono block">Accepting PRs & Issues</span>
        </div>

        <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-zinc-950/40 shadow-xs space-y-1">
          <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500 uppercase tracking-wider block">Primary Branch</span>
          <span className="text-2xl font-black text-slate-900 dark:text-white font-mono">main</span>
          <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-mono block">CI/CD Production Ready</span>
        </div>
      </div>

      {/* Public Repositories Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/5 pb-4">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-mono flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Public Code Repositories ({filteredRepos.length})
            </h2>
            <p className="text-xs text-slate-600 dark:text-zinc-400 font-sans">
              Search and explore live repositories with full source code, commit timelines, and clone commands.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search repositories..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 font-sans"
            />
          </div>
        </div>

        {/* Language Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                selectedLanguage === lang
                  ? 'bg-indigo-600 text-white font-bold shadow-md'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-400 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5'
              }`}
            >
              {lang} {lang === 'All' ? `(${repos.length})` : `(${repos.filter(r => r.language === lang).length})`}
            </button>
          ))}
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRepos.map((repo) => (
            <div 
              key={repo.name} 
              className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-black/40 hover:border-slate-300 dark:hover:border-white/20 transition-all flex flex-col justify-between space-y-4 shadow-lg group relative overflow-hidden"
            >
              {/* Top Row: Name & Badges */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <a 
                      href={repo.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-base font-bold text-slate-900 dark:text-white font-mono hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1.5"
                    >
                      <span>{repo.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </a>
                    
                    <div className="flex items-center gap-2 flex-wrap text-[10px] font-mono">
                      {repo.language && (
                        <span className="flex items-center gap-1 text-slate-600 dark:text-zinc-400">
                          <span className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language).split(' ')[0]}`} />
                          {repo.language}
                        </span>
                      )}
                      {repo.isFork && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                          Forked upstream
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-zinc-400 border border-slate-200 dark:border-white/5">
                        {repo.defaultBranch}
                      </span>
                    </div>
                  </div>

                  <a 
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-white transition-colors flex-shrink-0"
                    title="Open on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-sans min-h-[36px]">
                  {repo.description || 'Open source engineering repository maintained by IamKady.'}
                </p>

                {/* Topics */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {repo.topics.map(topic => (
                      <span key={topic} className="text-[9px] font-mono px-2 py-0.5 rounded bg-indigo-500/5 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/15">
                        #{topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Row: Clone Button & Links */}
              <div className="pt-3 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] font-mono">
                <button
                  onClick={() => handleCopyClone(repo.cloneUrl)}
                  className="flex items-center space-x-1.5 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer bg-slate-100 dark:bg-white/5 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-white/5"
                  title="Copy git clone command"
                >
                  {copiedCloneUrl === repo.cloneUrl ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied clone!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>git clone {repo.name}</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2">
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <Globe className="w-3 h-3" /> Live
                    </a>
                  )}
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    Repository <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Open Source PR Merge Contributions Section */}
      <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-white/5">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white font-mono flex items-center gap-2">
            <GitPullRequest className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Merged Contributions & Pull Requests
          </h2>
          <p className="text-xs text-slate-600 dark:text-zinc-400 font-sans">
            Verified pull requests and optimization patches submitted into modern web frameworks and developer ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {openSourceContributions.map((pr) => (
            <div key={pr.id} className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-black/40 hover:border-slate-300 dark:hover:border-white/20 transition-all space-y-3 shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500 uppercase tracking-wider block">Target Repository</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white font-mono mt-0.5 block">{pr.repoName}</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.8 border border-emerald-500/20 rounded-full flex items-center gap-1">
                  <Check className="w-3 h-3" /> {pr.status}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-800 dark:text-zinc-200 font-semibold leading-snug font-sans">{pr.prTitle}</p>
              <p className="text-xs text-slate-600 dark:text-zinc-400 font-sans leading-relaxed">{pr.description}</p>
              
              <div className="pt-2 border-t border-slate-200 dark:border-white/5 flex justify-between items-center text-[10px] text-slate-500 dark:text-zinc-500 font-mono">
                <span>{pr.impact}</span>
                <a 
                  href={pr.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center font-semibold"
                >
                  View Upstream <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
