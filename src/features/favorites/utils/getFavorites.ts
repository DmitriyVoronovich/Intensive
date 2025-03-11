import {getUserFromLS} from "../../../shared";

export const getFavorites = () => {
    const user = getUserFromLS();

    const favorites = localStorage.getItem(user.username);
    return favorites ? JSON.parse(favorites) : [];
};