import React from 'react';
import { Button, Grid, Segment, Form } from 'semantic-ui-react';
import { Section } from './section';

export const ContactForm = () => {
  return (
    <div id="contact">
      <Section title="Contact us">
        <Grid columns={1} centered>
          <Grid.Column width={8}>
            <Segment>
              <Form size="large" style={{ padding: 20 }}>
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
  );
};
