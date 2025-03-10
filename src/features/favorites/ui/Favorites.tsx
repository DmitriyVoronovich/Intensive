import {GameDetails} from "../../../types";
import {useEffect, useState} from "react";
import {clearFavorites, getFavorites} from "../model";
import {GameCard} from "../../game-card";
import css from './Favorites.module.css';
import {Button} from "antd";

export const Favorites = () => {

    const [favorites, setFavorites] = useState<GameDetails[]>([]);

    useEffect(() => {
        const favoritesList = getFavorites();
        setFavorites(favoritesList);
    }, []);

    const onClearList = () => {
        clearFavorites();
        setFavorites([]);
    };

    return (
        <div className={css.container}>
            {favorites.length !== 0 ? <>
                <div className={css.btnWrapper}>
                    <Button onClick={onClearList}>Удалить все из избранного</Button>
                </div>
                <div className={css.cardWrapper}>
                    {favorites?.map((item) => {
                        return (
                            <GameCard card={item} key={item.id}/>
                        )
                    })}
                </div>
            </> :
                <p className={css.description}>Список избранного пуст</p>
            }
        </div>
    );
};