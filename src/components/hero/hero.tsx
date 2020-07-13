import React from 'react';
import { Header, Button, Grid, Segment, Responsive } from 'semantic-ui-react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import css from './hero.module.css';
import HeroImage from '../../assets/svgs/hero.svg';

const query = graphql`
  query {
    file(relativePath: { eq: "main-logo.png" }) {
      childImageSharp {
        fixed(width: 100, height: 101) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export const Hero = () => {
  const data = useStaticQuery(query);

  return (
    <>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Grid columns={2}>
          <Grid.Column>
            <Header
              inverted
              as="h1"
              style={{ marginTop: 12, fontFamily: 'Avenir' }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '20px' }}>
                  <Img fixed={data.file.childImageSharp.fixed} />
                </div>
                <div>indelo</div>
              </div>
            </Header>
            <Header inverted as="h3" style={{ fontFamily: 'Avenir' }}>
              Innovative design and development to solve your business needs
            </Header>
            <Segment
              basic
              style={{ fontSize: '1.33em', margin: 0, padding: 0 }}
            >
              <p style={{ color: '#ccc', fontFamily: 'Avenir' }}>
                Website development - UI/UX - Design - Branding - SEO
              </p>
            </Segment>
            <Segment basic padded>
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
          <Grid.Column>
            <HeroImage style={{ width: '95%', maxHeight: '400px' }} />
          </Grid.Column>
        </Grid>
      </Responsive>
      <Responsive {...Responsive.onlyMobile}>
        <Grid centered columns={1}>
          <Grid.Column>
            <Segment basic textAlign="center">
              <Header
                inverted
                as="h1"
                textAlign="center"
                style={{ marginTop: 12, fontFamily: 'Avenir' }}
              >
                <Img fixed={data.file.childImageSharp.fixed} />
                <div>indelo</div>
              </Header>
            </Segment>
            <Header
              inverted
              textAlign="center"
              as="h3"
              style={{ fontFamily: 'Avenir' }}
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
