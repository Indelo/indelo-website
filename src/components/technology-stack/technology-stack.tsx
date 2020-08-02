import React from 'react';
import { chunk } from 'lodash';
import { Grid, Image, Header, Responsive } from 'semantic-ui-react';
import { Section } from '../section/section';
import Node from '../../assets/svgs/nodejs-icon.svg';
import JavaScript from '../../assets/svgs/javascript.svg';
import TypeScript from '../../assets/svgs/typescript-icon.svg';
import Python from '../../assets/svgs/python.svg';
import Express from '../../assets/svgs/express.svg';
import AWS from '../../assets/svgs/aws.svg';
import Bootstrap from '../../assets/svgs/bootstrap.svg';
import Circleci from '../../assets/svgs/circleci.svg';
import Css from '../../assets/svgs/css-3.svg';
import Docker from '../../assets/svgs/docker-icon.svg';
import Figma from '../../assets/svgs/figma.svg';
import Flask from '../../assets/svgs/flask.svg';
import Gatsby from '../../assets/svgs/gatsby.svg';
import GoogleAds from '../../assets/svgs/google-ads.svg';
import GoogleAnalytics from '../../assets/svgs/google-analytics.svg';
import Graphql from '../../assets/svgs/graphql.svg';
import Heroku from '../../assets/svgs/heroku-icon.svg';
import Netlify from '../../assets/svgs/netlify.svg';
import Postgres from '../../assets/svgs/postgresql.svg';
import Rails from '../../assets/svgs/rails.svg';
import Redis from '../../assets/svgs/redis.svg';
import Redux from '../../assets/svgs/redux.svg';
import SemanticUi from '../../assets/svgs/semantic-ui.svg';
import Sketch from '../../assets/svgs/sketch.svg';
import WordPress from '../../assets/svgs/wordpress-icon.svg';
import LightWave from '../../assets/svgs/lighter-wave.svg';
import css from './technology-stack.module.css';

const items = [
  {
    title: 'Node',
    image: Node,
  },
  {
    title: 'JavaScript',
    image: JavaScript,
  },
  {
    title: 'TypeScript',
    image: TypeScript,
  },
  {
    title: 'Express',
    image: Express,
  },
  {
    title: 'Redux',
    image: Redux,
  },
  {
    title: 'Gatsby',
    image: Gatsby,
  },
  {
    title: 'Python',
    image: Python,
  },
  {
    title: 'Docker',
    image: Docker,
  },
  {
    title: 'Flask',
    image: Flask,
  },
  {
    title: 'CSS3',
    image: Css,
  },
  {
    title: 'GraphQL',
    image: Graphql,
  },
  {
    title: 'Semantic UI',
    image: SemanticUi,
  },
  {
    title: 'Bootstrap',
    image: Bootstrap,
  },
  {
    title: 'WordPress',
    image: WordPress,
  },
  {
    title: 'CircleCI',
    image: Circleci,
  },
  {
    title: 'AWS',
    image: AWS,
  },
  {
    title: 'Heroku',
    image: Heroku,
  },
  {
    title: 'Netlify',
    image: Netlify,
  },
  {
    title: 'Postgres',
    image: Postgres,
  },
  {
    title: 'Redis',
    image: Redis,
  },
  {
    title: 'Rails',
    image: Rails,
  },
  {
    title: 'Google Ads',
    image: GoogleAds,
  },
  {
    title: 'G. Analytics',
    image: GoogleAnalytics,
  },
  {
    title: 'Sketch',
    image: Sketch,
  },
  {
    title: 'Figma',
    image: Figma,
  },
];

export const TechnologyStack = () => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <LightWave
        width="100%"
        preserveAspectRatio="none"
        style={{
          height: 'calc(100% + 210px)',
          position: 'absolute',
          top: -120,
          zIndex: -100,
        }}
      />
      <Section title="Our technology stack">
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Grid columns={5} padded>
            {chunk(items, 5).map((chunks) => (
              <Grid.Row>
                {chunks.map(({ title, image: Icon }) => {
                  return (
                    <Grid.Column>
                      <Image className={css.item}>
                        <Header textAlign="center">{title}</Header>
                        <Icon style={{ height: '55px' }} />
                      </Image>
                    </Grid.Column>
                  );
                })}
              </Grid.Row>
            ))}
          </Grid>
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <Grid columns={2} padded>
            {chunk(items, 2).map((chunks) => (
              <Grid.Row>
                {chunks.map(({ title, image: Icon }) => {
                  return (
                    <Grid.Column>
                      <Image className={css.item}>
                        <Header textAlign="center">{title}</Header>
                        <Icon style={{ height: '55px' }} />
                      </Image>
                    </Grid.Column>
                  );
                })}
              </Grid.Row>
            ))}
          </Grid>
        </Responsive>
      </Section>
    </div>
  );
};
