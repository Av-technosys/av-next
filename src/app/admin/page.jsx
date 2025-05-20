import AdminBlogTble from '@/components/adminBlogTble';
import { getAdminBlogData, getBlogFormData } from '../../../lib';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import AdminBlogFormTable from '@/components/adminBlogFormData';

const Page = async () => {
  const data = await getAdminBlogData();
  const blogFormData = await getBlogFormData();
  return (
    <div className="mx-auto max-w-7xl p-6">
      <h2 className="text-2xl font-semibold">Admin</h2>
      <Link
        href="/admin/blog"
        className="ml-auto mt-2 flex w-fit cursor-pointer items-center gap-2 rounded-xl border px-4 py-2 duration-200 hover:bg-gray-100 hover:underline"
      >
        <Plus size={18} />
        New Blog
      </Link>
      <AdminBlogTble data={data} />
      {blogFormData && <AdminBlogFormTable data={blogFormData} />}
    </div>
  );
};

export default Page;
