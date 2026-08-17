import { NextResponse } from 'next/server';

export interface GitHubRepoItem {
  name: string;
  fullName: string;
  url: string;
  description: string | null;
  stars: number;
  forks: number;
  language: string | null;
  updatedAt: string;
  pushedAt?: string;
  topics: string[];
  openIssues: number;
  cloneUrl: string;
  defaultBranch: string;
  isFork: boolean;
  homepage?: string | null;
}

// Complete offline fallback dataset for IamKady's 10 public GitHub repositories
export const fallbackRepositories: GitHubRepoItem[] = [
  {
    name: 'kuldeepvishwakarma',
    fullName: 'IamKady/kuldeepvishwakarma',
    url: 'https://github.com/IamKady/kuldeepvishwakarma',
    description: 'Personal Developer Portfolio Operating System built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4.',
    stars: 0,
    forks: 0,
    language: 'TypeScript',
    updatedAt: '2026-08-12T09:01:29Z',
    pushedAt: '2026-08-12T08:58:57Z',
    topics: ['nextjs', 'react', 'typescript', 'tailwindcss', 'portfolio'],
    openIssues: 0,
    cloneUrl: 'https://github.com/IamKady/kuldeepvishwakarma.git',
    defaultBranch: 'main',
    isFork: false,
    homepage: 'https://kuldeepvishwakarma.com/'
  },
  {
    name: 'ALBERTQUIZBOT',
    fullName: 'IamKady/ALBERTQUIZBOT',
    url: 'https://github.com/IamKady/ALBERTQUIZBOT',
    description: 'Interactive Telegram Quiz Bot for study groups, automated practice polls, instant scoring, and scheduled delivery.',
    stars: 0,
    forks: 0,
    language: 'Python',
    updatedAt: '2026-08-05T16:55:37Z',
    pushedAt: '2026-08-05T16:55:27Z',
    topics: ['python', 'telegram-bot', 'asyncio', 'quiz-bot', 'ai'],
    openIssues: 0,
    cloneUrl: 'https://github.com/IamKady/ALBERTQUIZBOT.git',
    defaultBranch: 'main',
    isFork: false,
    homepage: null
  },
  {
    name: 'aitoolswebsite',
    fullName: 'IamKady/aitoolswebsite',
    url: 'https://github.com/IamKady/aitoolswebsite',
    description: 'AI Tools discovery, comparison, and review library with relational search, Clerk authentication, and Prisma PostgreSQL.',
    stars: 0,
    forks: 0,
    language: 'TypeScript',
    updatedAt: '2026-07-17T11:39:39Z',
    pushedAt: '2026-07-17T11:39:29Z',
    topics: ['nextjs', 'ai-tools', 'prisma', 'postgresql', 'clerk'],
    openIssues: 0,
    cloneUrl: 'https://github.com/IamKady/aitoolswebsite.git',
    defaultBranch: 'main',
    isFork: false,
    homepage: 'https://aitoolswebsite-psi.vercel.app/'
  },
  {
    name: 'AI-agent-for-social-media-database',
    fullName: 'IamKady/AI-agent-for-social-media-database',
    url: 'https://github.com/IamKady/AI-agent-for-social-media-database',
    description: 'Autonomous AI agent system designed to scrape social media metrics, process unstructured text, generate embeddings, and persist in database.',
    stars: 0,
    forks: 0,
    language: 'Python',
    updatedAt: '2026-07-03T08:45:33Z',
    pushedAt: '2026-07-03T08:45:29Z',
    topics: ['ai-agent', 'python', 'social-media', 'database', 'llm'],
    openIssues: 0,
    cloneUrl: 'https://github.com/IamKady/AI-agent-for-social-media-database.git',
    defaultBranch: 'main',
    isFork: false,
    homepage: null
  },
  {
    name: 'GATE-and-CSE-Resources-for-Students',
    fullName: 'IamKady/GATE-and-CSE-Resources-for-Students',
    url: 'https://github.com/IamKady/GATE-and-CSE-Resources-for-Students',
    description: '📚 Comprehensive CSE GATE Resources & subject guides for GATE and CSE Aspirants (OS, DBMS, Networks, DSA, TOC).',
    stars: 0,
    forks: 0,
    language: 'Markdown',
    updatedAt: '2024-04-24T19:28:33Z',
    pushedAt: '2024-02-12T06:07:07Z',
    topics: ['gate-cse', 'computer-science', 'dsa', 'operating-systems', 'dbms'],
    openIssues: 0,
    cloneUrl: 'https://github.com/IamKady/GATE-and-CSE-Resources-for-Students.git',
    defaultBranch: 'master',
    isFork: true,
    homepage: ''
  },
  {
    name: 'The-C-20-Masterclass-Source-Code',
    fullName: 'IamKady/The-C-20-Masterclass-Source-Code',
    url: 'https://github.com/IamKady/The-C-20-Masterclass-Source-Code',
    description: 'Modern C++20 Systems Programming source code, low-level memory labs, concepts, coroutines, and template metaprogramming.',
    stars: 0,
    forks: 0,
    language: 'C++',
    updatedAt: '2024-04-18T18:22:39Z',
    pushedAt: '2024-04-18T18:22:33Z',
    topics: ['cpp20', 'systems-programming', 'memory-management', 'coroutines'],
    openIssues: 0,
    cloneUrl: 'https://github.com/IamKady/The-C-20-Masterclass-Source-Code.git',
    defaultBranch: 'main',
    isFork: true,
    homepage: 'https://www.udemy.com/course/the-modern-cpp-20-masterclass/'
  },
  {
    name: 'HTML-COMPLETE',
    fullName: 'IamKady/HTML-COMPLETE',
    url: 'https://github.com/IamKady/HTML-COMPLETE',
    description: 'Exhaustive reference and practice guide covering complete semantic HTML5 structure, accessibility standards, and web document architecture.',
    stars: 0,
    forks: 0,
    language: 'HTML',
    updatedAt: '2024-05-03T19:30:13Z',
    pushedAt: '2024-05-03T19:30:11Z',
    topics: ['html5', 'semantic-web', 'accessibility', 'web-standards'],
    openIssues: 0,
    cloneUrl: 'https://github.com/IamKady/HTML-COMPLETE.git',
    defaultBranch: 'main',
    isFork: false,
    homepage: null
  },
  {
    name: 'CSS',
    fullName: 'IamKady/CSS',
    url: 'https://github.com/IamKady/CSS',
    description: 'Modern CSS styling architecture, responsive design patterns, CSS Grid, Flexbox, custom properties, and micro-animations.',
    stars: 0,
    forks: 0,
    language: 'CSS',
    updatedAt: '2024-05-03T19:22:49Z',
    pushedAt: '2024-05-03T19:22:46Z',
    topics: ['css3', 'flexbox', 'css-grid', 'responsive-design'],
    openIssues: 0,
    cloneUrl: 'https://github.com/IamKady/CSS.git',
    defaultBranch: 'main',
    isFork: false,
    homepage: null
  },
  {
    name: 'git-hub-demo',
    fullName: 'IamKady/git-hub-demo',
    url: 'https://github.com/IamKady/git-hub-demo',
    description: 'Git and GitHub foundations demo repository exploring branch workflows, commit history, and remote tracking.',
    stars: 0,
    forks: 0,
    language: 'Git',
    updatedAt: '2024-05-30T18:48:18Z',
    pushedAt: '2024-05-30T18:48:15Z',
    topics: ['git', 'version-control', 'demo'],
    openIssues: 0,
    cloneUrl: 'https://github.com/IamKady/git-hub-demo.git',
    defaultBranch: 'main',
    isFork: false,
    homepage: null
  },
  {
    name: 'html',
    fullName: 'IamKady/html',
    url: 'https://github.com/IamKady/html',
    description: 'Experimental HTML sandbox and core web document structure test repository.',
    stars: 0,
    forks: 0,
    language: 'HTML',
    updatedAt: '2024-04-09T10:15:07Z',
    pushedAt: '2024-04-09T10:15:07Z',
    topics: ['html', 'test', 'sandbox'],
    openIssues: 0,
    cloneUrl: 'https://github.com/IamKady/html.git',
    defaultBranch: 'main',
    isFork: false,
    homepage: null
  }
];

export async function GET() {
  try {
    const res = await fetch('https://api.github.com/users/IamKady/repos?per_page=100&sort=updated', {
      headers: {
        'User-Agent': 'KuldeepVishwakarma-Portfolio',
        'Accept': 'application/vnd.github.v3+json'
      },
      next: { revalidate: 300 } // Revalidate cache every 5 minutes
    });

    if (!res.ok) {
      console.warn(`GitHub API returned status ${res.status}, using static fallback`);
      return NextResponse.json({ repos: fallbackRepositories, live: false, totalCount: fallbackRepositories.length });
    }

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) {
      return NextResponse.json({ repos: fallbackRepositories, live: false, totalCount: fallbackRepositories.length });
    }

    const repos: GitHubRepoItem[] = data.map((repo: any) => ({
      name: repo.name,
      fullName: repo.full_name,
      url: repo.html_url,
      description: repo.description || null,
      stars: repo.stargazers_count || 0,
      forks: repo.forks_count || 0,
      language: repo.language || null,
      updatedAt: repo.updated_at,
      pushedAt: repo.pushed_at,
      topics: repo.topics || [],
      openIssues: repo.open_issues_count || 0,
      cloneUrl: repo.clone_url || `https://github.com/${repo.full_name}.git`,
      defaultBranch: repo.default_branch || 'main',
      isFork: repo.fork || false,
      homepage: repo.homepage || null
    }));

    return NextResponse.json(
      { repos, live: true, totalCount: repos.length },
      { headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' } }
    );
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return NextResponse.json(
      { repos: fallbackRepositories, live: false, totalCount: fallbackRepositories.length },
      { headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' } }
    );
  }
}
