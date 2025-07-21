'use client';

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import dayjs from 'dayjs';
import Link from 'next/link';
import { Eye, EyeOff, LoaderCircle } from 'lucide-react';
import { toggleBlogVisibility } from '../../lib';

import { Button } from './ui/button';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

const AdminBlogTble = ({ data, count }) => {
  const router = useRouter();
  const [endIndex, setendIndex] = useState(10);
  console.log('data.length', data?.length);
  console.log('endIndex', endIndex);

  const params = useSearchParams();
  const blogscount = params.get('blogs') || 0;
  console.log('blogscount', blogscount);

  const loadMoreHandler = () => {
    setendIndex((prev) => prev + 10);
    router.push(`?blogs=${endIndex + 10}`);
  };

  return (
    <div className="mt-6 w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Title</TableHead>
            <TableHead>Author </TableHead>
            <TableHead>Date </TableHead>
            <TableHead className="text-right">Category</TableHead>
            <TableHead className="text-right">Visible</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">
                <Link
                  prefetch={false}
                  className="hover:underline"
                  href={`/admin/blog/${item.slug}`}
                >
                  {item.title}
                </Link>
              </TableCell>
              <TableCell>{item.userName}</TableCell>
              <TableCell>
                {dayjs(JSON.parse(item.date)).format('DD-MM-YYYY')}
              </TableCell>
              <TableCell className="text-right">{item.blogCategory}</TableCell>
              <TableVisible item={item} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-5 w-full text-center">
        <Button
          variant={'outline'}
          onClick={loadMoreHandler}
          className={`rounded ${blogscount >= count && 'hidden'} `}
        >
          Load More
        </Button>
      </div>
    </div>
  );
};

export default AdminBlogTble;

function TableVisible({ item }) {
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(item.isVisible);

  async function handleToggleVisible(id, isVisible) {
    setLoading(true);
    await toggleBlogVisibility(id, !isVisible);
    setIsVisible((prev) => !prev);
    setLoading(false);
  }
  return (
    <TableCell className="text-right">
      <div
        onClick={() => handleToggleVisible(item?.id, item?.isVisible)}
        className="ml-auto w-fit cursor-pointer"
      >
        {loading ? (
          <LoaderCircle className="animate-spin" size={20} />
        ) : isVisible ? (
          <Eye size={20} />
        ) : (
          <EyeOff size={20} />
        )}
      </div>
    </TableCell>
  );
}
