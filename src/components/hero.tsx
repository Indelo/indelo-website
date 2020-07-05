import React from 'react';
import { Header, Button, Grid, Segment } from 'semantic-ui-react';

export const Hero = () => {
  return (
    <Grid columns={1}>
      <Grid.Row>
        <Grid.Column>
          <Header inverted as="h1" textAlign="center">
            indelo
          </Header>
          <Header inverted as="h3" textAlign="center">
            We solve business problems with software
          </Header>
          <Segment basic textAlign="center" style={{ fontSize: '1.33em' }}>
            <p style={{ color: 'gray' }}>
              Website development - UI/UX - Design - Branding - SEO
            </p>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Button primary size="huge">
            Schedule a chat
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
