import React from 'react';
import styled from 'styled-components';
import HeroLogo from '../assets/images/hero-logo.svg';

const HeroContainer = styled.div`
  min-height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  background-image: linear-gradient(
    to bottom,
    #1c1826,
    #1e1a29,
    #211c2d,
    #231e30,
    #262034
  );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 50%);

  svg {
    position: relative;
    width: 84vw;
  }

  @media screen and (max-width: 768px) {
    svg {
      top: -4vh;
    }
  }

  @media screen and (max-width: 576px) {
    clip-path: polygon(0 0, 100% 0, 100% 60%, 50% 100%, 0 60%);
    min-height: 220px;

    svg {
      width: 64vw;
      top: -3vh;
    }
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
