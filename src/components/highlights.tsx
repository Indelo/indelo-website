import React from 'react';
import { Grid, Header, Image, Responsive } from 'semantic-ui-react';
import { Section } from './section/section';
import Develop from '../assets/images/develop.png';
import Launch from '../assets/images/launch.png';
import Iterate from '../assets/images/iterate.png';

const sections = [
  {
    image: Iterate,
    title: 'Iterate together',
    body:
      'From capturing requirements to refining details, we work closely with you every step of the way.',
    ariaLabel: 'team',
  },
  {
    image: Develop,
    title: 'World-class technology',
    body:
      'We use the latest technology and standards to ensure your product stands out in the market.',
    ariaLabel: 'great',
  },
  {
    image: Launch,
    title: 'Launch to success',
    body:
      "We ensure your product is launched reliably, and with the exact exposure you're looking for.",
    ariaLabel: 'rocket',
  },
];

export const Highlights = () => {
  return (
    <Section>
      <Responsive {...Responsive.onlyMobile}>
        <Grid>
          {sections.map((section) => (
            <Grid.Row key={section.title}>
              <Grid.Column style={{ textAlign: 'center', marginBottom: 30 }}>
                <Image
                  src={section.image}
                  style={{
                    width: 80,
                    height: 80,
                    margin: 'auto',
                    marginBottom: 10,
                  }}
                />
                <Header style={{ marginTop: 0, fontWeight: 500 }} as="h3">
                  {section.title}
                </Header>
                <p style={{ fontSize: 18 }}>{section.body}</p>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      </Responsive>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Grid columns={3}>
            {sections.map((section) => (
              <Grid.Column key={section.title} style={{ textAlign: 'center' }}>
                <Image
                  src={section.image}
                  style={{
                    width: 80,
                    height: 80,
                    margin: 'auto',
                    marginBottom: 10,
                  }}
                />
                <Header style={{ marginTop: 0, fontWeight: 500 }} as="h3">
                  {section.title}
                </Header>
                <p style={{ fontSize: 18 }}>
                  {section.body}
                  <span role="img" aria-label={section.ariaLabel}>
                    {section.icon}
                  </span>
                </p>
              </Grid.Column>
            ))}
          </Grid>
        </div>
      </Responsive>
    </Section>
  );
};
