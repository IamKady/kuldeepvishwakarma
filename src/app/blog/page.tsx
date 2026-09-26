'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  Clock, 
  X, 
  ArrowLeft,
  Rss,
  Hash,
  ChevronRight,
  Share2,
  Check,
  Sparkles,
  Copy,
  ArrowRight,
  Filter,
  Layers,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { blogsData } from '@/data/db';

export default function Blog() {
  const [activeTab, setActiveTab] = useState<'tech' | 'non-tech'>('tech');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [readingBlogId, setReadingBlogId] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCodeIdx, setCopiedCodeIdx] = useState<number | null>(null);
  const [readingProgress, setReadingProgress] = useState(0);

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Sync with URL hash for deep linking (e.g. /blog#nextjs-16-turbopack-tutorial)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const found = blogsData.find(b => b.id === hash);
        if (found) {
          setReadingBlogId(found.id);
          setActiveTab(found.type || 'tech');
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Update hash when opening or closing reader
  const openArticle = (id: string) => {
    setReadingBlogId(id);
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeArticle = () => {
    setReadingBlogId(null);
    history.pushState('', document.title, window.location.pathname + window.location.search);
  };

  // Global window scroll progress when in reader mode
  useEffect(() => {
    if (!readingBlogId) return;

    const handleWindowScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = (scrollTop / docHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleWindowScroll, { passive: true });
    handleWindowScroll();
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, [readingBlogId]);

  // Keyboard shortcuts (Esc to close, / to search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (readingBlogId) {
          closeArticle();
        } else if (searchQuery) {
          setSearchQuery('');
        }
      } else if (e.key === '/' && !readingBlogId && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [readingBlogId, searchQuery]);

  const handleCopyLink = (id: string) => {
    const url = `${window.location.origin}/blog#${id}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIdx(idx);
    setTimeout(() => setCopiedCodeIdx(null), 2000);
  };

  const renderFormattedText = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: (string | React.ReactNode)[] = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <a
          key={match.index}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 dark:text-indigo-400 font-semibold underline underline-offset-2 hover:text-indigo-700 dark:hover:text-indigo-300 inline-flex items-center gap-0.5"
        >
          {match[1]} <ExternalLink className="w-3 h-3 inline ml-0.5 opacity-70" />
        </a>
      );
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  const techCategories = [
    'All', 
    'Artificial Intelligence', 
    'Programming', 
    'Next.js', 
    'React', 
    'Architecture', 
    'System Design', 
    'Linux', 
    'Open Source', 
    'Cybersecurity',
    'Frontend & UI',
    'AI & LLMs'
  ];

  const nonTechCategories = [
    'All',
    'Career & Mindset',
    'Art & Creativity',
    'Books & Reading',
    'Writing & Prose',
    'Hobbies & Lifestyle'
  ];

  const currentCategories = activeTab === 'tech' ? techCategories : nonTechCategories;

  const filteredBlogs = blogsData.filter(blog => {
    const blogType = blog.type || 'tech';
    const matchesTab = blogType === activeTab;

    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;

    return matchesTab && matchesSearch && matchesCategory;
  });

  const activeBlog = blogsData.find(b => b.id === readingBlogId);

  const techBlogs = blogsData.filter(b => (b.type || 'tech') === 'tech');
  const nonTechBlogs = blogsData.filter(b => b.type === 'non-tech');

  // Extract sections/headings from active blog content
  const extractHeadings = (content?: string) => {
    if (!content) return [];
    return content
      .split('\n\n')
      .filter(p => p.startsWith('### '))
      .map(p => p.replace('### ', '').trim());
  };

  const articleHeadings = extractHeadings(activeBlog?.content);

  // Featured blog (first in filtered set when default view)
  const isDefaultFilter = selectedCategory === 'All' && !searchQuery;
  const featuredBlog = isDefaultFilter && filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  const regularBlogs = featuredBlog ? filteredBlogs.slice(1) : filteredBlogs;

  // Next blog recommendation in reader mode
  const getNextBlog = () => {
    if (!activeBlog) return null;
    const currentIndex = blogsData.findIndex(b => b.id === activeBlog.id);
    return blogsData[(currentIndex + 1) % blogsData.length];
  };

  const nextBlog = getNextBlog();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 relative">
      
      {/* Subtle Ambient Glow */}
      <div className="absolute top-12 left-1/3 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 right-1/4 w-80 h-80 bg-rose-500/10 dark:bg-rose-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <AnimatePresence mode="wait">
        {!readingBlogId ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="space-y-12"
          >
            {/* Editorial Masthead */}
            <header className="space-y-6 border-b border-slate-200/80 dark:border-white/10 pb-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="inline-flex items-center space-x-2 text-xs font-mono text-slate-600 dark:text-zinc-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-semibold tracking-wider uppercase">FIELD NOTES & DISPATCHES</span>
                  <span className="text-slate-400 dark:text-zinc-600">•</span>
                  <span>Vol. 2026</span>
                </div>

                <a 
                  href="/rss.xml" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-white/5 hover:bg-slate-200/60 dark:hover:bg-white/10 text-xs text-slate-700 dark:text-zinc-300 transition-all font-mono"
                  title="Subscribe to RSS Feed"
                >
                  <Rss className="w-3.5 h-3.5 text-rose-500" />
                  <span>RSS Feed</span>
                </a>
              </div>

              <div className="space-y-3 max-w-3xl">
                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                  {activeTab === 'tech' ? (
                    <>
                      Engineering, Systems & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500 dark:from-indigo-400 dark:via-violet-400 dark:to-indigo-300">Software Craft</span>
                    </>
                  ) : (
                    <>
                      Reflections, Design & <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 dark:from-rose-400 dark:via-pink-400 dark:to-rose-300">Creative Life</span>
                    </>
                  )}
                </h1>

                <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 font-sans leading-relaxed">
                  {activeTab === 'tech'
                    ? 'Candid architectural post-mortems, deterministic AI pipelines, and practical distributed systems from the trenches of building StartupWire and Sentinel Guard.'
                    : 'Personal essays on transitioning from civil blueprints to computer science, sketching visual thinking, reading philosophy, and finding balance outside the terminal.'}
                </p>
              </div>

              {/* Author Byline Attribution */}
              <div className="flex items-center space-x-3 pt-2 text-xs text-slate-600 dark:text-zinc-400">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-rose-500 flex items-center justify-center text-white font-bold text-[11px] shadow-xs">
                  KV
                </div>
                <div>
                  <span className="font-semibold text-slate-900 dark:text-zinc-200">Kuldeep Chandra Vishwakarma</span>
                  <span className="mx-1.5 text-slate-400 dark:text-zinc-600">•</span>
                  <span>Software Engineer & Founder</span>
                </div>
              </div>
            </header>

            {/* Controls Bar: Segment Switcher & Search */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              
              {/* Tab Switcher */}
              <div className="flex p-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl w-full sm:w-auto">
                <button
                  onClick={() => {
                    setActiveTab('tech');
                    setSelectedCategory('All');
                  }}
                  className={`relative flex-1 sm:flex-initial py-2 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer z-10 ${
                    activeTab === 'tech'
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {activeTab === 'tech' && (
                    <motion.div
                      layoutId="activeBlogTab"
                      className="absolute inset-0 bg-white dark:bg-indigo-600 rounded-xl shadow-xs -z-10"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span>Technical Dispatches</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                    activeTab === 'tech'
                      ? 'bg-indigo-100 dark:bg-white/20 text-indigo-700 dark:text-white'
                      : 'bg-slate-200/80 dark:bg-white/10 text-slate-600 dark:text-zinc-400'
                  }`}>
                    {techBlogs.length}
                  </span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('non-tech');
                    setSelectedCategory('All');
                  }}
                  className={`relative flex-1 sm:flex-initial py-2 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer z-10 ${
                    activeTab === 'non-tech'
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {activeTab === 'non-tech' && (
                    <motion.div
                      layoutId="activeBlogTab"
                      className="absolute inset-0 bg-white dark:bg-rose-600 rounded-xl shadow-xs -z-10"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span>Essays & Crafts</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                    activeTab === 'non-tech'
                      ? 'bg-rose-100 dark:bg-white/20 text-rose-700 dark:text-white'
                      : 'bg-slate-200/80 dark:bg-white/10 text-slate-600 dark:text-zinc-400'
                  }`}>
                    {nonTechBlogs.length}
                  </span>
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 dark:text-zinc-500" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder={`Search ${activeTab === 'tech' ? 'technical notes' : 'essays'}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-9 py-2 text-xs bg-slate-100/80 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-xl outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-all font-sans placeholder:text-slate-400 dark:placeholder:text-zinc-500"
                />
                {searchQuery ? (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <kbd className="hidden sm:inline-block absolute right-3 top-2.5 text-[10px] font-mono text-slate-400 dark:text-zinc-500 border border-slate-300 dark:border-white/10 rounded px-1.5 py-0.2">
                    /
                  </kbd>
                )}
              </div>

            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none pt-1">
              <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 flex items-center gap-1 shrink-0 pr-1">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter:</span>
              </span>
              {currentCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs rounded-xl border transition-all cursor-pointer shrink-0 font-medium ${
                    selectedCategory === cat
                      ? activeTab === 'non-tech'
                        ? 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/40 font-semibold'
                        : 'bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/40 font-semibold'
                      : 'bg-transparent text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 border-slate-200/80 dark:border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Featured Lead Dispatch (when browsing default unfiltered view) */}
            {featuredBlog && (
              <motion.article
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/30 dark:from-indigo-950/20 dark:via-zinc-950/40 dark:to-purple-950/15 p-6 sm:p-9 shadow-sm hover:shadow-md hover:border-indigo-500/30 transition-all cursor-pointer group"
                onClick={() => openArticle(featuredBlog.id)}
              >
                <div className="relative z-10 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-indigo-600 text-white shadow-2xs">
                        Lead Dispatch
                      </span>
                      <span className="text-indigo-700 dark:text-indigo-400 font-medium">
                        {featuredBlog.category}
                      </span>
                    </div>

                    <div className="flex items-center space-x-3 text-slate-500 dark:text-zinc-400">
                      <span>{featuredBlog.date}</span>
                      <span>•</span>
                      <span>{featuredBlog.readTime}</span>
                    </div>
                  </div>

                  <div className="space-y-3 max-w-3xl">
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors tracking-tight leading-tight">
                      {featuredBlog.title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-sans line-clamp-3">
                      {featuredBlog.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-200/60 dark:border-white/5">
                    <div className="text-xs text-slate-500 dark:text-zinc-400">
                      <span>Written by <strong>Kuldeep</strong></span>
                    </div>

                    <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                      <span>Read Full Dispatch</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.article>
            )}

            {/* Articles Stream */}
            <div className="space-y-4">
              <div className="text-xs font-mono text-slate-500 dark:text-zinc-500 uppercase tracking-wider pb-2 border-b border-slate-200/60 dark:border-white/5 flex items-center justify-between">
                <span>All Articles ({filteredBlogs.length})</span>
                <span>Sorted Chronologically</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {regularBlogs.map((blog) => (
                  <motion.article 
                    key={blog.id} 
                    id={blog.id}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.15 }}
                    onClick={() => openArticle(blog.id)}
                    className="p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 hover:border-indigo-500/40 dark:hover:border-indigo-500/30 transition-all cursor-pointer bg-white/70 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.04] shadow-xs hover:shadow-md flex flex-col justify-between group space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-zinc-400">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          blog.type === 'non-tech'
                            ? 'bg-rose-500/10 text-rose-700 dark:text-rose-400'
                            : 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400'
                        }`}>
                          {blog.category}
                        </span>
                        
                        <div className="flex items-center space-x-2 text-[11px]">
                          <span>{blog.date}</span>
                          <span>•</span>
                          <span>{blog.readTime}</span>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                          {blog.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
                          {blog.description}
                        </p>
                      </div>
                    </div>

                    <div className={`pt-3 border-t border-slate-100 dark:border-white/5 text-xs font-semibold flex items-center justify-between ${
                      blog.type === 'non-tech' ? 'text-rose-600 dark:text-rose-400' : 'text-indigo-600 dark:text-indigo-400'
                    }`}>
                      <span>Read essay</span>
                      <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        →
                      </span>
                    </div>
                  </motion.article>
                ))}
              </div>

              {filteredBlogs.length === 0 && (
                <div className="text-center py-16 bg-slate-50 dark:bg-white/[0.02] rounded-3xl border border-dashed border-slate-300 dark:border-white/10 space-y-3">
                  <Search className="w-8 h-8 text-slate-400 dark:text-zinc-500 mx-auto" />
                  <p className="text-sm font-semibold text-slate-700 dark:text-zinc-300">
                    No articles found matching &ldquo;{searchQuery}&rdquo;
                  </p>
                  <p className="text-xs text-slate-500 dark:text-zinc-500">
                    Try adjusting your search query or selecting a different category filter.
                  </p>
                  <button 
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                    className="mt-2 px-4 py-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold hover:bg-indigo-500/20 transition-all cursor-pointer"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>

          </motion.div>
        ) : (
          /* Dedicated In-Place Reading Experience */
          <motion.div
            key="reader"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.25 }}
            className="space-y-10"
          >
            {/* Sticky Reading Bar */}
            <div className="sticky top-4 z-40 bg-white/95 dark:bg-zinc-950/95 border border-slate-200 dark:border-white/10 p-3 sm:p-4 rounded-2xl shadow-lg backdrop-blur-xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button
                  onClick={closeArticle}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-xs font-semibold text-slate-800 dark:text-white transition-all flex items-center space-x-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>All Dispatches</span>
                </button>

                <div className="hidden md:flex items-center space-x-2 text-xs text-slate-500 dark:text-zinc-400 font-mono border-l border-slate-200 dark:border-white/10 pl-3">
                  <span className="truncate max-w-sm font-sans font-medium text-slate-800 dark:text-zinc-200">{activeBlog?.title}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => activeBlog && handleCopyLink(activeBlog.id)}
                  className="px-3 py-1.5 rounded-xl bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 text-xs font-semibold hover:bg-indigo-500/20 transition-all flex items-center space-x-1.5 cursor-pointer"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
                </button>

                <button 
                  onClick={closeArticle}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Reading Progress Line */}
              <div 
                className="absolute -bottom-[1px] left-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 transition-all duration-100 rounded-b-2xl"
                style={{ width: `${readingProgress}%` }}
              />
            </div>

            {/* Article Canvas */}
            <article className="max-w-3xl mx-auto space-y-8 bg-white dark:bg-zinc-950 p-6 sm:p-12 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-sm">
              
              {/* Meta & Breadcrumb */}
              <div className="space-y-4 border-b border-slate-200/80 dark:border-white/10 pb-8">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-zinc-400">
                  <span className={`px-2.5 py-1 rounded-md font-bold uppercase tracking-wider ${
                    activeBlog?.type === 'non-tech'
                      ? 'bg-rose-500/10 text-rose-700 dark:text-rose-400'
                      : 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400'
                  }`}>
                    {activeBlog?.category}
                  </span>
                  <span>•</span>
                  <span>{activeBlog?.date}</span>
                  <span>•</span>
                  <span>{activeBlog?.readTime}</span>
                </div>

                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                  {activeBlog?.title}
                </h1>
                
                {/* Author Card Row */}
                <div className="pt-2 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-rose-500 flex items-center justify-center text-white font-bold text-sm shadow-xs">
                    KV
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm">Kuldeep Chandra Vishwakarma</div>
                    <div className="text-xs text-slate-500 dark:text-zinc-400">Software Engineer & Founder • Kuldeepvishwakarma.com</div>
                  </div>
                </div>

                {/* Synopsis / Excerpt Callout */}
                <div className="mt-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border-l-4 border-indigo-500 text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed italic">
                  {activeBlog?.description}
                </div>

                {/* Section Quick Jump */}
                {articleHeadings.length > 0 && (
                  <div className="pt-4">
                    <div className="text-xs font-mono text-slate-500 dark:text-zinc-500 mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-indigo-500" />
                      <span>Section Index:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {articleHeadings.map((h, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/5"
                        >
                          #{h}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Article Markdown Body */}
              <div className="text-base sm:text-[17px] text-slate-800 dark:text-zinc-200 leading-[1.8] space-y-6 pt-2">
                {activeBlog?.content.split('\n\n').map((paragraph, pIdx) => {
                  // Headings
                  if (paragraph.startsWith('### ')) {
                    const headingText = paragraph.replace('### ', '');
                    return (
                      <h3 key={pIdx} className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-6 pb-2 border-b border-slate-200/80 dark:border-white/10 flex items-center gap-2">
                        <ChevronRight className="w-5 h-5 text-indigo-500 shrink-0" />
                        <span>{headingText}</span>
                      </h3>
                    );
                  }
                  
                  // Code Blocks
                  if (paragraph.startsWith('```')) {
                    const lines = paragraph.split('\n');
                    const lang = lines[0].replace('```', '') || 'code';
                    const codeLines = lines.slice(1, lines.length - 1).join('\n');
                    const isCopied = copiedCodeIdx === pIdx;

                    return (
                      <div key={pIdx} className="rounded-2xl bg-slate-950 dark:bg-black border border-slate-800 dark:border-white/10 overflow-hidden shadow-xl my-6">
                        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 dark:bg-zinc-900 border-b border-slate-800 dark:border-white/10 text-xs font-mono text-zinc-400">
                          <div className="flex items-center space-x-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                            <span className="uppercase text-[11px] font-semibold text-zinc-300 ml-2">{lang}</span>
                          </div>
                          <button
                            onClick={() => handleCopyCode(codeLines, pIdx)}
                            className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-zinc-200 transition-colors flex items-center space-x-1.5 cursor-pointer text-xs"
                          >
                            {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                            <span>{isCopied ? 'Copied' : 'Copy snippet'}</span>
                          </button>
                        </div>
                        <pre className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-zinc-200 overflow-x-auto whitespace-pre leading-relaxed">
                          <code>{codeLines}</code>
                        </pre>
                      </div>
                    );
                  }

                  // Unordered or Ordered lists
                  if (paragraph.startsWith('* ') || paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                    return (
                      <ul key={pIdx} className="list-disc pl-6 space-y-2 text-slate-700 dark:text-zinc-300">
                        {paragraph.split('\n').map((li, lIdx) => (
                          <li key={lIdx} className="leading-relaxed">
                            {renderFormattedText(li.replace(/^\* |^\d+\.\s|^-\s/, ''))}
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  // Regular Paragraph
                  return (
                    <p key={pIdx} className="text-slate-700 dark:text-zinc-300 leading-relaxed">
                      {renderFormattedText(paragraph)}
                    </p>
                  );
                })}
              </div>

              {/* Author Dispatch Sign-off */}
              <div className="pt-10 border-t border-slate-200/80 dark:border-white/10 space-y-6">
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-rose-500 flex items-center justify-center text-white font-bold text-base shadow-xs shrink-0">
                      KV
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white text-sm">Written by Kuldeep Chandra Vishwakarma</div>
                      <p className="text-xs text-slate-600 dark:text-zinc-400 max-w-md mt-0.5">
                        Software engineer building distributed web applications, deterministic AI agents, and open-source systems.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <a
                      href="https://github.com/IamKady"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-xs font-semibold text-slate-800 dark:text-zinc-200 transition-colors"
                    >
                      GitHub Profile ↗
                    </a>
                  </div>
                </div>

                {/* Up Next Recommendation */}
                {nextBlog && (
                  <div 
                    onClick={() => openArticle(nextBlog.id)}
                    className="p-5 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 dark:bg-indigo-950/20 dark:hover:bg-indigo-950/30 transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                        Read Next Dispatch
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mt-0.5">
                        {nextBlog.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-zinc-400 font-mono mt-1">
                        {nextBlog.category} • {nextBlog.readTime}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-indigo-500 group-hover:translate-x-1.5 transition-transform shrink-0 ml-4" />
                  </div>
                )}
              </div>

            </article>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
