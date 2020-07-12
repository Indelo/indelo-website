import React from 'react';
import { Header, Grid, Segment, Responsive } from 'semantic-ui-react';
import WebDevelopmentSvg from '../assets/svgs/web-development.svg';
import DesignAndBrandingSvg from '../assets/svgs/design-and-branding.svg';
import OngoingSupportSvg from '../assets/svgs/ongoing-support.svg';
import { Section } from './section/section';

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
    image: <WebDevelopmentSvg style={{ width: 300, height: 300 }} />,
  },
  {
    title: 'Design and branding',
    body: (
      <div>
        Our design and branding offering ranges from individual logo and brochure
        designs, to full corporate image packs including business cards, email
        signatures and more.
      </div>
    ),
    image: <DesignAndBrandingSvg style={{ width: 300, height: 300 }} />,
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
    image: <OngoingSupportSvg style={{ width: 300, height: 300 }} />,
  },
];

export const Services = () => {
  return (
    <Section title="Our services">
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Grid columns={2} verticalAlign="middle">
          {services.map(({ title, body, image }, index) => (
            <Grid.Row>
              <Grid.Column>
                <Segment basic>
                  {index % 2 === 0 ? (
                    <>
                      <Header style={{ fontWeight: 600 }} as="h3">
                        {title}
                      </Header>
                      <p style={{ fontSize: '1.33em' }}>{body}</p>
                    </>
                  ) : (
                    <Segment basic textAlign="center">
                      {image}
                    </Segment>
                  )}
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic>
                  {index % 2 === 1 ? (
                    <>
                      <Header style={{ fontWeight: 600 }} as="h3">
                        {title}
                      </Header>
                      <p style={{ fontSize: '1.33em' }}>{body}</p>
                    </>
                  ) : (
                    <Segment basic textAlign="center">
                      {image}
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
                <div style={{ paddingBottom: '20px' }}>
                  <Grid.Row>
                    <Header style={{ fontWeight: 600 }} as="h3">
                      {title}
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>{body}</p>
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
