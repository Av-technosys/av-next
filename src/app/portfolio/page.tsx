import Form1 from '../letsConnectForm';
import Hero from '../hero';
import Footer1 from '../footer1';
import Header2 from '@/components/header2/header2';
import ImageWithBorders from '../testCard';
import PortfolioPage1 from './portfolio1';
import { Metadata } from 'next';
import projectData from './data.json';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'AV Technosys has worked on several client projects across various industries like ecommerce, automative, and so on. Do check out this link to know more',
  alternates: {
    canonical: 'https://www.avtechnosys.com/portfolio',
  },
  robots: {
    index: true,
    follow: false,
  },
};

const PortfolioPage = async () => {
  return (
    <div className="w-full bg-[#1c1c1e] pt-3">
      <Header2 />
      <div className="relative">
        {projectData?.map((item) => (
          <PortfolioPage1 key={item.id} data={item} />
        ))}
      </div>
      <Form1 />
      <Hero />
      <ImageWithBorders />
      <Footer1 />
    </div>
  );
};

export default PortfolioPage;
