import React from 'react';
import styled from 'styled-components';
import HeroLogo from '../assets/images/hero-logo.svg';

const HeroContainer = styled.div`
  min-height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  background-image: url('/assets/images/hero.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 50%);

  svg {
    height: 25vh;
    width: 84vw;
  }

  @media screen and (max-width: 576px) {
    clip-path: polygon(0 0, 100% 0, 100% 60%, 50% 100%, 0 60%);
    min-height: 220px;

    svg {
      width: 64vw;
      position: relative;
      top: -3vh;
    }
  }

  @media screen and (max-width: 1150px) {
    background-image: url('/assets/images/hero_tab.jpg');
  }

  @media screen and (max-width: 480px) {
    background-image: url('/assets/images/hero_mobile.jpg');
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
