import React from 'react';

//styles
import * as S from './BannerCard.styled';

interface BannerCardProps {
  amount: string | number;
  title: string;
  currency?: string;
}

const BannerCard: React.FC<BannerCardProps> = ({ amount, title, currency }) => {
  return (
    <S.BannerCardWrapper>
      <S.BannerCardAmount>
        <S.BannerAmount>{amount}</S.BannerAmount>
        <S.BannerAmountCurrency>{currency}</S.BannerAmountCurrency>
      </S.BannerCardAmount>
      <S.BannerCardTitle>{title}</S.BannerCardTitle>
    </S.BannerCardWrapper>
  );
};

export default BannerCard;
