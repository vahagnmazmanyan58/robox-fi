import React from 'react';

//components
import { BannerCard, Collections, Header } from '~/components';
//mocks
import bannerCardData from '~/mocks/bannerCardData.json';

//styles
import * as S from './Main.styled';

const Main: React.FC = () => {
  return (
    <S.MainWrapper>
      <Header />
      <S.MainBanner>
        <S.MainBannerTitle>
          Buy your favorite NFTs with <span>leverage</span>
        </S.MainBannerTitle>
        <S.MainBannerCards>
          {bannerCardData.map((item) => (
            <BannerCard
              key={item.id}
              amount={item.amount}
              currency={item.currency}
              title={item.title}
            />
          ))}
        </S.MainBannerCards>
      </S.MainBanner>
      <Collections />
    </S.MainWrapper>
  );
};
export default Main;
