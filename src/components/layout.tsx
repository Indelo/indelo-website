import React from 'react';
import { Container } from 'semantic-ui-react';
import { Footer } from './footer';
import { Navigation } from './navigation/navigation';

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
