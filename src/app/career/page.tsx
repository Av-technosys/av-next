import Header2 from '@/components/header2/header2';
import Footer1 from '../footer1';

import { Metadata } from 'next';
import JobLesting from './jobListing';

export const metadata: Metadata = {
  title: 'Career',
  description:
    "Find all the available job openings here, apply to the top mobile app development company, and you'll have a great chance to grow your career.",
  alternates: {
    canonical: 'https://avtechnosys.com/career',
  },
};

const Page = () => {
  return (
    <div className="w-full bg-[#1c1c1e]">
      <Header2 />
      <HeroSection />
      <JobLesting />
      <Footer1 />
    </div>
  );
};

export default Page;

function HeroSection() {
  return (
    <div className="mx-auto h-full min-h-96 w-full max-w-7xl px-6 py-12 md:px-4">
      <p className="mx-auto max-w-xl text-center text-4xl font-medium text-white md:text-6xl">
        Find the best job offer for you.
      </p>
    </div>
  );
}
