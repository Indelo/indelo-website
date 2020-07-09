import React from 'react';
import { Header, Grid, Container, Segment } from 'semantic-ui-react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Layout } from '../components/layout';
import waves from '../assets/images/waves.png';
import css from './blog.module.css';

const query = graphql`
  query {
    file(relativePath: { eq: "main-logo.png" }) {
      childImageSharp {
        fixed(width: 150, height: 151) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const BlogIndex = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
      <div className={css.container}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className={css.heroContainer}>
            <Segment basic textAlign="center">
              <Img style={{}} fixed={data.file.childImageSharp.fixed} />
            </Segment>
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
      <Container style={{ paddingBottom: 50 }}>
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
      </Container>
    </Layout>
  );
};

export default BlogIndex;
