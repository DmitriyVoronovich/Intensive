import { RootState } from '../../../app';

export const selectUser = (state: RootState) => state.user.user;
