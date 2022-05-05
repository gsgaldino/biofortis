import styled from 'styled-components';

export const Footer = styled.footer`
  background: var(--light-gray);
  padding: var(--spacement-x-large) 0px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    &:first-child {
      gap: var(--spacement-x-large);
    }

    &:last-child {
      gap: var(--spacement-default);

      & p {
        font-size: 14px !important;
      }
    }

    & > img {
      max-width: 180px;
    }

    & ul {
      list-style: none;
      & > li {
        margin: var(--spacement-small) 0px;

        & > a:hover {
          text-decoration: var(--text-dark) underline;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: var(--spacement-x-large);

    & > div {
      padding: var(--spacement-default);

      & > img {
        max-width: 180px;
      }
    }
  }
`;

export const Address = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacement-small);

  & > img {
    margin-top: 4px;
  }
`;
