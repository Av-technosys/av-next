import Header2 from '@/components/header2/header2';
import React from 'react';
import Footer1 from '../footer1';
import { Metadata } from 'next';
import Chldren from './children';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Unlock your business potential with expert digital engineering — from innovative product development to strategic transformation.',
};

const Page = () => {
  return (
    <div className="w-full bg-[#1c1c1e] py-3">
      <Header2 />
      <Chldren />
      <Footer1 />
    </div>
  );
};

export default Page;
