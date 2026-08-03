import { NextResponse } from 'next/server';

function escapeHtml(str: string): string {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export async function POST(request: Request) {
  try {
    const update = await request.json();

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const personalChatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !personalChatId) {
      return NextResponse.json({ ok: true, message: 'Bot credentials not set' });
    }

    // Extract message or channel_post or group activity
    const message = update.message || update.channel_post || update.edited_message;

    if (message) {
      const chatId = message.chat?.id?.toString();
      const chatTitle = message.chat?.title || message.chat?.username || 'Private / Group Chat';
      const chatType = message.chat?.type; // 'group', 'supergroup', 'channel', 'private'

      // Avoid looping if the message is from personal chat or bot itself
      if (chatId !== personalChatId && (chatType === 'group' || chatType === 'supergroup' || chatType === 'channel')) {
        const senderName = message.from ? `${message.from.first_name || ''} ${message.from.last_name || ''}`.trim() : 'Anonymous';
        const senderUsername = message.from?.username ? `@${message.from.username}` : '';
        const text = message.text || message.caption || '[Media / Attachment]';

        const alertText = 
          `🛡️ <b>[Bot Group/Channel Watchdog]</b>\n\n` +
          `📍 <b>Location:</b> ${escapeHtml(chatTitle)} (<i>${chatType}</i>)\n` +
          `👤 <b>Sender:</b> ${escapeHtml(senderName)} ${escapeHtml(senderUsername)}\n` +
          `💬 <b>Content:</b>\n${escapeHtml(text)}\n\n` +
          `🌐 <i>Monitored via @KCVOS_bot</i>`;

        // Send alert to personal Telegram chat
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: personalChatId,
            text: alertText,
            parse_mode: 'HTML',
          }),
        });
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error in telegram-webhook route:', error);
    return NextResponse.json({ ok: true }, { status: 200 });
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'online',
    bot: 'KCVOS_bot Watchdog Service',
    description: 'Endpoint active for Telegram webhook group monitoring and site telemetry.'
  });
}
