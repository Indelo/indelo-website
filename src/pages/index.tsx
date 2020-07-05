import React from 'react';
import { Container } from 'semantic-ui-react';
import { Navigation } from '../components/navigation';
import { SEO } from '../components/seo';
import { Layout } from '../components/layout';
import { Services } from '../components/services';
import { TechnologyStack } from '../components/technology-stack';
import { AboutUs } from '../components/about-us';
import { ContactForm } from '../components/contact-form';
import { Hero } from '../components/hero';

const RootIndex = () => {
  return (
    <>
      <SEO />
      <Layout>
        <Navigation />
        <Container
          fluid
          style={{ paddingTop: '200px', height: 'calc(100vh - 46px)' }}
        >
          <Hero />
        </Container>

        <Services />
        <TechnologyStack />
        <AboutUs />
        <ContactForm />
      </Layout>
    </>
  );
};

export default RootIndex;
