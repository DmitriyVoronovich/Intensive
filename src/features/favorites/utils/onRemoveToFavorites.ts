import {GameDetails} from "../../../types";
import {getUserFromLS} from "../../../shared";
import {getFavorites} from "./getFavorites.ts";

export const onRemoveToFavorites = (game: GameDetails) => {
    const user = getUserFromLS();
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter((item: GameDetails) => item.id !== game.id);
    localStorage.setItem(user.username, JSON.stringify(updatedFavorites));
};