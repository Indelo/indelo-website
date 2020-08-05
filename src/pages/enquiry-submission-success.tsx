import React from 'react';
import { Container, Button, Header } from 'semantic-ui-react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import { Helmet } from 'react-helmet';
import { SEO } from '../components/seo';
import { Layout } from '../components/layout';
import { Navigation } from '../components/navigation/navigation';

import favicon from '../assets/images/favicon.png';

import css from './enquiry-submission-success.module.css';

const EnquirySubmissionSuccessIndex = () => (
  <>
    <SEO />
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <Navigation>
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
    </Navigation>
  </>
);

export default EnquirySubmissionSuccessIndex;
