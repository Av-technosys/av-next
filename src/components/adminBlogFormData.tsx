'use client';
import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import Link from 'next/link';

const AdminBlogFormTable = ({ data }) => {
  const [localStorage, setLocalStorage] = useState<any>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLocalStorage(window.localStorage);
    }
  }, []);

  return (
    <div className="mt-6 w-full">
      {localStorage?.getItem('token') === process.env.NEXT_PUBLIC_TOKEN ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-52">Name</TableHead>
              <TableHead className="w-52">Email </TableHead>
              <TableHead className="w-52">Number </TableHead>
              <TableHead className="">Message</TableHead>
              <TableHead className="w-60">Slug</TableHead>
              <TableHead className="w-60">Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item: any) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item?.name}</TableCell>
                <TableCell>{item?.email}</TableCell>
                <TableCell>{item?.number}</TableCell>
                <TableCell className="">{item?.message}</TableCell>
                <TableCell className="">
                  <Link
                    target="_blank"
                    className="hover:underline"
                    href={`/blog/${item?.slug}`}
                  >
                    {item?.slug}
                  </Link>
                </TableCell>
                <TableCell className="">{item?.createdAt.toDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div>Not logged in</div>
      )}
    </div>
  );
};

export default AdminBlogFormTable;
