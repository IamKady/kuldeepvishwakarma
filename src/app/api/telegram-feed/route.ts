import { NextResponse } from 'next/server';
import { getCapturedPosts } from './store';

export interface TelegramPost {
  id: string;
  text: string;
  date: string;
  views?: string;
  link: string;
  photo?: string;
  chatTitle?: string;
  senderName?: string;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    let channel = searchParams.get('channel') || process.env.TELEGRAM_CHANNEL_USERNAME || process.env.NEXT_PUBLIC_TELEGRAM_CHANNEL;

    if (!channel) {
      channel = 'KCVOS_bot';
    }

    // First check captured posts from @KCVOS_bot webhook
    const captured = getCapturedPosts();
    if (captured && captured.length > 0) {
      return NextResponse.json({
        success: true,
        channel,
        posts: captured,
      });
    }

    // Clean channel handle (remove @ or url prefixes)
    channel = channel.replace(/^https?:\/\/t\.me\//, '').replace(/^@/, '').replace(/\/$/, '');


    const res = await fetch(`https://t.me/s/${channel}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      },
      next: { revalidate: 300 } // Cache for 5 minutes
    });

    if (!res.ok) {
      return NextResponse.json({ success: false, channel, posts: [] }, { status: 200 });
    }

    const html = await res.text();
    const posts: TelegramPost[] = [];

    const messageBlocks = html.split('<div class="tgme_widget_message_wrap');
    
    for (let i = 1; i < messageBlocks.length && posts.length < 10; i++) {
      const block = messageBlocks[i];

      // Extract message link & ID
      const linkMatch = block.match(/href="(https:\/\/t\.me\/[^/]+\/(\d+))"/);
      const link = linkMatch ? linkMatch[1] : `https://t.me/${channel}`;
      const id = linkMatch ? linkMatch[2] : `post-${i}`;

      // Extract text content
      const textMatch = block.match(/<div class="tgme_widget_message_text[^"]*"[^>]*>([\s\S]*?)<\/div>/);
      let text = textMatch ? textMatch[1] : '';

      text = text
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<a\b[^>]*>(.*?)<\/a>/gi, '$1')
        .replace(/<[^>]+>/g, '')
        .trim();

      // Extract date / time
      const timeMatch = block.match(/<time class="time" datetime="([^"]+)">([^<]+)<\/time>/);
      const date = timeMatch ? timeMatch[2].trim() : 'Recently';

      // Extract views count
      const viewsMatch = block.match(/<span class="tgme_widget_message_views">([^<]+)<\/span>/);
      const views = viewsMatch ? viewsMatch[1].trim() : undefined;

      // Extract image photo url
      const photoMatch = block.match(/background-image:url\('([^']+)'\)/);
      const photo = photoMatch ? photoMatch[1] : undefined;

      if (!text && !photo) continue;

      posts.push({
        id,
        text,
        date,
        views,
        link,
        photo,
      });
    }

    return NextResponse.json({
      success: true,
      channel,
      posts,
    });
  } catch (error) {
    console.error('Error parsing Telegram channel feed:', error);
    return NextResponse.json({ success: false, channel: '', posts: [] }, { status: 500 });
  }
}
