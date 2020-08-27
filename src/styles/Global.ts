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
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    color: #fff;
    -webkit-font-smoothing: antialiased !important
  }

  body, input, button {
    font: 16px  'Roboto Slab', sans-serif;
  }

  html,body, #root {
    height: 100%;
    background: #312e38
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
