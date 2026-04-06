import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import OrderForm from '@/components/forms/OrderForm';
import HeroMediaCard from '@/components/shared/HeroMediaCard';
import PageHero from '@/components/shared/PageHero';
import Container from '@/components/ui/Container';
import { business, collectionWindows } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Order',
  description: 'Request collection orders from Muzda Bakery and pay in-store once your order has been confirmed.',
};

export default function OrderPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <PageHero
          eyebrow="Soft ordering"
          title="Request your bakery order online, then collect and pay in-store."
          description="This keeps the process simple and flexible for fresh items like naan: customers send the request, the bakery confirms availability, and payment is handled on collection."
          media={
            <HeroMediaCard
              label="Collection ordering"
              title="A simpler way to plan fresh naan and bakery pickups"
              description="The order page now opens with imagery too, so it feels like part of the same polished experience rather than a plain form page."
              image="https://images.unsplash.com/photo-1762530351343-ce4bb2fd89d1?auto=format&fit=crop&fm=jpg&q=80&w=1400"
            />
          }
        />

        <section className="py-16 lg:py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="section-frame rounded-[2rem] p-8 lg:p-10">
                <span className="eyebrow">Order request form</span>
                <h2 className="fancy-title mt-4 text-5xl font-semibold text-[#27060e]">Tell us what you need and when you’d like to collect.</h2>
                <p className="mt-5 text-sm leading-8 text-[#5f4f52]">
                  Use the form for planned collections. For quicker questions or same-day checks, WhatsApp is still the fastest route.
                </p>
                <div className="mt-8">
                  <OrderForm />
                </div>
              </div>

              <div className="space-y-8">
                <div className="texture-panel rounded-[2rem] p-8 text-white lg:p-10">
                  <span className="eyebrow !text-[#d2ad70] before:!bg-[#d2ad70]/40">How it works</span>
                  <ol className="mt-6 space-y-5 text-sm leading-7 text-[#f8f1ec]">
                    <li>1. Send your items, quantities, collection date, and preferred time window.</li>
                    <li>2. The bakery reviews availability and confirms the order manually.</li>
                    <li>3. You collect in-store and pay after confirmation.</li>
                  </ol>
                </div>

                <div className="section-frame rounded-[2rem] p-8 lg:p-10">
                  <span className="eyebrow">Collection windows</span>
                  <div className="mt-5 space-y-3">
                    {collectionWindows.map((window) => (
                      <div key={window} className="rounded-[1.25rem] border border-[#561924]/10 bg-white px-4 py-4 text-sm text-[#5f4f52]">
                        {window}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="section-frame rounded-[2rem] p-8 lg:p-10">
                  <span className="eyebrow">Quick contact</span>
                  <p className="mt-4 text-sm leading-7 text-[#5f4f52]">
                    Prefer to message directly? Use WhatsApp for quick checks or call the bakery on {business.phone}.
                  </p>
                  <a
                    href={`https://wa.me/${business.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex rounded-full bg-[#561924] px-6 py-3 text-sm font-medium text-white"
                  >
                    Open WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
