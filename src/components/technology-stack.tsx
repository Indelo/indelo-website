import React from 'react';
import _, { chunk } from 'lodash';
import { Grid, Image, Header, Segment } from 'semantic-ui-react';
import { Section } from './section/section';
import Node from '../assets/svgs/nodejs-icon.svg';
import JavaScript from '../assets/svgs/javascript.svg';
import TypeScript from '../assets/svgs/typescript-icon.svg';
import Express from '../assets/svgs/express.svg';
import Python from '../assets/svgs/python.svg';

const items = [
  {
    title: 'Node',
    image: <Node />,
  },
  {
    title: 'JavaScript',
    image: <JavaScript />,
  },
  {
    title: 'TypeScript',
    image: <TypeScript />,
  },
  {
    title: 'Express',
    image: <Express />,
  },
  {
    title: 'Python',
    image: <Python />,
  },
];

export const TechnologyStack = () => {
  return (
    <Section title="Our technology stack">
      <Segment>
        <Grid columns={8}>
          {chunk(items, 8).map((chunks) => (
            <Grid.Row>
              {chunks.map(({ title, image }) => {
                return (
                  <Grid.Column>
                    <Header textAlign="center">{title}</Header>
                    <Image>{image}</Image>
                  </Grid.Column>
                );
              })}
            </Grid.Row>
          ))}
        </Grid>
      </Segment>
    </Section>
  );
};
