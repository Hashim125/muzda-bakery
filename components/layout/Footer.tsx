import Link from 'next/link';
import { Clock3, MapPin, MessageCircle, Phone } from 'lucide-react';
import Container from '@/components/ui/Container';
import { business, navigation } from '@/lib/site-data';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#7a2f3f]/10 bg-[#391720] text-[#f8f1ec]">
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-xl">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d2ad70]">
              East London since 1964
            </div>
            <h2 className="fancy-title mt-3 text-4xl font-semibold text-white">
              Heritage, family recipes, and everyday bakery favourites.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[#e2d1c6]">
              Muzda Bakery serves biscuits, savouries, speciality bakery staples, and order-ahead naan
              with the kind of neighbourhood familiarity that only comes from years behind the counter.
            </p>
            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/14"
            >
              <MessageCircle className="h-4 w-4" />
              Quick WhatsApp Enquiry
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d2ad70]">Navigate</h3>
            <div className="mt-5 space-y-3">
              {navigation
                .filter((item) => item.href)
                .map((item) => (
                  <Link
                    key={item.label}
                    href={item.href ?? '/'}
                    className="block text-sm text-[#f8f1ec] transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d2ad70]">Visit</h3>
            <div className="mt-5 space-y-5 text-sm text-[#e2d1c6]">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[#d2ad70]" />
                <div>{business.addressLines.map((line) => <div key={line}>{line}</div>)}</div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#d2ad70]" />
                <span>{business.phone}</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 text-[#d2ad70]" />
                <div>
                  <div>Mon - Thu: 8:00am - 7:00pm</div>
                  <div>Fri - Sat: 8:00am - 7:30pm</div>
                  <div>Sun: 9:00am - 6:00pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs tracking-[0.12em] text-[#d7c1ba]">
          © {new Date().getFullYear()} Muzda Bakery. Built for a family bakery with real local character.{' '}
          <a
            href="https://hashimumarji.com/"
            target="_blank"
            rel="noreferrer"
            className="text-[#f0d0a3] transition hover:text-white"
          >
            Site by Hashim Umarji
          </a>
        </div>
      </Container>
    </footer>
  );
}
