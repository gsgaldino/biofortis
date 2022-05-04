import styled from 'styled-components';
import banner from '~/assets/banner.jpg';

export const Banner = styled.div`
  background: url(${banner}) center no-repeat;
  background-size: 100%;
  padding: 120px 0px;
  position: relative;

  &:after {
    content: '';
    top: 0;
    left: 0;
    background: linear-gradient(77.39deg, rgba(30, 30, 28, 0.9) 1%, rgba(30, 30, 28, 0.72) 39.52%, rgba(30, 30, 28, 0) 86.85%);;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
  }

  @media screen and (max-width: 767px) {
    background-size: cover;
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
      gap: 26px;
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
