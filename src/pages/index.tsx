import React from 'react';
import { PageProps } from 'gatsby';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
import { Container, Header, Button, Grid, Item } from 'semantic-ui-react';

const Section = ({ children }: { children: any }) => {
  return (
    <Container fluid style={{ paddingTop: '20px', paddingBottom: '70px' }}>
      {children}
    </Container>
  );
};

const RootIndex = (props: PageProps) => {
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  return (
    <>
      <Helmet title={siteTitle} />
      <Container fluid>
        <Container
          fluid
          style={{
            paddingTop: '200px',
            height: '600px',
          }}
        >
          <Grid columns={1}>
            <Grid.Row>
              <Grid.Column>
                <Header as="h1" textAlign="center">
                  An agency
                  <Header.Subheader>
                    We solve business problems with software.
                  </Header.Subheader>
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button primary>Schedule a chat</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Section>
          <Container>
            <Header as="h2">Our services</Header>
            <Grid columns={2}>
              {[
                { title: 'Website development' },
                { title: 'Consulting' },
                { title: 'Maintenance & support' },
              ].map((service) => (
                <Grid.Row>
                  <Grid.Column>
                    <Header as="h3">{service.title}</Header>
                  </Grid.Column>
                  <Grid.Column>
                    <Header as="h3">{service.title}</Header>
                  </Grid.Column>
                </Grid.Row>
              ))}
            </Grid>
          </Container>
        </Section>
        <Section>
          <Container>
            <Header as="h2">Who we are</Header>
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
                    <Item.Description>
                      This person is super cool
                    </Item.Description>
                  </Item.Content>
                </Item>
              ))}
            </Item.Group>
          </Container>
        </Section>
      </Container>
    </>
  );
};

export default RootIndex;
