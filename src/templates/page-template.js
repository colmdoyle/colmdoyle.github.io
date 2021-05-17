// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import type { mdx } from '../types';
import { MDXRenderer } from 'gatsby-plugin-mdx';

type Props = {
  data: {
    mdx: mdx
  }
};

const PageTemplate = ({ data }: Props) => {
  const { subtitle: siteSubtitle } = useSiteMetadata();
  const { body } = data.mdx;
  const { frontmatter, fields } = data.mdx;
  const { title: pageTitle, description: pageDescription = '', socialImage } = frontmatter;
  const metaDescription = pageDescription || siteSubtitle;
  const socialImageUrl = socialImage?.publicURL;

  return (
    <Layout title={pageTitle} description={metaDescription} socialImage={socialImageUrl} slug={fields.slug}>
      <Sidebar />
      <Page title={pageTitle}>
      <MDXRenderer>{body}</MDXRenderer>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      fields {
        slug
      }
      frontmatter {
        title
        date
        description
        socialImage {
          publicURL
        }
      }
    }
  }
`;

export default PageTemplate;
