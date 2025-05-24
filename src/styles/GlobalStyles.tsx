import { Global, css } from '@emotion/react';

const globalStyles = css`
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #fff;
    color: #353c49;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export function GlobalStyles() {
  return <Global styles={globalStyles} />;
}
