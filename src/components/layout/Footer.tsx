'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-card-border bg-background relative z-10">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tighter text-base text-zinc-900 dark:text-zinc-100">
                KCV
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                · Kuldeep Chandra Vishwakarma
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
              Software Developer, AI Builder &amp; Entrepreneur. Based in Uttar Pradesh, India.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-zinc-600 dark:text-zinc-400">
            <Link href="/projects" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Projects
            </Link>
            <Link href="/case-studies" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Case Studies
            </Link>
            <Link href="/engineering" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Engineering
            </Link>
            <Link href="/blog" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Journal
            </Link>
            <Link href="/startups" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Startups
            </Link>
            <Link href="/resume" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Resume
            </Link>
            <Link href="/now" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Now
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-card-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} Kuldeep Chandra Vishwakarma. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a
              href="mailto:kuldeepvishwakarma3803@gmail.com"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/iamkady/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/IamKady"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <Link
              href="/rss.xml"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              RSS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
