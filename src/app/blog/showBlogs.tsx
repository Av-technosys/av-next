'use client';
import Link from 'next/link';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { blogCategories } from '@/const';
import { SearchIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import useDebounce from '@/lib/useDebouncing';
import Image from 'next/image';

dayjs.extend(utc);
const ShowBlogs = ({ blogData, blogCategorySummery }) => {
  const [filteredBlogs, setFilteredBlogs] = useState(blogData);
  const [searchTerm, setSearchTerm] = useState('');

  function handleCategoryFilter(blogCategorySlug) {
    setSearchTerm('');
    const filteredBlogs = blogData.filter(
      (item) => item.blogCategory === blogCategorySlug
    );
    setFilteredBlogs(filteredBlogs);
  }

  const debouncedSearchTerm = useDebounce(searchTerm, 800);

  useEffect(() => {
    if (debouncedSearchTerm === '') {
      setFilteredBlogs(blogData);
    } else {
      const filtered = blogData.filter((item) =>
        item.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      setFilteredBlogs(filtered);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="flex flex-col">
      <div className="mb-12 flex w-full flex-col items-center justify-between gap-3 sm:flex-row sm:gap-6">
        <div className="w-full overflow-x-auto">
          <div className="flex w-full min-w-[48rem] items-center gap-6 overflow-x-auto py-4 lg:gap-10">
            <p
              onClick={() => setFilteredBlogs(blogData)}
              className="hover:underline"
            >
              All
            </p>
            {blogCategorySummery.map((item) => {
              return (
                <p
                  onClick={() => handleCategoryFilter(item.value)}
                  className="hover:underline"
                >
                  {item.label}
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex w-full items-center gap-2 rounded-lg bg-white/10 px-4 py-2 shadow-md transition-all focus-within:ring-2 focus-within:ring-blue-500 sm:w-auto">
          <input
            type="text"
            placeholder="Search blogs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent px-2 py-1 text-sm placeholder-gray-400 focus:outline-none"
          />
          <SearchIcon size={20} className="text-gray-400" />
        </div>
      </div>
      {filteredBlogs.length > 0 ? (
        <div className="mb-12 flex h-full w-full flex-col items-center gap-6 md:flex-row">
          <div className="w-full max-w-2xl">
            <Link
              className="block w-full"
              href={`/blog/${filteredBlogs[0]?.slug}`}
            >
              <div className="w-full overflow-hidden rounded-2xl">
                <Image
                  src={filteredBlogs[0]?.image}
                  alt=""
                  width={800}
                  height={450}
                  className="h-auto w-full rounded-2xl"
                  sizes="(max-width: 768px) 1500px, 800px"
                />
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <p>{getBlogCategory(filteredBlogs[0]?.blogCategory)}</p>
            <Link href={`/blog/${filteredBlogs[0]?.slug}`}>
              <h1 className="text-3xl font-semibold hover:underline">
                {filteredBlogs[0]?.title}
              </h1>
            </Link>
            <p className="mb-4 text-xl font-medium text-gray-600">
              {filteredBlogs[0]?.metaDescription}
            </p>
            <p className="text-gray-400">{filteredBlogs[0]?.userName}</p>
          </div>
        </div>
      ) : (
        <p className="text-2xl font-semibold text-gray-500">No Blogs</p>
      )}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {filteredBlogs?.map((blog, idx) => {
          if (idx == 0) return;
          function formatDateToDDMMYYYY(isoDateStr) {
            const date = dayjs.utc(JSON.parse(isoDateStr));
            return date.format('DD/MM/YYYY');
          }

          return (
            <div key={blog.id} className="relative mb-4 flex flex-col gap-2">
              <Link
                prefetch={false}
                href={`/blog/${blog?.slug}`}
                className="block w-full"
              >
                <div className="w-full overflow-hidden rounded-xl">
                  <Image
                    className="h-auto w-full"
                    src={blog.image}
                    alt={blog.title}
                    width={800}
                    height={450}
                    sizes="(max-width: 768px) 1500px, 800px"
                  />
                </div>
              </Link>

              <div className="flex gap-2 text-sm text-gray-600">
                <p className="">{blog.userName}</p>
                <p className=" ">{formatDateToDDMMYYYY(blog.date)}</p>
              </div>
              <Link
                href={`/blog/${blog?.slug}`}
                className="line-clamp-2 text-lg font-semibold hover:underline"
              >
                {blog.title}
              </Link>
              <p className="line-clamp-2 text-gray-600">
                {blog.metaDescription}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowBlogs;

function getBlogCategory(blogCategorySlug) {
  return blogCategories.find((item) => item.value === blogCategorySlug)?.label;
}
