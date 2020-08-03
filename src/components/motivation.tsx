import React from 'react';
import { Image, Responsive, Grid } from 'semantic-ui-react';
import { Section } from './section/section';
import Indelo from '../assets/images/indelo.png';
import LightWave from '../assets/svgs/lighter-wave.svg';

export const Motivation = () => {
  const aboutUsBody =
    'We are a team of passionate and driven developers, designers and UI/UX professionals with a variety of industry experience. We love building things and creating beautiful products that work well. We focus on the details to ensure our products are user friendly, unique and exactly what you ask for. We thrive to empower businesses through technology!';

  return (
    <div style={{ position: 'relative' }}>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <LightWave
          width="100%"
          preserveAspectRatio="none"
          style={{
            height: 'calc(100% + 160px)',
            position: 'absolute',
            top: -110,
            zIndex: -1,
          }}
        />
      </Responsive>
      <Section title="Why choose us?">
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Grid columns={1} centered style={{ paddingBottom: '30px' }}>
            <Grid.Column width={12}>
              <p
                style={{
                  fontSize: '1.6em',
                  lineHeight: '1.6em',
                  textAlign: 'center',
                }}
              >
                {aboutUsBody}
              </p>
            </Grid.Column>
          </Grid>
          <Image src={Indelo} style={{ width: '60%', margin: 'auto' }} />
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <p
            style={{
              fontSize: '1.3em',
              lineHeight: '1.6em',
              textAlign: 'center',
            }}
          >
            {aboutUsBody}
          </p>
          <Image src={Indelo} style={{ width: '100%', margin: 'auto' }} />
        </Responsive>
      </Section>
    </div>
  );
};
