import styled from 'styled-components';

import { theme } from '~/styles';

export const CollectionsWrapper = styled.div`
  width: 100%;
  padding: 33px 24px;
`;

export const CollectionsHeaderPanel = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CollectionsHeaderPanelTitle = styled.h3`
  font-size: 24px;
  font-weight: 800;
  line-height: 28px;
  color: ${theme.palette.black};
`;

export const CollectionsContainer = styled.div<{ loading: boolean }>`
  margin-top: ${({ loading }) => (!loading ? '200px' : '0')};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
