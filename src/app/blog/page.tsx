'use client';

import React, { useState } from 'react';
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
  CornerDownLeft,
  ChevronRight
} from 'lucide-react';
import { blogsData } from '@/data/db';

export default function Blog() {
  const [activeTab, setActiveTab] = useState<'tech' | 'non-tech'>('tech');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [readingBlogId, setReadingBlogId] = useState<string | null>(null);

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
    // Tab match
    const blogType = blog.type || 'tech';
    const matchesTab = blogType === activeTab;

    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category match or All
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;

    return matchesTab && matchesSearch && matchesCategory;
  });

  const activeBlog = blogsData.find(b => b.id === readingBlogId);

  const techCount = blogsData.filter(b => (b.type || 'tech') === 'tech').length;
  const nonTechCount = blogsData.filter(b => b.type === 'non-tech').length;

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-10 py-6">
      
      <AnimatePresence mode="wait">
        {!readingBlogId ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                  {activeTab === 'tech' ? 'Engineering & Tech Journal' : 'Creative & Non-Tech Corner'}
                </h1>
                <p className="text-sm text-slate-600 dark:text-zinc-400 font-sans max-w-md">
                  {activeTab === 'tech' 
                    ? 'Deep dives into systems architecture, rate-limiting, programmatic SEO, and AI agents workflows.'
                    : 'Personal reflections on art, hobbies, literature, book reviews, and creative prose.'}
                </p>
              </div>

              <a 
                href="/rss.xml" 
                className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-rose-500/30 dark:border-rose-500/20 bg-rose-50 dark:bg-rose-500/5 text-xs text-rose-700 dark:text-rose-400 font-medium hover:bg-rose-100 dark:hover:bg-rose-500/10 cursor-pointer self-start sm:self-auto transition-colors"
              >
                <Rss className="w-3.5 h-3.5" />
                <span>RSS Feed</span>
              </a>
            </div>

            {/* Dual Main Section Tabs (Tech vs Non-Tech) */}
            <div className="flex p-1 bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-2xl max-w-md">
              <button
                onClick={() => {
                  setActiveTab('tech');
                  setSelectedCategory('All');
                }}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'tech'
                    ? 'bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-md'
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>💻 Tech Publications</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-indigo-500/10 dark:bg-white/20 text-indigo-700 dark:text-white font-mono">
                  {techCount}
                </span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('non-tech');
                  setSelectedCategory('All');
                }}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'non-tech'
                    ? 'bg-white dark:bg-rose-600 text-slate-900 dark:text-white shadow-md'
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>🎨 Non-Tech Corner</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-rose-500/10 dark:bg-white/20 text-rose-700 dark:text-white font-mono">
                  {nonTechCount}
                </span>
              </button>
            </div>

            {/* Filters Row */}
            <div className="flex flex-col gap-5 border-b border-slate-200 dark:border-white/5 pb-6">
              
              {/* Search input */}
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400 dark:text-zinc-500" />
                <input
                  type="text"
                  placeholder={`Search ${activeTab === 'tech' ? 'technical articles' : 'creative writings'}...`}
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 text-xs bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg outline-none text-slate-900 dark:text-white focus:border-indigo-500 transition-colors w-full font-sans shadow-xs dark:shadow-none"
                />
              </div>

              {/* Categories Scroll Grid */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500 uppercase tracking-wider block">Filter by Category</span>
                <div className="flex flex-wrap gap-1.5">
                  {currentCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-[9px] font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                        selectedCategory === cat 
                          ? activeTab === 'tech'
                            ? 'bg-indigo-600 border-indigo-500 text-white shadow-md'
                            : 'bg-rose-600 border-rose-500 text-white shadow-md'
                          : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 hover:bg-slate-100 dark:hover:bg-white/5 border-slate-200 dark:border-white/5 bg-white dark:bg-zinc-950/40'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 gap-6">
              {filteredBlogs.map((blog) => (
                <div 
                  key={blog.id} 
                  id={blog.id}
                  onClick={() => setReadingBlogId(blog.id)}
                  className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-4 hover:border-slate-300 dark:hover:border-white/20 transition-all cursor-pointer shadow-lg group relative overflow-hidden bg-white/80 dark:bg-black/40"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${blog.type === 'non-tech' ? 'from-rose-500/10' : 'from-indigo-500/10'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className={`text-[9px] font-mono uppercase px-2.5 py-0.8 rounded border flex items-center gap-1 ${
                      blog.type === 'non-tech'
                        ? 'text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/5 border-rose-200 dark:border-rose-500/10'
                        : 'text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/5 border-indigo-200 dark:border-indigo-500/10'
                    }`}>
                      <Hash className="w-3 h-3" />
                      {blog.category}
                    </span>
                    
                    <div className="flex items-center space-x-3 text-[10px] font-mono text-slate-500 dark:text-zinc-500">
                      <span className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {blog.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1" />
                        {blog.readTime}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className={`text-base sm:text-lg font-bold text-slate-900 dark:text-white transition-colors font-sans ${
                      blog.type === 'non-tech'
                        ? 'group-hover:text-rose-600 dark:group-hover:text-rose-400'
                        : 'group-hover:text-indigo-600 dark:group-hover:text-indigo-400'
                    }`}>
                      {blog.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-sans line-clamp-2">
                      {blog.description}
                    </p>
                  </div>

                  <div className={`pt-2 text-xs font-semibold flex items-center space-x-1 font-sans ${
                    blog.type === 'non-tech' ? 'text-rose-600 dark:text-rose-400' : 'text-indigo-600 dark:text-indigo-400'
                  }`}>
                    <span>Read Article</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              ))}

              {filteredBlogs.length === 0 && (
                <div className="text-center py-16 text-slate-500 dark:text-zinc-500 font-sans text-xs">
                  No matching log files detected in writing indexes.
                </div>
              )}
            </div>

          </motion.div>
        ) : (
          <motion.div
            key="reader"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="space-y-8 bg-white dark:bg-zinc-950/40 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl relative"
          >
            {/* Back to list */}
            <button
              onClick={() => setReadingBlogId(null)}
              className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Library</span>
            </button>

            {/* Header info */}
            <div className="space-y-4 border-b border-slate-200 dark:border-white/5 pb-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[9px] font-mono text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/5 px-2.5 py-0.8 rounded border border-rose-200 dark:border-rose-500/10 flex items-center gap-1">
                  <Hash className="w-3 h-3" />
                  {activeBlog?.category}
                </span>
                <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500">
                  Published: {activeBlog?.date} • {activeBlog?.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white font-sans tracking-tight leading-tight">
                {activeBlog?.title}
              </h2>
              
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 font-sans leading-relaxed italic border-l-2 border-rose-500/50 pl-3">
                {activeBlog?.description}
              </p>
            </div>

            {/* Markdown styled content (Handles headings, paragraphs, and lists) */}
            <div className="font-sans text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed space-y-6 max-w-none pt-2">
              {activeBlog?.content.split('\n\n').map((paragraph, pIdx) => {
                // If it starts with markdown heading
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={pIdx} className="text-base font-bold text-slate-900 dark:text-white font-sans border-b border-slate-200 dark:border-white/5 pb-1.5 pt-2 uppercase tracking-wider font-mono text-indigo-700 dark:text-indigo-400">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                
                // If it's a code block
                if (paragraph.startsWith('```')) {
                  const lines = paragraph.split('\n');
                  const codeLines = lines.slice(1, lines.length - 1).join('\n');
                  return (
                    <pre key={pIdx} className="p-4 rounded-xl bg-slate-900 dark:bg-black border border-slate-800 dark:border-white/5 font-mono text-[10px] sm:text-xs text-zinc-200 dark:text-zinc-300 overflow-x-auto whitespace-pre leading-relaxed leading-tight">
                      <code>{codeLines}</code>
                    </pre>
                  );
                }

                // If it's a bulleted list
                if (paragraph.startsWith('* ') || paragraph.startsWith('1. ')) {
                  return (
                    <ul key={pIdx} className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 font-sans">
                      {paragraph.split('\n').map((li, lIdx) => (
                        <li key={lIdx}>
                          {li.replace(/^\* |^\d+\.\s/, '')}
                        </li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p key={pIdx} className="text-slate-700 dark:text-zinc-300 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
              
              <p className="pt-4 border-t border-slate-200 dark:border-white/5 text-[11px] text-slate-500 dark:text-zinc-500 font-mono flex items-center justify-between">
                <span>EOF (End of File) • System index: {activeBlog?.id}.log</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">SYS_ACTIVE</span>
              </p>
            </div>

            {/* Close button */}
            <button 
              onClick={() => setReadingBlogId(null)}
              className="absolute top-6 right-6 p-1.5 rounded-md text-slate-400 dark:text-zinc-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200 dark:border-white/5 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
