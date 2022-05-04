import styled from 'styled-components';

export const Container = styled.section`
  padding: var(--spacement-x-large) 0px;
`;

export const Title = styled.div`
  text-align: center;
  margin: calc(var(--spacement-large) * 2) 0px;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    justify-content: center;
    gap: var(--spacement-x-large);
  }
`;
