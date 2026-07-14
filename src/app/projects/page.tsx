'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderCode, 
  Github, 
  ExternalLink, 
  ArrowUpRight, 
  Check, 
  X,
  FileSearch,
  Cpu,
  TrendingUp,
  Lightbulb,
  Shield,
  Search,
  Target,
  Database
} from 'lucide-react';
import { projectsData, Project } from '@/data/db';

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [caseStudyTab, setCaseStudyTab] = useState<'story' | 'engineering' | 'seo' | 'lessons'>('story');

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'Active':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Beta':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
      case 'In Development':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      default:
        return 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20';
    }
  };

  const selectedProject = projectsData.find(p => p.id === selectedProjectId);

  return (
    <div className="max-w-5xl mx-auto px-4 space-y-12 py-6">
      
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Engineering Case Studies
        </h1>
        <p className="text-sm text-zinc-400 font-sans max-w-xl">
          Deep structural reviews of systems I built, explaining business problems, architecture flowcharts, database schema choices, and trade-offs.
        </p>
      </div>

      {/* Projects List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <div 
            key={project.id}
            className="glass-panel p-6 rounded-2xl border-white/10 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group"
          >
            {/* Hover glow animation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="space-y-4 relative z-10">
              {/* Logo & Title */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{project.logo}</span>
                  <div>
                    <h2 className="text-lg font-bold text-white font-sans">{project.title}</h2>
                    <span className={`text-[9px] px-2 py-0.5 rounded-full border font-mono ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="flex space-x-1.5">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-md hover:bg-white/5 border border-white/0 hover:border-white/5 text-zinc-400 hover:text-white transition-all"
                      title="View source code repository"
                    >
                      <Github className="w-4.5 h-4.5" />
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-md hover:bg-white/5 border border-white/0 hover:border-white/5 text-zinc-400 hover:text-white transition-all"
                      title="Visit Live Application"
                    >
                      <ExternalLink className="w-4.5 h-4.5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 font-semibold font-sans">
                {project.tagline}
              </p>
              
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                {project.summary}
              </p>

              {/* Technology tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.map(tech => (
                  <span key={tech} className="text-[9px] font-mono px-2 py-0.8 rounded bg-white/5 text-zinc-300 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Case Study Trigger */}
            <div className="pt-6 relative z-10 border-t border-white/5">
              <button
                onClick={() => {
                  setSelectedProjectId(project.id);
                  setCaseStudyTab('story');
                }}
                className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 text-xs font-semibold tracking-wide transition-all hover:border-indigo-500/20 cursor-pointer flex items-center justify-center space-x-1.5"
              >
                <span>Inspect System Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {selectedProjectId && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Modal Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProjectId(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden border rounded-2xl glass-panel shadow-2xl border-white/10 flex flex-col bg-zinc-950/90"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between p-6 border-b border-white/5">
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <span className="text-4xl">{selectedProject.logo}</span>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-white font-sans">
                        {selectedProject.title}
                      </h2>
                      <span className={`text-[9px] px-2 py-0.5 rounded-full border font-mono ${getStatusColor(selectedProject.status)}`}>
                        {selectedProject.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-400 font-sans mt-1">
                    {selectedProject.tagline}
                  </p>
                  
                  {selectedProject.metrics && (
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 bg-zinc-900/40 px-3 py-1.5 rounded-lg border border-white/5 text-[10px] font-mono text-zinc-400 mt-3 max-w-fit">
                      <span className="text-zinc-500 font-bold uppercase tracking-wider text-[8px]">Telemetry Metrics:</span>
                      <div className="flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        <span>Perf: <strong className="text-emerald-400">{selectedProject.metrics.performance}</strong></span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>A11y: <strong className="text-emerald-400">{selectedProject.metrics.accessibility}</strong></span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>Best: <strong className="text-emerald-400">{selectedProject.metrics.bestPractices}</strong></span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>SEO: <strong className="text-emerald-400">{selectedProject.metrics.seo}</strong></span>
                      </div>
                      <div className="hidden sm:flex items-center space-x-1 border-l border-white/10 pl-3">
                        <span>Load time: <strong className="text-indigo-400">{selectedProject.metrics.loadTimeMs}ms</strong></span>
                      </div>
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => setSelectedProjectId(null)}
                  className="p-2 rounded-md text-zinc-400 hover:text-white hover:bg-white/5 border border-white/15 cursor-pointer transition-colors"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Case Study Navigation Tabs */}
              <div className="flex flex-wrap border-b border-white/5 px-6 bg-black/40">
                {[
                  { id: 'story', label: 'Story & Target', icon: <FileSearch className="w-3.5 h-3.5" /> },
                  { id: 'engineering', label: 'Architecture & Security', icon: <Cpu className="w-3.5 h-3.5" /> },
                  { id: 'seo', label: 'SEO & Performance', icon: <TrendingUp className="w-3.5 h-3.5" /> },
                  { id: 'lessons', label: 'Lessons & Trade-offs', icon: <Lightbulb className="w-3.5 h-3.5" /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setCaseStudyTab(tab.id as any)}
                    className={`flex items-center space-x-1.5 px-4 py-3.5 text-xs font-semibold transition-colors relative cursor-pointer ${
                      caseStudyTab === tab.id 
                        ? 'text-indigo-400 font-bold' 
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                    {caseStudyTab === tab.id && (
                      <motion.span 
                        layoutId="caseStudyActiveTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Modal Body (Scrollable content) */}
              <div className="overflow-y-auto p-6 font-sans text-sm text-zinc-300 leading-relaxed space-y-6 flex-grow bg-black/20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={caseStudyTab}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-6"
                  >
                    {/* Tab 1: Story & Target */}
                    {caseStudyTab === 'story' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <div className="space-y-1">
                            <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-wider block">Overview</span>
                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{selectedProject.caseStudy.overview}</p>
                          </div>

                          <div className="space-y-1">
                            <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-wider block">Business Problem</span>
                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{selectedProject.caseStudy.problem}</p>
                          </div>
                        </div>

                        <div className="space-y-4 p-5 rounded-xl border border-white/5 bg-white/[0.01]">
                          <div className="space-y-1.5">
                            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block flex items-center gap-1.5"><Target className="w-3.5 h-3.5" /> Target Users</span>
                            <p className="text-xs text-zinc-400 leading-relaxed">{selectedProject.caseStudy.targetUsers}</p>
                          </div>
                          
                          <div className="space-y-1.5 border-t border-white/5 pt-3">
                            <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block">Timeline Scope</span>
                            <p className="text-xs text-zinc-400 leading-relaxed">{selectedProject.caseStudy.timeline}</p>
                          </div>

                          <div className="space-y-1.5 border-t border-white/5 pt-3">
                            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Competitor Research Summary</span>
                            <p className="text-xs text-zinc-500 leading-relaxed">{selectedProject.caseStudy.research}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tab 2: Engineering & Security */}
                    {caseStudyTab === 'engineering' && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="space-y-1">
                              <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-wider block flex items-center gap-1.5"><Database className="w-3.5 h-3.5" /> Database specs</span>
                              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{selectedProject.caseStudy.databaseSpecs}</p>
                            </div>

                            <div className="space-y-1 border-t border-white/5 pt-3">
                              <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-wider block">Authentication & Sessions</span>
                              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{selectedProject.caseStudy.authenticationFlow}</p>
                            </div>

                            <div className="space-y-1 border-t border-white/5 pt-3">
                              <span className="text-[10px] font-mono text-rose-400 font-bold uppercase tracking-wider block flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> Security Safeguards</span>
                              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{selectedProject.caseStudy.securityProtocols}</p>
                            </div>
                          </div>

                          {/* Architecture Diagram */}
                          <div className="p-4 rounded-xl border border-white/5 bg-black/60 font-mono text-[10px] text-zinc-300 overflow-x-auto">
                            <span className="text-[9px] text-zinc-500 uppercase font-bold tracking-widest block mb-2">// System Architecture Blueprint</span>
                            <pre className="leading-tight">{selectedProject.caseStudy.architectureDiagram}</pre>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/5 pt-4">
                          <div className="space-y-1.5">
                            <span className="text-[10px] font-mono text-zinc-500 uppercase block font-bold">System details</span>
                            <p className="text-xs text-zinc-400 leading-relaxed">{selectedProject.caseStudy.architecture}</p>
                          </div>
                          <div className="space-y-1.5">
                            <span className="text-[10px] font-mono text-zinc-500 uppercase block font-bold">Development & Building logs</span>
                            <p className="text-xs text-zinc-400 leading-relaxed">{selectedProject.caseStudy.development}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tab 3: SEO & Performance */}
                    {caseStudyTab === 'seo' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <div className="space-y-1">
                            <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block">Programmatic SEO Engine</span>
                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{selectedProject.caseStudy.seoOptimization}</p>
                          </div>

                          <div className="space-y-1 border-t border-white/5 pt-3">
                            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">Performance optimization tuning</span>
                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{selectedProject.caseStudy.performanceTuning}</p>
                          </div>
                        </div>

                        <div className="p-5 rounded-xl border border-white/5 bg-zinc-950/60 flex flex-col justify-center space-y-4">
                          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block font-bold">// Lighthouse Target Standard</span>
                          <div className="space-y-3 text-xs">
                            <div className="flex justify-between items-center border-b border-white/5 pb-1.5">
                              <span>SEO Schema Compliance</span>
                              <span className="text-emerald-400 font-bold font-mono">100/100 (Structured JSON-LD)</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-1.5">
                              <span>Core Web Vitals FCP</span>
                              <span className="text-emerald-400 font-bold font-mono">&lt; 0.8s load path</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-1.5">
                              <span>Accessibility compliance</span>
                              <span className="text-emerald-400 font-bold font-mono">W3C WCAG compliant</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Clean routing slugs</span>
                              <span className="text-emerald-400 font-bold font-mono">Dynamic XML indexed</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tab 4: Lessons & Trade-offs */}
                    {caseStudyTab === 'lessons' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <div className="space-y-1">
                            <span className="text-[10px] font-mono text-rose-400 font-bold uppercase tracking-wider block">Challenges Overcome</span>
                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{selectedProject.caseStudy.challenges}</p>
                          </div>

                          <div className="space-y-1 border-t border-white/5 pt-3">
                            <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block">Technical Trade-offs made</span>
                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{selectedProject.caseStudy.tradeOffs}</p>
                          </div>
                        </div>

                        <div className="p-5 rounded-xl border border-white/5 bg-zinc-950/60 space-y-4 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest block font-bold mb-2">Lessons Learned</span>
                            <p className="text-xs text-zinc-400 leading-relaxed">{selectedProject.caseStudy.lessons}</p>
                          </div>
                          
                          <div className="border-t border-white/5 pt-3.5">
                            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-bold mb-1.5">Future growth roadmap</span>
                            <p className="text-xs text-zinc-400 leading-relaxed">{selectedProject.caseStudy.futureRoadmap}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between p-6 border-t border-white/5 bg-black/40">
                <div className="flex space-x-3">
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white/5 border border-white/10 text-xs text-white rounded-lg flex items-center hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <Github className="w-3.5 h-3.5 mr-2" /> Code Repository
                    </a>
                  )}
                  {selectedProject.live && (
                    <a 
                      href={selectedProject.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-indigo-600 text-xs text-white rounded-lg flex items-center hover:bg-indigo-500 transition-colors cursor-pointer shadow-lg shadow-indigo-600/10"
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-2" /> Launch Live App
                    </a>
                  )}
                </div>
                
                <span className="text-[10px] text-zinc-500 font-mono">
                  Press ESC or click backdrop to close console view
                </span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
