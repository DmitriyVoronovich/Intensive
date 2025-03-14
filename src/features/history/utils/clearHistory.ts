import { STORAGE_KEYS } from '../../../shared';

export const clearHistory = () => {
  localStorage.removeItem(STORAGE_KEYS.SEARCH_HISTORY);
};
