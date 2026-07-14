'use client';

import React, { useState } from 'react';
import { 
  Download, 
  Printer, 
  Mail, 
  Linkedin, 
  Github, 
  Globe, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Trophy, 
  Code,
  Award,
  Phone,
  FileText,
  Sparkles,
  GitBranch,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Resume() {
  const [viewMode, setViewMode] = useState<'digital' | 'pdf'>('digital');

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#818cf8', '#34d399', '#fbbf24', '#fb7185']
    });
    window.print();
  };

  const skillsGroup = [
    { title: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'C++', 'SQL', 'HTML5', 'CSS3'] },
    { title: 'Frameworks / Libs', items: ['React.js', 'Next.js (App Router)', 'Node.js', 'Express', 'Tailwind CSS'] },
    { title: 'Databases & Cloud', items: ['PostgreSQL', 'pgvector', 'MongoDB', 'Supabase', 'Docker', 'Vercel', 'AWS (Basic)'] },
    { title: 'Specializations', items: ['AI Agent Integration', 'Gemini API models', 'Programmatic SEO', 'API Security (JWT/CSP)', 'Linux Terminal Shell'] }
  ];

  const isPdf = viewMode === 'pdf';

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-10 py-6 print:py-0 print:px-0">
      
      {/* PDF Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 bg-zinc-950/70 p-4 rounded-xl border border-white/10 print:hidden backdrop-blur-md">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-rose-500/10 rounded border border-rose-500/20">
            <FileText className="w-5 h-5 text-rose-500" />
          </div>
          <div>
            <h1 className="text-xs font-bold text-white font-mono uppercase tracking-wider flex items-center gap-1.5">
              resume_kuldeep_vishwakarma.pdf <span className="text-[9px] text-zinc-500 normal-case">(A4 Render)</span>
            </h1>
            <p className="text-[10px] text-zinc-500 font-mono mt-0.5">
              Size: ~135 KB | Ver: 1.4.8 | Systems Active
            </p>
          </div>
        </div>
        
        {/* Toggle between Web dark mode and A4 white sheet preview */}
        <div className="flex items-center bg-black/40 p-1 rounded-lg border border-white/5 self-center">
          <button
            onClick={() => setViewMode('digital')}
            className={`px-3 py-1.5 rounded text-[10px] font-mono font-bold tracking-wider transition-all cursor-pointer ${
              !isPdf
                ? 'bg-indigo-600 text-white shadow'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Digital View
          </button>
          <button
            onClick={() => setViewMode('pdf')}
            className={`px-3 py-1.5 rounded text-[10px] font-mono font-bold tracking-wider transition-all cursor-pointer ${
              isPdf
                ? 'bg-indigo-600 text-white shadow'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            A4 Print View
          </button>
        </div>

        <button
          onClick={triggerConfetti}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Print / Save to PDF</span>
        </button>
      </div>

      {/* Main Resume Sheet */}
      <div className={`p-8 sm:p-12 rounded-xl border transition-all duration-300 space-y-8 ${
        isPdf
          ? 'bg-white text-zinc-800 border-zinc-300 shadow-2xl font-sans'
          : 'bg-black/60 text-zinc-300 border-white/10 shadow-2xl font-sans'
      } print:p-0 print:border-0 print:bg-white print:text-black print:shadow-none`}>
        
        {/* Name / Contact Header */}
        <div className={`border-b pb-6 flex flex-col md:flex-row justify-between items-start gap-4 ${
          isPdf ? 'border-zinc-300' : 'border-white/10'
        } print:border-zinc-300`}>
          <div className="space-y-1">
            <h2 className={`text-3xl font-black font-sans tracking-tight leading-none ${
              isPdf ? 'text-zinc-900' : 'text-white'
            } print:text-zinc-900`}>
              Kuldeep Chandra Vishwakarma
            </h2>
            <p className={`text-xs sm:text-sm font-bold uppercase tracking-wider font-mono ${
              isPdf ? 'text-indigo-700' : 'text-indigo-400'
            } print:text-indigo-600`}>
              Software Engineer • AI Builder • Startup Founder
            </p>
            <div className={`flex items-center space-x-1.5 text-xs font-mono pt-1 ${
              isPdf ? 'text-zinc-600' : 'text-zinc-500'
            } print:text-zinc-600`}>
              <MapPin className="w-3.5 h-3.5" />
              <span>Uttar Pradesh, India (GMT +5:30)</span>
            </div>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono ${
            isPdf ? 'text-zinc-700' : 'text-zinc-400'
          } print:text-zinc-700`}>
            <a href="mailto:kuldeepvishwakarma3803@gmail.com" className={`flex items-center space-x-1.5 ${
              isPdf ? 'hover:text-indigo-700 text-zinc-700' : 'hover:text-white text-zinc-400'
            } print:hover:text-black`}>
              <Mail className="w-3.5 h-3.5" />
              <span>kuldeepvishwakarma3803@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/iamkady/" target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-1.5 ${
              isPdf ? 'hover:text-indigo-700 text-zinc-700' : 'hover:text-white text-zinc-400'
            } print:hover:text-black`}>
              <Linkedin className="w-3.5 h-3.5" />
              <span>linkedin.com/in/iamkady</span>
            </a>
            <a href="https://github.com/IamKady" target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-1.5 ${
              isPdf ? 'hover:text-indigo-700 text-zinc-700' : 'hover:text-white text-zinc-400'
            } print:hover:text-black`}>
              <Github className="w-3.5 h-3.5" />
              <span>github.com/IamKady</span>
            </a>
            <a href="https://kuldeepvishwakarma.com" className={`flex items-center space-x-1.5 ${
              isPdf ? 'hover:text-indigo-700 text-zinc-700' : 'hover:text-white text-zinc-400'
            } print:hover:text-black`}>
              <Globe className="w-3.5 h-3.5" />
              <span>kuldeepvishwakarma.com</span>
            </a>
            <a href="tel:+918303929309" className={`flex items-center space-x-1.5 ${
              isPdf ? 'hover:text-indigo-700 text-zinc-700' : 'hover:text-white text-zinc-400'
            } print:hover:text-black`}>
              <Phone className="w-3.5 h-3.5" />
              <span>+91 8303929309</span>
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-2">
          <h3 className={`text-xs font-bold uppercase tracking-wider font-mono border-b pb-1.5 flex items-center ${
            isPdf ? 'text-zinc-950 border-zinc-200' : 'text-white border-white/5'
          } print:text-zinc-900 print:border-zinc-200`}>
            <Code className={`w-4 h-4 mr-2 ${isPdf ? 'text-indigo-700' : 'text-indigo-400'} print:text-indigo-600`} />
            Executive Summary
          </h3>
          <p className={`text-xs sm:text-sm leading-relaxed font-sans ${
            isPdf ? 'text-zinc-800' : 'text-zinc-400'
          } print:text-zinc-700`}>
            Innovative Computer Science graduate and software engineer with expertise designing responsive MERN & Next.js web applications, building background crawlers, and integrating artificial intelligence engines. Hands-on experience developing StartupWire.in, programmatically summarizing content, optimizing for Google crawlers, and handling server operations securely. Lays strong computational baselines combining structured academic research with indie product launches.
          </p>
        </div>

        {/* Experience Section */}
        <div className="space-y-4">
          <h3 className={`text-xs font-bold uppercase tracking-wider font-mono border-b pb-1.5 flex items-center ${
            isPdf ? 'text-zinc-950 border-zinc-200' : 'text-white border-white/5'
          } print:text-zinc-900 print:border-zinc-200`}>
            <Briefcase className={`w-4 h-4 mr-2 ${isPdf ? 'text-emerald-700' : 'text-emerald-400'} print:text-emerald-600`} />
            Professional Experience
          </h3>
          
          <div className="space-y-5">
            {/* StartupWire */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-start text-xs sm:text-sm font-sans">
                <div>
                  <span className={`font-bold ${isPdf ? 'text-zinc-950' : 'text-white'} print:text-zinc-900`}>Startup Founder & Lead Engineer</span>
                  <span className={isPdf ? 'text-zinc-600' : 'text-zinc-400 print:text-zinc-600'}> — StartupWire.in</span>
                </div>
                <span className={`font-mono text-xs ${isPdf ? 'text-zinc-600' : 'text-zinc-500'} print:text-zinc-600`}>2025 - Present</span>
              </div>
              <ul className={`list-disc pl-5 text-xs space-y-1.5 font-sans ${
                isPdf ? 'text-zinc-800' : 'text-zinc-400'
              } print:text-zinc-700`}>
                <li>Engineered an autonomous AI news aggregator crawling 40+ verified RSS XML nodes every 4 hours, filtering noise and clickbait.</li>
                <li>Implemented pgvector cosine similarity distance queries in Supabase PostgreSQL, filtering duplicate articles with 85% confidence.</li>
                <li>Optimized Next.js edge caching revalidation schedules and programmatic sitemaps, achieving 100/100 Lighthouse performance and SEO scores.</li>
              </ul>
            </div>

            {/* Freelance */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-start text-xs sm:text-sm font-sans">
                <div>
                  <span className={`font-bold ${isPdf ? 'text-zinc-950' : 'text-white'} print:text-zinc-900`}>Software Developer (Freelance)</span>
                  <span className={isPdf ? 'text-zinc-600' : 'text-zinc-400 print:text-zinc-600'}> — Self Employed</span>
                </div>
                <span className={`font-mono text-xs ${isPdf ? 'text-zinc-600' : 'text-zinc-500'} print:text-zinc-600`}>2024 - Present</span>
              </div>
              <ul className={`list-disc pl-5 text-xs space-y-1.5 font-sans ${
                isPdf ? 'text-zinc-800' : 'text-zinc-400'
              } print:text-zinc-700`}>
                <li>Designed full-stack platforms leveraging MongoDB, Express, React, and Next.js, raising clients core load speeds by 35%.</li>
                <li>Created server automation and scraper scripts utilizing Python and Node cron workers, streamlining database inputs.</li>
                <li>Secured APIs from standard exploitation tactics (XSS, SQLi) using Zod schema controls and secure HTTP-only JWT credentials.</li>
              </ul>
            </div>

            {/* Saarthi */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-start text-xs sm:text-sm font-sans">
                <div>
                  <span className={`font-bold ${isPdf ? 'text-zinc-950' : 'text-white'} print:text-zinc-900`}>Technical Web Developer & SEO Engineer</span>
                  <span className={isPdf ? 'text-zinc-600' : 'text-zinc-400 print:text-zinc-600'}> — StartupPoint & Saarthi</span>
                </div>
                <span className={`font-mono text-xs ${isPdf ? 'text-zinc-600' : 'text-zinc-500'} print:text-zinc-600`}>2023 - 2024</span>
              </div>
              <ul className={`list-disc pl-5 text-xs space-y-1.5 font-sans ${
                isPdf ? 'text-zinc-800' : 'text-zinc-400'
              } print:text-zinc-700`}>
                <li>Collaborated on building responsive front-end landing components using HTML/CSS, JavaScript, and WordPress nodes.</li>
                <li>Conducted complete technical search engine optimization sweeps, rectifying sitemap hierarchies and increasing organic keyword indexing visibility.</li>
                <li>Collaborated with design teams to translate Figma design elements into modular layout interfaces.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Selected Products & Projects */}
        <div className="space-y-4">
          <h3 className={`text-xs font-bold uppercase tracking-wider font-mono border-b pb-1.5 flex items-center ${
            isPdf ? 'text-zinc-950 border-zinc-200' : 'text-white border-white/5'
          } print:text-zinc-900 print:border-zinc-200`}>
            <Trophy className={`w-4 h-4 mr-2 ${isPdf ? 'text-indigo-700' : 'text-indigo-400'} print:text-indigo-600`} />
            Selected Products & Systems Built
          </h3>
          <div className="space-y-4 text-xs font-sans">
            <div>
              <span className={`font-bold block ${isPdf ? 'text-zinc-900' : 'text-white'} print:text-zinc-900`}>StartupWire — Autonomous AI Tech News Aggregator</span>
              <p className={isPdf ? 'text-zinc-700' : 'text-zinc-400 print:text-zinc-700'}>
                Dual-layer system consisting of a Next.js App Router edge cached frontend and a NodeJS background daemon cron scheduler analyzing articles via Gemini 1.5 Flash.
              </p>
            </div>
            <div>
              <span className={`font-bold block ${isPdf ? 'text-zinc-900' : 'text-white'} print:text-zinc-900`}>AI Prompt Studio — Local Prompt Engineering Sandbox</span>
              <p className={isPdf ? 'text-zinc-700' : 'text-zinc-400 print:text-zinc-700'}>
                Secure, offline-first client application using React, Vite, and LocalStorage variables parsing hooks for template versioning.
              </p>
            </div>
          </div>
        </div>

        {/* Open Source Contributions */}
        <div className="space-y-4">
          <h3 className={`text-xs font-bold uppercase tracking-wider font-mono border-b pb-1.5 flex items-center ${
            isPdf ? 'text-zinc-950 border-zinc-200' : 'text-white border-white/5'
          } print:text-zinc-900 print:border-zinc-200`}>
            <GitBranch className={`w-4 h-4 mr-2 ${isPdf ? 'text-emerald-700' : 'text-emerald-400'} print:text-emerald-600`} />
            Open Source Contributions
          </h3>
          <div className="space-y-3.5 text-xs font-sans">
            <div>
              <span className={`font-bold block ${isPdf ? 'text-zinc-900' : 'text-white'} print:text-zinc-900`}>Next.js Core Docs Caching Sweep (Merged)</span>
              <p className={isPdf ? 'text-zinc-700' : 'text-zinc-400 print:text-zinc-700'}>
                Refined Edge runtime caching and revalidation guidelines helping developers handle database webhook triggers correctly.
              </p>
            </div>
            <div>
              <span className={`font-bold block ${isPdf ? 'text-zinc-900' : 'text-white'} print:text-zinc-900`}>Framer Motion performance layout bounds (Merged)</span>
              <p className={isPdf ? 'text-zinc-700' : 'text-zinc-400 print:text-zinc-700'}>
                Corrected minor UI render loops triggered during layoutId shifts across dynamic routers.
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-4">
          <h3 className={`text-xs font-bold uppercase tracking-wider font-mono border-b pb-1.5 flex items-center ${
            isPdf ? 'text-zinc-950 border-zinc-200' : 'text-white border-white/5'
          } print:text-zinc-900 print:border-zinc-200`}>
            <GraduationCap className={`w-4 h-4 mr-2 ${isPdf ? 'text-indigo-700' : 'text-indigo-400'} print:text-indigo-600`} />
            Education History
          </h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-start text-xs sm:text-sm font-sans">
              <div>
                <span className={`font-bold ${isPdf ? 'text-zinc-950' : 'text-white'} print:text-zinc-900`}>M.Sc. in Computer Science (Pursuing)</span>
                <p className={`text-xs mt-0.5 ${isPdf ? 'text-zinc-600' : 'text-zinc-400'} print:text-zinc-600`}>Dr. A.P.J. Abdul Kalam Technical University (AKTU)</p>
              </div>
              <span className={`font-mono text-xs ${isPdf ? 'text-zinc-600' : 'text-zinc-500'} print:text-zinc-600`}>2025 - Present</span>
            </div>

            <div className="flex justify-between items-start text-xs sm:text-sm font-sans">
              <div>
                <span className={`font-bold ${isPdf ? 'text-zinc-950' : 'text-white'} print:text-zinc-900`}>Bachelor of Technology (B.Tech) in Computer Science & Engineering</span>
                <p className={`text-xs mt-0.5 ${isPdf ? 'text-zinc-600' : 'text-zinc-400'} print:text-zinc-600`}>Dr. A.P.J. Abdul Kalam Technical University (AKTU)</p>
                <p className="text-[10px] text-zinc-500 mt-0.5">Honors division degree recipient (8.2/10.0 CGPA baseline)</p>
              </div>
              <span className={`font-mono text-xs ${isPdf ? 'text-zinc-600' : 'text-zinc-500'} print:text-zinc-600`}>2022 - 2025</span>
            </div>

            <div className="flex justify-between items-start text-xs sm:text-sm font-sans">
              <div>
                <span className={`font-bold ${isPdf ? 'text-zinc-950' : 'text-white'} print:text-zinc-900`}>Diploma in Civil Engineering (Transition Phase)</span>
                <p className={`text-xs mt-0.5 ${isPdf ? 'text-zinc-600' : 'text-zinc-400'} print:text-zinc-600`}>Board of Technical Education</p>
                <p className="text-[10px] text-zinc-500 mt-0.5">Structural physics configurations, drafting layouts and blueprints tracking.</p>
              </div>
              <span className={`font-mono text-xs ${isPdf ? 'text-zinc-600' : 'text-zinc-500'} print:text-zinc-600`}>2019 - 2022</span>
            </div>

            <div className="flex justify-between items-start text-xs sm:text-sm font-sans">
              <div>
                <span className={`font-bold ${isPdf ? 'text-zinc-950' : 'text-white'} print:text-zinc-900`}>Class XII (Intermediate School)</span>
                <p className={`text-xs mt-0.5 ${isPdf ? 'text-zinc-600' : 'text-zinc-400'} print:text-zinc-600`}>State Board (PCM division score: 82.0% overall)</p>
              </div>
              <span className={`font-mono text-xs ${isPdf ? 'text-zinc-600' : 'text-zinc-500'} print:text-zinc-600`}>2018</span>
            </div>
          </div>
        </div>

        {/* Research & Publications */}
        <div className="space-y-4">
          <h3 className={`text-xs font-bold uppercase tracking-wider font-mono border-b pb-1.5 flex items-center ${
            isPdf ? 'text-zinc-950 border-zinc-200' : 'text-white border-white/5'
          } print:text-zinc-900 print:border-zinc-200`}>
            <BookOpen className={`w-4 h-4 mr-2 ${isPdf ? 'text-rose-700' : 'text-rose-400'} print:text-rose-600`} />
            Systems Research Publications
          </h3>
          <div className="space-y-2 text-xs font-sans">
            <div>
              <span className={`font-bold block ${isPdf ? 'text-zinc-900' : 'text-white'} print:text-zinc-900`}>On the Reliability of AI Agent Curation Pipelines (MSc Research)</span>
              <p className={isPdf ? 'text-zinc-700' : 'text-zinc-400 print:text-zinc-700'}>
                Explores prompt engineering boundaries and PostgreSQL pgvector cosine similarity index thresholds to achieve deterministic structured JSON aggregation.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Skills Group Grid */}
        <div className="space-y-3">
          <h3 className={`text-xs font-bold uppercase tracking-wider font-mono border-b pb-1.5 flex items-center ${
            isPdf ? 'text-zinc-950 border-zinc-200' : 'text-white border-white/5'
          } print:text-zinc-900 print:border-zinc-200`}>
            <Code className={`w-4 h-4 mr-2 ${isPdf ? 'text-amber-700' : 'text-amber-400'} print:text-amber-600`} />
            Skills Matrix
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {skillsGroup.map((g, idx) => (
              <div key={idx} className="space-y-1.5">
                <span className={`font-mono font-bold uppercase block ${
                  isPdf ? 'text-zinc-800' : 'text-zinc-300'
                } print:text-zinc-800`}>{g.title}</span>
                <p className={`font-sans leading-relaxed ${
                  isPdf ? 'text-zinc-700' : 'text-zinc-400'
                } print:text-zinc-600`}>
                  {g.items.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements & Certificates */}
        <div className="space-y-3">
          <h3 className={`text-xs font-bold uppercase tracking-wider font-mono border-b pb-1.5 flex items-center ${
            isPdf ? 'text-zinc-950 border-zinc-200' : 'text-white border-white/5'
          } print:text-zinc-900 print:border-zinc-200`}>
            <Award className={`w-4 h-4 mr-2 ${isPdf ? 'text-rose-700' : 'text-rose-400'} print:text-rose-600`} />
            Certificates & Achievements
          </h3>
          
          <ul className={`list-disc pl-5 text-xs space-y-1.5 font-sans ${
            isPdf ? 'text-zinc-800' : 'text-zinc-400'
          } print:text-zinc-700`}>
            <li>Successfully built and deployed **StartupWire.in** (achieving 100/100 performance ranking scores).</li>
            <li>Completed comprehensive coursework audits in Ethical Hacking, CTF challenges, and local Linux Administration operations.</li>
            <li>Certified Full Stack Developer and Technical SEO Auditor patterns.</li>
          </ul>
        </div>

      </div>

    </div>
  );
}
