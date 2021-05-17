'use strict';

exports.createPages = require('./gatsby/create-pages');
exports.onCreateNode = require('./gatsby/on-create-node');

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
  
    createTypes(`
      type Mdx implements Node {
        fields: Field
        frontmatter: MdxFrontmatter!
      }
      type Field {
          slug: String
          categorySlug: String
          tagSlugs: [String]
      }
      type MdxFrontmatter {
        tags: [String!]
        description: String
        date: String
        category: String
        socialImage: File @fileByRelativePath
      }
    `)
  }