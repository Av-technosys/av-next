import React from 'react';
import axios from 'axios';
import Header2 from '@/components/header2/header2';
import BlogContent from './blogContent';
import Footer1 from '@/app/footer1';

const Page = async (context: any) => {
  const slug = context.params.id;

  const URL = `https://av-blog.onrender.com/api/blogs?filters[slug][$eq]=${slug}&populate=*`;

  console.log(URL);

  const response = await fetch(URL, {
    headers: {
      Authorization:
        'Bearer 139c18519ecfe403355c18114098231d1ecdba3c9ff648cfc0e5084b91181b9fb1fa1583bce3af15fa90c0e25249e0d8340cfc23574df337d870c3ddb79e4868c8dbf5557de47442aca6c0c0d26877a6265d55525600d651f0221824c0beaac35a8a2b6539c4b6e4c55d64536b4c80054f8932845e8cfe360abb92d0e20bb1ac',
    },
  });

  const data = await response.json();

  const blogData: any = data.data[0];

  const blogBlogData = blogData?.blog?.split('\n');

  const blogMetaData = {
    title: blogData?.title,
    description: blogData?.description,
    createdAt: blogData?.createdAt,
    image: blogData?.blog_image.url,
  };

  return (
    <div className="min-h-screen bg-[#1c1c1e]">
      <Header2 />
      <BlogMetaData blogMetaData={blogMetaData} />
      <BlogContent blogData={blogBlogData} />

      <Footer1 />
    </div>
  );
};

export default Page;

function BlogMetaData({ blogMetaData }) {
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
    <div className="mx-auto mt-12 flex w-full max-w-5xl flex-col gap-8 px-6 text-white md:px-4">
      <p className="text-center text-5xl font-medium capitalize md:text-left md:text-6xl">
        {blogMetaData?.title}
      </p>

      <div className="h-64 w-full md:h-96">
        <img
          src={blogMetaData?.image}
          className="h-full w-full object-cover"
          alt="no image"
        />
      </div>

      <p className="text-center text-gray-100">{blogMetaData?.description}</p>

      <p className="text-center text-gray-300">
        Posted on {formatDateTime(blogMetaData?.createdAt)}
      </p>
    </div>
  );
}
