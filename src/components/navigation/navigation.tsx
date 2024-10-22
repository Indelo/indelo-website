/* eslint-disable max-classes-per-file */
import React, { useState, useEffect } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import {
  Menu,
  Container,
  Header,
  Button,
  Sidebar,
  Icon,
  Responsive,
  Image,
} from 'semantic-ui-react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import logo from '../../assets/images/small-logo.png';

import css from './navigation.module.css';

const query = graphql`
  query {
    file(relativePath: { eq: "small-logo.png" }) {
      childImageSharp {
        fixed(width: 25, height: 26) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export const Navigation = ({ children }: { children: any }) => {
  const [isVisible, setVisible] = useState(false);
  const [status, setStatus] = useState('top');
  const data = useStaticQuery(query);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const scrolled = document.scrollingElement!.scrollTop;
      if (scrolled >= 10) {
        if (status === 'top') {
          setStatus('scrolled');
        }
      } else {
        setStatus('top');
      }
    });
  }, [status]);

  return (
    <>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Menu
          secondary
          pointing
          fixed="top"
          className={status === 'top' ? css.menu : css.scrolled}
        >
          <Container>
            <Menu.Item header>
              <AnchorLink to="/">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ paddingRight: '10px' }}>
                    <Img fixed={data.file.childImageSharp.fixed} />
                  </div>
                  <div>
                    <Header
                      size="large"
                      style={{
                        color: '#fff',
                        fontFamily: 'Avenir',
                      }}
                    >
                      indelo
                    </Header>
                  </div>
                </div>
              </AnchorLink>
            </Menu.Item>
            <Menu.Menu position="right">
              {[].map(({ title, path }) => {
                return (
                  <Menu.Item key={title}>
                    <AnchorLink to={path} title={title} className={css.link} />
                  </Menu.Item>
                );
              })}
              <Menu.Item>
                <Button
                  primary
                  as={(props: any) => (
                    <AnchorLink
                      className={css.linkButton}
                      {...props}
                      to="/#contact"
                    />
                  )}
                >
                  Contact us
                </Button>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
        {children}
      </Responsive>
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar
          as={Menu}
          animation="overlay"
          direction="right"
          vertical
          visible={isVisible}
        >
          <Menu.Item header style={{ backgroundColor: '#1b1154' }}>
            <div style={{ textAlign: 'end' }}>
              <Icon
                inverted
                onClick={() => setVisible(!isVisible)}
                size="large"
                name="close"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 20,
              }}
            >
              <Image src={logo} style={{ width: '50%' }} />
              <Header
                style={{
                  margin: 0,
                  color: 'white',
                  fontSize: 40,
                }}
              >
                indelo
              </Header>
            </div>
          </Menu.Item>
          <Menu.Item style={{ textAlign: 'center' }}>
            <Button
              primary
              as={(props: any) => (
                <AnchorLink
                  className={css.linkButton}
                  {...props}
                  to="/#contact"
                  title="Contact us"
                />
              )}
            >
              <AnchorLink
                className={css.linkButton}
                to="/#contact"
                title="Contact us"
              />
            </Button>
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pushable>
          <Sidebar.Pusher
            dimmed={isVisible}
            onClick={isVisible ? () => setVisible(!isVisible) : undefined}
          >
            <Menu secondary className={css.menu} style={{ marginBottom: 0 }}>
              <Menu.Item header>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ paddingRight: '10px' }}>
                    <Img fixed={data.file.childImageSharp.fixed} />
                  </div>
                  <div>
                    <Header
                      size="large"
                      style={{
                        color: '#fff',
                        fontFamily: 'Avenir',
                      }}
                    >
                      indelo
                    </Header>
                  </div>
                </div>
              </Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item onClick={() => setVisible(!isVisible)}>
                  <Icon name="bars" inverted />
                </Menu.Item>
              </Menu.Menu>
            </Menu>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    </>
  );
};
