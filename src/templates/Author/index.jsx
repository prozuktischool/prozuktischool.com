import React from 'react';
import { MainLayout } from '../../views/layouts';

export default ({
  data: {
    authorYaml: { id, bio, twitter },
    allMarkdownRemark: { edges: postNodes },
  },
}) => (
  <MainLayout>
    <div>
      <h2>ID: {id}</h2>
      <a href={`https://twitter.com/${twitter}/`} target="_blank">
        {`@${twitter}`}
      </a>
      <p>
        <em>{bio}</em>
      </p>
    </div>
    <hr />
    <p>{`Posted by ${id}: `}</p>
    {postNodes.map(({ node: post }, idx) => (
      <div key={post.id}>
        <a href={post.fields.slug}>{post.frontmatter.title}</a>
      </div>
    ))}
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
