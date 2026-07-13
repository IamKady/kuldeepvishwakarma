export interface SearchableItem {
  id: string;
  type: 'project' | 'startup' | 'blog' | 'ai-prompt' | 'cyber-log' | 'resource';
  title: string;
  description: string;
  category: string;
  url: string;
  content: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  status: 'Active' | 'In Development' | 'Beta' | 'Concept';
  logo: string;
  technologies: string[];
  github?: string;
  live?: string;
  summary: string;
  caseStudy: {
    problem: string;
    research: string;
    planning: string;
    design: string;
    development: string;
    architecture: string;
    seo: string;
    challenges: string;
    lessons: string;
    futureRoadmap: string;
  };
}

export interface StartupLog {
  id: string;
  date: string;
  title: string;
  category: 'Mistakes' | 'Revenue' | 'Marketing' | 'SEO' | 'Failures' | 'Growth' | 'Update';
  content: string;
}

export interface StartupRoadmapItem {
  id: string;
  stage: 'Ideation' | 'Planning' | 'MVP' | 'Growth' | 'Monetization';
  task: string;
  status: 'Completed' | 'In Progress' | 'Backlog';
  details: string;
}

export interface AIPrompt {
  id: string;
  title: string;
  description: string;
  category: 'Coding' | 'Debugging' | 'SEO' | 'Copywriting' | 'Refactoring';
  prompt: string;
  systemInstruction?: string;
}

export interface ModelComparison {
  feature: string;
  gpt4o: string;
  claudeSonnet: string;
  geminiFlash: string;
  llama: string;
}

export interface CyberLog {
  id: string;
  date: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: 'CTF Writeup' | 'Networking' | 'Linux' | 'Ethical Hacking' | 'Notes';
  summary: string;
  content: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  progress: number; // 0 to 100
  status: 'Reading' | 'Completed' | 'To Read';
  category: string;
  rating?: number;
}

export interface ResourceCheatSheet {
  id: string;
  title: string;
  category: 'Git' | 'Linux' | 'Python' | 'React' | 'JS';
  commands: { cmd: string; desc: string }[];
}

// ----------------------------------------------------
// THE DATABASE
// ----------------------------------------------------

export const projectsData: Project[] = [
  {
    id: 'startupwire',
    title: 'StartupWire',
    tagline: 'The AI-Powered Tech Startup News Platform',
    status: 'Active',
    logo: '⚡',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Gemini API'],
    github: 'https://github.com/kuldeepcv/startupwire',
    live: 'https://startupwire.in',
    summary: 'A automated, SEO-optimized tech startup and AI news aggregation platform that uses AI agents to curate, summarize, and publish relevant articles.',
    caseStudy: {
      problem: "Founders and tech enthusiasts struggle to keep up with the rapid pace of startup and AI news. Traditional aggregators are cluttered, lack depth, or aren't updated frequently enough, and manually writing news summaries is incredibly time-consuming.",
      research: 'Conducted analysis of leading tech news portals (TechCrunch, Hacker News, Product Hunt). Discovered that users want concise, categorized bullet-point summaries, clear attribution to sources, fast page load speeds, and highly relevant content tagging.',
      planning: 'Designed a system divided into two parts: a Next.js frontend and a background automated node cron pipeline. The pipeline crawls verified RSS feeds, uses the Google Gemini API to extract key information and write high-quality, SEO-optimized news content, and stores it in Supabase.',
      design: 'Created a sleek, distraction-free modern interface with a focus on typography (Inter) and readability. Implemented dynamic grid card systems, visual category filters, dark mode, and an AI-generated TL;DR header for each article.',
      development: 'Developed using Next.js App Router for optimal SEO routing. Configured Supabase PostgreSQL as the primary database with caching layers for fast queries. Handled automatic meta tags, OG images, and structured JSON-LD data dynamically to boost rankings.',
      architecture: 'Client Browsers -> Next.js Edge Runtime -> Supabase DB. The crawler is a serverless worker triggering every 4 hours, analyzing articles using Gemini 1.5 Flash, ranking relevance, filtering duplicates, and saving structured outputs.',
      seo: 'Implemented clean SEO slugs, dynamic XML sitemaps, open-graph tags for social media preview, schema markup for news articles, and achieved 100/100 Lighthouse performance and SEO scores.',
      challenges: 'Handling duplicate articles from different sources and avoiding AI-hallucinated summaries. Fixed by writing a vector similarity filter to detect identical topics and fine-tuning prompt instructions to enforce absolute truthfulness with zero external facts added.',
      lessons: 'Understood the power of programmatic SEO combined with LLM content filtering. Learned how to manage structured schemas in PostgreSQL and configure Next.js cache revalidation effectively.',
      futureRoadmap: 'Integrate automated audio summaries (text-to-speech podcast), allow users to subscribe to customized daily email digests based on specific keywords, and open a public API.'
    }
  },
  {
    id: 'ai-prompt-studio',
    title: 'AI Prompt Studio',
    tagline: 'Interactive sandbox for managing and testing LLM prompts',
    status: 'Beta',
    logo: '🤖',
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'LocalStorage'],
    github: 'https://github.com/kuldeepcv/ai-prompt-studio',
    summary: 'A developer utility to curate, store, variable-inject, and copy high-performing LLM prompts for daily engineering workflows.',
    caseStudy: {
      problem: 'Developers copy-paste prompts from text files or chat histories, losing version control and variable structure.',
      research: 'Framer interfaces and developer tool checklists showed that prompt engineers need quick text variables (e.g. `{{code_snippet}}`) and syntax highlighting.',
      planning: 'Planned a client-only web app leveraging localStorage for secure, offline data storage. Focused on instant search, tags, and dynamic form fields.',
      design: 'Clean, developer-focused aesthetic using mono-spaced font grids, keyboard shortcuts (CMD+S to save), and instant copy indicators.',
      development: 'Built using React and TypeScript. Extracted variables using regex matches on double curly braces. Form fields are generated in real-time.',
      architecture: 'Single Page App -> Client LocalStorage. Highly modular React components with specialized hooks for state persistence.',
      seo: 'Static hosting on Vercel with structured meta tags for developer utilities.',
      challenges: 'Validating complex user inputs and parsing dynamic nested variables without performance lag.',
      lessons: 'Optimized state rendering by debouncing regex matching. Explored the efficiency of offline-first storage mechanics.',
      futureRoadmap: 'Enable synchronization with Supabase and Git repositories to share prompts across development teams.'
    }
  }
];

export const startupLogs: StartupLog[] = [
  {
    id: 'log-1',
    date: '2026-06-15',
    title: 'Launching StartupWire: Choosing the Tech Stack and Niche',
    category: 'Update',
    content: 'Today I officially began building StartupWire. The goal is clear: create a self-sustaining tech news platform that filters clutter. I chose Next.js because of its excellent SEO capabilities out-of-the-box and Supabase to avoid database configuration headaches. My primary niche is Tech Startups and Applied AI developments.'
  },
  {
    id: 'log-2',
    date: '2026-06-28',
    title: 'The SEO Mistake That Cost Me Initial Indexing',
    category: 'Mistakes',
    content: 'During deployment, I misconfigured the `robots.txt` file and set `Disallow: /` instead of allowing access to the root path. Google Crawler ignored the website for a week. Lesson learned: always validate SEO configurations using Google Search Console immediately after launching, even in beta.'
  },
  {
    id: 'log-3',
    date: '2026-07-05',
    title: 'Exploring Revenue Models: Micro-Sponsorships & API Access',
    category: 'Revenue',
    content: 'Instead of intrusive Google AdSense, I am exploring micro-sponsorships (e.g., text ads for developers) and charging for premium API access to aggregated, categorised startup news data. Programmatic SEO will drive the traffic needed to sustain this model.'
  },
  {
    id: 'log-4',
    date: '2026-07-10',
    title: 'Lighthouse Score 100/100: How I Achieved It',
    category: 'SEO',
    content: 'Optimized StartupWire images using Next.js `<Image />` component, set font-display swap on Google Fonts, eliminated render-blocking third-party scripts, and pre-fetched critical links. Speed is a key SEO rank factor!'
  }
];

export const startupRoadmap: StartupRoadmapItem[] = [
  { id: 'rm-1', stage: 'Ideation', task: 'Market Research & Competitor Analysis', status: 'Completed', details: 'Identify gaps in existing tech aggregators.' },
  { id: 'rm-2', stage: 'Planning', task: 'Database Schema & Crawler Spec Design', status: 'Completed', details: 'Design relational tables for news, sources, and tags.' },
  { id: 'rm-3', stage: 'MVP', task: 'AI Summary Pipeline Integration', status: 'Completed', details: 'Connect Gemini API to summarize text and assign categories.' },
  { id: 'rm-4', stage: 'MVP', task: 'Public Launch (Beta Version)', status: 'Completed', details: 'Deploy UI to Vercel and check crawler reliability.' },
  { id: 'rm-5', stage: 'Growth', task: 'Programmatic SEO & Newsletter Setup', status: 'In Progress', details: 'Build automated newsletter and improve organic indexing.' },
  { id: 'rm-6', stage: 'Monetization', task: 'Launch Micro-Sponsorship Packages', status: 'Backlog', details: 'Create visual slots for developer tools and services.' }
];

export const aiPrompts: AIPrompt[] = [
  {
    id: 'prompt-seo',
    title: 'SEO Article Writing Assistant',
    description: 'Generates SEO-friendly tech blogs with headings, metadata, and appropriate JSON-LD schema layouts.',
    category: 'SEO',
    systemInstruction: 'You are an expert tech writer and SEO specialist. Write content that is accurate, factual, readable, and highly optimized for crawlers.',
    prompt: `Act as a senior technology writer. Write a comprehensive guide on the topic: {{topic}}.
Requirements:
1. Include an H1 title and H2/H3 subheadings.
2. Provide a meta description (under 160 characters).
3. Draft the article in clean markdown.
4. Keep the tone professional, educational, and engaging.
5. List 3 key keywords to target.`
  },
  {
    id: 'prompt-refactor',
    title: 'Clean Code & Type-Safety Refactorer',
    description: 'Refactors JavaScript/TypeScript code to maximize performance, clean structure, and robust type safety.',
    category: 'Refactoring',
    systemInstruction: 'You are a principal software engineer. You value type safety, clean code principles, readability, and performance. Do not output explanations unless asked.',
    prompt: `Analyze the following code snippet and refactor it:
\`\`\`typescript
{{code_snippet}}
\`\`\`
Refactoring Rules:
- Ensure all types are explicitly defined.
- Optimize loops and asynchronous calls.
- Implement proper error handling.
- Keep helper functions modular.`
  },
  {
    id: 'prompt-ctf-analysis',
    title: 'CTF Log Decoder',
    description: 'Decodes hex/base64 representations and performs preliminary security vulnerability checks.',
    category: 'Debugging',
    systemInstruction: 'You are a cybersecurity analyst. Help analyze CTF challenge logs without giving direct flags, guiding the learning process.',
    prompt: `Analyze this log snippet:
{{log_text}}
Identify the potential vulnerability category, suggest 3 investigation commands, and describe how to avoid this threat in code.`
  }
];

export const modelComparisons: ModelComparison[] = [
  { feature: 'Primary Use Case', gpt4o: 'Complex reasoning, writing, coding', claudeSonnet: 'Deep analysis, coding, long-context tasks', geminiFlash: 'Fast speed, multimodal input, news curation', llama: 'Local self-hosted applications, privacy' },
  { feature: 'Context Window', gpt4o: '128K tokens', claudeSonnet: '200K tokens', geminiFlash: '1 Million+ tokens', llama: '8K - 128K tokens' },
  { feature: 'Speed / Cost', gpt4o: 'Medium / Premium', claudeSonnet: 'Medium / Premium', geminiFlash: 'Extremely Fast / Ultra Low Cost', llama: 'Variable (Depends on self-host hardware)' },
  { feature: 'Code Quality', gpt4o: 'Excellent (Very direct)', claudeSonnet: 'Outstanding (Best structure & comments)', geminiFlash: 'Very Good (Reliable syntax)', llama: 'Good (Requires careful prompts)' }
];

export const cyberLogs: CyberLog[] = [
  {
    id: 'cyber-1',
    date: '2026-07-02',
    title: 'Overcoming CTF challenge: SQL Injection in Login Page',
    difficulty: 'Easy',
    category: 'CTF Writeup',
    summary: 'A guide on exploiting and securing a simple bypass-auth SQL injection vulnerability in a testing framework.',
    content: `### Vulnerability Analysis
The target application used a standard query builder that directly concatenated user inputs:
\`\`\`sql
SELECT * FROM users WHERE username = '` + 'user_input' + `' AND password = '` + 'pass_input' + `';
\`\`\`

### Exploit Code
By inputting \`admin' --\` in the username field, the query resolves to:
\`\`\`sql
SELECT * FROM users WHERE username = 'admin' --' AND password = '...';
\`\`\`
The SQL comment parser ignores the password check, allowing login bypass.

### Mitigation
Always use parameterized inputs:
\`\`\`typescript
const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
db.execute(query, [username, password]);
\`\`\`
Or implement standard ORM tools like Prisma or Drizzle.`
  },
  {
    id: 'cyber-2',
    date: '2026-07-08',
    title: 'Securing Next.js APIs: Rate Limiting & JWT Practices',
    difficulty: 'Medium',
    category: 'Notes',
    summary: 'How to protect Next.js routes from brute-force attempts and securely store session payloads.',
    content: `### API Protection Guide
Next.js server actions and API routes can be easily overloaded. To prevent abuse:
1. **Implement Upstash or Redis rate-limiting** on public API routes.
2. **Never store JWTs in local storage**; use secure, HTTP-only, SameSite=Strict cookies to defend against Cross-Site Scripting (XSS).
3. **Validate inputs using Zod schemas** before handling data queries.`
  }
];

export const booksData: Book[] = [
  { id: 'b-1', title: 'The Lean Startup', author: 'Eric Ries', progress: 100, status: 'Completed', category: 'Entrepreneurship', rating: 5 },
  { id: 'b-2', title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', progress: 45, status: 'Reading', category: 'Engineering' },
  { id: 'b-3', title: 'Crafting Interpreters', author: 'Robert Nystrom', progress: 20, status: 'Reading', category: 'Programming' },
  { id: 'b-4', title: 'Zero to One', author: 'Peter Thiel', progress: 100, status: 'Completed', category: 'Entrepreneurship', rating: 4 },
  { id: 'b-5', title: 'Black Hat Python', author: 'Justin Seitz', progress: 0, status: 'To Read', category: 'Cybersecurity' }
];

export const resourceCheatSheets: ResourceCheatSheet[] = [
  {
    id: 'git-sheet',
    title: 'Git Commands Cheat Sheet',
    category: 'Git',
    commands: [
      { cmd: 'git commit --amend -m "new message"', desc: 'Modify the message of the most recent commit.' },
      { cmd: 'git reset --soft HEAD~1', desc: 'Undo the last commit while preserving changes in files.' },
      { cmd: 'git checkout -b <branch-name>', desc: 'Create and switch to a new branch.' },
      { cmd: 'git clean -fd', desc: 'Remove untracked files and directories from the working tree.' }
    ]
  },
  {
    id: 'linux-sheet',
    title: 'Linux CLI Cheat Sheet',
    category: 'Linux',
    commands: [
      { cmd: 'chmod +x script.sh', desc: 'Make a script file executable.' },
      { cmd: 'grep -rnw "/path/" -e "pattern"', desc: 'Search for text patterns recursively in a directory.' },
      { cmd: 'df -h', desc: 'Check disk space utilization in human-readable formats.' },
      { cmd: 'tar -czvf archive.tar.gz /folder', desc: 'Compress a folder into a gzip archive.' }
    ]
  }
];

export const blogsData = [
  {
    id: 'ai-news-automation',
    title: 'Building an Automated AI News Feed using Next.js & Gemini',
    description: 'A deep-dive guide on how to parse RSS feeds, run them through Google Gemini for relevance, and automatically publish posts.',
    date: '2026-07-11',
    category: 'Artificial Intelligence',
    readTime: '6 min read',
    content: 'Full description of how StartupWire AI parsing operates. By fetching RSS nodes from top blogs, comparing them using text vector distances, and formatting summaries via structured outputs, we automate tech updates with pristine accuracy...'
  },
  {
    id: 'lighthouse-score-performance',
    title: 'How to Achieve a 100 Lighthouse Performance Rating in Next.js',
    description: 'Learn the exact performance optimization techniques I used to get a perfect Lighthouse score on my portfolio and StartupWire.',
    date: '2026-07-09',
    category: 'Web Development',
    readTime: '5 min read',
    content: 'Optimizing core web vitals is key for rankings. Learn how to configure image width/height bounds, delay non-critical CSS loadings, configure Next.js fonts correctly, and use edge runtime components...'
  },
  {
    id: 'cybersecurity-developer-mindset',
    title: 'Cybersecurity Checklist for Web Developers in 2026',
    description: 'Avoid common security pitfalls like XSS, CSRF, and SQL injections by adopting secure coding habits early on.',
    date: '2026-07-04',
    category: 'Cybersecurity',
    readTime: '8 min read',
    content: 'Every developer should understand security. We discuss HTTP headers like Content-Security-Policy (CSP), validation via Zod, defense against SQL injections, and encrypting secure data...'
  }
];

// ----------------------------------------------------
// GLOBAL SEARCH INDEX GENERATION
// ----------------------------------------------------
export const searchIndex: SearchableItem[] = [
  // Project Entries
  ...projectsData.map(p => ({
    id: p.id,
    type: 'project' as const,
    title: p.title,
    description: p.tagline,
    category: 'Projects',
    url: `/projects#${p.id}`,
    content: `${p.title} ${p.tagline} ${p.summary} ${p.technologies.join(' ')} ${p.caseStudy.problem} ${p.caseStudy.development}`
  })),
  // Startup Entries
  ...startupLogs.map(l => ({
    id: l.id,
    type: 'startup' as const,
    title: l.title,
    description: `Founder Log (${l.category}) - ${l.date}`,
    category: 'Startup Journal',
    url: `/startups#${l.id}`,
    content: `${l.title} ${l.category} ${l.content}`
  })),
  // AI Prompts
  ...aiPrompts.map(pr => ({
    id: pr.id,
    type: 'ai-prompt' as const,
    title: pr.title,
    description: pr.description,
    category: 'AI Lab',
    url: `/ai-lab#${pr.id}`,
    content: `${pr.title} ${pr.description} ${pr.category} ${pr.prompt}`
  })),
  // Cyber Logs
  ...cyberLogs.map(c => ({
    id: c.id,
    type: 'cyber-log' as const,
    title: c.title,
    description: `Security Log (${c.category}) - ${c.difficulty}`,
    category: 'Cybersecurity',
    url: `/cybersecurity#${c.id}`,
    content: `${c.title} ${c.category} ${c.summary} ${c.content}`
  })),
  // Resource Sheets
  ...resourceCheatSheets.map(s => ({
    id: s.id,
    type: 'resource' as const,
    title: s.title,
    description: `Developer Resource (${s.category})`,
    category: 'Resources',
    url: `/resources#${s.id}`,
    content: `${s.title} ${s.category} ${s.commands.map(cmd => cmd.cmd + ' ' + cmd.desc).join(' ')}`
  })),
  // Blog entries
  ...blogsData.map(b => ({
    id: b.id,
    type: 'blog' as const,
    title: b.title,
    description: b.description,
    category: 'Blog',
    url: `/blog#${b.id}`,
    content: `${b.title} ${b.description} ${b.category} ${b.content}`
  }))
];
