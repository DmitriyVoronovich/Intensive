import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { getGameDetails } from '../api';
import { TGameDetails } from '../../../types';

type TGameDetailsState = {
  details: TGameDetails | null;
  error: string | null;
  loading: boolean;
};

const initialState: TGameDetailsState = {
  details: null,
  loading: true,
  error: null,
};

export const gameDetailsSlice = createSlice({
  name: 'gameDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGameDetails.fulfilled, (state, action) => {
        state.details = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addMatcher(isPending(getGameDetails), (state) => {
        state.loading = true;
      })
      .addMatcher(isRejected(getGameDetails), (state) => {
        state.loading = false;
        state.details = null;
      });
  },
});

