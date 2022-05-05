import styled from 'styled-components';

export const Background = styled.section`
  padding: calc(var(--spacement-large) * 2) 0px;
  margin: calc(var(--spacement-x-large) * 2) 0px;
  position: relative;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    opacity: .02;
  }

  @media screen and (max-width: 767px) {
    padding: var(--spacement-large);
  }
`;

export const Title = styled.div`
  margin: 0px 0px calc(var(--spacement-large) * 2) 0px;
  text-align: center;

  & span {
    color: var(--primary-1);
  }

  @media screen and (max-width: 767px) {
    margin-top: var(--spacement-large);
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: var(--spacement-x-large);
  }
`;
