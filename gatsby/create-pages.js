'use strict';

const path = require('path');
const _ = require('lodash');
const createCategoriesPages = require('./pagination/create-categories-pages.js');
const createTagsPages = require('./pagination/create-tags-pages.js');
const createPostsPages = require('./pagination/create-posts-pages.js');

const createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // 404
  createPage({
    path: '/404',
    component: path.resolve('./src/templates/not-found-template.js')
  });

  // Tags list
  createPage({
    path: '/tags',
    component: path.resolve('./src/templates/tags-list-template.js')
  });

  // Categories list
  createPage({
    path: '/categories',
    component: path.resolve('./src/templates/categories-list-template.js')
  });

  // Posts and pages from markdown
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            frontmatter {
              template
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const { edges } = result.data.allMarkdownRemark;

  _.each(edges, (edge) => {
    if (_.get(edge, 'node.frontmatter.template') === 'page') {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/page-template.js'),
        context: { slug: edge.node.fields.slug }
      });
    } else if (_.get(edge, 'node.frontmatter.template') === 'post') {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/post-template.js'),
        context: { slug: edge.node.fields.slug }
      });
    }
  });

  
  // Feeds
  await createTagsPages(graphql, actions);
  await createCategoriesPages(graphql, actions);
  await createPostsPages(graphql, actions);
  
  createRedirect({ fromPath: '/posts/when-you-struggle-to-write', toPath: '/posts/2021/05/when-you-struggle-to-write', isPermanent: true });
  createRedirect({ fromPath: '/posts/building-for-the-new-normal', toPath: '/posts/2021/04/building-for-the-new-normal', isPermanent: true });
  createRedirect({ fromPath: '/posts/introducing-klokta', toPath: '/posts/2021/04/introducing-klokta', isPermanent: true });
  createRedirect({ fromPath: '/posts/spring-loaded-scorecard', toPath: '/posts/2021/04/spring-loaded-scorecard', isPermanent: true });
  createRedirect({ fromPath: '/posts/predictions-apple-spring-loaded', toPath: '/posts/2021/04/predictions-apple-spring-loaded', isPermanent: true });
  createRedirect({ fromPath: '/posts/if-youre-not-iterating-youre-falling-behind', toPath: '/posts/2021/04/if-youre-not-iterating-youre-falling-behind', isPermanent: true });
  createRedirect({ fromPath: '/posts/getting-better-at-devrel', toPath: '/posts/2021/04/getting-better-at-devrel', isPermanent: true });
  createRedirect({ fromPath: '/posts/the-real-perk', toPath: '/posts/2016/05/the-real-perk', isPermanent: true });
  createRedirect({ fromPath: '/posts/families-and-tech-companies', toPath: '/posts/2016/04/families-and-tech-companies', isPermanent: true });
  createRedirect({ fromPath: '/posts/it-s-time-to-get-rid-of-traditional-release-notes', toPath: '/posts/2016/02/it-s-time-to-get-rid-of-traditional-release-notes', isPermanent: true });
};

module.exports = createPages;
