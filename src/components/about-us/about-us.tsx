import React from 'react';
import _ from 'lodash';
import { Grid, Header, GridColumn, Image, Responsive } from 'semantic-ui-react';
import { Section } from '../section/section';
import Jason from '../../assets/images/jason.jpeg';
import Megan from '../../assets/images/megan.jpeg';
import Nicol from '../../assets/images/nicol.jpeg';
import George from '../../assets/images/george.jpeg';
import css from './about-us.module.css';

export const AboutUs = () => {
  const team = [
    {
      name: 'Megan',
      image: Megan,
      blurb:
        'Front-end developer and professional designer. Holds a degree in Visual Communication and Design (Hons) from Stellenbosch University. Specialises in UI/UX design, React, and Javascript',
    },
    {
      name: 'Jason',
      image: Jason,
      blurb:
        'Full-stack developer with a degree in Engineering from UCT and over 10 years of experience developing software and running businesses',
    },
    {
      name: 'Nicol',
      image: Nicol,
      blurb:
        'Full-stack developer with a degree in Computer Science and Business Computing from UCT. A jack of all trades, with a particular love for React',
    },
    {
      name: 'George',
      image: George,
      blurb:
        'Keeps everyone happy and motivated. George is notorious for lap-cuddles and sleeping on keyboards',
    },
  ];
  return (
    <Section title="About the team" className={css.section}>
      <Responsive {...Responsive.onlyMobile}>
        <Grid centered columns={1} style={{ marginBottom: 30 }}>
          <Grid.Column>
            <p
              style={{
                fontFamily: 'Avenir',
                fontSize: '1.2em',
                textAlign: 'center',
              }}
            >
              We are a team of passionate and driven developers, designers and
              UI/UX professionals with a variety of industry experience. We love
              building things and creating beautiful products that work well. We
              focus on the details to ensure our products are user friendly,
              unique and exactly what you ask for. We thrive to empower
              businesses through technology!
            </p>
          </Grid.Column>
        </Grid>
        <Grid>
          {team.map((person) => (
            <Grid.Row>
              <Grid.Column
                style={{
                  display: 'flex',
                  textAlign: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <Image src={person.image} size="small" circular />
                <Header as="h3" style={{ fontFamily: 'Avenir' }}>
                  {person.name}
                </Header>
                <p style={{ fontFamily: 'Avenir', fontSize: 14 }}>
                  {person.blurb}
                </p>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      </Responsive>

      <Responsive minWidth={Responsive.onlyMobile.minWidth} maxWidth={1550}>
        <Grid centered columns={1} style={{ marginBottom: 30 }}>
          <Grid.Column>
            <p
              style={{
                fontFamily: 'Avenir',
                fontSize: '1.2em',
                textAlign: 'center',
                width: '70%',
                margin: 'auto',
              }}
            >
              We are a team of passionate and driven developers, designers and
              UI/UX professionals with a variety of industry experience. We love
              building things and creating beautiful products that work well. We
              focus on the details to ensure our products are user friendly,
              unique and exactly what you ask for. We thrive to empower
              businesses through technology!
            </p>
          </Grid.Column>
        </Grid>
        <Grid>
          {_.chunk(team, 2).map((row: any) => (
            <Grid.Row style={{ justifyContent: 'center', padding: 10 }}>
              {row.map((person: any) => (
                <div data-aos="zoom-in">
                  <Grid.Column
                    style={{
                      width: '25em',
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column',
                      padding: 20,
                      textAlign: 'center',
                      boxShadow: '3px 3px 20px rgba(70,101,160,.164)',
                      transition: '.3s ease-in-out',
                      height: '25em',
                      margin: 10,
                    }}
                  >
                    <Image src={person.image} size="tiny" circular />
                    <Header as="h3" style={{ fontFamily: 'Avenir' }}>
                      {person.name}
                    </Header>
                    <p style={{ fontFamily: 'Avenir', fontSize: 14 }}>
                      {person.blurb}
                    </p>
                  </Grid.Column>
                </div>
              ))}
            </Grid.Row>
          ))}
        </Grid>
      </Responsive>

      <Responsive minWidth={1551}>
        <Grid centered columns={1} style={{ marginBottom: 50 }}>
          <Grid.Column width={12}>
            <p
              style={{
                fontFamily: 'Avenir',
                fontSize: '1.5em',
                textAlign: 'center',
              }}
            >
              We are a team of passionate and driven developers, designers and
              UI/UX professionals with a variety of industry experience. We love
              building things and creating beautiful products that work well. We
              focus on the details to ensure that our products are user
              friendly, unique and built to spec. We thrive to empower
              businesses through technology!
            </p>
          </Grid.Column>
        </Grid>
        <Grid style={{ padding: 0 }}>
          <Grid.Row
            style={{
              justifyContent: 'space-evenly',
              alignItems: 'flex-start',
              flexWrap: 'nowrap',
            }}
          >
            {team.map((person) => (
              <div data-aos="zoom-in">
                <GridColumn
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    boxShadow: '3px 3px 20px rgba(70,101,160,.164)',
                    transition: '.3s ease-in-out',
                    padding: 18,
                    height: '25em',
                    width: '23em',
                    margin: 25,
                    marginBottom: 50,
                  }}
                  width={4}
                >
                  <Image src={person.image} size="small" circular />
                  <Header as="h3" style={{ fontFamily: 'Avenir' }}>
                    {person.name}
                  </Header>
                  <p style={{ fontFamily: 'Avenir', fontSize: 14 }}>
                    {person.blurb}
                  </p>
                </GridColumn>
              </div>
            ))}
          </Grid.Row>
        </Grid>
      </Responsive>
    </Section>
  );
};
