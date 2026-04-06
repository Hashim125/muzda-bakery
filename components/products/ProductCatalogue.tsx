'use client';

import { useEffect, useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { productCategories, products } from '@/lib/site-data';
import ProductPlaceholder from '@/components/products/ProductPlaceholder';

interface ProductCatalogueProps {
  initialCategory?: string;
}

export default function ProductCatalogue({ initialCategory }: ProductCatalogueProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory ?? 'all');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') {
      return products;
    }

    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const [expandedProduct, setExpandedProduct] = useState<string | null>(filteredProducts[0]?.slug ?? null);

  useEffect(() => {
    setExpandedProduct(filteredProducts[0]?.slug ?? null);
  }, [activeCategory, filteredProducts]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setActiveCategory('all')}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            activeCategory === 'all' ? 'bg-[#7a2f3f] text-white' : 'bg-white text-[#7a2f3f]'
          }`}
        >
          All Products
        </button>
        {productCategories.map((category) => (
          <button
            key={category.slug}
            type="button"
            onClick={() => setActiveCategory(category.slug)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeCategory === category.slug ? 'bg-[#7a2f3f] text-white' : 'bg-white text-[#7a2f3f]'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => {
          const category = productCategories.find((item) => item.slug === product.category);

          return (
            <article
              key={product.slug}
              className={`soft-card rounded-[1.75rem] p-6 transition-all duration-300 ${
                expandedProduct === product.slug ? 'shadow-[0_24px_48px_rgba(39,6,14,0.12)]' : ''
              }`}
            >
              <ProductPlaceholder name={product.name} category={product.category} />

              <button
                type="button"
                onClick={() => setExpandedProduct((current) => (current === product.slug ? null : product.slug))}
                className="mt-5 flex w-full items-start justify-between gap-3 text-left"
              >
                <div className="mt-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b35f6d]">
                    {category?.title}
                  </div>
                  <h3 className="fancy-title mt-3 text-3xl font-semibold text-[#391720]">{product.name}</h3>
                </div>
                <div className="mt-5 flex items-center gap-3">
                  {product.badge && (
                    <span className="rounded-full bg-[#f3e7de] px-3 py-1 text-xs font-medium text-[#7a2f3f]">
                      {product.badge}
                    </span>
                  )}
                  <ChevronDown
                    className={`h-5 w-5 text-[#934857] transition-transform duration-300 ${
                      expandedProduct === product.slug ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              <div className="texture-panel mt-5 rounded-[1.5rem] p-5 text-white">
                <div className="text-xs uppercase tracking-[0.3em] text-[#f0d0a3]">Bakery selection</div>
                <div className="mt-8 text-4xl font-light text-[#f8f1ec]">{product.price}</div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedProduct === product.slug ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="mt-5 text-sm leading-7 text-[#5f4f52]">{product.description}</p>
                <p className="mt-2 text-sm leading-7 text-[#7a2f3f]">
                  Ideal for quick browsing now, with room for real product photography and richer descriptions later.
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
