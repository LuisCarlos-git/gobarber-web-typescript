import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  &:focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased !important
  }

  body, input, button {
    font: 14px  Roboto, sans-serif;
  }

  html,body, #root {
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
