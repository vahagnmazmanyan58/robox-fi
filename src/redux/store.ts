import { configureStore } from '@reduxjs/toolkit';

import { slices } from './slices';

export const store = configureStore({
  reducer: slices,
});
