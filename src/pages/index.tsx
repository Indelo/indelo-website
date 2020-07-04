import React from 'react';
import { PageProps } from 'gatsby';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
import {
  Container,
  Header,
  Button,
  Grid,
  Item,
  Segment,
  Form,
  List,
} from 'semantic-ui-react';
import WebDeveloperSvg from '../assets/web_developer.svg';
import ConsultingSvg from '../assets/consulting.svg';
import CollaboratingSvg from '../assets/collaborators.svg';
import { Navigation } from '../components/navigation';

const Section = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <Container style={{ paddingTop: '20px', paddingBottom: '70px' }}>
      <Header as="h2" textAlign="center">
        {title}
      </Header>
      <div style={{ paddingTop: '40px' }}>{children}</div>
    </Container>
  );
};

const RootIndex = (props: PageProps) => {
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Indelo | Development agency</title>
        <link rel="canonical" href="https://indelo.co.za" />
      </Helmet>
      <Container fluid>
        <Navigation />
        <Container
          fluid
          style={{
            paddingTop: '200px',
            height: 'calc(100vh - 46px)',
          }}
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
                <Segment
                  basic
                  textAlign="center"
                  style={{ fontSize: '1.33em' }}
                >
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
        <Section title="Our services">
          <Grid columns={2}>
            {[
              {
                title: 'Website development',
                body:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
                image: <WebDeveloperSvg style={{ width: 300, height: 300 }} />,
              },
              {
                title: 'Consulting',
                body:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                image: <ConsultingSvg style={{ width: 300, height: 300 }} />,
              },
              {
                title: 'Maintenance & support',
                body:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                image: <CollaboratingSvg style={{ width: 300, height: 300 }} />,
              },
            ].map((service, index) => (
              <Grid.Row>
                <Grid.Column>
                  <Segment basic>
                    {index % 2 === 0 ? (
                      <div>
                        <Header as="h3">{service.title}</Header>
                        <p style={{ fontSize: '1.33em' }}>{service.body}</p>
                      </div>
                    ) : (
                      service.image
                    )}
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment basic>
                    {index % 2 === 1 ? (
                      <div>
                        <Header as="h3">{service.title}</Header>
                        <p style={{ fontSize: '1.33em' }}>{service.body}</p>
                      </div>
                    ) : (
                      service.image
                    )}
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            ))}
          </Grid>
        </Section>
        <Section title="Who we are">
          <Grid centered columns={1}>
            <Grid.Column width={9}>
              <p style={{ fontSize: '1.33em' }}>
                We are a passionate, world-class bunch of developers, engineers,
                designers and UI/UX exports.
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
        <div id="contact">
          <Section title="Contact us">
            <Grid columns={1} centered>
              <Grid.Column width={8}>
                <Segment>
                  <Form size="large">
                    <Form.Field>
                      <label>Your name</label>
                      <input />
                    </Form.Field>
                    <Form.Field>
                      <label>Your email</label>
                      <input />
                    </Form.Field>
                    <Form.TextArea
                      label="About"
                      placeholder="Tell us more about you..."
                    />
                    <Button primary fluid size="large">
                      Send message
                    </Button>
                  </Form>
                </Segment>
              </Grid.Column>
            </Grid>
          </Section>
        </div>
        <Container fluid>
          <Segment
            basic
            inverted
            style={{ paddingTop: '3em', paddingBottom: '3em' }}
          >
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
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </Container>
      </Container>
    </>
  );
};

export default RootIndex;
