import React from 'react';

import { InputLogo } from '~/assets';

//styles
import * as S from './Search.styled';

interface Props {
  placeholder?: string;
}

const Search: React.FC<Props> = ({ placeholder }) => {
  return (
    <S.SearchWrapper>
      <S.SearchInput placeholder={placeholder} />
      <S.InputLogo>
        <InputLogo />
      </S.InputLogo>
    </S.SearchWrapper>
  );
};

export default Search;
