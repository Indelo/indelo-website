import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Menu, Container, Header } from 'semantic-ui-react';

export const Navigation = () => {
  return (
    <>
      <Menu
        secondary
        pointing
        fixed="top"
        // size="huge"
        style={{ backgroundColor: 'white' }}
      >
        <Container>
          <Menu.Item header>
            <AnchorLink to="/">
              <Header>Indelo</Header>
            </AnchorLink>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <AnchorLink to="/#contact" title="Contact Us" />
            </Menu.Item>
            <Menu.Item>
              <AnchorLink to="/blog" title="Blog" />
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
      <div style={{ height: 46 }} />
    </>
  );
};
