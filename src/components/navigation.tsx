import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

export const Navigation = () => {
  return (
    <Menu secondary pointing>
      <Container>
        <Menu.Item header>An agency</Menu.Item>
        <Menu.Menu position="right" />
      </Container>
    </Menu>
  );
};
