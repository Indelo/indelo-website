import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Menu, Container, Button, Header } from 'semantic-ui-react';

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
            <Header>Indelo</Header>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <AnchorLink to="/#contact" title="Contact Us">
                <Button primary>Contact us</Button>
              </AnchorLink>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
      <div style={{ height: 46 }} />
    </>
  );
};
