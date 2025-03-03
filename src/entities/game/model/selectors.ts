import { RootState } from '../../../app';

export const selectGames = (state: RootState) => state.games.games;
export const selectGamesLoading = (state: RootState) => state.games.loading;
