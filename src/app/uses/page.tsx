'use client';

import React from 'react';
import { Settings, Laptop, Terminal, Chrome, Server } from 'lucide-react';

export default function UsesPage() {
  const hardware = [
    { name: 'Core Machine', desc: 'HP Laptop with AMD Ryzen 7 5700U, 16GB Dual-Channel DDR4 RAM, 512GB NVMe M.2 SSD.' },
    { name: 'Display & Input', desc: '15.6" FHD IPS panel, Logitech silent mouse, mechanical brown switch keys.' },
    { name: 'Mobile Node', desc: 'Realme Device used for responsive testing and Android APK debug audits.' }
  ];

  const software = [
    { name: 'IDE workspace', desc: 'VS Code with theme styling (One Dark Pro) and extensions (ESLint, Prettier, GitLens, Tailwind CSS Intellisense).' },
    { name: 'Terminal Shell', desc: 'WSL (Ubuntu 22.04 LTS), Warp terminal shell config, and Git bash for windows CLI commands.' },
    { name: 'Testing Console', desc: 'Postman and Insomnia for local API payload diagnostics.' }
  ];

  const stack = [
    { name: 'Local Database Node', desc: 'Docker Desktop orchestrating PostgreSQL databases and Redis caching containers.' },
    { name: 'Environment Manager', desc: 'NodeJS (v22.1.0 LTS) and Python (3.11) managing local virtual environments.' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-12 py-6">
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight flex items-center gap-2">
          <Settings className="w-8 h-8 text-indigo-400" /> Uses
        </h1>
        <p className="text-sm text-zinc-400 font-sans">
          A checklist detailing the hardware, software utilities, and local server configurations I use daily.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Hardware Column */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono border-b border-white/5 pb-2 flex items-center gap-2">
            <Laptop className="w-4.5 h-4.5 text-indigo-400" /> Hardware Specs
          </h2>
          <div className="space-y-3.5">
            {hardware.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                <span className="text-xs font-bold text-white block">{item.name}</span>
                <span className="text-xs text-zinc-400 block mt-1 leading-relaxed">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Software Column */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono border-b border-white/5 pb-2 flex items-center gap-2">
            <Terminal className="w-4.5 h-4.5 text-emerald-400" /> IDE & Software Console
          </h2>
          <div className="space-y-3.5">
            {software.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                <span className="text-xs font-bold text-white block">{item.name}</span>
                <span className="text-xs text-zinc-400 block mt-1 leading-relaxed">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Local Server Stack */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono border-b border-white/5 pb-2 flex items-center gap-2">
          <Server className="w-4.5 h-4.5 text-amber-500" /> Local Server & Dev stacks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stack.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <span className="text-xs font-bold text-white block">{item.name}</span>
              <span className="text-xs text-zinc-400 block mt-1 leading-relaxed">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
