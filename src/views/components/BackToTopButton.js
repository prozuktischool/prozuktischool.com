import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { isBrowser } from '../../config';
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
  display: ${({ isButtonVisible }) => (isButtonVisible ? 'flex' : 'none')};

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

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    if (isBrowser) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const checkScrollHeight = () => {
      if (isBrowser) {
        if (!showButton && window.pageYOffset > 400) {
          setShowButton(true);
        } else if (showButton && window.pageYOffset <= 400) {
          setShowButton(false);
        }
      }
    };

    if (isBrowser) {
      window.addEventListener('scroll', checkScrollHeight);
    }

    return () => {
      if (isBrowser) {
        window.removeEventListener('scroll', checkScrollHeight);
      }
    };
  }, [showButton]);

  return (
    <ButtonContainer isButtonVisible={showButton} onClick={scrollToTop}>
      <ArrowUp />
    </ButtonContainer>
  );
};

export default BackToTopButton;
