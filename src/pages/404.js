import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'gatsby';
import { SEO, Text } from '../views/components';
import GlobalStyle from '../views/styles/GlobalStyles';
import { dark, light } from '../views/styles/themes';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 32px;

  .circle_filling,
  .outside_circle .outside_filling,
  .inner_circle .inner_filling {
    border-radius: 50%;
    position: absolute;
    background: #fff;
    width: 95%;
    padding-bottom: 95%;
    top: 2.5%;
    left: 2.5%;
  }

  .outside_filling {
    position: relative;
  }

  .compass_container {
    position: relative;
    width: 150px;
    height: 150px;
    margin: 20px 0;
  }

  .outside_circle {
    border-radius: 50%;
    position: absolute;
    background: ${({ theme }) => theme.colors.dark1};
    width: 100%;
    padding-bottom: 100%;
    top: 0;
    left: 0;
  }

  .inner_circle {
    border-radius: 50%;
    position: absolute;
    background: ${({ theme }) => theme.colors.dark1};
    color: ${({ theme }) => theme.colors.light2};
    width: 80%;
    padding-bottom: 80%;
    top: 10%;
    left: 10%;
  }

  .inner_circle .inner_filling {
    background: ${({ theme }) => theme.colors.primary3};
  }

  .top_point {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${({ theme }) => theme.colors.dark1};
    left: 50%;
    transform: translateX(-50%);
  }

  .bottom_point {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid ${({ theme }) => theme.colors.dark1};
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }

  .left_point {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid ${({ theme }) => theme.colors.dark1};
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  .right_point {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 6px solid ${({ theme }) => theme.colors.dark1};
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  .top_needle {
    width: 0;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 75px solid #462b17;
    position: absolute;
    left: 49px;
    bottom: 57px;
  }

  .top_needle .needle_inside {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 60px solid #f87a6a;
    position: absolute;
    bottom: 15px;
    right: -5px;
  }

  .bottom_needle {
    width: 0;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 75px solid #462b17;
    position: absolute;
    left: 49px;
    top: 57px;
  }

  .needle {
    width: 100%;
    height: 100%;
    -webkit-animation: search linear 2s infinite alternate;
    animation: search linear 2s infinite alternate;
    -webkit-transform-origin: center center;
    transform-origin: center center;
    position: absolute;
  }

  .inner_filling span {
    font-weight: bold;
    position: absolute;
    font-size: 14px;
  }

  .inner_filling span:nth-child(1) {
    top: 5px;
    left: calc(50% - 5px);
  }

  .inner_filling span:nth-child(2) {
    right: 8px;
    top: calc(50% - 12px);
  }

  .inner_filling span:nth-child(3) {
    bottom: -2px;
    left: calc(50% - 5px);
  }

  .inner_filling span:nth-child(4) {
    left: 5px;
    top: calc(50% - 12px);
  }

  @-webkit-keyframes search {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    50% {
      -webkit-transform: rotate(80deg);
      transform: rotate(80deg);
    }

    100% {
      -webkit-transform: rotate(-180deg);
      transform: rotate(-180deg);
    }
  }

  @keyframes search {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    50% {
      -webkit-transform: rotate(80deg);
      transform: rotate(80deg);
    }

    100% {
      -webkit-transform: rotate(-180deg);
      transform: rotate(-180deg);
    }
  }

  .error_404 {
    text-align: center;
  }

  .error_404 h3 {
    font-size: 16px;
    display: inline-block;
    background: red;
    padding: 4px 10px 0 10px;
    border-radius: 6px;
    color: #fff;
    margin-bottom: 20px;
  }

  .not_north {
    position: relative;
    top: 0px;
    text-align: center;
  }
`;

const FourOFour = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <SEO pageTitle="৪০৪ - মাইনকার চিপা" />
      <Container>
        <div className="error_404">
          <Text variant="h3">৪০৪ | মাইনকার চিপা</Text>
          <Text variant="h2">
            মনে হচ্ছে ভুল করে আপনি মাইনকার চিপায় চলে এসেছেন।
          </Text>
        </div>
        <div className="compass_container">
          <div className="outside_circle">
            <div className="center" />
            <div className="outside_filling">
              <div className="top_point" />
              <div className="bottom_point" />
              <div className="left_point" />
              <div className="right_point" />
            </div>
            <div className="inner_circle">
              <div className="inner_filling">
                <span>উ</span>
                <span>পূ</span>
                <span>দ</span>
                <span>প</span>
                <div className="needle">
                  <div className="top_needle">
                    <div className="needle_inside" />
                  </div>
                  <div className="bottom_needle" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Text className="not_north" variant="h2">
          সাইটে ফিরে যেতে
          <Link to="/">এখানে</Link>
          ক্লিক করুন।
        </Text>
      </Container>
    </ThemeProvider>
  );
};

export default FourOFour;
