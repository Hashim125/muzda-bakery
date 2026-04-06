import { MessageCircle } from 'lucide-react';
import { business } from '@/lib/site-data';

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${business.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#561924] text-white shadow-[0_20px_40px_rgba(86,25,36,0.28)] transition hover:scale-105 hover:bg-[#742433]"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
