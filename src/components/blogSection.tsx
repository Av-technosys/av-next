import { TArroeRight } from '@/components/icons';
import dayjs from 'dayjs';
import Link from 'next/link';

export function BlogSection() {
  const blogsData = [
    {
      id: 'a0f7909a-b1aa-400a-814d-3d3563d8006b',
      title: 'PetPooja Clone: Launch Your POS App in 2025',
      metaDescription:
        'Learn how to build a powerful PetPooja clone in 2025. Discover features, development steps, costs, and expert tips to launch and scale your custom restaurant POS app successfully.',
      blogCategory: 'app-development',
      image:
        'https://av-blog.s3.ap-south-1.amazonaws.com/uploads/1748415691099',
      tags: [
        'PetPooja',
        'PetPooja Clone',
        'Mobile App Development Company',
        'AV Technosys',
        'POS App',
        'PetPooja Clone App',
      ],
      date: '"2025-05-27T10:40:05.529Z"',
      userImage:
        'https://av-blog.s3.ap-south-1.amazonaws.com/uploads/ashish-bishnoi.jpeg',
      userName: 'Ashish Bishnoi',
      slug: 'petpooja-clone-build-launch-scale-your-pos-app-in-2025',
      isVisible: true,
    },
    {
      id: 'cf0b6717-afa2-412d-9460-5aae4e32054f',
      title: 'How to Hire Dedicated E-commerce Developers in 2025',
      metaDescription:
        'How to hire dedicated e-commerce developers in 2025 tips, skills, and strategies to build your perfect online store.',
      blogCategory: 'e-commerce',
      image:
        'https://av-blog.s3.ap-south-1.amazonaws.com/uploads/1748932534704',
      tags: [
        'Ecommerce App Development services',
        'Hire Dedicated Ecommerce development',
        'hire ecommerce developer',
      ],
      date: '"2025-06-03T06:23:05.271Z"',
      userImage:
        'https://av-blog.s3.ap-south-1.amazonaws.com/uploads/ashish-bishnoi.jpeg',
      userName: 'Ashish Bishnoi',
      slug: 'how-to-hire-dedicated-e-commerce-developers-in-2025',
      isVisible: true,
    },
    {
      id: '858d4a73-f440-4b02-8c71-9f4e0d21246a',
      title: 'How to Develop a Food Delivery App: A Step-by-Step Guide',
      metaDescription:
        'Learn how to develop a food delivery app with this step-by-step guide covering planning, design, development, and launch to create a successful app.',
      blogCategory: 'on-demand-app-development',
      image:
        'https://av-blog.s3.ap-south-1.amazonaws.com/uploads/1747908646244',
      tags: [
        'Food Delivery app',
        'mobile app development services',
        'web development company',
        'food delivery app development company',
      ],
      date: '"2025-05-21T18:30:00.000Z"',
      userImage:
        'https://av-blog.s3.ap-south-1.amazonaws.com/uploads/ashish-bishnoi.jpeg',
      userName: 'Ashish Bishnoi',
      slug: 'how-to-develop-a-food-delivery-app-a-step-by-step-guide',
      isVisible: true,
    },
  ];
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
          {blogsData?.map((blog: any, idx) => {
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
        <img
          className="h-auto w-full rounded-xl object-cover sm:h-full sm:w-auto"
          src={blog.image}
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
