import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import ContactForm from '@/components/forms/ContactForm';
import PageHero from '@/components/shared/PageHero';
import Container from '@/components/ui/Container';
import { business } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Find Muzda Bakery in East London, view opening hours, and send a contact enquiry.',
};

export default function ContactPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Visit, enquire, or message the bakery directly."
          description="The contact page keeps the essentials obvious: address, hours, form, and a quick WhatsApp route for people who want answers faster."
        />

        <section className="py-16 lg:py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="space-y-8">
                <div className="section-frame rounded-[2rem] p-8 lg:p-10">
                  <span className="eyebrow">Visit the bakery</span>
                  <h2 className="fancy-title mt-4 text-5xl font-semibold text-[#391720]">East London location</h2>
                  <div className="mt-6 text-sm leading-8 text-[#5f4f52]">
                    {business.addressLines.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                    <div className="mt-4">{business.phone}</div>
                    <div>{business.email}</div>
                  </div>
                </div>

                <div className="section-frame rounded-[2rem] p-8 lg:p-10">
                  <span className="eyebrow">Opening hours</span>
                  <div className="mt-5 space-y-3">
                    {business.hours.map((entry) => (
                      <div key={entry.day} className="flex items-center justify-between rounded-[1.25rem] border border-[#7a2f3f]/10 bg-white px-4 py-4 text-sm text-[#5f4f52]">
                        <span className="font-medium text-[#391720]">{entry.day}</span>
                        <span>{entry.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.75rem] overflow-hidden border border-[#7a2f3f]/10">
                  <iframe
                    src={business.mapsEmbedUrl}
                    width="100%"
                    height="360"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Muzda Bakery map"
                    className="block h-[360px] w-full"
                  />
                </div>
              </div>

              <div className="section-frame rounded-[2rem] p-8 lg:p-10">
                <span className="eyebrow">General enquiries</span>
                <h2 className="fancy-title mt-4 text-5xl font-semibold text-[#391720]">Send us a message.</h2>
                <p className="mt-5 text-sm leading-8 text-[#5f4f52]">
                  Use the contact form for general questions, catering enquiries, or larger family orders that need a bit more discussion.
                </p>
                <div className="mt-8">
                  <ContactForm />
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
