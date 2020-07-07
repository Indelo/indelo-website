import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { SEO } from '../components/seo';
import { Layout } from '../components/layout';
import { Services } from '../components/services';
import { TechnologyStack } from '../components/technology-stack';
import { AboutUs } from '../components/about-us';
import { ContactForm } from '../components/contact-form';
import { Hero } from '../components/hero/hero';
import waves from '../assets/images/waves.png';
import css from './index.module.css';

const RootIndex = () => {
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
          <div className={css.waveContainer}>
            <img className={css.waveImage} alt="waves" src={waves} />
          </div>
        </div>
        <Container>
          <Services />
          <TechnologyStack />
          <AboutUs />
          <ContactForm />
        </Container>
      </Layout>
    </>
  );
};

export default RootIndex;
