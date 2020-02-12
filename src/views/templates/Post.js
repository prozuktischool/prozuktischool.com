import React from 'react';
import _ from 'lodash';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import UserInfo from '../../components/UserInfo';
import PostTags from '../../components/PostTags';
import SocialLinks from '../../components/SocialLinks';
import SEO from '../components/SEO';
import config from '../../../data/SiteConfig';
import '../styles/themes/material-oceanic.css';
import { Text } from '../components';
import { ArticleLayout } from '../layouts';

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <ArticleLayout>
            <Text variant="h2" textAlign="center">
              {post.title}
            </Text>
            <Text variant="h6">
              <a href={`/author/${_.kebabCase(post.author.id)}`}>
                {post.author.id}
              </a>
            </Text>
            <Text variant="raw" html={postNode.html} />
            <div className="post-meta">
              <PostTags tags={post.tags} />
            </div>
          </ArticleLayout>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
        author {
          id
          bio
          twitter
        }
      }
      fields {
        slug
        date
      }
    }
  }
`;
