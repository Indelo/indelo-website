import React from 'react';
import { Grid, Item } from 'semantic-ui-react';
import { Section } from './section';

export const AboutUs = () => {
  return (
    <Section title="Who we are">
      <Grid centered columns={1}>
        <Grid.Column width={9}>
          <p style={{ fontSize: '1.33em' }}>
            We are a team of passionate and world-class developers, engineers,
            designers and UI/UX professionals with a variety of experience
          </p>
        </Grid.Column>
      </Grid>
      <Item.Group>
        {[
          { name: 'Nicol Vojacek ' },
          { name: 'Megan Russell' },
          { name: 'Jason Russell' },
        ].map((person) => (
          <Item>
            <Item.Image
              size="small"
              src="https://react.semantic-ui.com/images/wireframe/image.png"
            />
            <Item.Content>
              <Item.Header>{person.name}</Item.Header>
              <Item.Meta>Linked In | GitHub | Email</Item.Meta>
              <Item.Description>This person is super cool</Item.Description>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Section>
  );
};
