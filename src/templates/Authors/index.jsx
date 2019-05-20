import React from "react";
import { Link } from "gatsby";
import _ from "lodash";
import Layout from "../../components/Layout";

export default ({
  data: {
    allAuthorYaml: { edges: authorNodes }
  }
}) => (
  <Layout>
    <ul>
      {authorNodes.map(({ node: author }, index) => (
        <li key={`author-${author.id}`}>
          <Link to={`/author/${_.kebabCase(author.id)}`}>{author.id}</Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export const pageQuery = graphql`
  query AuthorsQuery {
    allAuthorYaml {
      edges {
        node {
          id
          bio
          twitter
        }
      }
    }
  }
`;
