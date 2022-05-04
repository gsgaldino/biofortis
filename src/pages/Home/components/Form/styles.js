import styled from 'styled-components';

export const Container = styled.div`
  border: var(--border-color);
  display: flex;
  align-items: center;
  padding: var(--spacement-x-large);
  margin: calc(var(--spacement-large) * 2) 0px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: var(--spacement-default);
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: var(--spacement-x-large);
    padding: var(--spacement-default);
  }
`;

export const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: var(--spacement-default);

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: var(--spacement-default);

  & button {
    width 120px !important:
    position: relative;
  }
`;
