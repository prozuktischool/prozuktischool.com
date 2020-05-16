import React from 'react';
import { graphql } from 'gatsby';
import { convertNumbers } from 'bn-number-utils';
import { MainLayout } from '../../layouts';
import { Box, PostList, SEO, Text } from '../../components';

const TagTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const postNodes = data.allMarkdownRemark.edges;

  return (
    <MainLayout>
      <Box maxWidth={960} margin="0 auto" padding={{ xs: 3, sm: 4 }}>
        <SEO pageTitle={tag} />
        <Text variant="h4">
          {`ট্যাগ: ${tag} (${convertNumbers(postNodes.length)}
টি লেখা)`}
        </Text>
        <PostList postNodes={postNodes} />
      </Box>
    </MainLayout>
  );
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { published: { eq: true }, tags: { in: [$tag] } } }
    ) {
      totalCount
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
          }
        }
      }
    }
  }
`;

export default TagTemplate;
