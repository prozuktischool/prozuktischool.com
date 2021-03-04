import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Image from './Image';
import HeroLogo from '../assets/images/hero-logo.svg';

const HeroContainer = styled(BackgroundImage)`
  min-height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 50%);

  @media screen and (max-width: 576px) {
    min-height: 240px;
    clip-path: polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%);

    svg {
      width: 60vw;
    }
  }
`;

const HeroSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(quality: 60, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  );

  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <HeroContainer fluid={imageData}>
      <HeroLogo />
    </HeroContainer>
  );
};

export default HeroSection;
