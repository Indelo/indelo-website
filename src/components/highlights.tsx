import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';
import Develop from '../assets/images/d2.png';
import Launch from '../assets/images/d3.png';
import Iterate from '../assets/images/d1.png';
import { Section } from './section/section';

export const Highlights = () => {
  return (
    <Section>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Grid columns={5}>
          <Grid.Column style={{ width: 350 }}>
            <Image
              src={Iterate}
              style={{
                width: 80,
                height: 80,
                margin: 'auto',
                marginBottom: 10,
              }}
            />
            <Header style={{ marginTop: 0, fontWeight: 500 }} as="h3">
              Iterate together
            </Header>
            <p style={{ fontSize: 18 }}>
              From capturing requirements to refining details, we work with you
              every step of the way
{' '}
              <span role="img" aria-label="team">
                👨‍👩‍👦
              </span>
            </p>
          </Grid.Column>
          <Grid.Column style={{ width: 350 }}>
            <Image
              src={Develop}
              style={{
                width: 80,
                height: 80,
                margin: 'auto',
                marginBottom: 10,
              }}
            />
            <Header style={{ marginTop: 0, fontWeight: 500 }} as="h3">
              World-class technology
            </Header>
            <p style={{ fontSize: 18 }}>
              We use the latest tech and standards to ensure your product is
{' '}
              <span role="img" aria-label="great">
                👌
              </span>
            </p>
          </Grid.Column>
          <Grid.Column style={{ width: 350 }}>
            <Image
              src={Launch}
              style={{
                width: 80,
                height: 80,
                margin: 'auto',
                marginBottom: 10,
              }}
            />
            <Header style={{ marginTop: 0, fontWeight: 500 }} as="h3">
              Launch to success
            </Header>
            <p style={{ fontSize: 18 }}>
              We ensure your product is launched reliably, and with the exact
              exposure you're looking for
{' '}
              <span role="img" aria-label="rocket">
                🚀
              </span>
            </p>
          </Grid.Column>
        </Grid>
      </div>
    </Section>
  );
};
