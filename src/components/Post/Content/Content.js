// @flow strict
import React from 'react';
import styles from './Content.module.scss';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import TrackedAudio from '../TrackedAudio';
import { MDXProvider } from "@mdx-js/react"
const shortcodes = { TrackedAudio }

type Props = {
  body: string,
  title: string,
  slug: slug
};

const Content = ({ body, title, slug }: Props) => (
  <MDXProvider components={shortcodes}>
    <div className={styles['content']}>
      <h1 className={styles['content__title']}>{title}</h1>
      <div className={styles['content__body']}>
        <p className={styles['content__body__podcast']}><small>This content is also available as a <Link to='/pages/podcast'>podcast</Link> and <a href='https://klokta.substack.com'>newsletter</a>.</small></p>
        <MDXRenderer slug={slug}>{body}</MDXRenderer>
      </div>
    </div>
  </MDXProvider>
);

export default Content;
