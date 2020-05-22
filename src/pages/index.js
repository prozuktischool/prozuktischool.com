import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { MainLayout } from '../views/layouts';
import PostListing from '../components/PostListing';
import {
  Box,
  HeroSection,
  SectionTitle,
  SEO,
  TagList,
} from '../views/components';
import config from '../../data/SiteConfig';

const Index = ({ data }) => {
  const postEdges = data.allMarkdownRemark.edges;
  const { tags } = data.allMarkdownRemark;

  return (
    <MainLayout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <HeroSection />
      <Box maxWidth={960} margin="0 auto">
        <SectionTitle title="সাম্প্রতিক লেখা" />
        <PostListing postEdges={postEdges} limit={6} />
        <SectionTitle title="বিষয়সমূহ" />
        <TagList tags={tags} />
      </Box>
    </MainLayout>
  );
};

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
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
            language
          }
        }
      }
      tags: group(field: frontmatter___tags) {
        title: fieldValue
        totalCount
      }
    }
  }
`;
