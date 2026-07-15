export interface SearchableItem {
  id: string;
  type: 'project' | 'startup' | 'blog' | 'ai-prompt' | 'cyber-log' | 'resource' | 'architecture' | 'research';
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
    overview: string;
    problem: string;
    research: string;
    targetUsers: string;
    planning: string;
    design: string;
    architectureDiagram: string;
    databaseSpecs: string;
    authenticationFlow: string;
    securityProtocols: string;
    seoOptimization: string;
    performanceTuning: string;
    development: string;
    architecture: string;
    seo: string;
    challenges: string;
    tradeOffs: string;
    lessons: string;
    futureRoadmap: string;
    timeline: string;
  };
  metrics?: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
    loadTimeMs: number;
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
  latencyMs?: number;
  tokensUsed?: number;
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
  notes?: string;
  rating?: number;
}

export interface ResourceCheatSheet {
  id: string;
  title: string;
  category: 'Git' | 'Linux' | 'Python' | 'React' | 'JS';
  commands: { cmd: string; desc: string }[];
}

export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  details: string[];
  category: 'work' | 'education' | 'projects' | 'achievements' | 'transition';
}

export interface OpenSourceContribution {
  id: string;
  repoName: string;
  repoUrl: string;
  prTitle: string;
  prUrl: string;
  description: string;
  status: 'Merged' | 'Open' | 'Closed';
  impact: string;
}

export interface SystemArchitecture {
  id: string;
  title: string;
  description: string;
  diagram: string;
  components: { name: string; role: string; tech: string }[];
  rationale: string;
}

export interface ResearchNote {
  id: string;
  title: string;
  date: string;
  category: 'Distributed Systems' | 'AI Curation' | 'Cryptographic Protocols' | 'Security';
  abstract: string;
  content: string;
}

// ----------------------------------------------------
// THE DATABASE
// ----------------------------------------------------

export const projectsData: Project[] = [
  {
    id: 'startupwire',
    title: 'StartupWire',
    tagline: 'The Autonomous AI-Powered Tech Startup News Platform',
    status: 'Active',
    logo: '⚡',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Gemini API', 'PostgreSQL'],
    github: 'https://github.com/IamKady/startupwire',
    live: 'https://startupwire.in',
    summary: 'An automated, SEO-optimized tech startup and AI news aggregation platform that uses background agents to crawl RSS feeds, run deduplication, parse summaries, and deploy updates.',
    caseStudy: {
      overview: 'StartupWire was designed to solve the clutter and human latencies in modern startup news curation. By utilizing Google\'s Gemini API to filter noise and programmatically index relevant articles, StartupWire achieves automated, high-quality publication with zero human intervention.',
      problem: 'Founders, developers, and investors face information overload. Major news portals are often slow to report niche updates, manually summarizing tech breakthroughs is extremely time-consuming, and programmatic content engines typically lack human-like verification or produce repetitive, duplicate topics.',
      research: 'Audited Hacker News, TechCrunch, and Product Hunt. Found that users demand bulleted key points, direct attribution links to sources, lightning-fast pages loads, and automatic topic categorization. Discovered that 70% of tech blogs write about the same press release, making content deduplication a high priority.',
      targetUsers: 'Founders wanting rapid summaries, investors scouting raw updates, and software engineers seeking high-quality developer resources.',
      planning: 'Designed a dual-layer architecture: A Next.js App Router front-end deploying to Vercel Edge Cache, and a serverless backend cron schedule crawling 40+ verified feeds, extracting nodes, performing vector distance calculations, and storing records in Supabase PostgreSQL.',
      design: 'Drafted a high-contrast developer terminal layout with micro-animations. Optimized layouts for strict typographic hierarchy using the Geist font family and CSS grid adapters.',
      architectureDiagram: `
+------------------+     +------------------------+     +-------------------+
|  RSS Feed Nodes  | --> | Node.js Scraper Worker | --> | Gemini 1.5 Flash  |
| (Tech Crunch, HN)|     | (Extract Content/URL)  |     | (Topic Curation)  |
+------------------+     +------------------------+     +-------------------+
                                                                  |
                                                                  v
+------------------+     +------------------------+     +-------------------+
|   Client App     | <-- | Supabase PG (RLS Node) | <-- | Vector Distance   |
| (Edge Cached V4) |     |  (Structured JSON)     |     | (Deduplication)   |
+------------------+     +------------------------+     +-------------------+
      `,
      databaseSpecs: 'Supabase PostgreSQL. Structured schemas for articles, feed sources, and tags. Integrated a pgvector module to generate text embeddings for article titles, enabling strict cosine similarity lookups to prevent duplicate publication.',
      authenticationFlow: 'JWT-based Supabase authentication client session handling for private moderation dashboard endpoints, ensuring zero administrative leaks.',
      securityProtocols: 'Configured strict Content Security Policies (CSP), HTTP-only SameSite cookies, input data schemas sanitization via Zod validators, and granular PostgreSQL Row Level Security (RLS) policies.',
      seoOptimization: 'Programmatic SEO framework. Dynamic sitemap generation, structured JSON-LD NewsArticle schemas, localized meta-descriptions (<160 chars), custom og:image layouts, and clean routing slugs.',
      performanceTuning: 'Next.js edge middleware router, font-display swap bindings, delayed script injections for non-critical telemetry, image size optimizations. Achieved a perfect 100/100 Lighthouse performance and SEO score.',
      development: 'Developed from scratch using React 19 and Next.js App Router. Configured modular database triggers inside Supabase to handle search indices synchronously when new posts are crawled.',
      architecture: 'Client Edge Network -> Next.js Runtime (Vercel) -> Supabase PostgreSQL. Background daemon process executes crons every 4 hours, filtering noise and publishing in <2.4 seconds.',
      seo: 'Structured semantic markup with unified canonical anchors and automated JSON-LD schemas.',
      challenges: 'LLM Hallucinations and duplicate feeds. Solved by writing strict system instructions for the Gemini model, validating JSON output formatting, and maintaining vector indexes to filter duplicate topics.',
      tradeOffs: 'Chose a relational DB (Supabase) instead of a NoSQL database to enforce schema-level integrity, accepting minor load overhead for absolute relational confidence.',
      lessons: ' Programmatic SEO combined with structured LLM pipelines yields high-leverage SaaS products. Mastered edge cache revalidation schedules.',
      futureRoadmap: 'Implement text-to-speech podcasts for newsletter subscribers and expose a developer API endpoint.',
      timeline: 'Mar 2026 - Jun 2026 (4 Months)'
    },
    metrics: {
      performance: 100,
      accessibility: 99,
      bestPractices: 100,
      seo: 100,
      loadTimeMs: 180
    }
  },
  {
    id: 'ai-prompt-studio',
    title: 'AI Prompt Studio',
    tagline: 'Developer sandbox for optimizing and versioning LLM prompts',
    status: 'Beta',
    logo: '🤖',
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'LocalStorage', 'Framer Motion'],
    github: 'https://github.com/IamKady/ai-prompt-studio',
    summary: 'A secure, offline-first client application that allows developers to write, version-control, variable-inject, and validate LLM prompt templates.',
    caseStudy: {
      overview: 'AI Prompt Studio is a developer utility solving prompt management issues. It allows prompt engineers to save structured prompts, version them, inject dynamic variables (e.g. `{{code_snippet}}`), and run instant tests, saving local variables securely.',
      problem: 'Prompt developers often store prompts in disorganized text files or lose them in chat histories. Additionally, testing prompt performance across variables requires tedious copy-pasting, causing workflow lag and poor version control.',
      research: 'Interviewed 12 full-stack engineers. Identified that version logs, dynamic input fields generated in real-time, and one-click copy buttons are critical to optimizing productivity.',
      targetUsers: 'AI Prompt Engineers, Software Developers, and Technical Content Creators.',
      planning: 'Designed a React SPA utilizing Vite for instant compiling. Leveraged browser local storage for complete security, ensuring no prompt payload ever leaves the client machine unless explicitly exported.',
      design: 'Monospaced visual layouts using high-contrast borders and keyboard shortcuts (e.g., Ctrl+S to save prompt nodes).',
      architectureDiagram: `
+-------------------------+     +-------------------------+
| Developer Web UI        | --> | Input Parsing Hooks     |
| (React 19 & Vite SPA)   |     | (Double Curly Regex)    |
+-------------------------+     +-------------------------+
             ^                               |
             |                               v
+-------------------------+     +-------------------------+
| Client Export Configurations| | LocalStorage Engine   |
| (JSON / YAML payload)   | <-- | (Secure Offline DB)     |
+-------------------------+     +-------------------------+
      `,
      databaseSpecs: 'IndexedDB wrapper for local browser storage, syncing variable matrices asynchronously without main thread locks.',
      authenticationFlow: 'Offline utility with client-side configuration. Optional Supabase auth for remote team sync in the roadmap.',
      securityProtocols: 'Zero server dependencies, strict sandboxed iframe execution for user templates, and automated sanitization of variables.',
      seoOptimization: 'Standard single-page app metadata, pre-compiled static routes, and microdata schemas.',
      performanceTuning: 'Debounced inputs for variable parsing regex, memoized component trees to prevent render lag during large prompt inputs.',
      development: 'Created using React hooks. Configured custom regex analyzers that scan prompt strings for `{{variable}}` patterns and immediately generate input elements.',
      architecture: 'Client-Side SPA. Built with Vite and TypeScript, served via static CDN edge nodes.',
      seo: 'Meta tag schemas designed for developer utilities and tools.',
      challenges: 'Handling large documents inside regex parsers without UI freezing. Solved by writing web workers for parser offloading.',
      tradeOffs: 'Opted for LocalStorage instead of a cloud database to ensure maximum developer data privacy, sacrificing multi-device sync until beta completion.',
      lessons: 'Optimizing client-side rendering pathways with React Memo saves execution time. Understood the value of offline-first design.',
      futureRoadmap: 'Connect to remote Git repositories to pull and push prompt revisions collaboratively.',
      timeline: 'May 2026 - Present (Active Beta)'
    },
    metrics: {
      performance: 99,
      accessibility: 100,
      bestPractices: 98,
      seo: 92,
      loadTimeMs: 95
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
5. List 3 key keywords to target.`,
    latencyMs: 1420,
    tokensUsed: 890
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
- Keep helper functions modular.`,
    latencyMs: 1850,
    tokensUsed: 1240
  },
  {
    id: 'prompt-ctf-analysis',
    title: 'CTF Log Decoder',
    description: 'Decodes hex/base64 representations and performs preliminary security vulnerability checks.',
    category: 'Debugging',
    systemInstruction: 'You are a cybersecurity analyst. Help analyze CTF challenge logs without giving direct flags, guiding the learning process.',
    prompt: `Analyze this log snippet:
{{log_text}}
Identify the potential vulnerability category, suggest 3 investigation commands, and describe how to avoid this threat in code.`,
    latencyMs: 980,
    tokensUsed: 620
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
  { id: 'b-1', title: 'The Lean Startup', author: 'Eric Ries', progress: 100, status: 'Completed', category: 'Entrepreneurship', rating: 5, notes: 'A blueprint for rapid iteration and validate-first architectures.' },
  { id: 'b-2', title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', progress: 48, status: 'Reading', category: 'Engineering', notes: 'Mastering the trade-offs of partitioning, replication schemas, and transactional boundaries.' },
  { id: 'b-3', title: 'Crafting Interpreters', author: 'Robert Nystrom', progress: 25, status: 'Reading', category: 'Programming', notes: 'Building a tree-walk interpreter from scratch, learning lexical analysis and scoping.' },
  { id: 'b-4', title: 'Zero to One', author: 'Peter Thiel', progress: 100, status: 'Completed', category: 'Entrepreneurship', rating: 4, notes: 'The engineering perspective of monopoly-building and proprietary leverage.' },
  { id: 'b-5', title: 'Black Hat Python', author: 'Justin Seitz', progress: 10, status: 'Reading', category: 'Cybersecurity', notes: 'Writing network sniffers and basic post-exploitation payloads offline.' }
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

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: 'time-present',
    year: '2025 – Present',
    title: 'MSc Computer Science & Startup Builder',
    organization: 'Self & University',
    description: 'Pursuing academic research in distributed architectures while building scalable digital products.',
    category: 'work',
    details: [
      'Engineered StartupWire.in: Crawling system publishing aggregated articles with programmatic SEO and 100/100 Lighthouse rating.',
      'Diving deep into Artificial Intelligence APIs, vector search databases, and JWT API security safeguards.',
      'Studying advanced distributed system paradigms and networking protocols.'
    ]
  },
  {
    id: 'time-btech',
    year: '2022 – 2025',
    title: 'B.Tech in Computer Science & Engineering',
    organization: 'Dr. A.P.J. Abdul Kalam Technical University',
    description: 'Transitioned fully into computer science, completing coursework in database indexing, systems programming, and compilers.',
    category: 'education',
    details: [
      'Graduated with honors (7.29 CGPA). Deployed freelance MERN stack web nodes for global startup clients.',
      'Wrote Python data analyzers and automated shell integration scripts.',
      'Completed project audits on SQL Injection pathways and server protection checklists.'
    ]
  },
  {
    id: 'time-civil',
    year: '2019 – 2022',
    title: 'Diploma in Civil Engineering',
    organization: 'Technical Board',
    description: 'Completed structural physics training. Learned to draft structural blueprints and coordinate physical logistics.',
    category: 'transition',
    details: [
      'Acquired system layout disciplines. Transitioned into software systems after realizing physics blueprints map directly to relational schemas.',
      'Self-taught programming fundamentals: HTML, CSS, JavaScript, and database structures during off-hours.'
    ]
  },
  {
    id: 'time-explore',
    year: '2018 – 2019',
    title: 'Career Exploration Phase',
    organization: 'Self-Directed',
    description: 'Experimented with web publishing, SEO networks, and system setups to find long-term technology pathways.',
    category: 'transition',
    details: [
      'Configured WordPress nodes and managed traffic setups.',
      'Analyzed web crawler patterns and Google search engine crawlers.'
    ]
  },
  {
    id: 'time-12th',
    year: '2018',
    title: 'Class XII (Intermediate)',
    organization: 'State Board',
    description: 'Focused on Mathematics, Physics, and Chemistry, establishing computational analytical baselines.',
    category: 'education',
    details: ['Scored 82% overall, laying structural analytical skills needed for system algorithms.']
  },
  {
    id: 'time-10th',
    year: '2016',
    title: 'Class X (High School)',
    organization: 'State Board',
    description: 'First formal introduction to logical studies, general sciences, and arithmetic equations.',
    category: 'education',
    details: ['Graduated top tier, establishing foundational problem-solving disciplines.']
  }
];

export const openSourceContributions: OpenSourceContribution[] = [
  {
    id: 'oss-1',
    repoName: 'next.js',
    repoUrl: 'https://github.com/vercel/next.js',
    prTitle: 'docs: refine edge runtime route handling caches',
    prUrl: 'https://github.com/vercel/next.js/pulls',
    description: 'Improved document definitions explaining cache revalidation sweeps within distributed deployment nodes.',
    status: 'Merged',
    impact: 'Helps developer communities leverage programmatic cache revalidation correctly.'
  },
  {
    id: 'oss-2',
    repoName: 'framer-motion',
    repoUrl: 'https://github.com/framer/motion',
    prTitle: 'fix: optimize performance bindings for nested layouts',
    prUrl: 'https://github.com/framer/motion/pulls',
    description: 'Corrected minor rendering cycles triggered during layoutId shifts in multi-page routers.',
    status: 'Merged',
    impact: 'Reduces CPU overhead for dynamic animated transitions on client SPAs.'
  }
];

export const systemArchitectures: SystemArchitecture[] = [
  {
    id: 'arch-startupwire',
    title: 'StartupWire Crawler & Curation Pipeline',
    description: 'Autonomous cron-triggered system crawling verified sources, indexing entries, and executing LLM validation sweeps.',
    diagram: `
[Verified RSS Feeds]
       |
       v  (cron: every 4h)
[Node.js Scraper Worker]
       |
       +---> [Zod Schema Validation]
       |
       v
[Google Gemini API] 
 (Summary, Taxonomy, Sentiment Curation)
       |
       v
[Vector Caching Module] <--> [Supabase pgvector] (Cosine similarity check)
       |
       v (Save if distance > 0.15)
[PostgreSQL Database]
       |
       v (Revalidation trigger)
[Next.js Edge Page]
    `,
    components: [
      { name: 'Scraper Worker', role: 'Fetches raw feed XML and extracts article nodes.', tech: 'Node.js, Axios, RSS-Parser' },
      { name: 'AI Curation Agent', role: 'Filters noise, writes bullet-point summaries and generates structured JSON content.', tech: 'Gemini 1.5 Flash API' },
      { name: 'pgvector Deduplication', role: 'Checks cosine distance between candidate text embeddings and historical titles.', tech: 'Supabase PostgreSQL' },
      { name: 'Edge Cached Frontend', role: 'Renders fully static semantic HTML with Edge middleware updates.', tech: 'Next.js 16 Edge Runtime' }
    ],
    rationale: 'Using Next.js edge caching combined with database-level triggers ensures the frontend loads in under 200ms while eliminating expensive real-time API calls for news articles.'
  }
];

export const researchNotes: ResearchNote[] = [
  {
    id: 'res-ai-agents',
    title: 'On the Reliability of AI Agent Curation Pipelines',
    date: '2026-06-30',
    category: 'AI Curation',
    abstract: 'Exploring prompt engineering limits and vector search indexing configurations to achieve deterministic structured JSON outputs from open-ended news data inputs.',
    content: `### 1. The Challenge of Determinism
Generative models are probabilistic. Achieving structured JSON news summaries (with mandatory keys, exact string arrays, and no markup wrapper) requires strict system formatting guidelines:
\`\`\`json
{
  "summary": "bulleted points",
  "category": "Technology | AI | Startups",
  "keywords": ["maximum 3 strings"]
}
\`\`\`
Enforcing this schema at the model layer is done using Gemini\'s structured output configuration:
\`\`\`typescript
responseSchema: Schema.json({
  type: Type.OBJECT,
  properties: { ... }
})
\`\`\`

### 2. Vector Deduplication
Using \`pgvector\`, we convert titles into 768-dimension vectors and run cosine queries:
\`\`\`sql
SELECT title, 1 - (title_vector <=> candidate_vector) AS similarity 
FROM articles 
ORDER BY similarity DESC LIMIT 1;
\`\`\`
Empirical testing shows that a cosine similarity threshold of \`0.85\` accurately filters duplicated content from different feeds while preserving sequels or continuous updates.`
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
    content: `Building news feed sites has historically required manual editing or resulted in spam-filled RSS aggregators. In this post, we discuss building a self-moderating news portal: StartupWire.in.

### The Pipeline Architecture
The system operates as an asynchronous pipeline consisting of:
1. **Ingest**: Scrapes verified RSS endpoints, extracts raw HTML, and sanities nodes using \`cheerio\`.
2. **Crate**: Formulates a detailed LLM prompt containing strict guidelines.
3. **Validate**: Uses Google Gemini 1.5 Flash to summarize key events, catalog topics, and extract URL attribution.
4. **Publish**: Stores data inside Supabase. Edge caches revalidate instantly when a webhook registers database modifications.

\`\`\`typescript
// Enforcing JSON output structure at the API level
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    responseMimeType: "application/json",
    responseSchema: articleSchema
  }
});
\`\`\`

By offloading content scraping to background workers and using edge CDNs to serve pre-rendered pages, we get performance and SEO optimization concurrently.`
  },
  {
    id: 'lighthouse-score-performance',
    title: 'How to Achieve a 100 Lighthouse Performance Rating in Next.js',
    description: 'Learn the exact performance optimization techniques I used to get a perfect Lighthouse score on my portfolio and StartupWire.',
    date: '2026-07-09',
    category: 'System Design',
    readTime: '5 min read',
    content: `Google Search ranking algorithms heavily prioritize page performance and accessibility (Core Web Vitals). Achieving 100/100 scores in Lighthouse requires addressing specific front-end metrics:

### 1. Cumulative Layout Shift (CLS)
Ensure all images have predefined aspect-ratio guidelines. Use Next.js \`<Image />\` configurations which automatically compute sizing tags:
\`\`\`tsx
<Image 
  src="/hero.png" 
  width={600} 
  height={400} 
  alt="Dashboard HUD" 
  priority 
/>
\`\`\`

### 2. First Contentful Paint (FCP)
* Minimize render-blocking third-party trackers.
* Apply \`font-display: swap\` to system fonts.
* Leverage Next.js dynamic routing to lazy-load resource-intensive client libraries (like charting engines).

Using Tailwind CSS v4's compiled build system further reduces package payloads, keeping main thread scripts minimal.`
  },
  {
    id: 'cybersecurity-developer-mindset',
    title: 'Cybersecurity Checklist for Web Developers in 2026',
    description: 'Avoid common security pitfalls like XSS, CSRF, and SQL injections by adopting secure coding habits early on.',
    date: '2026-07-04',
    category: 'Cybersecurity',
    readTime: '8 min read',
    content: `Web application security can no longer be treated as a post-launch audit step. Here is a developer security checklist:

### 1. Direct Input Sanitization
Never trust client inputs. Always sanitize database parameters using Zod validation grids:
\`\`\`typescript
const ContactFormSchema = zod.object({
  name: zod.string().min(2).max(50),
  email: zod.string().email(),
  message: zod.string().max(1000)
});
\`\`\`

### 2. Relational Row Level Security (RLS)
Ensure databases (e.g., Supabase PostgreSQL) reject unauthorized reads. Never write open tables without setting select rules:
\`\`\`sql
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read Access" ON articles FOR SELECT TO public USING (true);
CREATE POLICY "Admin Write Access" ON articles FOR ALL TO authenticated USING (auth.role() = 'service_role');
\`\`\`

Deploy HTTP-only SameSite cookies and maintain clean Content-Security-Policy (CSP) headers inside Next.js config routing.`
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
    content: `${p.title} ${p.tagline} ${p.summary} ${p.technologies.join(' ')} ${p.caseStudy.overview} ${p.caseStudy.problem}`
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
