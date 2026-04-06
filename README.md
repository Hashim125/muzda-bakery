# Muzda Bakery - Marketing Website

A modern, responsive marketing website for Muzda Bakery, a specialist Asian bakery in Forest Gate, London.

## Overview

**Business**: Muzda Bakery
**Specialty**: Asian Biscuits, Sweets & Savouries
**Location**: 129 Green St, Forest Gate, London E7 8JF

This website showcases the bakery's products and services with a clean, modern design that feels premium yet welcoming.

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (body) & Playfair Display (headings) via Google Fonts

## Design Features

- **Color Palette**: Warm creams, beiges, pistachio green, soft browns, and saffron accents
- **Responsive**: Mobile-first design that works beautifully on all devices
- **Modern**: Clean layouts with generous whitespace
- **Animated**: Subtle scroll animations and hover effects
- **Accessible**: Semantic HTML and proper ARIA labels

## Project Structure

```
muzda-bakery/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout with fonts and metadata
│   └── page.tsx             # Main homepage
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Navigation with mobile menu
│   │   └── Footer.tsx       # Footer with contact info
│   ├── sections/
│   │   ├── Hero.tsx         # Hero section with CTA
│   │   ├── About.tsx        # About section
│   │   ├── Products.tsx     # Product categories
│   │   ├── WhyChoose.tsx    # Benefits grid
│   │   └── Contact.tsx      # Location and contact
│   └── ui/
│       ├── Button.tsx       # Reusable button component
│       ├── Card.tsx         # Card with animations
│       ├── Container.tsx    # Max-width container
│       └── Section.tsx      # Section wrapper
├── public/                  # Static assets (add images here)
└── tailwind.config.ts       # Custom color palette and design tokens
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### Adding Real Images

1. Place high-quality bakery images in the `public/` folder (e.g., `public/images/`)
2. Update the placeholder sections in:
   - `components/sections/About.tsx` (line 18)
   - `components/sections/Products.tsx` (replace emoji placeholders)
   - `components/sections/Hero.tsx` (optional background image)

### Updating Content

- **Business Hours**: Edit `components/sections/Contact.tsx` (line 74)
- **Navigation Links**: Edit `components/layout/Header.tsx` (line 7)
- **Product Categories**: Edit `components/sections/Products.tsx` (line 7)
- **Benefits**: Edit `components/sections/WhyChoose.tsx` (line 7)

### Integrating Google Maps

Replace the map placeholder in `components/sections/Contact.tsx` (line 99) with:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.234!2d0.0234!3d51.5345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMyJzA0LjIiTiAwwrAwMScyNC4yIkU!5e0!3m2!1sen!2suk!4v1234567890"
  width="100%"
  height="500"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-card"
/>
```

### Color Customization

Edit `tailwind.config.ts` to adjust the color palette:

```typescript
colors: {
  cream: { /* ... */ },
  pistachio: { /* ... */ },
  saffron: { /* ... */ },
  brown: { /* ... */ },
}
```

## Features Checklist

- ✅ Responsive navigation with mobile hamburger menu
- ✅ Hero section with animated headline and CTAs
- ✅ About section with brand story
- ✅ Product categories with hover animations
- ✅ Benefits grid explaining value proposition
- ✅ Contact section with address and map placeholder
- ✅ Footer with social media links
- ✅ Smooth scroll animations
- ✅ Custom color palette inspired by Asian desserts
- ✅ SEO-optimized metadata
- ✅ TypeScript for type safety
- ✅ Production-ready build configuration

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any platform supporting Next.js

## Next Steps

1. **Add Real Photography**: Replace placeholder images with professional bakery photos
2. **Set Up Analytics**: Add Google Analytics or Plausible
3. **Contact Form**: Implement a contact form with email integration
4. **Online Ordering**: Integrate e-commerce functionality (Stripe, Shopify)
5. **CMS Integration**: Connect to Sanity, Contentful, or similar for easy content updates
6. **Performance Optimization**: Add image optimization and lazy loading for photos

## Support

For issues or questions about this website, please contact the developer or refer to the [Next.js documentation](https://nextjs.org/docs).

---

Built with care for Muzda Bakery 🥧
