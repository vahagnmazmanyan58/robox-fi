import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    gradient: string;
    borderRadius: string;
    palette: {
      black: string;
      white: string;
      lightBlack: string;
      mediumBlack: string;
      mainBlack: string;
      fontGrey: string;
      bgGrey: string;
      fontGreen: string;
      bgGreen: string;
      bgLightGreen: string;
    };
  }
}
