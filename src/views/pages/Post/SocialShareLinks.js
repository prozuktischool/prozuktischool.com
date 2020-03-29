import React from 'react';
import styled from 'styled-components';
import { SocialShareIcon } from '../../components';
import Facebook from '../../assets/icons/facebook.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Reddit from '../../assets/icons/reddit.svg';
import Hackernews from '../../assets/icons/hackernews.svg';

const Container = styled.ul`
  margin: 32px 0 0 0;
  padding: 0;
  text-align: center;

  li {
    display: inline-flex;
    margin-right: 16px;
    opacity: 0.8;
    transition: all 0.3s;

    &:last-child {
      margin-right: 0;
    }

    &::before {
      content: '';
      margin: 0;
      top: 0;
    }

    &:hover {
      opacity: 1;
      transform: translateY(-4px);
      svg {
        // width: 32px;
        // height: 32px;
        path {
          fill: ${({ theme }) => theme.colors.primary1};
        }
      }
    }
  }
`;

const SocialShareLinks = ({ title, link }) => (
  <Container>
    <li>
      <SocialShareIcon
        link={`https://twitter.com/intent/tweet/?text=${title}&amp;url=${link}`}
      >
        <Twitter />
      </SocialShareIcon>
    </li>
    <li>
      <SocialShareIcon
        link={`https://facebook.com/sharer/sharer.php?u=${link}`}
      >
        <Facebook />
      </SocialShareIcon>
    </li>
    <li>
      <SocialShareIcon
        link={`https://twitter.com/intent/tweet/?text=${title}&amp;url=${link}`}
      >
        <Hackernews />
      </SocialShareIcon>
    </li>
    <li>
      <SocialShareIcon
        link={`https://twitter.com/intent/tweet/?text=${title}&amp;url=${link}`}
      >
        <Reddit />
      </SocialShareIcon>
    </li>
  </Container>
);

export default SocialShareLinks;
