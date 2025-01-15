import Header2 from '@/components/header2/header2';
import React from 'react';
import axios from 'axios';

const Page = (context: any) => {
  const slug = context.params.id;

  function parseRichTextToHTML(data) {
    return data
      .replace(/# (.+)/g, `<h1 class="text-4xl font-bold mb-4">$1</h1>`)
      .replace(/## (.+)/g, `<h2 class="text-3xl font-semibold mb-3">$1</h2>`)
      .replace(/### (.+)/g, `<h3 class="text-2xl font-medium mb-2">$1</h3>`)
      .replace(/#### (.+)/g, `<h4 class="text-xl font-medium mb-2">$1</h4>`)
      .replace(/\*\*(.+?)\*\*/g, `<strong class="font-bold">$1</strong>`)
      .replace(/_(.+?)_/g, `<em class="italic">$1</em>`)
      .replace(/<u>(.+?)<\/u>/g, `<span class="underline">$1</span>`)
      .replace(/~~(.+?)~~/g, `<span class="line-through">$1</span>`)
      .replace(/- (.+)/g, `<ul class="list-disc ml-6 mb-2"><li>$1</li></ul>`)
      .replace(
        /1\. (.+)/g,
        `<ol class="list-decimal ml-6 mb-2"><li>$1</li></ol>`
      )
      .replace(
        /```(.+?)```/gs,
        `<pre class="bg-gray-200 p-4 rounded"><code>$1</code></pre>`
      )
      .replace(
        /!\[(.*?)\]\((.+?)\)/g,
        `<img class="rounded shadow-md my-4" src="$2" alt="$1" />`
      )
      .replace(
        /\[Link\]\((.+?)\)/g,
        `<a href="$1" class="text-blue-500 underline">Link</a>`
      )
      .replace(
        /> (.+)/g,
        `<blockquote class="border-l-4 border-gray-300 pl-4 italic">$1</blockquote>`
      );
  }

  const URL = `http://localhost:1337/api/blogs?filters[slug][$eq]=${slug}&populate=*`;

  console.log(URL);

  async function getBlogData() {
    const response = await axios(URL, {
      headers: {
        Authorization:
          'Bearer 139c18519ecfe403355c18114098231d1ecdba3c9ff648cfc0e5084b91181b9fb1fa1583bce3af15fa90c0e25249e0d8340cfc23574df337d870c3ddb79e4868c8dbf5557de47442aca6c0c0d26877a6265d55525600d651f0221824c0beaac35a8a2b6539c4b6e4c55d64536b4c80054f8932845e8cfe360abb92d0e20bb1ac',
      },
    });
    // const data = await response.json();

    // console.log(response.data[0]);
    // return data.data[0];
  }

  getBlogData();

  // const blogData = getBlogData();

  // console.log(blogData);

  return (
    <div className="min-h-screen w-full bg-[#1c1c1e]">
      <div>
        <Header2 />
        {/* <BlogPage blogData={blogData} /> */}
      </div>
    </div>
  );
};

export default Page;

const BlogPage = ({ blogData }) => {
  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className="mb-4 text-4xl font-bold">{blogData.title}</h1>
      <img src={blogData.blog_image?.url} alt="" />
    </div>
  );
};
