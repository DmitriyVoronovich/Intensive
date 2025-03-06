import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { getGameDetails } from '../api';
import { TGameDetails } from '../../../types';

type GameDetailsState = {
  details?: TGameDetails;
  error?: string;
  loading: boolean;
};

const initialState: GameDetailsState = {
  loading: true,
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
        state.error = undefined;
      })
      .addMatcher(isPending(getGameDetails), (state) => {
        state.loading = true;
      })
      .addMatcher(isRejected(getGameDetails), (state) => {
        state.loading = false;
        state.details = undefined;
      });
  },
});

