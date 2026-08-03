import { NextResponse } from 'next/server';
import { addCapturedPost } from '../telegram-feed/store';

function escapeHtml(str: string): string {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export async function POST(request: Request) {
  try {
    const update = await request.json();

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const personalChatId = process.env.TELEGRAM_CHAT_ID;

    // Extract message or channel_post or group activity
    const message = update.message || update.channel_post || update.edited_message;

    if (message) {
      const chatId = message.chat?.id?.toString();
      const chatTitle = message.chat?.title || message.chat?.username || 'Private / Group Chat';
      const chatType = message.chat?.type; // 'group', 'supergroup', 'channel', 'private'

      const senderName = message.from ? `${message.from.first_name || ''} ${message.from.last_name || ''}`.trim() : 'Anonymous';
      const senderUsername = message.from?.username ? `@${message.from.username}` : '';
      const text = message.text || message.caption || '';
      const messageId = message.message_id?.toString() || Date.now().toString();

      // Capture post for the live website feed
      if (text || message.photo) {
        let photoUrl: string | undefined = undefined;
        if (message.photo && Array.isArray(message.photo) && message.photo.length > 0) {
          const fileId = message.photo[message.photo.length - 1].file_id;
          if (botToken) {
            photoUrl = `https://api.telegram.org/file/bot${botToken}/${fileId}`;
          }
        }

        addCapturedPost({
          id: messageId,
          text,
          date: new Date(message.date * 1000).toLocaleString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', month: 'short', day: 'numeric' }),
          link: message.chat?.username ? `https://t.me/${message.chat.username}/${messageId}` : `https://t.me/KCVOS_bot`,
          photo: photoUrl,
          chatTitle,
          senderName
        });
      }

      // Avoid looping if the message is from personal chat
      if (botToken && personalChatId && chatId !== personalChatId && (chatType === 'group' || chatType === 'supergroup' || chatType === 'channel')) {
        const alertText = 
          `🛡️ <b>[Bot Group/Channel Watchdog]</b>\n\n` +
          `📍 <b>Location:</b> ${escapeHtml(chatTitle)} (<i>${chatType}</i>)\n` +
          `👤 <b>Sender:</b> ${escapeHtml(senderName)} ${escapeHtml(senderUsername)}\n` +
          `💬 <b>Content:</b>\n${escapeHtml(text || '[Attachment]')}\n\n` +
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
