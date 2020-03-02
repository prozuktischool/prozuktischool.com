import React from 'react';
import _ from 'lodash';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { Calendar, User } from 'react-feather';
import Layout from '../../components/Layout';
import UserInfo from '../../components/UserInfo';
import PostTags from '../pages/Post/PostTags';
import SocialLinks from '../../components/SocialLinks';
import SEO from '../components/SEO';
import config from '../../../data/SiteConfig';
import '../styles/themes/material-oceanic.css';
import { Box, Divider, Text } from '../components';
import { ArticleLayout } from '../layouts';

import { format } from 'date-fns';
import { bn } from 'date-fns/locale';
import { convertNumbers } from 'bn-number-utils';

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
            <Divider />

            <Box textAlign="center">
              <Box
                display={{ sm: 'block', md: 'inline' }}
                mr={{ sm: 0, md: 3, lg: 3, xl: 3 }}
                className="post-meta"
              >
                <User />
                <Text variant="h6" display="inline-box" ml={2}>
                  <a href={`/author/${_.kebabCase(post.author.id)}`}>
                    {post.author.id}
                  </a>
                </Text>
              </Box>
              <Box
                display={{ xs: 'block', sm: 'inline' }}
                mr={[0, 0, 3, 3, 3]}
                className="post-meta"
              >
                <Calendar />
                <Text variant="h6" display="inline-box" ml={2}>
                  {convertNumbers(
                    format(new Date(post.date), 'MMMM dd, yyyy GGGG', {
                      locale: bn,
                    })
                  )}
                </Text>
              </Box>
            </Box>
            <Divider />
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
