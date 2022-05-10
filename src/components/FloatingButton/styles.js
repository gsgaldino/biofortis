import styled from 'styled-components';

export const Floating = styled.div`
  width: 70px;
  height: 70px;
  position: fixed;
  bottom: var(--spacement-large);
  right: var(--spacement-large);
  cursor: pointer;
  padding: 13px;
  display: grid;
  place-items: center;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    z-index: -1;

    background: rgba( 255, 255, 255, 0.6 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 7.5px );
    -webkit-backdrop-filter: blur( 7.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  }

  & img {
    max-width: 100%;
  }
`;
