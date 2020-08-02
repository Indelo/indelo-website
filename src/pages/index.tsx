import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Responsive } from 'semantic-ui-react';
import css from './index.module.css';
import { SEO } from '../components/seo';
import { Layout } from '../components/layout';
import { Services } from '../components/services';
import { Motivation } from '../components/motivation';
import { Highlights } from '../components/highlights';
import { ContactUs } from '../components/contact-us';
import { Hero } from '../components/hero/hero';
import { Team } from '../components/team/team';
import { Values } from '../components/values';
import { Mission } from '../components/mission';
import { TechnologyStack } from '../components/technology-stack/technology-stack';
// @ts-ignore
import Wave from '../assets/svgs/landing-wave.svg';
// @ts-ignore
import Background from '../assets/svgs/landing-background.svg';

const RootIndex = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <>
      <SEO />
      <Layout>
        <div className={css.container}>
          <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Container style={{ position: 'relative', paddingTop: '100px' }}>
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              >
                <Background
                  height="auto"
                  width="auto"
                  preserveAspectRatio="none"
                />
              </div>
              <Hero />
            </Container>
          </Responsive>
          <Responsive {...Responsive.onlyMobile}>
            <Container>
              <Hero />
            </Container>
          </Responsive>
        </div>
        <Wave height="250px" width="200%" preserveAspectRatio="none" />
        <Highlights />
        <Services />
        <Motivation />
        <Mission />
        <Values />
        <Team />
        <TechnologyStack />
        <ContactUs />
      </Layout>
    </>
  );
};

export default RootIndex;
