import { configureStore } from '@reduxjs/toolkit';
import {gameSlice} from "../../entities/game";
import {platformSlice} from "../../entities/platform";
import {genreSlice} from "../../entities/genre";
import {userSlice} from "../../entities/user";

const store = configureStore({
  reducer: {
    games: gameSlice.reducer,
    platforms: platformSlice.reducer,
    genres: genreSlice.reducer,
    user: userSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;