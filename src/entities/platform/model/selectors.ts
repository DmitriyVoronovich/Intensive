import { RootState } from '../../../app';

export const selectPlatforms = (state: RootState) => state.platforms.platforms;
export const selectPlatformsLoading = (state: RootState) =>
  state.platforms.loading;
