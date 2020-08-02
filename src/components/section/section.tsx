import React from 'react';
import classNames from 'classnames';
import { Container, Header, Responsive } from 'semantic-ui-react';
import css from './section.module.css';

export const Section = ({
  title,
  children,
  className,
}: {
  title?: string;
  children: JSX.Element | JSX.Element[];
  className?: any;
}) => {
  const sectionStyle = classNames(className, css.section);

  return (
    <Container className={sectionStyle}>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        {title && (
          <Header as="h2" textAlign="center" style={{ fontSize: 50 }}>
            {title}
          </Header>
        )}
      </Responsive>
      <Responsive {...Responsive.onlyMobile}>
        {title && (
          <Header as="h3" textAlign="center" style={{ fontSize: 40 }}>
            {title}
          </Header>
        )}
      </Responsive>
      <div style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        {children}
      </div>
    </Container>
  );
};
