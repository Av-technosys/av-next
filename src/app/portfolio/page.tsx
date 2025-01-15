'use client';
import Form1 from '../letsConnectForm';
import Hero from '../hero';
import Footer1 from '../footer1';
import Header2 from '@/components/header2/header2';
import ImageWithBorders from '../testCard';
import PortfolioPage1 from './portfolio1';
import { ProjectDataSchema } from './types';

const PortfolioPage = () => {
  return (
    <div className="w-full bg-[#1c1c1e] pt-3">
      <Header2 />
      <div className="relative">
        {PortfolioData.map((item) => (
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

const PortfolioData: ProjectDataSchema[] = [
  {
    id: 1,
    name: 'Saaskart',
    logo: './saaskart2.svg',
    bannerImage: './saaskart1.png',
    description:
      "Saaskart India's leading SaaS discovery platform providing data-driven insights and exclusive deals for buyers. With a focus on learning, excellence, adaptability and diversity Saaskartstreamlines the software buying process while fostering innovation and inclusivity within the industry.",
    projectLink: 'https://www.saaskart.co/',
    solutions: [
      {
        title: 'End User Features',
        points: [
          "This creative website showcases Saaskart's best features and provides investment solutions for buyers and sellers, fostering collaboration with partners.",
          'Marketplace to see and buy product.',
          'Informative blogs.',
        ],
      },
    ],
    techStack: [
      './jQuery.svg',
      './php.svg',
      './p-tech.svg',
      './blue-s-tech.svg',
      './cloud-fair.svg',
      './wordpress.svg',
      './my-sql.svg',
      './finance-up-arror-icon.svg',
    ],
    projectBreakDown: [
      'Logo Design',
      'UI/UX & Prototyping',
      'Database - MySQL',
      'Libraries - jQuery, Underscore.js, etc.,',
      'Framework - Bootstrap',
      'Elementor (page builder) WordPress, WooCommerce, Elementor.',
    ],
  },
  {
    id: 2,
    name: 'FixPapa',
    logo: './fixpapalogo.svg',
    bannerImage: './fixpapabannerImage.png',
    description: `FixPapa offers a comprehensive solution for all your IT hardware needs. From repairing and servicing to purchasing and responsibly disposing of e-waste we ensure hassle-free transactions while promoting environmental sustainability. Explore our wide range of products including refurbished laptops desktops printers servers projectors and CCTV along with low price and open box deals for budget-friendly options.`,
    projectLink: 'https://fixpapa.com/',
    solutions: [
      {
        title: 'Web Design And Development',
        points: [
          'This creative website allows users to buy and sell products online.',
          'Users can filter product by brand',
          'Users can rent products from website',
        ],
      },
      {
        title: 'Seller Portal',
        points: [
          'Sellers can list their products easily.',
          'Sales matrix',
          'Product analytics',
          'Payment settlement',
          'Delivery management',
        ],
      },
    ],
    techStack: [
      './blue-s-tech.svg',
      './cloud-fair.svg',
      './core-js.svg',
      './jquery.svg',
      './js.svg',
      './php.svg',
      './bootstrap.svg',
      './elementor.svg',
    ],
    projectBreakDown: [
      'UI/UX & Prototyping',
      'Programming language - PHP',
      'JS Framework - GSAP',
      'WordPress - WooCommerce Elementor, Contact Form 7 Small Ballon Instagram Feed, Site Kit',
      'UI Framework - Bootstrap',
    ],
  },
  {
    id: 3,
    bannerImage: './renoquotes-bannerImage.png',
    logo: './renoquotes-logo.svg',
    name: 'RenoQuotes',
    description: `RenoQuotes provide trustworthy contractors for renovation projects. They help with any type of project ranging from general home improvement and construction to roofing and landscaping.`,
    projectLink: 'https://renoquotes.com/',
    solutions: [
      {
        title: 'End User Features',
        points: [
          'This user-friendly app allows users to buy products smoothly.',
          'Community section to post content',
          'Membership section',
          'Informative blogs',
        ],
      },
      {
        title: 'Seller Portal',
        points: [
          'Seller onboarding',
          'Sales matrix',
          'Product analytics',
          'Payment settlement',
          'Delivery management',
        ],
      },
    ],
    techStack: [
      './nodejs.svg',
      './nextjs.svg',
      './reactjs.svg',
      './jQuery.svg',
      './js.svg',
      './php.svg',
    ],
    projectBreakDown: [
      'Logo Design',
      'UI/UX & Prototyping',
      'Web Server - Next.js Apache HTTP',
      'Programming Language - Node.js',
      'JS Framework - React Next.js',
      'Security - HSTS',
    ],
  },
  {
    id: 4,
    name: 'Rajasthani Haat',
    bannerImage: './rajasthanihaat-bannerImage.png',
    logo: './raajhaat-logo.svg',
    description: `RajasthaniHaat showcases the vibrant artistry of Rajasthan. 
      Users can explore a diverse range of authentic Rajasthani 
      fabrics, handicrafts, and traditional treasures. Engaging with 
      the community, users learn about Rajasthan's rich heritage 
      and contribute to the empowerment of local artisans.`,
    projectLink: 'https://rajasthanihaat.com/',
    solutions: [
      {
        title: 'Customer App / Web',
        points: [
          'This user-friendly website allows users to access a curated selection of genuine Rajasthani authentic products.',
          'Diverse range of products.',
          'Community engagement, empowerment to the Rajasthani artisans, educational content.',
          'Secure transactions and customer support.',
        ],
      },
      {
        title: 'Admin Portal',
        points: [
          'Product Listing.',
          'Price Listing.',
          'Website analytics - Product & Sell.',
          'Delivery management.',
          'CMS page content management.',
        ],
      },
    ],
    techStack: [
      'hubsport.svg',
      'php.svg',
      'reactjs.svg',
      'jQuery.svg',
      'cloud-fair.svg',
      'my-sql.svg',
      'elementor.svg',
    ],
    projectBreakDown: [
      'UI/UX & Prototyping.',
      'Programming language - PHP.',
      'JS Framework - GSAP.',
      'WordPress - WooCommerce, Elementor, Contact Form 7, Small Ballon Instagram Feed, Site Kit.',
      'UI Framework - Bootstrap.',
    ],
  },

  {
    id: 5,
    name: 'Finz',
    bannerImage: './finz-bannerImage.png',
    logo: './finz-logo.svg',
    description:
      'Finz introduces subscription-based payment cards to revolutionize financial transactions. Finz cards offer personalized memberships enhancing financial management and rewarding users with exclusive cashback, discounts, and perks.',
    projectLink: 'http://',
    solutions: [
      {
        title: 'Customer App / Web',
        points: [
          'This user-friendly app allows users to buy products smoothly.',
          'Community section to post content.',
          'Membership section.',
          'Informative blogs.',
        ],
      },
      {
        title: 'Seller Portal',
        points: [
          'Seller onboarding',
          'Sales matrix',
          'Product analytics',
          'Payment settlement',
          'Delivery management',
        ],
      },
    ],
    techStack: [
      'wordpress.svg',
      'js.svg',
      'core-js.svg',
      'jQuery.svg',
      'php.svg',
      'reactjs.svg',
    ],
    projectBreakDown: [
      'UI/UX & Prototyping',
      'Programming language - PHP',
      'JS Framework - GSAP',
      'WordPress - WooCommerce Elementor, Contact Form 7, Small Ballon Instagram Feed, Site Kit',
      'UI Framework - Bootstrap',
    ],
  },

  {
    id: 6,
    name: 'Tavaga',
    logo: './tavaga-logo.png',
    bannerImage: './tavago-bannerImage.png',
    description:
      'Tavaga offers personalized robo-advisory services providing precise investment portfolios as per individual needs. With automated algorithms, it manages investments to achieve financial goals efficiently. Services include customized portfolio management, tax planning, insurance review, and specialized offerings for NRIs.',
    projectLink: 'https://tavaga.com/',
    solutions: [
      {
        title: 'Customer App / Web',
        points: [
          'This user-friendly app allows users to buy products smoothly',
          'Community section to post content',
          'Membership section',
          'Informative blogs',
        ],
      },
      {
        title: 'Seller Portal',
        points: [
          'Seller onboarding',
          'Sales matrix',
          'Product analytics',
          'Payment settlement',
          'Delivery management',
        ],
      },
    ],
    techStack: [
      'android.svg',
      'apple.svg',
      'nodejs.svg',
      'angular.svg',
      'xamarin.svg',
      'mygb-authenticator.svg',
      'blue-diamond-tech.svg',
      'php.svg',
    ],
    projectBreakDown: [
      'UI/UX & Prototyping',
      'Programming language - PHP',
      'JS Framework - GSAP',
      'WordPress - WooCommerce Elementor, Contact Form 7 Small Ballon Instagram Feed, Site Kit',
      'UI Framework - Bootstrap',
    ],
  },
];
