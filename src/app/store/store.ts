import { configureStore } from '@reduxjs/toolkit';
import { gameSlice } from '../../entities/game';
import {platformSlice} from '../../entities/platform';
import {genreSlice} from '../../entities/genre';

const store = configureStore({
  reducer: {
    games: gameSlice.reducer,
    platforms: platformSlice.reducer,
    genres: genreSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
