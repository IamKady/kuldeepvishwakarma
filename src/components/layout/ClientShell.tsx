'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CommandPalette from '../search/CommandPalette';

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sync theme with DOM and localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const initialTheme = savedTheme || 'dark';
    setTheme(initialTheme);
    
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);

    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  };

  // Listen to Cmd+K or Ctrl+K keybind
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300 relative overflow-x-hidden">
      
      {/* Mesh/Grid Background Details */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-ai/10 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-startup/5 blur-[120px] pointer-events-none z-0" />
      
      {/* Navigation */}
      <Navbar 
        onSearchOpen={() => setIsSearchOpen(true)} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      {/* Main Pages */}
      <main className="flex-grow pt-24 pb-16 relative z-10">
        {children}
      </main>

      {/* Command Palette Spotlight Search */}
      <CommandPalette 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
