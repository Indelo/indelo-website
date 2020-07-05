import React from 'react';
import { Container, Header } from 'semantic-ui-react';

export const Section = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <Container style={{ paddingTop: '20px', paddingBottom: '70px' }}>
      <Header as="h2" textAlign="center">
        {title}
      </Header>
      <div style={{ paddingTop: '40px' }}>{children}</div>
    </Container>
  );
};
