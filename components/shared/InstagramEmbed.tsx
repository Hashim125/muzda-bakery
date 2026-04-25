'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { Instagram } from 'lucide-react';

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

interface InstagramEmbedProps {
  url: string;
  label: string;
  className?: string;
}

export default function InstagramEmbed({ url, label, className = '' }: InstagramEmbedProps) {
  useEffect(() => {
    window.instgrm?.Embeds?.process();
  }, [url]);

  return (
    <div className={`overflow-hidden rounded-[2rem] border border-[#7a2f3f]/10 bg-[#fffaf7] p-4 shadow-[0_24px_48px_rgba(39,6,14,0.08)] ${className}`}>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.instgrm?.Embeds?.process()}
      />
      <blockquote
        className="instagram-media mx-auto !min-w-0"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: '#fffaf7',
          border: 0,
          margin: '0 auto',
          maxWidth: 760,
          minWidth: 0,
          width: '100%',
        }}
      >
        <a href={url} target="_blank" rel="noreferrer">
          {label}
        </a>
      </blockquote>
      <div className="mt-4 rounded-[1.5rem] border border-[#7a2f3f]/10 bg-[#f8f1ec] p-5 text-center">
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#7a2f3f] text-white">
          <Instagram className="h-5 w-5" />
        </div>
        <p className="mt-3 text-sm leading-7 text-[#5f4f52]">
          If the Instagram preview does not load, open the latest bakes directly on Instagram.
        </p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center justify-center rounded-full bg-[#7a2f3f] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#934857]"
        >
          View Instagram
        </a>
      </div>
    </div>
  );
}
