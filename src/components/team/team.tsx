import React from 'react';
import { Grid, Image, Responsive } from 'semantic-ui-react';
import { Section } from '../section/section';
import Indelo from '../../assets/images/indelo4.png';
import css from './team.module.css';
import SS from '../../assets/svgs/b1.svg';

export const Team = () => {
  const aboutUsBody =
    'We are a team of passionate and driven developers, designers and UI/UX professionals with a variety of industry experience. We love building things and creating beautiful products that work well. We focus on the details to ensure our products are user friendly, unique and exactly what you ask for. We thrive to empower businesses through technology!';

  const sectionBody = (className: string) => (
    <p className={className}>{aboutUsBody}</p>
  );

  return (
    <Section title="Why choose us?">
      <Responsive {...Responsive.onlyMobile}>
        <Grid centered columns={1} style={{ marginBottom: 30 }}>
          <Grid.Column>{sectionBody(css.mobileBody)}</Grid.Column>
        </Grid>
      </Responsive>

      <Responsive minWidth={767} maxWidth={1025}>
        <Grid centered columns={1} style={{ marginBottom: 30 }}>
          <Grid.Column>{sectionBody(css.tabletBody)}</Grid.Column>
        </Grid>
      </Responsive>

      <Responsive minWidth={1026}>
        <Grid centered columns={1} style={{ marginBottom: 50 }}>
          <Grid.Column width={12}>{sectionBody(css.desktopBody)}</Grid.Column>
          <SS
            width="100%"
            preserveAspectRatio="none"
            style={{
              height: 1100,
              position: 'absolute',
              zIndex: -1,
              right: -1,
              top: 3600,
            }}
          />
          <Image src={Indelo} style={{ width: '60%', paddingTop: 30 }} />
        </Grid>
      </Responsive>
    </Section>
  );
};
