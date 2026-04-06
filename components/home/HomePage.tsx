import Link from 'next/link';
import { ArrowRight, Clock3, MapPin } from 'lucide-react';
import ProductPlaceholder from '@/components/products/ProductPlaceholder';
import TimelineCards from '@/components/home/TimelineCards';
import Container from '@/components/ui/Container';
import { business, productCategories, products, storyMilestones } from '@/lib/site-data';
import HeroMediaCard from '@/components/shared/HeroMediaCard';

export default function HomePage() {
  return (
    <>
      <section className="hero-grain overflow-hidden bg-[#6a2a38] text-white">
        <Container className="grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
          <div className="max-w-3xl">
            <span className="eyebrow !text-[#d2ad70] before:!bg-[#d2ad70]/40">Family bakery since 1964</span>
            <h1 className="fancy-title mt-6 text-5xl font-semibold leading-none text-balance sm:text-6xl lg:text-7xl">
              A bakery built on tradition, community, and everyday favourites.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#efe4dc]">
              Muzda Bakery has served East London for generations with biscuits, savouries, Asian specialities,
              and fresh bakery staples made for families, gatherings, and regular weekly stops.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-medium text-[#3b0d18] transition hover:bg-[#f8f1ec]"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/order"
                className="inline-flex items-center justify-center rounded-full border border-white/18 px-6 py-4 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Order Fresh Naan
              </Link>
            </div>
          </div>

          <div className="section-frame rounded-[2rem] p-6 text-[#391720]">
            <HeroMediaCard
              label="Homepage feature"
              title="Fresh from the East London counter"
              description="A welcoming bakery image block that gives the homepage the same polished visual weight as the interior pages."
              image="https://images.unsplash.com/photo-1742299807255-1883cc728229?auto=format&fit=crop&fm=jpg&q=80&w=1400"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="section-frame rounded-[2rem] p-8 lg:p-10">
            <span className="eyebrow">Featured products</span>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {productCategories
                .filter((category) => ['biscuits', 'frozen-products', 'asian-specialities'].includes(category.slug))
                .map((category) => (
                <article key={category.slug} className="soft-card rounded-[1.75rem] p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b35f6d]">
                    {category.title}
                  </div>
                  <h2 className="fancy-title mt-3 text-3xl font-semibold text-[#391720]">{category.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[#5f4f52]">{category.description}</p>
                  <Link href={`/products?category=${category.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#7a2f3f]">
                    Browse category
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 lg:pb-20">
        <Container>
          <div className="section-frame rounded-[2rem] p-8 lg:p-10">
            <div className="mb-8 max-w-3xl">
              <span className="eyebrow">Timeline</span>
              <h2 className="fancy-title mt-4 text-5xl font-semibold text-[#391720]">A bakery story told one chapter at a time.</h2>
              <p className="mt-5 text-base leading-8 text-[#5f4f52]">
                Muzda Bakery grew through routine, family knowledge, and the kind of steady local trust that only comes from years of serving the same community well.
              </p>
            </div>
            <TimelineCards milestones={storyMilestones} />
            <Link href="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#7a2f3f]">
              Read the full story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="pb-16 lg:pb-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="section-frame rounded-[2rem] p-8 lg:p-10">
              <span className="eyebrow !text-[#d2ad70] before:!bg-[#d2ad70]/40">Order ahead</span>
              <h2 className="fancy-title mt-4 text-5xl font-semibold text-[#391720]">Fresh naan collection, handled simply and beautifully.</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f4f52]">
                We’ve turned this into a softer booking-style panel so it feels more premium than a generic CTA while still keeping the process clear and easy for customers.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['Fresh naan', 'Collection slots', 'Pay in store'].map((item) => (
                  <div key={item} className="rounded-full border border-[#7a2f3f]/12 bg-[#f6ebe7] px-4 py-2 text-sm text-[#7a2f3f]">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <Link href="/order" className="inline-flex items-center justify-center rounded-full bg-[#7a2f3f] px-6 py-4 text-sm font-medium text-white">
                  Start an Order Request
                </Link>
                <a
                  href={`https://wa.me/${business.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#7a2f3f]/18 px-6 py-4 text-sm font-medium text-[#7a2f3f]"
                >
                  WhatsApp the Bakery
                </a>
              </div>
            </div>

            <div className="section-frame rounded-[2rem] p-8 lg:p-10">
              <span className="eyebrow">Best seller biscuits</span>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {products
                  .filter((product) =>
                    ['almond-and-pista', 'almond-naan-khatay', 'jeera-biscuit-bag', 'khari-purwali'].includes(product.slug)
                  )
                  .map((product) => (
                    <article key={product.slug} className="soft-card rounded-[1.75rem] p-5">
                      <ProductPlaceholder name={product.name} category={product.category} />
                      <div className="flex items-start justify-between gap-4">
                        <div className="mt-5">
                          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b35f6d]">{product.price}</div>
                          <h3 className="fancy-title mt-3 text-3xl font-semibold text-[#391720]">
                            {product.name === 'Almond & Pista'
                              ? 'Almond & Pistachio'
                              : product.name === 'Jeera Biscuit Bag'
                                ? 'Jeera Biscuits'
                                : product.name === 'Khari / Purwali'
                                  ? 'Khari (Parwari)'
                                  : product.name}
                          </h3>
                        </div>
                        {product.badge && (
                          <span className="rounded-full bg-[#f3e7de] px-3 py-1 text-xs font-medium text-[#7a2f3f]">{product.badge}</span>
                        )}
                      </div>
                      <p className="mt-4 text-sm leading-7 text-[#5f4f52]">{product.description}</p>
                    </article>
                  ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 lg:pb-20">
        <Container>
          <div className="section-frame grid gap-8 rounded-[2rem] p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
            <div>
              <span className="eyebrow">Visit us</span>
              <h2 className="fancy-title mt-4 text-5xl font-semibold text-[#391720]">A proper bakery stop in East London.</h2>
              <div className="mt-6 space-y-5 text-sm leading-7 text-[#5f4f52]">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 text-[#b35f6d]" />
                  <div>{business.addressLines.map((line) => <div key={line}>{line}</div>)}</div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-1 h-4 w-4 text-[#b35f6d]" />
                  <div>
                    {business.hours.slice(0, 3).map((entry) => (
                      <div key={entry.day}>
                        {entry.day}: {entry.hours}
                      </div>
                    ))}
                    <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[#b35f6d]">See full opening times on the contact page</div>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#7a2f3f]">
                Contact and location details
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-[#7a2f3f]/10 min-h-[360px]">
              <iframe
                src={business.mapsEmbedUrl}
                width="100%"
                height="460"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Muzda Bakery map"
                className="block h-[460px] w-full"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
