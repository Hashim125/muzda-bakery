import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import BakeryPlaceholder from '@/components/shared/BakeryPlaceholder';
import HeroMediaCard from '@/components/shared/HeroMediaCard';
import PageHero from '@/components/shared/PageHero';
import Container from '@/components/ui/Container';
import { storyMilestones } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'Discover the family story behind Muzda Bakery and its place in East London since 1964.',
};

export default function AboutPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <PageHero
          eyebrow="Our story"
          title="A family bakery shaped by decades, not trends."
          description="This page tells the Muzda Bakery story through family continuity, local trust, and the kind of long-standing routine that turns a bakery into a neighbourhood institution."
          media={
            <HeroMediaCard
              label="Then and now"
              title="From a familiar old storefront to the bakery people know today"
              description="Hover to reveal a more modern stock image, standing in for the current look of the shop."
              image="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&fm=jpg&q=80&w=1400&sat=-100&blend=8f5a3c&blend-mode=multiply"
              secondaryImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&fm=jpg&q=80&w=1400"
            />
          }
        />

        <section className="py-16 lg:py-20">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="mb-10 max-w-3xl">
                <span className="eyebrow">Timeline</span>
                <h2 className="fancy-title mt-4 text-5xl font-semibold text-[#391720]">From the first bake to today’s counter.</h2>
                <p className="mt-5 text-base leading-8 text-[#5f4f52]">
                  The structure is intentionally timeline-led rather than a generic wall of copy: key years, family transitions, and the steady build of local trust.
                </p>
              </div>

              <div className="relative">
                <div className="timeline-line absolute left-6 top-0 hidden h-full w-px md:block" />
                <div className="space-y-8">
                  {storyMilestones.map((milestone, index) => (
                    <article
                      key={milestone.year}
                      className={`section-frame grid gap-6 rounded-[2rem] p-6 md:grid-cols-[auto_1fr] md:p-8 ${
                        index % 2 === 0 ? '' : 'md:translate-x-8'
                      }`}
                    >
                      <div className="flex md:block">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7a2f3f] text-sm font-semibold text-white">
                          {milestone.year.replace(/\D/g, '').slice(-2)}
                        </div>
                      </div>
                      <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr]">
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b35f6d]">
                            {milestone.year} • {milestone.accent}
                          </div>
                          <h3 className="fancy-title mt-3 text-4xl font-semibold text-[#391720]">{milestone.title}</h3>
                          <p className="mt-4 max-w-2xl text-sm leading-8 text-[#5f4f52]">{milestone.copy}</p>
                        </div>
                        <BakeryPlaceholder
                          title={`${milestone.year} chapter`}
                          subtitle="A stock bakery image helps the timeline feel full and polished while real family visuals are still being prepared."
                          variant="timeline"
                        />
                      </div>
                    </article>
                  ))}
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
