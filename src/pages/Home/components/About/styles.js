import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  align-items: center;
  padding: var(--spacement-x-large) 0px;

  & > div {
    width: 50%;

    &:first-child {
      display: flex;
      flex-direction: column;
      gap: var(--spacement-default);
    }

    &:last-child {
      display: grid;
      place-items: center;
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: var(--spacement-x-large) var(--spacement-default);

    & > div {
      width: 100%;
      margin: var(--spacement-large) 0px;
    }
  }
`;
