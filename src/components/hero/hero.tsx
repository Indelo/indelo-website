import React from 'react';
import { Header, Button, Grid, Segment, Image } from 'semantic-ui-react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import css from './hero.module.css';
import logo from '../../assets/images/test.gif';

const query = graphql`
  query {
    file(relativePath: { eq: "main-logo.png" }) {
      childImageSharp {
        fixed(width: 130, height: 131) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export const Hero = () => {
  const data = useStaticQuery(query);

  return (
    <Grid columns={1}>
      <Grid.Row>
        <Grid.Column
          style={{
            marginLeft: '0 important',
            marginRight: '0 !important',
            padding: 0,
          }}
        >
          <Segment
            style={{ marginBottom: 0, padding: 0, marginTop: 30 }}
            basic
            textAlign="center"
          >
            {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
            <Image
              style={{ width: 200, margin: 'auto' }}
              src={logo}
              alt="logo"
            />
          </Segment>
          <Header
            inverted
            as="h1"
            textAlign="center"
            style={{ marginTop: 12, fontFamily: 'Avenir' }}
          >
            indelo
          </Header>
          <Header
            inverted
            as="h3"
            textAlign="center"
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
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Button
            size="huge"
            color="red"
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
    </Grid>
  );
};
