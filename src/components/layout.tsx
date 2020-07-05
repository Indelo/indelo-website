import React from 'react';
import { Container } from 'semantic-ui-react';
import { Navigation } from './navigation';
import { Footer } from './footer';

export const Layout = ({ children }: { children: any }) => {
  return (
    <div>
      <Navigation />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
