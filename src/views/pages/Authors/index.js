import React from 'react';

import { MainLayout } from '../../layouts';
import { Box, Text } from '../../components';

import AuthorList from './AuthorList';

const Authors = ({
  data: {
    allAuthorYaml: { edges: authorNodes },
  },
}) => {
  const authors = authorNodes && authorNodes.map((author) => author.node);

  return (
    <MainLayout>
      <Box
        maxWidth={960}
        minHeight="50vh"
        margin="0 auto"
        padding={{ xs: 3, sm: 4 }}
      >
        <Text variant="h4">লেখকগণ:</Text>
        <AuthorList authors={authors} />
      </Box>
    </MainLayout>
  );
};

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

export default Authors;
