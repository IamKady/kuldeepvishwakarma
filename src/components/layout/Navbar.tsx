'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onSearchOpen: () => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const navLinks = [
  { name: 'Projects', path: '/projects' },
  { name: 'Writing', path: '/blog' },
  { name: 'Engineering', path: '/engineering' },
  { name: 'About', path: '/about' },
  { name: 'Now', path: '/now' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar({ onSearchOpen, theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'py-3.5 bg-background/90 border-b border-card-border backdrop-blur-md'
          : 'py-5 bg-background/70 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between">
          {/* KCV Brand Mark */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            <span className="font-bold tracking-tighter text-lg">KCV</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 transition-transform group-hover:scale-125" />
          </Link>

          {/* Minimal Desktop Navigation */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.path ||
                (link.path !== '/' && pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 font-medium'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Utility Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={onSearchOpen}
              aria-label="Search site"
              className="inline-flex items-center gap-2 px-2.5 py-1.5 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-md border border-card-border bg-card-bg transition-colors cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline-flex items-center text-[10px] px-1.5 py-0.5 rounded bg-card-inner border border-card-border font-mono text-zinc-500 dark:text-zinc-400">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 border border-card-border bg-card-bg transition-colors cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="md:hidden p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 border border-card-border bg-card-bg transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Mobile Navigation */}
      {isOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden border-t border-card-border bg-background/95 backdrop-blur-md px-5 py-4 space-y-1"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-sm transition-colors ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium'
                    : 'text-zinc-700 dark:text-zinc-300 hover:bg-card-inner'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
