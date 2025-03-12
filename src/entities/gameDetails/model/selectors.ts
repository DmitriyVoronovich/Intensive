import { RootState } from '../../../app';

export const selectGameDetalis = (state: RootState) => state.gameDetails.details;
export const selectGameDetalisLoading = (state: RootState) => state.gameDetails.loading;
export const selectGameScreenshots = (state: RootState) => state.gameDetails.screenshots;
