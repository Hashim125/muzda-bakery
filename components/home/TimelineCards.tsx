'use client';

import { useState } from 'react';
import Image from 'next/image';
import { StoryMilestone } from '@/lib/types';

interface TimelineCardsProps {
  milestones: StoryMilestone[];
}

const timelineImages = [
  'https://images.unsplash.com/photo-1762530351343-ce4bb2fd89d1?auto=format&fit=crop&fm=jpg&q=80&w=1200',
  'https://images.unsplash.com/photo-1726839114817-d1c96cbccfdf?auto=format&fit=crop&fm=jpg&q=80&w=1200',
  'https://images.unsplash.com/photo-1742299807255-1883cc728229?auto=format&fit=crop&fm=jpg&q=80&w=1200',
  'https://images.unsplash.com/photo-1722454971995-34160f08675c?auto=format&fit=crop&fm=jpg&q=80&w=1200',
];

export default function TimelineCards({ milestones }: TimelineCardsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4 lg:space-y-0 lg:flex lg:gap-4">
      {milestones.map((milestone, index) => {
        const isActive = index === activeIndex;

        return (
          <article
            key={milestone.year}
            className={`group overflow-hidden rounded-[1.8rem] border border-[#7a2f3f]/10 bg-[#fffaf7] shadow-[0_18px_42px_rgba(39,6,14,0.08)] transition-all duration-300 lg:min-h-[32rem] ${
              isActive ? 'lg:flex-[1.8]' : 'lg:flex-[0.8]'
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
          >
            <div className="relative h-56">
              <Image
                src={timelineImages[index % timelineImages.length]}
                alt={milestone.title}
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className={`object-cover transition duration-500 ${isActive ? 'scale-[1.02]' : 'scale-100'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#391720]/12 via-transparent to-transparent" />
              <div className="absolute left-5 top-5 rounded-full bg-[#fffaf7]/95 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#934857] shadow-sm">
                {milestone.year}
              </div>
            </div>
            <div className="border-t border-[#7a2f3f]/10 bg-[#fffaf7] p-5">
              <h3 className="fancy-title text-3xl font-semibold leading-tight text-[#391720]">
                {milestone.title}
              </h3>
              <p
                className={`mt-3 text-sm leading-7 text-[#5f4f52] transition-all duration-300 ${
                  isActive ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 lg:overflow-hidden'
                }`}
              >
                {milestone.copy}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
