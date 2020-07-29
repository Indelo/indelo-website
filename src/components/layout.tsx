import React from 'react';
import { Footer } from './footer';
import { Navigation } from './navigation/navigation';

export const Layout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div
      style={{ position: 'relative', paddingBottom: 150, minHeight: '85vh' }}
    >
      <Navigation>
        {children}
        <Footer />
      </Navigation>
    </div>
  );
};

export default Layout;
