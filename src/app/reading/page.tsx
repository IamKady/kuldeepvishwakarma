'use client';

import React, { useState } from 'react';
import { BookOpen, Star, StarOff, Compass } from 'lucide-react';
import { booksData, Book } from '@/data/db';

export default function ReadingPage() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Reading' | 'Completed' | 'To Read'>('All');

  const filteredBooks = activeFilter === 'All' 
    ? booksData 
    : booksData.filter(b => b.status === activeFilter);

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-12 py-6">
      
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight flex items-center gap-2">
          <BookOpen className="w-8 h-8 text-indigo-400" /> Library tracker
        </h1>
        <p className="text-sm text-zinc-400 font-sans">
          Tracking books covering software architecture design, entrepreneurship, and cybersecurity logs.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-1 bg-white/5 p-1 rounded-xl border border-white/5 max-w-fit">
        {(['All', 'Reading', 'Completed', 'To Read'] as const).map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeFilter === filter 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredBooks.map((book) => (
          <div 
            key={book.id}
            className="glass-panel p-6 rounded-2xl border-white/10 flex flex-col justify-between space-y-4 shadow-xl"
          >
            <div className="space-y-2">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-sm font-bold text-white font-sans">{book.title}</h3>
                  <span className="text-xs text-zinc-500 font-mono mt-0.5 block">By {book.author}</span>
                </div>
                
                <span className={`text-[9px] font-mono px-2 py-0.5 rounded border uppercase flex-shrink-0 ${
                  book.status === 'Completed'
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    : book.status === 'Reading'
                    ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20 animate-pulse'
                    : 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20'
                }`}>
                  {book.status}
                </span>
              </div>

              {/* Progress */}
              <div className="space-y-1.5 pt-1.5">
                <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                  <span>Reading Progress:</span>
                  <span>{book.progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      book.status === 'Completed' ? 'bg-emerald-400' : 'bg-indigo-500'
                    }`} 
                    style={{ width: `${book.progress}%` }}
                  />
                </div>
              </div>

              {/* Book notes */}
              {book.notes && (
                <p className="text-xs text-zinc-400 leading-relaxed font-sans italic border-l border-white/10 pl-2 mt-2">
                  &ldquo;{book.notes}&rdquo;
                </p>
              )}
            </div>

            <div className="flex justify-between items-center text-[10px] border-t border-white/5 pt-3">
              <span className="font-mono text-zinc-500 uppercase tracking-wider">{book.category}</span>
              {book.rating && (
                <div className="flex items-center text-amber-400">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star 
                      key={idx} 
                      className={`w-3.5 h-3.5 ${idx < book.rating! ? 'fill-current text-amber-400' : 'text-zinc-700'}`} 
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
