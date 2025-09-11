import { SectionHeadingAbout } from '@/components';
import {
  TCalenderTime,
  TCertificate,
  TMobile,
  TRocket,
} from '@/components/icons';
import Image from 'next/image';

export function InsightAboutUs() {
  const awards = [
    'clutch.png',
    'designrush.png',
    'goodfirms .webp',
    'iTrate.png',
    'mid-market.webp',
    'topdeveloper.png',
  ];

  const stats = [
    {
      icon: <TRocket stroke={1} size={52} className="text-neutral-600" />,
      title: '600+',
      subtitle: 'Successful',
      description: 'Apps Developed',
    },
    {
      icon: <TMobile stroke={1} size={52} className="text-neutral-600" />,
      title: '150+',
      subtitle: 'Apps',
      description: 'Of Industry Experience',
    },
    {
      icon: <TCalenderTime stroke={1} size={52} className="text-neutral-600" />,
      title: '10+',
      subtitle: 'Years',
      description: 'Expert Programmers',
    },
    {
      icon: <TCertificate stroke={1} size={52} className="text-neutral-600" />,
      title: '99%',
      subtitle: 'Certified',
      description: 'Expert Programmers',
    },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-20">
      <SectionHeadingAbout>Learn More About Us</SectionHeadingAbout>

      <div className="mt-4 flex flex-col gap-12 md:mt-12 md:flex-row">
        <div className="grid h-fit w-full grid-cols-3 items-center gap-4 md:w-2/5">
          {awards.map((Item, idx) => {
            return (
              <div className="aspect-square h-full w-full rounded-xl border bg-gray-100 p-2">
                <Image
                  width={300}
                  height={300}
                  key={idx}
                  src={`/review/${Item}`}
                  className="h-full w-full object-contain p-2 md:p-2"
                  alt=""
                />
              </div>
            );
          })}
        </div>
        <div className="w-full md:w-3/5">
          <p className="text-neutral-500">
            <span className="font-semibold text-neutral-900">AV Technosys</span>{' '}
            is a trusted and promising IT service provider, delivering
            high-quality web development, mobile app development, and custom
            software solutions to startups, mid-sized businesses, and large
            enterprises. Our mission is to empower organizations with robust
            digital applications that drive success and innovation.
          </p>
          <p className="mt-6 text-neutral-500">
            With a proven track record of serving 800+ satisfied clients across
            diverse industries, we take pride in our ability to deliver results
            that matter. At AV Technosys, we’re not just about building tech,
            we’re about building long-lasting, meaningful relationships with our
            clients.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((item, index) => (
              <div className="w-full space-y-2" key={index}>
                {item.icon}
                <p className="pl-2 text-xl font-semibold leading-6 text-neutral-900">
                  {item.title}
                  <br className="hidden md:block" />
                  {item.subtitle}
                </p>
                <p className="pl-2 text-sm text-neutral-600">
                  {item.description || '\u00A0'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
