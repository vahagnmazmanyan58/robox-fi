import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { CollectionsApiUrl } from '~/constants';

import { CollectionsActionPrefixes } from './constants';

export const getCollections = createAsyncThunk(
  CollectionsActionPrefixes.GetCollections,
  async () => {
    const { data } = await axios.get(CollectionsApiUrl, {
      headers: {
        apikey: 'test123',
      },
    });

    return data.collection;
  }
);
