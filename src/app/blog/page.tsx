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
  Rss
} from 'lucide-react';
import { blogsData } from '@/data/db';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [readingBlogId, setReadingBlogId] = useState<string | null>(null);

  const categories = [
    'All', 
    'Artificial Intelligence', 
    'Web Development', 
    'Cybersecurity', 
    'Startups', 
    'Career', 
    'Productivity', 
    'Entrepreneurship'
  ];

  const filteredBlogs = blogsData.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.content.toLowerCase().includes(searchQuery.toLowerCase());
    
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
                  Technology Writer
                </h1>
                <p className="text-sm text-zinc-400 font-sans max-w-md">
                  Practical guides and developer thoughts regarding systems engineering, security, and AI integrations.
                </p>
              </div>

              {/* RSS Feed Simulator Link */}
              <a 
                href="/rss.xml" 
                className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-rose-500/20 bg-rose-500/5 text-xs text-rose-400 font-medium hover:bg-rose-500/10 cursor-pointer self-start sm:self-auto"
              >
                <Rss className="w-3.5 h-3.5" />
                <span>RSS Feed</span>
              </a>
            </div>

            {/* Filters Row */}
            <div className="flex flex-col sm:flex-row gap-4 border-b border-white/5 pb-6">
              
              {/* Search input */}
              <div className="relative flex-grow max-w-sm">
                <Search className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 text-xs bg-white/5 border border-white/10 rounded-lg outline-none text-white focus:border-indigo-500 transition-colors w-full font-sans"
                />
              </div>

              {/* Categories list */}
              <div className="flex flex-wrap gap-1.5 items-center">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      selectedCategory === cat 
                        ? 'bg-indigo-600 text-white shadow-md' 
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5 border border-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 gap-6">
              {filteredBlogs.map((blog) => (
                <div 
                  key={blog.id} 
                  id={blog.id}
                  onClick={() => setReadingBlogId(blog.id)}
                  className="glass-panel p-6 rounded-xl border-white/10 space-y-4 hover:border-white/20 transition-all cursor-pointer shadow-lg group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-rose-400 uppercase bg-rose-500/5 px-2 py-0.5 rounded border border-rose-500/10">
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

                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-rose-400 transition-colors font-sans">
                      {blog.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans line-clamp-2">
                      {blog.description}
                    </p>
                  </div>

                  <div className="pt-2 text-xs font-semibold text-rose-400 flex items-center space-x-1 font-sans">
                    <span>Read Article</span>
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
            className="space-y-8 bg-zinc-950/40 p-6 sm:p-8 rounded-xl border border-white/10 shadow-2xl relative"
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
                <span className="text-[10px] font-mono text-rose-400 bg-rose-500/5 px-2 py-0.5 rounded border border-rose-500/10">
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

            {/* Markdown styled content */}
            <div className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed space-y-6 max-w-none pt-2">
              <p>{activeBlog?.content}</p>
              <p className="pt-4 border-t border-white/5 text-[11px] text-zinc-500 font-mono">
                EOF (End of File) • System index: {activeBlog?.id}.log
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
