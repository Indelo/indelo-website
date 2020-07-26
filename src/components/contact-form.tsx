/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import {
  Button,
  Grid,
  Segment,
  Form,
  Responsive,
  Header,
  Icon,
  Input,
} from 'semantic-ui-react';
import { Section } from './section/section';

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  const [firstName, setFirstName] = useState<string | undefined>(undefined);
  const [lastName, setLastName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [company, setCompany] = useState<string | undefined>(undefined);
  const [website, setWebsite] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState<string | undefined>(undefined);

  const submit = () => {
    setIsLoading(true);
    setHasBeenSubmitted(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('submitted');
    }, 500);
  };

  const getError = (value?: string) => {
    const result =
      hasBeenSubmitted && (!value || value === '')
        ? { content: 'Required' }
        : undefined;
    return result;
  };

  return (
    <>
      <Header as="h3">Send us a message</Header>
      <Form size="large" loading={isLoading}>
        <Form.Field
          required
          label="First name"
          control={Input}
          value={firstName}
          error={getError(firstName)}
          onChange={(e: any) => setFirstName(e.target.value)}
        />
        <Form.Field
          required
          label="Last name"
          control={Input}
          value={lastName}
          error={getError(lastName)}
          onChange={(e: any) => setLastName(e.target.value)}
        />
        <Form.Field
          required
          label="Email"
          control={Input}
          value={email}
          error={getError(email)}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Form.Field
          label="Company"
          control={Input}
          value={company}
          onChange={(e: any) => setCompany(e.target.value)}
        />
        <Form.Field
          label="Website"
          control={Input}
          value={website}
          onChange={(e: any) => setWebsite(e.target.value)}
        />
        <Form.TextArea
          required
          label="Your message"
          placeholder="Let us know how we can help you..."
          value={message}
          error={getError(message)}
          onChange={(e: any) => setMessage(e.target.value)}
        />
        <Button primary size="large" onClick={submit}>
          Send message
        </Button>
      </Form>
    </>
  );
};

const ContactDetails = () => {
  return (
    <div style={{ textAlign: 'start' }}>
      <Header as="h3">Email</Header>
      <p style={{ fontSize: '1.33em' }}>
        <Icon name="mail" />
        hello@indelo.co.za
      </p>
      <Header as="h3">Address</Header>
      <p style={{ fontSize: '1.33em' }}>
        <Icon name="map marker alternate" />
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
            <Grid.Column computer={7} tablet={8}>
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
            <Grid.Column computer={7} tablet={8}>
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
