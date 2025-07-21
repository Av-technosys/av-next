import Footer1 from '../footer1';

import { getAllBlogsByPage, getAllBlogsMetaDeta } from './../../../lib/index';
import { Metadata } from 'next';
import { NavBarHome } from '@/components/navBar';

import ShowBlogs from './showBlogs';
import { BlogPagination } from './paginationblog';

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
  const searchText = searchParamsData.search || '';
  const selectedCategory = searchParamsData.category || '';

  const blogData = await getAllBlogsByPage({
    page: currentPage,
    limit: PAGE_LIMIT,
    selectedCategory,
    search: searchText,
  });

  return (
    <div className="pt-3 text-black">
      <NavBarHome />
      <div className="fontTest mx-auto mt-4 max-w-7xl px-6 md:px-4">
        <ShowBlogs
          key={String(currentPage + selectedCategory)}
          blogData={blogData?.data}
        />
      </div>
      {(blogData?.data?.length as number) > 0 ? (
        <BlogPagination
          limit={PAGE_LIMIT}
          page={Number(currentPage)}
          totalPages={Number(blogData?.totalPages)}
        />
      ) : null}

      <Footer1 />
    </div>
  );
};

export default Blog;
