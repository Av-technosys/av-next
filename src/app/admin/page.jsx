import AdminBlogTble from '@/components/adminBlogTble';
import {
  getAdminBlogData,
  getBlogFormData,
  getLeadFormData,
} from '../../../lib';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import AdminBlogFormTable from '@/components/adminBlogFormData';

const Page = async () => {
  let data = [];
  let blogFormData = [];
  let leadFormData = [];

  try {
    [data, blogFormData, leadFormData] = await Promise.all([
      getAdminBlogData(),
      getBlogFormData(),
      getLeadFormData(),
    ]);
  } catch (error) {
    console.error('Error fetching admin data:', error);
    // Optional: Show fallback UI or rethrow
  }

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
      {blogFormData.length > 0 && (
        <>
          <p className="mt-12 text-3xl">Blogs Data</p>
          <AdminBlogFormTable data={blogFormData} />
        </>
      )}
      {leadFormData.length > 0 && (
        <>
          <p className="mt-12 text-3xl">Leads Data</p>
          <AdminBlogFormTable data={leadFormData} />
        </>
      )}
    </div>
  );
};

export default Page;
