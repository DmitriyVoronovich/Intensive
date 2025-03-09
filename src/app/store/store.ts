import { configureStore } from '@reduxjs/toolkit';
import { gameSlice } from '../../entities';
import { platformSlice } from '../../entities';
import { genreSlice } from '../../entities';
import { userSlice } from '../../entities';
import {errorMiddleware} from "./errorMiddleware.ts";

const store = configureStore({
  reducer: {
    games: gameSlice.reducer,
    platforms: platformSlice.reducer,
    genres: genreSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(errorMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
