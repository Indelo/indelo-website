import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Menu, Container, Header, Image, Button } from 'semantic-ui-react';
import smallLogo from '../../assets/images/smalllogo.png';
import css from './navigation.module.css';

export const Navigation = () => {
  return (
    <>
      <Menu secondary pointing fixed="top" className={css.menu}>
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
                  <AnchorLink to={path} title={title} className={css.link} />
                </Menu.Item>
              );
            })}
            <Menu.Item>
              <Button
                color="red"
                as={(props: any) => (
                  <AnchorLink
                    className={css.linkButton}
                    {...props}
                    to="/#contact"
                    title="contact us"
                  />
                )}
              >
                <AnchorLink
                  className={css.linkButton}
                  to="/#contact"
                  title="contact us"
                />
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
      <div style={{ height: 62 }} />
    </>
  );
};
