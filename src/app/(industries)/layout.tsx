import Footer1 from '@/app/footer1';
import { NavBarHome } from '@/components/navBar';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <NavBarHome />
      {children}
      <Footer1 />
    </>
  );
};

export default Layout;
