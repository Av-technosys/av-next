import Form1 from '../letsConnectForm';
import Hero from '../hero';
import Footer1 from '../footer1';
import Header2 from '@/components/header2/header2';
import ImageWithBorders from '../testCard';
import PortfolioPage1 from './portfolio1';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'AV Technosys has worked on several client projects across various industries like ecommerce, automative, and so on. Do check out this link to know more',
  alternates: {
    canonical: 'https://www.avtechnosys.com/portfolio',
  },
};

const PortfolioPage = async () => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/projects?sort[0]=updatedAt:desc&populate=*`;

  var projectData;

  try {
    const response = await fetch(URL, {
      headers: {
        Authorization:
          'Bearer 139c18519ecfe403355c18114098231d1ecdba3c9ff648cfc0e5084b91181b9fb1fa1583bce3af15fa90c0e25249e0d8340cfc23574df337d870c3ddb79e4868c8dbf5557de47442aca6c0c0d26877a6265d55525600d651f0221824c0beaac35a8a2b6539c4b6e4c55d64536b4c80054f8932845e8cfe360abb92d0e20bb1ac',
      },
    });
    const data = await response.json();
    projectData = data.data;
  } catch (error) {
    console.log(error);
  }

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
