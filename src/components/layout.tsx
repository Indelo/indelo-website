import React from 'react';
import { Container } from 'semantic-ui-react';
import { Navigation } from './navigation';
import { Footer } from './footer';

export const Layout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <>
      <Navigation />
      <Container fluid>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
