import styled, { keyframes } from 'styled-components';

const zoomIn = keyframes`
  from {
    background-size: 100%;
  }

  to {
    background-size: 110%;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }

  96% {
    opacity: 1;
  }

  102% {
    opacity: 0;
  }
`;

export const Banner = styled.div`
  padding: 120px 0px;
  position: relative;
  margin-top: 66px;

  &:after {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    background: ${({ background }) => (`url(${background})`)};
    animation: ${zoomIn} 30s infinite, ${fadeOut} 30s infinite;
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
