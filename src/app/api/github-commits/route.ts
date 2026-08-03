import { NextResponse } from 'next/server';

export interface RealCommitItem {
  commit: string;
  branch: string;
  event: string;
  size: string;
  status: string;
  time: string;
  rawDate: string;
  url: string;
}

// Default fallback list of actual production commits for offline/rate-limited fallback
const staticRealCommits: RealCommitItem[] = [
  {
    commit: 'b9cdda2',
    branch: 'main',
    event: 'fix(layout): fix footer positioning and eliminate bottom viewport overflow whitespace',
    size: '142 kB',
    status: 'success',
    time: 'Recently',
    rawDate: new Date().toISOString(),
    url: 'https://github.com/IamKady/kuldeepvishwakarma/commit/b9cdda25925320de4adb74f4672a614f8f480f37'
  },
  {
    commit: '8eeaeed',
    branch: 'main',
    event: 'fix(theme): overhaul light mode contrast across all subpages',
    size: '142 kB',
    status: 'success',
    time: 'Today',
    rawDate: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    url: 'https://github.com/IamKady/kuldeepvishwakarma/commit/8eeaeedf77706786378c58a23ad5deb8eacbd3d5'
  },
  {
    commit: '5fc4616',
    branch: 'main',
    event: 'fix(theme): remove hardcoded dark panel backgrounds and fix light mode contrast',
    size: '141 kB',
    status: 'success',
    time: 'Today',
    rawDate: new Date(Date.now() - 40 * 60 * 1000).toISOString(),
    url: 'https://github.com/IamKady/kuldeepvishwakarma/commit/5fc4616b0c86261dbc76bd2e5682e2bb6fc230b9'
  },
  {
    commit: '1ea7a9f',
    branch: 'main',
    event: 'fix(theme): overhaul light mode styling, typography contrast, and Tailwind 4 dark variants',
    size: '140 kB',
    status: 'success',
    time: 'Today',
    rawDate: new Date(Date.now() - 50 * 60 * 1000).toISOString(),
    url: 'https://github.com/IamKady/kuldeepvishwakarma/commit/1ea7a9fc7b6d18863526830e236c7921c9eceae0'
  },
  {
    commit: 'b64c3c2',
    branch: 'main',
    event: 'feat: swap AI Prompt Studio with AIToolsWebsite project case study, resume, and terminal commands',
    size: '139 kB',
    status: 'success',
    time: '18 days ago',
    rawDate: '2026-07-17T08:29:24Z',
    url: 'https://github.com/IamKady/kuldeepvishwakarma/commit/b64c3c277b8f702a3bc260567bfecc828272fe7e'
  },
  {
    commit: '4049c5a',
    branch: 'main',
    event: 'feat: integrate Bookperia project case study, resume, page schema, and terminal commands',
    size: '138 kB',
    status: 'success',
    time: '18 days ago',
    rawDate: '2026-07-17T08:16:17Z',
    url: 'https://github.com/IamKady/kuldeepvishwakarma/commit/4049c5adb136d4e741ac71f64e48440347b2af81'
  },
  {
    commit: '26a6983',
    branch: 'main',
    event: 'feat: integrate Vercel Analytics and Speed Insights',
    size: '137 kB',
    status: 'success',
    time: '18 days ago',
    rawDate: '2026-07-17T02:42:24Z',
    url: 'https://github.com/IamKady/kuldeepvishwakarma/commit/26a6983c5578f4a637b0a8553320f99f5454ab80'
  },
  {
    commit: '1178ecb',
    branch: 'main',
    event: 'seo: add full OpenGraph, Twitter cards, canonical URLs, OG image, and enhanced robots/sitemap for 100 SEO score',
    size: '135 kB',
    status: 'success',
    time: '19 days ago',
    rawDate: '2026-07-16T06:49:52Z',
    url: 'https://github.com/IamKady/kuldeepvishwakarma/commit/1178ecb7aecfc9b5a65c5a0ef865582405d6cdb2'
  }
];

function getRelativeTime(dateString: string): string {
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} mins ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`;
    return `${Math.floor(diffInSeconds / 2592000)} months ago`;
  } catch {
    return 'Recently';
  }
}

export async function GET() {
  try {
    const res = await fetch('https://api.github.com/repos/IamKady/kuldeepvishwakarma/commits?per_page=15', {
      headers: {
        'User-Agent': 'KuldeepVishwakarma-Portfolio',
        'Accept': 'application/vnd.github.v3+json'
      },
      next: { revalidate: 60 } // Revalidate every 60 seconds
    });

    if (!res.ok) {
      return NextResponse.json({ commits: staticRealCommits, live: false });
    }

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) {
      return NextResponse.json({ commits: staticRealCommits, live: false });
    }

    const liveCommits: RealCommitItem[] = data.map((item: any, index: number) => {
      const sha = item.sha ? item.sha.substring(0, 7) : 'main';
      const rawMessage = item.commit?.message || 'Production update';
      const titleLine = rawMessage.split('\n')[0];
      const dateStr = item.commit?.author?.date || new Date().toISOString();
      const relative = getRelativeTime(dateStr);
      const url = item.html_url || `https://github.com/IamKady/kuldeepvishwakarma/commit/${sha}`;
      const estimatedSize = `${142 - index} kB`;

      return {
        commit: sha,
        branch: 'main',
        event: titleLine,
        size: estimatedSize,
        status: 'success',
        time: relative,
        rawDate: dateStr,
        url: url
      };
    });

    return NextResponse.json({ commits: liveCommits, live: true });
  } catch (error) {
    console.error('Failed to fetch real-time GitHub commits from API:', error);
    return NextResponse.json({ commits: staticRealCommits, live: false });
  }
}
