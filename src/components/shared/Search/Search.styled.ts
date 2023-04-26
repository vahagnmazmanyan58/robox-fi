import styled from 'styled-components';

import { theme } from '~/styles';

export const SearchWrapper = styled.div`
  position: relative;
  max-width: 304px;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: ${theme.palette.mainBlack};
  border: 1px solid ${theme.palette.fontGrey};
  border-radius: 10px;
  padding-left: 40px;

  &::placeholder {
    color: ${theme.palette.fontGrey};
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 16px;
  }
`;

export const InputLogo = styled.div`
  position: absolute;
  top: 19%;
  left: 4%;
  width: fit-content;
`;
