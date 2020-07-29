import React from 'react';
import _ from 'lodash';
import { Grid, Header, GridColumn, Image, Responsive } from 'semantic-ui-react';
import { Section } from '../section/section';
import { team, aboutUsBody } from './copy';
import Blob from '../../assets/svgs/blob-4.svg';
import css from './about-us.module.css';

export const AboutUs = () => {
  const sectionBody = (className: string) => (
    <p className={className}>{aboutUsBody}</p>
  );

  const cardImage = (src: any) => (
    <Image src={src} size="small" className={css.image} circular />
  );
  const cardTitle = (name: string) => <Header as="h3">{name}</Header>;

  return (
    <Section title="About the team">
      <Responsive {...Responsive.onlyMobile}>
        <Grid centered columns={1} style={{ marginBottom: 30 }}>
          <Grid.Column>{sectionBody(css.mobileBody)}</Grid.Column>
        </Grid>
        <Grid>
          {team.map((person) => (
            <Grid.Row className={css.mobileRow}>
              <Grid.Column className={css.card}>
                {cardImage(person.image)}
                {cardTitle(person.name)}
                <p className={css.cardBody}>{person.body}</p>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      </Responsive>

      <Responsive minWidth={767} maxWidth={1025}>
        <Grid centered columns={1} style={{ marginBottom: 30 }}>
          <Grid.Column>{sectionBody(css.tabletBody)}</Grid.Column>
        </Grid>
        <Grid>
          {_.chunk(team, 2).map((row: any) => (
            <Grid.Row className={css.tabletRow}>
              {row.map((person: any) => (
                <div data-aos="zoom-in">
                  <Grid.Column className={css.card}>
                    {cardImage(person.image)}
                    {cardTitle(person.name)}
                    <p className={css.cardBody}>{person.body}</p>
                  </Grid.Column>
                </div>
              ))}
            </Grid.Row>
          ))}
        </Grid>
      </Responsive>

      <Responsive minWidth={1026}>
        <Grid centered columns={1} style={{ marginBottom: 50 }}>
          <Grid.Column width={12}>{sectionBody(css.desktopBody)}</Grid.Column>
        </Grid>
        <Grid style={{ padding: 0 }}>
          <Blob
            style={{
              position: 'absolute',
              height: 1500,
              right: 100,
              top: 4100,
            }}
          />

          <Grid.Row className={css.desktopRow}>
            {team.map((person) => (
              <div data-aos="zoom-in">
                <GridColumn className={css.card} width={4}>
                  {cardImage(person.image)}
                  {cardTitle(person.name)}
                  <p className={css.cardBody}>{person.body}</p>
                </GridColumn>
              </div>
            ))}
          </Grid.Row>
        </Grid>
      </Responsive>
    </Section>
  );
};
