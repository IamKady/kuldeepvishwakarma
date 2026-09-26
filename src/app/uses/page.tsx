'use client';

import React from 'react';
import { Settings, Laptop, Terminal, Server } from 'lucide-react';

export default function UsesPage() {
  const hardware = [
    { 
      name: 'Primary Laptop', 
      desc: 'HP Pavilion powered by AMD Ryzen 7 5700U (8 cores / 16 threads), 16GB Dual-Channel DDR4 RAM, and a fast 512GB NVMe M.2 SSD.' 
    },
    { 
      name: 'Display & Peripherals', 
      desc: '15.6" Full HD IPS anti-glare display, Logitech silent ergonomic mouse, and a mechanical keyboard with tactile brown switches.' 
    },
    { 
      name: 'Mobile Testing Device', 
      desc: 'Realme Android device used for responsive viewport debugging, mobile browser rendering, and APK audits.' 
    }
  ];

  const software = [
    { 
      name: 'Code Editor & Theme', 
      desc: 'VS Code with One Dark Pro. Key extensions include ESLint, Prettier, GitLens, Error Lens, and Tailwind CSS IntelliSense.' 
    },
    { 
      name: 'Terminal & Shell', 
      desc: 'WSL 2 (Ubuntu 22.04 LTS) for native Linux tooling, Warp terminal shell, and Git Bash on Windows.' 
    },
    { 
      name: 'API Testing & Debugging', 
      desc: 'Postman and Insomnia for local REST payload testing, header inspection, and webhook simulation.' 
    }
  ];

  const stack = [
    { 
      name: 'Databases & Containers', 
      desc: 'Docker Desktop orchestrating local PostgreSQL instances with the pgvector extension and Redis caching containers.' 
    },
    { 
      name: 'Runtimes & Package Managers', 
      desc: 'Node.js (v22 LTS) with npm and pnpm, alongside Python 3.12 with virtual environments (venv) for AI pipelines.' 
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-12 py-6">
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          <Settings className="w-8 h-8 text-indigo-600 dark:text-indigo-400" /> Uses
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 font-sans leading-relaxed max-w-xl">
          A curated list of the hardware, developer tools, software, and local environments I rely on every day to write code and ship products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Hardware Column */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono border-b border-slate-200 dark:border-white/5 pb-2 flex items-center gap-2">
            <Laptop className="w-4.5 h-4.5 text-indigo-600 dark:text-indigo-400" /> Hardware Setup
          </h2>
          <div className="space-y-3.5">
            {hardware.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.01] shadow-xs dark:shadow-none">
                <span className="text-xs font-bold text-slate-900 dark:text-white block">{item.name}</span>
                <span className="text-xs text-slate-600 dark:text-zinc-400 block mt-1 leading-relaxed">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Software Column */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono border-b border-slate-200 dark:border-white/5 pb-2 flex items-center gap-2">
            <Terminal className="w-4.5 h-4.5 text-emerald-600 dark:text-emerald-400" /> Editor &amp; Terminal
          </h2>
          <div className="space-y-3.5">
            {software.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.01] shadow-xs dark:shadow-none">
                <span className="text-xs font-bold text-slate-900 dark:text-white block">{item.name}</span>
                <span className="text-xs text-slate-600 dark:text-zinc-400 block mt-1 leading-relaxed">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Local Server Stack */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono border-b border-slate-200 dark:border-white/5 pb-2 flex items-center gap-2">
          <Server className="w-4.5 h-4.5 text-amber-600 dark:text-amber-500" /> Local Development &amp; Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stack.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.01] shadow-xs dark:shadow-none">
              <span className="text-xs font-bold text-slate-900 dark:text-white block">{item.name}</span>
              <span className="text-xs text-slate-600 dark:text-zinc-400 block mt-1 leading-relaxed">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
