import { NavBarHome } from '@/components/navBar';
import React from 'react';
import Footer1 from '../footer1';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBarHome />
      {children}
      <Footer1 />
    </div>
  );
};

export default Layout;
