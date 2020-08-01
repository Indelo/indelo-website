import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';
import Feedback from '../assets/images/v1.png';
import Details from '../assets/images/v2.png';
import TeamWork from '../assets/images/v3.png';
import Time from '../assets/images/v4.png';
import Metrics from '../assets/images/v5.png';
import { Section } from './section/section';

export const Values = () => {
  return (
    <Section title="Our Values">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Grid columns={5}>
          <Grid.Column style={{ width: 220, textAlign: 'center' }}>
            <Image
              src={Feedback}
              style={{
                width: 80,
                height: 80,
                margin: 'auto',
                marginBottom: 10,
              }}
            />
            <Header style={{ marginTop: 0, fontWeight: 500 }} as="h3">
              Feedback
            </Header>
            <p style={{ fontSize: 18 }}>
              We involve our clients in every step of product development. We
              thrive on transparency and communication
            </p>
          </Grid.Column>
          <Grid.Column style={{ width: 220, textAlign: 'center' }}>
            <Image
              src={Details}
              style={{
                width: 80,
                height: 80,
                margin: 'auto',
                marginBottom: 10,
              }}
            />
            <Header style={{ marginTop: 0, fontWeight: 500 }} as="h3">
              Detail Focussed
            </Header>
            <p style={{ fontSize: 18 }}>
              We focus on the fine details so that your product will stand out
              in the market
            </p>
          </Grid.Column>
          <Grid.Column style={{ width: 220, textAlign: 'center' }}>
            <Image
              src={TeamWork}
              style={{
                width: 80,
                height: 80,
                margin: 'auto',
                marginBottom: 10,
              }}
            />
            <Header style={{ marginTop: 0, fontWeight: 500 }} as="h3">
              Team work
            </Header>
            <p style={{ fontSize: 18 }}>
              We delegate work in our team so that each aspect of your product
              is worked on by a leading specialist
            </p>
          </Grid.Column>
          <Grid.Column style={{ width: 220, textAlign: 'center' }}>
            <Image
              src={Time}
              style={{
                width: 80,
                height: 80,
                margin: 'auto',
                marginBottom: 10,
              }}
            />
            <Header style={{ marginTop: 0, fontWeight: 500 }} as="h3">
              Timely
            </Header>
            <p style={{ fontSize: 18 }}>
              We're deadline driven and it is our priority to get your product
              out the door as soon as you need it
            </p>
          </Grid.Column>
          <Grid.Column style={{ width: 220, textAlign: 'center' }}>
            <Image
              src={Metrics}
              style={{
                width: 80,
                height: 80,
                margin: 'auto',
                marginBottom: 10,
              }}
            />
            <Header style={{ marginTop: 0, fontWeight: 500 }} as="h3">
              Performace Driven
            </Header>
            <p style={{ fontSize: 18 }}>
              We focus on performance and are committed to getting your product
              the exposure it needs to succeed
            </p>
          </Grid.Column>
        </Grid>
      </div>
    </Section>
  );
};
