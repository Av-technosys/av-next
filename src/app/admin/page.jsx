import AdminBlogTble from '@/components/adminBlogTble';
import { getAdminBlogData, getAdminBlogDataCount } from '../../../lib';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Page = async ({ searchParams }) => {
  let data = [];
  let blogdatacount;

  const paramsvalue = searchParams;
  const blogsvalue = Number(paramsvalue?.blogs);

  try {
    [data, blogdatacount] = await Promise.all([
      getAdminBlogData(blogsvalue),
      getAdminBlogDataCount(),
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

      <AdminBlogTble data={data} count={blogdatacount} />
    </div>
  );
};

export default Page;
