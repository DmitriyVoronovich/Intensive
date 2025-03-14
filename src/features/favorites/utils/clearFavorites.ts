import { getUserFromLS } from '../../../shared';

export const clearFavorites = () => {
  const user = getUserFromLS();

  localStorage.removeItem(user.username);
};
