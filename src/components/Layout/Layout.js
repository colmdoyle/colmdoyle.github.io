// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
import type { Node as ReactNode } from 'react';
import { useSiteMetadata } from '../../hooks';
import styles from './Layout.module.scss';

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
  socialImage?: string
};

const Layout = ({
  children,
  title,
  description,
  socialImage = '',
  slug
}: Props) => {
  const { author, url, siteName } = useSiteMetadata();
  const metaImage = socialImage || author.photo;
  const metaImageUrl = url + metaImage;
  const ogUrl = slug ? url + slug + '/' : url;

  const renderedTitle = title.length > 0 ? `${title} | ${siteName}` : siteName;
  const ogTitle = title.length > 0 ? title : siteName;

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{renderedTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={metaImageUrl} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={ogTitle} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />
        <meta name="twitter:creator" content={author.contacts.twitter} />
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
