'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
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
  BookMarked,
  Layers,
  Filter,
  CheckCircle2,
  Flame,
  FileText
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

  const readerContainerRef = useRef<HTMLDivElement>(null);

  // Handle reading progress calculation inside article view
  const handleScroll = () => {
    if (readerContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = readerContainerRef.current;
      const totalScroll = scrollHeight - clientHeight;
      if (totalScroll > 0) {
        const currentProgress = (scrollTop / totalScroll) * 100;
        setReadingProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    }
  };

  useEffect(() => {
    setReadingProgress(0);
  }, [readingBlogId]);

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
          className="text-indigo-600 dark:text-indigo-400 font-semibold underline hover:text-indigo-700 dark:hover:text-indigo-300 inline-flex items-center gap-0.5"
        >
          {match[1]} ↗
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
    'Cybersecurity', 
    'Architecture', 
    'System Design', 
    'Linux', 
    'Automation', 
    'Open Source', 
    'Career'
  ];

  const nonTechCategories = [
    'All',
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

  // Compute stats
  const techBlogs = blogsData.filter(b => (b.type || 'tech') === 'tech');
  const nonTechBlogs = blogsData.filter(b => b.type === 'non-tech');
  const totalReadTimeMinutes = blogsData.reduce((acc, b) => {
    const mins = parseInt(b.readTime) || 5;
    return acc + mins;
  }, 0);

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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 py-8 relative">
      
      {/* Decorative Background Ambient Glow */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-rose-500/10 dark:bg-rose-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <AnimatePresence mode="wait">
        {!readingBlogId ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-10"
          >
            {/* Header Hero Section */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4 border-b border-slate-200/80 dark:border-white/10">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 dark:bg-indigo-500/15 text-xs text-indigo-700 dark:text-indigo-300 font-mono tracking-wider font-semibold uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>TECHNICAL & CREATIVE JOURNAL</span>
                </div>
                
                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  {activeTab === 'tech' ? (
                    <span>Engineering & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">Tech Journal</span></span>
                  ) : (
                    <span>Creative & <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 dark:from-rose-400 dark:to-pink-400">Non-Tech Corner</span></span>
                  )}
                </h1>
                
                <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-sans leading-relaxed">
                  {activeTab === 'tech' 
                    ? 'In-depth software engineering guides, distributed systems, Next.js optimization, cybersecurity, and practical AI implementations.'
                    : 'Personal reflections, creative prose, book reviews, lifestyle notes, and non-technical essays.'}
                </p>
              </div>

              {/* Action Buttons & RSS */}
              <div className="flex items-center gap-3 self-start lg:self-auto">
                <a 
                  href="/rss.xml" 
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl border border-rose-500/30 dark:border-rose-500/20 bg-rose-500/5 hover:bg-rose-500/10 text-xs text-rose-700 dark:text-rose-400 font-semibold transition-all shadow-xs cursor-pointer group"
                >
                  <Rss className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" />
                  <span>Subscribe RSS</span>
                </a>
              </div>
            </div>

            {/* Quick Metrics & Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="glass-panel p-4 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-black/30 backdrop-blur-md">
                <div className="flex items-center space-x-2 text-slate-500 dark:text-zinc-400 text-xs font-mono mb-1">
                  <FileText className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Total Articles</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-mono">
                  {blogsData.length}
                </div>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-black/30 backdrop-blur-md">
                <div className="flex items-center space-x-2 text-slate-500 dark:text-zinc-400 text-xs font-mono mb-1">
                  <BookMarked className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Tech Tutorials</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400 font-mono">
                  {techBlogs.length}
                </div>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-black/30 backdrop-blur-md">
                <div className="flex items-center space-x-2 text-slate-500 dark:text-zinc-400 text-xs font-mono mb-1">
                  <Flame className="w-3.5 h-3.5 text-rose-500" />
                  <span>Creative Essays</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400 font-mono">
                  {nonTechBlogs.length}
                </div>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-black/30 backdrop-blur-md">
                <div className="flex items-center space-x-2 text-slate-500 dark:text-zinc-400 text-xs font-mono mb-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Est. Read Time</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-mono">
                  {totalReadTimeMinutes} <span className="text-xs text-slate-500 font-normal">mins</span>
                </div>
              </div>
            </div>

            {/* Segmented Switcher & Search Bar Bar */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              
              {/* Animated Tab Switcher */}
              <div className="flex p-1 bg-slate-200/70 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 rounded-2xl max-w-md relative">
                <button
                  onClick={() => {
                    setActiveTab('tech');
                    setSelectedCategory('All');
                  }}
                  className={`relative flex-1 py-2.5 px-5 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer z-10 ${
                    activeTab === 'tech'
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {activeTab === 'tech' && (
                    <motion.div
                      layoutId="activeTabBadge"
                      className="absolute inset-0 bg-white dark:bg-indigo-600 rounded-xl shadow-md -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span>💻 Tech Publications</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                    activeTab === 'tech'
                      ? 'bg-indigo-500/15 dark:bg-white/20 text-indigo-700 dark:text-white'
                      : 'bg-slate-300/60 dark:bg-white/10 text-slate-700 dark:text-zinc-400'
                  }`}>
                    {techBlogs.length}
                  </span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('non-tech');
                    setSelectedCategory('All');
                  }}
                  className={`relative flex-1 py-2.5 px-5 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer z-10 ${
                    activeTab === 'non-tech'
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {activeTab === 'non-tech' && (
                    <motion.div
                      layoutId="activeTabBadge"
                      className="absolute inset-0 bg-white dark:bg-rose-600 rounded-xl shadow-md -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span>🎨 Non-Tech Corner</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                    activeTab === 'non-tech'
                      ? 'bg-rose-500/15 dark:bg-white/20 text-rose-700 dark:text-white'
                      : 'bg-slate-300/60 dark:bg-white/10 text-slate-700 dark:text-zinc-400'
                  }`}>
                    {nonTechBlogs.length}
                  </span>
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-72 lg:w-80">
                <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 dark:text-zinc-500" />
                <input
                  type="text"
                  placeholder={`Search ${activeTab === 'tech' ? 'tutorials...' : 'creations...'}`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-9 py-2.5 text-xs bg-white/80 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-300/80 dark:border-white/10 rounded-xl outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-all font-sans shadow-xs placeholder:text-slate-400 dark:placeholder:text-zinc-500"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none pt-1">
              <div className="text-xs font-mono text-slate-400 dark:text-zinc-500 flex items-center gap-1 pr-2 shrink-0">
                <Filter className="w-3.5 h-3.5" />
                <span>Categories:</span>
              </div>
              {currentCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs rounded-xl border font-medium transition-all cursor-pointer shrink-0 ${
                    selectedCategory === cat
                      ? activeTab === 'non-tech'
                        ? 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/40 shadow-xs font-semibold'
                        : 'bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/40 shadow-xs font-semibold'
                      : 'bg-white/60 dark:bg-white/5 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 border-slate-200 dark:border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Featured Article Spotlight (shown when browsing default all list) */}
            {featuredBlog && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative overflow-hidden rounded-3xl border border-indigo-500/30 dark:border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 via-white/80 to-purple-500/5 dark:from-indigo-950/40 dark:via-black/50 dark:to-purple-950/30 p-6 sm:p-8 shadow-xl cursor-pointer group hover:border-indigo-500/50 transition-all"
                onClick={() => setReadingBlogId(featuredBlog.id)}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-indigo-600 text-white shadow-xs flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> FEATURED PUBLICATION
                      </span>
                      <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 font-semibold px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                        {featuredBlog.category}
                      </span>
                    </div>

                    <div className="flex items-center space-x-3 text-xs font-mono text-slate-500 dark:text-zinc-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                        {featuredBlog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-indigo-500" />
                        {featuredBlog.readTime}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors font-sans tracking-tight">
                      {featuredBlog.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-sans leading-relaxed line-clamp-3 max-w-4xl">
                      {featuredBlog.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs font-mono text-slate-500 dark:text-zinc-400">
                      <span>Author: <strong className="text-slate-800 dark:text-zinc-200">Kuldeep Chandra Vishwakarma</strong></span>
                    </div>

                    <div className="inline-flex items-center space-x-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform font-sans">
                      <span>Read Featured Story</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Main Articles Grid (2 columns on md+) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regularBlogs.map((blog) => (
                <motion.div 
                  key={blog.id} 
                  id={blog.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setReadingBlogId(blog.id)}
                  className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 hover:border-indigo-500/40 dark:hover:border-indigo-500/30 transition-all cursor-pointer space-y-4 group bg-white/70 dark:bg-black/40 shadow-lg hover:shadow-xl flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Accent Top Border Line on Hover */}
                  <div className={`absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r ${
                    blog.type === 'non-tech' ? 'from-rose-500 to-pink-500' : 'from-indigo-500 to-violet-500'
                  }`} />

                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${
                        blog.type === 'non-tech'
                          ? 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20'
                          : 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20'
                      }`}>
                        {blog.category}
                      </span>
                      
                      <div className="flex items-center space-x-3 text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                        <span className="flex items-center">
                          <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400 dark:text-zinc-500" />
                          {blog.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3.5 h-3.5 mr-1 text-slate-400 dark:text-zinc-500" />
                          {blog.readTime}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors font-sans leading-snug">
                        {blog.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-sans line-clamp-3">
                        {blog.description}
                      </p>
                    </div>
                  </div>

                  <div className={`pt-4 border-t border-slate-100 dark:border-white/5 text-xs font-semibold flex items-center justify-between font-sans ${
                    blog.type === 'non-tech' ? 'text-rose-600 dark:text-rose-400' : 'text-indigo-600 dark:text-indigo-400'
                  }`}>
                    <span>Read Article</span>
                    <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-bold">
                      →
                    </span>
                  </div>
                </motion.div>
              ))}

              {filteredBlogs.length === 0 && (
                <div className="col-span-full text-center py-20 bg-white/40 dark:bg-white/5 rounded-3xl border border-dashed border-slate-300 dark:border-white/10 space-y-3">
                  <Search className="w-8 h-8 text-slate-400 dark:text-zinc-500 mx-auto" />
                  <p className="text-sm font-semibold text-slate-700 dark:text-zinc-300">
                    No articles found matching "{searchQuery}"
                  </p>
                  <p className="text-xs text-slate-500 dark:text-zinc-500">
                    Try refining your search query or selecting a different category filter.
                  </p>
                  <button 
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                    className="mt-2 px-4 py-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold hover:bg-indigo-500/20 transition-all cursor-pointer"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>

          </motion.div>
        ) : (
          /* Reader View */
          <motion.div
            key="reader"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            ref={readerContainerRef}
            onScroll={handleScroll}
            className="space-y-8 bg-white/90 dark:bg-zinc-950/80 p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl max-h-[85vh] overflow-y-auto scrollbar-thin"
          >
            {/* Reading Progress Top Bar */}
            <div className="sticky top-0 left-0 right-0 -mx-6 -mt-6 sm:-mx-10 sm:-mt-10 mb-6 bg-slate-900/90 dark:bg-black/90 border-b border-slate-800 dark:border-white/10 p-3 sm:p-4 z-30 flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setReadingBlogId(null)}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-all flex items-center space-x-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Back to Journal</span>
                </button>

                <div className="hidden md:flex items-center space-x-2 text-xs text-zinc-300 font-mono border-l border-white/10 pl-3">
                  <span className="truncate max-w-xs">{activeBlog?.title}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => activeBlog && handleCopyLink(activeBlog.id)}
                  className="px-3 py-1.5 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold hover:bg-indigo-500/30 transition-all flex items-center space-x-1.5 cursor-pointer"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
                </button>

                <button 
                  onClick={() => setReadingBlogId(null)}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Progress Line */}
              <div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 transition-all duration-150"
                style={{ width: `${readingProgress}%` }}
              />
            </div>

            {/* Article Header */}
            <div className="space-y-4 border-b border-slate-200 dark:border-white/10 pb-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] font-mono text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10 px-3 py-1 rounded-full border border-rose-200 dark:border-rose-500/20 flex items-center gap-1 font-semibold uppercase">
                  <Hash className="w-3 h-3" />
                  {activeBlog?.category}
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Published: {activeBlog?.date}
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-indigo-500" />
                  {activeBlog?.readTime}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white font-sans tracking-tight leading-tight">
                {activeBlog?.title}
              </h1>
              
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-sans leading-relaxed italic border-l-4 border-indigo-500/60 pl-4 py-1 bg-indigo-500/5 rounded-r-xl">
                {activeBlog?.description}
              </p>

              {/* Table of Contents Section Nav */}
              {articleHeadings.length > 0 && (
                <div className="pt-2">
                  <div className="text-xs font-mono text-slate-500 dark:text-zinc-400 mb-2 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Quick Section Jump:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {articleHeadings.map((h, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300"
                      >
                        #{h}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Article Content Renderer */}
            <div className="font-sans text-sm sm:text-base text-slate-800 dark:text-zinc-200 leading-relaxed space-y-6 max-w-none pt-2">
              {activeBlog?.content.split('\n\n').map((paragraph, pIdx) => {
                if (paragraph.startsWith('### ')) {
                  const headingText = paragraph.replace('### ', '');
                  return (
                    <h3 key={pIdx} className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-sans border-b border-slate-200 dark:border-white/10 pb-2 pt-4 text-indigo-700 dark:text-indigo-400 flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-indigo-500" />
                      <span>{headingText}</span>
                    </h3>
                  );
                }
                
                if (paragraph.startsWith('```')) {
                  const lines = paragraph.split('\n');
                  const lang = lines[0].replace('```', '') || 'code';
                  const codeLines = lines.slice(1, lines.length - 1).join('\n');
                  const isCopied = copiedCodeIdx === pIdx;

                  return (
                    <div key={pIdx} className="rounded-2xl bg-slate-950 dark:bg-black border border-slate-800 dark:border-white/10 overflow-hidden shadow-xl my-4">
                      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 dark:bg-zinc-900 border-b border-slate-800 dark:border-white/10 text-xs font-mono text-zinc-400">
                        <span className="uppercase">{lang}</span>
                        <button
                          onClick={() => handleCopyCode(codeLines, pIdx)}
                          className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-zinc-200 transition-colors flex items-center space-x-1 cursor-pointer"
                        >
                          {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{isCopied ? 'Copied' : 'Copy Code'}</span>
                        </button>
                      </div>
                      <pre className="p-4 font-mono text-xs sm:text-sm text-zinc-200 overflow-x-auto whitespace-pre leading-relaxed">
                        <code>{codeLines}</code>
                      </pre>
                    </div>
                  );
                }

                if (paragraph.startsWith('* ') || paragraph.startsWith('1. ')) {
                  return (
                    <ul key={pIdx} className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-700 dark:text-zinc-300 font-sans">
                      {paragraph.split('\n').map((li, lIdx) => (
                        <li key={lIdx}>
                          {renderFormattedText(li.replace(/^\* |^\d+\.\s/, ''))}
                        </li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p key={pIdx} className="text-slate-700 dark:text-zinc-300 leading-relaxed">
                    {renderFormattedText(paragraph)}
                  </p>
                );
              })}
            </div>

            {/* Author Footer & Verification Badge */}
            <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-zinc-400">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-rose-500 flex items-center justify-center text-white font-bold font-sans">
                  KV
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white font-sans text-sm">Kuldeep Chandra Vishwakarma</div>
                  <div>Software Engineer & Founder • Kuldeepvishwakarma.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>VERIFIED TUTORIAL</span>
              </div>
            </div>

            {/* Next Recommended Article */}
            {nextBlog && (
              <div 
                onClick={() => setReadingBlogId(nextBlog.id)}
                className="mt-6 p-6 rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 dark:from-indigo-950/30 dark:to-purple-950/20 hover:border-indigo-500/50 transition-all cursor-pointer flex items-center justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase">Up Next</span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {nextBlog.title}
                  </h4>
                </div>
                <ChevronRight className="w-5 h-5 text-indigo-500 group-hover:translate-x-1 transition-transform shrink-0" />
              </div>
            )}

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
