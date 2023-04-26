import { combineReducers } from '@reduxjs/toolkit';

import collections from './collections/slice';

export const slices = combineReducers({
  collections,
});

export * from './collections';
