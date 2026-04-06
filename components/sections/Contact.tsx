'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Clock } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function Contact() {
  return (
    <Section id="contact" className="bg-cream-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brown-500 mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Find us in the heart of Forest Gate, London
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-card shadow-md">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-saffron-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brown-500 mb-2">Address</h3>
                  <p className="text-gray-700 leading-relaxed">
                    129 Green St<br />
                    Forest Gate<br />
                    London E7 8JF
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-card shadow-md">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-pistachio-100 flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-pistachio-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brown-500 mb-2">Get in Touch</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    DM for enquiries, bulk orders, and event catering
                  </p>
                  <Button size="sm" variant="primary">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-card shadow-md">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-cream-200 flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-brown-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brown-500 mb-2">Opening Hours</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Monday - Sunday<br />
                    9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-card overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.8847087!2d0.0234!3d51.5345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMyJzA0LjIiTiAwwrAwMScyNC4yIkU!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Muzda Bakery Location"
            />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
