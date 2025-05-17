import Footer1 from '../footer1';
import Header2 from '@/components/header2/header2';
import { ArrowDownRight } from 'lucide-react';
import Link from 'next/link';

import { getAllBlogsMetaDeta } from './../../../lib/index';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { Metadata } from 'next';

dayjs.extend(utc);

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
    <div className="bg-[#1c1c1e] pt-3">
      <Header2 />
      <div className="fontTest mx-auto mt-12 max-w-7xl bg-[#1c1c1e] px-6 text-white md:px-4">
        <span className="cursor-default text-3xl font-semibold text-white lg:text-5xl">
          Latest Articles
        </span>
        <div className="">
          <div className="lg:flex">
            {/* <div className="flex w-full flex-col justify-between gap-3 md:flex-row">
              <ul className="scrollbar-x-hidden mt-4 flex cursor-pointer gap-5 overflow-x-scroll py-4 text-[1rem] text-white lg:gap-12">
                <li className="" onClick={() => setBlogData(data)}>
                  All
                </li>
                <li className="min-w-fit">App Development</li>
                <li>Buisness</li>
                <li>Odoo</li>
                <li className="min-w-fit">On Demand</li>
                <li className="min-w-fit">Open AI</li>
                <li>Software</li>
                <li>Tech</li>
                <li>Web</li>
              </ul>
            </div> */}
            {/* <div className="flex items-center gap-4 border-b py-2">
              <input
                className="w-full bg-[#1c1c1e] px-3 py-2 text-white"
                type="search"
                placeholder="Search"
                value={searchTerm}
              />
              <Search size={20} color="white" />
            </div> */}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {blogData?.map((blog: any) => {
              function formatDateToDDMMYYYY(isoDateStr: string) {
                const date = dayjs.utc(JSON.parse(isoDateStr));
                return date.format('DD/MM/YYYY');
              }

              return (
                <div
                  key={blog.id}
                  className="relative mb-4 flex flex-col gap-2"
                >
                  <div className="relative h-auto w-full sm:h-56 sm:w-full">
                    <img
                      className="h-full w-full rounded-xl object-cover"
                      src={blog.image}
                      alt={blog.title}
                    />
                  </div>
                  <div className="flex gap-2 text-sm text-gray-400">
                    <p className="">{blog.userName}</p>
                    <p className=" ">{formatDateToDDMMYYYY(blog.date)}</p>
                  </div>
                  <Link
                    href={`/blog/${blog?.slug}`}
                    className="line-clamp-2 text-lg font-semibold text-white hover:underline"
                  >
                    {blog.title}
                  </Link>
                  <p className="line-clamp-2 text-gray-300">
                    {blog.metaDescription}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer1 />
    </div>
  );
};

export default Blog;
