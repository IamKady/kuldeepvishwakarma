'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Save,
  Eye,
  Send,
  Archive,
  Trash2,
  Plus,
  Download,
  Copy,
  Check,
  FileText,
} from 'lucide-react';
import { blogsData, BlogPost, JournalPillar } from '@/data/db';
import {
  EntryStatus,
  estimateReadingTime,
  JOURNAL_PILLARS,
  JournalOverride,
  loadCustomJournalEntries,
  loadJournalOverrides,
  normalizeBaseEntry,
  saveCustomJournalEntries,
  saveJournalOverrides,
} from '@/lib/journalStore';

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 64);
}

export default function AuthorStudioPage() {
  const [tab, setTab] = useState<'write' | 'review'>('write');
  const [customEntries, setCustomEntries] = useState<BlogPost[]>([]);
  const [overrides, setOverrides] = useState<Record<string, JournalOverride>>({});

  // Active editor state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pillar, setPillar] = useState<Exclude<JournalPillar, 'Technical Archive'>>('Reflections');
  const [coverImage, setCoverImage] = useState('');
  const [coverCaption, setCoverCaption] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const [previewMode, setPreviewMode] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [copiedTs, setCopiedTs] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setCustomEntries(loadCustomJournalEntries());
      setOverrides(loadJournalOverrides());
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const showToast = (msg: string) => {
    setFeedback(msg);
    setTimeout(() => setFeedback(null), 3000);
  };

  const resetEditor = () => {
    setEditingId(null);
    setTitle('');
    setDescription('');
    setPillar('Reflections');
    setCoverImage('');
    setCoverCaption('');
    setContent('');
    setStatus('draft');
    setPreviewMode(false);
  };

  const loadIntoEditor = (entry: BlogPost) => {
    setEditingId(entry.id);
    setTitle(entry.title);
    setDescription(entry.description);
    setPillar(
      (entry.pillar && entry.pillar !== 'Technical Archive'
        ? entry.pillar
        : 'Reflections') as Exclude<JournalPillar, 'Technical Archive'>
    );
    setCoverImage(entry.coverImage || '');
    setCoverCaption(entry.coverCaption || '');
    setContent(entry.content);
    setStatus(entry.status === 'published' ? 'published' : 'draft');
    setPreviewMode(false);
    setTab('write');
  };

  const persistEntry = (targetStatus: 'draft' | 'published') => {
    if (!title.trim() || !content.trim()) {
      showToast('Please add a title and body before saving.');
      return;
    }

    const id = editingId || slugify(title) || `entry-${Date.now()}`;
    const today = new Date().toISOString().slice(0, 10);
    const nextEntry: BlogPost = {
      id,
      title: title.trim(),
      description:
        description.trim() ||
        content.trim().split('\n')[0].slice(0, 160),
      date: today,
      category: pillar,
      pillar,
      readTime: estimateReadingTime(content),
      type: 'non-tech',
      status: targetStatus,
      ...(coverImage.trim() ? { coverImage: coverImage.trim() } : {}),
      ...(coverCaption.trim() ? { coverCaption: coverCaption.trim() } : {}),
      content: content.trim(),
    };

    const existingIdx = customEntries.findIndex((e) => e.id === id);
    const updated =
      existingIdx >= 0
        ? customEntries.map((e, i) => (i === existingIdx ? nextEntry : e))
        : [nextEntry, ...customEntries];

    setCustomEntries(updated);
    saveCustomJournalEntries(updated);
    setEditingId(id);
    setStatus(targetStatus);
    showToast(
      targetStatus === 'published'
        ? 'Published to Journal (saved in browser).'
        : 'Saved privately as an unfinished draft.'
    );
  };

  const deleteCustomEntry = (id: string) => {
    const updated = customEntries.filter((e) => e.id !== id);
    setCustomEntries(updated);
    saveCustomJournalEntries(updated);
    if (editingId === id) resetEditor();
    showToast('Draft removed.');
  };

  const updateBaseOverride = (id: string, nextStatus: EntryStatus) => {
    const next = {
      ...overrides,
      [id]: { ...overrides[id], status: nextStatus },
    };
    setOverrides(next);
    saveJournalOverrides(next);
    showToast(`Updated entry status to "${nextStatus}".`);
  };

  const exportMarkdown = () => {
    const md = `---\ntitle: "${title.trim()}"\ndescription: "${description.trim()}"\npillar: "${pillar}"\ndate: "${new Date().toISOString().slice(0, 10)}"\nstatus: "${status}"\n---\n\n${content.trim()}\n`;
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${slugify(title || 'untitled-draft')}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const copyTypeScriptSnippet = () => {
    const id = editingId || slugify(title) || `entry-${Date.now()}`;
    const snippet = `{
  id: ${JSON.stringify(id)},
  title: ${JSON.stringify(title.trim())},
  description: ${JSON.stringify(description.trim())},
  date: ${JSON.stringify(new Date().toISOString().slice(0, 10))},
  category: ${JSON.stringify(pillar)},
  pillar: ${JSON.stringify(pillar)},
  readTime: ${JSON.stringify(estimateReadingTime(content))},
  type: 'non-tech',
  status: 'published',
  content: ${JSON.stringify(content.trim())}
}`;
    navigator.clipboard.writeText(snippet);
    setCopiedTs(true);
    setTimeout(() => setCopiedTs(false), 2000);
  };

  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8 space-y-10 pb-16">
      {/* Header */}
      <header className="space-y-4 border-b border-card-border pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Journal</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTab('write')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                tab === 'write'
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                  : 'border border-card-border text-zinc-600 dark:text-zinc-400'
              }`}
            >
              Write &amp; Drafts ({customEntries.length})
            </button>
            <button
              onClick={() => setTab('review')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                tab === 'review'
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                  : 'border border-card-border text-zinc-600 dark:text-zinc-400'
              }`}
            >
              Review Existing ({blogsData.length})
            </button>
          </div>
        </div>

        <div className="space-y-1">
          <h1 className="font-serif text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
            Author Writing Studio
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Save unfinished drafts privately in your browser, preview in editorial serif typography, and deliberately publish or export when ready.
          </p>
        </div>

        {feedback && (
          <div className="px-4 py-2 rounded-md bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs text-blue-800 dark:text-blue-300 font-mono">
            {feedback}
          </div>
        )}
      </header>

      {tab === 'write' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar: Private Drafts & Published Author Pieces */}
          <aside className="lg:col-span-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Your Pieces
              </span>
              <button
                onClick={resetEditor}
                className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> New Piece
              </button>
            </div>

            {customEntries.length === 0 ? (
              <div className="p-5 rounded-xl border border-dashed border-card-border text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                No private drafts saved yet. Start writing in the editor—drafts stay private until you choose to publish.
              </div>
            ) : (
              <div className="space-y-2">
                {customEntries.map((item) => (
                  <div
                    key={item.id}
                    className={`p-3.5 rounded-lg border transition-colors flex items-start justify-between gap-2 ${
                      editingId === item.id
                        ? 'border-blue-500/50 bg-blue-50/40 dark:bg-blue-500/10'
                        : 'border-card-border bg-card-bg'
                    }`}
                  >
                    <button
                      onClick={() => loadIntoEditor(item)}
                      className="text-left min-w-0 flex-1 space-y-1 cursor-pointer"
                    >
                      <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 block truncate">
                        {item.title}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 block">
                        {item.status === 'published' ? 'Published' : 'Private Draft'} · {item.pillar}
                      </span>
                    </button>
                    <button
                      onClick={() => deleteCustomEntry(item.id)}
                      aria-label="Delete draft"
                      className="p-1 text-zinc-400 hover:text-rose-600 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </aside>

          {/* Main Editor / Preview */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <span>{wordCount} words</span>
                <span>·</span>
                <span>{estimateReadingTime(content || ' ')}</span>
                <span>·</span>
                <span className="capitalize">{status}</span>
              </div>

              <button
                onClick={() => setPreviewMode((p) => !p)}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md border border-card-border bg-card-bg text-zinc-700 dark:text-zinc-300 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{previewMode ? 'Edit' : 'Preview'}</span>
              </button>
            </div>

            {!previewMode ? (
              <div className="p-6 rounded-xl border border-card-border bg-card-bg space-y-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase">
                    Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="An honest, unhurried title..."
                    className="w-full px-3.5 py-2.5 rounded-md border border-card-border bg-background font-serif text-xl text-zinc-900 dark:text-zinc-50 outline-none focus:border-blue-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase">
                      Pillar
                    </label>
                    <select
                      value={pillar}
                      onChange={(e) =>
                        setPillar(e.target.value as Exclude<JournalPillar, 'Technical Archive'>)
                      }
                      className="w-full px-3 py-2 rounded-md border border-card-border bg-background text-sm text-zinc-900 dark:text-zinc-100 outline-none focus:border-blue-600"
                    >
                      {JOURNAL_PILLARS.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase">
                      Optional Cover Image URL
                    </label>
                    <input
                      type="url"
                      value={coverImage}
                      onChange={(e) => setCoverImage(e.target.value)}
                      placeholder="https://... (only when relevant)"
                      className="w-full px-3 py-2 rounded-md border border-card-border bg-background text-sm text-zinc-900 dark:text-zinc-100 outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase">
                    Short Introduction
                  </label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="A brief, thoughtful framing sentence..."
                    className="w-full px-3.5 py-2 rounded-md border border-card-border bg-background text-sm text-zinc-900 dark:text-zinc-100 outline-none focus:border-blue-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase">
                    Body (supports ## headings, &gt; quotes/poetry, *italics*, **bold**)
                  </label>
                  <textarea
                    rows={14}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Begin with what is genuinely on your mind..."
                    className="w-full px-4 py-3 rounded-md border border-card-border bg-background text-base leading-relaxed text-zinc-900 dark:text-zinc-100 outline-none focus:border-blue-600 resize-y"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-card-border">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <button
                      onClick={() => persistEntry('draft')}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-card-border bg-background text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 cursor-pointer"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Private Draft</span>
                    </button>

                    <button
                      onClick={() => persistEntry('published')}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white text-sm font-medium cursor-pointer transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      <span>Publish Piece</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={exportMarkdown}
                      disabled={!title.trim() && !content.trim()}
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-md border border-card-border text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 disabled:opacity-40 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" /> .md
                    </button>
                    <button
                      onClick={copyTypeScriptSnippet}
                      disabled={!title.trim() && !content.trim()}
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-md border border-card-border text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 disabled:opacity-40 cursor-pointer"
                    >
                      {copiedTs ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedTs ? 'Copied' : 'db.ts'}</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Editorial Preview */
              <article className="p-8 sm:p-10 rounded-xl border border-card-border bg-card-bg space-y-6">
                <div className="space-y-3 border-b border-card-border pb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {pillar} · {estimateReadingTime(content || ' ')}
                  </span>
                  <h2 className="font-serif text-3xl font-semibold text-zinc-900 dark:text-zinc-50 leading-tight">
                    {title || 'Untitled Draft'}
                  </h2>
                  {description && (
                    <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {description}
                    </p>
                  )}
                </div>
                <div className="space-y-5 text-[17px] leading-[1.85] text-zinc-800 dark:text-zinc-200 max-w-[65ch]">
                  {(content || 'Nothing written yet.').split('\n\n').map((p, i) => (
                    <p key={i} className="whitespace-pre-line">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            )}
          </div>
        </div>
      ) : (
        /* Review Existing Preserved Entries */
        <div className="space-y-4">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            All existing articles in <code className="font-mono text-xs">src/data/db.ts</code> are preserved here. Technical dispatches are tucked into the Archive by default; you can promote, archive, hide, or clone any piece into the editor.
          </p>

          <div className="divide-y divide-card-border border-y border-card-border">
            {blogsData.map((raw) => {
              const normalized = normalizeBaseEntry(raw);
              const currentStatus = overrides[raw.id]?.status ?? normalized.status;
              return (
                <div
                  key={raw.id}
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      <FileText className="w-3.5 h-3.5" />
                      <span>{normalized.pillar}</span>
                      <span>·</span>
                      <span>{raw.date}</span>
                      <span>·</span>
                      <span className="uppercase text-blue-600 dark:text-blue-400">
                        {currentStatus}
                      </span>
                    </div>
                    <h3 className="font-serif text-base font-medium text-zinc-900 dark:text-zinc-100 truncate">
                      {raw.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => updateBaseOverride(raw.id, 'published')}
                      className={`px-2.5 py-1 rounded text-xs font-mono border cursor-pointer ${
                        currentStatus === 'published'
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400'
                          : 'border-card-border text-zinc-600 dark:text-zinc-400'
                      }`}
                    >
                      Publish
                    </button>
                    <button
                      onClick={() => updateBaseOverride(raw.id, 'archived')}
                      className={`px-2.5 py-1 rounded text-xs font-mono border cursor-pointer inline-flex items-center gap-1 ${
                        currentStatus === 'archived'
                          ? 'bg-zinc-200 dark:bg-zinc-800 border-zinc-400 text-zinc-900 dark:text-zinc-100'
                          : 'border-card-border text-zinc-600 dark:text-zinc-400'
                      }`}
                    >
                      <Archive className="w-3 h-3" /> Archive
                    </button>
                    <button
                      onClick={() => updateBaseOverride(raw.id, 'hidden')}
                      className={`px-2.5 py-1 rounded text-xs font-mono border cursor-pointer ${
                        currentStatus === 'hidden'
                          ? 'bg-rose-500/10 border-rose-500/30 text-rose-700 dark:text-rose-400'
                          : 'border-card-border text-zinc-600 dark:text-zinc-400'
                      }`}
                    >
                      Hide
                    </button>
                    <button
                      onClick={() => loadIntoEditor(normalized)}
                      className="px-2.5 py-1 rounded text-xs font-mono border border-card-border text-blue-600 dark:text-blue-400 hover:border-blue-500/40 cursor-pointer"
                    >
                      Edit Copy
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
