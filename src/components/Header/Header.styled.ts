import styled from 'styled-components';

import { theme } from '~/styles';

import { Button } from '../shared';

export const HeaderWrapper = styled.div`
  padding: 20px 24px;
  width: 100%;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderLeftPanel = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  align-items: center;
`;

export const HeaderRightPanel = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  justify-content: flex-end;
`;

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const NavMenu = styled.div``;

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 16px;
`;

export const NavItem = styled.li<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? theme.palette.bgGreen : theme.palette.bgGrey)};
  padding: 10px 16px;
  border-radius: ${theme.borderRadius};

  a {
    color: ${({ active }) => (active ? theme.palette.fontGreen : theme.palette.mainBlack)};
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  color: ${theme.palette.mainBlack};
`;

export const ChangeTheme = styled.button`
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.borderRadius};
`;

export const ConnectWalletButton = styled(Button)`
  max-width: 153px;
  width: 100%;
  border-radius: ${theme.borderRadius};
  color: ${theme.palette.mainBlack};
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;
