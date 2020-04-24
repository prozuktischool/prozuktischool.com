import React from 'react';
import _ from 'lodash';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { Calendar, User } from 'react-feather';
import { format } from 'date-fns';
import { bn } from 'date-fns/locale';
import { convertNumbers } from 'bn-number-utils';

import config from '../../../../data/SiteConfig';
import { Box, Divider, SEO, SocialShareIcon, Text } from '../../components';
import { ArticleLayout, MainLayout } from '../../layouts';

import SocialShareLinks from './SocialShareLinks';
import PostTags from './PostTags';

import '../../styles/themes/material-oceanic.css';
import Facebook from '../../assets/icons/facebook.svg';

class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const {
      site: {
        siteMetadata: { siteUrl },
      },
    } = this.props.data;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    post.updatedAt = postNode.fields.updatedAt;

    if (!post.id) {
      post.id = slug;
    }

    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }

    return (
      <MainLayout>
        <div>
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
                <Text variant="h6" display="inline-box" ml={2} mb={{ xs: 0 }}>
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
            <Divider display="inline-block" width={`8rem`} />
            <Text mt={0} variant="caption">
              সর্বশেষ আপডেট:{' '}
              {convertNumbers(
                format(new Date(post.updatedAt), 'MMMM dd, yyyy GGGG', {
                  locale: bn,
                })
              )}
            </Text>
            <SocialShareLinks title={post.title} link={`${siteUrl}${slug}/`} />
            <div className="post-meta">
              <PostTags tags={post.tags} />
            </div>
          </ArticleLayout>
        </div>
      </MainLayout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
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
        updatedAt
      }
    }
  }
`;

export default PostTemplate;
