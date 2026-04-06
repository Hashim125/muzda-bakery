'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import Container from '@/components/ui/Container';
import { business, navigation } from '@/lib/site-data';

function isActive(pathname: string, href?: string) {
  if (!href) return false;
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const whatsappHref = `https://wa.me/${business.whatsapp}`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#7a2f3f]/10 bg-[#fffaf7]/92 backdrop-blur-xl">
      <Container className="py-5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="min-w-0">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b35f6d]">
              Est. 1964
            </div>
            <div className="fancy-title text-[2rem] font-semibold text-[#391720]">
              Muzda Bakery
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => {
              return (
                <Link
                  key={item.label}
                  href={item.href ?? '/'}
                  className={`text-sm font-medium transition ${
                    isActive(pathname, item.href) ? 'text-[#b35f6d]' : 'text-[#52202d] hover:text-[#b35f6d]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#7a2f3f] px-5 py-3.5 text-sm font-medium text-white shadow-[0_16px_28px_rgba(122,47,63,0.16)] transition hover:bg-[#934857]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-[#7a2f3f]/12 p-3 text-[#52202d] lg:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="mt-4 rounded-[1.5rem] border border-[#7a2f3f]/10 bg-[#fffaf7] p-4 shadow-[0_24px_45px_rgba(39,6,14,0.1)] lg:hidden">
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.label} className="rounded-2xl border border-[#7a2f3f]/8 bg-white/70 p-1">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block rounded-[1rem] px-4 py-3 text-sm font-medium text-[#52202d]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : null}
                </div>
              ))}
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7a2f3f] px-5 py-3 text-sm font-medium text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </a>
          </div>
        )}
      </Container>
    </header>
  );
}
