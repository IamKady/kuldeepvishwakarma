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
  topics: string[];
  openIssues: number;
}

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
      console.warn(`GitHub API returned status ${res.status}`);
      return NextResponse.json({ repos: [], live: false });
    }

    const data = await res.json();
    if (!Array.isArray(data)) {
      return NextResponse.json({ repos: [], live: false });
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
      topics: repo.topics || [],
      openIssues: repo.open_issues_count || 0
    }));

    return NextResponse.json({ repos, live: true });
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return NextResponse.json({ repos: [], live: false });
  }
}
