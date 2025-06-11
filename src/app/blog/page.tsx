import Footer1 from '../footer1';

import { getAllBlogsMetaDeta } from './../../../lib/index';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { Metadata } from 'next';
import { NavBarHome } from '@/components/navBar';
import { blogCategories } from '@/const';
import { blogCategorySummery } from '@/const/blogCategories';
import ShowBlogs from './showBlogs';

export const metadata: Metadata = {
  title: 'Blogs',
  description:
    'Read all the latest trends occurring in the IT sector — from AI to no-code development, we cover it all. Visit to know more.',
  alternates: {
    canonical: 'https://www.avtechnosys.com/blog/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Blogs',
    description:
      'Read all the latest trends occurring in the IT sector — from AI to no-code development, we cover it all. Visit to know more.',
    url: 'https://www.avtechnosys.com/blog/',
    siteName: 'AV Technosys',
    type: 'website',
  },
};

const Blog = async () => {
  const blogData = await getAllBlogsMetaDeta();
  return (
    <div className="pt-3 text-black">
      <NavBarHome />
      <div className="fontTest mx-auto mt-4 max-w-7xl px-6 md:px-4 lg:mt-12">
        <ShowBlogs
          blogData={blogData}
          blogCategorySummery={blogCategorySummery}
        />
      </div>

      <Footer1 />
    </div>
  );
};

export default Blog;
