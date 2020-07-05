import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Menu, Container, Header, Image, Button } from 'semantic-ui-react';
import smallLogo from '../assets/images/smalllogo.png';
import styles from './css/navigation.module.css';

export const Navigation = () => {
  return (
    <>
      <Menu
        secondary
        pointing
        fixed="top"
        style={{
          backgroundColor: '#17284C',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 6,
          paddingBottom: 6,
          borderBottom: 'none',
        }}
      >
        <Container>
          <Menu.Item header>
            <AnchorLink to="/">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image
                  src={smallLogo}
                  style={{ width: '2.5em', marginRight: 6 }}
                />
                <Header
                  style={{
                    color: '#fff',
                    fontSize: 30,
                    margin: 'auto',
                    fontFamily: 'Avenir',
                  }}
                >
                  indelo
                </Header>
              </div>
            </AnchorLink>
          </Menu.Item>
          <Menu.Menu position="right">
            {[
              { title: 'portfolio', path: '/portfolio' },
              { title: 'blog', path: '/blog' },
            ].map(({ title, path }) => {
              return (
                <Menu.Item>
                  <AnchorLink to={path} title={title} className={styles.link} />
                </Menu.Item>
              );
            })}
            <Menu.Item>
              <Button
                primary
                as={(props: any) => (
                  <AnchorLink {...props} to="/#contact" title="contact us" />
                )}
              >
                <AnchorLink to="/#contact" title="contact us" />
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
      <div style={{ height: 46 }} />
    </>
  );
};
