import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import PageHero from '@/components/shared/PageHero';
import Container from '@/components/ui/Container';
import { testimonials } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Reviews',
  description: 'Selected customer reviews and trust signals for Muzda Bakery.',
};

export default function ReviewsPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <PageHero
          eyebrow="Reviews"
          title="A reputation built slowly, then kept."
          description="Rather than a cluttered feed, this page uses a small set of curated testimonials that reinforce trust, familiarity, and the bakery’s place in the community."
        />

        <section className="py-16 lg:py-20">
          <Container>
            <div className="grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="section-frame rounded-[2rem] p-8">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8f3242]">{testimonial.context}</div>
                  <h2 className="fancy-title mt-5 text-4xl font-semibold text-[#27060e]">{testimonial.name}</h2>
                  <p className="mt-5 text-sm leading-8 text-[#5f4f52]">{testimonial.quote}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
