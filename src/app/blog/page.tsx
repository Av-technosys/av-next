import Footer1 from '../footer1';

import { getAllBlogsByPage, getAllBlogsMetaDeta } from './../../../lib/index';
import { Metadata } from 'next';
import { NavBarHome } from '@/components/navBar';
import { blogCategorySummery } from '@/const/blogCategories';
import ShowBlogs from './showBlogs';
import { BlogPagination } from './paginationblog';
import { blogCategories } from '@/const/blogCategories';

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

const Blog = async ({ searchParams }: any) => {
  const PAGE_LIMIT = 7;
  const searchParamsData = await searchParams;
  const currentPage = searchParamsData.page || 1;
  const searchText = searchParamsData.search || 1;

  const selectedCategor = searchParamsData.category || '';
  const blogData = await getAllBlogsByPage(
    currentPage,
    PAGE_LIMIT,
    selectedCategor,
    searchText
  );

  console.log('blog-data', blogData);

  return (
    <div className="pt-3 text-black">
      <NavBarHome />
      <div className="fontTest mx-auto mt-4 max-w-7xl px-6 md:px-4 lg:mt-12">
        <ShowBlogs
          key={String(currentPage + selectedCategor)}
          blogData={blogData?.data}
        />
      </div>
      <BlogPagination
        limit={PAGE_LIMIT}
        page={Number(currentPage)}
        totalPages={Number(blogData.totalPages)}
      />
      <Footer1 />
    </div>
  );
};

export default Blog;
