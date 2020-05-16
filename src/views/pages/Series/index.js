import React from 'react';
import { graphql } from 'gatsby';
import { convertNumbers } from 'bn-number-utils';
import { MainLayout } from '../../layouts';
import { PostList, SEO, Text } from '../../components';

export default ({
  data: {
    allMarkdownRemark: { edges: postNodes, group: seriesInfo },
  },
}) => {
  return (
    <MainLayout variant="fixed">
      <SEO pageTitle={seriesInfo[0].fieldValue} />
      <Text variant="h4">
        {`সিরিজ: ${seriesInfo[0].fieldValue} (${convertNumbers(
          seriesInfo[0].totalCount
        )} পর্ব)`}
      </Text>
      <PostList postNodes={postNodes} />
    </MainLayout>
  );
};

export const pageQuery = graphql`
  query PostsBySeries($series: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: { series: { eq: $series }, published: { eq: true } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            series
          }
          fields {
            slug
          }
        }
      }
      group(field: frontmatter___series) {
        fieldValue
        totalCount
      }
    }
  }
`;
