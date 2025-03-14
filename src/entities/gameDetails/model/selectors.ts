import { RootState } from '../../../app';

export const selectGameDetails = (state: RootState) =>
  state.gameDetails.details;
export const selectGameDetailsLoading = (state: RootState) =>
  state.gameDetails.loading;
export const selectGameScreenshots = (state: RootState) =>
  state.gameDetails.screenshots;
