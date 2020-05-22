import styled from 'styled-components';

const Button = styled.button`
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary3};
  border-radius: 4px;
  padding: 8px 12px;
  color: ${({ theme }) => theme.colors.light2};
  cursor: pointer;
  font-family: 'Kalpurush', 'PT Serif', serif;
`;

export default Button;
