import { NextResponse } from 'next/server';

interface TokenResponse {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
}

interface GmailSendResponse {
  id: string;
  threadId: string;
  labelIds: string[];
}

function base64urlEncode(str: string): string {
  return Buffer.from(str)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, name, email, subject, message, date, time } = body;

    // Retrieve credentials from environment variables
    const gmailUser = process.env.GMAIL_USER;
    const clientId = process.env.GMAIL_CLIENT_ID;
    const clientSecret = process.env.GMAIL_CLIENT_SECRET;
    const refreshToken = process.env.GMAIL_REFRESH_TOKEN;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || gmailUser;

    // Check if configuration is missing
    if (!gmailUser || !clientId || !clientSecret || !refreshToken) {
      console.error('Gmail API configuration parameters are missing from environment variables.');
      return NextResponse.json(
        {
          error: 'Configuration Error',
          message: 'Gmail API credentials are not configured on the server. Fallback to mailto client.',
          fallback: true
        },
        { status: 500 }
      );
    }

    // 1. Refresh OAuth2 Access Token
    const tokenParams = new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    });

    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: tokenParams.toString(),
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error('Failed to refresh Google OAuth token:', errorText);
      return NextResponse.json(
        {
          error: 'Authentication Error',
          message: 'Failed to authenticate with Google APIs. Fallback to mailto client.',
          fallback: true
        },
        { status: 502 }
      );
    }

    const tokenData = (await tokenResponse.json()) as TokenResponse;
    const accessToken = tokenData.access_token;

    // 2. Draft Email HTML templates
    let emailSubject = '';
    let emailHtml = '';

    if (type === 'booking') {
      emailSubject = `Zoom Meeting Booking: ${name}`;
      emailHtml = `
<div style="font-family: monospace, sans-serif; background-color: #0c0a09; color: #e4e4e7; padding: 24px; border: 1px solid #27272a; border-radius: 12px; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.5);">
  <div style="border-bottom: 1px solid #27272a; padding-bottom: 16px; margin-bottom: 20px;">
    <h2 style="color: #34d399; margin: 0; font-size: 18px; text-transform: uppercase; letter-spacing: 0.1em;">
      [MEETING TELEMETRY] Consultation Reserved
    </h2>
    <span style="color: #71717a; font-size: 11px;">Source: kviswakarma.com Meeting Booker</span>
  </div>
  
  <div style="margin-bottom: 20px;">
    <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
      <tr>
        <td style="padding: 6px 0; color: #71717a; width: 150px; font-weight: bold; text-transform: uppercase;">Booker Name:</td>
        <td style="padding: 6px 0; color: #f4f4f5;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 6px 0; color: #71717a; font-weight: bold; text-transform: uppercase;">Booker Email:</td>
        <td style="padding: 6px 0; color: #a1a1aa;"><a href="mailto:${email}" style="color: #34d399; text-decoration: none;">${email}</a></td>
      </tr>
      <tr>
        <td style="padding: 6px 0; color: #71717a; font-weight: bold; text-transform: uppercase;">Scheduled Date:</td>
        <td style="padding: 6px 0; color: #34d399; font-weight: bold;">${date}</td>
      </tr>
      <tr>
        <td style="padding: 6px 0; color: #71717a; font-weight: bold; text-transform: uppercase;">Scheduled Time:</td>
        <td style="padding: 6px 0; color: #34d399; font-weight: bold;">${time} (IST)</td>
      </tr>
    </table>
  </div>
  
  <div style="background-color: #1c1917; border: 1px solid #27272a; border-radius: 8px; padding: 16px; margin-top: 10px;">
    <span style="color: #71717a; font-size: 10px; display: block; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;">Reservation Context:</span>
    <p style="color: #f4f4f5; font-size: 13px; line-height: 1.6; margin: 0;">
      A Zoom meeting consultation request has been successfully registered. Please verify schedule availability and share the calendar invitation / Zoom link with the client.
    </p>
  </div>
  
  <div style="border-top: 1px solid #27272a; padding-top: 16px; margin-top: 24px; text-align: center;">
    <a href="mailto:${email}" style="display: inline-block; background-color: #059669; color: #ffffff; padding: 10px 20px; font-size: 12px; font-weight: bold; text-decoration: none; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.05em;">
      Reply / Send Zoom Invitation
    </a>
  </div>
</div>
      `;
    } else {
      emailSubject = subject || `Console Contact: ${name}`;
      emailHtml = `
<div style="font-family: monospace, sans-serif; background-color: #0c0a09; color: #e4e4e7; padding: 24px; border: 1px solid #27272a; border-radius: 12px; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.5);">
  <div style="border-bottom: 1px solid #27272a; padding-bottom: 16px; margin-bottom: 20px;">
    <h2 style="color: #818cf8; margin: 0; font-size: 18px; text-transform: uppercase; letter-spacing: 0.1em;">
      [SYSTEM TELEMETRY] New Message Received
    </h2>
    <span style="color: #71717a; font-size: 11px;">Source: kviswakarma.com Contact Form</span>
  </div>
  
  <div style="margin-bottom: 20px;">
    <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
      <tr>
        <td style="padding: 6px 0; color: #71717a; width: 120px; font-weight: bold; text-transform: uppercase;">Sender Name:</td>
        <td style="padding: 6px 0; color: #f4f4f5;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 6px 0; color: #71717a; font-weight: bold; text-transform: uppercase;">Sender Email:</td>
        <td style="padding: 6px 0; color: #a1a1aa;"><a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a></td>
      </tr>
      <tr>
        <td style="padding: 6px 0; color: #71717a; font-weight: bold; text-transform: uppercase;">Subject:</td>
        <td style="padding: 6px 0; color: #f4f4f5; font-weight: bold;">${emailSubject}</td>
      </tr>
    </table>
  </div>
  
  <div style="background-color: #1c1917; border: 1px solid #27272a; border-radius: 8px; padding: 16px; margin-top: 10px;">
    <span style="color: #71717a; font-size: 10px; display: block; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;">Message Body:</span>
    <p style="color: #f4f4f5; font-size: 13px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
  </div>
  
  <div style="border-top: 1px solid #27272a; padding-top: 16px; margin-top: 24px; text-align: center;">
    <a href="mailto:${email}" style="display: inline-block; background-color: #4f46e5; color: #ffffff; padding: 10px 20px; font-size: 12px; font-weight: bold; text-decoration: none; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.05em;">
      Reply to Sender
    </a>
  </div>
</div>
      `;
    }

    // 3. Format headers according to RFC 2822 (using base64 utf-8 encoding for headers containing arbitrary text)
    const encodedSubject = `=?utf-8?B?${Buffer.from(emailSubject).toString('base64')}?=`;
    const encodedFromName = `=?utf-8?B?${Buffer.from(`${name} (via Website)`).toString('base64')}?=`;

    const emailLines = [
      `From: ${encodedFromName} <${gmailUser}>`,
      `To: ${receiverEmail}`,
      `Reply-To: "${name}" <${email}>`,
      `Subject: ${encodedSubject}`,
      `MIME-Version: 1.0`,
      `Content-Type: text/html; charset=utf-8`,
      `Content-Transfer-Encoding: 7bit`,
      ``,
      emailHtml
    ];

    const rawEmail = emailLines.join('\r\n');
    const base64RawEmail = base64urlEncode(rawEmail);

    // 4. Send Email via Gmail API
    const gmailResponse = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        raw: base64RawEmail,
      }),
    });

    if (!gmailResponse.ok) {
      const errorText = await gmailResponse.text();
      console.error('Gmail API transmission failed:', errorText);
      return NextResponse.json(
        {
          error: 'Gmail Send Error',
          message: 'Failed to transmit message via Gmail API. Fallback to mailto client.',
          fallback: true
        },
        { status: 502 }
      );
    }

    const gmailData = (await gmailResponse.json()) as GmailSendResponse;
    return NextResponse.json({
      success: true,
      message: 'Message transmitted successfully.',
      id: gmailData.id,
    });
  } catch (error) {
    console.error('Error handling contact API request:', error);
    return NextResponse.json(
      {
        error: 'Server Error',
        message: 'Internal server error occurred while processing message. Fallback to mailto client.',
        fallback: true
      },
      { status: 500 }
    );
  }
}
