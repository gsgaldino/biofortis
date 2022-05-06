import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--spacement-large);
  border: var(--border-color);
  max-width: 270px;
  max-height: 300px;
  overflow: hidden;
  height: 300px;
  transition: box-shadow 0.2s ease-in-out, border 0.2s ease-in-out;
  cursor: default;

  & > div:first-child {
    height: 160px;
    overflow: hidden;
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    gap: var(--spacement-default);
    padding: 0px var(--spacement-large) var(--spacement-large) var(--spacement-large);
    height: 138px;

    & > div {
      height: 80px;
      overflow: hidden;
      position: relative;

      &:after {
        content: '';
        background: linear-gradient(to top, rgba(255, 255, 255, 0.5), transparent);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }

  & > img {
    max-width: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: 0px 18px 50px -10px rgba(0, 0, 0, 0.25);
    border-color: transparent;
    cursor: pointer;
  }
`;
