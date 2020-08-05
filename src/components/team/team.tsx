import React from 'react';
import { Grid, Header, GridColumn, Image, Responsive } from 'semantic-ui-react';
import _ from 'lodash';

import { Section } from '../section/section';
import { team } from './copy';

import css from './team.module.css';

export const Team = () => {
  const cardImage = (src: any) => (
    <Image src={src} size="small" className={css.image} circular />
  );
  const cardTitle = (name: string) => <Header as="h3">{name}</Header>;

  return (
    <Section title="Indelo's founders">
      <Responsive {...Responsive.onlyMobile}>
        <Grid>
          {team.map((person) => (
            <Grid.Row key={person.name + person.body} className={css.mobileRow}>
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
        <Grid>
          {_.chunk(team, 2).map((row) => (
            <Grid.Row
              key={JSON.stringify(row.map(({ name }) => name))}
              className={css.tabletRow}
            >
              {row.map((person) => (
                <div key={person.name + person.body} data-aos="zoom-in">
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
        <Grid style={{ padding: 0 }}>
          <Grid.Row className={css.desktopRow}>
            {team.map((person) => (
              <div key={person.name + person.body} data-aos="zoom-in">
                <GridColumn className={css.card} width={4}>
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {cardImage(person.image)}
                  </div>

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
