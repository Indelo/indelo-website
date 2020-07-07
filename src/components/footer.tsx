import React from 'react';
import {
  Container,
  Header,
  Button,
  Grid,
  Segment,
  List,
} from 'semantic-ui-react';

export const Footer = () => {
  return (
    <Segment basic inverted style={{ paddingTop: '3em', paddingBottom: '3em' }}>
      <Container>
        <Grid inverted divided>
          <Grid.Row>
            <Grid.Column width="3">
              <Header inverted as="h4">
                About
              </Header>
            </Grid.Column>
            <Grid.Column width="3">
              <Header inverted as="h4">
                Services
              </Header>
              <List>
                {[
                  { title: 'Website development' },
                  { title: 'UI/UX' },
                  { title: 'Branding' },
                  { title: 'Design' },
                ].map(({ title }) => (
                  <List.Item as="a" key={title}>
                    {title}
                  </List.Item>
                ))}
              </List>
            </Grid.Column>
            <Grid.Column
              width="6"
              floated="right"
              style={{
                boxShadow: 'none',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
              }}
            >
              <Button circular color="facebook" icon="facebook" />
              <Button circular color="twitter" icon="twitter" />
              <Button circular color="linkedin" icon="linkedin" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};
