import React from 'react';
import { graphql } from 'gatsby';
import { MainLayout } from '../../layouts';
import PostListing from '../../../components/PostListing';
import { SectionTitle, SEO, Pager } from '../../components';

const BlogArchive = ({ data, pageContext }) => {
  const postEdges = data.allMarkdownRemark.edges;
  return (
    <MainLayout variant="fixed">
      <SEO pageTitle="লেখাসমূহ" pagePath="/posts/" />
      <SectionTitle title="আমাদের প্রকাশিত লেখাসমূহ" />
      <PostListing postEdges={postEdges} />
      <Pager pageContext={pageContext} />
    </MainLayout>
  );
};

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

export default BlogArchive;
