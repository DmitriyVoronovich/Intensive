import {STORAGE_KEYS} from "../constant";

export const getUserFromLS = () => {
    const storedUser = localStorage.getItem(STORAGE_KEYS.USER);
    if (storedUser) {
        return JSON.parse(storedUser);
    } else {
        return null
    }
};