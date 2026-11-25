import { NextResponse } from 'next/server';
import {
  projectsData,
  blogsData,
  aiPrompts,
  startupLogs,
  researchNotes,
  openSourceContributions,
  cyberLogs,
} from '@/data/db';

export async function GET() {
  const uniqueTechnologies = new Set<string>();
  let lighthouseSum = 0;
  let lighthouseCount = 0;

  for (const project of projectsData) {
    for (const tech of project.technologies) {
      uniqueTechnologies.add(tech);
    }
    if (project.metrics) {
      const avg =
        (project.metrics.performance +
          project.metrics.accessibility +
          project.metrics.bestPractices +
          project.metrics.seo) /
        4;
      lighthouseSum += avg;
      lighthouseCount += 1;
    }
  }

  const payload = {
    status: 'operational',
    lastUpdated: '2026-11-25',
    counts: {
      projects: projectsData.length,
      clientWork: projectsData.filter((p) => p.categoryTag === 'Client Work').length,
      blogs: blogsData.length,
      aiPrompts: aiPrompts.length,
      startupLogs: startupLogs.length,
      researchNotes: researchNotes.length,
      openSourcePRs: openSourceContributions.length,
      cyberLogs: cyberLogs.length,
      uniqueTechnologies: uniqueTechnologies.size,
    },
    benchmarks: {
      avgLighthouseScore:
        lighthouseCount > 0 ? Number((lighthouseSum / lighthouseCount).toFixed(1)) : 100,
    },
  };

  return NextResponse.json(payload, {
    headers: {
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
    },
  });
}
