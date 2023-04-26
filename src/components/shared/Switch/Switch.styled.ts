import styled from 'styled-components';

import { theme } from '~/styles';

export const SwitchWrapper = styled.div`
  display: flex;
`;

export const SwitchFirstContent = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 15px;
  border: 1.5px solid #eff0f0;
  background: ${({ active }) => (active ? '#F0F1F2' : 'white')};
  border-bottom-left-radius: ${theme.borderRadius};
  border-top-left-radius: ${theme.borderRadius};
`;

export const SwitchSecondContent = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 15px;
  border: 1.5px solid #eff0f0;
  background: ${({ active }) => (active ? '#F0F1F2' : 'white')};
  border-bottom-right-radius: ${theme.borderRadius};
  border-top-right-radius: ${theme.borderRadius};
`;
