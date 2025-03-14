import { GameResultType} from "../../../types";
import {getUserFromLS} from "../../../shared";
import {getFavorites} from "./getFavorites.ts";

export const onRemoveToFavorites = (game: GameResultType) => {
    const user = getUserFromLS();
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter((item: GameResultType) => item.id !== game.id);
    localStorage.setItem(user.username, JSON.stringify(updatedFavorites));
};