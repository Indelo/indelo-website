/* eslint-disable jsx-a11y/label-has-associated-control */
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

const ContactDetails = () => {
  return (
    <div style={{ textAlign: 'start' }}>
      <Header as="h3">Email</Header>
      <p style={{ fontSize: '1.33em' }}>
        <Icon
          inverted
          circular
          color="blue"
          name="mail"
          style={{ marginRight: 10 }}
        />
        hello@indelo.co.za
      </p>
      <Header as="h3">Phone</Header>
      <p style={{ fontSize: '1.33em' }}>
        <Icon
          inverted
          circular
          color="blue"
          name="phone"
          style={{ marginRight: 10 }}
        />
        +27 83 447 5256
      </p>
      <Header as="h3">Address</Header>
      <p style={{ fontSize: '1.33em' }}>
        <Icon
          inverted
          circular
          color="blue"
          name="map marker alternate"
          style={{ marginRight: 10 }}
        />
        Claremont, Cape Town, South Africa
      </p>
    </div>
  );
};

export const ContactUs = () => {
  return (
    <>
      <div id="contact" style={{ position: 'relative', top: '-90px' }} />
      <Section title="Contact us">
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Grid columns={2} centered style={{ marginBottom: 50 }}>
            <Grid.Column computer={9} tablet={9}>
              <Segment
                padded
                size="huge"
                style={{
                  boxShadow: '3px 3px 20px rgba(70,101,160,.164)',
                  padding: 30,
                  border: 'none',
                }}
              >
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
                <Segment
                  padded
                  style={{
                    boxShadow: '3px 3px 20px rgba(70,101,160,.164)',
                    border: 'none',
                  }}
                >
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