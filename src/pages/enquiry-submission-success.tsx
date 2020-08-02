import React from 'react';
import { Container, Button, Header } from 'semantic-ui-react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import { SEO } from '../components/seo';
import { Layout } from '../components/layout';

import css from './enquiry-submission-success.module.css';

const EnquirySubmissionSuccessIndex = () => (
  <>
    <SEO />
    <Layout>
      <Container style={{ marginTop: 150 }}>
        <Header as="h2">Thank you for your enquiry!</Header>
        <p>
          We&apos;ll have a look and get back to you within the next few hours.
        </p>
        <Button
          primary
          as={(props: any) => (
            <AnchorLink
              className={css.linkButton}
              {...props}
              to="/"
              title="Back home"
            />
          )}
        >
          <AnchorLink className={css.linkButton} to="/" title="Back home" />
        </Button>
      </Container>
    </Layout>
  </>
);

export default EnquirySubmissionSuccessIndex;
