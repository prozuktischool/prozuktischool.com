import React from 'react';
import { graphql } from 'gatsby';
import { MainLayout } from '../../layouts';
import { Divider, SEO, Text } from '../../components';

const AuthorPage = ({
  data: {
    authorYaml: { id, fullName, bio, twitter },
    allMarkdownRemark: { edges: postNodes },
  },
}) => (
  <MainLayout variant="fixed">
    <SEO
      pageTitle={fullName}
      pagePath={`/authors/${id}/`}
      pageType="Person"
      author={{ fullName, twitter, id }}
    />
    <Text variant="h4">{`লেখক: ${fullName}`}</Text>
    <Text>
      Twitter:{' '}
      <a
        href={`https://twitter.com/${twitter}/`}
        rel="noopener noreferrer"
        target="_blank"
      >
        {`@${twitter}`}
      </a>
    </Text>
    <Text>
      <em>{bio}</em>
    </Text>
    <Divider height={2} />
    <Text>{`${fullName} এর লেখাসমূহ: `}</Text>
    <ul>
      {postNodes.map(({ node: post }) => (
        <li key={post.fields.slug}>
          <a href={post.fields.slug}>{post.frontmatter.title}</a>
        </li>
      ))}
    </ul>
  </MainLayout>
);

export const pageQuery = graphql`
  query PostsByAuthorId($authorId: String!) {
    allMarkdownRemark(
      filter: {
        fields: { authorId: { eq: $authorId } }
        frontmatter: { published: { eq: true } }
      }
      sort: { fields: frontmatter___date }
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
      fullName
      bio
      twitter
    }
  }
`;

export default AuthorPage;
