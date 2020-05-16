import React from 'react';

const PostList = ({ postNodes }) => (
  <ul>
    {postNodes.map(({ node: post }) => (
      <li key={post.fields.slug}>
        <a href={post.fields.slug}>{post.frontmatter.title}</a>
      </li>
    ))}
  </ul>
);

export default PostList;
