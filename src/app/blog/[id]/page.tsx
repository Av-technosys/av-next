'use server';
import Header2 from '@/components/header2/header2';
import Footer1 from '@/app/footer1';
import { getBlogBySlug } from '../../../../lib';
import dayjs from 'dayjs';
import { blogCategories } from './../../../const/index';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';
import { Metadata, ResolvingMetadata } from 'next';
import { QueryForm } from './queryForm';

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).id;
  const [post] = await getBlogBySlug(slug);

  return {
    title: post?.title,
    description: post?.metaDescription,
    keywords: post?.tags,
    publisher: post?.userName,
    alternates: {
      canonical: `https://www.avtechnosys.com/blog/${slug}`,
    },
    openGraph: {
      title: post?.title,
      description: post?.metaDescription,
      url: `https://www.avtechnosys.com/blog/${slug}`,
      siteName: 'AV Technosys',
      images: [
        {
          url: post.image,
          width: 512,
          height: 512,
          alt: 'AV Technosys Logo',
        },
      ],
      type: 'website',
      locale: 'en_IN',
    },
  };
}

const Page = async (context: any) => {
  const slug = context.params.id;
  const [blogData] = await getBlogBySlug(slug);

  if (!blogData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-[#1c1c1e] text-white">
      <Header2 />
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-6 px-4 md:flex-row">
        <div className="flex flex-col gap-6">
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
              <Image
                height={64}
                width={64}
                src={blogData.userImage as string}
                className="rounded-full"
                alt=""
              />
              <div className="flex flex-col justify-center gap-1">
                <span className="text-xl font-semibold">
                  {blogData.userName}
                </span>
                <span>
                  {dayjs(JSON.parse(blogData.date)).format('DD-MM-YYYY')}
                </span>
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

        <QueryForm />
      </div>
      <Footer1 />
    </div>
  );
};

export default Page;

function getBlogCategory(blogCategorySlug: string) {
  return blogCategories.find((item) => item.value === blogCategorySlug)?.label;
}
