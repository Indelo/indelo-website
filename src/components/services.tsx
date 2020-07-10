import React from 'react';
import { Header, Grid, Segment, Card } from 'semantic-ui-react';
import WebDeveloperSvg from '../assets/svgs/web_developer.svg';
import ConsultingSvg from '../assets/svgs/consulting.svg';
import CollaboratingSvg from '../assets/svgs/collaborators.svg';
import { Section } from './section/section';

export const Services = () => {
  return (
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
                  <Card
                    fluid
                    color="blue"
                    style={{
                      boxShadow: '0px 2px 0px 0px #2185D0',
                      padding: 18,
                    }}
                  >
                    <Header as="h3">{service.title}</Header>
                    <p style={{ fontSize: '1.33em' }}>{service.body}</p>
                  </Card>
                ) : (
                  service.image
                )}
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment basic>
                {index % 2 === 1 ? (
                  <Card
                    fluid
                    color="blue"
                    style={{
                      boxShadow: '0px 2px 0px 0px #2185D0',
                      padding: 18,
                    }}
                  >
                    <Header as="h3">{service.title}</Header>
                    <p style={{ fontSize: '1.33em' }}>{service.body}</p>
                  </Card>
                ) : (
                  service.image
                )}
              </Segment>
            </Grid.Column>
          </Grid.Row>
        ))}
      </Grid>
    </Section>
  );
};
