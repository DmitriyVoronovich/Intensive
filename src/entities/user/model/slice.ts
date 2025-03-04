import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../types';

type InitialStateType = {
  user?: User;
  auth: boolean;
};

const initialState: InitialStateType = {
  user: undefined,
  auth: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.auth = true;
    },
    logoutUser(state) {
      state.user = undefined;
      state.auth = false;
    },
  },
});

export { userSlice };
export const { setUser, logoutUser } = userSlice.actions;
