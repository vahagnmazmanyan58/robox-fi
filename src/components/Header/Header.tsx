import React from 'react';

//assets
import { DarkModeLogo, Logo } from '~/assets';

//components
import { Search } from '../shared';
//styles
import * as S from './Header.styled';

const Header: React.FC = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <S.HeaderLeftPanel>
          <S.Link href="/">
            <Logo />
            <S.Title>Robox.Fi</S.Title>
          </S.Link>
          <S.NavMenu>
            <S.NavList>
              <S.NavItem active={true}>
                <a href="/trade">Trade</a>
              </S.NavItem>
              <S.NavItem>
                <a href="/lend">Lend</a>
              </S.NavItem>
              <S.NavItem>
                <a href="/leaderboards">Leaderboards</a>
              </S.NavItem>
              <S.NavItem>
                <a href="/about">About</a>
              </S.NavItem>
            </S.NavList>
          </S.NavMenu>
        </S.HeaderLeftPanel>
        <S.HeaderRightPanel>
          <Search placeholder="Search collections, NFTs" />
          <S.ChangeTheme>
            <DarkModeLogo />
          </S.ChangeTheme>
          <S.ConnectWalletButton>Connect Wallet</S.ConnectWalletButton>
        </S.HeaderRightPanel>
      </S.HeaderContent>
    </S.HeaderWrapper>
  );
};

export default Header;
