export interface CapturedPost {
  id: string;
  text: string;
  date: string;
  views?: string;
  link: string;
  photo?: string;
  chatTitle?: string;
  senderName?: string;
}

// In-memory store for recent posts captured by @KCVOS_bot
const recentPosts: CapturedPost[] = [
  {
    id: 'system-init',
    text: '🚀 @KCVOS_bot Watchdog connected. New posts published in your Telegram channel or group will appear here live.',
    date: 'System Online',
    link: 'https://t.me/KCVOS_bot',
    chatTitle: 'KCVOS Live Watchdog',
    senderName: 'System'
  }
];

export function getCapturedPosts(): CapturedPost[] {
  return recentPosts;
}

export function addCapturedPost(post: CapturedPost) {
  if (!post.text && !post.photo) return;
  // Deduplicate by ID
  if (recentPosts.some(p => p.id === post.id)) return;
  recentPosts.unshift(post);
  // Keep last 25 posts
  if (recentPosts.length > 25) {
    recentPosts.pop();
  }
}
