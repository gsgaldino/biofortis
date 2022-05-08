import styled from 'styled-components';

export const Footer = styled.footer`
  background: var(--light-gray);
  padding: var(--spacement-x-large) 0px;
`;

export const Logo = styled.div`
  padding: var(--spacement-default);
`;

export const Flex = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: calc(var(--spacement-x-large) * 8);

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: var(--spacement-x-large) 0px;

    &:first-child {
      gap: var(--spacement-small);
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
        margin-bottom: var(--spacement-large);

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
  position: relative;

  & > img {
    margin-top: 4px;
    position: absolute;
    top: 0px;
    left: -20px;
  }
`;
