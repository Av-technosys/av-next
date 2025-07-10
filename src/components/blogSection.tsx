import { TArroeRight } from '@/components/icons';
import { blogsData } from '@/cosnt';
import { convertS3ToImageKit } from '@/lib/healper/imagekit';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

export function BlogSection({ data = blogsData }) {
  return (
    <div className="w-full bg-gray-100 px-4 py-16">
      <div className="mx-auto max-w-7xl text-black">
        <div className="mb-8 flex flex-col justify-between gap-4 xl:flex-row xl:items-center">
          <div>
            <p className="mb-2 text-3xl font-medium capitalize">
              Our Latest Blogs
            </p>
            <p className="text-xl text-gray-600">
              Get the most recent information on trends, technology, and
              development insights.
            </p>
          </div>
          <Link
            href={'/blog'}
            className="group flex h-fit w-fit cursor-pointer items-center gap-2 rounded bg-yellow-500 px-6 py-3 font-medium text-white duration-200 hover:bg-yellow-600"
          >
            <p className="font-medium">View All Blogs</p>
            <TArroeRight
              size={20}
              className="duration-300 group-hover:-rotate-45"
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {data?.map((blog: any, idx) => {
            return <BlogCard key={idx} blog={blog} />;
          })}
        </div>
      </div>
    </div>
  );
}

function BlogCard({ blog }) {
  function formatDateToDDMMYYYY() {
    return dayjs(JSON.parse(blog.date)).format('DD-MM-YYYY');
  }

  return (
    <div key={blog.id} className="relative mb-4 flex flex-col gap-2">
      <Link
        href={`/blog/${blog?.slug}`}
        className="relative h-auto w-full sm:h-56 sm:w-auto"
      >
        <Image
          height={500}
          width={500}
          className="h-auto w-full rounded-xl object-cover sm:h-full sm:w-auto"
          src={convertS3ToImageKit(blog.image)}
          alt={blog.title}
        />
      </Link>
      <div className="flex gap-2 text-sm text-gray-600">
        <p className="">{blog.userName}</p>
        <p className=" ">{formatDateToDDMMYYYY()}</p>
      </div>
      <Link
        href={`/blog/${blog?.slug}`}
        className="line-clamp-2 text-lg font-medium hover:underline"
      >
        {blog.title}
      </Link>
      <p className="line-clamp-2 text-gray-600">{blog.metaDescription}</p>
    </div>
  );
}
