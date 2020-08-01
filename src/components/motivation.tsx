import React from 'react';
import { Image } from 'semantic-ui-react';

import { Section } from './section/section';

import Indelo from '../assets/images/indelo.png';
import LightWave from '../../assets/svgs/light-wave.svg';

export const Motivation = () => {
  const aboutUsBody =
    'We are a team of passionate and driven developers, designers and UI/UX professionals with a variety of industry experience. We love building things and creating beautiful products that work well. We focus on the details to ensure our products are user friendly, unique and exactly what you ask for. We thrive to empower businesses through technology!';

  return (
    <Section title="Why choose us?">
      <p
        style={{ fontSize: '1.6em', lineHeight: '1.6em', textAlign: 'center' }}
      >
        {aboutUsBody}
      </p>
      <Image src={Indelo} style={{ width: '60%', margin: 'auto' }} />
    </Section>
  );
};
