import styled from 'styled-components';

import { theme } from '~/styles';

export const CollectionsTableWrapper = styled.div`
  width: 100%;
  margin-top: 25px;
`;

export const CollectionTable = styled.table`
  width: 100%;
  border: 1.5px solid #eff0f0;
  border-radius: 16px;
`;

export const CollectionTableHead = styled.thead`
  width: 100%;
  display: grid;
  margin-bottom: 6px;
`;

export const CollectionTableTr = styled.tr`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 2fr 2fr 2fr 2fr 2fr;
`;

export const CollectionTableTh = styled.th`
  text-align: left;
  width: 100%;
  color: ${theme.palette.fontGrey};
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
`;

export const CollectionTableTd = styled.td`
  text-align: left;
  width: 100%;
  color: ${theme.palette.mainBlack};
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  border-bottom: 1.5px solid #eff0f0;
  height: 80px;
  display: flex;
  align-items: center;
  padding-left: 24px;

  img {
    width: 48px;
    height: 48px;
  }

  & > span {
    font-size: 13px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.04em;
    text-align: left;
    margin-top: 3px;
    margin-left: 3px;
  }

  p {
    margin-left: 11px;
  }

  button {
    padding: 12px 16px;
    background-color: ${theme.palette.bgGreen};
    border-radius: ${theme.borderRadius};
    color: ${theme.palette.fontGreen};
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
  }
`;

export const CollectionVolPercentage = styled.span`
  font-weight: 600;
  font-size: 16px !important;
  line-height: 18px;
  color: ${theme.palette.fontGreen};
`;
