import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import { MainLayout } from '../../layouts';
import PostListing from '../../../components/PostListing';
import { Box, SectionTitle, SEO } from '../../components';
import config from '../../../../data/SiteConfig';
import { Pager } from '../../components';

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            language
          }
        }
      }
    }
  }
`;

const BlogArchive = ({ data, pageContext, location }) => {
  const postEdges = data.allMarkdownRemark.edges;
  return (
    <MainLayout>
      <Box maxWidth={960} margin="0 auto">
        <Helmet title={config.siteTitle} />
        <SEO pageTitle="লেখাসমূহ" />
        <SectionTitle title="আমাদের প্রকাশিত লেখাসমূহ" />
        <PostListing postEdges={postEdges} />
        <Pager pageContext={pageContext} />
      </Box>
    </MainLayout>
  );
};

export default BlogArchive;
