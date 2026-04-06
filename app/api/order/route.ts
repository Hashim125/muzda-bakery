import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { OrderRequest } from '@/lib/types';

function isValidOrder(payload: Partial<OrderRequest>) {
  return Boolean(
    payload.customerName &&
      payload.email &&
      payload.phone &&
      payload.products &&
      payload.collectionDate &&
      payload.collectionWindow
  );
}

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<OrderRequest>;

  if (!isValidOrder(payload)) {
    return NextResponse.json({ error: 'Please complete all required order fields.' }, { status: 400 });
  }

  const result = await sendEmail({
    subject: `New order request from ${payload.customerName}`,
    html: `
      <h2>New Muzda Bakery order request</h2>
      <p><strong>Name:</strong> ${payload.customerName}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Phone:</strong> ${payload.phone}</p>
      <p><strong>Products:</strong><br />${payload.products}</p>
      <p><strong>Collection date:</strong> ${payload.collectionDate}</p>
      <p><strong>Collection window:</strong> ${payload.collectionWindow}</p>
      <p><strong>Notes:</strong><br />${payload.notes || 'None provided'}</p>
    `,
  });

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }

  return NextResponse.json({
    message:
      'Your order request has been sent. The bakery can now confirm availability and collection timing manually.',
  });
}
