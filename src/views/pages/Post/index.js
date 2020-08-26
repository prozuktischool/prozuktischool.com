import React from 'react';
import _ from 'lodash';
import { graphql } from 'gatsby';
import { Calendar, User } from 'react-feather';
import { format } from 'date-fns';
import { bn } from 'date-fns/locale';
import { convertNumbers } from 'bn-number-utils';

import config from '../../../../data/SiteConfig';
import { Box, Divider, SEO, Text } from '../../components';
import { ArticleLayout, MainLayout } from '../../layouts';

import SocialShareLinks from './SocialShareLinks';
import PostTags from './PostTags';

const PostTemplate = ({ pageContext, data }) => {
  const { slug } = pageContext;
  const {
    site: {
      siteMetadata: { siteUrl, baseEditURL },
    },
  } = data;
  const postNode = data.markdownRemark;
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
            <Text variant="p" display="inline-box" ml={2} mb={{ xs: 0 }}>
              <a href={`/authors/${post.author.id}`}>{post.author.fullName}</a>
            </Text>
          </Box>
          <Box
            display={{ xs: 'block', sm: 'inline' }}
            mr={[0, 0, 3, 3, 3]}
            className="post-meta"
          >
            <Calendar />
            <Text variant="p" display="inline-box" ml={2}>
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
        {post.series && (
          <>
            <Text my={0} pt={3} variant="h6">
              সিরিজ:{' '}
              <a href={`/series/${_.kebabCase(post.series)}`}>{post.series}</a>
            </Text>
          </>
        )}
        <Divider display="inline-block" width="8rem" />
        <Text my={0} variant="caption">
          সর্বশেষ আপডেট:{' '}
          {convertNumbers(
            format(new Date(post.updatedAt), 'MMMM dd, yyyy GGGG', {
              locale: bn,
            })
          )}
        </Text>
        <Text my={0} variant="caption">
          লেখাটি সম্পাদনা করুন{' '}
          <a href={`${baseEditURL}${slug.slice(11)}/index.md`}>এখানে</a>
        </Text>

        <SocialShareLinks title={post.title} link={`${siteUrl}${slug}/`} />
        <div className="post-meta">
          <PostTags tags={post.tags} />
        </div>
      </ArticleLayout>
    </MainLayout>
  );
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        baseEditURL
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
        series
        author {
          id
          fullName
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
