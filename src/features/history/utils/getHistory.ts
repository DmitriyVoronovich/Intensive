import {STORAGE_KEYS} from "../../../shared";

export const getHistory = () => {
    const history = localStorage.getItem(STORAGE_KEYS.SEARCH_HISTORY);
    return history ? JSON.parse(history) : [];
};