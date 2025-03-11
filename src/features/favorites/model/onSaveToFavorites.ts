import {getUserFromLS} from "../../../shared";
import {GameDetails} from "../../../types";

export const onSaveToFavorites = (game: GameDetails) => {
    const user = getUserFromLS();
    const currentFavorites = getFavorites();

    const updatedFavorites = [...currentFavorites, game];
    localStorage.setItem(user.username, JSON.stringify(updatedFavorites));
};

export const onRemoveToFavorites = (game: GameDetails) => {
    const user = getUserFromLS();
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter((item: GameDetails) => item.id !== game.id);
    localStorage.setItem(user.username, JSON.stringify(updatedFavorites));
};

export const getFavorites = () => {
    const user = getUserFromLS();

    const favorites = localStorage.getItem(user.username);
    return favorites ? JSON.parse(favorites) : [];
};

export const clearFavorites = () => {
    const user = getUserFromLS();

    localStorage.removeItem(user.username);
};