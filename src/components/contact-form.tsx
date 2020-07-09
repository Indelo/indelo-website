/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Button, Grid, Segment, Form } from 'semantic-ui-react';
import { Section } from './section/section';

export const ContactForm = () => {
  return (
    <>
      <div id="contact" style={{ position: 'relative', top: '-54px' }} />
      <Section title="Contact us">
        <Grid columns={1} centered>
          <Grid.Column computer={8} tablet={10} mobile={16}>
            <Segment size="huge">
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
    </>
  );
};
