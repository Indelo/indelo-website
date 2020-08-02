import React from 'react';
import { Grid, Header, Image, Responsive } from 'semantic-ui-react';
import { chunk } from 'lodash';

import { Section } from './section/section';

import Feedback from '../assets/images/feedback.png';
import Details from '../assets/images/details.png';
import TeamWork from '../assets/images/teamwork.png';
import Time from '../assets/images/time.png';
import Performance from '../assets/images/performance.png';

const ourValues = [
  {
    title: 'Feedback',
    body:
      'We involve our clients in every step of the way and we thrive on communication and transparency.',
    image: Feedback,
  },
  {
    title: 'Detail focused',
    body:
      'We focus on the fine details so that your product stands out in the market.',
    image: Details,
  },
  {
    title: 'Teamwork',
    body:
      'We delegate work in our team so that each aspect of your product is worked on by a leading specialist.',
    image: TeamWork,
  },
  {
    title: 'Timely',
    body:
      "We're deadline driven and it is our priority to get your product out the door as soon as you need it.",
    image: Time,
  },
  {
    title: 'Performance orientated',
    body:
      'We focus on performance and are committed to getting your product the exposure it needs to succeed.',
    image: Performance,
  },
];

export const Values = () => (
  <Section title="Our Values">
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <Grid centered columns={3}>
        {chunk(ourValues, 3).map((chunks) => {
          return (
            <Grid.Row>
              {chunks.map(({ title, body, image }) => {
                return (
                  <Grid.Column textAlign="center">
                    <Image
                      src={image}
                      style={{
                        width: 90,
                        height: 90,
                        margin: 'auto',
                        marginBottom: 10,
                      }}
                    />
                    <Header style={{ fontWeight: 500 }} as="h3">
                      {title}
                    </Header>
                    <p style={{ fontSize: '1.3em' }}>{body}</p>
                  </Grid.Column>
                );
              })}
            </Grid.Row>
          );
        })}
      </Grid>
    </Responsive>
    <Responsive {...Responsive.onlyMobile}>
      <Grid centered columns={2}>
        {chunk(ourValues, 2).map((chunks) => {
          return (
            <Grid.Row>
              {chunks.map(({ title, body, image }) => {
                return (
                  <Grid.Column textAlign="center">
                    <Image
                      src={image}
                      style={{
                        width: 90,
                        height: 90,
                        margin: 'auto',
                        marginBottom: 10,
                      }}
                    />
                    <Header style={{ fontWeight: 500 }} as="h3">
                      {title}
                    </Header>
                    <p style={{ fontSize: '1.3em' }}>{body}</p>
                  </Grid.Column>
                );
              })}
            </Grid.Row>
          );
        })}
      </Grid>
    </Responsive>
  </Section>
);
