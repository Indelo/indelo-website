import React from 'react';
import { Section } from './section/section';

export const Mission = () => {
  const missionBody =
    'Our mission is to enable businesses and entrepreneurs to thrive by delivering world-class products that embody the ideas and visions that brought those products to be. Our team specialises in the full range of skills required to take your product from inception to launch.';

  return (
    <Section title="Our Mission">
      <div
        style={{
          fontFamily: 'Avenir',
          fontSize: '1.6em',
          textAlign: 'center',
          lineHeight: '1.6em',
        }}
      >
        {missionBody}
      </div>
    </Section>
  );
};
