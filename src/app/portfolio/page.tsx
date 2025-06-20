import Footer1 from '../footer1';
import { Metadata } from 'next';
import { portfolioData } from '@/const';
import { NavBarHome } from '@/components/navBar';
import HeroSection from '@/components/titleGrid';
import { BlogSection } from '@/components/blogSection';
import { Locations } from '@/components/location';
import { PortfolioList } from './portfolioList';
import { GetLeadForm } from './getLeadForm';

export const metadata: Metadata = {
  title: 'Our Portfolio',
  description:
    'Explore AV Technosys’ portfolio featuring diverse client projects across industries like eCommerce, automotive, healthcare, and more. See how we deliver innovation.',
  alternates: {
    canonical: 'https://www.avtechnosys.com/portfolio/',
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Our Portfolio - AV Technosys',
    description:
      'Explore AV Technosys’ portfolio featuring diverse client projects across industries like eCommerce, automotive, healthcare, and more. See how we deliver innovation.',
    url: 'https://www.avtechnosys.com/portfolio/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const PortfolioPage = () => {
  return (
    <div className="w-full bg-gray-50 text-black">
      <NavBarHome />
      <div className="mx-auto w-full max-w-7xl">
        <HeroSection />
        <div className="relative flex flex-col gap-6 px-4 py-12 md:flex-row">
          <PortfolioList portfolioData={portfolioData} />
        </div>
      </div>
      <GetLeadForm />
      <BlogSection />
      <Locations />
      <Footer1 className="bg-gray-50" />
    </div>
  );
};

export default PortfolioPage;
