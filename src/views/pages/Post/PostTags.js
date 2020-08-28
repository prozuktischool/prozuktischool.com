import React, { Component } from 'react';
import styled from 'styled-components';
import { kebabCase } from 'lodash';
import { Link } from 'gatsby';
import { Text } from '../../components';
import Hash from '../../assets/icons/hash.svg';

const TagsContainer = styled.div`
  text-align: center;

  a {
    font-size: 1rem;
    margin-right: 8px;

    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`;

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <TagsContainer>
        {tags &&
          tags.map((tag) => (
            <Link key={tag} to={`/tags/${kebabCase(tag)}`}>
              <Hash />
              {tag}
            </Link>
          ))}
      </TagsContainer>
    );
  }
}

export default PostTags;
