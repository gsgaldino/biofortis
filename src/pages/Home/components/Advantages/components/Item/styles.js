import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacement-default);
  max-width: 180px;
  margin: var(--spacement-default) 0px;
  text-align: center;
  align-items: center;
`;

export const Image = styled.div`
  width: 44px;
  height: 44px;

  & > img {
    width: 100%;
  }
`;
