'use client';

import React, { useState, useEffect } from 'react';
import { Send, ExternalLink, Eye, RefreshCw, Sparkles, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export interface TelegramPost {
  id: string;
  text: string;
  date: string;
  views?: string;
  link: string;
  photo?: string;
}

interface TelegramFeedProps {
  channelUsername?: string;
  title?: string;
  subtitle?: string;
}

export default function TelegramFeed({
  channelUsername = 'KCVOS',
  title = 'Telegram Live Channel Feed',
  subtitle = 'Real-time updates, announcements & technical logs'
}: TelegramFeedProps) {
  const [posts, setPosts] = useState<TelegramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [channel, setChannel] = useState(channelUsername);

  const fetchFeed = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/telegram-feed?channel=${encodeURIComponent(channel)}`);
      const data = await res.json();
      if (data.success && Array.isArray(data.posts)) {
        setPosts(data.posts);
        if (data.channel) setChannel(data.channel);
      }
    } catch (err) {
      console.error('Failed to load Telegram feed:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, [channelUsername]);

  return (
    <div className="bg-stone-900/60 dark:bg-stone-950/80 border border-stone-800 dark:border-stone-800/80 rounded-2xl p-6 shadow-2xl backdrop-blur-xl transition-all">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
            <Send className="w-5 h-5 -rotate-45" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
              {title}
              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                Live Feed
              </span>
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={fetchFeed}
            disabled={loading}
            className="p-2 text-zinc-400 hover:text-zinc-100 bg-stone-800/60 hover:bg-stone-800 rounded-lg border border-stone-700/50 transition-all disabled:opacity-50"
            title="Refresh Feed"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <a
            href={`https://t.me/${channel}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors shadow-lg shadow-sky-600/20"
          >
            <Send className="w-3.5 h-3.5" />
            Join @{channel}
          </a>
        </div>
      </div>

      {/* Feed List */}
      <div className="mt-6 space-y-4 max-h-[500px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-stone-700 scrollbar-track-transparent">
        {loading && posts.length === 0 ? (
          <div className="py-12 text-center text-zinc-500 font-mono text-xs flex flex-col items-center gap-2">
            <RefreshCw className="w-5 h-5 animate-spin text-sky-400" />
            <span>Fetching live posts from Telegram channel...</span>
          </div>
        ) : posts.length === 0 ? (
          <div className="py-10 text-center text-zinc-400 font-mono text-xs bg-stone-900/40 rounded-xl border border-stone-800/80 p-6">
            <MessageSquare className="w-6 h-6 mx-auto mb-2 text-zinc-600" />
            <p>No recent channel posts found or channel is set to private.</p>
            <a
              href={`https://t.me/${channel}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-sky-400 hover:underline text-xs"
            >
              Visit @{channel} directly on Telegram <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        ) : (
          posts.map((post, idx) => (
            <motion.div
              key={post.id || idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: idx * 0.05 }}
              className="bg-stone-900/80 hover:bg-stone-850 border border-stone-800/80 hover:border-stone-700/80 rounded-xl p-4 transition-all group"
            >
              {post.photo && (
                <div className="mb-3 overflow-hidden rounded-lg border border-stone-800 max-h-56">
                  <img
                    src={post.photo}
                    alt="Telegram Post attachment"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              {post.text && (
                <p className="text-xs text-zinc-200 whitespace-pre-wrap leading-relaxed font-sans">
                  {post.text}
                </p>
              )}
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-stone-800/60 text-[11px] text-zinc-400 font-mono">
                <span className="flex items-center gap-2">
                  <span className="text-zinc-400">{post.date}</span>
                  {post.views && (
                    <span className="flex items-center gap-1 text-zinc-500">
                      <Eye className="w-3 h-3" />
                      {post.views}
                    </span>
                  )}
                </span>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 opacity-80 group-hover:opacity-100 transition-opacity"
                >
                  View post <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
