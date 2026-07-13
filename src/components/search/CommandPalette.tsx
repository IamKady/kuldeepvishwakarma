'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Sparkles, 
  Rocket, 
  Terminal, 
  FileText, 
  Link as LinkIcon, 
  FolderCode, 
  CornerDownLeft, 
  X 
} from 'lucide-react';
import { searchIndex, SearchableItem } from '@/data/db';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchableItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Search filter effect
  useEffect(() => {
    if (!query.trim()) {
      // Show default suggestions (first 5 items)
      setResults(searchIndex.slice(0, 5));
      setSelectedIndex(0);
      return;
    }

    const filtered = searchIndex.filter(item => {
      const q = query.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.content.toLowerCase().includes(q)
      );
    });

    setResults(filtered.slice(0, 8)); // limit to 8 results for clean display
    setSelectedIndex(0);
  }, [query]);

  // Global keybind for CMD+K or Ctrl+K to toggle (controlled by layout)
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle arrows and select
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % Math.max(results.length, 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + results.length) % Math.max(results.length, 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (results[selectedIndex]) {
          handleSelect(results[selectedIndex]);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  const handleSelect = (item: SearchableItem) => {
    router.push(item.url);
    onClose();
    setQuery('');
  };

  const getIcon = (type: SearchableItem['type']) => {
    switch (type) {
      case 'project':
        return <FolderCode className="w-4 h-4 text-violet-400" />;
      case 'startup':
        return <Rocket className="w-4 h-4 text-emerald-400" />;
      case 'ai-prompt':
        return <Sparkles className="w-4 h-4 text-indigo-400" />;
      case 'cyber-log':
        return <Terminal className="w-4 h-4 text-amber-400" />;
      case 'blog':
        return <FileText className="w-4 h-4 text-rose-400" />;
      default:
        return <LinkIcon className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
          {/* Overlay background */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Dialog Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl mx-4 overflow-hidden border rounded-xl glass-panel shadow-2xl border-white/10"
          >
            {/* Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/5">
              <Search className="w-5 h-5 mr-3 text-zinc-400" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search projects, startups, blogs, cyber logs, and tools..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="w-full bg-transparent border-0 outline-none text-zinc-100 placeholder-zinc-500 font-sans text-base"
              />
              <button 
                onClick={onClose}
                className="p-1 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results Section */}
            <div className="max-h-[360px] overflow-y-auto p-2">
              {results.length > 0 ? (
                <div>
                  <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500 font-sans">
                    {query.trim() ? 'Search Results' : 'Suggested Sections'}
                  </div>
                  <ul className="mt-1 space-y-1">
                    {results.map((item, idx) => {
                      const isSelected = idx === selectedIndex;
                      return (
                        <li key={item.id}>
                          <button
                            onClick={() => handleSelect(item)}
                            onMouseEnter={() => setSelectedIndex(idx)}
                            className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between transition-colors font-sans ${
                              isSelected 
                                ? 'bg-white/10 text-white' 
                                : 'text-zinc-300 hover:bg-white/5 hover:text-zinc-100'
                            }`}
                          >
                            <div className="flex items-center space-x-3 overflow-hidden">
                              <div className="flex-shrink-0 p-1.5 rounded-md bg-white/5 border border-white/5">
                                {getIcon(item.type)}
                              </div>
                              <div className="truncate">
                                <span className="block text-sm font-medium">{item.title}</span>
                                <span className="block text-xs text-zinc-400 truncate mt-0.5">
                                  {item.description}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2 flex-shrink-0 ml-4">
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-zinc-400 font-medium border border-white/5">
                                {item.category}
                              </span>
                              {isSelected && (
                                <span className="text-[10px] text-zinc-500 flex items-center font-mono bg-white/5 px-1 py-0.5 rounded border border-white/5">
                                  Go <CornerDownLeft className="w-2.5 h-2.5 ml-1" />
                                </span>
                              )}
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <div className="py-8 text-center text-zinc-500 font-sans text-sm">
                  No results found for <span className="text-zinc-300">"{query}"</span>
                </div>
              )}
            </div>

            {/* Footer Help */}
            <div className="flex justify-between items-center px-4 py-2 bg-black/40 border-t border-white/5 text-[10px] text-zinc-500 font-sans">
              <div className="flex items-center space-x-4">
                <span>
                  <kbd className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded">↑↓</kbd> to navigate
                </span>
                <span>
                  <kbd className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded">Enter</kbd> to select
                </span>
                <span>
                  <kbd className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded">ESC</kbd> to close
                </span>
              </div>
              <div className="flex items-center text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                Index Online (2026.07.13)
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
