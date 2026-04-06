'use client';

import { motion } from 'framer-motion';
import { Sparkles, Heart, MapPin, Users } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

const benefits = [
  {
    id: 1,
    icon: Sparkles,
    title: 'Freshly Made',
    description: 'All our products are made fresh daily using the finest ingredients.',
  },
  {
    id: 2,
    icon: Heart,
    title: 'Authentic Recipes',
    description: 'Traditional recipes passed down through generations for authentic flavors.',
  },
  {
    id: 3,
    icon: MapPin,
    title: 'Local Forest Gate Bakery',
    description: 'Proudly serving the Forest Gate community with quality and care.',
  },
  {
    id: 4,
    icon: Users,
    title: 'Events & Wholesale',
    description: 'Perfect for weddings, parties, and bulk orders. Get in touch for quotes.',
  },
];

export default function WhyChoose() {
  return (
    <Section className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brown-500 mb-4">
            Why Choose Muzda Bakery?
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Quality, authenticity, and tradition in every bite
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-saffron-400 to-saffron-500 flex items-center justify-center shadow-lg">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-brown-500 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
