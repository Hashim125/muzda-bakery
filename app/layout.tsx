import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://muzdabakery.co.uk'),
  title: {
    default: 'Muzda Bakery | Family Bakery in East London Since 1964',
    template: '%s | Muzda Bakery',
  },
  description:
    'Family-run Asian bakery in East London since 1964. Explore biscuits, toasts, savoury snacks, naan, frozen products, and order for collection.',
  keywords: [
    'Muzda Bakery',
    'East London bakery',
    'Asian bakery London',
    'naan order London',
    'biscuits and savouries',
    'Forest Gate bakery',
  ],
  openGraph: {
    title: 'Muzda Bakery',
    description:
      'A family bakery built on passion, tradition, and community in East London.',
    url: 'https://muzdabakery.co.uk',
    siteName: 'Muzda Bakery',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
