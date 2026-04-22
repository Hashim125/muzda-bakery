'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSlideshowProps {
  images: StaticImageData[];
  label: string;
  title: string;
  description: string;
}

export default function HeroSlideshow({ images, label, title, description }: HeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const showPreviousImage = useCallback(() => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  }, [images.length]);
  const showNextImage = useCallback(() => {
    setActiveIndex((current) => (current + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      showNextImage();
    }, 3200);

    return () => window.clearInterval(interval);
  }, [showNextImage]);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#ffffff]/14 bg-[#fffaf7] p-4 text-[#391720] shadow-[0_28px_60px_rgba(39,6,14,0.14)]">
      <div className="relative h-[24rem] overflow-hidden rounded-[1.6rem] sm:h-[28rem] lg:h-[31rem]">
        {images.map((image, index) => (
          <Image
            key={`${image.src}-${index}`}
            src={image}
            alt={`${title} ${index + 1}`}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 42vw"
            className={`object-cover transition duration-1000 ease-out ${
              index === activeIndex ? 'scale-100 opacity-100' : 'scale-[1.03] opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#27060e]/82 via-[#27060e]/18 to-[#27060e]/18" />
        <div className="absolute left-4 top-4 rounded-full bg-[#fffaf7] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#934857] shadow-sm">
          {label}
        </div>
        <button
          type="button"
          aria-label="Show previous bake image"
          onClick={showPreviousImage}
          className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#fffaf7]/94 text-[#391720] shadow-[0_12px_28px_rgba(39,6,14,0.2)] transition hover:bg-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Show next bake image"
          onClick={showNextImage}
          className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#fffaf7]/94 text-[#391720] shadow-[0_12px_28px_rgba(39,6,14,0.2)] transition hover:bg-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <div className="absolute bottom-4 left-4 right-4 rounded-[0.9rem] bg-[#391720]/88 px-5 py-4 text-white shadow-[0_14px_34px_rgba(39,6,14,0.28)] backdrop-blur-sm">
          <h3 className="fancy-title text-2xl font-semibold leading-tight sm:text-3xl">{title}</h3>
          <p className="mt-2 max-w-md text-sm leading-6 text-[#f7eee9]">{description}</p>
        </div>
      </div>
    </div>
  );
}
