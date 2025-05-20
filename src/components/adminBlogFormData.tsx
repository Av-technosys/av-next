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

const AdminBlogFormTable = ({ data }) => {
  return (
    <div className="mt-12 w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-52">Name</TableHead>
            <TableHead className="w-52">Email </TableHead>
            <TableHead className="w-52">Number </TableHead>
            <TableHead className="">Message</TableHead>
            <TableHead className="w-60">Slug</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item: any) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item?.name}</TableCell>
              <TableCell>{item?.email}</TableCell>
              <TableCell>{item?.number}</TableCell>
              <TableCell className="">{item?.message}</TableCell>
              <TableCell className="">{item?.slug}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminBlogFormTable;
