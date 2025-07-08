'use client';

import { SectionHeadingAbout } from '@/components';
import Image from 'next/image';

const content = [
  {
    title: 'Define & Analyze Requirements',
    description:
      'We kick things off by truly understanding what’s needed. By listening closely, we dig into user needs and explore all the possibilities. This solid foundation sets us up to create something that stands out and really makes an impact.',
    image: '/new/process-1.jpeg',
  },
  {
    title: 'Sprint Planning',
    description:
      'No more guesswork  we break everything down into clear, achievable goals with specific timelines. Each sprint becomes a focused step toward success, ensuring that we’re all aligned and making progress together. Ready, set, go!',
    image: '/new/process-2.jpeg',
  },
  {
    title: 'Design & Development',
    description:
      'Design and development go hand-in-hand here. We mix creative flair with technical know-how to craft innovative, intuitive solutions. It’s all about teamwork and turning those big ideas into something amazing - together!',
    image: '/new/process-3.jpeg',
  },
  {
    title: 'Build & Implement',
    description:
      "Now the fun begins! We roll up our sleeves and transform plans into reality with precision. The result? A seamless experience that hits all the right notes and aligns perfectly with user needs. It's time to bring those ideas to life.",
    image: '/new/process-4.jpeg',
  },
  {
    title: 'Review & Monitor Progress',
    description:
      'Success doesn’t stop at launch - we keep our eyes on the prize, continuously reviewing and tweaking to ensure everything’s on track. We stay agile, adapt when needed, and keep pushing to deliver even better results than expected. The journey is never over!',
    image: '/new/process-5.jpeg',
  },
];

export function StickyScrollRevealDemo() {
  return (
    <section className="mx-auto w-full max-w-5xl bg-white text-neutral-800">
      <div className="md:px-4">
        <SectionHeadingAbout>Our Process, Your Success</SectionHeadingAbout>
        <div className="mt-12 space-y-8">
          {content.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-10 rounded-xl md:flex-row md:even:flex-row-reverse"
            >
              <div className="h-full w-full md:w-1/2">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={200}
                  className="h-auto max-h-72 w-full rounded-2xl object-cover"
                  sizes="(max-width: 122px) 200px, 300px"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-medium text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
