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
        <div style={{ position: 'relative' }}>
          <Grid columns={2}>
            <Grid.Column verticalAlign="middle" width={9}>
              <Header
                inverted
                as="h3"
                style={{
                  fontFamily: 'Avenir',
                  fontSize: '3.4em',
                  paddingTop: 100,
                }}
              >
                {tag}
              </Header>
              <Segment
                basic
                style={{ fontSize: '1.6em', margin: 0, padding: 0 }}
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
                  />
                )}
              >
                Contact us
              </Button>
            </Grid.Column>
          </Grid>
          <div style={{ position: 'absolute', top: 100, right: 0, width: 700 }}>
            <HeroImage height="100%" width="100%" />
          </div>
        </div>
      </Responsive>
      <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
        <Grid centered columns={1}>
          <Grid.Row style={{ paddingBottom: '20px' }}>
            <Grid.Column textAlign="center">
              <HeroImage height="100%" width="100%" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header
                inverted
                textAlign="center"
                as="h3"
                style={{ fontFamily: 'Avenir', fontSize: '2em' }}
              >
                {tag}
              </Header>
              <Segment
                basic
                textAlign="center"
                style={{ fontSize: '1.2em', margin: 0, padding: 0 }}
              >
                <p style={{ color: '#ccc', fontFamily: 'Avenir' }}>{subTag}</p>
              </Segment>
              <Segment basic padded textAlign="center">
                <Button
                  primary
                  size="large"
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
