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
import Wave from '../assets/svgs/landing-wave.svg';
import Background from '../assets/svgs/landing-background.svg';

const RootIndex = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <>
      <SEO />
      <Layout>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <div className={css.container}>
            <Container
              style={{
                position: 'relative',
                paddingTop: '10%',
                paddingBottom: '90px',
              }}
            >
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
                  height="100%"
                  width="100%"
                  preserveAspectRatio="none"
                />
              </div>
              <Hero />
            </Container>
          </div>
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <div className={css.mobileContainer}>
            <Container>
              <Hero />
            </Container>
          </div>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Wave height="250px" width="100%" preserveAspectRatio="none" />
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <Wave height="120px" width="500%" preserveAspectRatio="none" />
        </Responsive>
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
