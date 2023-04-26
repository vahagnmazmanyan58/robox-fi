import { createSlice } from '@reduxjs/toolkit';

import { ICollection } from '~/types';

import { ReducerNames } from '../../types';
import * as collectionsThunks from './thunks';

type CollectionsState = {
  collections: ICollection[];
};

const initialState: CollectionsState = {
  collections: [],
};

const collectionsSlice = createSlice({
  name: ReducerNames.Collections,
  initialState,
  reducers: {
    resetQuestionsState() {
      return initialState;
    },
  },
  extraReducers: {
    [collectionsThunks.getCollections.fulfilled.type]: (
      state,
      { payload }: { payload: ICollection[] }
    ) => {
      state.collections = payload;
    },
  },
});

export const collectionsActions = {
  ...collectionsThunks,
  ...collectionsSlice.actions,
};

export default collectionsSlice.reducer;
