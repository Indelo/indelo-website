import React from 'react';
import { Image, Responsive } from 'semantic-ui-react';
import { Section } from './section/section';
import Indelo from '../assets/images/indelo.png';
import LightWave from '../assets/svgs/lighter-wave.svg';

export const Motivation = () => {
  const aboutUsBody =
    'We are a team of passionate and driven developers, designers and UI/UX professionals with a variety of industry experience. We love building things and creating beautiful products that work well. We focus on the details to ensure our products are user friendly, unique and exactly what you ask for. We thrive to empower businesses through technology!';

  return (
    <div style={{ position: 'relative' }}>
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
      <Section title="Why choose us?">
        <p
          style={{
            fontSize: '1.6em',
            lineHeight: '1.6em',
            textAlign: 'center',
          }}
        >
          {aboutUsBody}
        </p>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Image src={Indelo} style={{ width: '65%', margin: 'auto' }} />
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <Image src={Indelo} style={{ width: '100%', margin: 'auto' }} />
        </Responsive>
      </Section>
    </div>
  );
};
