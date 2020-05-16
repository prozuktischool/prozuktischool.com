import React from 'react';
import { graphql } from 'gatsby';
import { convertNumbers } from 'bn-number-utils';
import { MainLayout } from '../../layouts';
import { Box, PostList, Text } from '../../components';

export default ({
  data: {
    allMarkdownRemark: { edges: postNodes, group: seriesInfo },
  },
}) => {
  return (
    <MainLayout>
      <Box maxWidth={960} margin="0 auto" padding={{ xs: 3, sm: 4 }}>
        <Text variant="h4">
          {`সিরিজ: ${seriesInfo[0].fieldValue} ${convertNumbers(
            seriesInfo[0].totalCount
          )} পর্ব`}
        </Text>
        <PostList postNodes={postNodes} />
      </Box>
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
