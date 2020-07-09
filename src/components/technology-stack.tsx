import React from 'react';
import _ from 'lodash';
import { Grid, Image } from 'semantic-ui-react';
import { Section } from './section';

const columns = _.times(5, (i) => (
  <Grid.Column key={i}>
    <Image
      src="https://react.semantic-ui.com/images/wireframe/square-image.png"
      size="medium"
      circular
    />
  </Grid.Column>
));

export const TechnologyStack = () => {
  return (
    <Section title="Our technology stack">
      <Grid columns={5}>
        <Grid.Row>{columns}</Grid.Row>
        <Grid.Row>{columns}</Grid.Row>
      </Grid>
    </Section>
  );
};
