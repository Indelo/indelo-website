import React from 'react';
import classNames from 'classnames';
import { Container, Header } from 'semantic-ui-react';
import css from './section.module.css';

export const Section = ({
  title,
  children,
  className,
}: {
  title: string;
  children: JSX.Element | JSX.Element[];
  className?: any;
}) => {
  const sectionStyle = classNames(className, css.section);

  return (
    <Container className={sectionStyle}>
      <Header as="h2" textAlign="center" style={{ fontSize: 60 }}>
        {title}
      </Header>
      <div style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        {children}
      </div>
    </Container>
  );
};
