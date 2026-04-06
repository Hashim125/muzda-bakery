import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import HeroMediaCard from '@/components/shared/HeroMediaCard';
import PageHero from '@/components/shared/PageHero';
import ProductCatalogue from '@/components/products/ProductCatalogue';
import Container from '@/components/ui/Container';
import { productCategories } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse the full Muzda Bakery catalogue, including biscuits, toasts, savoury snacks, Asian specialities, and frozen products.',
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const initialCategory = productCategories.some((category) => category.slug === params.category)
    ? params.category
    : undefined;

  return (
    <div className="page-shell">
      <Header />
      <main>
        <PageHero
          eyebrow="Product catalogue"
          title="A clear, browsable bakery range with visible prices."
          description="The catalogue is designed to feel organised and credible: category-led browsing, readable cards, and enough detail to support ordering without turning the site into a full online checkout."
          media={
            <HeroMediaCard
              label="Fresh range"
              title="Biscuits, savouries, frozen items and bakery staples in one place"
              description="A fuller visual hero gives the products page the same presence as the homepage while keeping the catalogue itself as the main focus."
              image="https://images.unsplash.com/photo-1722454971995-34160f08675c?auto=format&fit=crop&fm=jpg&q=80&w=1400"
            />
          }
        />

        <section className="py-16 lg:py-20">
          <Container>
            <div className="section-frame rounded-[2rem] p-8 lg:p-10">
              <ProductCatalogue initialCategory={initialCategory} />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
