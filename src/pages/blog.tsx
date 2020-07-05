import React from 'react';
import { Header, Grid, Image } from 'semantic-ui-react';
import { Layout } from '../components/layout';
import mainLogo from '../assets/images/mainlogo.png';
import waves from '../assets/images/waves.png';
import css from './blog.module.css';

const BlogIndex = () => {
  return (
    <Layout>
      <div className={css.container}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className={css.heroContainer}>
            <Image src={mainLogo} style={{ width: '7em', margin: 'auto' }} />
            <Header
              inverted
              as="h1"
              textAlign="center"
              style={{ marginTop: 12, fontFamily: 'Avenir' }}
            >
              blog
            </Header>
          </div>
          <div>
            <img
              style={{ width: '100%', height: '170px' }}
              alt="waves"
              src={waves}
            />
          </div>
        </div>
      </div>

      <Grid columns={3} centered>
        {[
          {
            title: 'article 1',
            date: new Date().toISOString(),
            readingTime: '5 min',
            description: 'this is a blog post',
          },
          {
            title: 'article 2',
            date: new Date().toISOString(),
            readingTime: '5 min',
            description: 'this is a blog post',
          },
          {
            title: 'article 3',
            date: new Date().toISOString(),
            readingTime: '5 min',
            description: 'this is a blog post',
          },
          {
            title: 'article 4',
            date: new Date().toISOString(),
            readingTime: '5 min',
            description: 'this is a blog post',
          },
        ].map(({ title, date, readingTime, description }) => {
          return (
            <Grid.Row>
              <Grid.Column>
                <Header className={css.header}>{title}</Header>
                <div>
                  {date}
                  {readingTime}
                </div>
                {description}
              </Grid.Column>
            </Grid.Row>
          );
        })}
      </Grid>
    </Layout>
  );
};

export default BlogIndex;
