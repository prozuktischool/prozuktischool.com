import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled, { css } from 'styled-components';
import { space, layout, borders } from 'styled-system';

const ImageExtended = styled(GatsbyImage)`
  img {
    max-width: 100%;
    height: auto;

    ${({ alignment }) =>
      alignment === 'center' &&
      css`
        margin: auto;
        display: block;
      `};

    ${space};
    ${borders};
    ${layout};
  }
`;

export default function Image({ src, ...rest }) {
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
                layout: FIXED
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
    return <img src={publicURL} {...rest} />;
  }

  return (
    <ImageExtended
      image={childImageSharp.gatsbyImageData}
      alt={rest.alt || ''}
      {...rest}
    />
  );
}
