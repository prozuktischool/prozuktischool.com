import styled, { css } from 'styled-components';

const Button = styled.button`
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.light2};
  color: ${({ theme }) => theme.colors.dark2};
  border-radius: 4px;
  padding: 10px 16px 8px 16px;
  cursor: pointer;
  font-family: 'Kalpurush', 'PT Serif', serif;
  transition: all ease-in-out 0.3s;
  position: relative;
  font-size: calc(14px + (18 - 14) * ((100vw - 400px) / (1600 - 400)));

  &:hover {
    background-color: ${({ theme }) => theme.colors.light1};
  }

  &:focus {
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 4px;
      border: 2px solid ${({ theme }) => theme.colors.primary3};
    }
  }

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      background-color: ${({ theme }) => theme.colors.primary3};
      color: ${({ theme }) => theme.colors.light2};

      &:hover {
        background-color: ${({ theme }) => theme.colors.primary2};
      }

      &:focus {
        &:after {
          border-color: ${({ theme }) => theme.colors.light2};
        }
      }
    `};
`;

export default Button;
