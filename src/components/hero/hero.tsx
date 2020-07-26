import React from 'react';
import { Header, Button, Grid, Segment, Responsive } from 'semantic-ui-react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import css from './hero.module.css';
import HeroImage from '../../assets/svgs/hero.svg';

export const Hero = () => {
  return (
    <>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Grid centered columns={1}>
          <Grid.Row>
            <Grid.Column width={10} verticalAlign="middle" textAlign="center">
              <Header
                inverted
                as="h3"
                style={{ fontFamily: 'Avenir', fontSize: '2.5em' }}
              >
                Innovative design and development to solve your business needs
              </Header>
              <Segment
                basic
                style={{ fontSize: '1.33em', margin: 0, padding: 0 }}
              >
                <p style={{ color: '#fff', fontFamily: 'Avenir' }}>
                  Website development - UI/UX - Design - Branding - SEO
                </p>
              </Segment>
              <br />
              <Button
                // basic
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
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column verticalAlign="middle">
              {/* <HeroImage style={{ width: '95%', maxHeight: '400px' }} /> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
      <Responsive {...Responsive.onlyMobile}>
        <Grid centered columns={1}>
          <Grid.Column>
            <Header
              inverted
              textAlign="center"
              as="h3"
              style={{ fontFamily: 'Avenir', fontSize: '2.5em' }}
            >
              Innovative design and development to solve your business needs
            </Header>
            <Segment
              basic
              textAlign="center"
              style={{ fontSize: '1.33em', margin: 0, padding: 0 }}
            >
              <p style={{ color: '#ccc', fontFamily: 'Avenir' }}>
                Website development - UI/UX - Design - Branding - SEO
              </p>
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
        </Grid>
      </Responsive>
    </>
  );
};
