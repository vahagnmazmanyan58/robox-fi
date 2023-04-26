import styled from 'styled-components';

import { theme } from '~/styles';

export const BannerCardWrapper = styled.div`
  max-width: 266px;
  width: 100%;
  box-shadow: 0px 4px 8px 0px #0000000d;
  padding: 36px 0 24px;
  border-radius: 20px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.palette.white};
`;

export const BannerCardTitle = styled.p`
  font-size: 13px;
  font-weight: 800;
  line-height: 18px;
  text-align: center;
  display: flex;
  color: ${theme.palette.fontGrey};
`;

export const BannerCardAmount = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

export const BannerAmount = styled.h3`
  font-size: 32px;
  line-height: 32px;
  font-weight: 800;
  color: ${theme.palette.lightBlack};
`;
export const BannerAmountCurrency = styled.h4`
  font-size: 24px;
  line-height: 24px;
  font-weight: 800;
  color: ${theme.palette.lightBlack};
`;
