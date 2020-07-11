/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Button,
  Grid,
  Segment,
  Form,
  Responsive,
  Header,
  Icon,
} from 'semantic-ui-react';
import { Section } from './section/section';

const ContactForm = () => {
  return (
    <Form size="large">
      <Form.Field>
        <label>Your name</label>
        <input placeholder="John Doe" />
      </Form.Field>
      <Form.Field>
        <label>Your email</label>
        <input placeholder="john@doe.com" />
      </Form.Field>
      <Form.TextArea
        label="Your message"
        placeholder="Let us know how we can help you..."
      />
      <Button fluid color="red" size="large">
        Send message
      </Button>
    </Form>
  );
};

const ContactDetails = () => {
  return (
    <>
      <Header>Address</Header>
      <p>
        <Icon name="map marker alternate" />
        Claremont, Cape Town, South Africa
      </p>
      <Header>Email</Header>
      <p>
        <Icon name="mail" />
        hello@indelo.co.za
      </p>
    </>
  );
};

export const Contact = () => {
  return (
    <>
      <div id="contact" style={{ position: 'relative', top: '-54px' }} />
      <Section title="Contact us">
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Grid columns={2} centered>
            <Grid.Column computer={8}>
              <Segment padded size="huge">
                <ContactForm />
              </Segment>
            </Grid.Column>
            <Grid.Column computer={8}>
              <Segment padded basic>
                <ContactDetails />
              </Segment>
            </Grid.Column>
          </Grid>
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <Grid columns={1}>
            <Grid.Column>
              <Grid.Row>
                <Segment padded basic textAlign="center">
                  <ContactDetails />
                </Segment>
              </Grid.Row>
            </Grid.Column>
          </Grid>
          <Grid columns={1}>
            <Grid.Column>
              <Grid.Row>
                <Segment padded>
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
