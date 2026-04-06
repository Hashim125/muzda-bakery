'use client';

import { FormEvent, useState } from 'react';
import Button from '@/components/ui/Button';
import { collectionWindows, products } from '@/lib/site-data';

const initialState = {
  customerName: '',
  email: '',
  phone: '',
  products: '',
  collectionDate: '',
  collectionWindow: '',
  notes: '',
};

export default function OrderForm() {
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

    const response = await fetch('/api/order', {
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
            value={formData.customerName}
            onChange={(event) => setFormData({ ...formData, customerName: event.target.value })}
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
        <span className="mb-2 block text-sm font-medium text-[#3b0d18]">Products & quantities</span>
        <textarea
          className="field min-h-36 rounded-[1.5rem]"
          placeholder={`Example: Fresh Naan x 12, Vegetable Samosas x 10\nPopular items: ${products
            .slice(0, 5)
            .map((product) => product.name)
            .join(', ')}`}
          value={formData.products}
          onChange={(event) => setFormData({ ...formData, products: event.target.value })}
          required
        />
      </label>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[#3b0d18]">Collection date</span>
          <input
            type="date"
            className="field rounded-2xl"
            value={formData.collectionDate}
            onChange={(event) => setFormData({ ...formData, collectionDate: event.target.value })}
            required
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[#3b0d18]">Collection time</span>
          <select
            className="field rounded-2xl"
            value={formData.collectionWindow}
            onChange={(event) => setFormData({ ...formData, collectionWindow: event.target.value })}
            required
          >
            <option value="">Select a time window</option>
            {collectionWindows.map((window) => (
              <option key={window} value={window}>
                {window}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-[#3b0d18]">Notes</span>
        <textarea
          className="field min-h-28 rounded-[1.5rem]"
          placeholder="Fresh naan for evening collection, frozen only, allergy notes, or anything else helpful."
          value={formData.notes}
          onChange={(event) => setFormData({ ...formData, notes: event.target.value })}
        />
      </label>

      <Button type="submit" size="lg" disabled={loading}>
        {loading ? 'Sending...' : 'Request Order'}
      </Button>

      {status.type !== 'idle' && (
        <p className={`text-sm ${status.type === 'success' ? 'text-green-700' : 'text-red-700'}`}>
          {status.message}
        </p>
      )}
    </form>
  );
}
