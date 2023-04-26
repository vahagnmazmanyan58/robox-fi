import { store } from './store';

export enum ReducerNames {
  Collections = 'collections',
}

export type AppDispatch = typeof store.dispatch;

export type Store = typeof store;

export type RootState = ReturnType<typeof store.getState>;
