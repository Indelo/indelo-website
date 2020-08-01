import React from 'react';
import { Header, Grid, Segment, Responsive, Image } from 'semantic-ui-react';

import { Section } from './section/section';

import WebDevelopmentSvg from '../assets/images/web-development.png';
import DesignAndBrandingSvg from '../assets/images/design-and-branding.png';
import OngoingSupportSvg from '../assets/images/ongoing-support.png';

const services = [
  {
    title: 'Website development',
    body: (
      <div>
        From off the shelf WordPress setups to fully bespoke and customized
        websites using the latest technology and UI/UX principles, our website
        development offering caters for all requirements.
      </div>
    ),
    image: (
      <Image src={WebDevelopmentSvg} style={{ width: 400, margin: 'auto' }} />
    ),
  },
  {
    title: 'Design and branding',
    body: (
      <div>
        Our design and branding offering ranges from individual logo and
        brochure designs, to full corporate image packs including business
        cards, email signatures and more.
      </div>
    ),
    image: (
      <Image
        src={DesignAndBrandingSvg}
        style={{ width: 350, margin: 'auto' }}
      />
    ),
  },
  {
    title: 'Ongoing maintenance and support',
    body: (
      <div>
        We help you keep your online offering fully optimized for your business
        requirements. From security updates and database backups to analytics
        reviews and SEO optimizations.
        <br />
        Our support and maintenance offering has what you need for an optimal
        online experience.
      </div>
    ),
    image: (
      <Image src={OngoingSupportSvg} style={{ width: 400, margin: 'auto' }} />
    ),
  },
];

export const Services = () => {
  return (
    <Section title="Our services">
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Grid columns={2} verticalAlign="middle">
          {services.map(({ title, body, image }, index) => (
            <Grid.Row style={{ padding: 0, paddingBottom: 100 }}>
              <Grid.Column>
                <Segment basic>
                  {index % 2 === 0 ? (
                    <>
                      <Header
                        style={{ fontWeight: 600, fontSize: '3em' }}
                        as="h3"
                      >
                        {title}
                      </Header>
                      <p style={{ fontSize: '1.5em', lineHeight: '1.6em' }}>
                        {body}
                      </p>
                    </>
                  ) : (
                    <Segment basic textAlign="center">
                      <div data-aos="fade-right">{image}</div>
                    </Segment>
                  )}
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic>
                  {index % 2 === 1 ? (
                    <>
                      <Header
                        style={{ fontWeight: 600, fontSize: '3em' }}
                        as="h3"
                      >
                        {title}
                      </Header>
                      <p style={{ fontSize: '1.5em', lineHeight: '1.6em' }}>
                        {body}
                      </p>
                    </>
                  ) : (
                    <Segment basic textAlign="center">
                      <div data-aos="fade-left">{image}</div>
                    </Segment>
                  )}
                </Segment>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      </Responsive>
      <Responsive {...Responsive.onlyMobile}>
        <Grid columns={1} centered>
          <Grid.Column textAlign="center">
            {services.map(({ title, body, image }) => {
              return (
                <div style={{ paddingBottom: '50px' }}>
                  <Grid.Row style={{ paddingBottom: '30px' }}>
                    <Header style={{ fontWeight: 600 }} as="h3">
                      {title}
                    </Header>
                    <p style={{ fontSize: '1.6em', lineHeight: '1.6em' }}>
                      {body}
                    </p>
                  </Grid.Row>
                  <Grid.Row>{image}</Grid.Row>
                </div>
              );
            })}
          </Grid.Column>
        </Grid>
      </Responsive>
    </Section>
  );
};
