import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body,
  input,
  button,
  textarea {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  body {
    background-color: #43566a;
  }

  main {
    width: 100%;
    max-width: 1400px;
    margin: 20px auto;
  }
`;
