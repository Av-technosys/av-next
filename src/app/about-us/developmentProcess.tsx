'use client';

import { StickyScroll } from '@/components/stickyScroll';
import Image from 'next/image';

const content = [
  {
    title: 'Define & Analyze Requirements',
    description:
      'We kick things off by truly understanding what’s needed. By listening closely, we dig into user needs and explore all the possibilities. This solid foundation sets us up to create something that stands out and really makes an impact.',
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <Image
          src="/designAndDevelopment.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Sprint Planning',
    description:
      'No more guesswork — we break everything down into clear, achievable goals with specific timelines. Each sprint becomes a focused step toward success, ensuring that we’re all aligned and making progress together. Ready, set, go!',
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/sprintPlaning.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Design & Development',
    description:
      'Design and development go hand-in-hand here. We mix creative flair with technical know-how to craft innovative, intuitive solutions. It’s all about teamwork and turning those big ideas into something amazing — together!',
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <Image
          src="/defineAndAnalise.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Build & Implement',
    description:
      "Now the fun begins! We roll up our sleeves and transform plans into reality with precision. The result? A seamless experience that hits all the right notes and aligns perfectly with user needs. It's time to bring those ideas to life.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="https://av-blog-web.s3.ap-south-1.amazonaws.com/build-and-implement.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Review & Monitor Progress',
    description:
      'Success doesn’t stop at launch — we keep our eyes on the prize, continuously reviewing and tweaking to ensure everything’s on track. We stay agile, adapt when needed, and keep pushing to deliver even better results than expected. The journey is never over!',
    content: (
      <div className="flex h-full w-full items-center justify-center text-white shadow-md shadow-white">
        <Image
          src="https://av-blog-web.s3.ap-south-1.amazonaws.com/review-and-monotor.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full max-w-6xl">
      <StickyScroll content={content} />
    </div>
  );
}
