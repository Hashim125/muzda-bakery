import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { ContactRequest } from '@/lib/types';

function isValidContact(payload: Partial<ContactRequest>) {
  return Boolean(payload.name && payload.email && payload.phone && payload.message);
}

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<ContactRequest>;

  if (!isValidContact(payload)) {
    return NextResponse.json({ error: 'Please complete all contact form fields.' }, { status: 400 });
  }

  const result = await sendEmail({
    subject: `New contact enquiry from ${payload.name}`,
    html: `
      <h2>New Muzda Bakery contact enquiry</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Phone:</strong> ${payload.phone}</p>
      <p><strong>Message:</strong></p>
      <p>${payload.message}</p>
    `,
  });

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }

  return NextResponse.json({
    message: 'Thanks. Your enquiry has been sent and the bakery can reply manually.',
  });
}
