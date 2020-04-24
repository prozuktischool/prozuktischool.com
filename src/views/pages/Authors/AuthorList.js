import _ from 'lodash';
import React from 'react';
import { Link } from 'gatsby';

const AuthorList = ({ authors = [] }) => {
  return (
    <ul>
      {authors.map((author, index) => (
        <li key={index}>
          <Link to={`/author/${_.kebabCase(author.id)}`}>{author.id}</Link>
        </li>
      ))}
    </ul>
  );
};

export default AuthorList;
