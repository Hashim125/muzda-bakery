'use client';

import { FormEvent, useState } from 'react';
import Button from '@/components/ui/Button';

const initialState = { name: '', email: '', phone: '', message: '' };

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: 'idle', message: '' });

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      setStatus({ type: 'error', message: result.error ?? 'Something went wrong.' });
      setLoading(false);
      return;
    }

    setFormData(initialState);
    setStatus({ type: 'success', message: result.message });
    setLoading(false);
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[#3b0d18]">Name</span>
          <input
            className="field rounded-2xl"
            value={formData.name}
            onChange={(event) => setFormData({ ...formData, name: event.target.value })}
            required
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[#3b0d18]">Email</span>
          <input
            type="email"
            className="field rounded-2xl"
            value={formData.email}
            onChange={(event) => setFormData({ ...formData, email: event.target.value })}
            required
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-[#3b0d18]">Phone</span>
        <input
          className="field rounded-2xl"
          value={formData.phone}
          onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
          required
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-[#3b0d18]">How can we help?</span>
        <textarea
          className="field min-h-36 rounded-[1.5rem]"
          value={formData.message}
          onChange={(event) => setFormData({ ...formData, message: event.target.value })}
          required
        />
      </label>

      <Button type="submit" size="lg" disabled={loading}>
        {loading ? 'Sending...' : 'Send Enquiry'}
      </Button>

      {status.type !== 'idle' && (
        <p className={`text-sm ${status.type === 'success' ? 'text-green-700' : 'text-red-700'}`}>
          {status.message}
        </p>
      )}
    </form>
  );
}
