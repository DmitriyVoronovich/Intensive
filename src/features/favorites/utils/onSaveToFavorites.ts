import { getUserFromLS } from '../../../shared';
import { GameResultType } from '../../../types';
import { getFavorites } from './getFavorites.ts';

export const onSaveToFavorites = (game: GameResultType) => {
  const user = getUserFromLS();
  const currentFavorites = getFavorites();

  const updatedFavorites = [...currentFavorites, game];
  localStorage.setItem(user.username, JSON.stringify(updatedFavorites));
};
