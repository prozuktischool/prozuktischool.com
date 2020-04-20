import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import { MainLayout } from '../views/layouts';
import PostListing from '../components/PostListing';
import SEO from '../views/components/SEO';
import config from '../../data/SiteConfig';

class Index extends Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <MainLayout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <PostListing postEdges={postEdges} limit={6} />
        </div>
      </MainLayout>
    );
  }
}

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
    }
  }
`;
