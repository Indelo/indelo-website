import React from 'react';
import { Header, Button, Grid, Segment, Responsive } from 'semantic-ui-react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import css from './hero.module.css';
import HeroImage from '../../assets/svgs/t3.svg';

export const Hero = () => {
  const tag = 'We solve business problems with software';
  const subTag = 'Website development - UI/UX - Branding - SEO';
  return (
    <>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
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
            <Button
              primary
              size="large"
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
          <Grid.Column verticalAlign="middle">
            <div
              style={{
                position: 'absolute',
                left: -300,
                top: -150,
              }}
            >
              <HeroImage style={{ width: 1000, height: '100%' }} />
            </div>
            {/* <div data-aos="zoom-in">
              <HeroImage style={{ width: '100%', maxHeight: '450px' }} />
            </div> */}
          </Grid.Column>
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
        </Grid>
      </Responsive>
    </>
  );
};
