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
    'Read all the lastest trends occurring in the it sector from AI to no-code development we cover all. Vist to know more',
  alternates: {
    canonical: 'https://www.avtechnosys.com/blog',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Blog = async () => {
  const blogData = await getAllBlogsMetaDeta();
  return (
    <div className="pt-3 text-black">
      <NavBarHome />
      <div className="fontTest mx-auto mt-12 max-w-7xl px-6 md:px-4">
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
