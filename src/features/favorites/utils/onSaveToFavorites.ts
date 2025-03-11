import {getUserFromLS} from "../../../shared";
import {GameDetails} from "../../../types";
import {getFavorites} from "./getFavorites.ts";

export const onSaveToFavorites = (game: GameDetails) => {
    const user = getUserFromLS();
    const currentFavorites = getFavorites();

    const updatedFavorites = [...currentFavorites, game];
    localStorage.setItem(user.username, JSON.stringify(updatedFavorites));
};