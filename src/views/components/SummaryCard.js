import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import CardArrow from '../assets/icons/card-arrow.svg';
import CardArrowOutlined from '../assets/icons/card-arrow-outlined.svg';

const Container = styled(Box)`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.dark1};
  color: ${({ theme }) => theme.colors.light1};
  border-radius: 4px;
  position: relative;
  padding: 32px;

  .card-arrow-top {
    position: absolute;
    top: 16px;
    left: 16px;
  }

  .card-arrow-bottom {
    position: absolute;
    bottom: 4px;
    right: 16px;
  }
`;

const SummaryCard = ({ language, children }) => {
  return (
    <Container>
      <span className="card-arrow-top">
        <CardArrow />
      </span>
      {children}
      <span className={`card-arrow-bottom color-${language}`}>
        <CardArrowOutlined />
      </span>
    </Container>
  );
};

export default SummaryCard;
