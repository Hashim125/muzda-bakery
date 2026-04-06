import Image from 'next/image';
import { ProductCategory } from '@/lib/types';

interface ProductPlaceholderProps {
  name: string;
  category?: ProductCategory['slug'];
}

const categoryStyles: Record<string, { label: string; image: string }> = {
  biscuits: {
    label: 'Bakery biscuits',
    image:
      'https://images.unsplash.com/photo-1722454971995-34160f08675c?auto=format&fit=crop&fm=jpg&q=80&w=1200',
  },
  toasts: {
    label: 'Tea-time toasts',
    image:
      'https://images.unsplash.com/photo-1742299807255-1883cc728229?auto=format&fit=crop&fm=jpg&q=80&w=1200',
  },
  'savoury-snacks': {
    label: 'Fresh savouries',
    image:
      'https://images.unsplash.com/photo-1726839114817-d1c96cbccfdf?auto=format&fit=crop&fm=jpg&q=80&w=1200',
  },
  'asian-specialities': {
    label: 'Bakery staples',
    image:
      'https://images.unsplash.com/photo-1762530351343-ce4bb2fd89d1?auto=format&fit=crop&fm=jpg&q=80&w=1200',
  },
  'frozen-products': {
    label: 'Freezer range',
    image:
      'https://images.unsplash.com/photo-1726839114817-d1c96cbccfdf?auto=format&fit=crop&fm=jpg&q=80&w=1200',
  },
};

export default function ProductPlaceholder({ name, category }: ProductPlaceholderProps) {
  const style = category ? categoryStyles[category] : undefined;

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-[#561924]/10 bg-[#fffaf7]">
      <div className="relative h-52">
        <Image
          src={
            style?.image ??
            'https://images.unsplash.com/photo-1722454971995-34160f08675c?auto=format&fit=crop&fm=jpg&q=80&w=1200'
          }
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#27060e]/25 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-[#fffaf7]/95 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#561924] shadow-sm">
          {style?.label ?? 'Bakery product'}
        </div>
      </div>
      <div className="border-t border-[#561924]/10 bg-[#fffaf7] px-4 py-3">
        <div className="text-sm font-medium text-[#27060e]">{name}</div>
      </div>
    </div>
  );
}
