import styled from 'styled-components';

export const Title = styled.div`
  display: block;
  margin: var(--spacement-large) 0px var(--spacement-default) 0px;
`;

export const Background = styled.div`
  position: relative;
  padding-bottom: var(--spacement-large);

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ img }) => (`url('${img}')`)};
    z-index: -2;
    opacity: .05;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--primary-1);
    opacity: .1;
  }

`;

export const Content = styled.div`
  & li {
    margin: var(--spacement-default) var(--spacement-large);
  }

  & strong {
    color: var(--primary-1);
  }
`;
