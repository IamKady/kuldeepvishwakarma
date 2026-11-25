'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  GitCommit,
  GitBranch,
  ExternalLink,
  Cpu,
  Layers,
  Shield,
  BookOpen,
  ArrowRight,
  Star,
  GitFork,
} from 'lucide-react';
import type { RealCommitItem } from '@/app/api/github-commits/route';
import type { GitHubRepoItem } from '@/app/api/github-repos/route';
import { openSourceContributions, systemArchitectures } from '@/data/db';

interface SiteStats {
  status: string;
  lastUpdated: string;
  counts: {
    projects: number;
    clientWork: number;
    blogs: number;
    aiPrompts: number;
    startupLogs: number;
    researchNotes: number;
    openSourcePRs: number;
    cyberLogs: number;
    uniqueTechnologies: number;
  };
}

type HubTab = 'commits' | 'repos' | 'radar' | 'architecture';

export default function EngineeringPage() {
  const [activeTab, setActiveTab] = useState<HubTab>('commits');
  const [commits, setCommits] = useState<RealCommitItem[]>([]);
  const [commitsLive, setCommitsLive] = useState(false);
  const [repos, setRepos] = useState<GitHubRepoItem[]>([]);
  const [reposLive, setReposLive] = useState(false);
  const [siteStats, setSiteStats] = useState<SiteStats | null>(null);

  useEffect(() => {
    fetch('/api/github-commits')
      .then((res) => res.json())
      .then((data) => {
        if (data?.commits) {
          setCommits(data.commits);
          setCommitsLive(Boolean(data.live));
        }
      })
      .catch((err) => console.error('Failed to fetch commits:', err));

    fetch('/api/github-repos')
      .then((res) => res.json())
      .then((data) => {
        if (data?.repos) {
          setRepos(data.repos);
          setReposLive(Boolean(data.live));
        }
      })
      .catch((err) => console.error('Failed to fetch repos:', err));

    fetch('/api/site-stats')
      .then((res) => res.json())
      .then((data) => {
        if (data?.counts) setSiteStats(data);
      })
      .catch((err) => console.error('Failed to fetch site stats:', err));
  }, []);

  const techRadar = [
    {
      ring: 'Production',
      items: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'PostgreSQL', 'Supabase'],
    },
    {
      ring: 'Active Use',
      items: ['Google Gemini API', 'pgvector (HNSW)', 'Zod', 'Prisma ORM', 'esbuild', 'FastAPI'],
    },
    {
      ring: 'Research & Exploration',
      items: ['Distributed Consensus', 'Hybrid BM25 + RRF', 'Web Crypto API', 'Linux Security'],
    },
  ];

  const deepDiveLinks = [
    { name: 'System Architecture', path: '/architecture', desc: 'Data flows & database schemas', icon: <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
    { name: 'Case Studies', path: '/case-studies', desc: 'Technical post-mortems & trade-offs', icon: <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
    { name: 'AI Lab & Prompts', path: '/ai-lab', desc: 'Structured prompt engineering', icon: <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
    { name: 'Cybersecurity Logs', path: '/cybersecurity', desc: 'CTF writeups & API hardening', icon: <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
    { name: 'Open Source', path: '/open-source', desc: 'Public repositories & PRs', icon: <GitBranch className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
    { name: 'Research Notes', path: '/research', desc: 'MSc CS preprints & formulas', icon: <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
  ];

  const hubTabs: { id: HubTab; label: string }[] = [
    { id: 'commits', label: 'Commit Stream' },
    { id: 'repos', label: 'Repositories' },
    { id: 'radar', label: 'Tech Radar' },
    { id: 'architecture', label: 'OSS & Architecture' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8 space-y-14">
      {/* Header */}
      <div className="space-y-3 border-b border-card-border pb-8">
        <p className="text-xs font-mono uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
          Engineering Hub
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Systems, Repositories &amp; Live Activity
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          Dedicated engineering workspace for live GitHub REST API commit history, public repositories, technology radar, and system blueprints—kept separate from the main portfolio homepage.
        </p>
      </div>

      {/* Verified Portfolio Inventory Stats */}
      {siteStats && (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xs font-mono uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
              Verified Content Inventory
            </h2>
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
              Synced {siteStats.lastUpdated}
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Projects Cataloged', value: siteStats.counts.projects },
              { label: 'Published Essays', value: siteStats.counts.blogs },
              { label: 'Public GitHub Repos', value: repos.length || 10 },
              { label: 'Technologies Indexed', value: siteStats.counts.uniqueTechnologies },
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-xl border border-card-border bg-card-bg space-y-1"
              >
                <span className="text-xs text-zinc-500 dark:text-zinc-400 block">
                  {item.label}
                </span>
                <span className="text-xl font-semibold font-mono text-zinc-900 dark:text-zinc-100">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Interactive Engineering Hub Tabs */}
      <section className="space-y-6">
        <div className="flex flex-wrap gap-1.5 border-b border-card-border pb-4">
          {hubTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold'
                  : 'bg-card-bg border border-card-border text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Live GitHub Commits */}
        {activeTab === 'commits' && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <GitCommit className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Recent GitHub Commits
              </h2>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                {commitsLive ? 'Live GitHub REST API' : 'Verified Commit Snapshot'}
              </span>
            </div>

            <div className="border border-card-border rounded-xl bg-card-bg divide-y divide-card-border overflow-hidden">
              {commits.slice(0, 8).map((c, idx) => (
                <a
                  key={`${c.commit}-${idx}`}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-card-inner transition-colors"
                >
                  <div className="space-y-1 min-w-0">
                    <p className="text-sm text-zinc-900 dark:text-zinc-100 truncate font-medium">
                      {c.event}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      <span className="text-blue-600 dark:text-blue-400">{c.commit}</span>
                      <span>IamKady/{c.repoName}</span>
                      <span>{c.branch}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 flex-shrink-0">
                    <span>{c.time}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Public GitHub Repositories */}
        {activeTab === 'repos' && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Public Repositories
              </h2>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                {reposLive ? 'Synced with github.com/IamKady' : 'Repository Index'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {repos.slice(0, 8).map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-xl border border-card-border bg-card-bg hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors flex flex-col justify-between gap-3"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 font-mono">
                        {repo.name}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
                      {repo.description || 'Public repository on GitHub.'}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    {repo.language && <span>{repo.language}</span>}
                    <span className="inline-flex items-center gap-1">
                      <Star className="w-3 h-3" /> {repo.stars}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="w-3 h-3" /> {repo.forks}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Tech Radar */}
        {activeTab === 'radar' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {techRadar.map((group) => (
              <div
                key={group.ring}
                className="p-5 rounded-xl border border-card-border bg-card-bg space-y-3"
              >
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                  {group.ring}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-card-inner text-zinc-700 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Open Source & Architecture */}
        {activeTab === 'architecture' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-card-border bg-card-bg space-y-4">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Open Source Contributions
              </h3>
              <div className="space-y-3">
                {openSourceContributions.map((pr) => (
                  <div key={pr.id} className="space-y-1 border-b border-card-border last:border-0 pb-3 last:pb-0">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-semibold text-zinc-900 dark:text-zinc-100">{pr.repoName}</span>
                      <span className="text-blue-600 dark:text-blue-400">{pr.status}</span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">{pr.prTitle}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl border border-card-border bg-card-bg space-y-4">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                System Blueprints
              </h3>
              {systemArchitectures.slice(0, 1).map((arch) => (
                <div key={arch.id} className="space-y-2">
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{arch.title}</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{arch.description}</p>
                  <Link
                    href="/architecture"
                    className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline pt-1"
                  >
                    Inspect architecture diagrams <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Deep-Dive Subpages Directory */}
      <section className="space-y-4 border-t border-card-border pt-10">
        <h2 className="text-xs font-mono uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
          Engineering Subpages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {deepDiveLinks.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="p-4 rounded-xl border border-card-border bg-card-bg hover:border-blue-500/40 transition-colors flex items-start gap-3"
            >
              <div className="p-2 rounded-md bg-card-inner">{item.icon}</div>
              <div>
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 block">
                  {item.name}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {item.desc}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
