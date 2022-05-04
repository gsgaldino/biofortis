import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacement-large);
  padding: var(--spacement-x-large);
  border: var(--border-color);
  max-width: 270px;
  transition: box-shadow 0.2s ease-in-out, border 0.2s ease-in-out;
  cursor: default;

  & > img {
    max-width: 100%;
  }

  &:hover {
    box-shadow: 0px 18px 50px -10px rgba(0, 0, 0, 0.25);
    border-color: transparent;
    cursor: pointer;
  }
`;
