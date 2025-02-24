import { configureStore } from '@reduxjs/toolkit';
import {gameSlice} from "../../entities/game";

const store = configureStore({
  reducer: {
    game: gameSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
