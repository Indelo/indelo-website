import React from 'react';
import { Header, Button, Grid, Segment, Image } from 'semantic-ui-react';
import mainLogo from '../../assets/images/mainlogo.png';
import css from './hero.module.css';

export const Hero = () => {
  return (
    <Grid columns={1}>
      <Grid.Row>
        <Grid.Column>
          <Image src={mainLogo} style={{ width: '7em', margin: 'auto' }} />
          <Header
            inverted
            as="h1"
            textAlign="center"
            style={{ marginTop: 12, fontFamily: 'Avenir' }}
          >
            indelo
          </Header>
          <Header
            inverted
            as="h3"
            textAlign="center"
            style={{ fontFamily: 'Avenir' }}
          >
            We solve business problems with software
          </Header>
          <Segment
            basic
            textAlign="center"
            style={{ fontSize: '1.33em', margin: 0, padding: 0 }}
          >
            <p style={{ color: 'gray', fontFamily: 'Avenir' }}>
              Website development - UI/UX - Design - Branding - SEO
            </p>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Button color="red" size="huge" style={{ fontFamily: 'Avenir' }}>
            Schedule a chat
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
