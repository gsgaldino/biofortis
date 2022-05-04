import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > nav {
    display: flex;
    gap: calc(var(--spacement-large) * 2);
  }

  @media screen and (max-width: 767px) {
    padding: 0px var(--spacement-default);

    & > nav {
      display: none;
    }
  }
`;

export const Container = styled.div`
  padding: var(--spacement-default) 0px;
`;

export const Hamburger = styled.div`
  display: none;

  & > svg {
    width: 36px;
    height: 36px;
  }

  @media screen and (max-width: 767px) {
    display: block;
  }
`;

export const NavMobile = styled.nav`
  display: flex;
  flex-direction: column;
  gap: var(--spacement-x-large);
  margin-top: calc(var(--spacement-large) * 3);
  align-items: flex-start;
`;
