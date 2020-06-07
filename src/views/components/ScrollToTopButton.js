import React, { useState } from 'react';
import styled from 'styled-components';

import ArrowUp from '../assets/icons/arrow-up.svg';

const ButtonContainer = styled.span`
  position: fixed;
  bottom: 32vh;
  right: 32px;
  align-items: center;
  height: 32px;
  width: 32px;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  opacity: 0.5;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  transition: opacity 0.4s, color ease-in-out 0.2s, background ease-in-out 0.2s;

  svg {
    stroke: ${({ theme }) => theme.colors.primary3};
    transition: all ease-in-out 0.3s;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary3};

    svg {
      stroke: ${({ theme }) => theme.colors.background};
    }
  }

  @media only screen and (max-width: 567px) {
    bottom: 8vh;
    right: 16px;
    width: 24px;
    height: 24px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const ScrollToTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (
      !showScroll &&
      typeof window !== 'undefined' &&
      window.pageYOffset > 400
    ) {
      setShowScroll(true);
    } else if (
      showScroll &&
      typeof window !== 'undefined' &&
      window.pageYOffset <= 400
    ) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', checkScrollTop);
  }

  return (
    <ButtonContainer
      style={{ display: showScroll ? 'flex' : 'none' }}
      onClick={scrollTop}
    >
      <ArrowUp />
    </ButtonContainer>
  );
};

export default ScrollToTopButton;
