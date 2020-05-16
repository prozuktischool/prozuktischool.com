import React from 'react';
import { graphql, Link } from 'gatsby';
import { MainLayout } from '../../layouts';
import { NoticeBox, SEO, Text } from '../../components';

import AuthorList from './AuthorList';

const Authors = ({
  data: {
    allAuthorYaml: { edges: authorNodes },
  },
}) => {
  const authors = authorNodes && authorNodes.map((author) => author.node);

  return (
    <MainLayout variant="fixed">
      <SEO pageTitle="লেখকগণ" />
      <Text variant="h4">লেখকগণ:</Text>
      <AuthorList authors={authors} />
      <NoticeBox variant="notice">
        <Text>
          আপনিও লিখতে চান?{' '}
          <Link to="/contribution-guide">এখানে বিস্তারিত দেখুন</Link>
        </Text>
      </NoticeBox>
    </MainLayout>
  );
};

export const pageQuery = graphql`
  query AuthorsQuery {
    allAuthorYaml {
      edges {
        node {
          id
          fullName
          bio
          twitter
        }
      }
    }
  }
`;

export default Authors;
