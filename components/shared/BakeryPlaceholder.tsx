import Image from 'next/image';

interface BakeryPlaceholderProps {
  title: string;
  subtitle: string;
  variant?: 'shopfront' | 'timeline' | 'counter';
}

const variantStyles = {
  shopfront: {
    image:
      'https://images.unsplash.com/photo-1742299807255-1883cc728229?auto=format&fit=crop&fm=jpg&q=80&w=1600',
    label: 'Shopfront atmosphere',
  },
  timeline: {
    image:
      'https://images.unsplash.com/photo-1762530351343-ce4bb2fd89d1?auto=format&fit=crop&fm=jpg&q=80&w=1400',
    label: 'Bakery story image',
  },
  counter: {
    image:
      'https://images.unsplash.com/photo-1726839114817-d1c96cbccfdf?auto=format&fit=crop&fm=jpg&q=80&w=1400',
    label: 'Counter display',
  },
};

export default function BakeryPlaceholder({
  title,
  subtitle,
  variant = 'timeline',
}: BakeryPlaceholderProps) {
  const style = variantStyles[variant];

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-[#561924]/10 bg-[#fffaf7] shadow-[0_18px_40px_rgba(39,6,14,0.08)]">
      <div className="relative h-[20rem] sm:h-[24rem]">
        <Image
          src={style.image}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#27060e]/35 via-transparent to-transparent" />
        <div className="absolute left-5 top-5 rounded-full bg-[#fffaf7]/95 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#561924] shadow-sm">
          {style.label}
        </div>
      </div>
      <div className="border-t border-[#561924]/10 bg-[#fffaf7] p-6 sm:p-7">
        <div className="fancy-title text-3xl font-semibold leading-tight text-[#27060e] sm:text-4xl">
          {title}
        </div>
        <div className="mt-3 max-w-2xl text-sm leading-7 text-[#5f4f52] sm:text-base">
          {subtitle}
        </div>
      </div>
    </div>
  );
}
