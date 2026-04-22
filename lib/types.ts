export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

export interface ProductCategory {
  slug: string;
  title: string;
  description: string;
}

export interface ProductItem {
  slug: string;
  category: ProductCategory['slug'];
  name: string;
  description: string;
  price: string;
  badge?: string;
}

export interface StoryMilestone {
  year: string;
  title: string;
  copy: string;
  accent: string;
}

export interface Testimonial {
  name: string;
  quote: string;
  context: string;
}

export interface SimplyHumiBakesCategory {
  title: string;
  description: string;
}

export interface SimplyHumiBakesDetails {
  name: string;
  instagramUrl: string;
  whatsapp: string;
  whatsappMessage: string;
  about: string;
  categories: SimplyHumiBakesCategory[];
  occasions: string[];
  orderingSteps: string[];
  testimonials: Testimonial[];
}

export interface BusinessDetails {
  name: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  addressLines: string[];
  mapsEmbedUrl: string;
  hours: Array<{ day: string; hours: string }>;
}

export interface OrderRequest {
  customerName: string;
  email: string;
  phone: string;
  products: string;
  collectionDate: string;
  collectionWindow: string;
  notes: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}
