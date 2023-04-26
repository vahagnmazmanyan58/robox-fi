import { noop } from 'lodash';
import React, { ReactNode } from 'react';

//styles
import * as S from './Switch.styled';

interface SwitchProps {
  firstContent: ReactNode;
  secondContent: ReactNode;
  activeFirstElement: boolean;
  handleSwitchToggle: typeof noop;
}

const Switch: React.FC<SwitchProps> = ({
  firstContent,
  secondContent,
  activeFirstElement,
  handleSwitchToggle,
}) => {
  return (
    <S.SwitchWrapper>
      <S.SwitchFirstContent onClick={() => handleSwitchToggle(true)} active={activeFirstElement}>
        {firstContent}
      </S.SwitchFirstContent>
      <S.SwitchSecondContent onClick={() => handleSwitchToggle(false)} active={!activeFirstElement}>
        {secondContent}
      </S.SwitchSecondContent>
    </S.SwitchWrapper>
  );
};

export default Switch;
