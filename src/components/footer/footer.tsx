import React from 'react';
import {
  Container,
  Header,
  Button,
  Grid,
  Segment,
  List,
  Image,
  Responsive,
} from 'semantic-ui-react';
import css from './footer.module.css';
import Logo from '../../assets/images/small-logo.png';

const data = {
  contact: [{ item: 'hello@indelo.co.za' }],
  twitter: 'https://twitter.com/Indelo4',
  offerings: [
    { title: 'Website development' },
    { title: 'UI/UX' },
    { title: 'Branding' },
    { title: 'SEO and maintenance' },
  ],
};

const Column = ({ header, body }: { header: string; body: any }) => (
  <Grid.Column width="3">
    <Header inverted as="h4" style={{ fontSize: 20 }}>
      {header}
    </Header>
    <List>{body}</List>
  </Grid.Column>
);

const SocialButton = ({
  link,
  type,
}: {
  link: string;
  type: 'facebook' | 'linkedin' | 'twitter';
}) => (
  <Button
    as={(props: any) => <a href={link} {...props} />}
    circular
    color={type}
    icon={type}
  />
);

export const Footer = () => {
  return (
    <Segment basic className={css.container}>
      <Container>
        <Responsive {...Responsive.onlyMobile}>
          <div className={css.mobileContainer}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={Logo} className={css.image} />
                <Header inverted as="h4" className={css.header}>
                  Indelo
                </Header>
              </div>
              <p className={css.itemColor} style={{ fontSize: 14 }}>
                © Copyright Indelo 2020
              </p>
            </div>
            <div>
              <SocialButton link={data.twitter} type="twitter" />
            </div>
          </div>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Grid divided>
            <Grid.Row>
              <Grid.Column width="5" className={css.brand}>
                <div className={css.logo}>
                  <Image src={Logo} className={css.image} />
                  <Header inverted as="h4" className={css.header}>
                    Indelo
                  </Header>
                </div>
                <p className={css.itemColor}>© Copyright Indelo 2020</p>
              </Grid.Column>
              <Column
                header="Services"
                body={data.offerings.map(({ title }) => (
                  <List.Item className={css.itemColor} key={title}>
                    {title}
                  </List.Item>
                ))}
              />
              <Column
                header="Contact"
                body={data.contact.map(({ item }) => (
                  <List.Item className={css.itemColor} key={item}>
                    {item}
                  </List.Item>
                ))}
              />

              <Grid.Column width="4" floated="right">
                <SocialButton link="" type="facebook" />
                <SocialButton link={data.twitter} type="twitter" />
                <SocialButton link="" type="linkedin" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
      </Container>
    </Segment>
  );
};
