'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function About() {
  return (
    <Section id="about" className="bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 lg:h-[500px] rounded-card overflow-hidden bg-gradient-to-br from-cream-200 to-pistachio-100 shadow-xl"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-brown-200 flex items-center justify-center">
                  <span className="text-6xl">🥧</span>
                </div>
                <p className="text-gray-500 text-sm">Placeholder for bakery image</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brown-500 mb-6">
              About Muzda Bakery
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Welcome to Muzda Bakery, your destination for authentic Asian biscuits, sweets,
                and savouries in the heart of Forest Gate, London.
              </p>
              <p>
                We take pride in crafting traditional delicacies using time-honored recipes
                passed down through generations. Each item is freshly made with the finest
                ingredients, ensuring authentic flavors that transport you to the vibrant
                streets of South Asia.
              </p>
              <p>
                From delicate biscuits to rich, aromatic sweets and savory treats perfect
                for any occasion, our bakery offers a taste of tradition with every bite.
                Whether you&apos;re celebrating a special event or simply craving something
                delicious, we&apos;re here to serve you.
              </p>
              <p className="text-brown-500 font-semibold">
                Quality, authenticity, and tradition — that&apos;s the Muzda Bakery promise.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
