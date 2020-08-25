import React from 'react';
import styled from 'styled-components';

const Link = styled.a``;

const SocialShareIcon = ({ link, ariaLabel, children }) => (
  <Link href={link} target="_blank" rel="noopener" aria-label={ariaLabel}>
    {children}
  </Link>
);

export default SocialShareIcon;
