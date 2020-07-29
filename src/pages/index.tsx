import React, { useEffect } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import AOS from 'aos';
import { SEO } from '../components/seo';
import { Layout } from '../components/layout';
import { Services } from '../components/services';
import { AboutUs } from '../components/about-us/about-us';
import { Highlights } from '../components/highlights';
import { ContactUs } from '../components/contact-us';
import { Hero } from '../components/hero/hero';
import Waves from '../assets/svgs/waves.svg';

import css from './index.module.css';
import 'aos/dist/aos.css';
import { TechnologyStack } from '../components/technology-stack';

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
            height: '800px',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -10,
          }}
        >
          <Waves height="100%" width="100%" preserveAspectRatio="none" />
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
        <TechnologyStack />
        <AboutUs />
        <ContactUs />
      </Layout>
    </>
  );
};

export default RootIndex;
