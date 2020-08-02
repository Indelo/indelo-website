import React from 'react';
import { Responsive, Grid } from 'semantic-ui-react';
import { Section } from './section/section';

export const Mission = () => {
  const missionBody =
    'Our mission is to enable businesses and entrepreneurs to thrive by delivering world-class products that embody the ideas and visions that brought those products to be. Our team specialises in the full range of skills required to take your product from inception to launch.';

  return (
    <Section title="Our Mission">
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Grid columns={1} centered>
          <Grid.Column width={12}>
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
          </Grid.Column>
        </Grid>
      </Responsive>
      <Responsive {...Responsive.onlyMobile}>
        <div
          style={{
            fontFamily: 'Avenir',
            fontSize: '1.3em',
            textAlign: 'center',
            lineHeight: '1.6em',
          }}
        >
          {missionBody}
        </div>
      </Responsive>
    </Section>
  );
};
