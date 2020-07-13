import React, { useEffect } from 'react';
import { Container, Segment, Grid } from 'semantic-ui-react';
import AOS from 'aos';
import { SEO } from '../components/seo';
import { Layout } from '../components/layout';
import { Services } from '../components/services';
import { AboutUs } from '../components/about-us/about-us';
import { Contact } from '../components/contact-form';
import { Hero } from '../components/hero/hero';
import waves from '../assets/images/waves.png';
import css from './index.module.css';
import 'aos/dist/aos.css';

const RootIndex = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <>
      <SEO />
      <Layout>
        <div className={css.container}>
          <div className={css.heroContainer}>
            <Container>
              <Segment basic padded>
                <Hero />
              </Segment>
            </Container>
          </div>
        </div>
        <Services />
        <AboutUs />
        <Contact />
      </Layout>
    </>
  );
};

export default RootIndex;
