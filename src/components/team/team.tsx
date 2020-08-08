import React from 'react';
import {
  Grid,
  GridColumn,
  Responsive,
  Segment,
  Header,
  Image,
} from 'semantic-ui-react';
import { chunk } from 'lodash';
import { Section } from '../section/section';
import { team } from './copy';

export const Team = () => {
  return (
    <Section title="Indelo's founders">
      <Responsive {...Responsive.onlyMobile}>
        <Grid centered columns={1}>
          {team.map((person) => (
            <Grid.Row key={person.name + person.body} textAlign="center">
              <Grid.Column textAlign="center" width={9}>
                <Segment padded textAlign="center">
                  <Image
                    bordered
                    centered
                    circular
                    src={person.image}
                    size="small"
                  />
                  <Header as="h3">{person.name}</Header>
                  <p style={{ fontSize: '1.3em' }}>{person.body}</p>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      </Responsive>

      <Responsive {...Responsive.onlyTablet}>
        <Grid stackable centered columns={2}>
          {chunk(team, 2).map((people) => {
            return (
              <Grid.Row>
                {people.map((person) => (
                  <GridColumn width={8} key={person.name + person.body}>
                    <div data-aos="zoom-in">
                      <Segment padded textAlign="center">
                        <Image
                          bordered
                          centered
                          circular
                          src={person.image}
                          size="small"
                        />
                        <Header as="h3">{person.name}</Header>
                        <p style={{ fontSize: '1.3em' }}>{person.body}</p>
                      </Segment>
                    </div>
                  </GridColumn>
                ))}
              </Grid.Row>
            );
          })}
        </Grid>
      </Responsive>

      <Responsive minWidth={Responsive.onlyComputer.minWidth}>
        <Grid stackable columns={4}>
          <Grid.Row>
            {team.map((person) => (
              <GridColumn key={person.name + person.body}>
                <div data-aos="zoom-in">
                  <Segment
                    padded
                    textAlign="center"
                    style={{ minHeight: 420, height: '40%' }}
                  >
                    <Image
                      bordered
                      centered
                      circular
                      src={person.image}
                      size="small"
                    />
                    <Header as="h3">{person.name}</Header>
                    <p style={{ fontSize: '1.3em' }}>{person.body}</p>
                  </Segment>
                </div>
              </GridColumn>
            ))}
          </Grid.Row>
        </Grid>
      </Responsive>
    </Section>
  );
};
