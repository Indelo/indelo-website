import React, { useEffect } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import AOS from 'aos';
import { SEO } from '../components/seo';
import { Layout } from '../components/layout';
import { Services } from '../components/services';
import { Team } from '../components/team/team';
import { Highlights } from '../components/highlights';
import { ContactUs } from '../components/contact-us';
import { TechnologyStack } from '../components/technology-stack/technology-stack';
import { Hero } from '../components/hero/hero';
// @ts-ignore
import Wave from '../assets/svgs/w2.svg';
// @ts-ignore
import Test from '../assets/svgs/heroh2.svg';

import css from './index.module.css';
import 'aos/dist/aos.css';
import { AboutUs } from '../components/about-us/about-us';
import { Values } from '../components/values';
import { Section } from '../components/section/section';

const RootIndex = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <>
      <SEO />
      <Layout>
        <div
          style={{
            position: 'absolute',
            height: '900px',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -10,
          }}
        >
          <Test
            height="calc(100% - 100px)"
            width="calc(100%)"
            preserveAspectRatio="none"
          />
          <Wave
            height="200px"
            style={{ marginTop: -5 }}
            preserveAspectRatio="none"
          />
        </div>
        <div className={css.container}>
          <div className={css.hero}>
            <Container>
              <Segment basic padded>
                <Hero />
              </Segment>
            </Container>
          </div>
        </div>
        <Highlights />
        <Services />
        <Team />
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
      </Layout>
    </>
  );
};

export default RootIndex;
