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
    id: 'albertquizbot',
    title: 'AlbertQuizBot - Telegram Quiz Bot',
    tagline: 'Interactive Telegram Quiz Bot for Study Groups & Automated Practice',
    status: 'Active',
    logo: '🧠',
    categoryTag: 'SaaS & AI',
    technologies: ['Python 3.12', 'Telegram Bot API', 'Asyncio', 'JSON-Schema', 'AI Prompting', 'Vercel'],
    github: 'https://github.com/IamKady/ALBERTQUIZBOT',
    live: 'https://github.com/IamKady/ALBERTQUIZBOT',
    summary: 'A friendly Telegram bot built to run automated quiz sessions, instant scores, and interactive practice polls for students and study communities.',
    whatIAmDoingAndLearning: 'Engineering asynchronous Python Telegram bot handlers, structuring quiz schemas, managing multi-user quiz state concurrently, and building real-time score tracking.',
    caseStudy: {
      overview: 'AlbertQuizBot was engineered to automate interactive quizzes and assessments directly inside Telegram channels and group chats.',
      problem: 'Manual quiz creation and score tracking in Telegram communities are slow and unstructured. Existing quiz bots lack flexible subject management and dynamic prompt-based question generation.',
      research: 'Audited Telegram Quiz & Poll APIs, JSON schema validation, and asynchronous event loops. Created a modular Python architecture for managing quiz questions and user scoring.',
      targetUsers: 'Students, educators, study groups, and technical communities seeking automated quiz generation and assessment.',
      planning: 'Designed a lightweight Python async daemon with structured JSON data storage for question banks and user session states.',
      design: 'Clean Telegram inline menu interfaces with instant feedback badges and timer-based quiz prompts.',
      architectureDiagram: `
+-----------------------+     +------------------------+     +-------------------+
|  Telegram User Event  | --> | Async Python Handler   | --> | Quiz Engine       |
|  (/quiz, /start)      |     | (python-telegram-bot)  |     | (JSON Question DB)|
+-----------------------+     +------------------------+     +-------------------+
                                                                        |
                                                                        v
+-----------------------+     +------------------------+     +-------------------+
|  User Leaderboard     | <-- | Session State Tracker  | <-- | Instant Scoring   |
|  (Chat Broadcast)     |     | (Async Memory Cache)   |     | (Option Validator)|
+-----------------------+     +------------------------+     +-------------------+
      `,
      databaseSpecs: 'Structured JSON data models storing question banks, user response histories, and leaderboard metrics.',
      authenticationFlow: 'Telegram Bot Token authentication, Telegram user ID session mapping, and chat authorization guards.',
      securityProtocols: 'Sanitized command inputs, secure environment variable configuration for tokens, and rate-limit guardrails.',
      seoOptimization: 'Structured micro-data and descriptive GitHub repository documentation.',
      performanceTuning: 'Non-blocking async event handlers with python-telegram-bot async loops ensuring instant sub-100ms command response speeds.',
      development: 'Developed in Python 3.12 utilizing modern async/await syntax and modular handler modules.',
      architecture: 'Telegram Client -> Python Async Bot Handler -> Quiz Engine -> Leaderboard Relay.',
      seo: 'Clean README and structured open-source repository tags.',
      challenges: 'Managing concurrent quiz sessions across multiple group chats without state collisions. Resolved by keying sessions by unique Telegram chat and user IDs.',
      tradeOffs: 'Chose asynchronous polling over webhook hosting for instant local testing and simplified serverless deployment.',
      lessons: 'Asynchronous event loops in Python provide scalable execution for interactive bot workflows.',
      futureRoadmap: 'Integrate LLM API for dynamic AI-generated question banks and multi-subject adaptive quizzes.',
      timeline: 'Aug 2026'
    },
    metrics: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 95,
      loadTimeMs: 85
    }
  },
  {
    id: 'candidbot',
    title: 'CandidBot - Smart AI Telegram Assistant',
    tagline: 'AI Telegram Assistant for Candidate Screening & Team Notifications',
    status: 'Active',
    logo: '🤖',
    categoryTag: 'SaaS & AI',
    technologies: ['TypeScript', 'Node.js', 'Python 3.12', 'Telegram Bot API', 'Google Gemini API', 'Zod', 'Next.js 16 App Router', 'Tailwind CSS v4', 'Vercel'],
    github: 'https://github.com/IamKady/candidbot',
    live: 'https://github.com/IamKady/candidbot',
    summary: 'An intelligent Telegram assistant built for candidate screening, instant notifications, conversational query processing, and AI workflow execution.',
    whatIAmDoingAndLearning: 'Engineering asynchronous AI prompt pipelines, developing robust rate-limit retry handlers, structuring JSON schemas for LLM agent outputs, and building stateful bot webhooks with sub-100ms execution speeds.',
    caseStudy: {
      overview: 'CandidBot was designed to simplify interactive user query processing, automated candidate screening, and instant notification dispatching via intelligent LLM agent pipelines.',
      problem: 'Manual candidate evaluation and system alert tracking suffer from human delays and fragmented tools. Standard bots lack structured schema outputs and fail to handle rate limits during high-concurrency event bursts.',
      research: 'Audited Telegram Bot API, OpenAI/Gemini SDKs, and async message queue dispatchers. Built a lightweight event-driven pipeline that formats unstructured user prompts into actionable JSON data.',
      targetUsers: 'Founders, recruiting teams, and developers looking for automated candidate screening and instant system notification bots.',
      planning: 'Structured a dual-layer architecture: Webhook event listener parsing inbound triggers, and an LLM prompt engine evaluating inputs against pre-defined qualification matrices.',
      design: 'Clean monospaced telemetry dashboard interface with real-time status indicators, execution timers, and structured logging tables.',
      architectureDiagram: `
+-----------------------+     +------------------------+     +-------------------+
|  User / Client Event  | --> | Webhook Relay Server   | --> | LLM Agent Engine  |
|  (Inbound Trigger)    |     | (Node.js / Next.js)    |     | (Gemini / OpenAI) |
+-----------------------+     +------------------------+     +-------------------+
                                                                       |
                                                                       v
+-----------------------+     +------------------------+     +-------------------+
|  Telemetry UI         | <-- | Notification Relay     | <-- | Structured JSON   |
|  (Live Activity Feed) |     | (Telegram / Discord)   |     | (Output Parser)   |
+-----------------------+     +------------------------+     +-------------------+
      `,
      databaseSpecs: 'PostgreSQL / Supabase storage schema for prompt logs, bot session tokens, and user query evaluation histories.',
      authenticationFlow: 'Bot Token secret verification, HMAC secret header validation on webhook callbacks, and chat ID authorization guards.',
      securityProtocols: 'Sanitized prompt inputs, encrypted token management via environment secrets, and strict CORS configuration.',
      seoOptimization: 'Structured JSON-LD schema objects and clean semantic markup for discoverability.',
      performanceTuning: 'Asynchronous non-blocking message processing queue with exponential backoff handling to prevent rate limiting.',
      development: 'Developed from scratch using TypeScript, Node.js, Python, and Next.js App Router.',
      architecture: 'Client Gateway -> Webhook Daemon -> LLM Engine -> Notification Relay.',
      seo: 'Semantic HTML5 structure and clean URL parameters.',
      challenges: 'Handling LLM schema hallucinations during complex query evaluation. Resolved by enforcing Zod validation schemas and strict system prompts.',
      tradeOffs: 'Chose serverless webhook handlers over persistent background daemons to maintain minimal idle cost and zero server maintenance overhead.',
      lessons: 'Structured JSON validation on AI outputs is essential for deterministic bot workflow execution.',
      futureRoadmap: 'Expand multi-channel integration (Discord, Slack, Teams) and implement voice note parsing.',
      timeline: 'Aug 2026'
    },
    metrics: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
      loadTimeMs: 90
    }
  },
  {
    id: 'telegram-ai-bot',
    title: 'AI Telegram Watchdog & Live Feed System',
    tagline: 'Real-Time Security Alert Relay & Telegram Channel Broadcast Feed',
    status: 'Active',
    logo: '📡',
    categoryTag: 'SaaS & AI',
    technologies: ['Next.js 16 App Router', 'Telegram Bot API', 'TypeScript', 'Node.js', 'Webhooks', 'Zustand', 'Tailwind CSS v4', 'Vercel Edge'],
    github: 'https://github.com/IamKady/kuldeepvishwakarma',
    live: '/contact',
    summary: 'A real-time contact notification relay and live channel broadcast feed powered by Telegram webhooks, delivering instant mobile alerts and site updates.',
    whatIAmDoingAndLearning: 'Engineering secure Telegram Webhook SSL routing, handling asynchronous message dispatchers with zero-delay UX fallbacks, and creating stateful live broadcast feeds inside Next.js App Router.',
    caseStudy: {
      overview: 'Engineered a full-duplex Telegram bot integration to bridge instant site telemetry with custom mobile notifications. It serves as both an inbound watchdog for user contact inquiries and an outbound channel broadcast feed on the developer portfolio.',
      problem: 'Traditional email contact forms suffer from spam, high latency, and delivery failures. Additionally, updating site visitors on active software releases requires manual CMS posts or costly third-party push notification services.',
      research: 'Audited Telegram Bot API webhooks and Long Polling mechanisms. Selected webhook routing via Next.js serverless API handlers (/api/telegram-webhook) for sub-second execution speeds and zero server overhead when idle.',
      targetUsers: 'Recruiters seeking immediate responses, site administrators requiring real-time threat/contact alerts, and subscribers following live tech updates.',
      planning: 'Designed a dual-channel architecture: Inbound user contact submissions automatically format Markdown alerts to the admin Telegram ID, while inbound channel messages parse structured events into a stateful client broadcast feed.',
      design: 'Clean monospaced HUD panels with emerald pulse indicators, channel post cards, and instantaneous feedback badges.',
      architectureDiagram: `
+-----------------------+     +------------------------+     +-------------------+
|  Contact Form & Site  | --> | Next.js API Route      | --> | Telegram Bot API  |
|  (User Inquiries)     |     | (/api/contact)         |     | (Admin Alert Chat)|
+-----------------------+     +------------------------+     +-------------------+
                                                                       |
                                                                       v
+-----------------------+     +------------------------+     +-------------------+
|  Client Portfolio     | <-- | Live Zustand Feed Store| <-- | Next.js Webhook   |
|  (Live UI Component)  |     | (/api/telegram-feed)   |     | (/telegram-webhook)|
+-----------------------+     +------------------------+     +-------------------+
      `,
      databaseSpecs: 'In-memory stateful store (store.ts) with LocalStorage client rehydration fallback, guaranteeing instantaneous UI updates without database latency.',
      authenticationFlow: 'Telegram Bot Token authentication with chat ID authorization guards and secret token validation on webhook callbacks.',
      securityProtocols: 'Strict webhook secret header validation, sanitization of HTML/Markdown entities, input schema validation via TypeScript, and fallback to Gmail SMTP on network failure.',
      seoOptimization: 'Structured micro-data headers, clean semantic markup, and static page hydration for fast crawler evaluation.',
      performanceTuning: 'Non-blocking async message dispatchers, background execution loops, and zero DOM layout thrashing using CSS transform animations.',
      development: 'Developed using Next.js 16 App Router, TypeScript, and Zustand for state synchronization.',
      architecture: 'Client UI -> Next.js API Routes -> Telegram Webhook Gateway -> Zustand Live Feed Engine.',
      seo: 'Semantic HTML markup and clean component boundaries.',
      challenges: 'Preventing contact submission blocking if Telegram API encounters network timeouts. Solved by firing the Telegram notification first and wrapping it in an isolated try-catch fallback block.',
      tradeOffs: 'Chose an in-memory state store with client-side cache fallback over external DB tables for zero latency during live demo interactions.',
      lessons: 'Direct webhook integrations provide vastly superior real-time notification UX compared to legacy polling or email notifications.',
      futureRoadmap: 'Implement LLM auto-replies to user inquiries directly via Telegram Admin bot commands.',
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
    title: 'Web Standards & CSS Architecture',
    tagline: 'Semantic HTML5, Flexbox/Grid Systems, and Responsive UI Standards',
    status: 'Active',
    logo: '🎨',
    categoryTag: 'Learning Labs',
    technologies: ['Semantic HTML5', 'CSS3 Custom Properties', 'CSS Flexbox', 'CSS Grid Layout', 'WCAG 2.1 Accessibility', 'CSS Clamp / Fluid Typography'],
    github: 'https://github.com/IamKady/HTML-COMPLETE',
    summary: 'An extensive reference and practice repository covering semantic HTML5 structure, modern CSS flexbox & grid design systems, and responsive layout standards.',
    whatIAmDoingAndLearning: 'Deepening knowledge of semantic HTML5 element hierarchies, web accessibility (WCAG), CSS grid layout algorithms, and modern CSS custom property design systems.',
    caseStudy: {
      overview: 'Built a foundational web development guide and code repository mastering modern layout algorithms and design tokens.',
      problem: 'Many web developers rely on heavy frameworks without understanding core CSS layout mechanics.',
      research: 'Audited W3C HTML5 specifications and MDN web docs.',
      targetUsers: 'Frontend developers wanting rock-solid mastery of HTML5 and CSS3.',
      planning: 'Structured lessons covering selectors, flexbox, grid, animations, and accessibility.',
      design: 'High-contrast responsive UI components with clean CSS custom properties.',
      architectureDiagram: `
+-----------------------------------+
|      Semantic HTML5 Document     |
+-----------------------------------+
                  |
        +---------+---------+
        v                   v
+---------------+   +---------------+
| CSS Grid      |   | Flexbox       |
| Layout System |   | Components    |
+---------------+   +---------------+
      `,
      databaseSpecs: 'N/A',
      authenticationFlow: 'N/A',
      securityProtocols: 'WCAG 2.1 accessibility compliance guidelines.',
      seoOptimization: 'Semantic tag hierarchy (h1-h6, main, section, nav, footer).',
      performanceTuning: 'Pure CSS rendering with zero JavaScript overhead.',
      development: 'Written in pure HTML5 and vanilla CSS3.',
      architecture: 'HTML5 Semantic Tree -> CSS Custom Property Design Tokens.',
      seo: 'High semantic score.',
      challenges: 'Ensuring 100% responsive behavior on all viewport sizes. Solved using fluid CSS clamp() function.',
      tradeOffs: 'Used pure CSS without frameworks to gain complete mastery over browser layout engines.',
      lessons: 'Solid CSS fundamentals make framework adoption effortless.',
      futureRoadmap: 'Add CSS container query examples.',
      timeline: 'May 2024 - Present'
    },
    metrics: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
      loadTimeMs: 70
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

export const blogsData: BlogPost[] = [
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
