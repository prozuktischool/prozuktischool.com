import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import styled, { css } from 'styled-components';
import { space, layout, borders } from 'styled-system';

const GatsbyImageImageExtended = styled(GatsbyImage)`
  ${({ isCentered }) =>
    isCentered
      ? css`
          margin: auto;
        `
      : ''};

  img {
    height: auto;
    ${layout};
  }
`;

export default function Image({ src, ...props }) {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { internal: { mediaType: { regex: "/image/" } } }
      ) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO]
              )
            }
          }
        }
      }
    }
  `);

  const match = useMemo(
    () => data.images.edges.find(({ node }) => src === node.relativePath),
    [data, src]
  );

  if (!match) return null;

  const { node: { childImageSharp, publicURL, extension } = {} } = match;

  if (extension === 'svg' || !childImageSharp) {
    return <img src={publicURL} {...props} />;
  }

  return (
    <GatsbyImageImageExtended
      image={childImageSharp.gatsbyImageData}
      alt={props.alt || ''}
      {...props}
    />
  );
}
