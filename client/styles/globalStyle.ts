import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  input {
    border: none;
    background: none;
    padding: 0;
    margin: 0;
  }
`
