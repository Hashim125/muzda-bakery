import Image from 'next/image';
import type { StaticImageData } from 'next/image';

interface HeroMediaCardProps {
  label: string;
  title: string;
  description: string;
  image: string | StaticImageData;
  secondaryImage?: string | StaticImageData;
  secondaryLabel?: string;
}

export default function HeroMediaCard({
  label,
  title,
  description,
  image,
  secondaryImage,
  secondaryLabel = 'Current look',
}: HeroMediaCardProps) {
  return (
    <div className="group overflow-hidden rounded-[2rem] border border-[#ffffff]/14 bg-[#fffaf7] p-4 text-[#391720] shadow-[0_28px_60px_rgba(39,6,14,0.14)]">
      <div className="relative h-[19rem] overflow-hidden rounded-[1.6rem]">
        <Image src={image} alt={title} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
        {secondaryImage && (
          <div className="absolute inset-y-0 right-0 w-[18%] overflow-hidden transition-all duration-500 group-hover:w-full">
            <Image
              src={secondaryImage}
              alt={secondaryLabel}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-y-0 left-0 w-px bg-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.35)]" />
          </div>
        )}
        <div className="absolute left-4 top-4 rounded-full bg-[#fffaf7]/94 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#934857] shadow-sm">
          {label}
        </div>
        {secondaryImage && (
          <div className="absolute bottom-4 right-4 rounded-full bg-[#391720]/72 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white">
            Hover to reveal
          </div>
        )}
      </div>
      <div className="px-2 pb-2 pt-5">
        <h3 className="fancy-title text-3xl font-semibold text-[#391720] sm:text-4xl">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#6f5a5d] sm:text-base">{description}</p>
      </div>
    </div>
  );
}
