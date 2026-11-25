'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Mail } from 'lucide-react';
import { projectsData, blogsData, timelineMilestones } from '@/data/db';

const FEATURED_PROJECT_IDS = [
  'startupwire',
  'bookperia',
  'kadyverse',
  'vijaya-home-healthcare',
  'sapthagiri-healthcare',
  'aitoolswebsite',
];

const expertiseAreas = [
  {
    title: 'Web & Product Engineering',
    description:
      'Designing and shipping fast, accessible applications with Next.js App Router, React, TypeScript, and Tailwind CSS—optimized for Core Web Vitals and clean semantic HTML.',
  },
  {
    title: 'AI Systems & Retrieval',
    description:
      'Building structured LLM workflows with Google Gemini, Zod schema validation, and PostgreSQL pgvector similarity search for automated curation and deduplication.',
  },
  {
    title: 'Backend & Data Pipelines',
    description:
      'Architecting reliable Node.js and Python services, scheduled RSS/data crawlers, relational schemas with Prisma/Supabase, and defensive API boundaries.',
  },
  {
    title: 'Technical SEO & Performance',
    description:
      'Structuring Schema.org JSON-LD microdata, canonical sitemaps, and edge-cached static delivery for commercial client platforms and content publications.',
  },
];

const experienceItems = [
  {
    role: 'Founder & Lead Engineer',
    org: 'StartupWire.in & Bookperia.com',
    period: '2025 — Present',
    summary:
      'Building autonomous AI news curation pipelines with pgvector deduplication on StartupWire, and local-first literary discovery tools on Bookperia.',
  },
  {
    role: 'Independent Software Developer',
    org: 'Client & Product Engineering',
    period: '2024 — Present',
    summary:
      'Designed and shipped production healthcare web platforms (Vijaya Home Healthcare and Sapthagiri Health Care), editorial systems (KadyVerse), and full-stack web tools.',
  },
  {
    role: 'Technical Web & SEO Developer',
    org: 'StartupPoint & Saarthi',
    period: '2023 — 2024',
    summary:
      'Built responsive web interfaces, restructured technical sitemaps, and improved organic search indexing across client web properties.',
  },
];

export default function Home() {
  const selectedProjects = FEATURED_PROJECT_IDS.map((id) =>
    projectsData.find((p) => p.id === id)
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

  const recentWriting = [...blogsData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const journeyMilestones = timelineMilestones.slice(0, 4);

  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8 space-y-24 sm:space-y-32">
      {/* 1. HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="pt-4 sm:pt-10 pb-4 space-y-8"
      >
        <div className="space-y-5 max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
            Software Developer · AI Builder · Entrepreneur
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.08] text-zinc-900 dark:text-zinc-50">
            Kuldeep Chandra Vishwakarma
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
            I design and build resilient web software, practical AI workflows, and independent digital products. Currently pursuing an M.Sc. in Computer Science while building{' '}
            <Link
              href="/startups"
              className="text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 hover:decoration-blue-600 transition-colors"
            >
              StartupWire
            </Link>
            ,{' '}
            <Link
              href="/projects#bookperia"
              className="text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 hover:decoration-blue-600 transition-colors"
            >
              Bookperia
            </Link>
            , and{' '}
            <Link
              href="/projects#kadyverse"
              className="text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 hover:decoration-blue-600 transition-colors"
            >
              KadyVerse
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-1">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-colors"
          >
            Selected Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md border border-card-border bg-card-bg text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
          >
            Read Journal
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center gap-1.5 px-2 py-2.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Resume
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </motion.section>

      {/* 2. SELECTED PROJECTS */}
      <section aria-labelledby="projects-heading" className="space-y-8 border-t border-card-border pt-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <p className="text-xs font-mono uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
              01 / Selected Work
            </p>
            <h2 id="projects-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Projects &amp; Client Platforms
            </h2>
          </div>
          <div className="flex items-center gap-5 text-sm">
            <Link
              href="/case-studies"
              className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              All projects <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {selectedProjects.map((project) => (
            <article
              key={project.id}
              className="p-6 rounded-xl border border-card-border bg-card-bg flex flex-col justify-between gap-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {project.categoryTag || project.status}
                    </span>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono flex-shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-1 rounded border border-card-border text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                      >
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target={project.live.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 px-2 py-1 rounded border border-card-border text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        Live <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-card-border">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-card-inner text-zinc-600 dark:text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. TECHNICAL EXPERTISE & EXPERIENCE */}
      <section aria-labelledby="expertise-heading" className="space-y-10 border-t border-card-border pt-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <p className="text-xs font-mono uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
              02 / Craft &amp; Experience
            </p>
            <h2 id="expertise-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Technical Expertise
            </h2>
          </div>
          <Link
            href="/engineering"
            className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            Engineering &amp; live telemetry <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertiseAreas.map((area) => (
            <div
              key={area.title}
              className="p-6 rounded-xl border border-card-border bg-card-bg space-y-2"
            >
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {area.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-4 pt-2">
          <h3 className="text-xs font-mono uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
            Development Experience
          </h3>
          <div className="divide-y divide-card-border border-y border-card-border">
            {experienceItems.map((exp) => (
              <div
                key={exp.role}
                className="py-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline"
              >
                <div className="md:col-span-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  {exp.period}
                </div>
                <div className="md:col-span-9 space-y-1">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {exp.role}
                    </span>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                      · {exp.org}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {exp.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EDUCATION & JOURNEY */}
      <section aria-labelledby="journey-heading" className="space-y-8 border-t border-card-border pt-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <p className="text-xs font-mono uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
              03 / Background
            </p>
            <h2 id="journey-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Education &amp; Journey
            </h2>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            Full story <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="divide-y divide-card-border border-y border-card-border">
          {journeyMilestones.map((item) => (
            <div
              key={item.id}
              className="py-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline"
            >
              <div className="md:col-span-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                {item.year}
              </div>
              <div className="md:col-span-9 space-y-1">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {item.title}
                  </h3>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    · {item.organization}
                  </span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PERSONAL WRITING & JOURNAL */}
      <section aria-labelledby="writing-heading" className="space-y-8 border-t border-card-border pt-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <p className="text-xs font-mono uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
              04 / Writing &amp; Notes
            </p>
            <h2 id="writing-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Journal &amp; Technical Essays
            </h2>
          </div>
          <div className="flex items-center gap-5 text-sm">
            <Link
              href="/now"
              className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Now
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              All writing <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="divide-y divide-card-border border-y border-card-border">
          {recentWriting.map((post) => (
            <Link
              key={post.id}
              href={`/blog#${post.id}`}
              className="py-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline group"
            >
              <div className="md:col-span-3 flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <div className="md:col-span-9 space-y-1">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  {post.title}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section aria-labelledby="contact-heading" className="border-t border-card-border pt-14 pb-6">
        <div className="p-8 sm:p-10 rounded-2xl border border-card-border bg-card-bg flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <p className="text-xs font-mono uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
              05 / Contact
            </p>
            <h2 id="contact-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Let&apos;s build something thoughtful.
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Open to software engineering roles, AI product collaborations, and selective client work.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:kuldeepvishwakarma3803@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/iamkady/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-4 py-2.5 text-sm font-medium rounded-md border border-card-border text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/IamKady"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-4 py-2.5 text-sm font-medium rounded-md border border-card-border text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              GitHub <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
