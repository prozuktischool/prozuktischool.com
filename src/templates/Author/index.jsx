import React from 'react';
import { graphql } from 'gatsby';
import { MainLayout } from '../../views/layouts';
import { Box, Text } from '../../views/components';

export default ({
  data: {
    authorYaml: { id, bio, twitter },
    allMarkdownRemark: { edges: postNodes },
  },
}) => (
  <MainLayout>
    <Box maxWidth={960} margin="0 auto" padding={{ xs: 3, sm: 4 }}>
      <Text variant="h4">লেখক: {id}</Text>
      <Text>
        Twitter:{' '}
        <a href={`https://twitter.com/${twitter}/`} target="_blank">
          {`@${twitter}`}
        </a>
      </Text>
      <Text>
        <em>{bio}</em>
      </Text>
      <hr />
      <Text>{`${id} এর লেখাসমূহ: `}</Text>
      <ul>
        {postNodes.map(({ node: post }, idx) => (
          <li key={post.id}>
            <a href={post.fields.slug}>{post.frontmatter.title}</a>
          </li>
        ))}
      </ul>
    </Box>
  </MainLayout>
);

export const pageQuery = graphql`
  query PostsByAuthorId($authorId: String!) {
    allMarkdownRemark(
      filter: {
        fields: { authorId: { eq: $authorId } }
        frontmatter: { published: { eq: true } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            author {
              id
            }
          }
          fields {
            authorId
            slug
          }
        }
      }
    }
    authorYaml(id: { eq: $authorId }) {
      id
      bio
      twitter
    }
  }
`;
