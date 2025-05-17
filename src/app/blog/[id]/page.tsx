import Header2 from '@/components/header2/header2';
import Footer1 from '@/app/footer1';
import { getBlogBySlug } from '../../../../lib';
import dayjs from 'dayjs';
import { blogCategories } from './../../../const/index';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';

const Page = async (context: any) => {
  const slug = context.params.id;
  const [blogData] = await getBlogBySlug(slug);

  if (!blogData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-[#1c1c1e] text-white">
      <Header2 />
      <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-6 px-4">
        <div className="flex w-fit items-center gap-1">
          <Link className="cursor-pointer hover:underline" href={'/'}>
            <p>Home</p>
          </Link>
          <ChevronRightIcon size={20} />
          <Link className="cursor-pointer hover:underline" href={'/blog'}>
            <p>Blog</p>
          </Link>
          <ChevronRightIcon size={20} />
          <p>{getBlogCategory(blogData?.blogCategory || '')}</p>
        </div>
        <h1 className="text-3xl font-medium sm:text-4xl">{blogData.title}</h1>
        <p className="text-xl sm:text-2xl">{blogData.metaDescription}</p>
        <img
          src={blogData.image}
          className="h-auto w-full object-contain"
          alt=""
        />

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex h-16 items-center gap-4">
            <div className="h-full">
              <img
                src={blogData.userImage || undefined}
                className="aspect-square h-full w-full rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between gap-2">
              <p className="text-xl font-semibold">{blogData.userName}</p>
              <p>{dayjs(JSON.parse(blogData.date)).format('DD-MM-YYYY')}</p>
            </div>
          </div>
          <p className="hidden text-2xl font-semibold sm:block">
            {getBlogCategory(blogData.blogCategory)}{' '}
          </p>
        </div>

        <div
          className="tiptap space-y-2"
          dangerouslySetInnerHTML={{ __html: blogData.data }}
        />
      </div>
      <Footer1 />
    </div>
  );
};

export default Page;

function getBlogCategory(blogCategorySlug: string) {
  return blogCategories.find((item) => item.value === blogCategorySlug)?.label;
}
