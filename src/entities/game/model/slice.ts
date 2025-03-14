import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { getGames, getSearchGames } from '../api';
import { GameResultType, QueryParamsType } from '../../../types';

type InitialStateType = {
  games: GameResultType[] | [];
  loading: boolean;
  queryParams: QueryParamsType;
};

const initialState: InitialStateType = {
  games: [],
  loading: false,
  queryParams: {} as QueryParamsType,
};

const setLoading = (state: InitialStateType, loading: boolean): void => {
  state.loading = loading;
};

const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setQueryParams(state, action) {
      state.queryParams = action.payload;
    },
    setClearSearch(state) {
      state.queryParams = {};
      state.games = [];
    },
  },
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
export const { setQueryParams, setClearSearch } = gameSlice.actions;
