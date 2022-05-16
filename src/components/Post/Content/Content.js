// @flow strict
import React from 'react';
import styles from './Content.module.scss';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

type Props = {
  body: string,
  title: string
};

const Content = ({ body, title }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <div className={styles['content__body']}>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  </div>
);

export default Content;
