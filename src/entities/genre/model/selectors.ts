import { RootState } from '../../../app';

export const selectGenres = (state: RootState) => state.genres.genres;
export const selectGenresLoading = (state: RootState) => state.genres.loading;
