/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { Button, Form, Header, Input, Message } from 'semantic-ui-react';
import axios from 'axios';
import dotenv from 'dotenv';
import { getInputError, getEmailError } from '../utils/form-validation';

dotenv.config();

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  const [firstName, setFirstName] = useState<string | undefined>(undefined);
  const [lastName, setLastName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [company, setCompany] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState<string | undefined>(undefined);

  const indeloApiUrl = process.env.INDELO_WEBSITE_API_URL;
  if (!indeloApiUrl) {
    '';
  }

  const submit = async () => {
    const body = {
      firstName,
      lastName,
      email,
      company,
      message,
    };

    setHasBeenSubmitted(true);

    const canSubmit = firstName && lastName && email && message;

    if (canSubmit) {
      try {
        setIsLoading(true);
        await axios.post(indeloApiUrl, body);
        await navigate('/enquiry-submission-success');
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setIsLoading(false);
        setHasError(true);
      }
    }
  };

  return (
    <>
      <Header as="h3">Send us a message</Header>
      {hasError && (
        <Message
          error
          header="An error occurred"
          content="Something went wrong on our side. Please submit your request again :)"
        />
      )}
      <Form size="large" loading={isLoading}>
        <Form.Field
          required
          label="First name"
          control={Input}
          value={firstName}
          error={getInputError({ hasBeenSubmitted, value: firstName })}
          onChange={(e: any) => setFirstName(e.target.value)}
        />
        <Form.Field
          required
          label="Last name"
          control={Input}
          value={lastName}
          error={getInputError({ hasBeenSubmitted, value: lastName })}
          onChange={(e: any) => setLastName(e.target.value)}
        />
        <Form.Field
          required
          label="Email"
          control={Input}
          value={email}
          error={getEmailError({ hasBeenSubmitted, email })}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Form.Field
          label="Company"
          control={Input}
          value={company}
          onChange={(e: any) => setCompany(e.target.value)}
        />
        <Form.TextArea
          required
          label="Your message"
          placeholder="Let us know how we can help you..."
          value={message}
          error={getInputError({ hasBeenSubmitted, value: message })}
          onChange={(e: any) => setMessage(e.target.value)}
        />
        <Button primary size="large" onClick={submit}>
          Send message
        </Button>
      </Form>
    </>
  );
};
