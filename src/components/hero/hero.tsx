import React from 'react';
import { Header, Button, Grid, Segment, Responsive } from 'semantic-ui-react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

// @ts-ignore
import HeroImage from '../../assets/svgs/hero.svg';

import css from './hero.module.css';

export const Hero = () => {
  const tag = 'We solve business problems with software';
  const subTag = 'Website development - UI/UX - Branding - SEO';
  return (
    <>
      <Responsive minWidth={Responsive.onlyComputer.minWidth}>
        <Grid columns={2}>
          <Grid.Column verticalAlign="middle">
            <Header
              inverted
              as="h3"
              style={{
                fontFamily: 'Avenir',
                fontSize: '3.8em',
                fontWeight: 'bold',
                paddingTop: 100,
              }}
            >
              {tag}
            </Header>
            <Segment
              basic
              style={{ fontSize: '1.33em', margin: 0, padding: 0 }}
            >
              <p
                style={{
                  color: '#fff',
                  fontFamily: 'Avenir',
                }}
              >
                {subTag}
              </p>
            </Segment>
            <br />
            <br />
            <Button
              primary
              size="huge"
              style={{ width: 20 }}
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
          </Grid.Column>
          <Grid.Column verticalAlign="middle" />
        </Grid>
        <div style={{ position: 'absolute', top: 100, right: 0, width: '70%' }}>
          <HeroImage height="auto" width="750" />
        </div>
      </Responsive>
      <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
        <Grid centered columns={1}>
          <Grid.Row>
            <Grid.Column>
              <HeroImage height="auto" width="auto" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header
                inverted
                textAlign="center"
                as="h3"
                style={{ fontFamily: 'Avenir', fontSize: '2.5em' }}
              >
                {tag}
              </Header>
              <Segment
                basic
                textAlign="center"
                style={{ fontSize: '1.33em', margin: 0, padding: 0 }}
              >
                <p style={{ color: '#ccc', fontFamily: 'Avenir' }}>{subTag}</p>
              </Segment>
              <Segment basic padded textAlign="center">
                <Button
                  primary
                  size="huge"
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
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    </>
  );
};
