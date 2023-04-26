import React from 'react';

//styles
import * as S from './Spinner.styled';

const Spinner: React.FC = () => {
  return (
    <S.StyledSpinner>
      <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
    </S.StyledSpinner>
  );
};

export default Spinner;
