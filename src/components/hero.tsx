import React from 'react';
import { Container, Header, Button, Grid, Segment } from 'semantic-ui-react';

export const Hero = () => {
  return (
    <Container
      fluid
      style={{ paddingTop: '200px', height: 'calc(100vh - 46px)' }}
    >
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h1" textAlign="center">
              Indelo
            </Header>
            <Header as="h3" textAlign="center">
              We solve business problems with software
            </Header>
            <Segment basic textAlign="center" style={{ fontSize: '1.33em' }}>
              Website development - UI/UX - Design - Branding - SEO
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
    </Container>
  );
};
