import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { Image } from '.';

const HeroContainer = styled(BackgroundImage)`
  min-height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;

  @media screen and (max-width: 576px) {
    min-height: 220px;

    &::before,
    &::after {
      background-size: cover !important;
    }
  }
`;

const HeroSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "hero-large.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  );

  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <HeroContainer fluid={imageData} style={{ backgroundSize: 'contain' }}>
      <Image
        src="ps-logo_sticker.png"
        width={['60vw', '30vw']}
        alignment="center"
      />
    </HeroContainer>
  );
};

export default HeroSection;
