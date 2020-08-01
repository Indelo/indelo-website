import React, { useEffect } from 'react';
import { Container, Segment, Header, Grid, Image } from 'semantic-ui-react';
import AOS from 'aos';
import { SEO } from '../components/seo';
import { Layout } from '../components/layout';
import { Services } from '../components/services';
import { AboutUs } from '../components/about-us/about-us';
import { Highlights } from '../components/highlights';
import { ContactUs } from '../components/contact-us';
import { TechnologyStack } from '../components/technology-stack/technology-stack';
import { Hero } from '../components/hero/hero';
import Test from '../assets/svgs/team.svg';
import I from '../assets/images/g1.png';

import css from './about.module.css';
import 'aos/dist/aos.css';
import { Section } from '../components/section/section';
import { Values } from '../components/values';

const AboutIndex = () => {
  return (
    <>
      <SEO />
      <Layout>
        <div
          style={{
            position: 'absolute',
            height: '500px',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -10,
          }}
        >
          <Test height="100%" width="100%" preserveAspectRatio="none" />
        </div>

        <div className={css.container}>
          <div className={css.hero}>
            <Container>
              <Segment basic padded>
                <Grid columns={2}>
                  <Grid.Column style={{ paddingTop: 90 }}>
                    <Header
                      as="h1"
                      style={{
                        fontFamily: 'Avenir',
                        fontSize: '3.8em',
                        fontWeight: 'bold',
                        color: 'white',
                      }}
                    >
                      About the team
                    </Header>
                  </Grid.Column>
                  <Grid.Column>
                    <div
                      style={{
                        position: 'absolute',
                        left: 150,
                        top: -20,
                      }}
                    >
                      <Image src={I} style={{ width: 450, height: '100%' }} />
                    </div>
{' '}
                  </Grid.Column>
                </Grid>
              </Segment>
            </Container>
          </div>
        </div>

        <Section title="Our Mission">
          <div
            style={{
              fontFamily: 'Avenir',
              fontSize: '1.6em',
              textAlign: 'center',
              lineHeight: '1.6em',
            }}
          >
            Our mission is to enable businesses and entrepreneurs to thrive by
            delivering world-class products that embody the ideas and visions
            that brought those products to be. Our team specialises in the full
            range of skills required to take your product from inception to
            launch.
          </div>
        </Section>
        <Values />
        <AboutUs />
        <TechnologyStack />
        <ContactUs />
        {/* <Highlights />
        <Services />
        <AboutUs />
        <ContactUs /> */}
      </Layout>
    </>
  );
};

export default AboutIndex;
