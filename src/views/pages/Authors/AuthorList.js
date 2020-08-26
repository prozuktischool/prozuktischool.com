import _ from 'lodash';
import React from 'react';
import { Link } from 'gatsby';

const AuthorList = ({ authors = [] }) => {
  return (
    <ul>
      {authors.map((author, index) => (
        <li key={index}>
          <Link to={`/authors/${author.id}/`}>{author.fullName}</Link>
        </li>
      ))}
    </ul>
  );
};

export default AuthorList;
