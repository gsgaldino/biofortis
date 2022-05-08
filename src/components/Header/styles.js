import styled, { css } from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(var(--spacement-small) * 2) 0px;

  & nav {
    display: flex;
    gap: calc(var(--spacement-large) * 2);
  }

  @media screen and (max-width: 767px) {
    padding: 0px var(--spacement-default);

    & nav {
      display: none;
    }
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    justify-content: flex-end;
    gap: var(--spacement-large);
    margin: var(--spacement-small);
  }
`;

const Instagram = css`
  &.instagram {
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    border-radius: 50%;

    & svg {
      fill: var(--absolute-white);
    }
  }
`;

const Facebook = css`
  &.facebook {
    background: #3b5998;
    border-radius: 6px;

    & svg {
      fill: var(--absolute-white);
    }
  }
`;

const Linkedin = css`
  &.linkedin {
    background: #0e76a8;
    border-radius: 6px;

    & svg {
      fill: var(--absolute-white);
    }
  }
`;

export const Icon = styled.div`
  cursor: pointer;
  & svg {
    width: 26px;
    height: 26px;
  }

  ${Instagram}
  ${Facebook}
  ${Linkedin}
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
