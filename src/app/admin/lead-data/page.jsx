import React from 'react';
import { getBlogFormData, getLeadFormData } from '../../../../lib';
import AdminBlogFormTable from '@/components/adminBlogFormData';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Page = async () => {
  let leadFormData = [];
  let blogFormData = [];

  [leadFormData, blogFormData] = await Promise.all([
    getLeadFormData(),
    getBlogFormData(),
  ]);

  return (
    <>
      {leadFormData.length > 0 && (
        <>
          <div className="flex items-end gap-10">
            <div className="mt-12 text-3xl">Leads Data</div>
            <div>
              <Link href="/admin">
                <Button variant={'outline'}>Back</Button>
              </Link>
            </div>
          </div>
          <AdminBlogFormTable data={leadFormData} />
        </>
      )}
      {blogFormData.length > 0 && (
        <>
          <p className="mt-12 text-3xl">Blogs Data</p>
          <AdminBlogFormTable data={blogFormData} />
        </>
      )}
    </>
  );
};

export default Page;
