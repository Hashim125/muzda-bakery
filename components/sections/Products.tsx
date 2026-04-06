'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

const products = [
  {
    id: 1,
    title: 'Asian Biscuits',
    description: 'Crispy, buttery biscuits with traditional flavors like cardamom, pistachio, and rose.',
    emoji: '🍪',
    color: 'from-saffron-100 to-saffron-200',
  },
  {
    id: 2,
    title: 'Sweets',
    description: 'Rich, aromatic sweets including barfi, ladoo, and other traditional mithai.',
    emoji: '🍬',
    color: 'from-pistachio-100 to-pistachio-200',
  },
  {
    id: 3,
    title: 'Savouries',
    description: 'Savory treats like samosas, pakoras, and other crispy delights perfect for any time.',
    emoji: '🥟',
    color: 'from-cream-200 to-cream-300',
  },
];

export default function Products() {
  return (
    <Section id="products" className="bg-cream-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brown-500 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover our range of freshly made Asian delicacies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id}>
              <div className={`h-48 bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                <span className="text-8xl">{product.emoji}</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-brown-500 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
