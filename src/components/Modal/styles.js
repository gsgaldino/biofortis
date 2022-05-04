import styled from 'styled-components';

export const Title = styled.div`
  margin: var(--spacement-small) 0px;
`;

export const Form = styled.form`
  backgroud: red;
  margin-top: var(--spacement-x-large);
  display: flex;
  flex-direction: column;
  gap: var(--spacement-large);
  padding-bottom: calc(var(--spacement-large) * 2);

  & > .submit {
    display: flex;
  }
`;
