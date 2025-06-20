'use client';

import Image from 'next/image';

const content = [
  {
    title: 'Our Mission',
    description:
      "At AV Technosys, our mission is to passionately and innovatively drive the success of our clients. We are committed to delivering impactful solutions, guided by dedication, creativity, and a deep understanding of our clients' goals.",
  },
  {
    title: 'Our Vision',
    description:
      'Our vision is to grow both vertically and horizontally positioning AV Technosys as a leading, trusted IT solutions provider in India. We strive to achieve excellence by continuously delivering outstanding, scalable software solutions that empower businesses.',
  },
  {
    title: 'Our Values',
    description:
      'Customer satisfaction remains our top priority. AV Technosys is built on a foundation of reliability, efficiency, and a deep commitment to meeting client needs. Our work is driven by strong ethics, unwavering integrity, and the belief that long-term relationships are built on trust and transparency.',
  },
];

export default function MissionVisionSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 md:flex-row md:gap-20">
        {/* Left Text Column */}
        <div className="flex flex-1 flex-col gap-8 text-gray-800">
          {content.map((item, index) => (
            <div key={index}>
              <h2 className="text-3xl font-bold text-yellow-500">
                {item.title}
              </h2>
              <p className="mt-1.5 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            src="/new/about-mission.jpeg"
            alt="Mission Vision Illustration"
            width={600}
            height={500}
            className="m-auto h-full max-h-[28rem] w-auto rounded-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}
