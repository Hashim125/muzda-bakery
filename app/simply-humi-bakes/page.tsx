import type { Metadata } from 'next';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Instagram, MessageCircle, Sparkles } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import HeroSlideshow from '@/components/shared/HeroSlideshow';
import PageHero from '@/components/shared/PageHero';
import Container from '@/components/ui/Container';
import { simplyHumiBakes } from '@/lib/site-data';
import whatsapp36One from '../../simplyhumibakes images/WhatsApp Image 2026-04-21 at 23.06.36 (1).jpeg';
import whatsapp36Three from '../../simplyhumibakes images/WhatsApp Image 2026-04-21 at 23.06.36 (3).jpeg';
import whatsapp36Five from '../../simplyhumibakes images/WhatsApp Image 2026-04-21 at 23.06.36 (5).jpeg';
import whatsapp37 from '../../simplyhumibakes images/WhatsApp Image 2026-04-21 at 23.06.37.jpeg';
import whatsapp38One from '../../simplyhumibakes images/WhatsApp Image 2026-04-21 at 23.06.38 (1).jpeg';
import whatsapp38Four from '../../simplyhumibakes images/WhatsApp Image 2026-04-21 at 23.06.38 (4).jpeg';
import whatsapp38Six from '../../simplyhumibakes images/WhatsApp Image 2026-04-21 at 23.06.38 (6).jpeg';
import whatsapp39 from '../../simplyhumibakes images/WhatsApp Image 2026-04-21 at 23.06.39.jpeg';
import whatsapp39One from '../../simplyhumibakes images/WhatsApp Image 2026-04-21 at 23.06.39 (1).jpeg';
import whatsapp39Five from '../../simplyhumibakes images/WhatsApp Image 2026-04-21 at 23.06.39 (5).jpeg';
import whatsapp39Six from '../../simplyhumibakes images/WhatsApp Image 2026-04-21 at 23.06.39 (6).jpeg';
import whatsapp40Two from '../../simplyhumibakes images/WhatsApp Image 2026-04-21 at 23.06.40 (2).jpeg';
import whatsapp40Six from '../../simplyhumibakes images/WhatsApp Image 2026-04-21 at 23.06.40 (6).jpeg';
import whatsapp41Three from '../../simplyhumibakes images/WhatsApp Image 2026-04-21 at 23.06.41 (3).jpeg';
import whatsapp41Five from '../../simplyhumibakes images/WhatsApp Image 2026-04-21 at 23.06.41 (5).jpeg';
import whatsapp42 from '../../simplyhumibakes images/WhatsApp Image 2026-04-21 at 23.06.42.jpeg';
import whatsapp42One from '../../simplyhumibakes images/WhatsApp Image 2026-04-21 at 23.06.42 (1).jpeg';
import whatsapp42Three from '../../simplyhumibakes images/WhatsApp Image 2026-04-21 at 23.06.42 (3).jpeg';
import cake1 from '../../simplyhumibakes images/cake1.jpeg';
import cake2 from '../../simplyhumibakes images/cake2.jpeg';
import cake3 from '../../simplyhumibakes images/cake3.jpeg';
import cake4 from '../../simplyhumibakes images/cake4.jpeg';
import cakes5 from '../../simplyhumibakes images/cakes5.jpeg';
import cookies1 from '../../simplyhumibakes images/cookies1.jpeg';
import cupcake1 from '../../simplyhumibakes images/cupcake1.jpeg';
import cupcakes2 from '../../simplyhumibakes images/cupcakes2.jpeg';
import cupcakes3 from '../../simplyhumibakes images/cupcakes3.jpeg';
import cupcakes4 from '../../simplyhumibakes images/cupcakes4.jpeg';
import cupcakes6 from '../../simplyhumibakes images/cupcakes6.jpeg';
import cupcakes7 from '../../simplyhumibakes images/cupcakes7.jpeg';
import cupcakes8 from '../../simplyhumibakes images/cupcakes8.jpeg';

export const metadata: Metadata = {
  title: 'Simply Humi Bakes',
  description:
    'Desserts, custom cakes, cupcakes, brownies, sweet trays, and celebration bakes from the Muzda Bakery family in East London.',
};

const whatsappHref = `https://wa.me/${simplyHumiBakes.whatsapp}?text=${encodeURIComponent(
  simplyHumiBakes.whatsappMessage
)}`;

const heroImages: StaticImageData[] = [
  cupcakes8,
  cake1,
  whatsapp36One,
  whatsapp36Three,
  whatsapp36Five,
  whatsapp37,
  whatsapp38One,
  whatsapp38Four,
  whatsapp38Six,
  whatsapp39,
  whatsapp39One,
  whatsapp39Five,
  whatsapp39Six,
  whatsapp40Two,
  whatsapp40Six,
  whatsapp41Three,
  whatsapp41Five,
  whatsapp42,
  whatsapp42One,
  whatsapp42Three,
  cake2,
  cake3,
  cake4,
  cakes5,
  cookies1,
  cupcake1,
  cupcakes2,
  cupcakes3,
  cupcakes4,
  cupcakes6,
  cupcakes7,
];

const galleryImages: {
  title: string;
  image: StaticImageData;
  layout?: string;
  sizes: string;
}[] = [
  {
    title: 'Celebration cakes',
    image: cake1,
    layout: 'md:col-span-2 md:row-span-2',
    sizes: '(max-width: 1024px) 100vw, 50vw',
  },
  {
    title: 'Pink cupcake boxes',
    image: cupcakes8,
    layout: 'md:row-span-2',
    sizes: '(max-width: 1024px) 100vw, 25vw',
  },
  {
    title: 'Layered cake details',
    image: cake2,
    sizes: '(max-width: 1024px) 100vw, 25vw',
  },
  {
    title: 'Occasion cupcakes',
    image: cupcake1,
    sizes: '(max-width: 1024px) 100vw, 25vw',
  },
  {
    title: 'Cookie favours',
    image: cookies1,
    sizes: '(max-width: 1024px) 100vw, 25vw',
  },
  {
    title: 'Buttercream celebration cake',
    image: cake3,
    layout: 'md:row-span-2',
    sizes: '(max-width: 1024px) 100vw, 25vw',
  },
  {
    title: 'Cupcake collection',
    image: cupcakes2,
    layout: 'md:col-span-2',
    sizes: '(max-width: 1024px) 100vw, 50vw',
  },
  {
    title: 'Floral cake finish',
    image: cake4,
    sizes: '(max-width: 1024px) 100vw, 25vw',
  },
  {
    title: 'Giftable cupcake sets',
    image: cupcakes3,
    layout: 'md:col-span-2 md:row-span-2',
    sizes: '(max-width: 1024px) 100vw, 50vw',
  },
  {
    title: 'Sweet table cupcakes',
    image: cupcakes4,
    sizes: '(max-width: 1024px) 100vw, 25vw',
  },
  {
    title: 'Cake centrepiece',
    image: cakes5,
    sizes: '(max-width: 1024px) 100vw, 25vw',
  },
  {
    title: 'Party cupcake boxes',
    image: cupcakes6,
    sizes: '(max-width: 1024px) 100vw, 25vw',
  },
  {
    title: 'Decorated cupcake set',
    image: cupcakes7,
    sizes: '(max-width: 1024px) 100vw, 25vw',
  },
];

export default function SimplyHumiBakesPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <PageHero
          eyebrow="Simply Humi Bakes"
          title="Desserts, celebration bakes, and sweet trays from the Muzda family."
          description="While Muzda Bakery focuses on everyday bakery favourites, Simply Humi Bakes brings the dessert table: custom bakes, celebration treats, and sweet orders made for family moments."
          actions={
            <>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-medium text-[#3b0d18] transition hover:bg-[#f8f1ec]"
              >
                <MessageCircle className="h-4 w-4" />
                Enquire on WhatsApp
              </a>
              <a
                href={simplyHumiBakes.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 px-6 py-4 text-sm font-medium text-white transition hover:bg-white/10"
              >
                <Instagram className="h-4 w-4" />
                View Instagram
              </a>
            </>
          }
          media={
            <HeroSlideshow
              label="Dessert orders"
              title="Made for sweet tables, family moments, and celebrations"
              description="A rotating look through the Simply Humi Bakes gallery."
              images={heroImages}
            />
          }
        />

        <section className="py-16 lg:py-20">
          <Container>
            <div className="section-frame grid gap-8 rounded-[2rem] p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
              <div>
                <span className="eyebrow">Family dessert table</span>
                <h2 className="fancy-title mt-4 text-5xl font-semibold text-[#391720]">
                  The sweeter side of the same family story.
                </h2>
                <p className="mt-5 text-base leading-8 text-[#5f4f52]">{simplyHumiBakes.about}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  {simplyHumiBakes.occasions.map((occasion) => (
                    <span
                      key={occasion}
                      className="rounded-full border border-[#7a2f3f]/12 bg-[#f6ebe7] px-4 py-2 text-sm text-[#7a2f3f]"
                    >
                      {occasion}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="eyebrow">Signature bakes</span>
                <h2 className="fancy-title mt-4 text-4xl font-semibold text-[#391720]">
                  Sweet orders for small treats and full celebration tables.
                </h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {simplyHumiBakes.categories.map((category) => (
                    <article key={category.title} className="soft-card rounded-[1.5rem] p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3e7de] text-[#7a2f3f]">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <h3 className="fancy-title mt-4 text-2xl font-semibold text-[#391720]">{category.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#5f4f52]">{category.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="pb-16 lg:pb-20">
          <Container>
            <div className="section-frame rounded-[2rem] p-8 lg:p-10">
              <div className="mx-auto max-w-3xl text-center">
                <span className="eyebrow justify-center before:hidden">Dessert gallery</span>
                <h2 className="fancy-title mt-4 text-5xl font-semibold text-[#391720]">
                  A feel for the bakes, boxes, and sweet tables.
                </h2>
                <p className="mt-5 text-base leading-8 text-[#5f4f52]">
                  Real Simply Humi Bakes orders, from centrepiece cakes to boxed cupcakes and thoughtful sweet favours.
                </p>
              </div>
              <div className="mt-9 grid auto-rows-[16rem] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[17rem] lg:grid-cols-4">
                {galleryImages.map((item) => (
                  <figure
                    key={item.title}
                    className={`group relative overflow-hidden rounded-[1.35rem] border border-[#7a2f3f]/10 bg-[#f8f1ec] ${item.layout ?? ''}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes={item.sizes}
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#27060e]/78 via-[#27060e]/12 to-transparent" />
                    <figcaption className="absolute bottom-4 left-4 right-4 rounded-[0.5rem] bg-[#fffaf7] px-4 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#391720] shadow-[0_12px_28px_rgba(39,6,14,0.18)]">
                      {item.title}
                    </figcaption>
                  </figure>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <a
                  href={simplyHumiBakes.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7a2f3f] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#934857]"
                >
                  <Instagram className="h-4 w-4" />
                  View more on Instagram
                </a>
              </div>
            </div>
          </Container>
        </section>

        <section className="pb-16 lg:pb-20">
          <Container>
            <div className="section-frame rounded-[2rem] p-8 lg:p-10">
              <div className="max-w-3xl">
                <span className="eyebrow">Kind words</span>
                <h2 className="fancy-title mt-4 text-5xl font-semibold text-[#391720]">
                  A little sweetness people remember.
                </h2>
              </div>
              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                {simplyHumiBakes.testimonials.map((testimonial) => (
                  <article key={testimonial.name} className="soft-card rounded-[1.75rem] p-6">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8f3242]">
                      {testimonial.context}
                    </div>
                    <h3 className="fancy-title mt-5 text-3xl font-semibold text-[#391720]">{testimonial.name}</h3>
                    <p className="mt-5 text-sm leading-8 text-[#5f4f52]">{testimonial.quote}</p>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="pb-16 lg:pb-20">
          <Container>
            <div className="section-frame rounded-[2rem] p-8 lg:p-10">
              <span className="eyebrow">How to order</span>
              <h2 className="fancy-title mt-4 text-5xl font-semibold text-[#391720]">
                A simple WhatsApp enquiry is enough to get started.
              </h2>
              <div className="mt-8 grid gap-5 lg:grid-cols-3">
                {simplyHumiBakes.orderingSteps.map((step, index) => (
                  <div key={step} className="soft-card rounded-[1.5rem] p-5">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7a2f3f] text-sm font-semibold text-white">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-7 text-[#5f4f52]">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#7a2f3f] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#934857]"
              >
                Start a dessert enquiry
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Container>
        </section>

        <section className="pb-16 lg:pb-20">
          <Container>
            <div className="texture-panel rounded-[2rem] p-8 text-white lg:p-10">
              <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                <div>
                  <span className="eyebrow !text-[#d2ad70] before:!bg-[#d2ad70]/40">Ready when you are</span>
                  <h2 className="fancy-title mt-4 text-5xl font-semibold">
                    Send the date, the occasion, and the sweet idea.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[#efe4dc]">
                    Simply Humi Bakes will help shape the order around servings, flavour, timing, and presentation.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-medium text-[#3b0d18] transition hover:bg-[#f8f1ec]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Enquire on WhatsApp
                  </a>
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center rounded-full border border-white/18 px-6 py-4 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    Back to Muzda Bakery
                  </Link>
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
