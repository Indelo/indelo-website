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
  children: JSX.Element;
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
      <Helmet title={siteTitle} />
      <Container fluid>
        <Navigation />
        <Container
          fluid
          style={{
            paddingTop: '200px',
            height: 'calc(100vh - 50px)',
          }}
        >
          <Grid columns={1}>
            <Grid.Row>
              <Grid.Column>
                <Header as="h1" textAlign="center">
                  An agency
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
        <Section title="Contact us">
          <Grid columns={1} centered>
            <Grid.Column width={8}>
              <Segment>
                <Form>
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
                  <Button primary fluid>
                    Send message
                  </Button>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid>
        </Section>
        <Container fluid>
          <Segment
            basic
            inverted
            style={{ paddingTop: '3em', paddingBottom: '3em' }}
          >
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
          </Segment>
        </Container>
      </Container>
    </>
  );
};

export default RootIndex;
