'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  Sun, 
  Moon, 
  ChevronDown, 
  Rocket, 
  Sparkles, 
  Layers, 
  GitBranch, 
  Cpu, 
  Shield, 
  Activity, 
  Terminal, 
  FileText, 
  BookOpenCheck, 
  BookOpen, 
  Target 
} from 'lucide-react';

interface NavbarProps {
  onSearchOpen: () => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

interface NavSubItem {
  name: string;
  path: string;
  description: string;
  icon: React.ReactNode;
}

interface NavCategory {
  title: string;
  id: string;
  items: NavSubItem[];
}

export default function Navbar({ onSearchOpen, theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Monitor scroll for shadow/border effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setIsOpen(false);
  }, [pathname]);

  const handleMouseEnter = (catId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(catId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const navCategories: NavCategory[] = [
    {
      title: 'Work & Startups',
      id: 'work',
      items: [
        { name: 'Projects', path: '/projects', description: 'Full-stack apps, SaaS tools & code showcase', icon: <Rocket className="w-4 h-4 text-indigo-500" /> },
        { name: 'Startups', path: '/startups', description: 'StartupWire.in & Bookperia.com founder logs', icon: <Sparkles className="w-4 h-4 text-emerald-500" /> },
        { name: 'Case Studies', path: '/case-studies', description: 'Technical postmortems & system breakdowns', icon: <Layers className="w-4 h-4 text-amber-500" /> },
        { name: 'Open Source', path: '/open-source', description: 'Public libraries & GitHub contributions', icon: <GitBranch className="w-4 h-4 text-rose-500" /> },
      ],
    },
    {
      title: 'Labs & Security',
      id: 'labs',
      items: [
        { name: 'AI Lab', path: '/ai-lab', description: 'AI prompts, LLM agents & experimental tools', icon: <Cpu className="w-4 h-4 text-indigo-400" /> },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'CTF logs, security audits & ethical hacking', icon: <Shield className="w-4 h-4 text-amber-400" /> },
        { name: 'Architecture', path: '/architecture', description: 'Data flows, database specs & diagrams', icon: <Activity className="w-4 h-4 text-emerald-400" /> },
        { name: 'Developer Notes', path: '/developer-notes', description: 'Code snippets & technical reference logs', icon: <Terminal className="w-4 h-4 text-sky-400" /> },
      ],
    },
    {
      title: 'Content & Journal',
      id: 'journal',
      items: [
        { name: 'Blog', path: '/blog', description: 'Long-form technical articles & tutorials', icon: <FileText className="w-4 h-4 text-rose-400" /> },
        { name: 'Learning Journal', path: '/learning-journal', description: 'Daily MSc CS study notes & insights', icon: <BookOpenCheck className="w-4 h-4 text-emerald-400" /> },
        { name: 'Resources', path: '/resources', description: 'Curated developer tools, stack & books', icon: <BookOpen className="w-4 h-4 text-indigo-400" /> },
        { name: 'Roadmap & Goals', path: '/roadmap', description: 'Public engineering milestones & focus', icon: <Target className="w-4 h-4 text-amber-400" /> },
      ],
    },
  ];

  const directLinks = [
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-background/85 border-b border-card-border backdrop-blur-md shadow-lg shadow-black/5' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="bg-black dark:bg-black/60 p-0.5 rounded-lg border border-slate-300 dark:border-white/10 group-hover:scale-105 transition-transform shadow-xs flex-shrink-0 flex items-center justify-center">
              <Image 
                src="/logo.png" 
                alt="Kuldeep Chandra Vishwakarma Logo" 
                width={32}
                height={32}
                priority
                className="w-8 h-8 rounded-md object-contain" 
              />
            </div>
            <span className="text-xl font-bold font-sans tracking-tight text-slate-900 dark:text-white flex items-center">
              KCV
              <span className="w-1.5 h-1.5 rounded-full bg-ai ml-1 animate-pulse" />
            </span>
          </Link>

          {/* Desktop Nav Links (Grouped Mega-Menu) */}
          <nav className="hidden lg:flex items-center space-x-1 font-sans">
            <Link 
              href="/"
              className={`px-3 py-1.5 text-xs font-medium tracking-wide rounded-md transition-colors ${
                pathname === '/' 
                  ? 'text-slate-900 dark:text-white font-semibold' 
                  : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-slate-200/60 dark:hover:bg-white/5'
              }`}
            >
              Home
            </Link>

            {navCategories.map((cat) => {
              const isCategoryActive = cat.items.some((item) => pathname === item.path);
              const isOpenMenu = activeDropdown === cat.id;

              return (
                <div 
                  key={cat.id} 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(cat.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button 
                    onClick={() => setActiveDropdown(isOpenMenu ? null : cat.id)}
                    className={`flex items-center space-x-1 px-3 py-1.5 text-xs font-medium tracking-wide rounded-md transition-colors cursor-pointer ${
                      isCategoryActive || isOpenMenu
                        ? 'text-slate-900 dark:text-white font-semibold bg-slate-200/60 dark:bg-white/5' 
                        : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-slate-200/60 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{cat.title}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpenMenu ? 'rotate-180 text-indigo-500' : 'text-slate-400'}`} />
                  </button>

                  {/* Dropdown Menu Card */}
                  <AnimatePresence>
                    {isOpenMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full pt-2 w-72 z-50"
                      >
                        <div className="p-2.5 rounded-xl glass-panel bg-white/95 dark:bg-slate-950/90 border border-slate-200 dark:border-white/10 shadow-2xl backdrop-blur-xl space-y-1">
                          {cat.items.map((subItem) => {
                            const isSubActive = pathname === subItem.path;
                            return (
                              <Link
                                key={subItem.name}
                                href={subItem.path}
                                onClick={() => setActiveDropdown(null)}
                                className={`flex items-start space-x-3 p-2.5 rounded-lg transition-all group ${
                                  isSubActive 
                                    ? 'bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20' 
                                    : 'hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent'
                                }`}
                              >
                                <div className="p-1.5 rounded-md bg-slate-100 dark:bg-white/5 group-hover:scale-110 transition-transform">
                                  {subItem.icon}
                                </div>
                                <div className="space-y-0.5">
                                  <div className="text-xs font-bold text-slate-900 dark:text-zinc-100 flex items-center">
                                    {subItem.name}
                                    {isSubActive && <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500" />}
                                  </div>
                                  <p className="text-[10px] text-slate-500 dark:text-zinc-400 leading-tight">
                                    {subItem.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {directLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  href={link.path}
                  className={`px-3 py-1.5 text-xs font-medium tracking-wide rounded-md transition-colors ${
                    isActive 
                      ? 'text-slate-900 dark:text-white font-semibold' 
                      : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-slate-200/60 dark:hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Actions (Search, Theme, Hamburger) */}
          <div className="flex items-center space-x-2">
            
            {/* Command Palette Button */}
            <button 
              onClick={onSearchOpen}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 text-xs text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-slate-200/60 dark:hover:bg-white/5 rounded-md border border-slate-200 dark:border-white/10 glass-panel cursor-pointer transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline font-sans">Search</span>
              <kbd className="hidden sm:inline-flex items-center text-[9px] bg-slate-200/80 dark:bg-white/10 px-1 py-0.2 rounded border border-slate-300 dark:border-white/5 font-mono text-slate-600 dark:text-zinc-400">
                ⌘K
              </kbd>
            </button>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-1.5 rounded-md text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-slate-200/60 dark:hover:bg-white/5 border border-slate-200 dark:border-white/10 glass-panel cursor-pointer transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* Hamburger Trigger (Lg and below) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-1.5 rounded-md text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-slate-200/60 dark:hover:bg-white/5 border border-slate-200 dark:border-white/10 glass-panel cursor-pointer transition-colors"
              aria-label="Open main menu"
            >
              {isOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer menu (Accordion Style) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white/95 dark:bg-background/95 backdrop-blur-lg border-b border-slate-200 dark:border-card-border overflow-y-auto max-h-[85vh]"
          >
            <div className="px-4 pt-3 pb-6 space-y-3 font-sans">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === '/' 
                    ? 'bg-slate-200/80 dark:bg-white/10 text-slate-900 dark:text-white font-semibold' 
                    : 'text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-zinc-200'
                }`}
              >
                Home
              </Link>

              {navCategories.map((cat) => {
                const isExpanded = expandedMobileCategory === cat.id;
                return (
                  <div key={cat.id} className="space-y-1">
                    <button
                      onClick={() => setExpandedMobileCategory(isExpanded ? null : cat.id)}
                      className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 dark:text-zinc-200 bg-slate-100/60 dark:bg-white/5"
                    >
                      <span>{cat.title}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-indigo-500' : ''}`} />
                    </button>

                    {isExpanded && (
                      <div className="pl-4 space-y-1 pt-1">
                        {cat.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.path}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center space-x-2.5 px-3 py-2 rounded-md text-xs text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                          >
                            {subItem.icon}
                            <span className="font-medium">{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pt-2 border-t border-slate-200 dark:border-white/10 space-y-1">
                {directLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-zinc-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

