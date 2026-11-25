import { blogsData, BlogPost, JournalPillar } from '@/data/db';

export const JOURNAL_PILLARS: {
  id: Exclude<JournalPillar, 'Technical Archive'>;
  label: string;
  description: string;
}[] = [
  {
    id: 'Reflections',
    label: 'Reflections',
    description: 'Personal experiences, quiet mornings, and lessons lived firsthand.',
  },
  {
    id: 'Philosophy',
    label: 'Philosophy',
    description: 'Existential questions, meaning, ethics, and examined assumptions.',
  },
  {
    id: 'Society & People',
    label: 'Society & People',
    description: 'Human behaviour, relationships, culture, and how we live together.',
  },
  {
    id: 'Literature & Poetry',
    label: 'Literature & Poetry',
    description: 'Books, verse, language, and passages worth lingering over.',
  },
  {
    id: 'Perspectives',
    label: 'Perspectives',
    description: 'Contemporary events interpreted through an independent personal lens.',
  },
  {
    id: 'Notes & Fragments',
    label: 'Notes & Fragments',
    description: 'Open questions, fleeting observations, and unfinished thoughts.',
  },
  {
    id: 'Growth & Learning',
    label: 'Growth & Learning',
    description: 'Uncertainty, curiosity, transitions, and learning without pretense.',
  },
];

const CUSTOM_ENTRIES_KEY = 'kcv_journal_entries_v1';
const OVERRIDES_KEY = 'kcv_journal_overrides_v1';

export type EntryStatus = 'published' | 'draft' | 'archived' | 'hidden';

export interface JournalOverride {
  status?: EntryStatus;
  pillar?: JournalPillar;
  featured?: boolean;
}

export function estimateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export function normalizeBaseEntry(post: BlogPost): BlogPost & {
  pillar: JournalPillar;
  status: EntryStatus;
} {
  const defaultStatus: EntryStatus =
    post.status || (post.type === 'tech' ? 'archived' : 'published');
  const defaultPillar: JournalPillar =
    post.pillar || (post.type === 'tech' ? 'Technical Archive' : 'Reflections');

  return {
    ...post,
    pillar: defaultPillar,
    status: defaultStatus,
  };
}

export function loadCustomJournalEntries(): BlogPost[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(CUSTOM_ENTRIES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveCustomJournalEntries(entries: BlogPost[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CUSTOM_ENTRIES_KEY, JSON.stringify(entries));
}

export function loadJournalOverrides(): Record<string, JournalOverride> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(OVERRIDES_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

export function saveJournalOverrides(overrides: Record<string, JournalOverride>): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(OVERRIDES_KEY, JSON.stringify(overrides));
}

export function getMergedJournalEntries(): Array<
  BlogPost & { pillar: JournalPillar; status: EntryStatus; isCustom?: boolean }
> {
  const custom = loadCustomJournalEntries().map((entry) => ({
    ...normalizeBaseEntry(entry),
    isCustom: true,
  }));
  const overrides = loadJournalOverrides();

  const base = blogsData.map((post) => {
    const normalized = normalizeBaseEntry(post);
    const ov = overrides[post.id];
    if (!ov) return normalized;
    return {
      ...normalized,
      status: ov.status ?? normalized.status,
      pillar: ov.pillar ?? normalized.pillar,
      category: ov.pillar ?? normalized.category,
      featured: ov.featured ?? normalized.featured,
    };
  });

  // Custom entries override base entries if they share an id
  const customIds = new Set(custom.map((c) => c.id));
  const merged = [...custom, ...base.filter((b) => !customIds.has(b.id))];

  return merged.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
