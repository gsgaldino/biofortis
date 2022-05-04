import styled from 'styled-components';

export const Image = styled.div`
  max-width: 120px;
  margin: var(--spacement-default) auto var(--spacement-large) auto;

  & > img {
    max-width: 100%;
  }
`;

export const Title = styled.div`
  display: block;
  margin: var(--spacement-large) 0px var(--spacement-default) 0px;
`;
