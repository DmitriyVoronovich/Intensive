import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../types';

type InitialStateType = {
  user?: User;
  aut: boolean;
};

const initialState: InitialStateType = {
  user: undefined,
  aut: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.aut = true;
    },
    logoutUser(state) {
      state.user = undefined;
      state.aut = false;
    },
  },
});

export { userSlice };
export const { setUser, logoutUser } = userSlice.actions;
