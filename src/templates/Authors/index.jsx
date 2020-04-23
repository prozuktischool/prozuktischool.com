import React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import { MainLayout } from '../../views/layouts';
import { Box, Text } from '../../views/components';

export default ({
  data: {
    allAuthorYaml: { edges: authorNodes },
  },
}) => (
  <MainLayout>
    <Box maxWidth={960} margin="0 auto" padding={{ xs: 3, sm: 4 }}>
      <Text variant="h4">লেখকগণ:</Text>
      <ul>
        {authorNodes.map(({ node: author }, index) => (
          <li key={`author-${author.id}`}>
            <Link to={`/author/${_.kebabCase(author.id)}`}>{author.id}</Link>
          </li>
        ))}
      </ul>
    </Box>
  </MainLayout>
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
