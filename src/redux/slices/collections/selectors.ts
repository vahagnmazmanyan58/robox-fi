import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../types';

export const selectCollectionsState = (state: RootState) => state.collections;

export const selectCollections = createSelector(
  selectCollectionsState,
  (state) => state.collections
);
