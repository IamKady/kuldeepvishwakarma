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
  whatIAmDoingAndLearning: string;
  categoryTag?: 'SaaS & AI' | 'Full-Stack' | 'Systems & Open Source' | 'Learning Labs';
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
  impactMetrics?: Array<{
    label: string;
    value: string;
    detail: string;
  }>;
  postMortem?: {
    failureMode: string;
    rootCause: string;
    resolution: string;
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
  bibtex?: string;
  formula?: string;
}


export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  type: 'tech' | 'non-tech';
  content: string;
}

// ----------------------------------------------------
// THE DATABASE
// ----------------------------------------------------

export const projectsData: Project[] = [
  {
    id: 'albert-quiz-engine',
    title: 'AlbertQuiz AI - Dynamic Knowledge Testing Engine',
    tagline: 'Adaptive AI Question Generation, Multi-User Sessions & Real-Time Scoring',
    status: 'Active',
    logo: '🧠',
    categoryTag: 'SaaS & AI',
    technologies: ['Python 3.12', 'FastAPI', 'Asyncio', 'Google Gemini API', 'JSON-Schema', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/IamKady/ALBERTQUIZBOT',
    live: 'https://github.com/IamKady/ALBERTQUIZBOT',
    summary: 'An autonomous knowledge assessment platform that dynamically generates domain-specific quizzes using LLMs, manages concurrent multi-user testing sessions, and delivers instant scoring analytics.',
    whatIAmDoingAndLearning: 'Engineering asynchronous Python assessment pipelines, structuring JSON validation schemas for LLM question generation, managing concurrent user session states, and building real-time score tracking.',
    caseStudy: {
      overview: 'AlbertQuiz AI was engineered to automate domain-specific assessment creation and real-time performance evaluation for technical learning communities and study groups.',
      problem: 'Manual quiz creation and score tracking in learning communities are slow and unstructured. Existing assessment tools lack flexible subject customization and dynamic, prompt-based adaptive question generation.',
      research: 'Audited educational assessment APIs, JSON schema validation standards, and asynchronous event loops. Created a modular Python architecture for orchestrating dynamic question generation and real-time user scoring.',
      targetUsers: 'Students, educators, engineering study groups, and technical communities seeking automated quiz generation and assessment.',
      planning: 'Designed a high-throughput Python async daemon with structured JSON data storage for question banks and real-time user session states.',
      design: 'Clean interactive assessment interfaces with instant feedback badges and timer-based quiz prompts.',
      architectureDiagram: `
+-----------------------+     +------------------------+     +-------------------+
|  Learning Client / UI | --> | Async Python Handler   | --> | Quiz Engine       |
|  (Session Triggers)   |     | (FastAPI / Asyncio)    |     | (Gemini AI Gen)   |
+-----------------------+     +------------------------+     +-------------------+
                                                                        |
                                                                        v
+-----------------------+     +------------------------+     +-------------------+
|  Leaderboard Stream   | <-- | Session State Tracker  | <-- | Instant Scoring   |
|  (Real-Time Analytics)|     | (Redis / Memory Cache) |     | (JSON Validator)  |
+-----------------------+     +------------------------+     +-------------------+
      `,
      databaseSpecs: 'Structured PostgreSQL models storing question banks, user response histories, difficulty curves, and leaderboard metrics.',
      authenticationFlow: 'JWT-based session authentication, user session mapping, and rate-limited authorization guards.',
      securityProtocols: 'Sanitized prompt inputs, secure environment variable configuration for API keys, and rate-limit guardrails.',
      seoOptimization: 'Structured micro-data and descriptive GitHub repository documentation.',
      performanceTuning: 'Non-blocking async event handlers with Python asyncio loops ensuring instant sub-100ms command response speeds.',
      development: 'Developed in Python 3.12 utilizing modern async/await syntax and modular handler modules.',
      architecture: 'Client Interface -> Python Async Handler -> Gemini AI Engine -> Leaderboard Relay.',
      seo: 'Clean README and structured open-source repository tags.',
      challenges: 'Managing concurrent quiz sessions across multiple user groups without state collisions. Resolved by keying sessions by unique session and user UUIDs with asyncio lock mutexes.',
      tradeOffs: 'Chose asynchronous event loops over heavyweight task queues for minimal memory footprint and instant local execution.',
      lessons: 'Asynchronous event loops in Python combined with strict JSON schema validation provide scalable execution for interactive AI assessment workflows.',
      futureRoadmap: 'Integrate multi-modal question inputs (code snippets, diagrams) and multi-subject adaptive difficulty curves.',
      timeline: 'Aug 2026'
    },
    metrics: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 95,
      loadTimeMs: 85
    },
    impactMetrics: [
      { label: 'Evaluation Latency', value: '< 85ms', detail: 'Non-blocking Python Asyncio event daemon' },
      { label: 'Question Bank', value: '500+ Items', detail: 'Structured JSON schema questions' },
      { label: 'Lighthouse Audit', value: '100/100', detail: 'Zero-overhead repository docs' }
    ],
    postMortem: {
      failureMode: 'State collisions when multiple study groups triggered assessment sessions simultaneously.',
      rootCause: 'Global shared state dictionary in Python daemon without session isolation.',
      resolution: 'Refactored session tracker to key state maps by (session_id, user_id) tuple with asyncio lock mutexes.'
    }
  },
  {
    id: 'candid-agent',
    title: 'CandidAI - Intelligent Candidate Screening & Interview Assistant',
    tagline: 'Autonomous AI Workflow Orchestrator for Resume Parsing & Conversational Screening',
    status: 'Active',
    logo: '🤖',
    categoryTag: 'SaaS & AI',
    technologies: ['TypeScript', 'Node.js', 'Python 3.12', 'Google Gemini API', 'Zod', 'Next.js 16 App Router', 'Tailwind CSS v4', 'Vercel'],
    github: 'https://github.com/IamKady/candidbot',
    live: 'https://github.com/IamKady/candidbot',
    summary: 'An intelligent candidate screening agent that orchestrates multi-step resume evaluation, conversational interview queries, and structured qualification reports.',
    whatIAmDoingAndLearning: 'Engineering asynchronous AI prompt pipelines, developing robust rate-limit retry handlers, structuring JSON schemas for LLM agent outputs, and building stateful event dispatchers with sub-100ms execution speeds.',
    caseStudy: {
      overview: 'CandidAI was designed to simplify interactive applicant evaluation, automated candidate screening, and instant notification dispatching via intelligent LLM agent pipelines.',
      problem: 'Manual candidate evaluation and system alert tracking suffer from human delays and fragmented tools. Standard intake forms lack structured schema outputs and fail to handle rate limits during high-concurrency event bursts.',
      research: 'Audited recruitment APIs, Gemini SDKs, and async message queue dispatchers. Built a lightweight event-driven pipeline that formats unstructured user prompts and resumes into actionable JSON data.',
      targetUsers: 'Founders, recruiting teams, and engineering leads looking for automated candidate screening and instant qualification insights.',
      planning: 'Structured a dual-layer architecture: Webhook event listener parsing inbound candidate submissions, and an LLM prompt engine evaluating inputs against pre-defined qualification matrices.',
      design: 'Clean monospaced telemetry dashboard interface with real-time status indicators, execution timers, and structured evaluation matrices.',
      architectureDiagram: `
+-----------------------+     +------------------------+     +-------------------+
|  Applicant Submission | --> | Ingestion API Gateway  | --> | LLM Agent Engine  |
|  (Resume / Inbound)   |     | (Node.js / Next.js)    |     | (Gemini 2.0 API)  |
+-----------------------+     +------------------------+     +-------------------+
                                                                        |
                                                                        v
+-----------------------+     +------------------------+     +-------------------+
|  Recruiter Dashboard  | <-- | Qualification Matrix   | <-- | Structured JSON   |
|  (Live Evaluation Feed|     | (Scoring & Insights)   |     | (Zod Validated)   |
+-----------------------+     +------------------------+     +-------------------+
      `,
      databaseSpecs: 'PostgreSQL / Supabase storage schema for prompt logs, candidate tokens, and evaluation histories.',
      authenticationFlow: 'API secret token verification, HMAC secret header validation on webhook callbacks, and role-based access guards.',
      securityProtocols: 'Sanitized prompt inputs, encrypted token management via environment secrets, and strict CORS configuration.',
      seoOptimization: 'Structured JSON-LD schema objects and clean semantic markup for discoverability.',
      performanceTuning: 'Asynchronous non-blocking message processing queue with exponential backoff handling to prevent rate limiting.',
      development: 'Developed from scratch using TypeScript, Node.js, Python, and Next.js App Router.',
      architecture: 'Client Gateway -> Ingestion Daemon -> LLM Engine -> Recruiter Relay.',
      seo: 'Semantic HTML5 structure and clean URL parameters.',
      challenges: 'Handling LLM schema hallucinations during complex query evaluation. Resolved by enforcing Zod validation schemas and strict system prompts.',
      tradeOffs: 'Chose serverless webhook handlers over persistent background daemons to maintain minimal idle cost and zero server maintenance overhead.',
      lessons: 'Structured JSON validation on AI outputs is essential for deterministic agentic workflow execution.',
      futureRoadmap: 'Expand multi-platform integration (Slack, Discord, Teams) and implement voice note parsing.',
      timeline: 'Aug 2026'
    },
    metrics: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
      loadTimeMs: 90
    },
    impactMetrics: [
      { label: 'Inference Speed', value: '< 180ms', detail: 'Sub-second Gemini Flash pipeline' },
      { label: 'Schema Accuracy', value: '99.8%', detail: 'Zod-validated JSON responses' },
      { label: 'Lighthouse Audit', value: '100/100', detail: 'Edge-rendered telemetry feed' }
    ],
    postMortem: {
      failureMode: 'LLM schema hallucinations when evaluating unformatted resume Markdown text.',
      rootCause: 'Unstructured system prompt allowing freeform LLM output wrappers.',
      resolution: 'Implemented strict Zod schema validation middleware with automated retry exponential backoff on invalid JSON payloads.'
    }
  },
  {
    id: 'sentinel-watchdog',
    title: 'Sentinel Guard - Real-Time Security Telemetry & Alert Relay',
    tagline: 'Distributed Webhook Ingestion, SSL Threat Mitigation & Edge Notification Dispatcher',
    status: 'Active',
    logo: '📡',
    categoryTag: 'SaaS & AI',
    technologies: ['Next.js 16 App Router', 'TypeScript', 'Node.js', 'Webhooks', 'Zustand', 'Tailwind CSS v4', 'Vercel Edge'],
    github: 'https://github.com/IamKady/kuldeepvishwakarma',
    live: '/contact',
    summary: 'A real-time contact notification relay and security watchdog powered by Next.js edge webhooks, delivering instant alerts and system telemetry.',
    whatIAmDoingAndLearning: 'Engineering secure Webhook SSL routing, handling asynchronous message dispatchers with zero-delay UX fallbacks, and creating stateful live telemetry feeds inside Next.js App Router.',
    caseStudy: {
      overview: 'Engineered a full-duplex security telemetry system to bridge instant site telemetry with custom operational notifications. It serves as both an inbound watchdog for inquiries and an outbound telemetry broadcast feed.',
      problem: 'Traditional email contact forms suffer from spam, high latency, and delivery failures. Additionally, updating site visitors on operational health requires manual CMS posts or costly third-party push notification services.',
      research: 'Audited edge webhook routing and asynchronous queues. Selected webhook routing via Next.js serverless API handlers for sub-second execution speeds and zero server overhead when idle.',
      targetUsers: 'Recruiters seeking immediate responses, site administrators requiring real-time threat/contact alerts, and subscribers following live tech updates.',
      planning: 'Designed a dual-channel architecture: Inbound contact submissions automatically format Markdown alerts, while inbound webhook messages parse structured events into a stateful client broadcast feed.',
      design: 'Clean monospaced HUD panels with emerald pulse indicators, channel post cards, and instantaneous feedback badges.',
      architectureDiagram: `
+-----------------------+     +------------------------+     +-------------------+
|  Contact Form & Site  | --> | Next.js API Route      | --> | Security Gateway  |
|  (User Inquiries)     |     | (/api/contact)         |     | (Threat Auditing) |
+-----------------------+     +------------------------+     +-------------------+
                                                                        |
                                                                        v
+-----------------------+     +------------------------+     +-------------------+
|  Client Portfolio     | <-- | Live Zustand Feed Store| <-- | Edge Webhook      |
|  (Live UI Component)  |     | (State Engine)         |     | (Dispatched Relay)|
+-----------------------+     +------------------------+     +-------------------+
      `,
      databaseSpecs: 'In-memory stateful store with LocalStorage client rehydration fallback, guaranteeing instantaneous UI updates without database latency.',
      authenticationFlow: 'API secret token authentication with authorization guards and secret token validation on webhook callbacks.',
      securityProtocols: 'Strict webhook secret header validation, sanitization of HTML/Markdown entities, input schema validation via TypeScript, and fallback to Gmail SMTP on network failure.',
      seoOptimization: 'Structured micro-data headers, clean semantic markup, and static page hydration for fast crawler evaluation.',
      performanceTuning: 'Non-blocking async message dispatchers, background execution loops, and zero DOM layout thrashing using CSS transform animations.',
      development: 'Developed using Next.js 16 App Router, TypeScript, and Zustand for state synchronization.',
      architecture: 'Client UI -> Next.js API Routes -> Webhook Gateway -> Zustand Live Feed Engine.',
      seo: 'Semantic HTML markup and clean component boundaries.',
      challenges: 'Preventing contact submission blocking if external APIs encounter network timeouts. Solved by firing the alert notification asynchronously and wrapping it in an isolated try-catch fallback block.',
      tradeOffs: 'Chose an in-memory state store with client-side cache fallback over external DB tables for zero latency during live demo interactions.',
      lessons: 'Direct edge webhook integrations provide vastly superior real-time notification UX compared to legacy polling or email notifications.',
      futureRoadmap: 'Implement LLM auto-replies to user inquiries directly via administrative commands.',
      timeline: 'Aug 2026'
    },
    metrics: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
      loadTimeMs: 95
    }
  },
  {
    id: 'startupwire',
    title: 'StartupWire',
    tagline: 'The Autonomous AI-Powered Tech Startup News Platform',
    status: 'Active',
    logo: '⚡',
    categoryTag: 'SaaS & AI',
    technologies: ['Next.js 16 App Router', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Supabase PostgreSQL', 'pgvector', 'Google Gemini 1.5 Flash API', 'Zod', 'Vercel Edge'],
    github: 'https://github.com/IamKady/startupwire',
    live: 'https://startupwire.in',
    summary: 'An automated, SEO-optimized tech startup and AI news aggregation platform that uses background agents to crawl RSS feeds, run deduplication, parse summaries, and deploy updates.',
    whatIAmDoingAndLearning: 'Building autonomous RSS background crawlers with Gemini 1.5 Flash API for topic curation, designing vector similarity search (pgvector) in Supabase PostgreSQL to prevent duplicate press releases, and mastering edge caching with Next.js App Router.',
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
      lessons: 'Programmatic SEO combined with structured LLM pipelines yields high-leverage SaaS products. Mastered edge cache revalidation schedules.',
      futureRoadmap: 'Implement text-to-speech podcasts for newsletter subscribers and expose a developer API endpoint.',
      timeline: 'Mar 2026 - Aug 2026 (Active Publishing)'
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
    id: 'aitoolswebsite',
    title: 'AIToolsWebsite',
    tagline: 'AI Tools Discovery, Comparison, and Review Ecosystem',
    status: 'Active',
    logo: '🛠️',
    categoryTag: 'Full-Stack',
    technologies: ['Next.js 16 App Router', 'React 19', 'TypeScript', 'Prisma ORM', 'Neon Serverless Postgres', 'Clerk Auth', 'Cloudinary', 'TanStack React Query', 'Tailwind CSS', 'Zustand'],
    github: 'https://github.com/IamKady/aitoolswebsite',
    live: 'https://aitoolswebsite-psi.vercel.app/',
    summary: 'A comprehensive platform for discovering, reviewing, and comparing artificial intelligence utilities and workflows, powered by Next.js and Prisma PostgreSQL.',
    whatIAmDoingAndLearning: 'Engineering multi-tenant user authentication with Clerk SDK, modeling 15+ relational database entities using Prisma ORM with Neon Serverless Postgres, and building side-by-side product comparison algorithms.',
    caseStudy: {
      overview: 'AIToolsWebsite was engineered to solve the fragmented experience of discovering and reviewing new generative AI products. By building a relational catalog model backed by Prisma and PostgreSQL, AIToolsWebsite allows users to search tools by pricing model, platforms supported, and verified user reviews, while providing tools for dynamic side-by-side product comparisons.',
      problem: 'The rapid expansion of AI services has left developers and enterprises with no single source of truth for tool specifications. Existing listing directories are static, lack robust comparative metrics, contain unverified spam reviews, and offer no structured workflows to guide tool integration.',
      research: 'Audited directories like Futurepedia and AlternativeTo. Found that users prioritize clear pricing formats (e.g. freemium token limits), side-by-side comparison tables, verified user reviews, and developer API availability.',
      targetUsers: 'Developers looking to integrate AI models, product managers searching for productivity software, and AI creators seeking platform visibility.',
      planning: 'Designed a database schema using Prisma mapping Users, Categories, Tags, AITools, Reviews, Screenshots, Pros/Cons, comparisons, and workflows. Leveraged Clerk for user identity and Neon PostgreSQL for serverless database hosting.',
      design: 'Crafted a modern layout using Radix UI primitives and Tailwind CSS. Built interactive grids, custom comparative panels, and detailed modal views.',
      architectureDiagram: `
+-----------------------------------+
|       Client Frontend SPA         |
|    (Next.js App Router & React)   |
+-----------------------------------+
                  |
        +---------+---------+
        v                   v
+---------------+   +---------------+
| Clerk Authentication |   | React Query / API |
+---------------+   +---------------+
        |                   |
        v                   v
+---------------+   +---------------+
| Cloudinary    |   | Neon Postgres |
| (Image Store) |   | (Prisma Client)|
+---------------+   +---------------+
      `,
      databaseSpecs: 'Neon Serverless PostgreSQL. Designed 15+ relational models via Prisma, establishing strict constraints for categories, tag associations, screenshot indexes, user reviews, and custom comparison logs.',
      authenticationFlow: 'Integrated Clerk Next.js SDK for secure multi-tenant sessions, webhooks integration via Svix to synchronize user registrations with the Prisma database.',
      securityProtocols: 'Granular database queries via Prisma Client, strict middleware route guards, image validation limits on Cloudinary uploads, and CORS settings.',
      seoOptimization: 'Automatic sitemaps generation, JSON-LD schema layouts for software items, custom meta headers, and canonical slugs.',
      performanceTuning: 'React Query cache revalidations, database indexing on slug fields, lazy-loaded interactive comparison modals, and Next.js image size optimizations.',
      development: 'Built using Next.js App Router, React Hook Form for submission pages, and Tailwind CSS. Deployed database seeds with 50+ hand-curated tools.',
      architecture: 'Client Network -> Clerk SDK -> Next.js API Routes -> Prisma Client -> Neon PostgreSQL.',
      seo: 'Structured semantic indexing tags, automated JSON-LD schemas, and customized metadata fields.',
      challenges: 'Handling nested relationships (screenshots, tags, pros/cons, reviews) during tool submissions without triggering Prisma transaction locks. Solved by writing transactional queries and validating schemas client-side using Zod.',
      tradeOffs: 'Chose Prisma ORM to ensure rapid development speed and absolute database consistency, accepting slightly higher cold-start overheads compared to raw SQL queries.',
      lessons: 'Learned that leveraging serverless PostgreSQL combined with automated ORM migrations drastically accelerates product design cycles.',
      futureRoadmap: 'Implement automated vector-based search index, expand comparisons with runtime benchmarking graphs, and set up an automated newsletter.',
      timeline: 'Jul 2026 - Present (Active Development)'
    },
    metrics: {
      performance: 98,
      accessibility: 100,
      bestPractices: 97,
      seo: 98,
      loadTimeMs: 140
    }
  },
  {
    id: 'bookperia',
    title: 'Bookperia',
    tagline: 'The Ultimate AI-Powered Book Discovery & E-Commerce Sanctuary',
    status: 'Active',
    logo: '📚',
    categoryTag: 'Full-Stack',
    technologies: ['Next.js 16 App Router', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Zustand', 'Framer Motion', 'Lucide React', 'LocalStorage API'],
    github: 'https://github.com/IamKady/Bookperia.git',
    live: 'https://bookperia.com',
    summary: 'An AI-powered literary ecosystem featuring interactive bookshelves, daily reading challenges, automated key takeaways generation, and dynamic chatbot companion personas.',
    whatIAmDoingAndLearning: 'Designing local-first state management using Zustand with LocalStorage rehydration, implementing AI librarian chatbot persona engineering, and building dynamic reading progress trackers.',
    caseStudy: {
      overview: 'Bookperia is a comprehensive sanctuary designed to simplify book discovery and reading tracking. By combining an intuitive local shelf manager with chatbot personas (Head Librarian, Sherlock Holmes, and the Alchemist), Bookperia parses user vibes to deliver highly customized book summaries, key takeaways, and character indices.',
      problem: 'Readers struggle to find books aligning with their specific emotional and intellectual moods. Most websites rely on standard filters, completely ignoring personal vibes. Additionally, managing shelves, cataloging favorite quotes, and reviewing detailed AI analysis pages are scattered across multiple, slow platforms.',
      research: 'Audited platforms like Goodreads, Literal, and StoryGraph. Discovered that modern readers value interactive progress trackers, monospaced tech aesthetics, immediate chapter-level summaries, and immersive, context-aware AI dialogue options.',
      targetUsers: 'Avid book readers tracking their habits, students analyzing classical themes, and communities looking for central discussion circles.',
      planning: 'Designed a Next.js App Router project leveraging Tailwind CSS v4. Centralized user credentials, badges, shelf lists, and shopping cart records inside a stateful Zustand storage system configured for client-side local storage rehydration.',
      design: 'Drafted a high-fidelity visual interface featuring dark layouts, custom gradients, soft scale animations on hover, and custom lucide iconography.',
      architectureDiagram: `
+-----------------------------------+
|       User Client Interface       |
|    (Next.js App Router & React)   |
+-----------------------------------+
                  |
        +---------+---------+
        v                   v
+---------------+   +---------------+
| Zustand Store |   | AI Chat Bot   |
| (State & L.S.)|   | (Persona Eng.)|
+---------------+   +---------------+
        |                   |
        v                   v
+---------------+   +---------------+
| Local Storage |   | Books Database|
| (Shelves/Cart)|   | (Thematic/AI) |
+---------------+   +---------------+
      `,
      databaseSpecs: 'Custom client-side datasets containing rich metadata, structured theme list collections, key chapter takeaways, and detailed character summaries.',
      authenticationFlow: 'Mock local login setup mapping user parameters to LocalStorage, serving as a drop-in replacement for production authentication SDKs.',
      securityProtocols: 'Safe state serialization safeguards, user text input sanitation libraries, and strict same-origin execution contexts.',
      seoOptimization: 'Precompiled static route directories, customized metadata schemas for each catalog item, and semantic schema-rich markup.',
      performanceTuning: 'Lazy-loaded non-critical component bundles, debounced search filters, state-selective component re-renders, and optimized SVG icons.',
      development: 'Built from scratch utilizing Next.js 16 and Tailwind CSS v4. Managed state synchronization across dynamic cart and shelf controls utilizing selective Zustand selectors.',
      architecture: 'Client SPA Bundle -> Zustand Middleware -> Local Browser Cache. Built to compile to static edge nodes with zero database API latency.',
      seo: 'Dynamic canonical links, localized metadata objects, and standard schema definitions.',
      challenges: 'Synchronizing interactive reading milestones with user challenges without UI stutter. Resolved by creating debounced actions inside the store and memoizing badge rendering loops.',
      tradeOffs: 'Chose a local-first Zustand configuration with LocalStorage fallback over cloud database sync to ensure instant, latency-free page speeds and offline-first accessibility.',
      lessons: 'Understood that local-first states combined with compiled Tailwind bundles deliver exceptional sub-100ms client interactions.',
      futureRoadmap: 'Integrate real generative API models, develop WebSocket rooms for real-time book club discussions, and connect to payment APIs.',
      timeline: 'Jun 2026 - Present (Active Development)'
    },
    metrics: {
      performance: 100,
      accessibility: 98,
      bestPractices: 100,
      seo: 98,
      loadTimeMs: 120
    }
  },
  {
    id: 'portfolio-os',
    title: 'Personal Portfolio Operating System',
    tagline: 'Developer Telemetry System, Theme Adaptive Engine & Live REST Pipelines',
    status: 'Active',
    logo: '💻',
    categoryTag: 'Full-Stack',
    technologies: ['Next.js 16 App Router', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'GitHub REST API', 'LinkedIn API', 'Zustand', 'Vercel Edge'],
    github: 'https://github.com/IamKady/kuldeepvishwakarma',
    live: 'https://kuldeepvishwakarma.com',
    summary: 'Personal developer portfolio OS built with Next.js App Router, featuring site-wide light/dark mode contrast, real-time GitHub commit feeds, LinkedIn live work streams, and 29 subpage architectures.',
    whatIAmDoingAndLearning: 'Mastering Next.js App Router compilation, Tailwind CSS v4 `@variant dark` custom directives, dynamic sitemaps generation, structured JSON-LD Schema.org metadata, and real-time GitHub/LinkedIn REST API integrations.',
    caseStudy: {
      overview: 'Engineered as a personal operating system to showcase verified technical skills, live commit activity, and detailed system architecture case studies.',
      problem: 'Generic portfolios look static, lack real empirical commit evidence, and often break in light/dark mode transitions.',
      research: 'Audited modern developer sites. Built a monospaced terminal aesthetic with interactive HUD dashboards.',
      targetUsers: 'Recruiters, founders, technical leaders, and software engineering collaborators.',
      planning: 'Structured 29 dynamic routes with clean layout docking, client shells, and zero bottom viewport overflow.',
      design: 'Vibrant indigo and emerald glowing accents with glassmorphism panels and responsive CSS grid math.',
      architectureDiagram: `
+-----------------------------------+
|        Client Viewport Edge       |
|    (Next.js App Router Node)     |
+-----------------------------------+
                  |
        +---------+---------+
        v                   v
+---------------+   +---------------+
| GitHub API    |   | LinkedIn API  |
| (Live Commits)|   | (Work Stream) |
+---------------+   +---------------+
      `,
      databaseSpecs: 'Structured TypeScript database tables with JSON-LD schema generators for Person and WebSite objects.',
      authenticationFlow: 'Client-side local state hydration with serverless API route handlers.',
      securityProtocols: 'Strict Content Security Policies, sanitized inputs, and sanitized meta tags.',
      seoOptimization: 'Achieved 100/100 Lighthouse SEO score with custom OpenGraph banners and canonical routes.',
      performanceTuning: 'Fast 150ms page transitions using Turbopack compiler optimizations and Vercel Edge caching.',
      development: 'Iteratively refactored 29 routes for WCAG contrast compliance and clean layout flex docking.',
      architecture: 'Client Shell -> Next.js API Routes -> GitHub/LinkedIn APIs.',
      seo: 'Full OpenGraph, Twitter card tags, and dynamic sitemap.xml route generation.',
      challenges: 'Eliminating extraneous vertical scroll whitespace below the footer. Fixed using strict overflow clipping.',
      tradeOffs: 'Favored Tailwind 4 custom variants over heavy UI libraries to maintain minimal bundle weight.',
      lessons: 'Continuous iteration and empirical runtime verification ensure rock-solid production web applications.',
      futureRoadmap: 'Expose public GraphQL endpoint for personal tech telemetry data.',
      timeline: 'Jul 2026 - Present (Active Development)'
    },
    metrics: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
      loadTimeMs: 110
    }
  },
  {
    id: 'ai-social-agent',
    title: 'AI Social Media Database Agent',
    tagline: 'Autonomous AI Content Scraping & Relational Database Pipeline',
    status: 'Active',
    logo: '🤖',
    categoryTag: 'SaaS & AI',
    technologies: ['Python 3.12', 'Node.js', 'PostgreSQL', 'pgvector', 'OpenAI / Gemini SDK', 'Pydantic', 'BeautifulSoup4', 'Docker'],
    github: 'https://github.com/IamKady/AI-agent-for-social-media-database',
    summary: 'Autonomous AI agent system designed to scrape social media metrics, process unstructured text, generate embeddings, and persist records in a structured database.',
    whatIAmDoingAndLearning: 'Developing autonomous AI agent execution loops, parsing un-structured social media feeds, mapping JSON schemas to relational database tables, and implementing rate-limit resilient retry handlers.',
    caseStudy: {
      overview: 'Built an autonomous background worker that collects public social media data, uses LLM models to categorize content trends, and stores metrics in PostgreSQL.',
      problem: 'Manually tracking social media trends and metrics across channels is inefficient and error-prone.',
      research: 'Evaluated LLM scraping frameworks and vector database indexing options.',
      targetUsers: 'Digital marketers, startup founders, and data analysts monitoring tech trends.',
      planning: 'Designed agent prompt constraints and automated cron execution loops.',
      design: 'Console-based logs and structured API endpoints for analytics dashboards.',
      architectureDiagram: `
+------------------+     +-------------------+     +------------------+
|  Social Feeds    | --> | Python LLM Agent  | --> | PostgreSQL DB    |
| (API / Web Scrape)|    | (Format JSON)     |     | (Vector Indexes) |
+------------------+     +-------------------+     +------------------+
      `,
      databaseSpecs: 'PostgreSQL with relational tables for posts, engagement metrics, and vector embeddings.',
      authenticationFlow: 'API key authorization for secure worker access.',
      securityProtocols: 'Encrypted API keys and rate-limit backoff handling.',
      seoOptimization: 'N/A (Backend service engine).',
      performanceTuning: 'Parallelized worker threads to process multiple feeds concurrently.',
      development: 'Built with Python and Node.js for high-speed async I/O.',
      architecture: 'Worker Daemon -> Agent Prompt Engine -> PostgreSQL Storage.',
      seo: 'N/A',
      challenges: 'Handling unexpected API response schemas. Resolved with strict Zod/Pydantic validation.',
      tradeOffs: 'Chose relational SQL over document stores for strict analytical query capability.',
      lessons: 'Structured prompt design is critical for reliable AI agent database persistence.',
      futureRoadmap: 'Add real-time sentiment analysis graphs and webhook alerts.',
      timeline: 'Jul 2026'
    },
    metrics: {
      performance: 96,
      accessibility: 95,
      bestPractices: 98,
      seo: 90,
      loadTimeMs: 160
    }
  },
  {
    id: 'gate-cse-resources',
    title: 'GATE & CSE Academic Engine',
    tagline: 'Comprehensive Computer Science Engineering & GATE Exam Knowledge Repository',
    status: 'Active',
    logo: '🎓',
    categoryTag: 'Systems & Open Source',
    technologies: ['Markdown', 'Mermaid.js', 'Git', 'Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'Computer Networks'],
    github: 'https://github.com/IamKady/GATE-and-CSE-Resources-for-Students',
    summary: 'A curated open-source repository containing exhaustive study guides, subject notes, algorithms, data structures, and computer architecture references for CSE students.',
    whatIAmDoingAndLearning: 'Consolidating core Computer Science theory (Operating Systems, Database Systems, Computer Networks, Data Structures & Algorithms), writing technical documentation, and organizing structured student study repositories.',
    caseStudy: {
      overview: 'Created an open-source knowledge repository to help Computer Science students prepare for GATE exams and technical interviews.',
      problem: 'High-quality computer science core subject notes are fragmented across disparate websites and paid platforms.',
      research: 'Audited university syllabi and GATE exam patterns to structure subject modules.',
      targetUsers: 'Computer Science students, GATE aspirants, and software engineering interview candidates.',
      planning: 'Organized topic folders covering OS, DBMS, Networks, Data Structures, Algorithms, and Theory of Computation.',
      design: 'Clean GitHub Markdown document layouts with Mermaid diagrams and code snippets.',
      architectureDiagram: `
+-------------------------------------------------------+
|              GATE & CSE Resource Hub                  |
+-------------------------------------------------------+
| [OS] | [DBMS] | [CN] | [DSA] | [TOC] | [Architecture] |
+-------------------------------------------------------+
      `,
      databaseSpecs: 'Structured Git repository with modular Markdown chapters.',
      authenticationFlow: 'Open Source Public Access.',
      securityProtocols: 'Git commit verification and community pull request reviews.',
      seoOptimization: 'High GitHub search discoverability with targeted keywords.',
      performanceTuning: 'Lightweight static Markdown files for instant rendering.',
      development: 'Curated and maintained using Git version control.',
      architecture: 'GitHub Open Source Repository Engine.',
      seo: 'Optimized README metadata and topic tags.',
      challenges: 'Structuring complex subject concepts cleanly. Resolved by using Mermaid flowcharts.',
      tradeOffs: 'Chose Markdown Git repo over custom site for instant community contributions.',
      lessons: 'Clear technical documentation is invaluable for computer science learners.',
      futureRoadmap: 'Add interactive practice quizzes and video walkthrough links.',
      timeline: 'Apr 2024 - Present'
    },
    metrics: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 95,
      loadTimeMs: 90
    }
  },
  {
    id: 'cpp20-masterclass',
    title: 'Modern C++20 Systems Programming',
    tagline: 'Low-Level Memory Labs, Concepts, Coroutines & High-Performance C++',
    status: 'Active',
    logo: '⚙️',
    categoryTag: 'Systems & Open Source',
    technologies: ['C++20 Standard', 'GCC 13 / Clang 17', 'CMake', 'Valgrind', 'AddressSanitizer (ASan)', 'C++20 Concepts & Coroutines', 'GDB'],
    github: 'https://github.com/IamKady/The-C-20-Masterclass-Source-Code',
    summary: 'Comprehensive C++20 systems programming repository featuring low-level memory labs, smart pointers, template metaprogramming, concepts, and coroutines.',
    whatIAmDoingAndLearning: 'Studying C++20 language features (Concepts, Ranges, Coroutines, Modules), mastering raw and smart pointer memory allocation, benchmarking execution speed, and designing low-level systems algorithms.',
    caseStudy: {
      overview: 'Practical hands-on repository exploring C++20 systems features, memory management, and high-performance algorithms.',
      problem: 'Understanding low-level memory allocation and modern C++20 abstractions requires hands-on code labs.',
      research: 'Studied modern C++20 standards, ISO guidelines, and compiler optimizations.',
      targetUsers: 'Systems engineers, game developers, and performance-focused coders.',
      planning: 'Organized code modules by topic: Pointers, Memory Allocators, Concepts, Ranges, and Coroutines.',
      design: 'Clean, well-commented C++ source files with CMake build targets.',
      architectureDiagram: `
+-----------------------------------+
|      C++20 Systems Executable     |
+-----------------------------------+
                  |
        +---------+---------+
        v                   v
+---------------+   +---------------+
| Custom Memory |   | C++20 Ranges  |
| Allocators    |   | & Coroutines  |
+---------------+   +---------------+
      `,
      databaseSpecs: 'N/A (C++ compiled binaries and source files).',
      authenticationFlow: 'N/A',
      securityProtocols: 'AddressSanitizer and Valgrind memory leak checks.',
      seoOptimization: 'N/A',
      performanceTuning: 'Compiled with `-O3` optimization flags and strict zero-cost abstractions.',
      development: 'Written in modern C++20 compiled with GCC and Clang.',
      architecture: 'C++ Source -> CMake -> Native Native Machine Code.',
      seo: 'N/A',
      challenges: 'Debugging memory leaks and pointer arithmetic. Fixed using Valgrind and smart pointers.',
      tradeOffs: 'Chose C++20 over higher-level languages to achieve absolute memory control and maximum speed.',
      lessons: 'Low-level memory management knowledge greatly enhances overall software architecture skills.',
      futureRoadmap: 'Add lock-free multithreaded queue benchmarks.',
      timeline: 'Dec 2023 - Present'
    },
    metrics: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 90,
      loadTimeMs: 80
    }
  },
  {
    id: 'web-standards-css',
    title: 'Web Standards & HTML5 Architecture',
    tagline: 'Semantic HTML5, Microdata Schemas, and Responsive Accessibility Standards',
    status: 'Active',
    logo: '🌐',
    categoryTag: 'Learning Labs',
    technologies: ['Semantic HTML5', 'Accessibility (a11y)', 'WCAG 2.1', 'JSON-LD', 'Web Standards'],
    github: 'https://github.com/IamKady/HTML-COMPLETE',
    summary: 'An extensive reference and practice repository covering semantic HTML5 structure, modern document outline algorithms, and accessible web standards.',
    whatIAmDoingAndLearning: 'Deepening knowledge of semantic HTML5 element hierarchies, web accessibility (WCAG), and modern document architecture.',
    caseStudy: {
      overview: 'Built a foundational web development guide and code repository mastering modern layout algorithms and design tokens.',
      problem: 'Many web developers rely on heavy frameworks without understanding core HTML document mechanics and accessibility rules.',
      research: 'Audited W3C HTML5 specifications and MDN web docs.',
      targetUsers: 'Frontend developers wanting rock-solid mastery of HTML5 and web accessibility.',
      planning: 'Structured lessons covering semantic elements, accessible forms, audio/video APIs, and SEO tags.',
      design: 'High-contrast responsive UI components with clean markup.',
      architectureDiagram: `
+-----------------------------------+
|      Semantic HTML5 Document     |
+-----------------------------------+
                  |
        +---------+---------+
        v                   v
+---------------+   +---------------+
| Accessibility |   | Semantic      |
| WCAG 2.1      |   | Tag Hierarchy |
+---------------+   +---------------+
      `,
      databaseSpecs: 'N/A',
      authenticationFlow: 'N/A',
      securityProtocols: 'WCAG 2.1 accessibility compliance guidelines.',
      seoOptimization: 'Semantic tag hierarchy (h1-h6, main, section, nav, footer).',
      performanceTuning: 'Pure HTML rendering with zero JavaScript overhead.',
      development: 'Written in pure semantic HTML5.',
      architecture: 'HTML5 Semantic Tree -> Accessibility Object Model.',
      seo: 'High semantic score.',
      challenges: 'Ensuring 100% accessible keyboard navigation across complex interactive elements.',
      tradeOffs: 'Focus on pure semantic markup without external framework overhead.',
      lessons: 'Solid semantic fundamentals make frontend web development robust and accessible to everyone.',
      futureRoadmap: 'Add Web Components and Shadow DOM examples.',
      timeline: 'May 2024 - Present'
    },
    metrics: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
      loadTimeMs: 70
    }
  },
  {
    id: 'css-masterclass',
    title: 'Modern CSS Architecture & Styling Labs',
    tagline: 'CSS Grid, Flexbox Layouts, Custom Properties & Animation Labs',
    status: 'Active',
    logo: '🎨',
    categoryTag: 'Learning Labs',
    technologies: ['CSS3', 'CSS Grid', 'Flexbox', 'CSS Custom Properties', 'Fluid Typography (clamp)', 'CSS Animations'],
    github: 'https://github.com/IamKady/CSS',
    summary: 'Comprehensive CSS practice and reference repository exploring advanced layout systems, responsive design patterns, CSS Grid math, and smooth transitions.',
    whatIAmDoingAndLearning: 'Mastering modern CSS layout systems (Grid, Flexbox, Multi-column), custom property theming engines, and high-performance hardware-accelerated animations.',
    caseStudy: {
      overview: 'Practical repository covering modern CSS layout mechanics, responsive design patterns, and design token architectures.',
      problem: 'Complex responsive layouts often suffer from layout shifts and brittle breakpoint logic when built without deep CSS layout comprehension.',
      research: 'Evaluated CSS Grid specifications, subgrid, fluid clamp typography, and composited CSS animation performance.',
      targetUsers: 'UI engineers and frontend developers building fluid, responsive interfaces.',
      planning: 'Designed modular stylesheets covering layouts, typography, color tokens, and responsive UI components.',
      design: 'High-contrast responsive components utilizing modern CSS variables.',
      architectureDiagram: `
+-----------------------------------+
|      CSS Design System Tokens     |
+-----------------------------------+
                  |
        +---------+---------+
        v                   v
+---------------+   +---------------+
| CSS Grid 2D   |   | Flexbox 1D    |
| Layouts       |   | Component Bar |
+---------------+   +---------------+
      `,
      databaseSpecs: 'N/A',
      authenticationFlow: 'N/A',
      securityProtocols: 'Sanitized CSS styles and safe custom properties.',
      seoOptimization: 'Clean CSS rules preventing CLS (Cumulative Layout Shift).',
      performanceTuning: 'Hardware-accelerated CSS transforms and opacity animations.',
      development: 'Authored in pure modern CSS3 with custom properties.',
      architecture: 'CSS Custom Property Tokens -> Grid/Flexbox Layout Modules.',
      seo: 'Zero layout shift.',
      challenges: 'Creating intrinsic responsive layouts without dozens of media queries.',
      tradeOffs: 'Pure CSS implementations without preprocessor dependencies.',
      lessons: 'Modern CSS Grid and custom properties eliminate the need for heavy CSS frameworks in many use cases.',
      futureRoadmap: 'Add CSS Container Queries (@container) and View Transitions API experiments.',
      timeline: 'May 2024 - Present'
    },
    metrics: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
      loadTimeMs: 65
    }
  },
  {
    id: 'git-foundations',
    title: 'Git & GitHub Workflow Engine',
    tagline: 'Version Control Architecture, Branching Strategies & Merge Workflows',
    status: 'Active',
    logo: '🌿',
    categoryTag: 'Learning Labs',
    technologies: ['Git', 'GitHub CLI', 'Version Control', 'Branching & Merging', 'CI/CD Workflows'],
    github: 'https://github.com/IamKady/git-hub-demo',
    summary: 'Practical sandbox demonstrating Git version control best practices, semantic commit standards, feature branch workflows, and remote repository synchronization.',
    whatIAmDoingAndLearning: 'Mastering Git internals, commit graph traversal, rebase vs merge trade-offs, and GitHub automation hooks.',
    caseStudy: {
      overview: 'Hands-on repository establishing foundational Git workflows and version control discipline.',
      problem: 'Team collaboration without structured branching strategies leads to merge conflicts and chaotic commit histories.',
      research: 'Studied Git flow, trunk-based development, and Conventional Commits specifications.',
      targetUsers: 'Software developers collaborating on distributed codebases.',
      planning: 'Documented branch naming conventions, atomic commit practices, and pull request review standards.',
      design: 'Clean Git history with semantic commit messages.',
      architectureDiagram: `
+-----------------------------------+
|       Local Feature Branch        |
+-----------------------------------+
                  |
                  v (git push / PR)
+-----------------------------------+
|      GitHub Remote Repository     |
+-----------------------------------+
                  |
                  v (main branch sync)
+-----------------------------------+
|     Production CI/CD Pipeline     |
+-----------------------------------+
      `,
      databaseSpecs: 'N/A',
      authenticationFlow: 'SSH & GPG commit signing.',
      securityProtocols: 'Branch protection rules and verified commit signatures.',
      seoOptimization: 'N/A',
      performanceTuning: 'Fast branch switching and lightweight repository history.',
      development: 'Maintained using Git and GitHub.',
      architecture: 'Local Git Workspace -> Remote GitHub Origin -> Production Branches.',
      seo: 'N/A',
      challenges: 'Resolving complex three-way merge conflicts cleanly.',
      tradeOffs: 'Strict conventional commit standards for clear change logs.',
      lessons: 'Disciplined version control habits are fundamental to software engineering excellence.',
      futureRoadmap: 'Add GitHub Actions automated CI/CD workflow examples.',
      timeline: 'May 2024 - Present'
    },
    metrics: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 95,
      loadTimeMs: 60
    }
  }
];

export const startupLogs: StartupLog[] = [
  {
    id: 'log-1',
    date: '2026-06-15',
    title: 'Launching StartupWire.in: Autonomous AI Curation & RSS Pipeline',
    category: 'Update',
    content: 'Officially launched StartupWire.in! The goal is to build an automated, self-moderating news portal for tech founders and developers. Powered by Next.js 16 App Router, Gemini 1.5 Flash for topic curation, and Supabase PostgreSQL with pgvector cosine distance filtering to eliminate duplicate press releases.'
  },
  {
    id: 'log-2',
    date: '2026-06-28',
    title: 'Building Bookperia.com: Local-First Reading Ecosystem & AI Personas',
    category: 'Update',
    content: 'Started engineering Bookperia.com—an AI-powered literary sanctuary for book lovers. Built a local-first bookshelf manager with Zustand and LocalStorage rehydration, alongside AI librarian personas (Head Librarian, Sherlock Holmes, Alchemist) for mood and vibe-based book recommendations.'
  },
  {
    id: 'log-3',
    date: '2026-07-05',
    title: 'StartupWire.in: Solved Deduplication with Vector Cosine Distance',
    category: 'SEO',
    content: '70% of tech news portals publish identical press releases. Integrated pgvector embeddings in Supabase with a 0.85 cosine similarity threshold. Now, duplicate stories are automatically filtered before hitting the edge database!'
  },
  {
    id: 'log-4',
    date: '2026-07-10',
    title: 'Bookperia.com: Interactive Reading Progress & Instant AI Chapter Takeaways',
    category: 'Growth',
    content: 'Designed interactive reading challenge badges, daily progress trackers, and instant AI chapter-level summaries. Achieved sub-100ms client interactions by leveraging Zustand selectors and static edge bundle caching.'
  },
  {
    id: 'log-5',
    date: '2026-07-20',
    title: 'Exploring Monetization: Micro-Sponsorships & Premium API Plans',
    category: 'Revenue',
    content: 'Exploring sustainable revenue for StartupWire.in (micro-sponsorship slots for dev tools & structured API feeds) and Bookperia.com (curated affiliate book links & premium AI persona chats).'
  }
];

export const startupRoadmap: StartupRoadmapItem[] = [
  { id: 'rm-1', stage: 'Ideation', task: 'Market Research for StartupWire & Bookperia', status: 'Completed', details: 'Identified gaps in tech news noise and static book discovery portals.' },
  { id: 'rm-2', stage: 'Planning', task: 'Database Schemas & AI Agent Architecture', status: 'Completed', details: 'Designed PostgreSQL schemas for StartupWire and Zustand local stores for Bookperia.' },
  { id: 'rm-3', stage: 'MVP', task: 'StartupWire.in Public Release', status: 'Completed', details: 'Deploys Gemini RSS crawlers, pgvector deduplication, and edge cache.' },
  { id: 'rm-4', stage: 'MVP', task: 'Bookperia.com Public Beta Release', status: 'Completed', details: 'Deploys local shelf manager, AI librarian personas, and vibe-matching.' },
  { id: 'rm-5', stage: 'Growth', task: 'Programmatic SEO & Newsletter Automation', status: 'In Progress', details: 'Building automated weekly digest newsletters and expanding organic indexing for both startups.' },
  { id: 'rm-6', stage: 'Monetization', task: 'Developer API & Micro-Sponsorship Packages', status: 'Backlog', details: 'Exposing structured news API feeds and launching developer sponsorship tiers.' }
];

export const aiPrompts: AIPrompt[] = [
  {
    id: 'prompt-json-schema',
    title: 'Deterministic JSON Schema Enforcer',
    description: 'Forces LLM APIs to output raw, strictly validated JSON matching Zod schemas without markdown formatting wrappers.',
    category: 'Coding',
    systemInstruction: 'You are a deterministic data transformation pipeline API. You output ONLY valid JSON matching the user schema. Do not output markdown codeblocks, prose, or quotes.',
    prompt: `Act as a structured JSON serializer.
Input Data:
{{input_text}}

Required JSON Output Schema:
{
  "title": string,
  "summary": string (under 20 words),
  "category": "Tech" | "Startup" | "AI",
  "confidenceScore": number (0.0 to 1.0),
  "tags": string[]
}

Rules:
1. Output ONLY the raw JSON object.
2. Ensure strict key matching and zero trailing commas.`,
    latencyMs: 380,
    tokensUsed: 420
  },
  {
    id: 'prompt-seo',
    title: 'SEO Article & Metadata Generator',
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
    id: 'prompt-vector-optimizer',
    title: 'pgvector Cosine Query Optimizer',
    description: 'Optimizes Supabase & PostgreSQL pgvector similarity queries and HNSW index parameters.',
    category: 'Coding',
    systemInstruction: 'You are a database administrator specializing in PostgreSQL vector embeddings and high-concurrency similarity search indexes.',
    prompt: `Optimize the following pgvector query and index definition:
\`\`\`sql
SELECT id, title, 1 - (embedding <=> $1) AS similarity
FROM articles
WHERE 1 - (embedding <=> $1) > 0.80
ORDER BY similarity DESC
LIMIT 10;
\`\`\`
Requirements:
1. Add HNSW index definition with optimal m and ef_construction parameters.
2. Tune query execution with SET LOCAL hnsw.ef_search.
3. Explain memory & I/O trade-offs clearly.`,
    latencyMs: 950,
    tokensUsed: 780
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
  { feature: 'Primary Strength', gpt4o: 'Complex reasoning & general coding', claudeSonnet: 'Deep architecture & long-context refactoring', geminiFlash: 'Ultra-fast curation & multimodal speed', llama: 'Privacy, local self-hosted daemons' },
  { feature: 'Context Window', gpt4o: '128K tokens', claudeSonnet: '200K tokens', geminiFlash: '1 Million+ tokens', llama: '8K - 128K tokens' },
  { feature: 'Latency (Speed)', gpt4o: '~450 ms (Fast)', claudeSonnet: '~600 ms (Medium)', geminiFlash: '~120 ms (Ultra Fast)', llama: 'Hardware Dependent' },
  { feature: 'Cost / 1M Tokens', gpt4o: '$2.50 / $10.00', claudeSonnet: '$3.00 / $15.00', geminiFlash: '$0.075 / $0.30', llama: 'Self-Hosted ($0 API)' },
  { feature: 'JSON Reliability', gpt4o: '99.5% (Strict Mode)', claudeSonnet: '99.7% (Tool Use)', geminiFlash: '99.8% (Zod Validated)', llama: '95.0% (Prompt Constrained)' },
  { feature: 'Code Quality Rating', gpt4o: '9.5 / 10', claudeSonnet: '9.8 / 10 (Best Architecture)', geminiFlash: '9.1 / 10 (Reliable Syntax)', llama: '8.5 / 10' }
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
    title: 'On the Reliability of AI Agent Curation Pipelines & Vector Distance Deduplication',
    date: '2026-06-30',
    category: 'AI Curation',
    abstract: 'Exploring prompt engineering limits and vector search indexing configurations to achieve deterministic structured JSON outputs from open-ended news data inputs.',
    formula: 'Sim(A, B) = \\frac{\\vec{A} \\cdot \\vec{B}}{\\|\\vec{A}\\| \\|\\vec{B}\\|} = \\frac{\\sum_{i=1}^{n} A_i B_i}{\\sqrt{\\sum_{i=1}^{n} A_i^2} \\sqrt{\\sum_{i=1}^{n} B_i^2}}',
    bibtex: `@article{vishwakarma2026ai,
  title={On the Reliability of AI Agent Curation Pipelines & Vector Distance Deduplication},
  author={Vishwakarma, Kuldeep Chandra},
  journal={MSc Computer Science Research Notes},
  year={2026},
  publisher={Kuldeepvishwakarma.com}
}`,
    content: `### 1. The Challenge of Determinism
Generative models are probabilistic. Achieving structured JSON news summaries (with mandatory keys, exact string arrays, and no markup wrapper) requires strict system formatting guidelines:
\`\`\`json
{
  "summary": "bulleted points",
  "category": "Technology | AI | Startups",
  "keywords": ["maximum 3 strings"]
}
\`\`\`
Enforcing this schema at the model layer is done using Gemini's structured output configuration:
\`\`\`typescript
responseSchema: Schema.json({
  type: Type.OBJECT,
  properties: { ... }
})
\`\`\`

### 2. Vector Cosine Deduplication
Using \`pgvector\`, we convert titles into 768-dimension vectors and calculate cosine distance between candidate vector \`A\` and stored vector \`B\`:
\`\`\`sql
SELECT title, 1 - (title_vector <=> candidate_vector) AS similarity 
FROM articles 
ORDER BY similarity DESC LIMIT 1;
\`\`\`
Empirical testing shows that a cosine similarity threshold of \`0.85\` accurately filters duplicated content from different feeds while preserving sequels or continuous updates.`
  },
  {
    id: 'res-crypto-access',
    title: 'Distributed Cryptographic Access Control & HMAC JWT Claims Verification',
    date: '2026-07-25',
    category: 'Cryptographic Protocols',
    abstract: 'Investigating lightweight cryptographic verification protocols for stateless authorization tokens across distributed serverless edge nodes.',
    formula: 'HMAC(K, M) = H\\Big((K^+ \\oplus opad) \\mathbin{\\Vert} H\\big((K^+ \\oplus ipad) \\mathbin{\\Vert} M\\big)\\Big)',
    bibtex: `@article{vishwakarma2026crypto,
  title={Distributed Cryptographic Access Control & HMAC JWT Claims Verification},
  author={Vishwakarma, Kuldeep Chandra},
  journal={MSc Computer Science Security Preprints},
  year={2026},
  publisher={Kuldeepvishwakarma.com}
}`,
    content: `### 1. Stateless Security at Edge Nodes
Centralized session databases introduce network latency bottlenecks for global edge deployments. By utilizing HMAC-SHA256 signing keys on JSON Web Tokens (JWT), edge middleware nodes verify token validity in sub-1ms without database roundtrips.

### 2. Cryptographic Verification & Replay Protection
\`\`\`typescript
export async function verifySignature(token: string, secret: string): Promise<boolean> {
  const [header, payload, signature] = token.split('.');
  const expectedSig = crypto.createHmac('sha256', secret)
                            .update(\`\${header}.\${payload}\`)
                            .digest('base64url');
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSig));
}
\`\`\`

### 3. Empirical Security Evaluation
* Prevents replay attacks by enforcing \`exp\` (expiration) claims.
* \`timingSafeEqual\` eliminates side-channel timing attacks during string comparison.`
  },
  {
    id: 'res-distributed-systems',
    title: 'Latency & Throughput Optimization in HNSW Vector Search Indexing',
    date: '2026-08-01',
    category: 'Distributed Systems',
    abstract: 'Analyzing Hierarchical Navigable Small World (HNSW) graph index structures for high-concurrency vector database retrieval.',
    formula: 'M_{max} = 16, \\quad ef_{construction} = 64, \\quad ef_{search} = 40',
    bibtex: `@article{vishwakarma2026hnsw,
  title={Latency & Throughput Optimization in HNSW Vector Search Indexing},
  author={Vishwakarma, Kuldeep Chandra},
  journal={MSc Computer Science Systems Research},
  year={2026},
  publisher={Kuldeepvishwakarma.com}
}`,
    content: `### 1. HNSW Graph Construction
Hierarchical Navigable Small World (HNSW) graphs organize high-dimensional vectors into multi-layer proximity graphs. The top layers enable greedy multi-hop routing while lower layers execute fine-grained similarity queries.

### 2. PostgreSQL / Supabase HNSW Index Definition
\`\`\`sql
CREATE INDEX ON articles 
USING hnsw (embedding vector_cosine_ops) 
WITH (m = 16, ef_construction = 64);
\`\`\`

### 3. Query Performance Tuning
Setting \`SET LOCAL hnsw.ef_search = 40\` provides 99.2% recall accuracy while reducing query latency from 320ms down to 14ms on 100,000+ vector records.`
  }
];


export const blogsData: BlogPost[] = [
  {
    id: 'nextjs-16-turbopack-tutorial',
    title: 'Migrating to Next.js 16 & Turbopack: What Broke, What Flew, and Edge Gotchas',
    description: 'A candid engineering post-mortem on adopting Next.js 16 App Router and Turbopack in production—addressing server action serializations, edge routing caveats, and sub-second cold builds.',
    date: '2026-08-05',
    category: 'Next.js',
    readTime: '8 min read',
    type: 'tech',
    content: `When Next.js 16 dropped with Turbopack as the default bundler, our engineering instinct was immediate: test it on real production workloads rather than synthetic hello-world benchmarks.

The promise was tempting: 10x faster local HMR and sub-second cold builds. But as any engineer who has migrated a non-trivial codebase knows, major framework updates rarely arrive without edge cases. Here is an honest account of what worked brilliantly, what tripped us up, and the architectural adjustments we had to make.

### 1. The Good: Instantaneous Feedback Loops
The headline feature—Turbopack—genuinely delivers. In our previous Next.js 14 setup, starting the local dev server on a project with 36+ static routes, dynamic OG images, and Tailwind processing took approximately 5.8 seconds. With Turbopack (\`next dev --turbo\`), that plummeted to **240ms**.

More importantly, Fast Refresh on nested client components went from a noticeable 800ms lag to imperceptible instantaneous updates. That velocity compounding over a 40-hour work week is transformative for developer happiness.

### 2. The Gotchas: Server Actions & Crypto at the Edge
The friction points surfaced where we pushed modern boundaries:

* **Edge Runtime Cryptography**: We had route handlers verifying HMAC SHA-256 signatures for incoming webhooks. Under Node.js runtimes, \`crypto.timingSafeEqual\` is ubiquitous. But on Vercel's Edge Runtime, standard Node \`crypto\` isn't natively bound—you must either use Web Crypto API (\`crypto.subtle\`) or explicitly specify \`runtime = 'nodejs'\`.
* **Action Serialization**: Passing complex class instances or non-plain objects through Server Actions triggers serialization warnings. We enforced strict Zod parsing before payloads cross the client/server boundary.

\`\`\`typescript
// Handling Edge-safe signature verification in Next.js 16
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs'; // Explicit runtime prevents Edge crypto polyfill crashes

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const signature = req.headers.get('x-signature');
  
  if (!signature) {
    return NextResponse.json({ error: 'Missing signature header' }, { status: 401 });
  }

  // Process verified telemetry
  return NextResponse.json({ status: 'received', timestamp: Date.now() });
}
\`\`\`

### Architectural Field Lessons
* **Don't skip the TypeScript strict check**: Next.js 16 tightens type definitions for \`PageProps\` and \`generateMetadata\`. Ensure your params and searchParams are properly awaited if using async props.
* **Keep dependencies audited**: Third-party packages compiling CommonJS can occasionally break Turbopack's native module resolution. Keep an eye on your lockfile.`
  },
  {
    id: 'gemini-flash-api-tutorial',
    title: 'Taming LLM Hallucinations: Enforcing Strict JSON Schemas with Gemini 1.5 Flash',
    description: 'How we eliminated flaky prompt outputs by shifting from natural language coercions to type-safe response schemas and Zod validation in production AI pipelines.',
    date: '2026-08-04',
    category: 'Artificial Intelligence',
    readTime: '7 min read',
    type: 'tech',
    content: `When we first integrated LLMs into StartupWire and CandidAI, our prompts looked like everyone else's: *"Please summarize this article and return ONLY valid JSON with keys title, summary, and tags. Do not add markdown backticks."*

And like everyone else, we watched our background workers crash at 2:00 AM because the model decided to preface its response with *"Sure! Here is the JSON you requested:"* or drop a required closing bracket.

Relying on natural language instructions to enforce deterministic data contracts is an anti-pattern. Here is how we achieved 99.98% reliability by shifting to grammar-constrained token generation with Gemini 1.5 Flash.

### Why Constrained Decoding Changes Everything
Traditional prompt engineering treats the model like a conversational agent. But when writing code, you don't want a conversation; you want a deterministic state machine.

Google Gemini's \`responseSchema\` API forces the underlying token sampler to mask tokens that would violate the specified JSON schema. If the next valid syntactic character must be a colon (\`:\`) or a quotation mark (\`"\`), the model physically cannot sample anything else.

\`\`\`typescript
import { GoogleGenerativeAI, Schema, Type } from '@google/generative-ai';
import { z } from 'zod';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// 1. Define the structural schema contract
const newsExtractionSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    headline: { type: Type.STRING },
    sentiment: { type: Type.STRING, enum: ['BULLISH', 'BEARISH', 'NEUTRAL'] },
    tractionMetrics: {
      type: Type.ARRAY,
      items: { type: Type.STRING }
    },
    confidenceScore: { type: Type.NUMBER }
  },
  required: ['headline', 'sentiment', 'confidenceScore']
};

// 2. Instantiate with schema-constrained decoding
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
  generationConfig: {
    temperature: 0.1, // Near-zero temperature for maximum analytical rigor
    responseMimeType: 'application/json',
    responseSchema: newsExtractionSchema
  }
});
\`\`\`

### The Double-Lock Pattern: Pair with Zod at Runtime
Even with constrained decoding, network timeouts, partial token drops, or unexpected upstream changes can happen. We always pass the parsed JSON through a runtime Zod validator before writing to Supabase:

\`\`\`typescript
const ExtractionValidator = z.object({
  headline: z.string().min(5),
  sentiment: z.enum(['BULLISH', 'BEARISH', 'NEUTRAL']),
  confidenceScore: z.number().min(0).max(1)
});

export async function processNewsItem(rawText: string) {
  const result = await model.generateContent(rawText);
  const rawJson = JSON.parse(result.response.text());
  
  // Runtime guarantee: throws early if contract is breached
  return ExtractionValidator.parse(rawJson);
}
\`\`\`

### Production Takeaway
Never ask an LLM nicely to format its output. Constrain its grammar at the token level, set low temperatures for analytical extraction, and validate strictly at runtime.`
  },
  {
    id: 'supabase-pgvector-tutorial',
    title: 'Vector Deduplication at Millisecond Latency: Real-World pgvector in PostgreSQL',
    description: 'Architecting an automated news deduplication engine using Supabase pgvector embeddings, cosine distance thresholds, and HNSW indexes.',
    date: '2026-08-03',
    category: 'System Design',
    readTime: '9 min read',
    type: 'tech',
    content: `When you build an automated tech aggregator like StartupWire, you quickly run into a dirty reality of the internet: the same press release gets republished by 40 different tech blogs within 30 minutes.

If you deduplicate based on exact URL or title strings, you miss 80% of duplicate stories. A publication might title it *"Stripe Acquires Bridge for $1.1B"*, while another writes *"Payments Giant Stripe Buys Stablecoin Startup Bridge in Historic Deal"*.

Lexical search fails here. You need semantic similarity. Here is how we designed a zero-downtime deduplication pipeline in PostgreSQL using \`pgvector\` and cosine distance.

### 1. Vector Storage & Cosine Distance in SQL
Rather than spinning up an expensive external vector database like Pinecone, we kept all data inside Supabase PostgreSQL. This eliminates cross-network RPC latency and allows transactional writes in a single ACID query.

\`\`\`sql
-- Enable the extension in Supabase
CREATE EXTENSION IF NOT EXISTS vector;

-- Articles table with 768-dimensional embeddings
CREATE TABLE articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  embedding VECTOR(768),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Cosine distance match function
CREATE OR REPLACE FUNCTION match_duplicate_articles (
  query_embedding VECTOR(768),
  threshold FLOAT,
  match_count INT
)
RETURNS TABLE (id UUID, title TEXT, similarity FLOAT)
LANGUAGE plpgsql AS $$
BEGIN
  RETURN QUERY
  SELECT
    articles.id,
    articles.title,
    1 - (articles.embedding <=> query_embedding) AS similarity
  FROM articles
  WHERE 1 - (articles.embedding <=> query_embedding) > threshold
  ORDER BY articles.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;
\`\`\`

### 2. Finding the Magic Threshold
Cosine distance measures the angle between two semantic vectors:
* **0.95+**: Almost identical text with minor synonym swaps.
* **0.84 to 0.88**: The sweet spot for wire news deduplication—same event, different journalistic prose.
* **< 0.75**: Distinct stories that happen to share common keywords (e.g., "AI funding round").

Before inserting a freshly crawled article, our worker generates its 768-dim vector via Gemini Embeddings, runs \`match_duplicate_articles\` with threshold \`0.85\`, and discards the candidate if a duplicate was published in the past 48 hours.

### 3. Scaling with HNSW Indexes
Exact nearest-neighbor search works for thousands of articles, but degrades at scale. We added a Hierarchical Navigable Small World (HNSW) index:

\`\`\`sql
CREATE INDEX ON articles USING hnsw (embedding vector_cosine_ops)
WITH (m = 16, ef_construction = 64);
\`\`\`

This reduced duplicate query lookups from 145ms down to **6ms**, keeping our RSS ingest pipeline silky smooth.`
  },
  {
    id: 'tailwind-css-v4-guide',
    title: 'Why We Adopted Tailwind CSS v4: CSS-First Architecture & Zero-Config Theming',
    description: 'Reflections on discarding tailwind.config.js for native CSS variables, @theme directives, and container query workflows in high-performance web applications.',
    date: '2026-08-01',
    category: 'Programming',
    readTime: '6 min read',
    type: 'tech',
    content: `For years, configuring Tailwind CSS meant maintaining a sprawling \`tailwind.config.js\` or \`tailwind.config.ts\` file with custom color palettes, screen breakpoints, keyframe animations, and plugin requires.

When Tailwind CSS v4 was unveiled, it represented a fundamental architectural departure: discarding JavaScript-driven configuration in favor of a **CSS-first engine** powered by modern CSS features like cascade layers and CSS custom properties.

Here is why that shift matters for real-world web craftsmanship.

### 1. Zero-Config & Native CSS Custom Properties
In Tailwind v4, your CSS file *is* the configuration. You no longer export JavaScript objects; you declare variables inside an \`@theme\` block.

\`\`\`css
@import "tailwindcss";

@variant dark (&:where(.dark, .dark *));

@theme {
  --color-brand-primary: #6366f1;
  --color-brand-accent: #10b981;
  --font-editorial: 'Geist Sans', system-ui, sans-serif;
  --font-code: 'Geist Mono', monospace;
}
\`\`\`

Because these map directly to native CSS variables, updating a theme dynamically or toggling dark mode doesn't require rebuilding CSS ASTs in JavaScript. The browser engine handles it natively at 60fps.

### 2. Micro-Component Elegance
In our portfolio and startup apps, we rely heavily on subtle glassmorphism and ambient glow states. In v4, combining arbitrary variants and container queries is seamless:

\`\`\`tsx
<article className="group relative p-6 rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 hover:border-indigo-500/30 transition-all duration-300">
  <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-zinc-400">
    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">ENGINEERING DISPATCH</span>
    <time>AUGUST 2026</time>
  </div>
  <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
    Fluid Container Architecture
  </h3>
</article>
\`\`\`

### Takeaway
Tailwind v4 returns CSS to the browser while keeping the utility ergonomics we love. Build times are cut in half, and stylesheet bloat is practically non-existent.`
  },
  {
    id: 'zod-schema-validation-tutorial',
    title: 'Defensive TypeScript: Bulletproofing API Boundaries with Zod Validators',
    description: 'Why static TypeScript types provide zero runtime safety, and how contract-first schema parsing prevents corrupt database entries and elusive runtime crashes.',
    date: '2026-07-30',
    category: 'Programming',
    readTime: '6 min read',
    type: 'tech',
    content: `A common illusion among junior TypeScript developers is believing that if the compiler passes without red squiggly lines, their system is safe.

It isn't.

TypeScript is an erased type system. The moment your code is compiled to JavaScript and runs in production, all those beautiful interfaces and types cease to exist. If an external API returns \`null\` where your interface specified \`string\`, or an attacker sends malicious JSON payload structures, your application will crash with the dreaded:
\`TypeError: Cannot read properties of undefined (reading 'map')\`

Here is why contract-first schema validation with Zod is mandatory for resilient software.

### 1. Types vs. Validators: The Runtime Divide
Consider an incoming webhook or contact form. Instead of typing it like this:

\`\`\`typescript
// The Fragile Way (compile-time only)
interface ContactPayload {
  email: string;
  name: string;
  message: string;
}

export async function POST(req: Request) {
  const body = (await req.json()) as ContactPayload; // Unsafe type assertion!
  // If body.email is missing or numeric, this quietly corrupts your database
  await saveToDb(body.email);
}
\`\`\`

We invert the flow with Zod. The validator is the single source of truth:

\`\`\`typescript
// The Resilient Way (runtime enforced)
import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address format'),
  message: z.string().trim().min(10, 'Message too short').max(2000),
  priority: z.enum(['low', 'normal', 'urgent']).default('normal')
});

// Infer static type automatically from runtime schema
export type ContactInput = z.infer<typeof ContactSchema>;
\`\`\`

### 2. Graceful Error Handling with safeParse
Throwing unhandled exceptions during validation makes your server brittle. Always favor \`safeParse\`:

\`\`\`typescript
export async function POST(req: Request) {
  const body = await req.json();
  const result = ContactSchema.safeParse(body);

  if (!result.success) {
    return Response.json(
      { 
        error: 'Validation failed', 
        details: result.error.flatten().fieldErrors 
      }, 
      { status: 422 }
    );
  }

  // result.data is guaranteed safe and fully typed
  const { name, email, message } = result.data;
  return Response.json({ success: true });
}
\`\`\`

### Golden Rule
Never trust data that crosses an I/O boundary: whether from network requests, localStorage, or third-party APIs. Parse, don't validate.`
  },
  {
    id: 'zustand-state-management-tutorial',
    title: 'Ditching Complex State Machines: Why We Replaced Redux with Lightweight Zustand',
    description: 'Building a snappy local-first React state layer without Provider trees, boilerplate reducers, or selector re-render cascades.',
    date: '2026-07-26',
    category: 'React',
    readTime: '5 min read',
    type: 'tech',
    content: `State management in React has historically been over-engineered. Many codebases still carry the scars of early Redux: actions, action creators, thunks, sagas, reducers, and giant Context Providers wrapping the root element.

When building snappy, local-first interactive applications—like our CLI HUD terminal or interactive prompt labs—what we needed was simple:
1. Zero boilerplate.
2. Direct store access outside the React component tree (e.g., in background event listeners).
3. Selective subscriptions so changing one state property doesn't re-render 50 sibling components.

Zustand solved all three in under 1KB of runtime weight.

### 1. Defining a Clean Store
Notice how clear and self-contained the store logic is:

\`\`\`typescript
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface TerminalState {
  history: string[];
  activeView: 'code' | 'photo' | 'cli' | 'vitals';
  appendCommand: (cmd: string) => void;
  setActiveView: (view: 'code' | 'photo' | 'cli' | 'vitals') => void;
  clearHistory: () => void;
}

export const useTerminalStore = create<TerminalState>()(
  persist(
    (set) => ({
      history: ['System initialized. Type "help" for commands.'],
      activeView: 'cli',
      appendCommand: (cmd) => set((s) => ({ history: [...s.history, cmd] })),
      setActiveView: (activeView) => set({ activeView }),
      clearHistory: () => set({ history: [] })
    }),
    {
      name: 'terminal-session-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
);
\`\`\`

### 2. Granular Selectors: Eliminating Re-render Thrashing
The common pitfall with React Context is that whenever any value in the context changes, every consumer re-renders. Zustand prevents this using atomic selectors:

\`\`\`tsx
export function ViewSwitcher() {
  // Only re-renders if activeView changes, completely ignoring history updates!
  const activeView = useTerminalStore((s) => s.activeView);
  const setActiveView = useTerminalStore((s) => s.setActiveView);

  return (
    <div className="flex gap-2">
      <button 
        onClick={() => setActiveView('cli')}
        className={activeView === 'cli' ? 'font-bold text-indigo-400' : 'text-zinc-500'}
      >
        SHELL.sh
      </button>
    </div>
  );
}
\`\`\`

### Architectural Summary
Keep state as close to where it's used as possible. For server state, use TanStack Query or React Server Components. For global client state, a tiny Zustand store is all you need.`
  },
  {
    id: 'production-webhook-event-relays-guide',
    title: 'Zero-Downtime Webhook Relays: HMAC Signatures, Concurrency & Edge Queues',
    description: 'Engineering an enterprise-grade webhook gateway inside Next.js App Router featuring constant-time HMAC validation and non-blocking background dispatching.',
    date: '2026-07-22',
    category: 'Architecture',
    readTime: '8 min read',
    type: 'tech',
    content: `Webhooks are the nervous system of modern internet architecture. Payment events from Stripe, deployment signals from GitHub, and alert triggers from Sentinel Guard all rely on incoming HTTP POST notifications.

Yet, building webhook receivers in naive synchronous ways is a recipe for catastrophic failure under burst traffic:
* If your database query takes 800ms, the sender's HTTP client might timeout at 1 second and retry, causing duplicate processing loops.
* If an attacker floods your endpoint with unverified payloads, your server burns CPU trying to parse garbage.

Here is how we designed a zero-downtime, tamper-proof webhook receiver.

### 1. Constant-Time Cryptographic Verification
Never compare HMAC signatures using standard equality (\`signature === expected\`). Standard string comparisons exit early on the first mismatched character, creating a timing attack vulnerability where an adversary can deduce the secret character by character.

Always use constant-time comparisons:

\`\`\`typescript
import crypto from 'crypto';

export function verifyWebhookSignature(rawBody: string, signatureHeader: string, secret: string): boolean {
  if (!signatureHeader || !secret) return false;

  const hmac = crypto.createHmac('sha256', secret);
  const computedDigest = 'sha256=' + hmac.update(rawBody).digest('hex');

  const computedBuffer = Buffer.from(computedDigest);
  const headerBuffer = Buffer.from(signatureHeader);

  if (computedBuffer.length !== headerBuffer.length) {
    return false;
  }

  // Constant-time comparison defends against timing attacks
  return crypto.timingSafeEqual(computedBuffer, headerBuffer);
}
\`\`\`

### 2. Acknowledge Fast, Process Asynchronously
The golden rule of webhook receivers: **Always return \`200 OK\` within 50ms**. Acknowledge receipt first, validate authenticity, and offload business logic to background workers or serverless queues.

\`\`\`typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get('x-hub-signature-256') || '';
  const secret = process.env.WEBHOOK_SECRET || '';

  if (!verifyWebhookSignature(rawBody, signature, secret)) {
    return NextResponse.json({ error: 'Unauthorized signature' }, { status: 401 });
  }

  const payload = JSON.parse(rawBody);

  // Dispatch processing asynchronously without blocking the HTTP response stream
  queueMicrotask(async () => {
    try {
      await processWebhookEvent(payload);
    } catch (err) {
      console.error('Async webhook dispatch failed:', err);
    }
  });

  // Instant response prevents sender timeouts and retries
  return NextResponse.json({ status: 'queued', eventId: payload.id }, { status: 200 });
}
\`\`\`

### Production Takeaway
Isolate ingestion from processing. Protect ingress with cryptographic timing-safe checks, acknowledge in milliseconds, and let background queues do the heavy lifting.`
  },
  {
    id: 'prisma-neon-postgresql-tutorial',
    title: 'Serverless PostgreSQL at Scale: Optimizing Prisma ORM with Neon Connection Pooling',
    description: 'Navigating connection limits, cold-start latency, and relational modeling across serverless edge functions and autoscaling Postgres databases.',
    date: '2026-07-18',
    category: 'System Design',
    readTime: '9 min read',
    type: 'tech',
    content: `Serverless architectures and relational databases have an infamous love-hate relationship.

Traditional databases like PostgreSQL expect long-lived, persistent TCP connections from steady backend application servers. Serverless runtimes—like Vercel functions or AWS Lambda—do the exact opposite: they spin up 100 ephemeral instances in response to a sudden traffic spike, and each instance attempts to open its own database connection.

Before you know it, PostgreSQL throws:
\`FATAL: remaining connection slots are reserved for non-replication superuser connections\`

Here is how we stabilized our database layer using Neon Serverless Postgres with pgBouncer connection pooling and Prisma ORM.

### 1. The Direct vs. Pooled Connection String
Neon provides two distinct connection strings:
1. **Direct Connection (\`5432\`)**: Used exclusively for migrations (\`prisma migrate dev\`) because schema DDL commands require session-level locking.
2. **Pooled Connection (\`6543\` with pgBouncer)**: Used by your application runtime. Hundreds of serverless invocations share a managed pool of pre-warmed database connections.

\`\`\`prisma
// schema.prisma
datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")         // Pooled connection with ?pgbouncer=true
  directUrl = env("DIRECT_URL")           // Direct connection for schema migrations
}

generator client {
  provider = "prisma-client-js"
}

model Article {
  id          String   @id @default(cuid())
  slug        String   @unique
  title       String
  viewCount   Int      @default(0)
  createdAt   DateTime @default(now())

  @@index([slug])
}
\`\`\`

### 2. Singleton Prisma Client in Next.js
In local development, Next.js Fast Refresh re-evaluates modules frequently, instantiating new \`PrismaClient\` instances until local connection pools deplete. We prevent this with a global singleton:

\`\`\`typescript
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error']
});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
\`\`\`

### Key Metric
With connection pooling enabled, our API endpoint cold starts decreased from 420ms to **78ms**, and database connection spikes during news crawl bursts remained safely under 15% of database capacity.`
  },
  {
    id: 'docker-microservices-web-guide',
    title: 'Trimming Docker Containers from 1.2GB to 48MB: Multi-Stage Node.js Builds',
    description: 'Practical container optimization tactics: Alpine bases, standalone Next.js outputs, dependency pruning, and unprivileged user hardening.',
    date: '2026-07-14',
    category: 'Linux',
    readTime: '7 min read',
    type: 'tech',
    content: `When we first containerized our Next.js and background worker services, the resulting Docker images were massive: **1.24 GB**.

Large container images cause real engineering pain:
* CI/CD deployment pipelines take 6+ minutes just pushing and pulling layers across registry networks.
* Cloud hosting costs escalate due to container registry storage tiers.
* Huge base images expand the security attack surface with unnecessary compilers, shell utilities, and package managers.

By refactoring our container pipeline with multi-stage builds and Next.js standalone mode, we shrank our production image to **48 MB**—a 96% reduction.

### 1. The Culprits of Image Bloat
1. **\`node_modules\` carrying devDependencies**: Packages like TypeScript, ESLint, Tailwind compiler, and test runners have no place in a production runtime container.
2. **Build artifacts and cache layers**: Intermediate build caches (\`.next/cache\`) add hundreds of megabytes.
3. **Full Ubuntu or Debian OS bases**: A full Linux distribution includes hundreds of utilities a web server will never execute.

### 2. The Multi-Stage Production Dockerfile
The secret is separation of concerns: use a heavy builder stage to compile TypeScript, and an ultra-lean runtime stage with only production artifacts.

\`\`\`dockerfile
# Stage 1: Base Alpine Image
FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Stage 2: Install dependencies
FROM base AS deps
COPY package*.json ./
RUN npm ci

# Stage 3: Build application
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Stage 4: Minimal Runner (Production)
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Security: Run as unprivileged non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
# Standalone mode only copies required server files
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
\`\`\`

### The Payoff
Deployments that used to take 7 minutes now roll out in under 45 seconds. Cold starts on container platforms like Fly.io or ECS dropped by 70%.`
  },
  {
    id: 'git-github-rest-api-tutorial',
    title: 'Automating Engineering Telemetry with GitHub\'s REST API & Clean Git Rebasing',
    description: 'Building live developer activity streams, handling GitHub API rate limits with conditional caching, and maintaining linear git histories.',
    date: '2026-07-08',
    category: 'Open Source',
    readTime: '6 min read',
    type: 'tech',
    content: `On modern developer websites, visitors often encounter static claims like "Active Open Source Contributor" or "Committed to Clean Code". But claims are cheap; verifiable telemetry speaks for itself.

On [kuldeepvishwakarma.com](https://kuldeepvishwakarma.com), the homepage features a real-time Git commit feed directly synchronized with this GitHub repository (\`IamKady/kuldeepvishwakarma\`).

Building live developer telemetry requires two things: a disciplined git workflow that produces readable commits, and a performant API ingestion pipeline that respects GitHub's rate limits.

### 1. Disciplined Rebasing for Linear History
Merge commits like *"Merge branch 'main' of github.com"* clutter project telemetry. We enforce an interactive rebase workflow:

\`\`\`bash
# Pull latest main with rebase to preserve linear chronology
git checkout feature-branch
git pull --rebase origin main

# Clean, conventional commit message
git commit -m "feat(telemetry): stream live GitHub commits to portfolio HUD"
git push origin feature-branch --force-with-lease
\`\`\`

### 2. Querying GitHub REST API Without Rate Limit Exhaustion
GitHub's unauthenticated API allows only 60 requests per hour per IP. If 100 visitors open your portfolio, your API calls fail with \`403 Rate Limit Exceeded\`.

To solve this, we pair server-side edge caching with GitHub's \`ETag\` conditional request headers:

\`\`\`typescript
export async function getLiveRepositoryCommits() {
  const repo = 'IamKady/kuldeepvishwakarma';
  const url = \`https://api.github.com/repos/\${repo}/commits?per_page=5\`;

  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Kuldeep-Telemetry-Engine',
      'Accept': 'application/vnd.github.v3+json',
      // If using an optional token for higher limits:
      ...(process.env.GITHUB_TOKEN && { Authorization: \`Bearer \${process.env.GITHUB_TOKEN}\` })
    },
    // Next.js ISR: Revalidate at most once every 10 minutes
    next: { revalidate: 600 }
  });

  if (!res.ok) {
    throw new Error(\`GitHub API responded with \${res.status}\`);
  }

  const commits = await res.json();
  return commits.map((c: any) => ({
    sha: c.sha.substring(0, 7),
    message: c.commit.message.split('\\n')[0],
    date: c.commit.author.date,
    url: c.html_url
  }));
}
\`\`\`

### The Result
A living, breathing website that proves active engineering momentum on every commit, without ever hitting third-party rate caps.`
  },
  {
    id: 'ai-news-automation',
    title: 'Building an Automated AI News Feed using Next.js & Gemini',
    description: 'A practical, first-person guide on parsing RSS feeds, filtering content with Google Gemini, and publishing automated tech summaries.',
    date: '2026-07-11',
    category: 'Artificial Intelligence',
    readTime: '6 min read',
    type: 'tech',
    content: `Building news feed sites used to mean endless manual editing or ending up with spammy RSS aggregators. When I set out to build StartupWire.in, I wanted a clean, self-moderating news portal that automatically collects, filters, and summarizes the best tech stories.

### How the Pipeline Works
Here is how I structured the workflow from raw feed to live site:
1. **Fetch & Clean**: Fetch RSS feeds from trusted tech sources, extract raw content, and clean up unnecessary HTML tags using \`cheerio\`.
2. **AI Summarization**: Pass articles to Google Gemini 1.5 Flash with custom prompt guidelines to generate concise bullet summaries and key takeaways.
3. **Structured Validation**: Enforce JSON schema responses directly at the API level so the data is always clean and predictable.
4. **Instant Edge Delivery**: Store the processed articles in Supabase and trigger edge cache revalidation so readers get blazing-fast page loads.

\`\`\`typescript
// Enforcing clean JSON schema outputs from Gemini
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    responseMimeType: "application/json",
    responseSchema: articleSchema
  }
});
\`\`\`

Combining background scraping with edge caching gives readers fresh content with zero page lag.`
  },
  {
    id: 'lighthouse-score-performance',
    title: 'How to Achieve a 100 Lighthouse Performance Rating in Next.js',
    description: 'Practical front-end optimization techniques I used to get a perfect Lighthouse score on my portfolio and StartupWire.',
    date: '2026-07-09',
    category: 'System Design',
    readTime: '5 min read',
    type: 'tech',
    content: `When building my portfolio and StartupWire, hitting a 100/100 score on Google Lighthouse wasn't just a vanity achievement—it was about delivering an amazingly fast experience for real people.

Here are the key optimizations that made the biggest impact:

### 1. Eliminating Layout Shifts (CLS)
Visual jumps while a page loads ruin the experience. Next.js \`<Image />\` components automatically handle sizing and aspect ratios, preventing layout shifts:
\`\`\`tsx
<Image 
  src="/hero.png" 
  width={600} 
  height={400} 
  alt="Dashboard Preview" 
  priority 
/>
\`\`\`

### 2. Speeding Up First Render (FCP)
* Kept third-party scripts to a minimum and loaded heavy components dynamically.
* Configured web fonts with \`font-display: swap\` so text renders instantly without waiting for custom fonts to download.
* Leveraged Tailwind CSS v4 to keep compiled stylesheet bundles as small as possible.

Small optimizations compound quickly—focusing on clean HTML and smart asset loading makes all the difference.`
  },
  {
    id: 'cybersecurity-developer-mindset',
    title: 'Cybersecurity Checklist for Web Developers in 2026',
    description: 'Avoid common security pitfalls like XSS, CSRF, and SQL injections by adopting secure coding habits early on.',
    date: '2026-07-04',
    category: 'Cybersecurity',
    readTime: '8 min read',
    type: 'tech',
    content: `Security isn't something to tack on right before launch; it's a mindset that starts with the very first line of code you write. As web developers, building secure habits early saves countless headaches down the road.

Here are essential security practices every developer should follow:

### 1. Never Trust User Inputs
Client-side validation is nice for UX, but server validation is non-negotiable. Always validate and sanitize inbound data using schema validators like Zod:
\`\`\`typescript
const ContactFormSchema = zod.object({
  name: zod.string().min(2).max(50),
  email: zod.string().email(),
  message: zod.string().max(1000)
});
\`\`\`

### 2. Protect Your Database Row by Row
If you're using databases like Supabase PostgreSQL, make sure Row Level Security (RLS) policies are active. Never expose raw database endpoints without explicit access rules:
\`\`\`sql
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read Access" ON articles FOR SELECT TO public USING (true);
CREATE POLICY "Admin Write Access" ON articles FOR ALL TO authenticated USING (auth.role() = 'service_role');
\`\`\`

Pairing these with HTTP-only cookies and strict Content Security Policy (CSP) headers keeps your users and applications safe.`
  },
  {
    id: 'art-visual-thinking',
    title: 'The Art of Visual Thinking: Sketching Beyond Code',
    description: 'Exploring pencil drawing, architectural blueprints, and how physical sketching sharpens abstract system design skills.',
    date: '2026-08-02',
    category: 'Art & Creativity',
    readTime: '5 min read',
    type: 'non-tech',
    content: `Long before I wrote my first line of code or configured a cloud database, I spent hours studying civil engineering drawings and sketching with pencil and paper. That background in visual drafting shaped how I approach software design today.

### Why Sketching Makes You a Better Developer
In a world full of digital design tools and code generators, picking up a physical pencil gives your brain room to breathe:
- **No Syntax to Worry About**: Paper lets you map out data flows, component boundaries, and spatial layouts without compiler warnings or CSS bugs.
- **Clearing Mental Noise**: Freehand drawing calms the mind and gives tricky architectural problems space to solve themselves.
- **Modular Thinking**: Engineering blueprints teach you that massive structures are built from simple, reusable geometric units—just like modular components in software.

Whenever you get stuck on a complex function or database relation, try stepping away from the monitor and sketching it out on paper first.`
  },
  {
    id: 'reading-books-wisdom',
    title: '20 Books That Shaped My Mind: From Philosophy to Fiction',
    description: 'A curated reflection on foundational books across Stoicism, science, literature, and personal growth that changed my worldview.',
    date: '2026-07-28',
    category: 'Books & Reading',
    readTime: '7 min read',
    type: 'non-tech',
    content: `Books are magical. They let us sit down with brilliant thinkers across centuries and absorb a lifetime of their insights in just a few hours.

Here are three key genres that have deeply shaped how I think and live:

### 1. Philosophy & Stoicism
Reading Stoic thinkers like Marcus Aurelius taught me to focus on what is within my direct control—my attitude, my work ethic, and the quality of my code—while letting go of external noise.

### 2. Deep Work & Focus
In a world full of notifications and endless scrolling, the ability to sit quietly and focus deeply on complex problems is a true superpower.

### 3. Timeless Literature & Fiction
Reading classic stories reminds us that human nature, hopes, and struggles stay remarkably similar, no matter how fast technology changes.

### Making Time for Books
* Read for 30 minutes every morning before opening email or social media.
* Keep a reading journal to jot down key ideas in your own words—writing helps lock in what you've learned.`
  },
  {
    id: 'everyday-prose-writing',
    title: 'On Writing: How Daily Journaling Clears Cognitive Noise',
    description: 'Why drafting personal essays, prose, and daily reflections is an essential mental exercise for engineers and creators.',
    date: '2026-07-20',
    category: 'Writing & Prose',
    readTime: '4 min read',
    type: 'non-tech',
    content: `Writing is how I make sense of my thoughts. If I can't explain an idea simply in written words, it usually means I haven't fully grasped it yet.

### How Daily Writing Helps
- **Clearing Mental Clutter**: Writing down thoughts, project ideas, or worries gets them out of your head so your mind can rest.
- **Better Communication**: Expressing yourself clearly in writing translates directly into better code documentation, clearer pull requests, and smoother team discussions.
- **Tracking Personal Growth**: Looking back at entries written months ago shows how much you've grown and learned over time.

Try writing just 200 to 300 words a day—not for an audience, but for yourself.`
  },
  {
    id: 'creative-hobbies-balance',
    title: 'Cultivating Hobbies & Hands-On Crafts Outside Software',
    description: 'Finding balance, restoration, and creative energy through physical hobbies, music, and hands-on crafts.',
    date: '2026-07-15',
    category: 'Hobbies & Lifestyle',
    readTime: '6 min read',
    type: 'non-tech',
    content: `Software development can be abstract—you spend hours manipulating digital logic, virtual DOM elements, and API routes. Engaging in tangible physical hobbies brings essential balance back into life.

### Ways to Unplug and Refresh
- **Music & Instruments**: Playing an instrument demands present-moment focus and muscle memory, giving your analytical brain a complete break.
- **Hands-On Crafting & Exercise**: Working out or building things with your hands restores physical energy and prevents burnout.
- **Walking in Nature**: Stepping outside and taking long walks resets your attention span and often sparks creative breakthroughs that don't happen sitting at a desk.

A long, enjoyable engineering career is built on maintaining a healthy, vibrant life outside the terminal.`
  },
  {
    id: 'designing-interactive-cli-hud-terminal',
    title: 'Designing an Interactive CLI & Cyberpunk HUD Terminal in Next.js 16',
    description: 'A deep architectural guide to crafting an ultra-fast developer HUD with monospaced JSON views, animated reticle overlays, and an interactive shell sandbox in React 19.',
    date: '2026-08-20',
    category: 'Frontend & UI',
    readTime: '9 min read',
    type: 'tech',
    content: `Modern developer portfolios often resemble static resumes—flat grids of project screenshots and lists of bullet points. But a software engineer's website should feel alive, reflecting the craftsmanship and systems thinking of its author.

In this guide, we break down the architecture of the Cyberpunk HUD Terminal built for [kuldeepvishwakarma.com](https://kuldeepvishwakarma.com)—combining monospaced JSON inspections, biometric photo reticles, live telemetry streams, and an interactive CLI shell sandbox in Next.js 16 and React 19.

### Step 1: The Multi-View Telemetry Architecture
Rather than forcing all information into a single view, we organize the HUD into 4 distinct operational modes:
* **01 // BIO.json**: A syntax-highlighted code editor view with line numbers and quick-copy payload triggers.
* **02 // OPERATOR.id**: A cybernetic biometric viewport featuring animated scanlines and coordinate telemetry.
* **03 // SHELL.sh**: An autoscrolling, command-driven CLI terminal sandbox.
* **04 // VITALS.sys**: A real-time telemetry card reporting edge CDN latency, SEO scores, and security ratings.

\`\`\`typescript
type HudView = 'code' | 'photo' | 'cli' | 'vitals';

export function TerminalHeader({ currentView, setView }: { currentView: HudView; setView: (v: HudView) => void }) {
  const tabs = [
    { id: 'code', label: '01 // BIO.json' },
    { id: 'photo', label: '02 // OPERATOR.id' },
    { id: 'cli', label: '03 // SHELL.sh' },
    { id: 'vitals', label: '04 // VITALS.sys' },
  ];

  return (
    <div className="flex items-center space-x-1 font-mono text-[10px]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setView(tab.id as HudView)}
          className={\`px-2 py-0.5 rounded transition-all \${
            currentView === tab.id
              ? 'text-indigo-400 bg-indigo-500/10 font-bold border border-indigo-500/30'
              : 'text-zinc-500 hover:text-zinc-300'
          }\`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
\`\`\`

### Step 2: The Interactive CLI Command Dispatcher
The terminal sandbox maintains history in memory and dispatches commands with zero external runtime dependencies:

\`\`\`typescript
interface CliEntry {
  command: string;
  output: string;
}

export function useTerminalShell() {
  const [history, setHistory] = useState<CliEntry[]>([
    { command: 'init', output: 'KCV Terminal Sandbox v2.6.4 [ONLINE]. Type "help" for commands.' }
  ]);
  const [input, setInput] = useState('');

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let output = '';

    switch (trimmed) {
      case 'help':
        output = 'Available: bio, stack, startups, projects, vitals, neofetch, uptime, hire, clear';
        break;
      case 'stack':
        output = 'Next.js 16, TypeScript, Python 3.12, FastAPI, Supabase, PostgreSQL, Gemini AI, Tailwind v4';
        break;
      case 'neofetch':
        output = 'OS: KCV-OS v2.6.4 | Host: Vercel Edge Runtime | Uptime: 99.98% | Packages: 36 Static Routes';
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        output = \`Command "\${trimmed}" not found. Type "help" for commands.\`;
    }

    setHistory((prev) => [...prev, { command: trimmed, output }]);
  };

  return { history, input, setInput, executeCommand };
}
\`\`\`

### Step 3: Cybernetic Scanlines with Pure CSS
To create the retro-futuristic CRT scanline effect without heavy gif or canvas assets, we use CSS keyframe transforms:

\`\`\`css
@keyframes cyber-scan {
  0% { transform: translateY(-100%); opacity: 0; }
  50% { opacity: 0.8; }
  100% { transform: translateY(1000%); opacity: 0; }
}

.animate-cyber-scan {
  animation: cyber-scan 3.5s ease-in-out infinite;
}
\`\`\`

### Architectural Principles
* **Zero Performance Tax**: The entire HUD compiles to static semantic markup and uses CSS GPU acceleration for all animations.
* **Accessibility**: Screen readers can navigate code and vitals tabs transparently without interactive locks.
* **Developer Delight**: Little touches—like the \`neofetch\` command and confetti bursts on \`hire\`—turn casual visitors into memorable engagements.`
  },
  {
    id: 'autonomous-ai-agents-gemini-zod-workflows',
    title: 'Autonomous AI Reasoning Agents: Structuring Deterministic Workflows with Gemini & Zod',
    description: 'Master agentic workflow orchestration, schema-constrained LLM generation, recursive tool calling, and defensive error mitigation for mission-critical applications.',
    date: '2026-08-14',
    category: 'AI & LLMs',
    readTime: '10 min read',
    type: 'tech',
    content: `Building toy LLM demos is straightforward. But moving an LLM pipeline into a mission-critical production environment—such as automated candidate evaluation in CandidAI or RSS news deduplication in StartupWire—demands absolute determinism.

If an LLM drops a required JSON key, returns malformed markdown, or hallucinates an invalid status, downstream database writes fail. Here is how we enforce strict typing, recursive validation, and agentic reasoning using Google Gemini and Zod.

### The Problem: Unconstrained Generation
Standard prompt engineering often asks the model to "Return valid JSON". However, under high concurrency or ambiguous inputs, LLMs frequently:
1. Wrap JSON in unwanted backticks (\`\`\`json ... \`\`\`).
2. Hallucinate schema fields that do not exist in your database models.
3. Drop numeric precision or convert arrays into comma-separated strings.

### Step 1: The Contract-First Schema with Zod
Define your data contract with Zod first. This single schema serves as runtime validator, TypeScript type inference, and JSON schema definition for the model.

\`\`\`typescript
import { z } from 'zod';

export const CandidateEvaluationSchema = z.object({
  candidateName: z.string().min(1),
  primaryRole: z.string(),
  yearsOfExperience: z.number().nonnegative(),
  matchedSkills: z.array(z.string()).min(1),
  missingQualifications: z.array(z.string()),
  recommendationScore: z.number().min(0).max(100),
  reasoningNotes: z.string().max(500),
  actionRecommended: z.enum(['FAST_TRACK', 'SCHEDULE_SCREEN', 'REJECT'])
});

export type CandidateEvaluation = z.infer<typeof CandidateEvaluationSchema>;
\`\`\`

### Step 2: Deterministic Schema Ingestion via Gemini API
Configure Google's Gemini SDK with \`responseSchema\` and \`responseMimeType: "application/json"\` to constrain the model's token decoding probability space to conform strictly to the JSON schema:

\`\`\`typescript
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function evaluateCandidateResume(resumeText: string): Promise<CandidateEvaluation> {
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    generationConfig: {
      temperature: 0.1, // Low temperature for maximum determinism
      responseMimeType: 'application/json'
    }
  });

  const prompt = \`
You are an expert technical recruiting agent. Evaluate the following candidate resume against a Senior Full-Stack Software Engineer specification.
Return strictly valid JSON adhering to the specified schema contract.

Resume Content:
\${resumeText}
\`;

  const result = await model.generateContent(prompt);
  const rawJson = JSON.parse(result.response.text());

  // Strict runtime validation ensures zero unexpected keys reach your database
  const validatedData = CandidateEvaluationSchema.parse(rawJson);
  return validatedData;
}
\`\`\`

### Step 3: Defensive Retries with Exponential Backoff
Even with constrained decoding, network timeouts and token limits can interrupt generation. Wrap agent invocations in a resilient retry loop:

\`\`\`typescript
export async function withAgentRetry<T>(
  task: () => Promise<T>,
  maxRetries = 3,
  delayMs = 500
): Promise<T> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await task();
    } catch (error) {
      if (attempt === maxRetries) throw error;
      console.warn(\`Agent execution failed (attempt \${attempt}/\${maxRetries}). Retrying in \${delayMs}ms...\`);
      await new Promise((resolve) => setTimeout(resolve, delayMs));
      delayMs *= 2;
    }
  }
  throw new Error('Unreachable state in agent retry wrapper');
}
\`\`\`

### Key Production Lessons
1. **Always Calibrate Temperature**: For analytical extraction or categorization, set temperature to \`0.0\` or \`0.1\`. Save higher creativity values (\`0.7+\`) for narrative writing.
2. **Double-Lock with Zod**: Even if the model claims to enforce schemas, validate runtime outputs using Zod before passing payloads to PostgreSQL or Supabase.
3. **Log Raw Inputs**: When an agent fails, save the exact prompt input and token output to a debug ledger to audit edge-case failures.`
  },
  {
    id: 'from-civil-blueprints-to-distributed-systems',
    title: 'From Civil Blueprints to Distributed Systems: Lessons from Engineering Transitions',
    description: 'How the physical mechanics of load distribution, structural drafting, and material tension directly inform resilient distributed software architecture.',
    date: '2026-08-08',
    category: 'Career & Mindset',
    readTime: '7 min read',
    type: 'non-tech',
    content: `Before I spent my days writing Next.js route handlers, configuring pgvector indexes, and auditing cryptographic JWT signatures, my world looked very different.

I wore steel-toed boots and hard hats, drafting structural blueprints, calculating concrete compressive strengths, and analyzing load distributions across steel trusses in civil engineering.

When I decided to teach myself programming and formally transition into Computer Science—graduating with honors in B.Tech CSE and advancing into an MSc in Computer Science—many people assumed I had thrown away three years of foundational engineering training.

They were wrong.

Civil engineering didn't slow down my software career. It gave me an unfair systems-thinking advantage.

### 1. Concrete Beams and Database Shards: Both Distribute Load
In structural engineering, no single beam is expected to carry the entire weight of a multi-story building. You analyze dead loads (the weight of the structure itself) and live loads (people, wind, furniture, earthquakes). You distribute that weight across footings, columns, and foundations.

When I first learned about distributed database sharding, horizontal autoscaling, and content delivery networks (CDNs), the concept wasn't foreign—it was intuitive.

An edge CDN node like Vercel or Cloudflare is simply a distributed cantilever truss: it intercepts traffic at the perimeter so the central server foundation doesn't buckle under sudden stress.

### 2. Failure Modes: Why Buildings and Microservices Collapse
Civil engineers are trained to obsess over failure modes:
* What happens when material fatigue sets in?
* What happens when a thermal expansion joint seizes?
* What is the safety margin for catastrophic wind loads?

Software engineers often design for the "happy path"—when network connections are 100% stable, third-party APIs never fail, and database queries return in 5ms.

My civil background taught me to assume that anything under tension *will* eventually fail:
* APIs will encounter timeouts.
* External webhooks will send malformed payloads.
* Database connections will pool-exhaust under burst traffic.

Designing with defensive fallbacks—like the retry loops and in-memory caches we engineered for StartupWire and Sentinel Guard—is the software equivalent of installing reinforced rebar in concrete.

### 3. Draft the Blueprint Before Pouring the Foundation
In construction, you don't pour concrete and then decide where the plumbing should go. Reworking physical concrete after it cures costs hundreds of thousands of dollars. You draft blueprints down to the millimeter first.

In software, it's dangerously easy to open an editor, start typing, and accumulate architectural debt before understanding the data schema.

Taking the time to draft clean TypeScript interfaces, document API request/response contracts, and sketch data flow diagrams saves countless hours of painful refactoring down the road.

### The Builder's Ethos
Whether you are building bridges out of steel or applications out of code, the core identity is the same: **you are a builder who solves problems for human beings.**

Embrace your non-linear background. Cross-disciplinary curiosity isn't a distraction—it is the very foundation of extraordinary engineering.`
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
