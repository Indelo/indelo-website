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
    <>
      <Header as="h3" style={{ color: '#1d3760', fontWeight: 'bold' }}>
        Send us a message
      </Header>

      <Form size="large">
        <Form.Field>
          <label>First name</label>
          <input placeholder="John" />
        </Form.Field>
        <Form.Field>
          <label>Last name</label>
          <input placeholder="Doe" />
        </Form.Field>
        <Form.Field>
          <label>Your email</label>
          <input placeholder="john@doe.com" />
        </Form.Field>
        <Form.Field>
          <label>Company / Website</label>
          <input placeholder="johndoe.com" />
        </Form.Field>
        <Form.TextArea
          label="Your message"
          placeholder="Let us know how we can help you..."
        />
        <Button fluid color="red" size="large">
          Send message
        </Button>
      </Form>
    </>
  );
};

const ContactDetails = () => {
  return (
    <div style={{ textAlign: 'start' }}>
      <Header style={{ color: '#1d3760', fontWeight: 'bold' }}>Email</Header>
      <p>
        <Icon name="mail" color="blue" />
        hello@indelo.co.za
      </p>
      <Header style={{ color: '#1d3760', fontWeight: 'bold' }}>Phone</Header>
      <p>
        <Icon name="phone" color="blue" />
        +27834475256 +27721722298
      </p>
      <Header style={{ color: '#1d3760', fontWeight: 'bold' }}>Address</Header>
      <p>
        <Icon name="map marker alternate" color="blue" />
        Claremont, Cape Town, South Africa
      </p>
    </div>
  );
};

export const Contact = () => {
  return (
    <>
      <div id="contact" style={{ position: 'relative', top: '-90px' }} />
      <Section title="Contact us">
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Grid columns={2} centered>
            <Grid.Column computer={8}>
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
                <Segment
                  padded
                  basic
                  style={{ width: '50%', marginRight: 'auto' }}
                >
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
