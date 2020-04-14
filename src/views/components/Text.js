import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color, space, typography, layout, position } from 'styled-system';

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  line-height: ${({ theme }) => theme.typography.h1.lineHeight};
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0;
  ${color};
  ${space};
  ${typography};
  ${layout};
  ${position};
`;
const H2 = styled.h2`
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  line-height: ${({ theme }) => theme.typography.h2.lineHeight};
  font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0;
  ${color};
  ${space};
  ${typography};
  ${layout};
  ${position};
`;
const H3 = styled.h3`
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  line-height: ${({ theme }) => theme.typography.h3.lineHeight};
  font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0;
  ${color};
  ${space};
  ${typography};
  ${layout};
  ${position};
`;
const H4 = styled.h4`
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  line-height: ${({ theme }) => theme.typography.h4.lineHeight};
  font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0;
  ${color};
  ${space};
  ${typography};
  ${layout};
  ${position};
`;
const H5 = styled.h5`
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  line-height: ${({ theme }) => theme.typography.h5.lineHeight};
  font-weight: ${({ theme }) => theme.typography.h5.fontWeight};
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0;
  ${color};
  ${space};
  ${typography};
  ${layout};
  ${position};
`;

const H6 = styled.h6`
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  line-height: ${({ theme }) => theme.typography.h6.lineHeight};
  font-weight: ${({ theme }) => theme.typography.h6.fontWeight};
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0;
  ${color};
  ${space};
  ${typography};
  ${layout};
  ${position};
`;

const P = styled.p`
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  line-height: ${({ theme }) => theme.typography.body.lineHeight};
  font-weight: ${({ theme }) => theme.typography.body.fontWeight};
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0;
  ${color};
  ${space};
  ${typography};
  ${layout};
  ${position};
`;

const Caption = styled.p`
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  line-height: ${({ theme }) => theme.typography.caption.lineHeight};
  font-weight: ${({ theme }) => theme.typography.caption.fontWeight};
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0;
  ${color};
  ${space};
  ${typography};
  ${layout};
  ${position};
`;

const RawHTML = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: flex;

    &::after {
      content: '';
      background: linear-gradient(
        90deg,
        rgba(151, 117, 250, 0.2) 32.44%,
        rgba(241, 243, 245, 0) 100.17%
      );
      height: 4px;
      position: relative;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: auto;
      flex-grow: 1;
      border-radius: 2px;
      margin-left: 0.5rem;
    }
  }
  h1 {
    &::after {
      margin-top: 2.788rem;
    }
  }
  h2 {
    &::after {
      margin-top: 2.074rem;
    }
  }
  h3 {
    &::after {
      margin-top: 1.728rem;
    }
  }
  h4 {
    &::after {
      margin-top: 1.44rem;
    }
  }
  h5 {
    &::after {
      margin-top: 1.2rem;
    }
  }
  h6 {
    &::after {
      margin-top: 1rem;
    }
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const Text = ({ variant, theme, children, html, ...props }) => {
  switch (variant) {
    case 'h1':
      return (
        <H1 theme={theme} {...props}>
          {children}
        </H1>
      );
    case 'h2':
      return (
        <H2 theme={theme} {...props}>
          {children}
        </H2>
      );
    case 'h3':
      return (
        <H3 theme={theme} {...props}>
          {children}
        </H3>
      );
    case 'h4':
      return (
        <H4 theme={theme} {...props}>
          {children}
        </H4>
      );
    case 'h5':
      return (
        <H5 theme={theme} {...props}>
          {children}
        </H5>
      );
    case 'h6':
      return (
        <H6 theme={theme} {...props}>
          {children}
        </H6>
      );
    case 'caption':
      return (
        <Caption theme={theme} {...props}>
          {children}
        </Caption>
      );
    case 'raw':
      return (
        <RawHTML
          theme={theme}
          dangerouslySetInnerHTML={{ __html: html }}
          {...props}
        />
      );
    default:
      return (
        <P theme={theme} {...props}>
          {children}
        </P>
      );
  }
};

Text.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.string,
};

export default Text;
