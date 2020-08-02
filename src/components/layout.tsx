import React from 'react';
import { Helmet } from 'react-helmet';
import { Footer } from './footer/footer';
import { Navigation } from './navigation/navigation';
import favicon from '../assets/images/favicon.png';

export const Layout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div style={{ position: 'relative', minHeight: '85vh' }}>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Navigation>
        {children}
        <Footer />
      </Navigation>
    </div>
  );
};

export default Layout;
