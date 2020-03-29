import React from 'react';
import styled from 'styled-components';

const Link = styled.a``;

const SocialShareIcon = ({ link, children }) => (
  <Link href={link} target="_blank" rel="noopener">
    {children}
  </Link>
);

export default SocialShareIcon;
