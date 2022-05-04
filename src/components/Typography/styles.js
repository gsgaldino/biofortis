import styled, { css } from 'styled-components';

const BodyDefault = css`
  &.body-default {
    font-size: var(--body-default-font-size);
    line-height: 1.4em;
  }
`;

const h1Normal = css`
  &.h1-normal {
    font-size: 1.8em;
  }
`;

const h1Heavy = css`
  &.h1-heavy {
    font-size: 1.8em;
    font-weight: bold;
  }
`;

const h2Normal = css`
  &.h2-normal {
    font-size: 1.6em;
  }
`;

const h2Heavy = css`
  &.h2-heavy {
    font-size: 1.6em;
    font-weight: bold;
  }
`;

const h3Normal = css`
  &.h3-normal {
    font-size: 1.2em;
  }
`;

const h3Heavy = css`
  &.h3-heavy {
    font-size: 1.2em !important;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const h4Normal = css`
  &.h4-normal {
    font-size: 1em !important;
  }
`;

const h4Heavy = css`
  &.h4-heavy {
    font-size: 1em !important;
    font-weight: bold;
  }
`;

export const Container = styled.div.attrs((props) => ({
  as: props.as,
}))`
  font-family: var(--font-family);
  line-height: 1.2em;

  &.light {
    color: var(--text-light);
  }

  &.dark {
    color: var(--text-dark);
  }

  &.primary {
    color: var(--primary-1);
  }

  ${BodyDefault}
  ${h1Normal}
  ${h1Heavy}
  ${h2Normal}
  ${h2Heavy}
  ${h3Normal}
  ${h3Heavy}
  ${h4Normal}
  ${h4Heavy}
`;
