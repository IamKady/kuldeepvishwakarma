'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onSearchOpen: () => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Navbar({ onSearchOpen, theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for shadow/border effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Startups', path: '/startups' },
    { name: 'Blog', path: '/blog' },
    { name: 'AI Lab', path: '/ai-lab' },
    { name: 'Cybersecurity', path: '/cybersecurity' },
    { name: 'Resources', path: '/resources' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-background/80 border-b border-card-border backdrop-blur-md shadow-lg shadow-black/5' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-xl font-bold font-sans tracking-tight text-white dark:text-white light:text-zinc-900 flex items-center">
              KCV
              <span className="w-1.5 h-1.5 rounded-full bg-ai ml-1 animate-pulse" />
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  href={link.path}
                  className={`relative px-3 py-1.5 text-xs font-medium tracking-wide font-sans rounded-md transition-colors ${
                    isActive 
                      ? 'text-white' 
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span 
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-ai to-startup rounded"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions (Search, Theme, Hamburger) */}
          <div className="flex items-center space-x-2">
            
            {/* Command Palette Button */}
            <button 
              onClick={onSearchOpen}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 text-xs text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md border border-white/10 glass-panel cursor-pointer transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline font-sans">Search</span>
              <kbd className="hidden sm:inline-flex items-center text-[9px] bg-white/10 px-1 py-0.2 rounded border border-white/5 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-white/5 border border-white/10 glass-panel cursor-pointer transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* Hamburger Trigger (Lg and below) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-1.5 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-white/5 border border-white/10 glass-panel cursor-pointer transition-colors"
              aria-label="Open main menu"
            >
              {isOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden bg-background/95 backdrop-blur-lg border-b border-card-border overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive 
                        ? 'bg-white/10 text-white font-semibold' 
                        : 'text-zinc-400 hover:bg-white/5 hover:text-zinc-200'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
