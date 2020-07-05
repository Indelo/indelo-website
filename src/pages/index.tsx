import React from 'react';
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
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className={css.heroContainer}>
              <Hero />
            </div>
            <div>
              <img style={{ width: '100vw' }} alt="waves" src={waves} />
            </div>
          </div>
        </div>
        <Services />
        <TechnologyStack />
        <AboutUs />
        <ContactForm />
      </Layout>
    </>
  );
};

export default RootIndex;
