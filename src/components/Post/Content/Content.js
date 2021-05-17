// @flow strict
import React from 'react';
import styles from './Content.module.scss';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { MDXRenderer } from 'gatsby-plugin-mdx';

type Props = {
  body: string,
  title: string
};

const Content = ({ body, title }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <div className={styles['content__body']}>
      <p className={styles['content__body__podcast']}><small>This content is also available as a <Link to='/pages/podcast'>podcast</Link> and <a href='https://klokta.substack.com'>newsletter</a>.</small></p>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  </div>
);

export default Content;
