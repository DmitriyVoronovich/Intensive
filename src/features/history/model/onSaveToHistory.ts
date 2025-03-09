import {QueryParamsType} from "../../../types";
import {STORAGE_KEYS} from "../../../shared";

export const onSaveToHistory = ({search, platforms, genres}: QueryParamsType) => {
    const currentHistory = getHistory();
    const newEntry = {
        id: Date.now(),
        query: {
            search,
            platforms,
            genres,
        },
        timestamp: new Date().toISOString()
    };
    const updatedHistory = [...currentHistory, newEntry];
    localStorage.setItem(STORAGE_KEYS.SEARCH_HISTORY, JSON.stringify(updatedHistory));
};

export const getHistory = () => {
    const history = localStorage.getItem(STORAGE_KEYS.SEARCH_HISTORY);
    return history ? JSON.parse(history) : [];
};

export const clearHistory = () => {
    localStorage.removeItem(STORAGE_KEYS.SEARCH_HISTORY);
};