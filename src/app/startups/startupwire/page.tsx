'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Map, 
  BookOpen, 
  Cpu, 
  Activity, 
  TrendingUp, 
  Layers, 
  Shield, 
  Search, 
  ArrowLeft,
  ChevronRight,
  ExternalLink,
  Target,
  Workflow,
  CheckCircle2
} from 'lucide-react';

export default function StartupWireProductPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 space-y-16 py-6">
      
      {/* Back button */}
      <div className="flex items-center justify-between">
        <Link 
          href="/startups"
          className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition-all flex items-center space-x-1.5 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Startup Journal</span>
        </Link>
        <a 
          href="https://startupwire.in" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white rounded-lg transition-all flex items-center space-x-1.5 cursor-pointer shadow-lg shadow-indigo-600/10"
        >
          <span>Launch StartupWire.in</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-xs text-emerald-400 font-mono tracking-wider font-semibold uppercase">
          ⚡ StartupWire Core Product Page
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          StartupWire.in
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-sans max-w-2xl leading-relaxed">
          An autonomous curation engine compiling startup updates, VC news, and tech announcements using Gemini filters and pgvector deduplication.
        </p>
      </div>

      {/* Mission & Vision & Market Opportunity */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-3 shadow-lg">
          <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase block tracking-wider">01 / The Mission</span>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-sans">Filter Niche Clutter</h3>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans">
            To provide developers and tech founders with concise, clean summaries of startup launches and artificial intelligence developments, stripped of marketing fluff and clickbait.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-3 shadow-lg">
          <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block tracking-wider">02 / The Vision</span>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-sans">Autonomous Curation</h3>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans">
            A self-sustaining content asset that executes scraping, curation, validation, indexing, and newsletter publication with zero daily human administration needed.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-3 shadow-lg">
          <span className="text-[10px] font-mono text-amber-400 font-bold uppercase block tracking-wider">03 / Opportunity</span>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-sans">Programmatic SEO</h3>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans">
            Leveraging structured schemas, speed optimizations, and long-tail query indexings to build organic traffic pathways for startup keywords.
          </p>
        </div>
      </div>

      {/* Crawler & AI pipeline details */}
      <div className="space-y-6">
        <div className="border-b border-white/5 pb-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans flex items-center">
            <Workflow className="w-5 h-5 text-indigo-400 mr-2" />
            Core Crawler & AI pipeline
          </h2>
          <p className="text-xs text-zinc-400 font-sans mt-1">
            Understanding the pipeline that ingests, summarizes, deduplicates, and commits data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider font-mono text-white">1. RSS Scraper Daemon</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                Every 4 hours, a scheduled Node worker triggers. It traverses 40+ verified RSS endpoints (TechCrunch, VentureBeat, Hacker News, Product Hunt), parsing XML schemas and checking URL status codes.
              </p>
            </div>

            <div className="space-y-2 border-t border-white/5 pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider font-mono text-white">2. Gemini Summarization Agent</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                Candidate feeds are processed using Google Gemini 1.5 Flash. The agent reads the article body, discards advertisements, writes concise summaries, assigns category taxonomies, and extracts key entities.
              </p>
            </div>

            <div className="space-y-2 border-t border-white/5 pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider font-mono text-white">3. pgvector Cosine similarity filter</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                To prevent duplicate entries reporting the same PR, article titles are converted into 768-dimension vectors. Supabase calculates the cosine distance between the candidate and all YTD posts, rejecting matching items.
              </p>
            </div>
          </div>

          {/* Pipeline Blueprint Card */}
          <div className="p-5 rounded-2xl border border-white/10 bg-black/60 font-mono text-[10px] text-zinc-300 space-y-4 shadow-xl">
            <span className="text-zinc-500 font-bold uppercase tracking-widest text-[9px] block mb-2">// ASCII PIPELINE FLOWCHART</span>
            <pre className="leading-tight select-none">
{`[RSS Feed Feeder Nodes]
         |
         v (triggered every 4h)
[Node.js Scraper Daemon]
         |
         v (Zod Schema Sanitizer)
[Prompt Injection Payload]
         |
         v
[Google Gemini 1.5 Flash API]
         |
         v (Structured JSON output)
[pgvector Embedding Lookup] 
         |
         +--> Distance < 0.15 ? [REJECT DUPLICATE]
         |
         v (Distance >= 0.15)
[Supabase PostgreSQL DB]
         |
         v (Webhook Trigger)
[Edge Cache Sitemap Rebuild]`}
            </pre>
          </div>
        </div>
      </div>

      {/* SEO Engine & Tech stack */}
      <div className="space-y-6">
        <div className="border-b border-white/5 pb-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans flex items-center">
            <Layers className="w-5 h-5 text-emerald-400 mr-2" />
            Performance & SEO Engine
          </h2>
          <p className="text-xs text-zinc-400 font-sans mt-1">
            How StartupWire achieves under 200ms page load latencies while crawling organic rankings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
          <div className="p-5 rounded-xl border border-white/5 bg-white/[0.01] space-y-2">
            <span className="text-[10px] font-mono text-emerald-400 block uppercase font-bold">Next.js Edge caching</span>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Serving pre-rendered static semantic HTML content via Vercel Edge networks. Edge endpoints revalidate caches instantly using Supabase database triggers.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-white/5 bg-white/[0.01] space-y-2">
            <span className="text-[10px] font-mono text-emerald-400 block uppercase font-bold">JSON-LD schema markup</span>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Auto-injecting detailed NewsArticle, FAQ, and Breadcrumb structured schemas on every news path to enable rich-snippets indexing on Search engines.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-white/5 bg-white/[0.01] space-y-2">
            <span className="text-[10px] font-mono text-emerald-400 block uppercase font-bold">Image Sizing adapters</span>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Using aspect-ratio bounds and next-gen compression rules to keep Cumulative Layout Shift (CLS) at 0, passing Core Web Vitals checks.
            </p>
          </div>
        </div>
      </div>

      {/* Roadmap & Future growth */}
      <div className="space-y-6">
        <div className="border-b border-white/5 pb-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans flex items-center">
            <Target className="w-5 h-5 text-amber-400 mr-2" />
            Future Growth & Monetization
          </h2>
          <p className="text-xs text-zinc-400 font-sans mt-1">
            Roadmap targets, API integrations, and developer sponsorship channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-4">
            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">Roadmap Milestones</span>
            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Verify pgvector threshold logic in staging (Completed)</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Deploy static site Edge cache revalidation patterns (Completed)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 rounded-full border border-indigo-500 animate-pulse flex-shrink-0" />
                <span>Build dynamic newsletter digest worker pipeline (In Progress)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 rounded-full border border-zinc-600 flex-shrink-0" />
                <span>Expose API endpoints for aggregated startup news feeds (Backlog)</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest block font-bold mb-2">Monetization models</span>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                StartupWire rejects generic ad networks like Google AdSense to preserve loading speeds and user attention. Instead, the roadmap targets micro-sponsorship configurations (text ads for developer products) and subscriptions for premium aggregated search indexing APIs.
              </p>
            </div>
            <span className="text-[10px] text-zinc-500 font-mono">
              Compiled by system_admin on 2026.07.13
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}
