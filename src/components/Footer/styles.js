import styled from 'styled-components';

export const Footer = styled.footer`
  background: var(--primary-1);
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
      gap: var(--spacement-small);
    }

    & > img {
      max-width: 180px;
    }

    & ul {
      list-style: none;
      & > li {
        margin: var(--spacement-small) 0px;

        & > a:hover {
          text-decoration: var(--absolute-white) underline;
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
  gap: var(--spacement-small);
`;
