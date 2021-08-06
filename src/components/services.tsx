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
      <p>
        From off the shelf WordPress setups to fully bespoke and customized
        websites, using the latest technology and UI/UX principles, our website
        development services cater for all requirements.
      </p>
    ),
    image: (
      <Image src={WebDevelopmentSvg} style={{ width: 250, margin: 'auto' }} />
    ),
  },
  {
    title: 'Design and branding',
    body: (
      <p>
        Our design and branding offering ranges from individual logo and
        brochure designs, to full corporate image packs including business
        cards, email signatures and more.
      </p>
    ),
    image: (
      <Image
        src={DesignAndBrandingSvg}
        style={{ width: 250, margin: 'auto' }}
      />
    ),
  },
  {
    title: 'Ongoing maintenance and support',
    body: (
      <div>
        <p>
          We help you keep your website fully optimized for your business
          requirements. From security updates and database backups to analytics
          reviews and SEO optimizations.
        </p>
        <p>
          Our support and maintenance offering provides all you need to keep
          your online presence operating smoothly.
        </p>
      </div>
    ),
    image: (
      <Image src={OngoingSupportSvg} style={{ width: 250, margin: 'auto' }} />
    ),
  },
];

export const Services = () => {
  return (
    <Section title="Our services">
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Grid columns={2} verticalAlign="middle">
          {services.map(({ title, body, image }, index) => (
            <Grid.Row key={title} style={{ padding: 0, paddingBottom: 50 }}>
              <Grid.Column width={index % 2 === 0 ? 9 : 7}>
                <Segment basic>
                  {index % 2 === 0 ? (
                    <>
                      <Header
                        style={{ fontWeight: 500, fontSize: '2.6em' }}
                        as="h3"
                      >
                        {title}
                      </Header>
                      <div style={{ fontSize: '1.5em', lineHeight: '1.6em' }}>
                        {body}
                      </div>
                    </>
                  ) : (
                    <Segment basic textAlign="center">
                      <div>{image}</div>
                    </Segment>
                  )}
                </Segment>
              </Grid.Column>
              <Grid.Column width={index % 2 === 0 ? 7 : 9}>
                <Segment basic>
                  {index % 2 === 1 ? (
                    <>
                      <Header
                        style={{ fontWeight: 500, fontSize: '2.6em' }}
                        as="h3"
                      >
                        {title}
                      </Header>
                      <div style={{ fontSize: '1.5em', lineHeight: '1.6em' }}>
                        {body}
                      </div>
                    </>
                  ) : (
                    <Segment basic textAlign="center">
                      <div>{image}</div>
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
                <div key={title} style={{ paddingBottom: '50px' }}>
                  <Grid.Row style={{ paddingBottom: '30px' }}>
                    <Header style={{ fontWeight: 500 }} as="h3">
                      {title}
                    </Header>
                    <p style={{ fontSize: '1.3em', lineHeight: '1.6em' }}>
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
