'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  History, 
  Heart, 
  Terminal as TerminalIcon, 
  BookOpen, 
  Eye, 
  Briefcase, 
  GraduationCap, 
  FolderGit2, 
  Trophy,
  Code,
  Shield,
  Layers
} from 'lucide-react';

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  category: 'work' | 'education' | 'projects' | 'achievements';
}

export default function About() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'work' | 'education' | 'projects' | 'achievements'>('all');

  const storySections = [
    {
      id: 'journey',
      title: 'My Journey',
      icon: <History className="w-5 h-5 text-indigo-400" />,
      content: "I am a Computer Science & Engineering graduate who transitioned from writing basic HTML pages to designing automated AI content pipelines and secure microservices. My professional focus centers on building products that bridge complex software engineering with practical user needs, such as StartupWire.in."
    },
    {
      id: 'why-tech',
      title: 'Why I Love Technology',
      icon: <Heart className="w-5 h-5 text-rose-400" />,
      content: "To me, technology is the ultimate leverage. With a keyboard and an internet connection, you can build systems that serve thousands of users, automate boring daily routines, or solve complex security issues. It is the closest thing to magic in the real world."
    },
    {
      id: 'how-started',
      title: 'How I Started Programming',
      icon: <TerminalIcon className="w-5 h-5 text-emerald-400" />,
      content: "It started in college when I wanted to understand how web search engines index databases. I bootstrapped my learning with WordPress and SEO systems, which quickly evolved into building full-stack JavaScript applications (MERN), writing Python automation scripts, and exploring Linux server administration."
    },
    {
      id: 'what-learning',
      title: 'What I\'m Learning',
      icon: <BookOpen className="w-5 h-5 text-amber-400" />,
      content: "Currently diving deep into the security properties of Next.js Server Actions, LLM prompting strategies for deterministic structured outputs, and basic CTF ethical hacking writeups. Striving to merge AI automation with cybersecurity protocols."
    },
    {
      id: 'vision',
      title: 'Future Vision',
      icon: <Eye className="w-5 h-5 text-violet-400" />,
      content: "I plan to continue developing SaaS products, refining AI agent workflows, and exploring tech-founder frameworks. I want to build platforms that empower startup creators with rich news, programmatic insights, and bulletproof security systems."
    }
  ];

  const timelineEvents: TimelineEvent[] = [
    {
      id: 't-1',
      year: '2026',
      title: 'Launched StartupWire (MVP)',
      organization: 'Self-Initiative',
      description: 'Engineered an automated AI news parser crawling global RSS feeds, summarizing with Gemini Flash, and saving to Supabase for programmatic SEO indexing.',
      category: 'projects'
    },
    {
      id: 't-2',
      year: '2026',
      title: 'AI Prompt Studio & Dashboard OS',
      organization: 'Self-Initiative',
      description: 'Designed a dashboard sandbox allowing developers to store, inject variables, and test LLM prompt payloads locally.',
      category: 'projects'
    },
    {
      id: 't-3',
      year: '2025',
      title: 'Software Developer (Freelance)',
      organization: 'Global Clients',
      description: 'Built custom MERN stack applications, configured SEO funnels, optimized WordPress nodes, and set up Dockerized server containers.',
      category: 'work'
    },
    {
      id: 't-4',
      year: '2024',
      title: 'CSE Graduation (B.Tech)',
      organization: 'Technical University',
      description: 'Graduated in Computer Science and Engineering. Developed thesis systems tracking algorithm efficiencies and database query models.',
      category: 'education'
    },
    {
      id: 't-5',
      year: '2023 - 2024',
      title: 'Technical Web Developer & SEO Engineer',
      organization: 'StartupPoint / Saarthi',
      description: 'Refined responsive user interfaces, structured digital content architectures, and conducted core technical audit sweeps for search ranking optimizations.',
      category: 'work'
    },
    {
      id: 't-6',
      year: '2022',
      title: 'First Full-Stack Application Deployment',
      organization: 'College Project',
      description: 'Designed and deployed a responsive inventory catalog system utilizing Express, MongoDB, and React, learning cloud-database bindings.',
      category: 'achievements'
    }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? timelineEvents 
    : timelineEvents.filter(e => e.category === activeFilter);

  const getTimelineIcon = (cat: TimelineEvent['category']) => {
    switch (cat) {
      case 'work':
        return <Briefcase className="w-4 h-4 text-emerald-400" />;
      case 'education':
        return <GraduationCap className="w-4 h-4 text-indigo-400" />;
      case 'projects':
        return <FolderGit2 className="w-4 h-4 text-violet-400" />;
      case 'achievements':
        return <Trophy className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-16 py-6">
      
      {/* Page Title */}
      <div className="space-y-3 text-left">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          About Me
        </h1>
        <p className="text-sm text-zinc-400 font-sans max-w-xl">
          The story behind the code, the roadmap of my skills, and an interactive career console.
        </p>
      </div>

      {/* Narrative Story (Horizontal grid or cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {storySections.map((sec, idx) => (
          <div 
            key={sec.id}
            className={`glass-panel p-6 rounded-xl border-white/10 flex flex-col space-y-3.5 shadow-lg ${
              idx === 0 ? 'md:col-span-2' : ''
            }`}
          >
            <div className="flex items-center space-x-2.5">
              <div className="p-1.5 rounded-md bg-white/5 border border-white/5">
                {sec.icon}
              </div>
              <h2 className="text-sm font-bold tracking-wider uppercase text-white font-sans">
                {sec.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              {sec.content}
            </p>
          </div>
        ))}
      </div>

      {/* Interactive Career Timeline */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/5 pb-4">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans flex items-center">
              <History className="w-5 h-5 text-indigo-400 mr-2" />
              Career Timeline
            </h2>
            <p className="text-xs text-zinc-400 font-sans">
              Milestones, professional roles, and project launches.
            </p>
          </div>

          {/* Timeline Filter Controls */}
          <div className="flex flex-wrap gap-1 bg-white/5 p-1 rounded-lg border border-white/5">
            {(['all', 'work', 'education', 'projects', 'achievements'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold rounded-md transition-all cursor-pointer ${
                  activeFilter === filter 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Event list */}
        <div className="relative border-l border-white/10 pl-6 ml-3 space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((evt) => (
              <motion.div
                key={evt.id}
                layout
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Visual marker dot */}
                <div className="absolute top-1.5 -left-[35px] w-6 h-6 rounded-full glass-panel border-white/10 flex items-center justify-center bg-zinc-950">
                  {getTimelineIcon(evt.category)}
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded border border-white/5">
                    {evt.year} • {evt.category}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white font-sans">{evt.title}</h3>
                    <span className="text-[11px] text-zinc-400 font-sans font-medium">{evt.organization}</span>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed font-sans max-w-2xl">
                    {evt.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredEvents.length === 0 && (
            <div className="text-center py-8 text-zinc-500 font-sans text-xs">
              No milestones found in this category.
            </div>
          )}
        </div>
      </div>

      {/* Interactive Core Capabilities Map */}
      <div className="space-y-6">
        <div className="border-b border-white/5 pb-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans flex items-center">
            <Code className="w-5 h-5 text-emerald-400 mr-2" />
            Capabilities Map
          </h2>
          <p className="text-xs text-zinc-400 font-sans mt-1">
            Visual groupings of technologies, languages, and security architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box 1: Full Stack Core */}
          <div className="glass-panel p-5 rounded-xl border-white/10 space-y-4">
            <div className="flex items-center space-x-2 text-indigo-400 font-semibold font-mono text-xs border-b border-white/5 pb-2">
              <Layers className="w-4 h-4" />
              <span>FULL-STACK JS (MERN)</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Supabase', 'Tailwind CSS'].map((tech) => (
                <span key={tech} className="text-[10px] font-mono px-2 py-1 rounded bg-indigo-500/5 text-indigo-300 border border-indigo-500/10 hover:border-indigo-500/30 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Box 2: AI & Workers */}
          <div className="glass-panel p-5 rounded-xl border-white/10 space-y-4">
            <div className="flex items-center space-x-2 text-emerald-400 font-semibold font-mono text-xs border-b border-white/5 pb-2">
              <TerminalIcon className="w-4 h-4" />
              <span>AI & AUTOMATION</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Gemini API', 'Prompt Engineering', 'Vector Indexing', 'RSS Crawler', 'Scheduled Crons', 'JSON Schemas', 'Vercel Workers'].map((tech) => (
                <span key={tech} className="text-[10px] font-mono px-2 py-1 rounded bg-emerald-500/5 text-emerald-300 border border-emerald-500/10 hover:border-emerald-500/30 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Box 3: Cyber & SysAdmin */}
          <div className="glass-panel p-5 rounded-xl border-white/10 space-y-4">
            <div className="flex items-center space-x-2 text-amber-400 font-semibold font-mono text-xs border-b border-white/5 pb-2">
              <Shield className="w-4 h-4" />
              <span>SECURITY & SYSTEM</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Linux Administration', 'Git Version Control', 'JWT / Session Auth', 'API Rate Limiting', 'SQLi / XSS Mitigation', 'CTF Writeups', 'Docker Containers'].map((tech) => (
                <span key={tech} className="text-[10px] font-mono px-2 py-1 rounded bg-amber-500/5 text-amber-300 border border-amber-500/10 hover:border-amber-500/30 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
