import React from 'react';
import {
  Grid,
  Segment,
  Responsive,
  Header,
  Icon,
  Image,
} from 'semantic-ui-react';
import { Section } from './section/section';
import { ContactForm } from './contact-form';
import location from '../assets/images/location.png';

const contactInfo = [
  {
    title: 'Email',
    body: 'hello@indelo.co.za',
    icon: 'mail',
  },
  {
    title: 'Location',
    body: 'Cape Town, South Africa',
    icon: 'map marker alternate',
  },
];

const ContactDetails = () => {
  return (
    <div style={{ textAlign: 'start' }}>
      {contactInfo.map(({ title, body, icon }) => (
        <div key={title} style={{ paddingBottom: '25px' }}>
          <Header as="h3">{title}</Header>
          <p style={{ fontSize: '1.3em' }}>
            <Icon name={icon as any} style={{ marginRight: 10 }} />
            {body}
          </p>
        </div>
      ))}
    </div>
  );
};

export const ContactUs = () => {
  return (
    <>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <div id="contact" style={{ position: 'relative', top: '-90px' }} />
      </Responsive>
      <Responsive {...Responsive.onlyMobile}>
        <div id="contact" style={{ position: 'relative', top: '-10px' }} />
      </Responsive>
      <Section title="Contact us">
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Grid columns={1} centered>
            <Grid.Column width={12}>
              <Segment basic>
                <p style={{ fontSize: '1.6em' }}>
                  We&apos;d love to help you turn your great idea into a product
                  your customers will love.
                </p>
              </Segment>
            </Grid.Column>
          </Grid>
          <Grid columns={2} centered style={{ marginBottom: 50 }}>
            <Grid.Column computer={9} tablet={9}>
              <Segment padded size="huge">
                <ContactForm />
              </Segment>
            </Grid.Column>
            <Grid.Column computer={6} tablet={6}>
              <Segment padded basic>
                <ContactDetails />
                <Image src={location} style={{ paddingTop: 20, width: 300 }} />
              </Segment>
            </Grid.Column>
          </Grid>
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <Grid columns={1}>
            <Grid.Column>
              <Grid.Row>
                <Segment padded basic>
                  <ContactDetails />
                </Segment>
              </Grid.Row>
            </Grid.Column>
          </Grid>
          <Grid columns={1}>
            <Grid.Column>
              <Grid.Row>
                <Segment>
                  <ContactForm />
                </Segment>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Responsive>
      </Section>
    </>
  );
};
