import React from 'react';
import { Footer } from './footer';
import { Navigation } from './navigation/navigation';

export const Layout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <>
      <Navigation>
        {children}
        <Footer />
      </Navigation>
    </>
  );
};

export default Layout;
