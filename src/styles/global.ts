import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&display=swap');
    font-family: 'Manrope', sans-serif;
  }

  body {
    min-height: 100vh;
    position: relative;
    font-family: 'Manrope', sans-serif;
  }

  button {
    cursor: pointer;
    font-family: 'Manrope', sans-serif;

    :disabled {
      cursor: default;
    }
  }
`;
