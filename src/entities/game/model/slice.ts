import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { getGames } from '../api';
import { GameResultType } from '../../../types';
import { getSearchGames } from '../api';

type InitialStateType = {
  games: GameResultType[] | [];
  loading: boolean;
};

const initialState: InitialStateType = {
  games: [],
  loading: false,
};

const setLoading = (state: InitialStateType, loading: boolean): void => {
  state.loading = loading;
};

const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGames.fulfilled, (state, action) => {
        state.games = action.payload.results;
        setLoading(state, false);
      })
      .addCase(getSearchGames.fulfilled, (state, action) => {
        state.games = action.payload.results;
        setLoading(state, false);
      })
      .addMatcher(isPending(getGames, getSearchGames), (state) => {
        setLoading(state, true);
      })
      .addMatcher(isRejected(getGames, getSearchGames), (state) => {
        setLoading(state, false);
      });
  },
});

export { gameSlice };
