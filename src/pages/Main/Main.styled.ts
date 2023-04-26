import styled from 'styled-components';

import { theme } from '~/styles';

export const MainWrapper = styled.div`
  width: 100%;
`;

export const MainBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.palette.bgLightGreen};
  padding: 48px 24px;
  gap: 32px;
`;

export const MainBannerCards = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  background-color: transparent;
  justify-content: center;
`;

export const MainBannerTitle = styled.h1`
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;

  & > span {
    background: linear-gradient(88.82deg, #4bab29 -3.54%, #4ae613 124.94%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
