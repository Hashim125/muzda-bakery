interface EmailPayload {
  subject: string;
  html: string;
}

export async function sendEmail(payload: EmailPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return {
      ok: false,
      error:
        'Email is not configured yet. Add RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL.',
    };
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject: payload.subject,
      html: payload.html,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return {
      ok: false,
      error: `Email provider error: ${errorText}`,
    };
  }

  return { ok: true };
}
