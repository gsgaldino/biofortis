import styled, { keyframes } from 'styled-components';

import banner1 from '~/assets/banner1.jpg';
import banner2 from '~/assets/banner2.jpg';

const changeBanner = keyframes`
  0% {
    background-image: url(${banner1});
    background-position: 0px;
  }

  100% {
    background-image: url(${banner2});
    background-position: -100px;
  }
`;

export const Banner = styled.div`
  padding: 120px 0px;
  position: relative;

  &:after {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    background-size: calc(100% + 200px);
    animation: ${changeBanner} 20s infinite;
    animation-direction: alternate;
  }

  &:before {
    content: '';
    background: linear-gradient(77.39deg, rgba(30, 30, 28, 0.9) 1%, rgba(30, 30, 28, 0.72) 39.52%, rgba(30, 30, 28, 0) 86.85%);;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  @media screen and (max-width: 767px) {
    &:after {
      background-size: cover;
    }
  }
`;

export const Flex = styled.div`
  display: flex;

  & > div {
    width: 50%;
    z-index: 1;

    &:first-child {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: calc(var(--spacement-large) * 2);
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: var(--spacement-default);

    & > div {
      width: 100%;
    }
  }
`;
