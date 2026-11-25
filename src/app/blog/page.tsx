'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  X,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Share2,
  Check,
  Copy,
  PenLine,
  Rss,
} from 'lucide-react';
import { blogsData, BlogPost, JournalPillar } from '@/data/db';
import {
  EntryStatus,
  getMergedJournalEntries,
  JOURNAL_PILLARS,
  normalizeBaseEntry,
} from '@/lib/journalStore';

type MergedEntry = BlogPost & {
  pillar: JournalPillar;
  status: EntryStatus;
  isCustom?: boolean;
};

const BASE_ENTRIES: MergedEntry[] = blogsData
  .map(normalizeBaseEntry)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

type FilterOption = 'All' | Exclude<JournalPillar, 'Technical Archive'> | 'Archive';

export default function JournalPage() {
  const [entries, setEntries] = useState<MergedEntry[]>(BASE_ENTRIES);
  const [selectedCategory, setSelectedCategory] = useState<FilterOption>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [readingId, setReadingId] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCodeIdx, setCopiedCodeIdx] = useState<number | null>(null);
  const [readingProgress, setReadingProgress] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Load author's custom published pieces & review overrides on mount
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setEntries(getMergedJournalEntries());
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  // Sync URL hash for deep linking (#slug)
  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) {
        setReadingId(null);
        return;
      }
      const all = getMergedJournalEntries();
      const match = all.find((e) => e.id === hash && e.status !== 'hidden');
      if (match) {
        setReadingId(match.id);
      }
    };

    const raf = requestAnimationFrame(syncHash);
    window.addEventListener('hashchange', syncHash);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('hashchange', syncHash);
    };
  }, []);

  const openArticle = (id: string) => {
    setReadingId(id);
    history.pushState(null, '', `#${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeArticle = () => {
    setReadingId(null);
    history.pushState('', document.title, window.location.pathname + window.location.search);
  };

  useEffect(() => {
    if (!readingId) return;
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setReadingProgress(Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    const raf = requestAnimationFrame(handleScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [readingId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (readingId) closeArticle();
        else if (searchQuery) setSearchQuery('');
      } else if (
        e.key === '/' &&
        !readingId &&
        document.activeElement !== searchInputRef.current
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [readingId, searchQuery]);

  const publishedEntries = useMemo(
    () => entries.filter((e) => e.status === 'published'),
    [entries]
  );

  const archivedEntries = useMemo(
    () => entries.filter((e) => e.status === 'archived'),
    [entries]
  );

  const activeArticle = useMemo(
    () => entries.find((e) => e.id === readingId) || null,
    [entries, readingId]
  );

  const relatedArticles = useMemo(() => {
    if (!activeArticle) return [];
    const pool = publishedEntries.filter((e) => e.id !== activeArticle.id);
    const samePillar = pool.filter((e) => e.pillar === activeArticle.pillar);
    const others = pool.filter((e) => e.pillar !== activeArticle.pillar);
    return [...samePillar, ...others].slice(0, 3);
  }, [activeArticle, publishedEntries]);

  const filteredList = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const source =
      selectedCategory === 'Archive' ? archivedEntries : publishedEntries;

    return source.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        selectedCategory === 'Archive' ||
        item.pillar === selectedCategory;
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.content.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery, publishedEntries, archivedEntries]);

  // Curated sections for default editorial homepage
  const featuredEntry = useMemo(
    () =>
      publishedEntries.find((e) => e.featured) || publishedEntries[0] || null,
    [publishedEntries]
  );

  const latestReflections = useMemo(
    () =>
      publishedEntries.filter(
        (e) =>
          e.id !== featuredEntry?.id &&
          (e.pillar === 'Reflections' || e.pillar === 'Growth & Learning')
      ),
    [publishedEntries, featuredEntry]
  );

  const essaysAndPhilosophy = useMemo(
    () =>
      publishedEntries.filter(
        (e) =>
          e.pillar === 'Philosophy' ||
          e.pillar === 'Society & People' ||
          e.pillar === 'Perspectives'
      ),
    [publishedEntries]
  );

  const poetryAndLiterature = useMemo(
    () => publishedEntries.filter((e) => e.pillar === 'Literature & Poetry'),
    [publishedEntries]
  );

  const notesAndFragments = useMemo(
    () => publishedEntries.filter((e) => e.pillar === 'Notes & Fragments'),
    [publishedEntries]
  );

  const handleCopyLink = (id: string) => {
    const url = `${window.location.origin}/blog#${id}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIdx(idx);
    setTimeout(() => setCopiedCodeIdx(null), 2000);
  };

  const renderInline = (text: string) => {
    // Support [label](url), **bold**, *italic*, and `code` cleanly
    const tokenRegex =
      /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
    const parts = text.split(tokenRegex);

    return parts.map((part, idx) => {
      if (!part) return null;
      const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        return (
          <a
            key={idx}
            href={linkMatch[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 dark:text-blue-400 underline decoration-blue-600/30 underline-offset-4 hover:decoration-blue-600 transition-colors"
          >
            {linkMatch[1]}
          </a>
        );
      }
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={idx} className="font-semibold text-zinc-900 dark:text-zinc-100">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return (
          <em key={idx} className="italic">
            {part.slice(1, -1)}
          </em>
        );
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code
            key={idx}
            className="px-1.5 py-0.5 rounded bg-card-inner border border-card-border font-mono text-[0.88em] text-zinc-800 dark:text-zinc-200"
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      return <React.Fragment key={idx}>{part}</React.Fragment>;
    });
  };

  const formatDisplayDate = (dateStr: string) => {
    const parsed = new Date(dateStr);
    if (Number.isNaN(parsed.getTime())) return dateStr;
    return parsed.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const isEditorialHome = selectedCategory === 'All' && !searchQuery.trim();

  // ---------------- READER VIEW ----------------
  if (readingId && activeArticle) {
    return (
      <div className="max-w-3xl mx-auto px-5 sm:px-8 pb-16 space-y-10">
        {/* Minimal Sticky Reading Bar */}
        <div className="sticky top-20 z-30 bg-background/90 backdrop-blur-md border-b border-card-border py-3 flex items-center justify-between gap-4">
          <button
            onClick={closeArticle}
            className="inline-flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Journal</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleCopyLink(activeArticle.id)}
              className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded border border-card-border bg-card-bg text-zinc-700 dark:text-zinc-300 hover:border-blue-500/40 transition-colors cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>

          <div
            className="absolute bottom-0 left-0 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all duration-100"
            style={{ width: `${readingProgress}%` }}
          />
        </div>

        {/* Article Presentation */}
        <article className="mx-auto max-w-[65ch] space-y-8 pt-2">
          <header className="space-y-5 border-b border-card-border pb-8">
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span className="text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                {activeArticle.pillar}
              </span>
              <span>·</span>
              <time dateTime={activeArticle.date}>
                {formatDisplayDate(activeArticle.date)}
              </time>
              <span>·</span>
              <span>{activeArticle.readTime}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold tracking-tight leading-[1.18] text-zinc-900 dark:text-zinc-50">
              {activeArticle.title}
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {activeArticle.description}
            </p>
          </header>

          {activeArticle.coverImage && (
            <figure className="space-y-2">
              <Image
                src={activeArticle.coverImage}
                alt={activeArticle.coverCaption || activeArticle.title}
                width={1200}
                height={675}
                unoptimized
                className="w-full rounded-lg border border-card-border object-cover max-h-[420px]"
              />
              {activeArticle.coverCaption && (
                <figcaption className="text-xs text-zinc-500 dark:text-zinc-400 italic text-center">
                  {activeArticle.coverCaption}
                </figcaption>
              )}
            </figure>
          )}

          {/* Reading Body */}
          <div className="space-y-6 text-[17px] sm:text-[18px] leading-[1.85] text-zinc-800 dark:text-zinc-200">
            {activeArticle.content.split('\n\n').map((block, idx) => {
              if (block.startsWith('## ') || block.startsWith('### ')) {
                const heading = block.replace(/^###?\s+/, '');
                return (
                  <h2
                    key={idx}
                    className="font-serif text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-50 pt-6 pb-1"
                  >
                    {heading}
                  </h2>
                );
              }

              if (block.startsWith('> ')) {
                const quoteLines = block
                  .split('\n')
                  .map((l) => l.replace(/^>\s?/, ''));
                return (
                  <blockquote
                    key={idx}
                    className="border-l-2 border-blue-600/50 dark:border-blue-400/50 pl-5 py-1 my-6 font-serif italic text-zinc-700 dark:text-zinc-300 space-y-1.5"
                  >
                    {quoteLines.map((line, lIdx) => (
                      <p key={lIdx}>{renderInline(line)}</p>
                    ))}
                  </blockquote>
                );
              }

              if (block.startsWith('---')) {
                return (
                  <hr
                    key={idx}
                    className="my-8 border-t border-card-border w-24 mx-auto"
                  />
                );
              }

              if (block.startsWith('```')) {
                const lines = block.split('\n');
                const lang = lines[0].replace('```', '') || 'text';
                const code = lines.slice(1, lines.length - 1).join('\n');
                const isCopied = copiedCodeIdx === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-lg bg-zinc-950 border border-zinc-800 overflow-hidden my-6"
                  >
                    <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 text-xs font-mono text-zinc-400">
                      <span className="uppercase">{lang}</span>
                      <button
                        onClick={() => handleCopyCode(code, idx)}
                        className="inline-flex items-center gap-1 text-zinc-300 hover:text-white cursor-pointer"
                      >
                        {isCopied ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                        <span>{isCopied ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                    <pre className="p-4 font-mono text-xs sm:text-sm text-zinc-200 overflow-x-auto leading-relaxed">
                      <code>{code}</code>
                    </pre>
                  </div>
                );
              }

              if (
                block.startsWith('* ') ||
                block.startsWith('- ') ||
                /^\d+\.\s/.test(block)
              ) {
                const isOrdered = /^\d+\.\s/.test(block);
                const ListTag = isOrdered ? 'ol' : 'ul';
                return (
                  <ListTag
                    key={idx}
                    className={`${
                      isOrdered ? 'list-decimal' : 'list-disc'
                    } pl-6 space-y-2 text-zinc-700 dark:text-zinc-300`}
                  >
                    {block.split('\n').map((item, itemIdx) => (
                      <li key={itemIdx}>
                        {renderInline(item.replace(/^\* |^- |^\d+\.\s/, ''))}
                      </li>
                    ))}
                  </ListTag>
                );
              }

              return (
                <p key={idx} className="whitespace-pre-line">
                  {renderInline(block)}
                </p>
              );
            })}
          </div>

          {/* Minimal Author Information */}
          <footer className="pt-10 mt-12 border-t border-card-border space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="space-y-1">
                <p className="font-medium text-zinc-900 dark:text-zinc-100">
                  Kuldeep Chandra Vishwakarma
                </p>
                <p className="text-xs leading-relaxed max-w-md">
                  Independent writing on human behaviour, literature, philosophy, and life while building software.
                </p>
              </div>
              <Link
                href="/about"
                className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
              >
                About the author <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Related Writing */}
            {relatedArticles.length > 0 && (
              <div className="space-y-4 pt-6 border-t border-card-border">
                <h3 className="text-xs font-mono uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                  Related Writing
                </h3>
                <div className="divide-y divide-card-border border-y border-card-border">
                  {relatedArticles.map((rel) => (
                    <button
                      key={rel.id}
                      onClick={() => openArticle(rel.id)}
                      className="w-full text-left py-4 flex items-baseline justify-between gap-4 group cursor-pointer"
                    >
                      <div className="space-y-1">
                        <span className="font-serif text-base font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors block">
                          {rel.title}
                        </span>
                        <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                          {rel.pillar} · {rel.readTime}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-shrink-0 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </footer>
        </article>
      </div>
    );
  }

  // ---------------- EDITORIAL JOURNAL HOMEPAGE ----------------
  const categoryOptions: FilterOption[] = [
    'All',
    ...JOURNAL_PILLARS.map((p) => p.id),
    'Archive',
  ];

  const renderEntryRow = (entry: MergedEntry) => (
    <article
      key={entry.id}
      id={entry.id}
      onClick={() => openArticle(entry.id)}
      className="py-6 group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline"
    >
      <div className="md:col-span-3 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
        <time dateTime={entry.date}>{entry.date}</time>
        <span>·</span>
        <span>{entry.readTime}</span>
      </div>
      <div className="md:col-span-9 space-y-1.5">
        <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
          {entry.pillar}
        </span>
        <h3 className="font-serif text-xl font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
          {entry.title}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
          {entry.description}
        </p>
      </div>
    </article>
  );

  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-14 pb-12">
      {/* Masthead */}
      <header className="space-y-6 border-b border-card-border pb-10 pt-2">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
            Independent Journal &amp; Essays
          </p>
          <div className="flex items-center gap-4 text-xs font-mono">
            <Link
              href="/blog/studio"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-card-border bg-card-bg text-zinc-700 dark:text-zinc-300 hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <PenLine className="w-3.5 h-3.5" />
              <span>Author Studio</span>
            </Link>
            <a
              href="/rss.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <Rss className="w-3.5 h-3.5" />
              <span>RSS</span>
            </a>
          </div>
        </div>

        <div className="space-y-3 max-w-2xl">
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.12]">
            Journal &amp; Writing
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Personal reflections, philosophical questions, notes on books and poetry, and quiet observations on people and life. Written slowly, outside algorithms.
          </p>
        </div>

        {/* Category Navigation & Search */}
        <div className="space-y-4 pt-2">
          <nav
            aria-label="Journal categories"
            className="flex flex-wrap items-center gap-1.5"
          >
            {categoryOptions.map((cat) => {
              const isActive = selectedCategory === cat;
              const isArchive = cat === 'Archive';
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-md text-xs transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium'
                      : isArchive
                        ? 'text-zinc-500 dark:text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 border border-dashed border-card-border'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 bg-card-bg border border-card-border'
                  }`}
                >
                  {cat === 'Archive'
                    ? `Archive (${archivedEntries.length})`
                    : cat}
                </button>
              );
            })}
          </nav>

          <div className="relative max-w-xs">
            <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-zinc-400" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search essays & notes ( / )"
              aria-label="Search journal entries"
              className="w-full pl-8 pr-8 py-1.5 text-xs bg-card-bg border border-card-border rounded-md outline-none text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:border-blue-600 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-2.5 top-2 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* EDITORIAL HOMEPAGE VIEW */}
      {isEditorialHome ? (
        <div className="space-y-16">
          {/* 1. Featured Writing */}
          {featuredEntry && (
            <section aria-labelledby="featured-heading" className="space-y-4">
              <h2
                id="featured-heading"
                className="text-xs font-mono uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400"
              >
                Featured Writing
              </h2>
              <article
                onClick={() => openArticle(featuredEntry.id)}
                className="p-7 sm:p-10 rounded-2xl border border-card-border bg-card-bg hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors cursor-pointer space-y-5 group"
              >
                <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    {featuredEntry.pillar}
                  </span>
                  <span>·</span>
                  <time dateTime={featuredEntry.date}>{featuredEntry.date}</time>
                  <span>·</span>
                  <span>{featuredEntry.readTime}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {featuredEntry.title}
                </h3>

                <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
                  {featuredEntry.description}
                </p>

                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400">
                  Read essay <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </article>
            </section>
          )}

          {/* 2. Latest Reflections */}
          <section aria-labelledby="reflections-heading" className="space-y-3">
            <div className="flex items-baseline justify-between border-b border-card-border pb-2">
              <h2
                id="reflections-heading"
                className="font-serif text-2xl font-medium text-zinc-900 dark:text-zinc-100"
              >
                Latest Reflections
              </h2>
              <button
                onClick={() => setSelectedCategory('Reflections')}
                className="text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
              >
                Filter Reflections
              </button>
            </div>
            {latestReflections.length > 0 ? (
              <div className="divide-y divide-card-border">
                {latestReflections.map(renderEntryRow)}
              </div>
            ) : (
              <p className="py-6 text-sm text-zinc-500 dark:text-zinc-400 italic font-serif">
                New reflections are drafted privately in the Author Studio before publication.
              </p>
            )}
          </section>

          {/* 3. Essays & Philosophy */}
          <section aria-labelledby="philosophy-heading" className="space-y-3">
            <div className="flex items-baseline justify-between border-b border-card-border pb-2">
              <h2
                id="philosophy-heading"
                className="font-serif text-2xl font-medium text-zinc-900 dark:text-zinc-100"
              >
                Essays &amp; Philosophy
              </h2>
              <button
                onClick={() => setSelectedCategory('Philosophy')}
                className="text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
              >
                Philosophy &amp; Society
              </button>
            </div>
            {essaysAndPhilosophy.length > 0 ? (
              <div className="divide-y divide-card-border">
                {essaysAndPhilosophy.map(renderEntryRow)}
              </div>
            ) : (
              <div className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                <p className="font-serif italic">
                  Awaiting original essays on philosophy, human behaviour, and contemporary perspectives.
                </p>
                <Link
                  href="/blog/studio?pillar=Philosophy"
                  className="text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline shrink-0"
                >
                  Draft in Studio →
                </Link>
              </div>
            )}
          </section>

          {/* 4. Poetry & Literature */}
          <section aria-labelledby="literature-heading" className="space-y-3">
            <div className="flex items-baseline justify-between border-b border-card-border pb-2">
              <h2
                id="literature-heading"
                className="font-serif text-2xl font-medium text-zinc-900 dark:text-zinc-100"
              >
                Poetry &amp; Literature
              </h2>
              <button
                onClick={() => setSelectedCategory('Literature & Poetry')}
                className="text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
              >
                Filter Literature
              </button>
            </div>
            {poetryAndLiterature.length > 0 ? (
              <div className="divide-y divide-card-border">
                {poetryAndLiterature.map(renderEntryRow)}
              </div>
            ) : (
              <p className="py-6 text-sm text-zinc-500 dark:text-zinc-400 italic font-serif">
                Notes on books, poetry, and enduring literature will appear here once published.
              </p>
            )}
          </section>

          {/* 5. Personal Notes & Fragments */}
          <section aria-labelledby="fragments-heading" className="space-y-3">
            <div className="flex items-baseline justify-between border-b border-card-border pb-2">
              <h2
                id="fragments-heading"
                className="font-serif text-2xl font-medium text-zinc-900 dark:text-zinc-100"
              >
                Personal Notes &amp; Fragments
              </h2>
              <button
                onClick={() => setSelectedCategory('Notes & Fragments')}
                className="text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
              >
                Filter Fragments
              </button>
            </div>
            {notesAndFragments.length > 0 ? (
              <div className="divide-y divide-card-border">
                {notesAndFragments.map(renderEntryRow)}
              </div>
            ) : (
              <p className="py-6 text-sm text-zinc-500 dark:text-zinc-400 italic font-serif">
                Open questions and unfinished observations are kept privately until ready to share.
              </p>
            )}
          </section>

          {/* Quiet Link to Preserved Earlier Technical Archive */}
          {archivedEntries.length > 0 && (
            <div className="pt-8 border-t border-card-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-500 dark:text-zinc-400">
              <span>
                {archivedEntries.length} earlier technical notes are preserved in the archive pending author review.
              </span>
              <button
                onClick={() => setSelectedCategory('Archive')}
                className="font-mono text-blue-600 dark:text-blue-400 hover:underline cursor-pointer text-left"
              >
                View Technical Archive →
              </button>
            </div>
          )}
        </div>
      ) : (
        /* FILTERED / ARCHIVE LIST VIEW */
        <section className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-card-border pb-3">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl font-medium text-zinc-900 dark:text-zinc-100">
                {selectedCategory === 'Archive'
                  ? 'Earlier Technical Archive (Pending Review)'
                  : selectedCategory === 'All'
                    ? 'Search Results'
                    : selectedCategory}
              </h2>
              {selectedCategory === 'Archive' && (
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Existing technical articles preserved until reviewed in Author Studio.
                </p>
              )}
            </div>
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
              {filteredList.length} {filteredList.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          {filteredList.length > 0 ? (
            <div className="divide-y divide-card-border">
              {filteredList.map(renderEntryRow)}
            </div>
          ) : (
            <div className="py-12 px-6 rounded-xl border border-card-border bg-card-bg text-center space-y-3">
              <p className="font-serif italic text-base text-zinc-600 dark:text-zinc-400">
                {searchQuery
                  ? `No pieces matched "${searchQuery}".`
                  : `No published pieces in ${selectedCategory} yet.`}
              </p>
              <div className="flex items-center justify-center gap-4 text-xs font-mono">
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline cursor-pointer"
                >
                  Back to Journal
                </button>
                <Link
                  href="/blog/studio"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Write in Author Studio →
                </Link>
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
