import Header2 from '@/components/header2/header2';
import Footer1 from '../footer1';
import { Metadata } from 'next';
import Chldren from './children';

export const metadata: Metadata = {
  title: 'Hire Us',
  description:
    'Looking for a company from which you can hire developers in India? AV Technosys is a leading outsourcing company that has a vast pool of talent. Hire from us now!',
  alternates: {
    canonical: 'https://avtechnosys.com/hire-us',
  },
};

const HireusPage = () => {
  return (
    <div className="w-full bg-[#1c1c1e] pt-3">
      <Header2 />
      <Chldren />
      <Footer1 />
    </div>
  );
};

export default HireusPage;
