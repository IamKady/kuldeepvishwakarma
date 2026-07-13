'use client';

import React from 'react';
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
  Phone
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Resume() {
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
    { title: 'Databases & Cloud', items: ['PostgreSQL', 'MongoDB', 'Supabase', 'Docker', 'Vercel', 'AWS (Basic)'] },
    { title: 'Specializations', items: ['AI Agent Integration', 'Gemini API models', 'Programmatic SEO', 'API Security (JWT/CSP)', 'Linux Terminal Shell'] }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-10 py-6 print:py-0 print:px-0">
      
      {/* Top Banner (Hidden when printed) */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-zinc-950/40 p-4 rounded-xl border border-white/10 print:hidden">
        <div>
          <h1 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
            Interactive Operational CV
          </h1>
          <p className="text-xs text-zinc-500 font-sans mt-0.5">
            Optimize styling parameters for offline reading. Click "Print to PDF" to download.
          </p>
        </div>
        
        <button
          onClick={triggerConfetti}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow-lg hover:-translate-y-0.5 transition-all flex items-center space-x-1.5 cursor-pointer"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Print / Save to PDF</span>
        </button>
      </div>

      {/* Main Resume Sheet */}
      <div className="p-8 sm:p-12 rounded-xl border border-white/10 bg-black/60 shadow-2xl space-y-8 print:p-0 print:border-0 print:bg-white print:text-black print:shadow-none">
        
        {/* Name / Contact Header */}
        <div className="border-b border-white/10 pb-6 print:border-zinc-300 flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="space-y-1">
            <h2 className="text-3xl font-black text-white font-sans tracking-tight print:text-zinc-900 leading-none">
              Kuldeep Chandra Vishwakarma
            </h2>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-400 font-mono print:text-indigo-600">
              Software Engineer • AI Builder • Startup Founder
            </p>
            <div className="flex items-center space-x-1.5 text-zinc-500 print:text-zinc-600 text-xs font-mono pt-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Uttar Pradesh, India (GMT +5:30)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-400 print:text-zinc-700">
            <a href="mailto:kuldeepvishwakarma3803@gmail.com" className="flex items-center space-x-1.5 hover:text-white print:hover:text-black">
              <Mail className="w-3.5 h-3.5" />
              <span>kuldeepvishwakarma3803@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/iamkady/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 hover:text-white print:hover:text-black">
              <Linkedin className="w-3.5 h-3.5" />
              <span>linkedin.com/in/iamkady</span>
            </a>
            <a href="https://github.com/IamKady" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 hover:text-white print:hover:text-black">
              <Github className="w-3.5 h-3.5" />
              <span>github.com/IamKady</span>
            </a>
            <a href="https://kuldeepvishwakarma.com" className="flex items-center space-x-1.5 hover:text-white print:hover:text-black">
              <Globe className="w-3.5 h-3.5" />
              <span>kuldeepvishwakarma.com</span>
            </a>
            <a href="tel:+918303929309" className="flex items-center space-x-1.5 hover:text-white print:hover:text-black">
              <Phone className="w-3.5 h-3.5" />
              <span>+91 8303929309</span>
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold text-white print:text-zinc-900 uppercase tracking-wider font-mono border-b border-white/5 print:border-zinc-200 pb-1.5 flex items-center">
            <Code className="w-4 h-4 mr-2 text-indigo-400 print:text-indigo-600" />
            Executive Summary
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 print:text-zinc-700 leading-relaxed font-sans">
            Innovative Computer Science graduate and software engineer with expertise designing responsive MERN & Next.js web applications, building background crawlers, and integrating artificial intelligence engines. Hands-on experience developing StartupWire.in, programmatically summarizing content, optimizing for Google crawlers, and handling server operations securely.
          </p>
        </div>

        {/* Experience Section */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-white print:text-zinc-900 uppercase tracking-wider font-mono border-b border-white/5 print:border-zinc-200 pb-1.5 flex items-center">
            <Briefcase className="w-4 h-4 mr-2 text-emerald-400 print:text-emerald-600" />
            Professional Experience
          </h3>
          
          <div className="space-y-5">
            <div className="space-y-1.5">
              <div className="flex justify-between items-start text-xs sm:text-sm font-sans">
                <div>
                  <span className="font-bold text-white print:text-zinc-900">Software Developer (Freelance)</span>
                  <span className="text-zinc-400 print:text-zinc-600"> — Self Employed</span>
                </div>
                <span className="font-mono text-zinc-500 print:text-zinc-600 text-xs">2024 - Present</span>
              </div>
              <ul className="list-disc pl-5 text-xs text-zinc-400 print:text-zinc-700 space-y-1.5 font-sans">
                <li>Designed full-stack platforms leveraging MongoDB, Express, React, and Next.js, raising clients core load speeds by 35%.</li>
                <li>Created server automation and scraper scripts utilizing Python and Node cron workers, streamlining database inputs.</li>
                <li>Secured APIs from standard exploitation tactics (XSS, SQLi) using Zod schema controls and secure JWT credentials.</li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-start text-xs sm:text-sm font-sans">
                <div>
                  <span className="font-bold text-white print:text-zinc-900">Technical Web Developer & SEO Engineer</span>
                  <span className="text-zinc-400 print:text-zinc-600"> — StartupPoint & Saarthi</span>
                </div>
                <span className="font-mono text-zinc-500 print:text-zinc-600 text-xs">2023 - 2024</span>
              </div>
              <ul className="list-disc pl-5 text-xs text-zinc-400 print:text-zinc-700 space-y-1.5 font-sans">
                <li>Collaborated on building responsive front-end landing components using HTML/CSS, JavaScript, and WordPress nodes.</li>
                <li>Conducted complete technical search engine optimization sweeps, rectifying sitemap hierarchies and increasing organic keyword indexing visibility.</li>
                <li>Collaborated with design teams to translate Figma design elements into modular layout interfaces.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-white print:text-zinc-900 uppercase tracking-wider font-mono border-b border-white/5 print:border-zinc-200 pb-1.5 flex items-center">
            <GraduationCap className="w-4 h-4 mr-2 text-indigo-400 print:text-indigo-600" />
            Education History
          </h3>
          <div className="flex justify-between items-start text-xs sm:text-sm font-sans">
            <div>
              <span className="font-bold text-white print:text-zinc-900">Bachelor of Technology (B.Tech) in Computer Science & Engineering</span>
              <p className="text-xs text-zinc-400 print:text-zinc-600 mt-0.5">Dr. A.P.J. Abdul Kalam Technical University (AKTU)</p>
            </div>
            <span className="font-mono text-zinc-500 print:text-zinc-600 text-xs">2020 - 2024</span>
          </div>
        </div>

        {/* Technical Skills Group Grid */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-white print:text-zinc-900 uppercase tracking-wider font-mono border-b border-white/5 print:border-zinc-200 pb-1.5 flex items-center">
            <Code className="w-4 h-4 mr-2 text-amber-400 print:text-amber-600" />
            Skills Matrix
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {skillsGroup.map((g, idx) => (
              <div key={idx} className="space-y-1.5">
                <span className="font-mono font-bold text-zinc-300 print:text-zinc-800 uppercase block">{g.title}</span>
                <p className="text-zinc-400 print:text-zinc-600 font-sans leading-relaxed">
                  {g.items.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements & Certificates */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-white print:text-zinc-900 uppercase tracking-wider font-mono border-b border-white/5 print:border-zinc-200 pb-1.5 flex items-center">
            <Award className="w-4 h-4 mr-2 text-rose-400 print:text-rose-600" />
            Certificates & Achievements
          </h3>
          
          <ul className="list-disc pl-5 text-xs text-zinc-400 print:text-zinc-700 space-y-1 font-sans">
            <li>Successfully built and deployed **StartupWire.in** (achieving 100/100 performance ranking scores).</li>
            <li>Completed comprehensive coursework audits in Ethical Hacking, CTF challenges, and local Linux Administration operations.</li>
            <li>Certified Full Stack Developer and Technical SEO Auditor patterns.</li>
          </ul>
        </div>

      </div>

    </div>
  );
}
