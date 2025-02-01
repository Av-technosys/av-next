'use client';
import React, { useEffect, useState } from 'react';
import Footer1 from '../footer1';
import Form1 from '../letsConnectForm';
import Header2 from '@/components/header2/header2';
import VideoBlog from './videoBlog';
import { ArrowDownRight, Search } from 'lucide-react';
import Link from 'next/link';

const Blog = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const blogURL = `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate[blog_image]=true&sort[0]=updatedAt:desc&populate[category][fields][0]=id&populate[category][fields][1]=name&populate[category][fields][2]=slug&fields[0]=id&fields[1]=title&fields[2]=createdAt&fields[3]=description&fields[4]=slug`;
  useEffect(() => {
    setLoading(true);
    async function getBlogData() {
      const response = await fetch(blogURL, {
        headers: {
          Authorization:
            'Bearer 139c18519ecfe403355c18114098231d1ecdba3c9ff648cfc0e5084b91181b9fb1fa1583bce3af15fa90c0e25249e0d8340cfc23574df337d870c3ddb79e4868c8dbf5557de47442aca6c0c0d26877a6265d55525600d651f0221824c0beaac35a8a2b6539c4b6e4c55d64536b4c80054f8932845e8cfe360abb92d0e20bb1ac',
        },
      });
      const data = await response.json();
      setData(data.data);
    }
    getBlogData();
    setLoading(false);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [blogData, setBlogData] = useState(data);

  return (
    <div className="bg-[#1c1c1e] pt-3">
      <Header2 />

      <img className="w-full" src={'./blog.jpg'} alt="blog" />
      <div className="fontTest mx-auto flex max-w-7xl flex-wrap justify-center px-6 md:px-4">
        <div className="flex w-full max-w-6xl -translate-y-[16%] flex-col gap-8 rounded-3xl bg-white px-8 py-8 text-black md:-translate-y-1/2 md:px-16 md:py-16">
          <div className="">
            <h1 className="text-2xl font-semibold lg:text-5xl">Blog</h1>
            <p className="mt-2 text-xs font-normal text-gray-800 md:mt-2 lg:text-base">
              Get daily news and insights on mobile apps, web, and software
              development to make money.
            </p>
          </div>

          <div className="fontTest mx-auto flex w-full flex-col items-center overflow-hidden rounded-xl md:w-3/5 md:flex-row">
            <div className="flex h-40 w-full items-center justify-center border border-black bg-black p-4 text-center text-sm text-white lg:h-[17rem]">
              <h1 className="w-full text-center text-2xl">
                Quick/New Update of AV Technosys
              </h1>
            </div>
            <div className="h-40 w-full lg:-mb-0 lg:h-[17rem]">
              <VideoBlog />
            </div>
          </div>
        </div>
      </div>

      <div className="fontTest mx-auto max-w-7xl bg-[#1c1c1e] px-6 md:px-4">
        <span className="text-[2rem] font-semibold text-white lg:text-6xl">
          Latest Articles
        </span>
        <div className="">
          <div className="lg:flex">
            <div className="flex w-full flex-col justify-between gap-3 md:flex-row">
              <ul className="scrollbar-x-hidden mt-4 flex cursor-pointer gap-5 overflow-x-scroll py-4 text-[1rem] text-white lg:gap-12">
                <li className="" onClick={() => setBlogData(data)}>
                  All
                </li>
                <li
                  className="min-w-fit"
                  // onClick={() =>
                  //   setBlogData(
                  //     data.filter((obj) => obj.keyword === 'App Development')
                  //   )
                  // }
                >
                  App Development
                </li>
                <li
                // onClick={() =>
                //   setBlogData(
                //     data.filter((obj) => obj.keyword === 'Buisness')
                //   )
                // }
                >
                  Buisness
                </li>
                <li
                // onClick={() =>
                //   setBlogData(data.filter((obj) => obj.keyword === 'Odoo'))
                // }
                >
                  Odoo
                </li>
                <li
                  className="min-w-fit"
                  // onClick={() =>
                  //   setBlogData(
                  //     data.filter((obj) => obj.keyword === 'On Demand')
                  //   )
                  // }
                >
                  On Demand
                </li>
                <li
                  className="min-w-fit"
                  // onClick={() =>
                  //   setBlogData(data.filter((obj) => obj.keyword === 'Open AI'))
                  // }
                >
                  Open AI
                </li>
                <li
                // onClick={() =>
                //   setBlogData(
                //     data.filter((obj) => obj.keyword === 'Software')
                //   )
                // }
                >
                  Software
                </li>
                <li
                // onClick={() =>
                //   setBlogData(data.filter((obj) => obj.keyword === 'Tech'))
                // }
                >
                  Tech
                </li>
                <li
                // onClick={() =>
                //   setBlogData(data.filter((obj) => obj.keyword === 'Web'))
                // }
                >
                  Web
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4 border-b py-2">
              <input
                className="w-full bg-[#1c1c1e] px-3 py-2 text-white"
                type="search"
                placeholder="Search"
                value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search size={20} color="white" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
            {loading ? (
              <BlogLoadingAnimation />
            ) : (
              data?.map((blog) => {
                function formatDateTime(isoString) {
                  const date = new Date(isoString);
                  const options: any = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  };

                  return date.toLocaleString('en-US', options);
                }
                return (
                  <div
                    key={blog.id}
                    className="relative mb-4 flex flex-col gap-2"
                  >
                    <div className="h-40 w-full rounded-lg bg-white">
                      <img
                        className="h-full w-full object-cover"
                        src={blog.blog_image.url}
                        alt={blog.title}
                      />
                    </div>
                    <Link
                      href={`/blog/${blog.slug}`}
                      // href={`/blog`}
                      className="absolute right-2 top-36 flex items-center justify-center bg-black p-2"
                    >
                      <ArrowDownRight size={20} color="white" />
                    </Link>
                    <p className="text-sm font-medium text-gray-600">
                      {formatDateTime(blog.createdAt)}
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {blog.title}
                    </p>
                    <p className="text-[10px] font-normal text-gray-700">
                      ------{blog.category.name}
                    </p>
                    <p className="line-clamp-2 text-[10px] text-gray-300">
                      {blog.description}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      <Form1 />

      <Footer1 />
    </div>
  );
};

export default Blog;

function BlogLoadingAnimation() {
  console.log('hey there');
  return (
    <div className="col-span-2 h-40 min-h-40 w-full shrink-0 animate-pulse rounded-lg bg-neutral-800 md:col-span-4"></div>
  );
}
