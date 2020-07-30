import React from 'react';
import {
  Container,
  Header,
  Button,
  Grid,
  Segment,
  List,
  Image,
  Responsive,
} from 'semantic-ui-react';
import Logo from '../assets/images/small-logo.png';

export const Footer = () => {
  return (
    <Segment
      basic
      style={{
        backgroundColor: '#041738',
        paddingTop: '3em',
        paddingBottom: '3em',
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}
    >
      <Container>
        <Grid divided>
          <Grid.Row>
            <Grid.Column width="5">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={Logo} style={{ width: 80 }} />
                <Header
                  inverted
                  as="h4"
                  style={{ margin: 0, textAlign: 'left', fontSize: 50 }}
                >
                  Indelo
                </Header>
              </div>
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
                  <List.Item style={{ color: '#dedede' }} key={title}>
                    {title}
                  </List.Item>
                ))}
              </List>
            </Grid.Column>
            <Grid.Column width="3">
              <Header inverted as="h4">
                Contact
              </Header>
              <List>
                {[
                  { title: 'hello@indelo.co.za' },
                  { title: '+27 83 447 5256' },
                ].map(({ title }) => (
                  <List.Item style={{ color: '#dedede' }} key={title}>
                    {title}
                  </List.Item>
                ))}
              </List>
            </Grid.Column>
            <Grid.Column width="4" floated="right">
              <Button circular color="facebook" icon="facebook" />

              <Button
                as={(props: any) => (
                  <a href="https://twitter.com/Indelo4" {...props} />
                )}
                circular
                color="twitter"
                icon="twitter"
              />

              <Button circular color="linkedin" icon="linkedin" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};
