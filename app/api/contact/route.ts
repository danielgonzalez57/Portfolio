import { type NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { name, email, message } = body as ContactPayload;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  if (message.trim().length < 10) {
    return NextResponse.json({ error: 'Message too short' }, { status: 400 });
  }

  // TODO: Integrate an email provider here, e.g.:
  //
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'portfolio@yourdomain.com',
  //   to: 'daniel@email.com',
  //   subject: `Portfolio contact from ${name}`,
  //   text: `From: ${name} <${email}>\n\n${message}`,
  // });

  // Log for now (replace with real email sending)
  console.log('[contact]', { name, email, message: message.slice(0, 50) });

  return NextResponse.json({ ok: true });
}
