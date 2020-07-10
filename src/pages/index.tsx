import React, { useEffect } from 'react';
import { Container, Segment, Grid } from 'semantic-ui-react';
import AOS from 'aos';
import { SEO } from '../components/seo';
import { Layout } from '../components/layout';
import { Services } from '../components/services';
import { TechnologyStack } from '../components/technology-stack';
import { AboutUs } from '../components/about-us/about-us';
import { ContactForm } from '../components/contact-form';
import { Hero } from '../components/hero/hero';
import waves from '../assets/images/waves.png';
import css from './index.module.css';
import 'aos/dist/aos.css';

const RootIndex = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <SEO />
      <Layout>
        <div className={css.container}>
          <div className={css.heroContainer}>
            <Container>
              <Segment basic padded>
                <Grid centered columns={1}>
                  <Grid.Column computer={9} tablet={12} mobile={16}>
                    <Hero />
                  </Grid.Column>
                </Grid>
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
        </Container>
        <Container style={{ width: 1400 }}>
          <AboutUs />
        </Container>
        <Container>
          <ContactForm />
        </Container>
      </Layout>
    </>
  );
};

export default RootIndex;
