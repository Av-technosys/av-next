import AdminBlogTble from '@/components/adminBlogTble';
import {
  getAdminBlogData,
  getAdminBlogDataCount,
  getBlogFormData,
} from '../../../lib';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import AdminBlogFormTable from '@/components/adminBlogFormData';
import { Button } from '@/components/ui/button';

const Page = async ({ searchParams }) => {
  let data = [];
  let blogFormData = [];
  let blogdatacount = [];

  const paramsvalue = searchParams;
  const blogsvalue = Number(paramsvalue?.blogs);

  try {
    [data, blogdatacount, blogFormData] = await Promise.all([
      getAdminBlogData(blogsvalue),
      getAdminBlogDataCount(),
      getBlogFormData(),
    ]);
  } catch (error) {
    console.error('Error fetching admin data:', error);
    // Optional: Show fallback UI or rethrow
  }

  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="flex w-full items-center justify-between">
        <div className="text-2xl font-semibold">Admin</div>
        <div className="flex items-center gap-2">
          <Link href="/admin/lead-data">
            <Button className="text-xl" variant={'outline'}>
              Lead-Data
            </Button>
          </Link>
          <Link
            href="/admin/blog"
            className="ml-auto flex w-fit cursor-pointer items-center gap-2 rounded-xl border px-4 py-2 duration-200 hover:bg-gray-100 hover:underline"
          >
            <Plus size={18} />
            New Blog
          </Link>
        </div>
      </div>

      <AdminBlogTble data={data} count={blogdatacount.length} />
      {blogFormData.length > 0 && (
        <>
          <p className="mt-12 text-3xl">Blogs Data</p>
          <AdminBlogFormTable data={blogFormData} />
        </>
      )}
    </div>
  );
};

export default Page;
