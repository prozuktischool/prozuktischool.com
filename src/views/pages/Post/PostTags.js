import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { Link } from 'gatsby';
import { Text } from '../../components';

const TagsContainer = styled.div`
  text-align: center;
  margin-top: 24px;

  a {
    font-size: 0.8rem;
    margin-right: 8px;

    &::before {
      content: '#';
      margin-right: 2px;
    }

    &::after {
      content: ',';
    }

    &:last-child {
      &::after {
        content: '';
      }
    }
  }
`;

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <TagsContainer>
        {tags &&
          tags.map(tag => (
            <Link key={tag} to={`/tags/${_.kebabCase(tag)}`}>
              {tag}
            </Link>
          ))}
      </TagsContainer>
    );
  }
}

export default PostTags;
