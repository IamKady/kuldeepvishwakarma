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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [readingBlogId, setReadingBlogId] = useState<string | null>(null);

  const categories = [
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
    'Career', 
    'Books', 
    'Engineering', 
    'Startup Building', 
    'Deep Dives', 
    'Tutorials'
  ];

  const filteredBlogs = blogsData.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Exact category match or All
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const activeBlog = blogsData.find(b => b.id === readingBlogId);

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-12 py-6">
      
      <AnimatePresence mode="wait">
        {!readingBlogId ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-12"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                  Engineering Publications
                </h1>
                <p className="text-sm text-zinc-400 font-sans max-w-md">
                  Deep dives into systems architecture, rate-limiting, programmatic SEO, and AI agents workflows.
                </p>
              </div>

              <a 
                href="/rss.xml" 
                className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-rose-500/20 bg-rose-500/5 text-xs text-rose-400 font-medium hover:bg-rose-500/10 cursor-pointer self-start sm:self-auto"
              >
                <Rss className="w-3.5 h-3.5" />
                <span>RSS Feed</span>
              </a>
            </div>

            {/* Filters Row */}
            <div className="flex flex-col gap-6 border-b border-white/5 pb-6">
              
              {/* Search input */}
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search articles indexing..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 text-xs bg-white/5 border border-white/10 rounded-lg outline-none text-white focus:border-indigo-500 transition-colors w-full font-sans"
                />
              </div>

              {/* Categories Scroll Grid */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Filter by Category Taxonomy</span>
                <div className="flex flex-wrap gap-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-[9px] font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                        selectedCategory === cat 
                          ? 'bg-indigo-600 border-indigo-400 text-white shadow-md' 
                          : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5 border-white/5 bg-zinc-950/40'
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
                  className="glass-panel p-6 rounded-2xl border-white/10 space-y-4 hover:border-white/20 transition-all cursor-pointer shadow-lg group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[9px] font-mono text-rose-400 uppercase bg-rose-500/5 px-2.5 py-0.8 rounded border border-rose-500/10 flex items-center gap-1">
                      <Hash className="w-3 h-3" />
                      {blog.category}
                    </span>
                    
                    <div className="flex items-center space-x-3 text-[10px] font-mono text-zinc-500">
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
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-rose-400 transition-colors font-sans">
                      {blog.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans line-clamp-2">
                      {blog.description}
                    </p>
                  </div>

                  <div className="pt-2 text-xs font-semibold text-rose-400 flex items-center space-x-1 font-sans">
                    <span>Inspect Publication</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              ))}

              {filteredBlogs.length === 0 && (
                <div className="text-center py-16 text-zinc-500 font-sans text-xs">
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
            className="space-y-8 bg-zinc-950/40 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl relative"
          >
            {/* Back to list */}
            <button
              onClick={() => setReadingBlogId(null)}
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Library</span>
            </button>

            {/* Header info */}
            <div className="space-y-4 border-b border-white/5 pb-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[9px] font-mono text-rose-400 bg-rose-500/5 px-2.5 py-0.8 rounded border border-rose-500/10 flex items-center gap-1">
                  <Hash className="w-3 h-3" />
                  {activeBlog?.category}
                </span>
                <span className="text-[10px] font-mono text-zinc-500">
                  Published: {activeBlog?.date} • {activeBlog?.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white font-sans tracking-tight leading-tight">
                {activeBlog?.title}
              </h2>
              
              <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed italic border-l-2 border-rose-500/50 pl-3">
                {activeBlog?.description}
              </p>
            </div>

            {/* Markdown styled content (Handles headings, paragraphs, and lists) */}
            <div className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed space-y-6 max-w-none pt-2">
              {activeBlog?.content.split('\n\n').map((paragraph, pIdx) => {
                // If it starts with markdown heading
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={pIdx} className="text-base font-bold text-white font-sans border-b border-white/5 pb-1.5 pt-2 uppercase tracking-wider font-mono text-indigo-400">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                
                // If it's a code block
                if (paragraph.startsWith('```')) {
                  const lines = paragraph.split('\n');
                  const codeLines = lines.slice(1, lines.length - 1).join('\n');
                  return (
                    <pre key={pIdx} className="p-4 rounded-xl bg-black border border-white/5 font-mono text-[10px] sm:text-xs text-zinc-300 overflow-x-auto whitespace-pre leading-relaxed leading-tight">
                      <code>{codeLines}</code>
                    </pre>
                  );
                }

                // If it's a bulleted list
                if (paragraph.startsWith('* ') || paragraph.startsWith('1. ')) {
                  return (
                    <ul key={pIdx} className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-zinc-400 font-sans">
                      {paragraph.split('\n').map((li, lIdx) => (
                        <li key={lIdx}>
                          {li.replace(/^\* |^\d+\.\s/, '')}
                        </li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p key={pIdx} className="text-zinc-300 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
              
              <p className="pt-4 border-t border-white/5 text-[11px] text-zinc-500 font-mono flex items-center justify-between">
                <span>EOF (End of File) • System index: {activeBlog?.id}.log</span>
                <span className="text-emerald-400 font-bold">SYS_ACTIVE</span>
              </p>
            </div>

            {/* Close button */}
            <button 
              onClick={() => setReadingBlogId(null)}
              className="absolute top-6 right-6 p-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-white/5 border border-white/5 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
