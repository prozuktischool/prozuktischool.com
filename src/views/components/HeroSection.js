import React from 'react';
import styled from 'styled-components';
import HeroLogo from '../assets/images/hero-logo.svg';

const HeroContainer = styled.div`
  min-height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;

  background-image: url('/assets/images/hero-bg.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  svg {
    height: 25vh;
    width: 84vw;
  }

  @media screen and (max-width: 576px) {
    min-height: 220px;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroLogo />
    </HeroContainer>
  );
};

export default HeroSection;
